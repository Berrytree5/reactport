import React from 'react'
import Typical from 'react-typical'

export default function Profile() {
            return (
              <div className='profile-container'>
                  <div className='profile-parent'>
                      <div className='profile-details'>
                        <div className='colz'>
                          <a href='https://www.facebook.com/'>
                          <i className='fa fa-facebook-square'></i>
                          </a>
                          <a href='https://www.google.com/'>
                          <i className='fa fa-google-plus-square'></i>
                          </a>
                          <a href='https://www.instagram.com/'>
                          <i className='fa fa-instagram'></i>
                          </a>
                          <a href='https://www.youtube.com/'>
                          <i className='fa fa-youtube-square'></i>
                          </a>
                          <a href='https://twitter.com/'>
                          <i className='fa fa-twitter'></i>
                          </a>
                        </div>
                        <span className="primary-text">
                          {""}
                          Hello, I'M <span className="highlighted-text">Drew</span>
                        </span>
                  </div>
                  <div className='profile-details-role'>
                    <span className='primary-text'>
                      {""}
                      <h1>
                        {""}
                        <Typical
                        loop={Infinity}
                        steps={[
                              "Enthusiastic Dev 😎" ,
                              "Full Stack Developer 💻",
                                1000,
                              "MERN Stack Dev 🏅",
                                1000,
                              "React/React Native Dev 💫",
                                1000,
                              "Front-End Specialist👥 ",
                                1000,
                        ]}
                          />
                      </h1>
                    </span>
                  </div>
              </div>
              </div>

            );
}