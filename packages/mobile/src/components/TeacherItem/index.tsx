import React, { useCallback, useState } from 'react';
import { View,Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import heartIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: string;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  const handleLinkWhatsapp = useCallback(() => {
    Linking.openURL(`whatsapp://send?phone${teacher.whatsapp}`);
  }, [teacher]);

  const handleFavorite = useCallback(async () => {
    const favorites = await AsyncStorage.getItem('favorites');
    let formatedFavorites = [];

    if (favorites) {
      formatedFavorites = JSON.parse(favorites);
    }

    if (favorited) {
      const favoriteIndex = formatedFavorites.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id
      });

      formatedFavorites.splice(favoriteIndex, 1);
      setIsFavorited(false);
    } else {
      formatedFavorites.push(teacher);

      setIsFavorited(true);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(formatedFavorites));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: teacher.avatar }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'  '}
          <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleFavorite}
            style={[
              styles.favoriteButton,
              isFavorited ? styles.favorited : {}
            ]}
          >
            { isFavorited
              ? <Image source={unFavoriteIcon} />
              : <Image source={heartIcon} />
            }
          </RectButton>

          <RectButton onPress={handleLinkWhatsapp} style={styles.contactButton}>
            <Image source={whatsappIcon} />

            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
