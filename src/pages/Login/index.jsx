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

const Login = () => {
  return (
    <>
      <S.FirstSection>
        <TheHeader></TheHeader>
        <S.Container>
          <S.Title>Bem-vindo(a)!</S.Title>
          <BaseInput
            placeholder='E-mail'
            type='text'
          ></BaseInput>
          <BaseInput
            placeholder='Senha'
            type='password'
          ></BaseInput>

          <BaseButton
            theme={colors.primary_blue}
            size='270'
            children='Entrar'
            color='blue !important'>
          </BaseButton>

        </S.Container>
      </S.FirstSection>
      <TheFooter></TheFooter>
    </>
  )
}

export default Login;
