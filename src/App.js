import * as React from "react";
/* import { PostList, PostShow, PostCreate, PostEdit } from "./posts";
import { CommentList, CommentShow, CommentCreate, CommentEdit } from "./comments"; */
import { UserList, UserShow, UserEdit, UserCreate } from './users';
import { Admin, Resource } from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider
} from "react-admin-firebase";
/* import CommentIcon from '@material-ui/icons/Comment';
 */import CustomLoginPage from './CustomLoginPage';
import UserIcon from '@material-ui/icons/Group';


import { firebaseConfig as config } from './FIREBASE_CONFIG';

const options = {
  logging: true,
  rootRef: '/'
}
const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);


class App extends React.Component {
  render() {
    return (
      <Admin 
        loginPage={CustomLoginPage} 
        dataProvider={dataProvider}
        authProvider={authProvider}
      >
       {/*  <Resource
          name="posts"
          list={PostList}
          show={PostShow}
          create={PostCreate}
          edit={PostEdit}
        />
        <Resource
          name="comments"
          icon={CommentIcon}
          list={CommentList}
          show={CommentShow}
          create={CommentCreate}
          edit={CommentEdit}
        /> */}
        <Resource
          name="users"
          list={UserList}
          show={UserShow}
          icon={UserIcon}
          edit={UserEdit}
          create={UserCreate}
        />
      </Admin>
    );
  }
}

export default App;
