import React, { useEffect, useRef } from 'react'
import { AsciiRobot } from '../../components/AsciiRobot'
import { useAuthState } from 'react-firebase-hooks/auth'
import { 
	auth, 
	getDocs, 
	userCollectionRef, 
	addDoc 
} from '../../services/firebase'
import Carousel from '../../components/Carousel'
import CmdComp from '../../components/CmdComp'
import IsLogged from '../../components/LoggedMenu/IsLogged'
import IsNotLogged from '../../components/LoggedMenu/IsNotLogged'

import './styles.css'


export function Terminal() {
	const [ user ] = useAuthState(auth);
	const dataFetchedRef = useRef(false);

	const handleUser = async () => {
		const data = await getDocs(userCollectionRef)
		const userInfo = data.docs.map((doc) => ({ ...doc.data(), id:doc.id }))
		const infoUserDb = userInfo.map((info) => ({ email: info.email }))
		const found = infoUserDb.some(el => el.email === user.email )

		if(!found) {
			await addDoc(userCollectionRef, {
				uid: user.uid,
				name: user.displayName,
				email: user.email
			})
			
		} else { return; }
	}

	useEffect(() => {
		if(dataFetchedRef.current) return;
		dataFetchedRef.current=true
		if(user){
			handleUser()
		}
	}, []);

	return (
		<main className='w-full'>
			<section className='flex flex-row justify-between bg-[#678E9C] p-[15px] items-center '>
				<section>
					LixTerm
				</section>
				<section>
					{ user ? <IsLogged /> : <IsNotLogged /> }
				</section>
			</section>

			<section className='absolute bottom-0 w-full p-2'>
				<section className=' flex md:flex-row flex-col justify-start items-center pb-4 md:pb-16'>
					<section className='md:relative items-center mb-3'>
						<AsciiRobot />
					</section>
					<section className='w-full md:w-[79%] lg:w-full'>
						<Carousel />
					</section>
				</section>

				<section className='md:relative'>
					<CmdComp name={ user ? user.displayName.split(' ')[0] : 'login' } />
				</section>
			</section>
			
		</main>
	)
}
