import "./SideBar.css";
import styled from 'styled-components'
import { useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag,  faPlus, faUserFriends, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'




export default function Sidebar() {
  const navigate = useNavigate()
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Buttons onClick={() => navigate('/backoffice/Novedades')}>
            <FontAwesomeIcon icon={faPlus}/>
              Novedades
            
            </Buttons>
            <Buttons onClick={() => navigate('/backoffice/Shopping')}>
            <FontAwesomeIcon icon={faShoppingBag}/>
              Shopping
            
            </Buttons>
            <Buttons onClick={() => navigate('/backoffice/Contacto')}>
            <FontAwesomeIcon icon={faPhoneAlt}/>
              Contacto
            
            </Buttons>
            <Buttons onClick={() => navigate('/backoffice/Nosotros')}>
            <FontAwesomeIcon icon={faUserFriends}/>
              Nosotros
              <FontAwesomeIcon icon="fa-solid fa-cassette-tape" />
            </Buttons>

          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              {/* <MailOutline className="sidebarIcon" /> */}
              Mail
            </li>
            <li className="sidebarListItem">
              {/* <DynamicFeed className="sidebarIcon" /> */}
              Feedback
            </li>
            <li className="sidebarListItem">
              {/* <ChatBubbleOutline className="sidebarIcon" /> */}
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
        </div>
      </div>
    </div>
  );
}

const Buttons = styled.button`
background-color: #fff;
height: 40px;
width: 100px;
display: flex;
flex-direction: row;
padding: 5px;
align-items: center;
border-radius: 10px;
`
