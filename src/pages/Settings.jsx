import React, { useState } from 'react';

// --- Tab Components ---

const AccountTab = () => (
  <div className="tab-pane active">
    {/* Profile Details Card */}
    <div className="card mb-4">
      <div className="card-body">
        <div className="d-flex align-items-start align-items-sm-center gap-4 mb-4">
          <img
            src="https://randomuser.me/api/portraits/men/79.jpg"
            alt="user-avatar"
            className="d-block rounded"
            height="100"
            width="100"
          />
          <div className="button-wrapper">
            <label htmlFor="upload" className="btn btn-primary me-2 mb-2" tabIndex="0">
              <span className="d-none d-sm-block">Upload new photo</span>
              <input type="file" id="upload" name="upload" className="account-file-input" hidden accept="image/png, image/jpeg" />
            </label>
            <button type="button" className="btn btn-label-secondary btn-light mb-2">
              <span className="d-none d-sm-block">Reset</span>
            </button>
            <p className="text-muted mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
          </div>
        </div>
        
        <form>
          <div className="row">
            <div className="mb-3 col-lg-6">
              <label className="form-label" htmlFor="firstName">First Name</label>
              <input className="form-control" type="text" id="firstName" name="firstName" defaultValue="John" />
            </div>
            <div className="mb-3 col-lg-6">
              <label className="form-label" htmlFor="lastName">Last Name</label>
              <input className="form-control" type="text" id="lastName" name="lastName" defaultValue="Doe" />
            </div>
            <div className="mb-3 col-md-12">
              <label className="form-label" htmlFor="about">About Me</label>
              <textarea className="form-control" type="about" id="about" name="about" placeholder='Short Description of about me'/>
            </div>
            <div className="mb-3 col-lg-6">
              <label className="form-label" htmlFor="email">E-mail</label>
              <input className="form-control" type="email" id="email" name="email" defaultValue="john.doe@example.com" />
            </div>
            <div className="mb-3 col-lg-6">
              <label className="form-label" htmlFor="organization">Organization</label>
              <input className="form-control" type="text" id="organization" name="organization" defaultValue="Optimus Algorithms" />
            </div>
            <div className="mb-3 col-lg-6">
              <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
              <div className="input-group">
                <span className="input-group-text">IN (+91)</span>
                <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" defaultValue="987 654 3210" />
              </div>
            </div>
            <div className="mb-3 col-lg-6">
              <label className="form-label" htmlFor="address">Address</label>
              <input className="form-control" type="text" id="address" name="address" placeholder="Address" />
            </div>
            <div className="mb-3 col-lg-6">
              <label className="form-label" htmlFor="state">State</label>
              <input className="form-control" type="text" id="state" name="state" defaultValue="Kerala" />
            </div>
            <div className="mb-3 col-lg-6">
              <label className="form-label" htmlFor="pinCode">PIN Code</label>
              <input className="form-control" type="text" id="pinCode" name="pinCode" defaultValue="682001" />
            </div>
            <div className="mb-3 col-lg-6">
              <label className="form-label" htmlFor="country">Country</label>
              <select className="form-select" id="country" name="country" defaultValue="India">
                <option>Select</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>
            <div className="mb-3 col-lg-6">
              <label className="form-label" htmlFor="language">Language</label>
              <select className="form-select" id="language" name="language" defaultValue="en">
                <option>Select Language</option>
                <option value="en">English</option>
                <option value="hi">Hindi</option>
              </select>
            </div>
            <div className="mb-3 col-lg-6">
              <label className="form-label" htmlFor="timezone">Timezone</label>
              <select className="form-select" id="timezone" name="timezone" defaultValue="IST">
                <option>Select Timezone</option>
                <option value="IST">IST (UTC +5:30)</option>
              </select>
            </div>
            <div className="mb-3 col-lg-6">
              <label className="form-label" htmlFor="currency">Currency</label>
              <select className="form-select" id="currency" name="currency" defaultValue="inr">
                <option>Select Currency</option>
                <option value="inr">INR (₹)</option>
                <option value="usd">USD ($)</option>
              </select>
            </div>
          </div>
          <div className="mt-2">
            <button type="submit" className="btn btn-primary me-2">Save changes</button>
            <button type="reset" className="btn btn-light">Cancel</button>
          </div>
        </form>
      </div>
    </div>

    {/* Delete Account Card */}
    <div className="card">
      <h5 className="card-header">Delete Account</h5>
      <div className="card-body">
        <div className="alert alert-warning mb-3" role="alert">
          <h6 className="alert-heading fw-bold mb-1">Are you sure you want to delete your account?</h6>
          <p className="mb-0">Once you delete your account, there is no going back. Please be certain.</p>
        </div>
        <form>
          <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" id="accountActivation" name="accountActivation" />
            <label className="form-check-label" htmlFor="accountActivation">I confirm my account deactivation</label>
          </div>
          <button type="submit" className="btn btn-danger" disabled>Deactivate Account</button>
        </form>
      </div>
    </div>
  </div>
);

