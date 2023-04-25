import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { BaseSearch, ContentBusca } from '../../components/BaseSearch';
import TheHeader from '../../components/TheHeader';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useLocation } from 'react-router-dom';
import TheFooter from '../../components/TheFooter';
import BaseInput from '../../components/BaseInput';
import BaseSelect from '../../components/BaseCheck';
import BaseButton from '../../components/BaseButton';
import colors from '../../styles/theme';

const Cadastro = () => {
  return (
    <>
      <S.FirstSection>
        <TheHeader></TheHeader>
        <S.Container>
          <S.Title>Junte-se a nós!</S.Title>
          <S.ButtonWrapper>
          <BaseInput
            placeholder='Nome'
            type='text'
          ></BaseInput>
          <BaseInput
            placeholder='Nascimento'
            type='text'
          ></BaseInput>
          <BaseInput
            placeholder='E-mail'
            type='text'
          ></BaseInput>
          <BaseInput
            placeholder='CPF'
            type='text'
          ></BaseInput>
          <BaseInput
            placeholder='Celular'
            type='text'
          ></BaseInput>
          <BaseInput
            placeholder='Senha'
            type='text'
          ></BaseInput>
          <BaseInput
            placeholder='Confirme'
            type='text'
          ></BaseInput>

          <S.Select>
            <option value="">Cadastrar como</option>
            <option value="1">Host</option>
            <option value="2">Estudante</option>
          </S.Select>
          <BaseButton
            theme={colors.primary_blue}
            size='270'
            children='Enviar'
            color='blue !important'>
          </BaseButton>
          </S.ButtonWrapper>

        </S.Container>
      </S.FirstSection>
      <TheFooter></TheFooter>
    </>
  )
}

export default Cadastro;
