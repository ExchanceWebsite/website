import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BaseInput from '../../components/BaseInput';
import '../../CSS/pos-login.css';


import './styles.css'
import httpFetch from '../../hooks/httpFetch';

function Wizard() {
    const [step, setStep] = useState(1);
    const [diasMinimos, setDiasMinimos] = useState(1);
    const [diasMaximos, setDiasMaximos] = useState(1);
    const [names, setNames] = useState([]);
    const [inputName, setinputName] = useState('');
    const [frente, setFrente] = useState();
    const [verso, setVerso] = useState();
    const [selfie, setSelfie] = useState();
    const [arquivo, setArquivo] = useState();
    const steps = ['1', '2', '3', '4', '5', '6', '7'];

    const navigate = useNavigate();

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const [formData, setFormData] = useState({
        cep: '',
        pais: '',
        cidade: '',
        endereco: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSearchCEP = () => {
        setFormData({
            ...formData,
            pais: '',
            cidade: '',
            endereco: '',
        });
        axios.get(`https://viacep.com.br/ws/${formData.cep}/json/`)
            .then((response) => {
                const data = response.data;
                setFormData({
                    ...formData,
                    pais: 'Brasil',
                    cidade: data.localidade,
                    endereco: data.logradouro,
                });
            })
            .catch((error) => {
                console.error('Erro ao buscar o CEP:', error);
            });
    };
    const upload = (event) => {
        console.log(arquivo, "valor")
        setArquivo(event.target.value)

        window.localStorage.setItem('frente', frente)
        window.localStorage.setItem('verso', verso)
        window.localStorage.setItem('selfie', selfie)

        const uploadUser = { arquivo };
        event.target.parentNode.style.backgroundImage = `url(${event.target.value})`
        httpFetch.post(`/estudantes?id=${id}`, uploadUser)
            .then((res) => {
                console.log(res.data);
            }).catch((err) => {
                console.log(err.response);
                console.log(uploadUser);
            });
    }
    const addAcomodacao = () => {
        const data = {
            "Host": {
                "idHostFamily": window.localStorage.getItem('id_host')
            },
            "descricao": window.localStorage.getItem('emailHost'),
            "inicioDisponibilidade": "2023-10-10",
            "fimDisponibilidade": new Date(),
            "valorDiaria": 100,
            "localização": 'são paulo',
            "regras": "da loja"
        }
        httpFetch.post("/acomodacoes", data);
        window.localStorage.setItem('diaria', 100)
        navigate('/conta');
        
    }
    return (
        <div>
            <div className="progress-bar">
                {steps.map((text, index) => (
                    <div key={index} className={`step ${index + 1 === step ? 'active' : ''}`}>
                        {text}
                    </div>
                ))}
            </div>

            {step === 1 && (
                <div>
                    <h2>Requisitos necessarios para recebimento de intercambista</h2>
                    <p> Disponibilidade de café da manhã.</p>
                    <p>Cama Indivídual.</p>
                    <p>Espaço para guardar pertences pessoais.</p>
                    <p>Acesso à internet Wi-F</p>
                    <p>Respeito pela privacidade e espaço pessoal do intercambista.</p>
                    <p>Limpeza e organização da casa.</p>
                    <p>Compreensão e respeito pelas necessidades alimentares e culturais do intercambista.</p>
                    <button className='btn-end' onClick={handleNext} >Próximo</button>
                </div>
            )}
            {step === 2 && (
                <div className='container-step'>
                    <h3>Localização</h3>
                    <input
                        type="text"
                        name="cep"
                        placeholder="CEP"
                        value={formData.cep}
                        onChange={handleInputChange}
                        onBlur={handleSearchCEP}
                    />
                    <div>
                        <input
                            type="text"
                            name="pais"
                            placeholder="Pais"
                            value={formData.pais}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="cidade"
                            placeholder="Cidade"
                            value={formData.cidade}
                            onChange={handleInputChange}
                        />
                    </div>
                    <input
                        type="text"
                        name="endereco"
                        placeholder="Endereço"
                        value={formData.endereco}
                        onChange={handleInputChange}
                        style={{ width: '600px' }}
                    />
                    <div>
                        <button onClick={handlePrevious}>Voltar</button>
                        <button className='btn-next' onClick={handleNext}>Próximo</button>
                    </div>
                </div>
            )}
            {step === 3 && (
                <div className='container-step'>
                    <h3>Disponibilidade</h3>
                    <p>A partir de:</p>
                    <input type="date" />
                    <div className='input-dias'>
                        <p>Dias:</p>
                        <div className='input-dias-container'>
                            {diasMinimos} Dias Mínimos
                            <div>
                                <span onClick={() => setDiasMinimos(diasMinimos + 1)}>+</span> <span onClick={() => setDiasMinimos(diasMinimos - 1)}>-</span>
                            </div>
                        </div>
                        <div className='input-dias-container'>
                            {diasMaximos} Dias Máximos
                            <div>
                                <span onClick={() => setDiasMaximos(diasMaximos + 1)}>+</span> <span onClick={() => setDiasMaximos(diasMaximos - 1)}>-</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button onClick={handlePrevious}>Voltar</button>
                        <button className='btn-next' onClick={handleNext}>Próximo</button>
                    </div>

                </div>
            )}
            {step === 4 && (
                <div className='container-step'>
                    <h2>Acomodação</h2>
                    <label for="quarto">Tipo de quarto:</label>
                    <select id="quarto" name="quartos">
                        <option value="suite">Suíte</option>
                        <option value="compartilhado">Compartilhado</option>
                        <option value="individual">Individual</option>
                    </select>
                    <label for="banheiro">Tipo de banheiro:</label>
                    <select id="banheiro" name="banheiro">
                        <option value="individual">Individual</option>
                        <option value="compartilhado">Compartilhado</option>
                    </select>
                    <label>Preço acomodação</label>
                    <input type='text' />
                    <div>
                        <button onClick={handlePrevious}>Voltar</button>
                        <button className='btn-next' onClick={handleNext}>Próximo</button>
                    </div>
                </div>
            )}
            {step === 5 && (
                <div className='container-step'>
                    <h2>Regras</h2>
                    <label for="fumar">permite fumar:</label>
                    <select id="fumar" name="fumar">
                        <option value="s">sim</option>
                        <option value="n">Não</option>
                    </select>
                    <label for="pets">Permite pets:</label>
                    <select id="pets" name="pets">
                        <option value="s">Sim</option>
                        <option value="n">Não</option>
                    </select>
                    <div>
                        <button onClick={handlePrevious}>Voltar</button>
                        <button className='btn-next' onClick={handleNext}>Próximo</button>
                    </div>
                </div>
            )}
            {step === 6 && (
                <div className='container-step'>
                    <h2>Host Family</h2>
                    <div className='container-host-family'>
                        <div className='container-host-family-inputs'>
                            <label>Nome</label>
                            <input type='text' value={inputName} onChange={(e) => setinputName(e.target.value)} />
                            <label>Parentesco</label>
                            <input type='text' />
                            <label>Idade</label>
                            <input type='text' />
                            <button onClick={() => setNames([...names, inputName])} className='add-btn'>Adicionar</button>

                        </div>
                        <div className='container-host-family-result'>
                            {names.map((item, index) => (
                                <p key={index}>
                                    {item}
                                </p>
                            ))}
                        </div>

                    </div>

                    <div>
                        <button onClick={handlePrevious}>Voltar</button>
                        <button className='btn-next' onClick={handleNext}>Próximo</button>
                    </div>
                </div>
            )}
            {step === 7 && (
                <div>
                    <div id="informacoes-conta">
                        <div>
                            <h2>Identidade frente</h2>
                            <div id="card-conta">
                                <BaseInput type="file" insert={setFrente} onBlur={upload} />
                            </div>
                        </div>
                        <div>
                            <h2>Identidade Verso</h2>
                            <div id="card-conta">
                                <BaseInput type="file" insert={setVerso} onBlur={upload} />
                            </div>
                        </div>
                        <div>
                            <h2>Selfie</h2>
                            <div id="card-conta">
                                <BaseInput type="file" insert={setSelfie} onBlur={upload} />
                            </div>
                        </div>
                    </div>
                    <div className='btn-end-container'>
                        <button className='btn-end' onClick={() => addAcomodacao()}>Finalizar</button>
                    </div>

                </div>
            )}
        </div>
    );
}

export default Wizard;
