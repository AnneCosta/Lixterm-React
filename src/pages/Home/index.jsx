import React from 'react'
import './style.css'

export function Home() {
	return (
		<main className='containerHome'>
			<section className='mb-8'>
				<h1 className='titleHome text-7xl'>LixTerm</h1>
				<p className='subtitleHome text-xl'>O seu simulador de terminal Linux</p>
			</section>
			<section className='flex flex-col max-xl:w-1/4 lg:w-1/4 md:w-1/3 w-full'>
				<a className='buttonHome text-lg rounded-lg lg:rounded-xl md:rounded-xl' href="/terminal">Acessar terminal</a>
				<a className='buttonHome text-lg rounded-lg lg:rounded-xl md:rounded-xl' href="/login">Fazer login</a>
			</section>
		</main>
	)
}
