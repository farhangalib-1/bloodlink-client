"use client";

import React, { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Link from "next/link";
import Image from "next/image";
import { Droplet, ChevronDown, Xmark } from "@gravity-ui/icons";
import { FcGoogle } from "react-icons/fc";
import {
  Select,
  Label,
  Description,
  ListBox,
  Button,
} from "@heroui/react";
import {
  LucideUser,
  LucideMail,
  LucideLock,
  LucideEyeOff,
  LucideUsers,
  LucideMapPin,
  LucideBuilding2,
  LucideMegaphone,
  LucideUserPlus,
  LucideCamera,
  LucideChevronDown,
  LucideGlobe,
  LucideLoader2,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function RegistrationFormCard() {
  const router  = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);

  const [selectedDivisionId, setSelectedDivisionId] = useState("");
  const [selectedDistrictId, setSelectedDistrictId] = useState("");
  const [selectedUpazilaId, setSelectedUpazilaId] = useState("");

  const [selectedDivisionName, setSelectedDivisionName] = useState("");
  const [selectedDistrictName, setSelectedDistrictName] = useState("");
  const [selectedUpazilaName, setSelectedUpazilaName] = useState("");

  const [loadingDivisions, setLoadingDivisions] = useState(false);
  const [loadingDistricts, setLoadingDistricts] = useState(false);
  const [loadingUpazilas, setLoadingUpazilas] = useState(false);

  useEffect(() => {
    const fetchDivisions = async () => {
      setLoadingDivisions(true);
      try {
        const res = await fetch("https://bdopenapi.vercel.app/api/geo/divisions");
        const json = await res.json();
        setDivisions(Array.isArray(json) ? json : json.data || []);
      } catch (err) {
        console.error("Error fetching divisions:", err);
      } finally {
        setLoadingDivisions(false);
      }
    };

    fetchDivisions();
  }, []);

  useEffect(() => {
    if (!selectedDivisionId) {
      setDistricts([]);
      setSelectedDistrictId("");
      setSelectedDistrictName("");
      setUpazilas([]);
      setSelectedUpazilaId("");
      setSelectedUpazilaName("");
      return;
    }

    const fetchDistricts = async () => {
      setLoadingDistricts(true);
      setDistricts([]);
      setSelectedDistrictId("");
      setSelectedDistrictName("");
      setUpazilas([]);
      setSelectedUpazilaId("");
      setSelectedUpazilaName("");

      try {
        const res = await fetch(
          `https://bdopenapi.vercel.app/api/geo/districts/${selectedDivisionId}`
        );
        const json = await res.json();
        setDistricts(Array.isArray(json) ? json : json.data || []);
      } catch (err) {
        console.error("Error fetching districts:", err);
      } finally {
        setLoadingDistricts(false);
      }
    };

    fetchDistricts();
  }, [selectedDivisionId]);

  // 3. Fetch Upazilas when District changes
  useEffect(() => {
    if (!selectedDistrictId) {
      setUpazilas([]);
      setSelectedUpazilaId("");
      setSelectedUpazilaName("");
      return;
    }

    const fetchUpazilas = async () => {
      setLoadingUpazilas(true);
      setUpazilas([]);
      setSelectedUpazilaId("");
      setSelectedUpazilaName("");

      try {
        const res = await fetch(
          `https://bdopenapi.vercel.app/api/geo/upazilas/${selectedDistrictId}`
        );
        const json = await res.json();
        setUpazilas(Array.isArray(json) ? json : json.data || []);
      } catch (err) {
        console.error("Error fetching upazilas:", err);
      } finally {
        setLoadingUpazilas(false);
      }
    };

    fetchUpazilas();
  }, [selectedDistrictId]);

  // Handler for Division Selection
  const handleDivisionChange = (key) => {
    const id = String(key);
    setSelectedDivisionId(id);
    const item = divisions.find(
      (d) => String(d.id || d._id || d.division_id) === id
    );
    setSelectedDivisionName(item ? item.name || item.division : "");
  };

  // Handler for District Selection
  const handleDistrictChange = (key) => {
    const id = String(key);
    setSelectedDistrictId(id);
    const item = districts.find(
      (d) => String(d.id || d._id || d.district_id) === id
    );
    setSelectedDistrictName(item ? item.name || item.district : "");
  };

  // Handler for Upazila Selection
  const handleUpazilaChange = (key) => {
    const id = String(key);
    setSelectedUpazilaId(id);
    const item = upazilas.find(
      (u) => String(u.id || u._id || u.upazila_id) === id
    );
    setSelectedUpazilaName(item ? item.name || item.upazila : "");
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const uploadToImgBB = async (imageFile) => {
    const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
    if (!IMGBB_API_KEY) {
      console.warn("ImgBB API key missing. Skipping image upload.");
      return null;
    }

    const imgFormData = new FormData();
    imgFormData.append("image", imageFile);

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
        {
          method: "POST",
          body: imgFormData,
        }
      );
      const data = await res.json();
      if (data.success) {
        return data.data.url;
      } else {
        console.error("ImgBB Upload Failed:", data);
        return null;
      }
    } catch (error) {
      console.error("Error uploading image to ImgBB:", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    if (selectedImage) {
      const hostedImageUrl = await uploadToImgBB(selectedImage);
      if (hostedImageUrl) {
        formData.set("photoUrl", hostedImageUrl);
      }
    }

    const formPayload = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signUp.email({
    name: formPayload.fullName,
    email: formPayload.email,
    password: formPayload.password,
    image: formPayload.photoUrl,
    role: formPayload.role,
    division: formPayload.division,
    district: formPayload.district,
    upazila: formPayload.upazila,
    callbackURL: "/",
});
const notify = () => toast.success('Signup Successfully');
if(!error){
    notify()
    setTimeout(() => {
      router.push("/");
    }, 3000);
}
if(error){
    toast.error(`Signup Failed: ${error.message || "Unknown error"}`);
}

    setIsSubmitting(false);
  };

  return (
    <div className="w-full max-w-[620px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 p-8 md:p-12 relative mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-8">
        <div className="flex items-center mb-4">
                    <Droplet className="text-red-600" width={28} height={28} />
                    <div className="leading-tight">
                      <p className="text-lg font-bold text-gray-900">
                        Blood<span className="text-red-600">Link</span>
                      </p>
                      <p className="text-[10px] font-semibold tracking-wide text-red-600">
                        BLOOD DONATION
                      </p>
                    </div>
                  
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Create Your Account
        </h1>
        <p className="text-slate-500 text-sm mt-1.5">
          Join our community and help save lives.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Hidden inputs sending the actual text names in FormData */}
        <input type="hidden" name="division" value={selectedDivisionName} />
        <input type="hidden" name="district" value={selectedDistrictName} />
        <input type="hidden" name="upazila" value={selectedUpazilaName} />

        {/* Optional: Include IDs if needed by backend */}
        <input type="hidden" name="divisionId" value={selectedDivisionId} />
        <input type="hidden" name="districtId" value={selectedDistrictId} />
        <input type="hidden" name="upazilaId" value={selectedUpazilaId} />

        {/* Photo Upload */}
        <div className="flex justify-center mb-8">
          <label className="cursor-pointer group flex flex-col items-center justify-center w-32 h-32 rounded-full border-2 border-dashed border-red-300 hover:border-red-500 transition-colors bg-white text-center p-2 relative overflow-hidden">
            {imagePreview ? (
              <Image
                src={imagePreview}
                alt="Avatar Preview"
                fill
                className="object-cover rounded-full"
              />
            ) : (
              <>
                <div className="text-red-500 group-hover:scale-110 transition-transform mb-1">
                  <LucideCamera className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-800">
                  Upload Your Photo
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5">
                  JPG, PNG (Max. 2MB)
                </span>
              </>
            )}
            <input
              type="file"
              name="photo"
              className="hidden"
              accept="image/png, image/jpeg, image/jpg"
              onChange={handleImageChange}
            />
          </label>
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold text-slate-800 mb-1.5">
            Full Name
          </label>
          <div className="relative">
            <LucideUser className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              name="fullName"
              required
              placeholder="Enter your full name"
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-red-500 focus:bg-white transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-bold text-slate-800 mb-1.5">
            Email Address
          </label>
          <div className="relative">
            <LucideMail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-red-500 focus:bg-white transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-xs font-bold text-slate-800 mb-1.5">
            Password
          </label>
          <div className="relative">
            <LucideLock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="password"
              name="password"
              required
              placeholder="Create a password"
              className="w-full pl-10 pr-10 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-red-500 focus:bg-white transition-all placeholder:text-slate-400"
            />
            <button
              type="button"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <LucideEyeOff className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Role Select */}
        <div>
          <Select className="w-full" name="role">
            <Label className="block text-xs font-bold text-slate-800 mb-1.5">
              Role
            </Label>
            <Select.Trigger className="w-full flex items-center justify-between px-3.5 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm text-slate-700 hover:border-slate-300 transition-all">
              <div className="flex items-center gap-2 text-slate-400">
                <LucideUsers className="w-4 h-4 text-slate-400" />
                <Select.Value placeholder="Select your role" />
              </div>
              <Select.Indicator>
                <LucideChevronDown className="w-4 h-4 text-slate-400" />
              </Select.Indicator>
            </Select.Trigger>
            <Select.Popover className="bg-white border border-slate-100 rounded-xl shadow-lg p-1 z-20">
              <ListBox>
                <ListBox.Item id="donor" className="px-3 py-2 text-sm rounded-lg hover:bg-slate-50 cursor-pointer">
                  <Label className="text-slate-700">Donor</Label>
                  <Description className="text-xs text-slate-400">
                    Want to donate blood
                  </Description>
                </ListBox.Item>
                <ListBox.Item id="recipient" className="px-3 py-2 text-sm rounded-lg hover:bg-slate-50 cursor-pointer">
                  <Label className="text-slate-700">Recipient</Label>
                  <Description className="text-xs text-slate-400">
                    Looking for blood donors
                  </Description>
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
        </div>

        {/* Division Field */}
        <div>
          <Select
            className="w-full"
            selectedKey={selectedDivisionId}
            onSelectionChange={handleDivisionChange}
          >
            <Label className="block text-xs font-bold text-slate-800 mb-1.5">
              Division
            </Label>
            <Select.Trigger className="w-full flex items-center justify-between px-3.5 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm text-slate-700 hover:border-slate-300 transition-all">
              <div className="flex items-center gap-2 text-slate-400">
                {loadingDivisions ? (
                  <LucideLoader2 className="w-4 h-4 animate-spin text-red-500" />
                ) : (
                  <LucideGlobe className="w-4 h-4 text-slate-400" />
                )}
                <Select.Value placeholder="Select your division" />
              </div>
              <Select.Indicator>
                <LucideChevronDown className="w-4 h-4 text-slate-400" />
              </Select.Indicator>
            </Select.Trigger>
            <Select.Popover className="bg-white border border-slate-100 rounded-xl shadow-lg p-1 z-20 max-h-56 overflow-y-auto">
              <ListBox>
                {divisions.map((div) => {
                  const divId = String(div.id || div._id || div.division_id);
                  return (
                    <ListBox.Item
                      key={divId}
                      id={divId}
                      className="px-3 py-2 text-sm rounded-lg hover:bg-slate-50 cursor-pointer flex justify-between items-center"
                    >
                      <Label className="text-slate-700">
                        {div.name || div.division}
                      </Label>
                      <span className="text-xs text-slate-400">
                        {div.bn_name}
                      </span>
                    </ListBox.Item>
                  );
                })}
              </ListBox>
            </Select.Popover>
          </Select>
        </div>

        {/* District & Upazila */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* District Select */}
          <div>
            <Select
              className="w-full"
              selectedKey={selectedDistrictId}
              isDisabled={!selectedDivisionId || loadingDistricts}
              onSelectionChange={handleDistrictChange}
            >
              <Label className="block text-xs font-bold text-slate-800 mb-1.5">
                District
              </Label>
              <Select.Trigger className="w-full flex items-center justify-between px-3.5 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm text-slate-700 hover:border-slate-300 transition-all disabled:opacity-50">
                <div className="flex items-center gap-2 text-slate-400">
                  {loadingDistricts ? (
                    <LucideLoader2 className="w-4 h-4 animate-spin text-red-500" />
                  ) : (
                    <LucideMapPin className="w-4 h-4 text-slate-400" />
                  )}
                  <Select.Value
                    placeholder={
                      !selectedDivisionId
                        ? "Select Division First"
                        : "Select district"
                    }
                  />
                </div>
                <Select.Indicator>
                  <LucideChevronDown className="w-4 h-4 text-slate-400" />
                </Select.Indicator>
              </Select.Trigger>
              <Select.Popover className="bg-white border border-slate-100 rounded-xl shadow-lg p-1 z-20 max-h-56 overflow-y-auto">
                <ListBox>
                  {districts.map((dist) => {
                    const distId = String(dist.id || dist._id || dist.district_id);
                    return (
                      <ListBox.Item
                        key={distId}
                        id={distId}
                        className="px-3 py-2 text-sm rounded-lg hover:bg-slate-50 cursor-pointer flex justify-between items-center"
                      >
                        <Label className="text-slate-700">
                          {dist.name || dist.district}
                        </Label>
                        <span className="text-xs text-slate-400">
                          {dist.bn_name}
                        </span>
                      </ListBox.Item>
                    );
                  })}
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Upazila Select */}
          <div>
            <Select
              className="w-full"
              selectedKey={selectedUpazilaId}
              isDisabled={!selectedDistrictId || loadingUpazilas}
              onSelectionChange={handleUpazilaChange}
            >
              <Label className="block text-xs font-bold text-slate-800 mb-1.5">
                Upazila
              </Label>
              <Select.Trigger className="w-full flex items-center justify-between px-3.5 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm text-slate-700 hover:border-slate-300 transition-all disabled:opacity-50">
                <div className="flex items-center gap-2 text-slate-400">
                  {loadingUpazilas ? (
                    <LucideLoader2 className="w-4 h-4 animate-spin text-red-500" />
                  ) : (
                    <LucideBuilding2 className="w-4 h-4 text-slate-400" />
                  )}
                  <Select.Value
                    placeholder={
                      !selectedDistrictId
                        ? "Select District First"
                        : "Select upazila"
                    }
                  />
                </div>
                <Select.Indicator>
                  <LucideChevronDown className="w-4 h-4 text-slate-400" />
                </Select.Indicator>
              </Select.Trigger>
              <Select.Popover className="bg-white border border-slate-100 rounded-xl shadow-lg p-1 z-20 max-h-56 overflow-y-auto">
                <ListBox>
                  {upazilas.map((upz) => {
                    const upzId = String(upz.id || upz._id || upz.upazila_id);
                    return (
                      <ListBox.Item
                        key={upzId}
                        id={upzId}
                        className="px-3 py-2 text-sm rounded-lg hover:bg-slate-50 cursor-pointer flex justify-between items-center"
                      >
                        <Label className="text-slate-700">
                          {upz.name || upz.upazila}
                        </Label>
                        <span className="text-xs text-slate-400">
                          {upz.bn_name}
                        </span>
                      </ListBox.Item>
                    );
                  })}
                </ListBox>
              </Select.Popover>
            </Select>
          </div>
        </div>

        {/* How did you hear about us? */}
        <div>
          <Select className="w-full" name="referralSource">
            <Label className="block text-xs font-bold text-slate-800 mb-1.5">
              How did you hear about us?
            </Label>
            <Select.Trigger className="w-full flex items-center justify-between px-3.5 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm text-slate-700 hover:border-slate-300 transition-all">
              <div className="flex items-center gap-2 text-slate-400">
                <LucideMegaphone className="w-4 h-4 text-slate-400" />
                <Select.Value placeholder="Select an option" />
              </div>
              <Select.Indicator>
                <LucideChevronDown className="w-4 h-4 text-slate-400" />
              </Select.Indicator>
            </Select.Trigger>
            <Select.Popover className="bg-white border border-slate-100 rounded-xl shadow-lg p-1 z-20">
              <ListBox>
                <ListBox.Item id="social_media" className="px-3 py-2 text-sm rounded-lg hover:bg-slate-50 cursor-pointer">
                  <Label className="text-slate-700">Social Media</Label>
                </ListBox.Item>
                <ListBox.Item id="friends_family" className="px-3 py-2 text-sm rounded-lg hover:bg-slate-50 cursor-pointer">
                  <Label className="text-slate-700">Friends & Family</Label>
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
        </div>

        {/* Terms and Conditions */}
        <div className="p-3.5 bg-red-50/40 border border-red-100 rounded-xl flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="termsAccepted"
              required
              className="w-4 h-4 text-red-600 rounded border-red-300 focus:ring-red-500 accent-red-600"
            />
            <span className="text-xs font-medium text-slate-800">
              I agree to the{" "}
              <Link
                href="#"
                className="text-red-600 font-bold hover:underline"
              >
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                className="text-red-600 font-bold hover:underline"
              >
                Privacy Policy
              </Link>
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl shadow-md shadow-red-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isSubmitting ? (
            <LucideLoader2 className="w-4 h-4 animate-spin" />
          ) : (
            <LucideUserPlus className="w-4 h-4" />
          )}
          <span>{isSubmitting ? "Creating Account..." : "Create Account"}</span>
        </button>
        <div className="grid grid-cols-3 items-center text-center w-full">
        <hr />
        <h1 className="font-semibold text-md text-gray-500">or</h1>
        <hr />
        </div>
        <Button variant="outline" className={"w-full py-3 border-red-500"}>
         <FcGoogle/>
         Signup With Google 
        </Button>
      </form>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </div>
    
  );
}