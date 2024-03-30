import styled from 'styled-components'
import {theme} from "../../../../../theme/index";
import AdminTabs from './AdminTabs';
import AdminPanel from './AdminPanel';
import { useState } from 'react';
import AdminContext from '../../../../../context/AdminContext';


export default function Admin() {
  //STATE
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const adminContextValue = {isCollapsed, setIsCollapsed};
  return (
 
  <AdminContext.Provider value={adminContextValue}>
      <AdminStyled>
       { !isCollapsed ? <AdminTabs/>
        :  <AdminTabs/>
  }
   { isCollapsed && <AdminPanel/>
  }
      </AdminStyled>
    </AdminContext.Provider>
   
  )
}


const AdminStyled = styled.div`
position: absolute;
bottom: 0;
left: 0;
right: 0;
`

    
 
  
