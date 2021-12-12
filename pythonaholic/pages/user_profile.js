import MyDropDown from "../components/drop_down_menu";
import PostAuthenticationHeader from '../components/authenticated_header'
import PreviousOffers from '../components/previous_offers'
import UserCard from '../components/user_card'
import Useractivity from '../components/user_activity'

export default function Header(props) {
    return (
        <>
            <PostAuthenticationHeader />
            <PreviousOffers/>
            <UserCard/>
            <Useractivity/>

        </>
    )
}

