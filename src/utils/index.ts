import {colors, images} from '../themes/';

const startedScreen = [
  {
    imageUri: images.OnBoarding.image1,
    heading: 'Pendanaan Berkualitas',
    description: 'Penilaian & analisa risiko terintegrasi dengan teknologi.',
    key: 'first',
    color: colors.primary2 + 60,
  },
  {
    imageUri: images.OnBoarding.image2,
    heading: 'Imbal Jasa Kompetitif',
    description:
      'Instrumen pendanaan berisiko rendah dengan imbal jasa kompetitif.',
    key: 'second',
    color: colors.primary2 + 60,
  },
  {
    imageUri: images.OnBoarding.image3,
    heading: 'Keamanan Sistem Terjamin',
    description: 'Data kamu sudah pasti terproteksi sesuai dengan standar.',
    key: 'third',
    color: colors.primary + 60,
  },
];

const errorMessage: any = [
  'CLIENT_ERROR',
  'SERVER_ERROR',
  'TIMEOUT_ERROR',
  'CONNECTION_ERROR',
  'NETWORK_ERROR',
  'CANCEL_ERROR',
  'NONE',
];

export {startedScreen, errorMessage};
