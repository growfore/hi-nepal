import React from 'react'

const Booking = () => {
  return (
 <main id="content" className="site-main">
  {/* Inner Banner html start*/}
  <section className="inner-banner-wrap">
    <div className="inner-baner-container" style={{backgroundImage: 'url(assets/images/inner-banner.jpg)'}}>
      <div className="container">
        <div className="inner-banner-content">
          <h1 className="inner-title">Booking</h1>
        </div>
      </div>
    </div>
    <div className="inner-shape" />
  </section>
  {/* Inner Banner html end*/}
  <div className="step-section booking-section">
    <div className="container">
      <div className="step-link-wrap">
        <div className="step-item active">
          Your cart
          <a href="#" className="step-icon" />
        </div>
        <div className="step-item active">
          Your Details
          <a href="#" className="step-icon" />
        </div>
        <div className="step-item">
          Finish
          <a href="#" className="step-icon" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 right-sidebar">
          {/* step one form html start */}
          <div className="booking-form-wrap">
            <div className="booking-content">
              <div className="form-title">
                <span>1</span>
                <h3>Your Details</h3>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>First name*</label>
                    <input type="text" className="form-control" name="firstname_booking" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Last name*</label>
                    <input type="text" className="form-control" name="lastname_booking" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Email*</label>
                    <input type="email" className="form-control" name="email_booking" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Confirm Email*</label>
                    <input type="email" className="form-control" name="email_booking" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Phone*</label>
                    <input type="text" className="form-control" name="lastname_booking" />
                  </div>
                </div>
              </div>
            </div>
            <div className="booking-content">
              <div className="form-title">
                <span>2</span>
                <h3>Payment Information</h3>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label>Name on card*</label>
                    <input type="text" className="form-control" name="firstname_booking" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="row align-items-center">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Card number*</label>
                        <input type="text" id="card_number" name="card_number" className="form-control" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <img src="assets/images/cards.png" alt="Cards" />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Expiration date*</label>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="text" id="expire_month" name="expire_month" className="form-control" placeholder="MM" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="text" id="expire_year" name="expire_year" className="form-control" placeholder="Year" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Security code*</label>
                        <div className="row">
                          <div className="col-4">
                            <div className="form-group">
                              <input type="text" id="ccv" name="ccv" className="form-control" placeholder="CCV" />
                            </div>
                          </div>
                          <div className="col-8">
                            <img src="assets/images/icon_ccv.gif" alt="ccv" /><small>Last 3 digits</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info-content">
                <h4>Or checkout with Paypal</h4>
                <p>Lorem ipsum dolor sit amet, vim id accusata sensibus, id ridens quaeque qui. Ne qui vocent ornatus molestie, reque fierent dissentiunt mel ea.</p>
                <a href="#">
                  <img src="assets/images/paypal_bt.png" alt='' />
                </a>
              </div>
            </div>
            <div className="booking-content">
              <div className="form-title">
                <span>3</span>
                <h3>Billing Address</h3>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Country*</label>
                    <select className="form-control" name="country" id="country">
                      <option value='' disabled selected>Select your country</option>
                      <option value="Europe">Europe</option>
                      <option value="United states">United states</option>
                      <option value="Asia">Asia</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Street line 1*</label>
                    <input type="text" name="street_1" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Street line 2</label>
                    <input type="text" name="street_2" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="form-group">
                    <label>City*</label>
                    <input type="text" name="city_booking" />
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="form-group">
                    <label>State*</label>
                    <input type="text" name="state_booking" />
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="form-group">
                    <label>Postal code*</label>
                    <input type="text" name="postal_code" />
                  </div>
                </div>
                <div className="col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>Additional Information</label>
                    <textarea rows={6} placeholder="Notes about your order, e.g. special notes for delivery" defaultValue={""} />
                  </div>
                </div>
              </div>
              {/*End row */}
            </div>
            <div className="form-policy">
              <h3>Cancellation policy</h3>
              <div className="form-group">
                <label className="checkbox-list">
                  <input type="checkbox" name="s" />
                  <span className="custom-checkbox" />
                  I accept terms and conditions and general policy.
                </label>
              </div>
              <a href="#" className="button-primary">Book Now</a>
            </div>
          </div>
          {/* step one form html end */}
        </div>
        <div className="col-lg-4">
          <aside className="sidebar">
            <div className="widget-bg widget-table-summary">
              <h4 className="bg-title">Summary</h4>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>Packages cost </strong>
                    </td>
                    <td className="text-right">
                      $300
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Dedicated tour guide</strong>
                    </td>
                    <td className="text-right">
                      $34
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Insurance</strong>
                    </td>
                    <td className="text-right">
                      $34
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>tax</strong>
                    </td>
                    <td className="text-right">
                      13%
                    </td>
                  </tr>
                  <tr className="total">
                    <td>
                      <strong>Total cost</strong>
                    </td>
                    <td className="text-right">
                      <strong>$368</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="widget-bg widget-support-wrap">
              <div className="icon">
                <i className="fas fa-phone-volume" />
              </div>
              <div className="support-content">
                <h5>HELP AND SUPPORT</h5>
                <a href="telto:12345678" className="phone">+11 234 889 00</a>
                <small>Monday to Friday 9.00am - 7.30pm</small>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>
</main>

  )
}

export default Booking