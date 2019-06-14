import React from 'react'
import Buttom from '../../components/Button'
import ButtonTransparent from '../../components/ButtonTransparent'
import { useDropzone } from 'react-dropzone'
import {
  Container,
  Content,
  Title,
  Close,
  DropZone
} from './styles'

const ProfileUpload = () => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    open
  } = useDropzone({ accept: 'image/*' })

  return (
    <Container>
      <Content>
        <Close to='/profile/edit'>
          <img src='/images/profile/close.svg' alt='close' />
        </Close>
        <Title>Изменить фото профиля</Title>
        <DropZone {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
          <input {...getInputProps()} />
          <img src='/images/profile/cloud.svg' alt='cloud' />
          <h4>Перетащите изображение сюда</h4>
          <p>в формате: JPEG, JPG, PNG. <br /> Максимальный размер файла – 3 мб.</p>
        </DropZone>
        <Buttom onClick={open}>Выбрать файл с компьютера</Buttom>
        <ButtonTransparent to='/profile/edit'>Отменить</ButtonTransparent>
      </Content>
    </Container>
  )
}

export default ProfileUpload
