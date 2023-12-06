import React, { useEffect, useState } from "react";
import { bgHome } from "../../assets";
import InputTextGeneral from "../general-components/InputTextGeneral";
import InputDateGeneral from "../general-components/InputDateGeneral";
import InputSelectGeneral from "../general-components/InputSelectGeneral";
import { userService } from "../../services";
import axios from "axios";
import InputFileGeneralCoba from "../general-components/InputFileGeneralCoba";

const EditDataDiriDashboardUser = ({ onViewChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    foto: null,
    username: "",
    email: "",
    nama_lengkap: "",
    nomor_identitas: "",
    jenis_kelamin: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    provinsi: "",
    kabupaten_kota: "",
    kecamatan: "",
    kelurahan: "",
    alamat: "",
    no_telp: "",
    pekerjaan: "",
  });

  // const userdata = localStorage.getItem("TOKEN");

  const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  const handleFormSubmit = async () => {
    // let config = {
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${userdata}`,
    //   },
    // };
    // e.preventDefault();
    let form = new FormData();
    form.append("username", formData.username);
    form.append("email", formData.email);
    form.append("nama_lengkap", formData.nama_lengkap);
    form.append("foto", formData.foto);
    // if (formData.foto !== null && formData.foto !== "null") {
    //   form.append("foto", formData.foto);
    // }
    form.append("nomor_identitas", formData.nomor_identitas);
    form.append("jenis_kelamin", formData.jenis_kelamin);
    form.append("tempat_lahir", formData.tempat_lahir);
    form.append("tanggal_lahir", formData.tanggal_lahir);
    form.append("provinsi", formData.provinsi);
    form.append("kabupaten_kota", formData.kabupaten_kota);
    form.append("kecamatan", formData.kecamatan);
    form.append("kelurahan", formData.kelurahan);
    form.append("alamat", formData.alamat);
    form.append("no_telp", formData.no_telp);
    form.append("pekerjaan", formData.pekerjaan);
    try {
      const response = await userService.updateProfile(form);
      // const response = await axios.post("https://urbanscholaria.my.id/api/update-profile", form);
      // const response = await userService.postRegister("register", form);
      console.log("Successful register:", response.data);
      console.log(formData);
      onViewChange();
    } catch (error) {
      console.error("Register error:", error);
    }
  };

  const handleProfileChange = ({ name, value }) => {
    // const maxValueLength = {
    //   nomor_identitas: 16,
    //   no_telp: 13,
    // };

    if (name === "no_telp" && value.length > 13) {
      return;
    }

    // if (name === "foto") {
    //   const selectedFile = value; // Get the selected file
    //   const reader = new FileReader();

    //   reader.onloadend = () => {
    //     setFormData((prevData) => ({
    //       ...prevData,
    //       foto: reader.result, // Update formData with the selected image data
    //     }));
    //   };

    //   if (selectedFile) {
    //     reader.readAsDataURL(selectedFile); // Read the file as data URL
    //   }
    // } else {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // }
  };

  const getProfileData = async () => {
    try {
      const response = await userService.getProfile();
      console.log("Hasil get profil:", response);
      setFormData({
        foto: response?.data?.data?.foto,
        username: response?.data?.data?.username,
        email: response?.data?.data?.email,
        nama_lengkap: response?.data?.data?.nama_lengkap,
        nomor_identitas: response?.data?.data?.nomor_identitas,
        jenis_kelamin: response?.data?.data?.jenis_kelamin,
        tempat_lahir: response?.data?.data?.tempat_lahir,
        tanggal_lahir: response?.data?.data?.tanggal_lahir,
        provinsi: response?.data?.data?.provinsi,
        kabupaten_kota: response?.data?.data?.kabupaten_kota,
        kecamatan: response?.data?.data?.kecamatan,
        kelurahan: response?.data?.data?.kelurahan,
        alamat: response?.data?.data?.alamat,
        no_telp: response?.data?.data?.no_telp,
        pekerjaan: response?.data?.data?.pekerjaan,
      });
    } catch (error) {
      console.error("Update Error", error);
    }
  };

  useEffect(() => {
    getProfileData();
    // console.log(profile);
  }, []);

  // const handleProfileChange = ({ name, value }) => {
  //   const maxValueLength = {
  //     nomor_identitas: 16,
  //     no_telp: 13,
  //   };

  //   if (value && value.length > maxValueLength[name]) {
  //     return;
  //   }
  //   if (name === "foto") {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(value);
  //     console.log(fileReader);
  //     fileReader.onload = () => {
  //       setFormData((prevData) => ({
  //         ...prevData,
  //         [name]: fileReader.result,
  //       }));
  //     };
  //   } else {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   }

  // setProfile((prevProfile) => ({
  //   ...prevProfile,
  //   [name]: value,
  // }));
  // };

  const optionJenisKelamin = [
    {
      value: "",
      text: "Pilih Jenis Kelamin",
    },
    {
      value: "Perempuan",
      text: "Perempuan",
    },
    {
      value: "Laki-Laki",
      text: "Laki-Laki",
    },
  ];

  return (
    <form>
      <div className="px-10">
        <img className="w-24 h-24 object-cover object-center rounded-full mx-auto mb-6" src={formData.foto || "URL_default_foto_profil"} alt="" />

        <label className="flex items-center cursor-pointer rounded-lg w-fit h-9 px-4 py-2 bg-brand-500 mx-auto mb-16" htmlFor="foto">
          <span className="flex items-center text-base font-semibold text-white">Ubah Foto Profil</span>
          <input
            className="hidden"
            id="foto"
            type="file"
            onChange={
              // handleProfileChange
              (e) => handleProfileChange({ name: "foto", value: e.target.files[0] })
            }
          />
        </label>

        {/* <InputFileGeneralCoba name="foto" label="Foto Profil" tipeFile="*" ukuranFile={5} selectedFile={formData.foto} onFileInputChange={handleProfileChange} required /> */}

        <div className="grid grid-cols-2">
          {/* <div> */}
          {/* <div className="w-60">
            <InputTextGeneral name="username" label="Username" value={formData.username} onChange={handleProfileChange} required disabled />
          </div> */}
          <div className="w-60">
            <InputTextGeneral name="nama_lengkap" label="Nama Lengkap (Sesuai KTP)" value={formData.nama_lengkap} onChange={handleProfileChange} required disabled />
          </div>
          <div className="w-60 ml-auto">
            <InputTextGeneral name="nomor_identitas" label="Nomor Identitas" type="number" value={formData.nomor_identitas} onChange={handleProfileChange} required disabled />
          </div>
          <div className="w-60">
            <InputTextGeneral name="email" label="Email" type="email" value={formData.email} onChange={handleProfileChange} required disabled />
          </div>
          <div className="w-60 ml-auto">
            <InputTextGeneral name="no_telp" label="No. Handphone" type="number" value={formData.no_telp} onChange={handleProfileChange} required note />
          </div>
          <div className="w-60">
            <InputSelectGeneral name="jenis_kelamin" label="Jenis Kelamin" option={optionJenisKelamin} value={formData.jenis_kelamin} onChange={handleProfileChange} required disabled />
          </div>
          <div className="w-60 ml-auto">
            <InputTextGeneral name="pekerjaan" label="Pekerjaan" value={formData.pekerjaan} onChange={handleProfileChange} required />
          </div>
          <div className="w-60">
            <InputTextGeneral name="tempat_lahir" label="Tempat Lahir" value={formData.tempat_lahir} onChange={handleProfileChange} required disabled />
          </div>
          <div className="w-60 ml-auto">
            <InputDateGeneral name="tanggal_lahir" label="Tanggal Lahir" value={formData.tanggal_lahir} onChange={handleProfileChange} required disabled />
          </div>
          {/* </div> */}
          {/* <div className="ml-auto"> */}
          {/* </div> */}
        </div>
      </div>
      <hr className="w-full h-0.5 rounded-full bg-neutral-300 mb-6" />
      <h1 className="font-semibold text-base text-neutral-500">Domisili</h1>
      <p className="text-sm text-neutral-500 mb-6">Isi dengan domisili Anda berada.</p>
      <div className="grid grid-cols-2 px-10">
        <div>
          <div className="w-60">
            <InputTextGeneral name="provinsi" label="Provinsi" value={formData.provinsi} onChange={handleProfileChange} required disabled />
          </div>
          <div className="w-60">
            <InputTextGeneral name="kecamatan" label="Kecamatan" value={formData.kecamatan} onChange={handleProfileChange} required disabled />
          </div>
        </div>
        <div className="ml-auto">
          <div className="w-60">
            <InputTextGeneral name="kabupaten_kota" label="Kota/Kabupaten" value={formData.kabupaten_kota} onChange={handleProfileChange} required disabled />
          </div>
          <div className="w-60">
            <InputTextGeneral name="kelurahan" label="Desa/Kelurahan" value={formData.kelurahan} onChange={handleProfileChange} required disabled />
          </div>
        </div>
      </div>
      <hr className="w-full h-0.5 rounded-full bg-neutral-300 mb-6" />
      {/* <h1 className="font-semibold text-base text-neutral-500">Pekerjaan</h1>
      <p className="text-sm text-neutral-500 mb-6">Isi dengan Pekerjaan Anda.</p> */}
      {/* <div className="grid grid-cols-2 px-10"> */}
      {/* <div> */}
      {/* </div> */}
      {/* </div> */}
      <div className="flex items-center mb-12">
        <input className="w-5 h-5" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <p className="text-sm font-normal text-neutral-500 ml-4">Saya menyatakan bahwa seluruh data benar.</p>
      </div>
      <button
        className={`py-2 px-14 bg-brand-500 w-full rounded-lg text-base font-semibold text-white ${!isChecked ? "bg-neutral-200 text-neutral-400" : "bg-brand-500 text-white"}`}
        type="button"
        disabled={!isChecked}
        onClick={() => handleFormSubmit()}
        // onClick={() => {
        //   editProfile();
        //   uploadFoto();
        // }}
      >
        Simpan
      </button>
    </form>
  );
};

export default EditDataDiriDashboardUser;
