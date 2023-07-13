import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';

const Carousel = () => {
  const { scrollRef, next, prev, activePageIndex, pages } = useSnapCarousel();
  return (
    <>
      <ul ref={scrollRef} className='flex overflow-hidden snap-x snap-mandatory text-left '>
				<li key='1' className='w-full shrink-0'>
					<p>Bem vindos ao <strong>LixTerm</strong>, o terminal interativo na web!</p>
					<p>É aqui que você aprenderá um pouco mais sobre os comandos básicos do Terminal Linux.</p>
					<br />
					<p>Para começarmos, digite <strong>help</strong> para ver todos os comandos disponíveis neste terminal.</p>
					<p className='text-sm'>Clique na seta ( <strong>{'>'}</strong> ) para prosseguir.</p>
        </li>

				<li key='2' className='w-full shrink-0'>
					<p>Agora vamos utilizar os comandos que vimos no comando <strong>help</strong>.</p>
					<p>Para termos maior visualização dos comandos e suas respostas, sem maiores obstruções, podemos usar o comando <strong>clear</strong> para limpar os retornos anteriores.</p>
					<br />
					<p>Vamos testar! Digite <strong>clear</strong> no terminal para entender o que acontecerá.</p>
					<p className='text-sm'>Clique na seta ( <strong>{'>'}</strong> ) para prosseguir.</p>
				</li>

				<li key='3' className='w-full shrink-0'>
					<p>O próximo comando que testaremos é o <strong>sudo</strong>.</p>
					<p>Este comando tem o objetivo de executar comandos em modo root (superusuário).</p>
					<p>Neste terminal de teste, utilizaremos o comando de <strong>update</strong> para simular uma atualização de sistema.</p>
					<br />
					<p>Então, diga <strong>sudo update</strong> para ver seu retorno.</p>
					<p className='text-sm'>Clique na seta ( <strong>{'>'}</strong> ) para prosseguir.</p>
				</li>

				<li key='4' className='w-full shrink-0'>
					<p>Para listar os itens do diretório onde estamos, podemos usar o comando <strong>ls</strong>.</p>
					<p>Com ele, podemos identificar qual arquivo ou pasta gostaríamos de acessar sem necessitar buscar em um gerenciador de arquivos.</p>
					<br />
					<p>Teste utilizar o comando <strong>ls</strong> no terminal!</p>
					<p className='text-sm'>Clique na seta ( <strong>{'>'}</strong> ) para prosseguir.</p>
				</li>

				<li key='5' className='w-full shrink-0'>
					<p>O comando <strong>mkdir</strong>, citado no terminal após executarmos o ls, tem o objetivo de criar um diretório. A partir dele, podemos criar pastas para guardar os nosso arquivos.</p>
					<p>Vamos testar!</p>
					<br />
					<p>Digite no terminal o comando <strong>mkdir</strong> seguido do nome desejado com um espaço.</p>
					<p>Por exemplo: <strong>mkdir pasta1</strong></p>
					<p className='text-sm'>Clique na seta ( <strong>{'>'}</strong> ) para prosseguir.</p>
				</li>

				<li key='6' className='w-full shrink-0'>
					<p>Criada a nossa pasta, vamos acessá-la!</p>
					<p>Com o comando , podemos mudar o diretório e acessar o que acabamos de criar.</p>
					<p>Digite no terminal o comando <strong>cd</strong> seguido do nome da pasta que acabou de criar.</p>
					<p>Por exemplo: <strong>cd pasta1</strong></p>
					<br />
					<p>Para retornar ao diretório anterior, use <strong>cd ..</strong></p>
					<p className='text-sm'>Clique na seta ( <strong>{'>'}</strong> ) para prosseguir.</p>
				</li>

				<li key='7' className='w-full shrink-0'>
					<p>Para obtermos mais informações sobre os comandos, utilizamos o <strong>man</strong>.</p>
					<p>Com ele, podemos saber a função do comando e uma breve descrição sobre eles.</p>
					<p>Vamos testar!</p>
					<br />
					<p>Digite <strong>man</strong> seguido de um dos comandos que temos no nosso terminal.</p>
					<p>Por exemplo: <strong>man ls</strong></p>
					<p className='text-sm'>Clique na seta ( <strong>{'>'}</strong> ) para prosseguir.</p>
				</li>

				<li key='8' className='w-full shrink-0'>
					<p>Isso é tudo!</p>
					<p>Sinta-se livre para explorar os comandos e testar combinações.</p>
					<p>Caso possua dúvidas ou se esqueça de algum comando, clique na seta ( <strong>{'<'}</strong> ) para retornar ou diga <strong>help</strong> para listar todos os comandos disponíveis novamente.</p>
					<br />
					<p>Bons estudos! 📚😊</p>
				</li>
      </ul>

      <section className='flex mt-2 md:mt-5 items-center'>
				<button onClick={() => prev()}>&#10094;</button>
				&nbsp;&nbsp; <span className='text-sm'>{activePageIndex + 1} / {pages.length}</span> &nbsp;&nbsp;
				<button onClick={() => next()}>&#10095;</button>
			</section>
    </>
  );
};

export default Carousel;