import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUsersProfile } from '../../redux/profile_reducer';

class ProfileContainer extends React.Component {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                debugger;
                this.props.setUsersProfile(response.data);
            });
    }
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile

});

export default connect(mapStateToProps, { setUsersProfile })(ProfileContainer);