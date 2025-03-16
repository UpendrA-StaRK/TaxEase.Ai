

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export const CalculatorPage = () => {
  const navigate = useNavigate();

  const handleUploadRedirect = () => {
    window.location.href='https://taxassistantapp-ngw3e9zhm2qrsp3rmtaye6.streamlit.app/';
  };

  return (
    <DIV>
      <div className='main'>
        <div style={{ textAlign: 'center', margin: '40px 0', fontFamily: 'Arial, sans-serif' }}>
          <h1 style={{ fontSize: '40px', fontWeight: 'bold', color: '#202124' }}>
            Tax <span style={{ color: '#4285F4' }}>Calculators</span>
          </h1>
          <h2 style={{ fontSize: '20px', fontWeight: '400', color: '#5f6368', marginTop: '8px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.5' }}>
            Calculate everything you need to know about your tax and how tax affects you
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1000px', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          {/* Section Title */}
          <h2 style={{ color: '#202124', fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>
            Calculators for Individuals
          </h2>

          {/* Grid Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', width: '30%' }}>
            {/* Salary Tax */}
            <div style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '20px', textAlign: 'center', backgroundColor: '#fff', transition: 'transform 0.2s ease-in-out' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <a href="https://taxassistantapp-ngw3e9zhm2qrsp3rmtaye6.streamlit.app/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src="https://www.taxtim.com/za/images/calc-income-tax.png" alt="Salary Tax" style={{ width: '100%', borderRadius: '8px' }} />
                <p style={{ fontSize: '18px', fontWeight: '600', marginTop: '10px' }}>Salary Tax</p>
                <div style={{ color: '#5f6368', fontSize: '14px' }}>
                  How to calculate how much PAYE and UIF will be deducted from your salary to work out your take-home pay.
                </div>
              </a>
            </div>
          </div>

          {/* Upload PDF Button */}
          <Button colorScheme="blue" onClick={handleUploadRedirect} style={{ marginTop: '20px' }}>
            Upload PDF
          </Button>
        </div>
      </div>
    </DIV>
  );
}

const DIV = styled.div`
  .main{
    width: 100%;
    padding-left: 44px;
    padding-top: 100px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom:150px;
  }
  .heading{
    text-align: left;
    padding: 0 20px 0 20px;
    letter-spacing: -1px;
    font-size: 24px;
    font-weight: 600;
    color: #4d4d4d;
    background-color: #ffffff;
  }
  .left-right{
    display: flex;
    width: 100%;
    height: 100vh;
    margin-top: 5px;
    gap: 100px;
  }
  .left-right h2{
    text-align: left;
    padding: 0 20px 0 20px;
    letter-spacing: -1px;
    font-size: 24px;
    font-weight: 500;
    color: #4d4d4d;
    background-color: #ffffff;
  }
  .left{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-top: 0px;
    padding-left: 20px;
    gap: 5px;
    cursor: pointer;
  }
  .left p{
    position: absolute;
    text-align: center;
    z-index: 10;
    display: inline-block;
    top: 80%;
    right: 30px;
    font-size: 16px;
    color: #ffffff;
  }
  .left img{
    position: absolute;
  }
  .left div{
    width: 195px;
    height: 195px;
    position: relative;
    z-index: 1;
    background-color: #85c4cc;
  }
  .right{
    width: 35%;
    padding-top: 22px;
  }
  .right-flex{
    display: flex;
  }
  @media screen and (max-width: 768px) {
    .left {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 350px) {
    .left {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media screen and (max-width: 720px) {
    .left-right {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 720px) {
    .right-flex{
      flex-direction: column;
    }
  }
`;