import React, { useEffect, useState } from "react";
import { useAuth } from "../../../../context/AuthContext";

const ProfileForm = ({ profileData, onCancel, showToast }) => {
    const { profile, updateProfileState } = useAuth();

    const [formData, setFormData] = useState({
        name: "",
        title: "",
        bio: "",
        image: "",
        location: "",
        email: "",
        phone: "",
        socialLinks: {
            github: "",
            linkedin: "",
            twitter: "",
            website: "",
        },
    });
    const [imageFile, setImageFile] = useState(null);

    const [preview, setPreview] = useState("");

    useEffect(() => {
        // Prefer the data passed from ProfileCard.
        // Fall back to the profile in context.
        const data = profileData || profile;

        if (!data) return;

        setFormData({
            name: data.name ?? "",
            title: data.title ?? "",
            bio: data.bio ?? "",
            image: data.image ?? "",
            location: data.location ?? "",
            email: data.email ?? "",
            phone: data.phone ?? "",
            socialLinks: {
                github: data.socialLinks?.github ?? "",
                linkedin: data.socialLinks?.linkedin ?? "",
                twitter: data.socialLinks?.twitter ?? "",
                website: data.socialLinks?.website ?? "",
            },
        });

        setPreview(data.image ?? "");
    }, [profileData, profile]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSocialChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            socialLinks: {
                ...prev.socialLinks,
                [name]: value,
            },
        }));
    };

    const handleImageChange = (e) => {


        const file = e.target.files[0];


        if (!file) return;


        setImageFile(file);



        setPreview(
            URL.createObjectURL(file)
        );


    };

    const handleSubmit = async (e) => {

        e.preventDefault();


        const form = new FormData();


        form.append(
            "name",
            formData.name
        );


        form.append(
            "title",
            formData.title
        );


        form.append(
            "bio",
            formData.bio
        );


        form.append(
            "location",
            formData.location
        );


        form.append(
            "email",
            formData.email
        );


        form.append(
            "phone",
            formData.phone
        );


        form.append(
            "socialLinks",
            JSON.stringify(
                formData.socialLinks
            )
        );



        if (imageFile) {

            form.append(
                "image",
                imageFile
            );

        }



        try {


            const updated =
                await updateProfileState(form);



            console.log(
                "UPDATED PROFILE:",
                updated
            );


            showToast(
                "Profile updated successfully",
                "success"
            );


        } catch (error) {


            showToast(
                "Profile update failed",
                "error"
            );


        }


    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="font-size-16 mb-4">
                    Edit Profile
                </h5>

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                Name
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                Title
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                placeholder="Software Engineer"
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-12 mb-3">
                            <label className="form-label">
                                Bio
                            </label>

                            <textarea
                                rows={4}
                                className="form-control"
                                name="bio"
                                placeholder="Tell visitors about yourself..."
                                value={formData.bio}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                Profile Image
                            </label>

                            <input
                                type="file"
                                className="form-control"
                                accept="image/*"
                                onChange={handleImageChange}
                            />

                            {preview && (
                                <div className="mt-3">
                                    <img
                                        src={preview}
                                        alt="Profile Preview"
                                        className="avatar-lg rounded-circle img-thumbnail"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                Location
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="location"
                                placeholder="Nairobi, Kenya"
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                Email
                            </label>

                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                Phone
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                placeholder="+254 700 000000"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                GitHub
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="github"
                                placeholder="https://github.com/username"
                                value={formData.socialLinks.github}
                                onChange={handleSocialChange}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                LinkedIn
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="linkedin"
                                placeholder="https://linkedin.com/in/username"
                                value={formData.socialLinks.linkedin}
                                onChange={handleSocialChange}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                Twitter / X
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="twitter"
                                placeholder="https://x.com/username"
                                value={formData.socialLinks.twitter}
                                onChange={handleSocialChange}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                Website
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="website"
                                placeholder="https://yourwebsite.com"
                                value={formData.socialLinks.website}
                                onChange={handleSocialChange}
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <button
                            type="submit"
                            className="btn btn-primary me-2"
                        >
                            <i className="bi bi-check-circle me-1"></i>
                            Save Changes
                        </button>

                        <button
                            type="button"
                            className="btn btn-light"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileForm;