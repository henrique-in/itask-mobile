import React from "react";
import { Image } from "react-native";

import * as S from "./styles";

import logo from "../../assets/icons/logo.png";
import bell from "../../assets/icons/bell.png";
import qrcode from "../../assets/icons/qrcode.png";
import back from "../../assets/icons/back.png";

const Header = ({ showNotification, showBack, late, pressNotification }) => {
  return (
    <S.Container>
      {showBack ? (
        <S.LeftBtn>
          <S.LeftIcon source={back} />
        </S.LeftBtn>
      ) : (
        <S.LeftBtn>
          <S.LeftIcon source={qrcode} />
        </S.LeftBtn>
      )}
      <S.Image source={logo} />
      {showNotification && late > 0 && (
        <S.NotifyBtn onPress={pressNotification}>
          <S.NotifyIcon source={bell} />
          <S.NotifyView>
            <S.NotifyText>{late}</S.NotifyText>
          </S.NotifyView>
        </S.NotifyBtn>
      )}
    </S.Container>
  );
};

export default Header;
