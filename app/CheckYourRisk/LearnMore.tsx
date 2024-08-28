import { useRef } from "react";

const learnMores = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="130"
        height="130"
        viewBox="0 0 130 130"
        fill="none"
      >
        <path
          d="M65 130C100.899 130 130 100.899 130 65C130 29.1007 100.899 0 65 0C29.1007 0 0 29.1007 0 65C0 100.899 29.1007 130 65 130Z"
          fill="#02314B"
        ></path>
        <path
          d="M64.631 83.7883C61.7675 92.0363 54.512 98.2728 44.1647 98.2728C29.1181 98.2728 20.6154 85.0795 22.6269 71.693C24.533 59.0092 33.4924 50.5329 43.831 31.9288C43.9715 31.6741 44.3492 31.6741 44.4897 31.9288C48.012 38.2619 51.3762 43.4268 54.3539 47.9768"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M89.1994 73.8276L105.968 88.1276C111.194 93.029 103.174 101.593 97.9392 96.6918L82.5852 80.881"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M91.8739 66.7385C94.0385 54.8744 86.1755 43.5019 74.3114 41.3373C62.4473 39.1726 51.0748 47.0356 48.9101 58.8997C46.7455 70.7638 54.6085 82.1364 66.4726 84.301C78.3367 86.4656 89.7092 78.6026 91.8739 66.7385Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M70.5424 75.76L81.1357 69.2864C81.2323 69.2249 81.2938 69.1195 81.2938 69.0141V56.6026C81.2938 56.4884 81.2323 56.383 81.1357 56.3303L70.5424 49.8567C70.437 49.7952 70.3053 49.7952 70.2086 49.8567L59.6154 56.3303C59.5188 56.3918 59.4573 56.4972 59.4573 56.6026V69.0141C59.4573 69.1283 59.5188 69.2337 59.6154 69.2864L70.2086 75.76C70.314 75.8215 70.4458 75.8215 70.5424 75.76Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M81.2938 56.418L70.3755 63.0849L59.4661 56.418"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M70.3755 63.085V75.8654"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    ),
    text: "Diabetes is a condition where there is high glucose in your blood.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="148"
        height="148"
        viewBox="0 0 148 148"
        fill="none"
      >
        <path
          d="M74 148C114.87 148 148 114.87 148 74C148 33.13 114.87 0 74 0C33.13 0 0 33.13 0 74C0 114.87 33.13 148 74 148Z"
          fill="#02314B"
        ></path>
        <path
          d="M83.5694 107.41C112.949 95.6701 108.719 60.3701 84.3694 51.6501C84.1794 51.5801 84.0894 51.3701 84.1694 51.1901C89.1494 39.6301 79.5994 39.0801 72.8994 29.6001"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M52.3297 45.54C58.5197 61.42 60.2197 69.8 51.4997 82.88C41.3897 98.03 43.1097 107.32 50.2097 117.6"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M81.5103 103.249C83.1103 105.989 84.8803 110.809 83.5703 117.599"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    ),
    text: "Gestational diabetes is a type of diabetes that can happen in pregnancy.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="148"
        height="148"
        viewBox="0 0 148 148"
        fill="none"
      >
        <path
          d="M74 148C114.87 148 148 114.87 148 74C148 33.13 114.87 0 74 0C33.13 0 0 33.13 0 74C0 114.87 33.13 148 74 148Z"
          fill="#02314B"
        ></path>
        <path
          d="M108.07 107C108.07 107.28 107.96 107.55 107.76 107.75C107.56 107.95 107.29 108.06 107.01 108.06H40.9902C40.7102 108.06 40.4402 107.95 40.2402 107.75C40.0402 107.55 39.9302 107.28 39.9302 107V40.9801C39.9402 40.6101 40.1502 40.2701 40.4702 40.0801C40.8002 39.9001 41.1902 39.9001 41.5202 40.0801C41.8502 40.2601 42.0502 40.6001 42.0602 40.9801V105.94H107.02C107.3 105.94 107.57 106.05 107.77 106.25C107.97 106.45 108.08 106.72 108.08 107H108.07ZM76.6602 81.0201C76.8302 81.1901 77.0602 81.3001 77.3102 81.3301C77.5602 81.3601 77.8002 81.2901 78.0102 81.1601L89.0802 73.8201L102.9 88.8201L90.3602 87.1801C89.9802 87.1301 89.6102 87.2901 89.3702 87.5901C89.1402 87.8901 89.0902 88.3001 89.2302 88.6501C89.3802 89.0001 89.7002 89.2501 90.0802 89.3001L105.65 91.3401C105.65 91.3401 105.74 91.3401 105.79 91.3401C106.1 91.3401 106.39 91.2101 106.59 90.9801C106.79 90.7501 106.89 90.4401 106.85 90.1401L104.81 74.5701C104.76 74.1901 104.51 73.8701 104.16 73.7201C103.81 73.5701 103.4 73.6301 103.1 73.8601C102.8 74.0901 102.64 74.4701 102.69 74.8501L104.31 87.2201L90.0202 71.7101C89.8502 71.5201 89.6202 71.4001 89.3602 71.3701C89.1102 71.3401 88.8502 71.4001 88.6402 71.5401L77.5402 78.9001L58.7602 59.9901C58.5602 59.7801 58.2902 59.6701 58.0002 59.6601C57.7102 59.6601 57.4402 59.7701 57.2402 59.9701C57.0402 60.1701 56.9202 60.4501 56.9302 60.7301C56.9302 61.0201 57.0502 61.2901 57.2502 61.4901L76.6402 81.0201H76.6602Z"
          fill="white"
          stroke="white"
          stroke-width="0.75"
          stroke-miterlimit="10"
        ></path>
      </svg>
    ),
    text: "Some pregnancy hormones reduce how well insulin works.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="130"
        height="130"
        viewBox="0 0 130 130"
        fill="none"
      >
        <path
          d="M65 130C100.899 130 130 100.899 130 65C130 29.1007 100.899 0 65 0C29.1007 0 0 29.1007 0 64.9912C0 100.882 29.1007 129.991 65 129.991"
          fill="#02314B"
        ></path>
        <path
          d="M76.1466 70.9026C76.8405 62.8742 73.3797 60.3181 69.3831 59.9492"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="22.93"
        ></path>
        <path
          d="M68.7156 85.0006C67.9163 85.633 67.1082 86.4938 66.0541 88.0397C63.2872 92.133 57.2703 94.61 51.7366 91.1053C44.3318 86.4147 45.298 77.9559 50.7528 73.3357C60.0812 65.4391 66.5636 68.3992 67.398 74.1174C68.5663 82.1195 76.0149 83.5688 82.594 76.287C86.4764 71.9918 90.0778 62.8918 88.0926 52.1668C84.5352 32.9742 64.9562 28.7404 62.5933 49.0661"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="22.93"
        ></path>
        <path
          d="M64.6839 53.2647C62.1278 46.5363 57.1913 41.9776 52.896 46.1323C51.798 47.1863 50.3048 48.908 49.3913 50.8053C48.144 53.3965 49.6548 55.8559 53.2386 55.7417C55.1886 55.6803 56.8136 55.935 57.8764 58.3769C61.2494 66.1154 68.3906 64.7539 73.2217 53.9938"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="22.93"
        ></path>
        <path
          d="M43.8749 52.2809C44.7533 65.3688 43.5411 69.9627 40.3262 78.5533C35.4688 91.5445 48.1175 102.445 65.6323 98.3168C87.7499 93.0992 95.3742 72.7999 95.3742 58.5526C95.3742 17.1985 41.4681 16.2938 43.8749 52.2809Z"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="22.93"
        ></path>
        <path
          d="M44.3317 94.197C41.7756 96.5774 40.5195 99.7308 40.581 103.552"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="22.93"
        ></path>
        <path
          d="M34.6344 103.648C34.5466 98.1586 36.4966 93.389 40.2736 89.8579"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="22.93"
        ></path>
      </svg>
    ),
    text: "It usually develops around weeks 24 to 28 of pregnancy but can happen earlier.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="130"
        height="130"
        viewBox="0 0 130 130"
        fill="none"
      >
        <path
          d="M65 130C100.899 130 130 100.899 130 65C130 29.1007 100.899 0 65 0C29.1007 0 0 29.1007 0 65C0 100.899 29.1007 130 65 130Z"
          fill="#02314B"
        ></path>
        <path
          d="M57.3228 94.5222C53.5458 95.6817 48.2668 95.3567 42.6539 93.2486C40.1066 92.2911 38.912 92.7742 37.7789 92.9323C35.3634 93.2661 34.2478 91.0438 34.0107 89.3222C33.6154 86.4587 35.6181 84.4999 38.9296 85.9756C42.4168 87.5303 48.5566 87.0296 52.8695 84.0168C55.2235 82.3742 57.2701 81.7155 58.8864 81.8648"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="22.93"
        ></path>
        <path
          d="M34.0458 83.0857C32.7107 81.5573 32.5438 79.256 34.8803 78.2283C37.7789 76.9458 40.5107 77.4553 40.2648 70.5249C40.054 64.7715 44.9465 63.8053 47.854 64.8418"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="22.93"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M72.7998 26.3513C74.864 26.3513 76.9018 26.8344 78.6322 27.8006C80.3626 28.7669 81.812 30.2162 82.6815 32.1574C83.3842 33.7297 83.7268 35.3196 83.8235 36.8919C83.9201 38.3939 83.8059 39.8608 83.5863 41.2662C83.5687 41.3892 83.6302 41.5121 83.7444 41.5736C85.0971 42.3466 85.5187 43.9716 85.1586 45.4912C84.7984 47.0284 83.6478 48.4425 81.8822 48.7324C81.7768 48.75 81.689 48.8115 81.6539 48.9081C80.0816 52.7115 76.4363 54.6175 72.791 54.6175C69.1457 54.6175 65.5005 52.7115 63.9282 48.9081C63.8842 48.8115 63.8052 48.75 63.6998 48.7324C61.943 48.4425 60.7836 47.0284 60.4234 45.4912C60.0633 43.9716 60.4849 42.3466 61.8376 41.5736C61.9518 41.5121 62.0133 41.3892 61.9957 41.2662C61.7761 39.8608 61.662 38.3851 61.7586 36.8919C61.864 35.3196 62.1978 33.7209 62.9005 32.1574C63.7701 30.2162 65.2106 28.7669 66.9498 27.8006C68.689 26.8344 70.718 26.3513 72.7822 26.3513H72.7998Z"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="22.93"
        ></path>
        <path
          d="M82.9276 63.8054C83.762 61.873 85.0445 60.8277 86.6607 59.8264C87.7938 59.1325 87.8816 58.2629 87.9607 57.2C88.1012 55.3115 89.085 53.625 91.6235 53.7041C94.1357 53.7831 96.6654 55.8385 96.9026 58.5615C97.1046 60.8541 95.6641 62.321 93.9951 62.2331C92.8796 62.1717 92.133 62.9007 91.8431 64.0163C90.6661 68.5399 89.533 71.4825 85.8613 72.2818C81.7857 73.169 75.7073 70.3845 80.187 62.1892"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="22.93"
        ></path>
        <path
          d="M52.3426 48.0209C54.2135 43.8135 52.9574 41.8986 55.4432 40.5283C57.8324 39.2107 58.5615 37.2432 57.2263 35.2493C55.8561 33.1851 52.4655 32.131 50.2257 33.4925C47.2919 35.2844 49.7426 38.4641 48.0473 40.5195C46.2554 42.6891 44.727 44.727 43.9365 47.1337C43.0493 49.8479 45.8426 55.5222 54.6966 57.3493"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="22.93"
        ></path>
        <path
          d="M80.3276 51.1743C82.2249 52.2459 83.9993 53.8182 84.3418 55.9439"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="22.93"
        ></path>
        <path
          d="M80.3276 71.1311C79.4931 72.8879 78.3776 74.7676 77.0425 76.5243"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="22.93"
        ></path>
        <path
          d="M59.1587 54.5735C58.5878 62.4613 49.9182 62.1627 49.4087 72.1938C49.3121 74.1525 49.3472 76.6998 48.2053 79.0539"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="22.93"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M69.3126 64.7277C69.4005 64.5784 69.6113 64.5784 69.6991 64.7277C75.7687 75.646 81.0214 80.6176 82.137 88.0574C83.3228 95.9101 78.3336 103.649 69.5059 103.649C60.6782 103.649 55.689 95.9101 56.8748 88.0574C57.9904 80.6176 63.2431 75.646 69.3126 64.7277Z"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="22.93"
        ></path>
        <path
          d="M75.2109 96.5351C78.3565 93.3896 78.3565 88.2896 75.2109 85.1441C72.0654 81.9985 66.9654 81.9985 63.8198 85.144C60.6743 88.2896 60.6743 93.3896 63.8198 96.5352C66.9654 99.6807 72.0654 99.6807 75.2109 96.5351Z"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="22.93"
        ></path>
        <path
          d="M64.4553 90.8418H74.5655"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="22.93"
        ></path>
      </svg>
    ),
    text: "For most women, diabetes goes away after the baby is born.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="130"
        height="130"
        viewBox="0 0 130 130"
        fill="none"
      >
        <path
          d="M65 130C100.899 130 130 100.899 130 65C130 29.1007 100.899 0 65 0C29.1007 0 0 29.1007 0 65C0 100.899 29.1007 130 65 130Z"
          fill="#02314B"
        ></path>
        <path
          d="M77.3673 58.5526C77.3673 52.8168 82.0227 48.1614 87.7585 48.1614C93.4943 48.1614 98.1497 52.8168 98.1497 58.5526C98.1497 64.2884 93.4943 68.9439 87.7585 68.9439C82.0227 68.9439 77.3761 64.2884 77.3673 58.5526ZM54.626 35.258C54.626 29.5222 59.2727 24.8668 65.0085 24.858C70.7443 24.858 75.3997 29.5047 75.4085 35.2405C75.4085 40.9411 70.8146 45.579 65.1139 45.6405H64.9206C59.22 45.579 54.6348 40.9499 54.626 35.258ZM42.2409 68.9439C36.5051 68.9439 31.8497 64.2884 31.8497 58.5526C31.8497 52.8168 36.5051 48.1614 42.2409 48.1614C47.9767 48.1614 52.6321 52.8168 52.6321 58.5526C52.6321 64.2884 47.9767 68.9351 42.2409 68.9439ZM103.71 74.5918C101.066 71.8249 97.5963 69.9891 93.8193 69.3742C99.801 66.0364 101.935 58.4736 98.5977 52.4918C95.2598 46.5101 87.697 44.3756 81.7152 47.7134C80.7754 48.2405 79.9146 48.8817 79.1416 49.6283C76.7875 47.7925 74.0119 46.5715 71.0781 46.0709C77.0598 42.7155 79.1943 35.1526 75.8389 29.1709C72.4835 23.1891 64.9206 21.0547 58.9389 24.4101C52.9571 27.7655 50.8315 35.3283 54.1781 41.3101C55.3024 43.304 56.945 44.9553 58.9477 46.0709C56.0051 46.5803 53.2206 47.8101 50.8666 49.6459C45.9564 44.8675 38.1037 44.9905 33.3254 49.9006C28.547 54.8107 28.67 62.6634 33.5801 67.4418C34.3531 68.1972 35.2227 68.8384 36.1625 69.3655C32.3855 69.9803 28.9159 71.8074 26.272 74.583C19.9125 81.3729 20.5186 91.7114 20.545 92.1506C20.5801 92.6776 21.0193 93.0905 21.5551 93.0905C21.5815 93.0905 21.599 93.0905 21.6254 93.0905C22.1875 93.0553 22.6004 92.5722 22.5652 92.0188C22.5652 91.9222 21.9855 82.1195 27.7477 75.9709C30.8571 72.6506 35.2754 70.9641 40.8882 70.9641H43.5673C49.1713 70.9641 53.5896 72.6418 56.699 75.9621C62.4612 82.1019 61.899 91.9222 61.8902 92.0276C61.8551 92.581 62.2767 93.0641 62.8301 93.108C63.3923 93.1432 63.8666 92.7215 63.9105 92.1682C63.9369 91.729 64.5429 81.3905 58.1835 74.6006C55.5396 71.8337 52.07 69.9979 48.2929 69.383C54.2571 66.054 56.4004 58.5263 53.0713 52.5621C52.8078 52.0878 52.5091 51.6222 52.1841 51.183C55.1355 48.8641 58.9828 47.6783 63.6646 47.6783H64.9031C64.9031 47.6783 64.9646 47.6783 64.9997 47.6783C65.0348 47.6783 65.0612 47.6783 65.0963 47.6783H66.3436C71.0078 47.6783 74.8551 48.8641 77.7977 51.1655C73.7044 56.629 74.8112 64.3763 80.2747 68.4783C80.7227 68.8121 81.1882 69.1107 81.6713 69.383C77.8943 69.9979 74.4247 71.8249 71.7808 74.6006C65.4213 81.3905 66.0274 91.729 66.0537 92.1682C66.0889 92.7215 66.572 93.1432 67.1254 93.108C67.6787 93.0729 68.1004 92.5898 68.0652 92.0276C68.0652 91.931 67.4943 82.1019 73.2565 75.9621C76.3659 72.6506 80.7841 70.9641 86.3882 70.9641H89.0673C94.6713 70.9641 99.0896 72.6418 102.199 75.9621C107.961 82.1019 107.399 91.9222 107.39 92.0276C107.355 92.581 107.777 93.0641 108.33 93.0993C108.356 93.0993 108.374 93.0993 108.4 93.0993C108.927 93.0993 109.375 92.6864 109.41 92.1594C109.437 91.7202 110.043 81.3817 103.683 74.5918"
          fill="white"
        ></path>
      </svg>
    ),
    text: "Gestational diabetes can happen to anyone, it is not your fault.",
  },
];

export const LearnMoreAboutGSMRisks = () => {
  const learnMoreRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        className="btn btn-primary btn-wide"
        onClick={() => learnMoreRef.current?.showModal()}
      >
        Learn more about GSM risks
      </button>
      <dialog ref={learnMoreRef} className="modal">
        <div className="modal-box max-w-3xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-4">
            Facts about gestational diabetes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learnMores.map((fact, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <div className="size-32 flex items-center">{fact.icon}</div>
                <p className="text-center">{fact.text}</p>
              </div>
            ))}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};
