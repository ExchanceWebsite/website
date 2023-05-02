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
      <TheHeader></TheHeader>
      <S.FirstSection>
        <S.Container>
          <S.Title>Junte-se a nós!</S.Title>
          <S.ButtonWrapper>
            <span>
              <BaseInput
                placeholder='Nome'
                type='text'
                size='137px'
              ></BaseInput>
              <BaseInput
                placeholder='CPF'
                type='text'
                size='137px'
              ></BaseInput>

            </span>
            <BaseInput
              placeholder='Nascimento'
              type='text'
              onFocus={(focus) => focus.target.type = "date"}
              onBlur={(blur) => blur.target.value ? null : blur.target.type = "text"}
            ></BaseInput>
            <BaseInput
              placeholder='Celular'
              type='text'
            ></BaseInput>
            <S.Subtitle>Crie seu login</S.Subtitle>
            <BaseInput
              placeholder='E-mail'
              type='text'
            ></BaseInput>
            <span>
              <BaseInput
                placeholder='Senha'
                type='password'
                size='137px'
              ></BaseInput>
              <BaseInput
                placeholder='Confirme'
                type='password'
                size='137px'
              ></BaseInput>
            </span>

            <S.Select
              onFocus={(focus, placeholder) => {
                focus.target.style.color = "grey"
                focus.target.placedolder.disabled = "true"
              }}
              onChange={(change) => change.target.value ? change.target.style.color = "white" : null}
              onBlur={(blur) => blur.target.value ? blur.target.style.color = "white" : null}
            >
              <option value="">Cadastrar como</option>
              <option value="1">Host</option>
              <option value="2">Estudante</option>
            </S.Select>
            <BaseButton
              theme={colors.primary_blue}
              size='279'
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
