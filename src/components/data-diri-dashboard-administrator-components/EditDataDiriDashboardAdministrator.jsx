import React, { useEffect, useState } from "react";
import { bgHome } from "../../assets";
import InputTextGeneral from "../general-components/InputTextGeneral";
import { userService } from "../../services";
import LoadingPopup from "../popup-components/LoadingPopup";

const EditDataDiriDashboardAdministrator = ({ onViewChange }) => {
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isUpdateFoto, setIsUpdateFoto] = useState(false);
  const [formData, setFormData] = useState({
    foto: null,
    email: "",
    nama_lengkap: "",
    no_telp: "",
    role: "",
  });

  const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  const handleFormSubmit = async () => {
    let form = new FormData();
    form.append("email", formData.email);
    form.append("nama_lengkap", formData.nama_lengkap);
    if (isUpdateFoto) {
      form.append("foto", formData.foto);
    }
    form.append("no_telp", formData.no_telp);
    form.append("role", formData.role);
    try {
      setLoading(true);
      const response = await userService.updateProfile(form);
      setIsUpdateFoto(false);
      console.log("Successful register:", response.data);
      console.log(formData);
      setLoading(false);
      onViewChange();
    } catch (error) {
      console.error("Register error:", error);
      setLoading(false);
      setIsUpdateFoto(false);
    }
    console.log(formData);
  };

  const handleProfileChange = ({ name, value }) => {
    if (name === "no_telp" && value.length > 13) {
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getProfileData = async () => {
    try {
      setLoading(true);
      const response = await userService.getProfile();
      console.log("Hasil get profil:", response);
      setFormData({
        foto: response?.data?.data?.foto,
        email: response?.data?.data?.email,
        nama_lengkap: response?.data?.data?.nama_lengkap,
        no_telp: response?.data?.data?.no_telp,
        role: response?.data?.data?.role?.nama,
      });
      setLoading(false);
    } catch (error) {
      console.error("Update Error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <form>
      <LoadingPopup loading={loading} />
      <div className="px-10">
        <img className="w-24 h-24 object-cover object-center rounded-full mx-auto mb-6" src={`https://urbanscholaria.my.id/storage/${formData.foto}` || "URL_default_foto_profil" || iconUser} alt="" />
        <label className="flex items-center cursor-pointer rounded-lg w-fit h-9 px-4 py-2 bg-brand-500 mx-auto mb-16" htmlFor="foto">
          <span className="flex items-center text-base font-semibold text-white">Ubah Foto Profil</span>
          <input
            className="hidden"
            id="foto"
            type="file"
            onChange={
              // handleProfileChange
              (e) => {
                handleProfileChange({ name: "foto", value: e.target.files[0] }), setIsUpdateFoto(true);
              }
            }
          />
        </label>
        <div className="grid grid-cols-2">
          <div>
            <div className="w-60">
              <InputTextGeneral name="nama_lengkap" label="Nama Lengkap" value={formData.nama_lengkap} onChange={handleProfileChange} required disabled />
            </div>
            <div className="w-60">
              <InputTextGeneral name="no_telp" label="Nomor Handphone" value={formData.no_telp} onChange={handleProfileChange} required />
            </div>
          </div>
          <div className="ml-auto">
            <div className="w-60">
              <InputTextGeneral name="role" label="Role" value={formData.role} onChange={handleProfileChange} required disabled />
            </div>
            <div className="w-60">
              <InputTextGeneral name="email" label="Email" value={formData.email} onChange={handleProfileChange} required disabled />
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full h-0.5 rounded-full bg-neutral-300 mb-6" />
      <div className="flex items-center mb-12">
        <input className="w-5 h-5" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <p className="text-sm font-normal text-neutral-500 ml-4">Saya menyatakan bahwa seluruh data benar.</p>
      </div>
      <button
        className={`py-2 px-14 bg-brand-500 w-full rounded-lg text-base font-semibold text-white ${!isChecked ? "bg-neutral-200 text-neutral-400" : "bg-brand-500 text-white"}`}
        type="button"
        disabled={!isChecked}
        onClick={() => handleFormSubmit()}
      >
        Simpan
      </button>
    </form>
  );
};

export default EditDataDiriDashboardAdministrator;
