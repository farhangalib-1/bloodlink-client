"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Activity,
  AlertCircle,
  Check,
  CheckCircle2,
  Clock3,
  Droplet,
  Eye,
  FileText,
  LoaderCircle,
  Mail,
  MapPin,
  Phone,
  RefreshCw,
  Search,
  ShieldCheck,
  UserRound,
  X,
  XCircle,
} from "lucide-react";

const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"
).replace(/\/$/, "");

const FILTERS = [
  { value: "all", label: "All Requests" },
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "denied", label: "Denied" },
];

function formatDate(value) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function statusClasses(status) {
  if (status === "approved") return "bg-green-50 text-green-700";
  if (status === "denied") return "bg-red-50 text-red-600";
  return "bg-amber-50 text-amber-700";
}

function StatusBadge({ status }) {
  const Icon = status === "approved" ? CheckCircle2 : status === "denied" ? XCircle : Clock3;
  const label = status ? status.charAt(0).toUpperCase() + status.slice(1) : "Pending";
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold ${statusClasses(status)}`}>
      <Icon size={13} />
      {label}
    </span>
  );
}

function DetailItem({ icon: Icon, label, value }) {
  return (
    <div className="flex min-w-0 gap-3">
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-500">
        <Icon size={17} />
      </div>
      <div className="min-w-0">
        <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">{label}</p>
        <p className="mt-1 break-words text-sm font-medium text-[#1f2937]">{value || "—"}</p>
      </div>
    </div>
  );
}

export default function DonationRequestsPage() {
  const [requests, setRequests] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [actionError, setActionError] = useState("");
  const [actionLoadingId, setActionLoadingId] = useState("");

  const fetchRequests = useCallback(async () => {
    setLoading(true);
    setLoadError("");
    try {
      const response = await fetch(`${API_BASE_URL}/donation-requests`, {
        cache: "no-store",
      });
      const data = await response.json().catch(() => []);
      if (!response.ok) {
        throw new Error(data.message || "Unable to load donation requests.");
      }
      if (!Array.isArray(data)) {
        throw new Error("The server returned an unexpected response.");
      }
      setRequests(data);
      setSelectedRequest((current) =>
        current ? data.find((item) => item._id === current._id) || null : null
      );
    } catch (error) {
      setLoadError(
        error.message || "Could not connect to the BloodLink server."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  const counts = useMemo(
    () => ({
      all: requests.length,
      pending: requests.filter((item) => item.status === "pending").length,
      approved: requests.filter((item) => item.status === "approved").length,
      denied: requests.filter((item) => item.status === "denied").length,
    }),
    [requests]
  );

  const filteredRequests = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return requests.filter((request) => {
      const matchesFilter =
        activeFilter === "all" || request.status === activeFilter;
      const matchesSearch =
        !query ||
        [request.name, request.email, request.phone, request.bloodType, request.address]
          .filter(Boolean)
          .some((value) => String(value).toLowerCase().includes(query));
      return matchesFilter && matchesSearch;
    });
  }, [requests, activeFilter, searchTerm]);

  const updateStatus = async (request, status) => {
    if (!request?._id || actionLoadingId) return;
    setActionLoadingId(request._id);
    setActionError("");
    try {
      const response = await fetch(
        `${API_BASE_URL}/donation-requests/${request._id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status }),
        }
      );
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.message || "Could not update this application.");
      }
      const updated = data.request || { ...request, status, reviewedAt: new Date().toISOString() };
      setRequests((current) =>
        current.map((item) => (item._id === request._id ? updated : item))
      );
      setSelectedRequest((current) =>
        current?._id === request._id ? updated : current
      );
    } catch (error) {
      setActionError(error.message || "Could not update the application.");
    } finally {
      setActionLoadingId("");
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] px-5 py-7 sm:px-8 sm:py-8">
      <div className="mx-auto max-w-[1500px]">
        <section className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[1.5px] text-[#e9232b]">
              <Droplet size={15} /> BloodLink Administration
            </div>
            <h2 className="text-[26px] font-semibold tracking-[-0.5px] text-[#111827]">
              Donation Requests
            </h2>
            <p className="mt-1.5 text-sm text-[#64748b]">
              Review donor applications and manage their approval status.
            </p>
          </div>
          <button
            type="button"
            onClick={fetchRequests}
            disabled={loading}
            className="inline-flex h-11 items-center justify-center gap-2 self-start rounded-lg border border-gray-200 bg-white px-4 text-sm font-semibold text-[#334155] shadow-sm transition hover:border-red-200 hover:text-[#e9232b] disabled:cursor-not-allowed disabled:opacity-60 sm:self-auto"
          >
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
        </section>

        <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { label: "Total Applications", value: counts.all, icon: FileText, iconBg: "bg-blue-50", iconColor: "text-blue-600" },
            { label: "Pending Review", value: counts.pending, icon: Clock3, iconBg: "bg-amber-50", iconColor: "text-amber-600" },
            { label: "Approved", value: counts.approved, icon: CheckCircle2, iconBg: "bg-green-50", iconColor: "text-green-600" },
            { label: "Denied", value: counts.denied, icon: XCircle, iconBg: "bg-red-50", iconColor: "text-red-500" },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="rounded-xl border border-gray-200 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[12px] font-medium text-[#64748b]">{stat.label}</p>
                    <p className="mt-2 text-[29px] font-semibold leading-none tracking-tight text-[#111827]">{stat.value}</p>
                  </div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.iconBg}`}>
                    <Icon size={22} className={stat.iconColor} />
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
          <div className="border-b border-gray-100 p-5 sm:px-6 sm:py-5">
            <div className="flex flex-col justify-between gap-4 xl:flex-row xl:items-center">
              <div>
                <h3 className="text-[16px] font-semibold text-[#111827]">Applications</h3>
                <p className="mt-1 text-xs text-[#94a3b8]">{filteredRequests.length} result{filteredRequests.length === 1 ? "" : "s"}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative min-w-0 sm:w-[290px]">
                  <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search name, email, phone..."
                    className="h-10 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-red-400 focus:ring-2 focus:ring-red-50"
                  />
                </div>
                <div className="flex flex-wrap gap-1 rounded-lg bg-gray-50 p-1">
                  {FILTERS.map((filter) => (
                    <button
                      key={filter.value}
                      type="button"
                      onClick={() => setActiveFilter(filter.value)}
                      className={`rounded-md px-3 py-2 text-xs font-semibold transition ${
                        activeFilter === filter.value
                          ? "bg-white text-[#e9232b] shadow-sm"
                          : "text-[#64748b] hover:text-[#111827]"
                      }`}
                    >
                      {filter.label}
                      <span className="ml-1.5 text-[10px] opacity-70">{counts[filter.value]}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {actionError && (
            <div className="mx-5 mt-5 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 sm:mx-6">
              <AlertCircle size={17} className="mt-0.5 shrink-0" />
              {actionError}
            </div>
          )}

          {loading ? (
            <div className="flex min-h-[280px] flex-col items-center justify-center text-[#64748b]">
              <LoaderCircle size={30} className="animate-spin text-[#e9232b]" />
              <p className="mt-3 text-sm">Loading donation applications...</p>
            </div>
          ) : loadError ? (
            <div className="flex min-h-[280px] flex-col items-center justify-center px-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500"><AlertCircle size={23} /></div>
              <p className="mt-4 text-sm font-semibold text-[#111827]">Unable to load requests</p>
              <p className="mt-1 max-w-md text-sm text-[#64748b]">{loadError}</p>
              <button type="button" onClick={fetchRequests} className="mt-5 rounded-lg bg-[#e9232b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#d91f27]">Try again</button>
            </div>
          ) : filteredRequests.length === 0 ? (
            <div className="flex min-h-[260px] flex-col items-center justify-center px-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-50 text-gray-400"><FileText size={25} /></div>
              <p className="mt-4 text-sm font-semibold text-[#111827]">No donation requests found</p>
              <p className="mt-1 max-w-sm text-sm text-[#64748b]">{searchTerm ? "Try changing your search term or status filter." : "New donor applications will appear here after they are submitted."}</p>
            </div>
          ) : (
            <>
              <div className="hidden overflow-x-auto md:block">
                <table className="w-full min-w-[850px]">
                  <thead>
                    <tr className="border-b border-gray-100 bg-[#fcfcfd] text-left">
                      <th className="px-6 py-3.5 text-[11px] font-semibold uppercase tracking-wide text-[#64748b]">Donor</th>
                      <th className="px-4 py-3.5 text-[11px] font-semibold uppercase tracking-wide text-[#64748b]">Blood Type</th>
                      <th className="px-4 py-3.5 text-[11px] font-semibold uppercase tracking-wide text-[#64748b]">Contact</th>
                      <th className="px-4 py-3.5 text-[11px] font-semibold uppercase tracking-wide text-[#64748b]">Submitted</th>
                      <th className="px-4 py-3.5 text-[11px] font-semibold uppercase tracking-wide text-[#64748b]">Status</th>
                      <th className="px-6 py-3.5 text-right text-[11px] font-semibold uppercase tracking-wide text-[#64748b]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRequests.map((request) => (
                      <tr key={request._id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/70">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-bold text-[#e9232b]">{(request.name || "D").trim().charAt(0).toUpperCase()}</div>
                            <div className="min-w-0">
                              <p className="max-w-[210px] truncate text-[13px] font-semibold text-[#111827]">{request.name}</p>
                              <p className="mt-1 text-[11px] text-[#94a3b8]">Age {request.age} · {request.firstTimeDonor ? "First-time donor" : "Returning donor"}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4"><span className="inline-flex h-8 min-w-10 items-center justify-center rounded-lg bg-red-50 px-2 text-xs font-bold text-[#e9232b]">{request.bloodType}</span></td>
                        <td className="px-4 py-4"><p className="max-w-[190px] truncate text-xs font-medium text-[#334155]">{request.phone}</p><p className="mt-1 max-w-[190px] truncate text-[11px] text-[#94a3b8]">{request.email}</p></td>
                        <td className="px-4 py-4 text-xs text-[#64748b]">{formatDate(request.submittedAt)}</td>
                        <td className="px-4 py-4"><StatusBadge status={request.status} /></td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button type="button" onClick={() => { setSelectedRequest(request); setActionError(""); }} className="inline-flex h-8 items-center gap-1.5 rounded-md border border-gray-200 px-2.5 text-xs font-semibold text-[#475569] hover:border-gray-300 hover:bg-white"><Eye size={14} /> Details</button>
                            {request.status === "pending" && (
                              <>
                                <button type="button" disabled={!!actionLoadingId} onClick={() => updateStatus(request, "approved")} className="inline-flex h-8 items-center gap-1 rounded-md bg-green-600 px-2.5 text-xs font-semibold text-white hover:bg-green-700 disabled:opacity-50">{actionLoadingId === request._id ? <LoaderCircle size={13} className="animate-spin" /> : <Check size={14} />} Approve</button>
                                <button type="button" disabled={!!actionLoadingId} onClick={() => updateStatus(request, "denied")} className="inline-flex h-8 items-center gap-1 rounded-md border border-red-100 px-2.5 text-xs font-semibold text-red-600 hover:bg-red-50 disabled:opacity-50"><X size={14} /> Deny</button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="divide-y divide-gray-100 md:hidden">
                {filteredRequests.map((request) => (
                  <article key={request._id} className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-bold text-[#e9232b]">{(request.name || "D").trim().charAt(0).toUpperCase()}</div>
                        <div className="min-w-0"><p className="truncate text-sm font-semibold text-[#111827]">{request.name}</p><p className="mt-1 text-xs text-[#64748b]">Age {request.age} · {request.phone}</p></div>
                      </div>
                      <span className="rounded-lg bg-red-50 px-2.5 py-1.5 text-xs font-bold text-[#e9232b]">{request.bloodType}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3"><StatusBadge status={request.status} /><span className="text-[11px] text-[#94a3b8]">{formatDate(request.submittedAt)}</span></div>
                    <div className="mt-4 flex gap-2">
                      <button type="button" onClick={() => { setSelectedRequest(request); setActionError(""); }} className="flex-1 rounded-lg border border-gray-200 py-2.5 text-xs font-semibold text-[#475569]">View details</button>
                      {request.status === "pending" && <button type="button" disabled={!!actionLoadingId} onClick={() => updateStatus(request, "approved")} className="flex-1 rounded-lg bg-green-600 py-2.5 text-xs font-semibold text-white disabled:opacity-50">Approve</button>}
                      {request.status === "pending" && <button type="button" disabled={!!actionLoadingId} onClick={() => updateStatus(request, "denied")} className="flex-1 rounded-lg border border-red-100 py-2.5 text-xs font-semibold text-red-600 disabled:opacity-50">Deny</button>}
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </section>

        <p className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-[#94a3b8]"><ShieldCheck size={13} /> Donation applications are stored securely in the BloodLink database.</p>
      </div>

      {selectedRequest && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111827]/45 p-4" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedRequest(null); }}>
          <section role="dialog" aria-modal="true" aria-labelledby="request-details-title" className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="flex items-start justify-between border-b border-gray-100 px-6 py-5">
              <div><p className="text-xs font-semibold uppercase tracking-[1.2px] text-[#e9232b]">Donor application</p><h3 id="request-details-title" className="mt-1 text-xl font-semibold text-[#111827]">Application Details</h3></div>
              <button type="button" aria-label="Close details" onClick={() => setSelectedRequest(null)} className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700"><X size={19} /></button>
            </div>
            <div className="p-6">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-[#fafafa] p-4">
                <div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-lg font-bold text-[#e9232b]">{(selectedRequest.name || "D").trim().charAt(0).toUpperCase()}</div><div><p className="font-semibold text-[#111827]">{selectedRequest.name}</p><p className="mt-1 text-xs text-[#64748b]">Submitted {formatDate(selectedRequest.submittedAt)}</p></div></div>
                <StatusBadge status={selectedRequest.status} />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <DetailItem icon={UserRound} label="Full name" value={selectedRequest.name} />
                <DetailItem icon={Activity} label="Age" value={`${selectedRequest.age ?? "—"} years`} />
                <DetailItem icon={Droplet} label="Blood type" value={selectedRequest.bloodType} />
                <DetailItem icon={Phone} label="Phone number" value={selectedRequest.phone} />
                <DetailItem icon={Mail} label="Email address" value={selectedRequest.email} />
                <DetailItem icon={MapPin} label="Address" value={selectedRequest.address} />
                <DetailItem icon={Clock3} label="Donor history" value={selectedRequest.firstTimeDonor ? "First-time donor" : "Returning donor"} />
                <DetailItem icon={FileText} label="Previous donation" value={selectedRequest.firstTimeDonor ? "Not applicable" : selectedRequest.previousDonationDate} />
              </div>
              {selectedRequest.reviewedAt && <p className="mt-6 border-t border-gray-100 pt-4 text-xs text-[#94a3b8]">Reviewed on {formatDate(selectedRequest.reviewedAt)}</p>}
              {selectedRequest.status === "pending" && (
                <div className="mt-7 flex flex-col-reverse gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:justify-end">
                  <button type="button" disabled={!!actionLoadingId} onClick={() => updateStatus(selectedRequest, "denied")} className="rounded-lg border border-red-100 px-5 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:opacity-50">Deny Application</button>
                  <button type="button" disabled={!!actionLoadingId} onClick={() => updateStatus(selectedRequest, "approved")} className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700 disabled:opacity-50">{actionLoadingId === selectedRequest._id ? <LoaderCircle size={16} className="animate-spin" /> : <Check size={16} />} Approve Application</button>
                </div>
              )}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
