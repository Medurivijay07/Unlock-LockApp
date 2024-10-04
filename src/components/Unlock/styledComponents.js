import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(to bottom, #0b0c1e, #3c2940);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LockImage = styled.img`
  width: 10%;
`
export const DeviceStatus = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
`
export const CustomButton = styled.button`
  background-color: #06b6d4;
  color: #ffffff;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 7px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 40px;
`
