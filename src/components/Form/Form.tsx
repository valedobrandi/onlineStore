import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiVisaLine } from 'react-icons/ri';
import { FaCcMastercard, FaCcPaypal } from 'react-icons/fa6';
import { CartProductListType } from '../../types/types';
import {
  Input,
  PersonalInfo,
  CheckForm,
  BuyInfo,
  PayIcon,
  Radio,
} from './styled';

export default function Form(props: {
  setProductList: (state: CartProductListType[]) => void;
  setAddProduct: (state: CartProductListType[]) => void;
}) {
  const { setProductList, setAddProduct } = props;

  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [pagamento, setPagamento] = useState<string>('');
  const [checkForm, setCheckForm] = useState(false);

  function checkFormImput() {
    const inputs = [nome, email, cpf, telefone, cep, endereco, pagamento];
    return inputs.every((input) => input.trim() !== '');
  }

  function checkInput(input: string) {
    if (checkForm) return input === '';
  }

  const handleSubimit = (
    event:
    | React.ChangeEvent<HTMLInputElement>
    | React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setCheckForm(false);
    if (!checkFormImput()) {
      setCheckForm(true);
      return;
    }
    localStorage.removeItem('CartList');
    setProductList([]);
    setAddProduct([]);
    navigate('/carrinho');
  };

  return (
    <CheckForm onSubmit={ handleSubimit }>
      <PersonalInfo>
        <Input
          style={ checkInput(nome) ? { borderColor: 'red' } : { borderColor: '' } }
          placeholder="Name"
          data-testid="checkout-fullname"
          type="text"
          id="Nome Completo"
          name="Nome Completo"
          maxLength={ 40 }
          value={ nome }
          onChange={ (event) => setNome(event.target.value) }
        />

        <Input
          style={ checkInput(email) ? { borderColor: 'red' } : { borderColor: '' } }
          placeholder="Email"
          data-testid="checkout-email"
          name="Email"
          type="text"
          id="Email"
          maxLength={ 50 }
          value={ email }
          onChange={ (event) => setEmail(event.target.value) }
        />

        <Input
          style={ checkInput(cpf) ? { borderColor: 'red' } : { borderColor: '' } }
          placeholder="CPF"
          data-testid="checkout-cpf"
          name="CPF"
          type="text"
          id="CPF"
          maxLength={ 11 }
          value={ cpf }
          onChange={ (event) => setCpf(event.target.value) }
        />

        <Input
          style={ checkInput(telefone) ? { borderColor: 'red' } : { borderColor: '' } }
          placeholder="Telephone"
          data-testid="checkout-phone"
          name="Telefone"
          type="text"
          id="Telefone"
          maxLength={ 200 }
          value={ telefone }
          onChange={ (event) => setTelefone(event.target.value) }
        />

        <Input
          style={ checkInput(cep) ? { borderColor: 'red' } : { borderColor: '' } }
          placeholder="CEP"
          data-testid="checkout-cep"
          name="CEP"
          type="text"
          id="CEP"
          maxLength={ 28 }
          value={ cep }
          onChange={ (event) => setCep(event.target.value) }
        />

        <Input
          style={ checkInput(endereco) ? { borderColor: 'red' } : { borderColor: '' } }
          placeholder="Address"
          data-testid="checkout-address"
          name="Endereço"
          type="text"
          id="Endereço"
          maxLength={ 28 }
          value={ endereco }
          onChange={ (event) => setEndereco(event.target.value) }
        />
      </PersonalInfo>
      <BuyInfo>
        <PayIcon htmlFor="Visa">
          <RiVisaLine
            style={
              pagamento === 'Visa' ? { color: '#4766ff' } : { color: '#000000' }
            }
          />
          <Radio
            data-testid="visa-payment"
            type="radio"
            id="Visa"
            name="Visa"
            value="Visa"
            checked={ pagamento === 'Visa' }
            onChange={ (event) => setPagamento(event.target.name) }
          />
        </PayIcon>
        <PayIcon htmlFor="MasterCard">
          <FaCcMastercard
            style={
              pagamento === 'MasterCard' ? { color: '#4766ff' } : { color: '#000000' }
            }
          />
          <Radio
            data-testid="master-payment"
            type="radio"
            id="MasterCard"
            name="MasterCard"
            value="MasterCard"
            checked={ pagamento === 'MasterCard' }
            onChange={ (event) => setPagamento(event.target.name) }
          />
        </PayIcon>
        <PayIcon htmlFor="Elo">
          <FaCcPaypal
            style={
              pagamento === 'Elo' ? { color: '#4766ff' } : { color: '#000000' }
            }
          />
          <Radio
            data-testid="elo-payment"
            type="radio"
            id="Elo"
            name="Elo"
            value="Elo"
            checked={ pagamento === 'Elo' }
            onChange={ (event) => setPagamento(event.target.name) }
          />
        </PayIcon>
        <p
          style={ { color: 'red' } }
          data-testid="error-msg"
        >
          {checkForm && 'invalid fields'}
        </p>
      </BuyInfo>
      <button data-testid="checkout-btn" type="submit">
        Buy
      </button>
    </CheckForm>
  );
}
