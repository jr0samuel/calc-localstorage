import { useEffect } from "react";
import { handleHead } from "../../utils/handleHead.js";
import "./dicas.css";
export default function Dicas(){
    useEffect(() => {
        handleHead('/calculator-icon-5.png', 'Dicas');
    }, []);
    return (
        <section>
            <h1>Dicas Matemáticas</h1>
            <div className="border-3 border-(--color-grey1)">
                <div className="bg-(--color-grey1) py-3 h-4 relative">
                    <span className="after:absolute after:content-[''] after:block after:h-1 after:w-full after:bg-(--color-blue) after:-bottom-4" />
                </div>
                <hr className="taghr opacity-0!" />
                <div className="overflow-x-scroll scrollbar-none max-h-150">
                    <p>
                        Para potenciação, faça 2^2, resultado 4. A potência de potência é (5^3)^0, resultado 1, é diferente de 5^3^0, resultado 5.
                        <br/><br />
                        Para radiciação, faça 25^(1/2), isso é a raiz quadrada de 25, resultado 5. Perceba: raiz quadrada é 1/2, raiz cúbica é 1/3, e assim sucessivamente. Existe relação entre a radiciação e a expoenenciação (potenciação). Não esqueça dos parênteses no expoente, senão o resultado será outro.
                    </p>
                    <hr className="taghr" />
                    <p>
                        Para saber a porcentagem de algum valor, por exemplo, 20 por cento de 200, faça 0.2 (que é 20%) vezes 200, resultado 40, ou seja, 40 é 20% de 200.
                    </p>
                    <hr className="taghr" />
                    <p>
                        Outro caso de porcentagem: 90 é 30% de quanto? Faça 90 dividido por 0.3 (que é 30%), resultado 300, então 90 é 30% de 300, e 300 é 100% desse caso.
                    </p>
                    <hr className="taghr" />
                    <p>
                        Mais um caso: 90 corresponde a quantos por cento dentro de 360? Faça 90 dividido por 360, o resultado é 0.25, depois multiplique 0.25 por 100, porque é porcentagem, portanto, 90 é 25% de 360.
                        <br/><br />
                        Perceba que 25% é 1 quarto (1/4), sendo assim, 90 vezes 4 é 360, e 360 dividido por 4 é 90.
                        <br/><br />
                        Outra coisa interessante: 90 é 360% (3.6) vezes maior que 25. Vamos repartir 360% em 300% (3) + 50% (0.5) + 10% (0.1). Comece multiplicando 25 por 300% (25 vezes 3), resultado 75. Depois 25 por 50% (25 vezes 0.5), resultado 12.5, então soma 75 com 12.5, é 87.5. Por fim, 25 por 10% (25 vezes 0.1), resultado 2.5, soma 87.5 com 2.5. O resultado final é 90, ou seja, 25 vezes 3.6 é 90, e 90 dividido por 3.6 é 25.
                    </p>
                    <hr className="taghr" />
                    <p>
                        Para saber qual valor corresponde a 10% dentro de 500, faça 500 vezes 0.1 (que é 10%), o resultado é 50.
                        <br/><br />
                        Ou faça o contrário: 500 vezes 0.9 (90%), o resultado é 450, mas isso é 90%, então tem que subtrair 500 menos 450 para pegar 10%, que é 50.
                    </p>
                    <hr className="taghr" />
                    <p>
                        Para saber o desconto de algo: se for "algo é 150 com desconto de 20%", faça 150 vezes 0.8 (que é 80%), o resultado é 120, porque pega só 80% sem 20%, e a diferença entre 120 e 150 é 30, que é o desconto. Também pode fazer o contrário: 150 vezes 0.2 para pegar 20%, o resultado é 30, depois subtrair 30 de 150. 30 é o desconto, 120 é o valor final depois do desconto.
                        <br/><br />
                        Se for "algo é 120 com 20% de desconto", não mostra o valor completo sem desconto, para saber, faça 120 dividido por 0.8 (que é 80%), sem 20%, o resultado é 150, que é o valor completo sem desconto, repare que 120 é o valor descontado, é 80% (0.8) do completo, e 150 é o completo 100%, e o desconto (20%) é a diferença entre 150 e 120, que é 30.
                        <br/><br />
                        Se for "algo diminui de 150 para 120", não mostra a porcentagem que descontou, para saber, faça 120 dividido por 150, o resultado é 0.8, isso quer dizer que 120 é 0.8 (80%) de 150, então descontou 0.2 (20%), que é 30.
                        <br/><br />
                        Para saber o aumento de algo: "algo aumentou 20% de 150", faça 150 vezes 1.2, o resultado é 180, perceba que 1.2 é 1 (100%) mais 0.2 (20%), logo, 150 mais 20%. Outra forma é 150 vezes 0.2, o resultado é 30, então soma 30 em 150.
                        <br/><br />
                        Se for "algo é 180 com 20% de aumento", não mostra o valor sem aumento, faça 180 dividido por 1.2, o resultado é 150, quer dizer que 150 é a base que teve aumento de 20%, no caso, 30.
                        <br/><br />
                        Se for "algo aumenta de 150 para 180", não mostra a porcentagem que aumentou, faça 180 dividido por 150, o resultado é 1.2, ou seja, aumentou 20%, no caso, 30.
                    </p>
                    <hr className="taghr" />
                    <p>
                        Uma dica importante sobre porcentagem: perceba que 10 por cento (10/100) é 0.1 (1 décimo), isso é apenas a estrutura básica da porcentagem, mas a porcentagem é um elemento relativo, ou seja, não tem valor por si, só tem relevância se estiver relacionado, relativo a algum valor absoluto, valor de fato, concreto. Um professor de matemática que tive ensinou que devemos fazer uma pergunta quando alguém fala "tal coisa é tantos por cento", vemos isso no jornalismo para fazer sensacionalismo e confundir o entendimento, e também podemos questionar a capacidade matemática de muitos jornalistas, enfim, a pergunta que meu professor ensinou é: "de quê?"; portanto, se alguém falar "tal coisa mudou tantos por cento", você pergunta "mudou tantos por cento de quê, de quanto, qual o valor original e qual o valor final?"; tome cuidado com jornalistas e pessoas que não mostram fatores importantes.
                    </p>
                    <hr className="taghr" />
                    <p>
                        Se a página atualizar por algum motivo ou você atualizar, mesmo sem querer, o que você digitou no visor será perdido, e a tela vai para o estado original com o visor vazio, mas as contas continuam salvas no histórico.
                        <br/><br />
                        A página com as Dicas abre em outra aba para você ficar com as duas abas abertas e poder consultar as dicas durante a conta.
                        <br/><br />
                        Se você estiver no celular, só tem o teclado da calculadora, o teclado do celular não vai aparecer.
                        <br/><br />
                        Use * para multiplicação. Use / para divisão. Use ponto para números decimais, não use vírgula. Ao digitar mil (e outros milhares, milhões, etc), não digite 1.000 nem 1,000, digite apenas 1000.
                        <br/><br />
                        O botão Calcular faz a conta e salva no histórico. Se quiser apenas salvar alguma coisa, um número ou informação, use o botão Salvar.
                    </p>
                    <hr className="taghr" />
                    <p>
                        Se a conta for grande, como na imagem abaixo, use os botões de movimentação que estão abaixo do botão Dicas, mas tem um detalhe no computador: ao clicar em Começo ou Fim ou nas setas da calculadora abaixo do botão Dicas, talvez você precise usar as setas do teclado do pc (também Home e End) ou o touchpad para mover o visor para os lados, mas a barrinha de digitação foi para o Começo ou Fim, só o visor que não acompanhou.
                    </p>
                    <hr className="taghr" />
                    <p className="text-center">
                        Se você adivinhar qual é o contexto da conta na imagem abaixo, você é gênio!
                    </p>
                    {/* <hr className="taghr" /> */}
                    <img
                        className="my-0 mx-auto block"
                        src="/tela_da_calculadora_em_uso.png"
                        alt="Imagem com o desafio para adivinhar o contexto dessa conta"
                    />
                    <hr className="taghr"/>
                </div>
                <hr className="taghr opacity-0!"/>
                <div className="bg-(--color-grey1) py-3 h-4 relative">
                    <span className="before:absolute before:content-[''] before:block before:h-1 before:w-full before:bg-(--color-blue) before:-top-4"/>
                </div>
            </div>
        </section>
    );
};
