import Link from 'next/link'
import { useRouter } from 'next/router'
import MyDropDown from '../components/drop_down_menu'

export default function Header(props) {

    return (
        <>
            <div className="flex justify-between ...">

                <img className="inline-block w-32 h-32 ml-10 mt-9" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9yPA5LCwUiwHGy-gkj3-5XYN_peWuiXJ2zg&usqp=CAU" />
                <div className="p-10 mr-44">


                <MyDropDown/>
                <button className="p-10">Sign-in</button>

            </div>

        </div>
        </>
    )
}