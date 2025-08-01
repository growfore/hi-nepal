"use client"

import { LucideMail, LucideMapPin, LucidePhone, LucideSend } from "lucide-react"
import type React from "react"
import { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    destination: "",
    groupSize: "",
    experienceLevel: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <main>
        <section className="bg-warning bg-gradient position-relative py-5 text-white">
          <div className="position-absolute top-0 start-0 end-0 bottom-0 opacity-25 bg-dark"></div>
          <div className="container position-relative z-1">
            <div className="text-center">
              <h1 className="display-3 fw-bold mb-4">Plan Your Adventure</h1>
              <p className="lead fs-4">
                Ready to explore? Let us help you plan your perfect trekking and travel experience!
              </p>
            </div>
          </div>
        </section>

        <section className="bg-light bg-gradient py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mb-5">
                <div className="card border-0 rounded-4 shadow-lg">
                  <div className="card-header bg-white text-center py-4">
                    <h2 className="h3 fw-bold text-dark mb-2">Start Your Journey</h2>
                    <p className="text-muted fs-5 mb-0">
                      Tell us about your dream adventure and we'll create the perfect trekking experience for you.
                    </p>
                  </div>
                  <div className="card-body p-5">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label htmlFor="fullName" className="form-label fw-semibold">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="destination" className="form-label fw-semibold">
                          Desired Destination *
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="destination"
                          name="destination"
                          value={formData.destination}
                          onChange={handleChange}
                          placeholder="e.g., Everest Base Camp, Annapurna Circuit"
                          required
                        />
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label htmlFor="groupSize" className="form-label fw-semibold">
                            Group Size *
                          </label>
                          <select
                            className="form-select form-select-lg"
                            id="groupSize"
                            name="groupSize"
                            value={formData.groupSize}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select group size</option>
                            <option value="1">Solo (1 person)</option>
                            <option value="2">Couple (2 people)</option>
                            <option value="3-5">Small group (3-5 people)</option>
                            <option value="6-10">Medium group (6-10 people)</option>
                            <option value="10+">Large group (10+ people)</option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-4">
                          <label htmlFor="experienceLevel" className="form-label fw-semibold">
                            Experience Level
                          </label>
                          <select
                            className="form-select form-select-lg"
                            id="experienceLevel"
                            name="experienceLevel"
                            value={formData.experienceLevel}
                            onChange={handleChange}
                          >
                            <option value="">Select experience level</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                            <option value="expert">Expert</option>
                          </select>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label htmlFor="email" className="form-label fw-semibold">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-md-6 mb-4">
                          <label htmlFor="phone" className="form-label fw-semibold">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            className="form-control form-control-lg"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label htmlFor="message" className="form-label fw-semibold">
                          Additional Details *
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us more about your ideal trekking or travel experience, preferred dates, special requirements, etc."
                          required
                        ></textarea>
                      </div>

                      <div className="d-grid">
                        <button type="submit" className="btn btn-success btn-lg shadow  fw-bold">
                          <LucideSend />
                          Send Inquiry
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="row">
                  <div className="col-12 mb-4">
                    <div className="card text-white bg-success bg-gradient rounded-4">
                      <div className="card-body p-4">
                        <div className="d-flex flex-column align-items-center mb-3">
                          <div className="bg-white bg-opacity-25 rounded-circle d-flex justify-content-center align-items-center" style={{ width: '4rem', height: '4rem' }}>
                            <LucidePhone color="white" />
                          </div>
                        </div>
                        <h5 className="fw-bold mb-3">ADVENTURE PLANNING</h5>
                        <a href="tel:061-457510" className="text-white text-decoration-none fs-5 fw-bold d-block">
                          061-457510
                        </a>
                        <a href="tel:+9779856035091" className="text-white text-decoration-none fs-5 fw-bold d-block mb-2">
                          +977 985-6035091
                        </a>
                        <small className="opacity-75">We are open 7 Days a Week <br /> 07.30am - 09.30pm</small>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mb-4">
                    <div className="card border-0 rounded-4 shadow-sm">
                      <div className="card-body p-4">
                        <h5 className="fw-bold mb-4">Other Ways to Reach Us</h5>
                        <div className="d-flex align-items-center mb-3">
                          <div className="bg-success bg-opacity-10 p-2 rounded-circle me-3">
                            <LucideMail color="green" />
                          </div>
                          <div>
                            <p className="fw-semibold mb-1">Email</p>
                            <p className="text-muted mb-0">hinepaltreks@gmail.com</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="bg-success bg-opacity-10 p-2 rounded-circle me-3">
                            <LucideMapPin color="green" />
                          </div>
                          <div>
                            <p className="fw-semibold mb-1">Address</p>
                            <p className="text-muted mb-0">
                              Street No. 13,Lakeside, Pokhara<br />Nepal
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mb-4">
                    <div className="card bg-success bg-opacity-10 border-0 rounded-4">
                      <div className="card-body p-4">
                        <h5 className="fw-bold text-success mb-3">Quick Response</h5>
                        <p className="text-success mb-0">
                          We typically respond to all inquiries within 24 hours during business days to help you plan your trip.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ContactForm
