import React from 'react'
import './landing.css'
function LandingPage() {
  return (
    <div>
      <div className="userPage">
        <div className="simmonpage">
          <div className="simondisplay">
            <div>
              <img
                className="simon"
                src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341ce2debac5188bfaa5_Mask%20Group%20174.webp"
              />
            </div>

            <div>
              <p className="ptagsimon">Simon Page</p>
              <br/>
              <p className="simontag">Owner, Mamagato Restaurant</p>
            </div>
          </div>
          <div>
            <p className="simontext">
              “In 2022 so far we are hitting our best months in customers &
              revenue even in an economic downturn"
            </p>
          </div>
          <div className="simonprofit">
            <p className="simonpercentage">40%</p>
            <p className="simonaverage">
              Average net profit
              <br />
              increase
            </p>
          </div>
          <div className="products">
            <h5 className="products1">Products used:</h5>
            <a href="#" className="product-used">
              Messaging
            </a>
            <a href="#" className="product-used">
              Webchat
            </a>
            <a href="#" className="product-used">
              Reviews
            </a>
            <a href="#" className="product-used">
              Listings
            </a>
            <a href="#" className="product-used">
              Referrals
            </a>
          </div>
        </div>

        <div className="simmonpage">
          <div className="simondisplay">
            <div>
              <img
                className="simon"
                src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341c025451d2b6d54b11_xZ4wg2Xj-2.webp"
              />
            </div>

            <div>
              <p className="ptagsimon">Daniel Wilson</p>
              <br/>
              <p className="simontag">
                Marketing head, The Air
                <br />
                Conditioning Company
              </p>
            </div>
          </div>
          <div>
            <p className="simontext" style={{ marginTop: "-14px" }}>
              “Our rating improved from 3.3 to 4.6 & reviews are up 200%, we are
              getting more leads from Google”
            </p>
          </div>
          <div className="simonprofit">
            <p className="simonpercentage">200%</p>
            <p className="simonaverage">
              New review
              <br />
              growth
            </p>
          </div>
          <div className="products">
            <h5 className="products1">Products used:</h5>
            <a href="#" className="product-used">
              Reviews
            </a>
            <a href="#" className="product-used">
              Listings
            </a>
            <a href="#" className="product-used">
              Messaging
            </a>
            <a href="#" className="product-used">
              Webchat
            </a>
            <a href="#" className="product-used">
              Customer Manager
            </a>
          </div>
        </div>

        <div className="simmonpage">
          <div className="simondisplay">
            <div>
              <img
                style={{ width: "80px" }}
                className="simon"
                src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62ae22ec3263c7de8393966d_photo-1493666438817-866a91353ca9.webp"
              />
            </div>

            <div>
              <p style={{ marginLeft: "40px" }} className="ptagsimon">
                Debbie Rose
              </p>
              <br/>
              <p style={{ marginLeft: "40px" }} className="simontag">
                Owner, Jiva luxury Spa
              </p>
            </div>
          </div>
          <div>
            <p className="simontext">
              “Effective text & email marketing campaign on SalesCaptain helped
              us make additional $150k in two weeks”
            </p>
          </div>
          <div className="simonprofit">
            <p className="simonpercentage">$150k</p>
            <p className="simonaverage">
              Generated with marketing
              <br />
              campaign
            </p>
          </div>
          <div className="products">
            <h5 className="products1">Products used:</h5>
            <a href="#" className="product-used">
              Marketing
            </a>
            <a href="#" className="product-used">
              Webchat
            </a>
            <a href="#" className="product-used">
              Review
            </a>
            <a href="#" className="product-used">
              Messaging
            </a>
            <a href="#" className="product-used">
              Competition & Insights
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