const SecurityTab = () => (
  <div className="tab-pane active">
    {/* Change Password Card */}
    <div className="card mb-4">
      <h5 className="card-header">Change Password</h5>
      <div className="card-body">
        <form>
          <div className="row">
            <div className="mb-3 col-lg-6">
              <label className="form-label" htmlFor="currentPassword">Current Password</label>
              <input className="form-control" type="password" id="currentPassword" name="currentPassword" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" />
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col-lg-6">
              <label className="form-label" htmlFor="newPassword">New Password</label>
              <input className="form-control" type="password" id="newPassword" name="newPassword" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" />
            </div>
            <div className="mb-3 col-lg-6">
              <label className="form-label" htmlFor="confirmPassword">Confirm New Password</label>
              <input className="form-control" type="password" id="confirmPassword" name="confirmPassword" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" />
            </div>
          </div>
          <div className="mb-3">
            <p className="fw-semibold mb-2">Password Requirements:</p>
            <ul className="text-muted ps-3 mb-0">
              <li className="mb-1">Minimum 8 characters long - the more, the better</li>
              <li className="mb-1">At least one lowercase character</li>
              <li>At least one number, symbol, or whitespace character</li>
            </ul>
          </div>
          <div>
            <button type="submit" className="btn btn-primary me-2">Save changes</button>
            <button type="reset" className="btn btn-light">Reset</button>
          </div>
        </form>
      </div>
    </div>

    {/* Two-step verification */}
    <div className="card mb-4">
      <h5 className="card-header">Two-steps verification</h5>
      <div className="card-body">
        <p className="fw-semibold mb-1">Two factor authentication is not enabled yet.</p>
        <p className="text-muted">Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. <a href="#">Learn more.</a></p>
        <button className="btn btn-primary">Enable Two-Factor Authentication</button>
      </div>
    </div>

    {/* API Keys */}
    <div className="card mb-4">
      <h5 className="card-header">Create an API key</h5>
      <div className="card-body">
        <form className="row g-3 align-items-end">
          <div className="col-md-5">
            <label className="form-label" htmlFor="apiKeyType">Choose the Api key type you want to create</label>
            <select className="form-select" id="apiKeyType" name="apiKeyType">
              <option>Choose Key Type</option>
            </select>
          </div>
          <div className="col-md-5">
            <label className="form-label" htmlFor="apiKeyName">Name the API key</label>
            <input type="text" className="form-control" id="apiKeyName" name="apiKeyName" placeholder="Server Key 1" />
          </div>
          <div className="col-md-2 d-grid">
            <button type="submit" className="btn btn-primary">Create Key</button>
          </div>
        </form>
      </div>
    </div>

    {/* Recent Devices */}
    <div className="card">
      <h5 className="card-header">Recent Devices</h5>
      <div className="table-responsive text-nowrap">
        <table className="table table-borderless">
          <thead className="table-light">
            <tr>
              <th>BROWSER</th>
              <th>DEVICE</th>
              <th>LOCATION</th>
              <th>RECENT ACTIVITIES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><i className="me-2 text-info"></i> Chrome on Windows</td>
              <td>HP Spectre 360</td>
              <td>Mumbai, India</td>
              <td>10, July 2021 20:07</td>
            </tr>
            <tr>
              <td><i className="me-2 text-danger"></i> Chrome on iPhone</td>
              <td>iPhone 12x</td>
              <td>Bangalore, India</td>
              <td>13, July 2021 10:10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const BillingTab = () => (
  <div className="tab-pane active">
    {/* Current Plan */}
    <div className="card mb-4">
      <h5 className="card-header">Current Plan</h5>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-6 mb-3">
            <div className="mb-3">
              <h6 className="mb-1">Your Current Plan is Basic</h6>
              <p className="text-muted">A simple start for everyone</p>
            </div>
            <div className="mb-3">
              <h6 className="mb-1">Active until Dec 09, 2021</h6>
              <p className="text-muted">We will send you a notification upon Subscription expiration</p>
            </div>
            <div>
              <h6 className="mb-1">
                <span className="me-2">₹14,999 Per Month</span>
                <span className="badge bg-label-primary text-primary">Popular</span>
              </h6>
              <p className="text-muted">Standard plan for small to medium businesses</p>
            </div>
          </div>
          <div className="col-lg-6 mb-3">
            <div className="alert alert-warning mb-3">
              <h6 className="alert-heading fw-bold mb-1">We need your attention!</h6>
              <span>Your plan requires update</span>
            </div>
            <div className="plan-statistics">
              <div className="d-flex justify-content-between">
                <span className="fw-semibold mb-2">Days</span>
                <span className="fw-semibold mb-2">12 of 30 Days</span>
              </div>
              <div className="progress mb-1" style={{ height: '8px' }}>
                <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p className="text-muted mb-0">18 days remaining until your plan requires update</p>
            </div>
          </div>
        </div>
        <div>
          <button className="btn btn-primary me-2">Upgrade Plan</button>
          <button className="btn btn-light text-danger">Cancel Subscription</button>
        </div>
      </div>
    </div>

    {/* Payment Methods */}
    <div className="card mb-4">
      <h5 className="card-header">Payment Methods</h5>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-6">
            <form>
              <div className="d-flex gap-4 mb-3">
                <div className="form-check">
                  <input name="paymentType" className="form-check-input" type="radio" id="creditCard" defaultChecked />
                  <label className="form-check-label" htmlFor="creditCard">Credit/Debit/ATM Card</label>
                </div>
                <div className="form-check">
                  <input name="paymentType" className="form-check-input" type="radio" id="upi" />
                  <label className="form-check-label" htmlFor="upi">UPI / Netbanking</label>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="cardNumber">Card Number</label>
                <input type="text" className="form-control" id="cardNumber" name="cardNumber" placeholder="1356 3215 6548 7898" />
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <label className="form-label" htmlFor="cardName">Name</label>
                  <input type="text" className="form-control" id="cardName" name="cardName" placeholder="John Doe" />
                </div>
                <div className="col-3">
                  <label className="form-label" htmlFor="expDate">Exp. Date</label>
                  <input type="text" className="form-control" id="expDate" name="expDate" placeholder="MM/YY" />
                </div>
                <div className="col-3">
                  <label className="form-label" htmlFor="cvvCode">CVV Code</label>
                  <input type="text" className="form-control" id="cvvCode" name="cvvCode" placeholder="654" />
                </div>
              </div>
              <div className="form-check mb-4">
                <input className="form-check-input" type="checkbox" id="saveCard" name="saveCard" />
                <label className="form-check-label" htmlFor="saveCard">Save card for future billing?</label>
              </div>
              <button type="submit" className="btn btn-primary me-2">Save Changes</button>
              <button type="reset" className="btn btn-light">Cancel</button>
            </form>
          </div>
          <div className="col-lg-6 mt-4 mt-md-0">
            <h6 className="mb-3">My Cards</h6>
            {/* Card 1 */}
            <div className="bg-light p-3 rounded mb-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="d-flex align-items-center gap-2">
                  <span className="fw-semibold">Tom McBride</span>
                  <span className="badge bg-label-primary text-primary">Primary</span>
                </div>
                <div>
                  <button className="btn btn-sm btn-link">Edit</button>
                  <button className="btn btn-sm btn-link text-danger">Delete</button>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <span>**** **** **** 9856</span>
                <span className="text-muted">Card expires at 12/26</span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-light p-3 rounded">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="fw-semibold">Mildred Wagner</span>
                <div>
                  <button className="btn btn-sm btn-link">Edit</button>
                  <button className="btn btn-sm btn-link text-danger">Delete</button>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <span>**** **** **** 5896</span>
                <span className="text-muted">Card expires at 10/27</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Billing Address */}
    <div className="card mb-4">
      <h5 className="card-header">Billing Address</h5>
      <div className="card-body">
        <form className="row g-3">
          <div className="col-lg-6">
            <label className="form-label" htmlFor="companyName">Company Name</label>
            <input type="text" className="form-control" id="companyName" name="companyName" defaultValue="Optimus Algorithms" />
          </div>
          <div className="col-lg-6">
            <label className="form-label" htmlFor="billingEmail">Billing Email</label>
            <input type="email" className="form-control" id="billingEmail" name="billingEmail" defaultValue="john.doe@example.com" />
          </div>
          <div className="col-lg-6">
            <label className="form-label" htmlFor="gstin">GSTIN</label>
            <input type="text" className="form-control" id="gstin" name="gstin" placeholder="Enter GST Number" />
          </div>
          <div className="col-lg-6">
            <label className="form-label" htmlFor="panNumber">PAN Number</label>
            <input type="text" className="form-control" id="panNumber" name="panNumber" placeholder="Enter PAN Number" />
          </div>
          <div className="col-lg-6">
            <label className="form-label" htmlFor="billingMobile">Mobile</label>
            <div className="input-group">
              <span className="input-group-text">IN (+91)</span>
              <input type="text" className="form-control" id="billingMobile" name="billingMobile" defaultValue="987 654 3210" />
            </div>
          </div>
          <div className="col-lg-6">
            <label className="form-label" htmlFor="billingCountry">Country</label>
            <select className="form-select" id="billingCountry" name="billingCountry" defaultValue="India">
              <option value="India">India</option>
            </select>
          </div>
          <div className="col-12">
            <label className="form-label" htmlFor="billingAddress">Billing Address</label>
            <input type="text" className="form-control" id="billingAddress" name="billingAddress" placeholder="Billing Address" />
          </div>
          <div className="col-lg-6">
            <label className="form-label" htmlFor="billingState">State</label>
            <input type="text" className="form-control" id="billingState" name="billingState" defaultValue="Kerala" />
          </div>
          <div className="col-lg-6">
            <label className="form-label" htmlFor="billingPinCode">PIN Code</label>
            <input type="text" className="form-control" id="billingPinCode" name="billingPinCode" defaultValue="682001" />
          </div>
          <div className="col-12 mt-4">
            <button type="submit" className="btn btn-primary me-2">Save changes</button>
            <button type="reset" className="btn btn-light">Discard</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

const NotificationsTab = () => (
  <div className="tab-pane active">
    <div className="card">
      <h5 className="card-header">Recent Devices</h5>
      <div className="card-body">
        <span className="text-muted">We need permission from your browser to show notifications. <a href="#">Request Permission</a></span>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-borderless">
          <thead className="border-bottom">
            <tr>
              <th className="text-nowrap">TYPE</th>
              <th className="text-nowrap text-center">EMAIL</th>
              <th className="text-nowrap text-center">BROWSER</th>
              <th className="text-nowrap text-center">APP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-nowrap">New for you</td>
              <td><div className="form-check d-flex justify-content-center"><input className="form-check-input" type="checkbox" id="newForYouEmail" name="newForYouEmail" defaultChecked /></div></td>
              <td><div className="form-check d-flex justify-content-center"><input className="form-check-input" type="checkbox" id="newForYouBrowser" name="newForYouBrowser" defaultChecked /></div></td>
              <td><div className="form-check d-flex justify-content-center"><input className="form-check-input" type="checkbox" id="newForYouApp" name="newForYouApp" defaultChecked /></div></td>
            </tr>
            <tr>
              <td className="text-nowrap">Account activity</td>
              <td><div className="form-check d-flex justify-content-center"><input className="form-check-input" type="checkbox" id="accountActivityEmail" name="accountActivityEmail" defaultChecked /></div></td>
              <td><div className="form-check d-flex justify-content-center"><input className="form-check-input" type="checkbox" id="accountActivityBrowser" name="accountActivityBrowser" defaultChecked /></div></td>
              <td><div className="form-check d-flex justify-content-center"><input className="form-check-input" type="checkbox" id="accountActivityApp" name="accountActivityApp" defaultChecked /></div></td>
            </tr>
            <tr>
              <td className="text-nowrap">A new browser used to sign in</td>
              <td><div className="form-check d-flex justify-content-center"><input className="form-check-input" type="checkbox" id="newBrowserSignInEmail" name="newBrowserSignInEmail" defaultChecked /></div></td>
              <td><div className="form-check d-flex justify-content-center"><input className="form-check-input" type="checkbox" id="newBrowserSignInBrowser" name="newBrowserSignInBrowser" defaultChecked /></div></td>
              <td><div className="form-check d-flex justify-content-center"><input className="form-check-input" type="checkbox" id="newBrowserSignInApp" name="newBrowserSignInApp" /></div></td>
            </tr>
            <tr>
              <td className="text-nowrap">A new device is linked</td>
              <td><div className="form-check d-flex justify-content-center"><input className="form-check-input" type="checkbox" id="newDeviceLinkedEmail" name="newDeviceLinkedEmail" defaultChecked /></div></td>
              <td><div className="form-check d-flex justify-content-center"><input className="form-check-input" type="checkbox" id="newDeviceLinkedBrowser" name="newDeviceLinkedBrowser" /></div></td>
              <td><div className="form-check d-flex justify-content-center"><input className="form-check-input" type="checkbox" id="newDeviceLinkedApp" name="newDeviceLinkedApp" /></div></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card-body border-top">
        <h6 className="mb-3">When should we send you notifications?</h6>
        <form>
          <div className="row">
            <div className="col-sm-6 mb-4">
              <select className="form-select" id="notificationFrequency" name="notificationFrequency">
                <option defaultValue>Only when I'm online</option>
                <option value="anytime">Anytime</option>
              </select>
            </div>
          </div>
          <div className="mt-2">
            <button type="submit" className="btn btn-primary me-2">Save changes</button>
            <button type="reset" className="btn btn-light">Discard</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

const ConnectionsTab = () => (
  <div className="tab-pane active">
    <div className="row">
      {/* Connected Accounts */}
      <div className="col-xl-6 mb-4">
        <div className="card h-100">
          <div className="card-header border-bottom">
            <h5 className="mb-1">Connected Accounts</h5>
            <p className="text-muted mb-0">Display content from your connected accounts on your site</p>
          </div>
          <div className="card-body pt-4">
            <div className="d-flex mb-4">
              <div className="flex-shrink-0 me-3">
                <div className="bg-light rounded p-2 text-center" style={{ width: '40px', height: '40px' }}>G</div>
              </div>
              <div className="flex-grow-1 row">
                <div className="col-9 mb-sm-0 mb-2">
                  <h6 className="mb-0">Google</h6>
                  <small className="text-muted">Calendar and contacts</small>
                </div>
                <div className="col-3 text-end">
                  <div className="form-check form-switch">
                    <input className="form-check-input float-end" type="checkbox" role="switch" id="googleConnection" name="googleConnection" defaultChecked />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="d-flex mb-4">
              <div className="flex-shrink-0 me-3">
                <div className="bg-light rounded p-2 text-center" style={{ width: '40px', height: '40px' }}>S</div>
              </div>
              <div className="flex-grow-1 row">
                <div className="col-9 mb-sm-0 mb-2">
                  <h6 className="mb-0">Slack</h6>
                  <small className="text-muted">Communication</small>
                </div>
                <div className="col-3 text-end">
                  <div className="form-check form-switch">
                    <input className="form-check-input float-end" type="checkbox" role="switch" id="slackConnection" name="slackConnection" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Accounts */}
      <div className="col-xl-6 mb-4">
        <div className="card h-100">
          <div className="card-header border-bottom">
            <h5 className="mb-1">Social Accounts</h5>
            <p className="text-muted mb-0">Display content from social accounts on your site</p>
          </div>
          <div className="card-body pt-4">
            <div className="d-flex mb-4">
              <div className="flex-shrink-0 me-3">
                <div className="bg-light rounded p-2 text-center" style={{ width: '40px', height: '40px' }}>F</div>
              </div>
              <div className="flex-grow-1 row">
                <div className="col-8 mb-sm-0 mb-2">
                  <h6 className="mb-0">Facebook</h6>
                  <small className="text-muted">Not Connected</small>
                </div>
                <div className="col-4 text-end">
                  <button className="btn btn-light btn-sm btn-icon"><i className="bi bi-link-45deg">🔗</i></button>
                </div>
              </div>
            </div>

            <div className="d-flex mb-4">
              <div className="flex-shrink-0 me-3">
                <div className="bg-light rounded p-2 text-center" style={{ width: '40px', height: '40px' }}>T</div>
              </div>
              <div className="flex-grow-1 row">
                <div className="col-8 mb-sm-0 mb-2">
                  <h6 className="mb-0">Twitter</h6>
                  <small className="text-primary"><a href="#">@Optimus Algorithms</a></small>
                </div>
                <div className="col-4 text-end">
                  <button className="btn btn-danger btn-sm btn-icon"><i className="bi bi-trash">🗑️</i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


// --- Main Container Component ---

export default function Settings() {
  const [activeTab, setActiveTab] = useState('account');

  return (
    <div className="container-xxl flex-grow-1 container-p-y py-4">
      
      {/* Navigation Pills */}
      <ul className="nav nav-pills settings-nav flex-column flex-md-row mb-4">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'account' ? 'active' : ''}`} 
            onClick={() => setActiveTab('account')}
          >
             <span className="me-2"> <i className="fa fa-user"></i></span>
            Account
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'security' ? 'active' : ''}`} 
            onClick={() => setActiveTab('security')}
          >
             <span className="me-2"><i className="fa fa-lock"></i> </span>
            Security
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'billing' ? 'active' : ''}`} 
            onClick={() => setActiveTab('billing')}
          >
             <span className="me-2"><i className="fa fa-money"></i></span>
             Billing & Plans
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'notifications' ? 'active' : ''}`} 
            onClick={() => setActiveTab('notifications')}
          >
             <span className="me-2"><i className="fa fa-bell"></i></span>
             Notifications
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'connections' ? 'active' : ''}`} 
            onClick={() => setActiveTab('connections')}
          >
            <span className="me-2"><i className="fa fa-link"></i></span>
             Connected Accounts
          </button>
        </li>
      </ul>

      {/* Tab Content Rendering */}
      <div className="tab-content border-0 p-0">
        {activeTab === 'account' && <AccountTab />}
        {activeTab === 'security' && <SecurityTab />}
        {activeTab === 'billing' && <BillingTab />}
        {activeTab === 'notifications' && <NotificationsTab />}
        {activeTab === 'connections' && <ConnectionsTab />}
      </div>
      
    </div>
  );
}