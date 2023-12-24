import React, { useState } from "react";
import { bgAuth } from "../../assets";
import AuthPageLayout from "../../layouts/AuthPageLayout";
import InputTextGeneral from "../../components/general-components/InputTextGeneral";
import InputPasswordAuthPage from "../../components/auth-page-components/InputPasswordAuthPage";
import { Link, useNavigate } from "react-router-dom";
import InputFileGeneralCoba from "../../components/general-components/InputFileGeneralCoba";
import InputDateGeneral from "../../components/general-components/InputDateGeneral";
import InputSelectGeneral from "../../components/general-components/InputSelectGeneral";
import { userService } from "../../services";
import Swal from "sweetalert2";
import LinkBackGeneral from "../../components/general-components/LinkBackGeneral";
import LoadingPopup from "../../components/popup-components/LoadingPopup";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showFirstSection, setShowFirstSection] = useState(true);

  const toggleSecondSection = () => {
    setShowFirstSection(!showFirstSection);
  };

  const [emailTerpakaiError, setEmailTerpakaiError] = useState(false);
  const [konfirmasiPasswordError, setKonfirmasiPasswordError] = useState(false);
  const [digitPasswordError, setDigitPasswordError] = useState(false);
  const [telpError, setTelpError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nikError, setNikError] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password_confirm: "",
    nama_lengkap: "",
    foto: null,
    ktp_paspor: null,
    nomor_identitas: "",
    jenis_kelamin: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    provinsi: "Jawa Timur",
    kabupaten_kota: "",
    kecamatan: "",
    kelurahan: "",
    alamat: "",
    no_telp: "",
    pekerjaan: "",
  });

  const handleFormSubmit = async () => {
    // Validasi Start
    if (!validateEmail(formData.email)) {
      console.error("Format email tidak valid");
      setEmailError(true);
      return;
    }
    console.log("Email Aman");
    setEmailError(false);

    if (formData.password !== formData.password_confirm) {
      console.error("Kata sandi tidak cocok dengan konfirmasi kata sandi");
      setKonfirmasiPasswordError(true);
      return;
    }
    console.log("Kata Sandi Sama");
    setKonfirmasiPasswordError(false);

    if (formData.password.length < 8) {
      console.error("Kata sandi minimal 8 digit");
      setDigitPasswordError(true);
      return;
    }
    console.log("Kata Sandi Sudah 8 Digit");
    setDigitPasswordError(false);

    if (formData.nomor_identitas.length < 16) {
      console.error("NIK harus memiliki minimal 16 digit");
      setNikError(true);
      return;
    }
    console.log("NIK Sudah 16 Digit");
    setNikError(false);

    if (formData.no_telp.length < 10) {
      console.error("No telp harus memiliki minimal 16 digit");
      setTelpError(true);
      return;
    }
    console.log("No Telp Sudah 10 Digit");
    setTelpError(false);
    // Validasi End

    let form = new FormData();
    form.append("email", formData.email);
    form.append("password", formData.password);
    form.append("password_confirm", formData.password_confirm);
    form.append("nama_lengkap", formData.nama_lengkap);
    form.append("foto", formData.foto);
    form.append("ktp_paspor", formData.ktp_paspor);
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
      setLoading(true);
      const response = await userService.postRegister(form);
      // console.log("Successful register:", response);

      if (response.data.data) {
        console.log("Bisa");
        console.log("Successful register:", response.data);
        setLoading(false);
      } else {
        setEmailTerpakaiError(true);
        console.error("Akun Sudah Terdaftar");
        setLoading(false);
        return;
      }
      setLoading(false);
      triggerAlert();
    } catch (error) {
      console.error("Register error:", error);
      setLoading(false);
    }
  };

  const handleInputChange = ({ name, value }) => {
    const maxValueLength = {
      nomor_identitas: 16,
      no_telp: 13,
    };

    if (value.length > maxValueLength[name]) {
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const allFieldsFilled = () => {
    for (const key in formData) {
      if (formData[key] === null || formData[key] === "") {
        return false;
      }
    }
    return true;
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const triggerAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Terima Kasih Telah Mendaftar di US!",
      text: "Operator akan segera melakukan aktivasi untuk akun anda.",
    }).then(() => {
      navigate("/masuk");
    });
  };

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

  const optionKabupatenKota = [
    {
      value: "",
      text: "Pilih Kabupaten/Kota",
    },
    {
      value: "Bangkalan",
      text: "Bangkalan",
    },
    {
      value: "Banyuwangi",
      text: "Banyuwangi",
    },
    {
      value: "Blitar",
      text: "Blitar",
    },
    {
      value: "Bojonegoro",
      text: "Bojonegoro",
    },
    {
      value: "Bondowoso",
      text: "Bondowoso",
    },
    {
      value: "Gresik",
      text: "Gresik",
    },
    {
      value: "Jember",
      text: "Jember",
    },
    {
      value: "Jombang",
      text: "Jombang",
    },
    {
      value: "Kediri",
      text: "Kediri",
    },
    {
      value: "Lamongan",
      text: "Lamongan",
    },
    {
      value: "Lumajang",
      text: "Lumajang",
    },
    {
      value: "Madiun",
      text: "Madiun",
    },
    {
      value: "Magetan",
      text: "Magetan",
    },
    {
      value: "Malang",
      text: "Malang",
    },
    {
      value: "Mojokerto",
      text: "Mojokerto",
    },
    {
      value: "Nganjuk",
      text: "Nganjuk",
    },
    {
      value: "Ngawi",
      text: "Ngawi",
    },
    {
      value: "Pacitan",
      text: "Pacitan",
    },
    {
      value: "Pamekasan",
      text: "Pamekasan",
    },
    {
      value: "Pasuruan",
      text: "Pasuruan",
    },
    {
      value: "Ponorogo",
      text: "Ponorogo",
    },
    {
      value: "Probolinggo",
      text: "Probolinggo",
    },
    {
      value: "Sampang",
      text: "Sampang",
    },
    {
      value: "Sidoarjo",
      text: "Sidoarjo",
    },
    {
      value: "Situbondo",
      text: "Situbondo",
    },
    {
      value: "Sumenep",
      text: "Sumenep",
    },
    {
      value: "Trenggalek",
      text: "Trenggalek",
    },
    {
      value: "Tuban",
      text: "Tuban",
    },
    {
      value: "Tulungagung",
      text: "Tulungagung",
    },
    {
      value: "Kota Batu",
      text: "Kota Batu",
    },
    {
      value: "Kota Blitar",
      text: "Kota Blitar",
    },
    {
      value: "Kota Kediri",
      text: "Kota Kediri",
    },
    {
      value: "Kota Madiun",
      text: "Kota Madiun",
    },
    {
      value: "Kota Malang",
      text: "Kota Malang",
    },
    {
      value: "Kota Mojokerto",
      text: "Kota Mojokerto",
    },
    {
      value: "Kota Pasuruan",
      text: "Kota Pasuruan",
    },
    {
      value: "Kota Probolinggo",
      text: "Kota Probolinggo",
    },
    {
      value: "Kota Surabaya",
      text: "Kota Surabaya",
    },
  ];

  return (
    <AuthPageLayout>
      <LoadingPopup loading={loading} />
      <div className="grid grid-cols-2 w-full h-full pt-10">
        <div>
          <img className="w-1/2 h-full pt-20 object-cover fixed top-0 inset-x-0" src={bgAuth} alt="" />
        </div>
        <section className="w-full h-full">
          <div className="flex justify-end mb-6">
            <LinkBackGeneral />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-semibold text-5xl text-brand-500 text-center w-4/5 mb-8">Mari Bergabung di Urban Scholaria!</h2>
            <form className="w-[28rem]">
              {showFirstSection ? (
                <>
                  <InputTextGeneral name="email" label="email" placeholder="Masukkan Email..." value={formData.email} onChange={handleInputChange} required />
                  <InputPasswordAuthPage name="password" label="Kata Sandi" placeholder="Masukkan Kata Sandi..." value={formData.password} onChange={handleInputChange} required />
                  <InputPasswordAuthPage name="password_confirm" label="Konfirmasi Kata Sandi" placeholder="Masukkan Kata Sandi Lagi..." value={formData.password_confirm} onChange={handleInputChange} required />
                  <InputTextGeneral name="nama_lengkap" label="Nama" placeholder="Masukkan Nama..." value={formData.nama_lengkap} onChange={handleInputChange} required />
                  <InputFileGeneralCoba name="foto" label="Foto Profil" tipeFile=".png, .jpg, .jpeg" ukuranFile={5} selectedFile={formData.foto} onFileInputChange={handleInputChange} required />
                  <InputFileGeneralCoba name="ktp_paspor" label="KTP" tipeFile=".png, .jpg, .jpeg" ukuranFile={5} selectedFile={formData.ktp_paspor} onFileInputChange={handleInputChange} required />
                  <InputTextGeneral name="nomor_identitas" label="NIK (Nomor Induk Kependudukan)" placeholder="Masukkan NIK..." maxLength={16} type="number" value={formData.nomor_identitas} onChange={handleInputChange} required />
                  <InputSelectGeneral name="jenis_kelamin" label="Jenis Kelamin" placeholder="Pilih Jenis Kelamin..." value={formData.jenis_kelamin} onChange={handleInputChange} option={optionJenisKelamin} required />
                  <InputTextGeneral name="no_telp" label="Nomor Telepon" placeholder="Masukkan Nomor Telpon..." type="number" maxLength={13} value={formData.no_telp} onChange={handleInputChange} required />
                  <InputTextGeneral name="pekerjaan" label="Pekerjaan" placeholder="Masukkan Pekerjaan..." value={formData.pekerjaan} onChange={handleInputChange} required />
                </>
              ) : (
                <>
                  <InputTextGeneral name="tempat_lahir" label="Tempat Lahir" placeholder="Masukkan Tempat Lahir..." value={formData.tempat_lahir} onChange={handleInputChange} required />
                  <InputDateGeneral name="tanggal_lahir" label="Tanggal Lahir" placeholder="Masukkan Tanggal Lahir..." value={formData.tanggal_lahir} onChange={handleInputChange} required />
                  <InputTextGeneral name="provinsi" label="Provinsi" placeholder="Masukkan Provinsi..." value={formData.provinsi} onChange={handleInputChange} required disabled />

                  <InputSelectGeneral name="kabupaten_kota" label="Kabupaten atau Kota" placeholder="Pilih Kabupaten atau Kota..." value={formData.kabupaten_kota} onChange={handleInputChange} option={optionKabupatenKota} required />

                  {/* <InputTextGeneral name="kabupaten_kota" label="Kabupaten atau Kota" placeholder="Masukkan Kabupaten Kota..." value={formData.kabupaten_kota} onChange={handleInputChange} required /> */}
                  <InputTextGeneral name="kecamatan" label="Kecamatan" placeholder="Masukkan Kecamatan..." value={formData.kecamatan} onChange={handleInputChange} required />
                  <InputTextGeneral name="kelurahan" label="Kelurahan" placeholder="Masukkan Kelurahan..." value={formData.kelurahan} onChange={handleInputChange} required />
                  <InputTextGeneral name="alamat" label="Alamat" placeholder="Masukkan alamat..." value={formData.alamat} onChange={handleInputChange} required />
                </>
              )}
              {showFirstSection ? (
                <button className={`py-2 px-4 w-full rounded-lg text-base font-semibold bg-brand-200 text-neutral-800`} type="button" onClick={() => toggleSecondSection()}>
                  Selanjutnya
                </button>
              ) : (
                <button className={`py-2 px-4 w-full rounded-lg text-base font-semibold bg-brand-200 text-neutral-800`} type="button" onClick={() => toggleSecondSection()}>
                  Sebelumnya
                </button>
              )}
              <button
                className={`py-2 px-4 w-full rounded-lg text-base font-semibold mt-2.5 ${!allFieldsFilled() ? "bg-neutral-200 text-neutral-400" : "bg-brand-500 text-white"}`}
                type="button"
                onClick={() => handleFormSubmit()}
                disabled={!allFieldsFilled()}
              >
                Daftar Sekarang
              </button>
              <p className="inline-block mt-1 font-semibold text-xs">Sudah memiliki akun? </p>
              <Link to="/masuk" className="inline-block font-semibold text-xs text-brand-500">
                Masuk
              </Link>
              {konfirmasiPasswordError && <p className="text-danger-500 font-semibold text-base text-center my-4">Kata Sandi Tidak Sama</p>}
              {digitPasswordError && <p className="text-danger-500 font-semibold text-base text-center my-4">Kata Sandi Minimal 8 Digit</p>}
              {emailError && <p className="text-danger-500 font-semibold text-base text-center my-4">Penulisan Email Salah</p>}
              {nikError && <p className="text-danger-500 font-semibold text-base text-center my-4">Nomor Induk Kependudukan Minimal 16 Digit</p>}
              {telpError && <p className="text-danger-500 font-semibold text-base text-center my-4">Nomor Telepon Minimal 10 Digit</p>}
              {emailTerpakaiError && <p className="text-danger-500 font-semibold text-base text-center my-4">Email Sudah Terdaftar</p>}
              <div className="mt-4">
                <p className="text-xs font-normal text-neutral-600">
                  Dengan mendaftarkan akun Urban Scholaria, saya menyetujui{" "}
                  <Link className="text-brand-500 font-semibold" to="/syarat-ketentuan">
                    Syarat & Ketentuan
                  </Link>{" "}
                  serta{" "}
                  <Link className="text-brand-500 font-semibold" to="/syarat-ketentuan">
                    Kebijakan Privasi
                  </Link>{" "}
                  yang berlaku.
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </AuthPageLayout>
  );
};

export default Register;
