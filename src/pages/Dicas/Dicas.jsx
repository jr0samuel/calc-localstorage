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
                        Para fazer potenciação, faça 2^2. E a potência de potência é (5^3)^0, que é igual a 1, é diferente de 5^3^0, que é igual a 5.
                        <br /><br />
                        Para fazer radiciação, faça 25^(1/2), isso é a raiz quadrada de 25, o resultado é 5. Perceba: a raiz quadrada é 1/2, a raiz cúbica é 1/3, e assim sucessivamente. Existe relação entre a radiciação e a expoenenciação. Não esqueça dos parênteses no expoente, senão o resultado será outro.
                    </p>
                    <hr className="taghr"></hr>
                    <p>
                        Para saber a porcantagem de algum valor, por exemplo, 20 por cento de 200, faça 0.2 (que é 20 por cento) vezes 200, o resultado é 40, ou seja, 40 é 20 por cento de 200.
                    </p>
                    <hr className="taghr"></hr>
                    <p>
                        Outro caso: 90 corresponde a 30 por cento de quanto? Para calcular, faça 90 dividido por 0.3 (que é 30%), o resultado é 300, logo, 90 é 30% de 300.
                    </p>
                    <hr className="taghr"></hr>
                    <p>
                        Mais um caso: 90 corresponde a quantos por cento dentro de 360? Para calcular, faça 90 dividido por 360, o resultado é 0.25, depois multiplique por 100, porque é porcentagem, portanto, 90 é 25% de 360.
                        <br /><br />
                        Perceba que 25% é 1 quarto (1/4), sendo assim, 90 vezes 4 é 360, e 360 dividido por 4 é 90.
                        <br /><br />
                        Olha que interessante: 90 é 360% (3,6) vezes maior que 25. Vamos repartir 360% em 300% + 50% + 10%. Comece multiplicando 25 por 300% (25 vezes 3), o resultado é 75. Depois multiplique 25 por 50%, que é 12.5, a metade de 25, então adicione a 75, será 87.5. Por fim, multiplique 25 por 10%, que é 2.5, um décimo de 25. O resultado final é 90, ou seja, 25 vezes 3.6 é 90, e 90 dividido por 3.6 é 25.
                    </p>
                    <hr className="taghr"></hr>
                    <p>
                        Para saber qual valor corresponde a 10% dentro de 500, faça 500 vezes 0.1 (10%), o resultado é 50, ou faça 500 dividido por 10.
                        <br /><br />
                        Ou faça o contrário: 500 vezes 0.9 (90%), o resultado é 450, depois faça 500 menos 450.
                    </p>
                    <hr className="taghr"></hr>
                    <p>
                        Para saber o desconto de algo, faça o seguinte: desconto de 20% de 150, faça 150 vezes 0.8, o resultado é 120, perceba que 0.8 é 80%, ou seja, 100% menos o desconto de 20%. Você também pode fazer 150 vezes 0.2, o resultado é 30, depois subtraia 30 de 150, o resultado é 120.
                        <br /><br />
                        Outra situação de desconto. Se alguém falar "com 20% de desconto, fica 120", a pessoa não falou o valor original, para saber, faça 120 dividido por 0.8, o resultado é 150, o original é 150, repare que 120 é 80% (0.8) do original, porque descontou 20% (0.2), 150 é 100%.
                        <br /><br />
                        Outra situação. Se alguém falar "de 150 vai para 120", a pessoa não falou a porcentagem que descontou, para saber, faça 120 dividido por 150, o resultado é 0.8, isso quer dizer que 120 é 0.8 de 150, então descontou 0.2 de 150. Se quiser, é só multiplicar 0.8 por 100, que é 80%.
                        <br /><br />
                        Para saber o aumento de algo, faça o seguinte: aumento de 20% de 150, faça 150 vezes 1.2, o resultado é 180, perceba que é 1 mais 0.2, por isso é 1.2, lembre-se que 1 é 100%, o valor total, original, logo, 150 mais 20%. Outra forma de fazer isso é 150 vezes 0.2, o resultado é 30, então soma 30 em 150.
                        <br /><br />
                        Outra situação. Se alguém falar "com 20% de aumento, fica 180", não falou o valor original, então faça 180 dividido por 1.2, o resultado é 150, portanto, aumentar 20% em 150, fica 180.
                        <br /><br />
                        Outra situação. Se falar "vai aumentar de 150 para 180", não falou a porcentagem que aumentou, então faça 180 dividido por 150, o resultado é 1.2, ou seja, aumentou 20%. Se quiser, multiplique 1.2 por 100, que é 120%, 100% + 20%, 100% é 150 e 20% é o aumento, no caso, 20% de 150, aumentando 30.
                    </p>
                    <hr className="taghr"></hr>
                    <p>
                        Uma dica importante sobre porcentagem: perceba que 10 por cento (10/100) é 0.1 (1 décimo), isso é apenas a estrutura básica da porcentagem, mas a porcentagem é um elemento relativo, ou seja, não tem valor por si, só tem relevância se estiver relacionado, relativo a algum valor absoluto, valor de fato, concreto. Um professor de matemática que tive ensinou que devemos fazer uma pergunta quando alguém fala "tal coisa é tantos por cento", vemos isso no jornalismo para fazer sensacionalismo e confundir o entendimento, e também podemos questionar a capacidade matemática de muitos jornalistas, enfim, a pergunta que meu professor ensinou é: "de quê?"; portanto, se alguém falar "tal coisa mudou tantos por cento", você pergunta "mudou tantos por cento de quê, de quanto, qual o valor original e qual o valor final?"; tome cuidado com jornalistas e pessoas que não mostram fatores importantes.
                    </p>
                    <hr className="taghr"></hr>
                    <p>
                        Se a página atualizar por algum motivo ou se você atualizar, mesmo sem querer, o que estava no visor será perdido, porque a página vai para o estado original.
                        <br /><br />
                        A página com as Dicas abre em outra aba para não perder o que foi digitado no visor, se abrisse na mesma aba, iria perder quando voltasse para a calculadora.
                        <br /><br />
                        Nessa calculadora, você pode usar só o teclado da calculadora, o teclado do celular não vai aparecer.
                        <br /><br />
                        Use * para multiplicação. Use / para divisão. Use ponto para números decimais, não use vírgula. Ao digitar mil (e outros milhares), não digite 1.000 com ponto nem 1,000 com vírgula, digite 1000 sem ponto e sem vírgula.
                        <br /><br />
                        O botão Igual (=) faz a conta e salva no histórico. Se quiser apenas salvar alguma coisa, um número ou informação, por exemplo, use o botão Salvar.
                    </p>
                    <hr className="taghr"></hr>
                    <p>
                        Se a conta for grande, como na imagem abaixo, use os botões de movimentação que estão abaixo do visor, mas no celular tem um detalhe: ao clicar em Começo ou Fim, talvez você precise deslizar o visor para os lados, mas a barrinha foi para o Começo ou Fim, só o visor que não acompanhou, então precisa deslizar, isso não ocorre no computador.
                        <br /><br />
                        Se você adivinhar qual o contexto da conta da imagem abaixo, você é gênio!
                    </p>
                    <hr className="taghr"></hr>
                    <img
                        className="my-0 mx-auto block"
                        src="/tela_da_calculadora_em_uso.png"
                        alt="Tela de exemplo conforme a explicação de cima, veja no site https://calculadoracomdicas.vercel.app"
                    ></img>
                    <hr className="taghr"></hr>
                </div>
                <hr className="taghr opacity-0!" />
                <div className="bg-(--color-grey1) py-3 h-4 relative">
                    <span className="before:absolute before:content-[''] before:block before:h-1 before:w-full before:bg-(--color-blue) before:-top-4" />
                </div>
            </div>
        </section>
    );
};
