import { chakra } from "@chakra-ui/react"
import React from "react"

export default function Logo({ fill, ...props }) {
  return (
    <chakra.svg
      width="168px"
      height="60px"
      viewBox="0 0 168 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.13096 7.73858H11.0293V10.3054H4.13096V16.0005H0.701843V1.68247H11.3903V4.32951H4.13096V7.73858Z"
        fill={fill || "#002338"}
      />
      <path
        d="M19.2122 14.5768C18.8512 15.0848 18.39 15.4925 17.8285 15.8C17.267 16.1075 16.5985 16.2612 15.8232 16.2612C14.7135 16.2612 13.8111 15.9337 13.116 15.2786C12.4341 14.6102 12.0932 13.6343 12.0932 12.3508V5.37228H15.2817V11.5688C15.2817 12.3308 15.4355 12.8789 15.7429 13.2131C16.0504 13.5474 16.4983 13.7145 17.0865 13.7145C17.6747 13.7145 18.1627 13.4939 18.5504 13.0527C18.9515 12.6115 19.152 11.9698 19.152 11.1276V5.37228H22.3405V16.0005H19.2924V14.5768H19.2122Z"
        fill={fill || "#002338"}
      />
      <path
        d="M26.5169 6.79607C26.8779 6.28805 27.3391 5.8803 27.9006 5.57282C28.4621 5.26533 29.1238 5.11159 29.8859 5.11159C30.9955 5.11159 31.8912 5.44581 32.573 6.11426C33.2682 6.76933 33.6158 7.73858 33.6158 9.02199V16.0005H30.4273V9.80407C30.4273 9.04204 30.2736 8.49392 29.9661 8.1597C29.672 7.82547 29.2241 7.65836 28.6225 7.65836C28.0343 7.65836 27.5396 7.87895 27.1386 8.32012C26.7509 8.7613 26.557 9.403 26.557 10.2452V16.0005H23.3685V5.37228H26.4367V6.79607H26.5169Z"
        fill={fill || "#002338"}
      />
      <path
        d="M38.9152 5.11159C39.6505 5.11159 40.2855 5.24528 40.8203 5.51266C41.355 5.78003 41.7828 6.15436 42.1037 6.63564H42.1839V1.48194H45.3724V16.0005H42.3243V14.5968H42.244C41.9232 15.1717 41.4753 15.5928 40.9005 15.8602C40.339 16.1276 39.704 16.2612 38.9954 16.2612C38.1131 16.2612 37.3243 16.034 36.6291 15.5794C35.9339 15.1249 35.3858 14.4765 34.9847 13.6343C34.597 12.792 34.4032 11.8094 34.4032 10.6864C34.4032 9.56343 34.597 8.58082 34.9847 7.73858C35.3858 6.89634 35.9272 6.24795 36.6091 5.7934C37.2909 5.33886 38.0596 5.11159 38.9152 5.11159ZM39.9981 13.8749C40.7334 13.8749 41.3082 13.6075 41.7227 13.0728C42.1371 12.538 42.3443 11.7426 42.3443 10.6864C42.3443 9.64364 42.1371 8.85488 41.7227 8.32012C41.3082 7.78537 40.7334 7.51799 39.9981 7.51799C39.2628 7.51799 38.6812 7.78537 38.2534 8.32012C37.839 8.85488 37.6318 9.64364 37.6318 10.6864C37.6318 11.7426 37.839 12.538 38.2534 13.0728C38.6812 13.6075 39.2628 13.8749 39.9981 13.8749Z"
        fill={fill || "#002338"}
      />
      <path
        d="M53.3882 16.0005C53.201 15.7733 53.1075 15.2719 53.1075 14.4965C52.8267 15.0447 52.3655 15.4792 51.7238 15.8C51.0954 16.1075 50.3936 16.2612 49.6182 16.2612C48.9898 16.2612 48.4016 16.1342 47.8535 15.8802C47.3187 15.6262 46.8842 15.2653 46.55 14.7973C46.2292 14.3161 46.0687 13.7546 46.0687 13.1129C46.0687 12.03 46.423 11.2279 47.1316 10.7065C47.8535 10.1717 48.9497 9.81075 50.4203 9.62359C51.4497 9.4899 52.1516 9.34284 52.5259 9.18242C52.9002 9.00862 53.0874 8.76798 53.0874 8.4605C53.0874 8.08617 52.947 7.79874 52.6663 7.5982C52.3855 7.3843 51.9711 7.27735 51.423 7.27735C50.9551 7.27735 50.5406 7.40435 50.1797 7.65836C49.8321 7.91237 49.5848 8.28002 49.4377 8.7613L46.4698 8.40034C46.7105 7.37093 47.2719 6.5688 48.1543 5.99394C49.05 5.40571 50.1596 5.11159 51.4831 5.11159C53.074 5.11159 54.2706 5.42576 55.0727 6.0541C55.8748 6.68243 56.2759 7.55141 56.2759 8.66103V13.9351C56.2759 14.5367 56.2893 14.9845 56.316 15.2786C56.3561 15.5727 56.4363 15.8134 56.5566 16.0005H53.3882ZM53.0874 10.8869C52.9404 10.9939 52.7198 11.0808 52.4256 11.1476C52.1315 11.2145 51.6636 11.3014 51.0219 11.4083C50.5005 11.4885 50.0794 11.6557 49.7586 11.9097C49.4511 12.1637 49.2973 12.4979 49.2973 12.9123C49.2973 13.3 49.4243 13.6075 49.6783 13.8348C49.9457 14.0621 50.2933 14.1757 50.7211 14.1757C51.0821 14.1757 51.443 14.0955 51.804 13.9351C52.165 13.7746 52.4658 13.5206 52.7064 13.173C52.9604 12.8254 53.0874 12.3976 53.0874 11.8896V10.8869Z"
        fill={fill || "#002338"}
      />
      <path
        d="M62.4866 13.9351C63.1016 13.9351 63.5695 13.7546 63.8904 13.3936C64.2246 13.0193 64.4585 12.5447 64.5922 11.9698L67.8409 12.3107C67.5735 13.4204 67.0053 14.3562 66.1363 15.1182C65.2807 15.8802 64.0642 16.2612 62.4866 16.2612C60.7888 16.2612 59.4519 15.7666 58.476 14.7773C57.5134 13.7746 57.0321 12.411 57.0321 10.6864C57.0321 8.96183 57.5134 7.60489 58.476 6.61559C59.4519 5.61292 60.7888 5.11159 62.4866 5.11159C64.0374 5.11159 65.2272 5.46587 66.0561 6.17442C66.885 6.88297 67.4331 7.70515 67.7005 8.64098L64.5722 9.22252C64.4251 8.72787 64.1845 8.31344 63.8503 7.97922C63.5294 7.63162 63.0749 7.45783 62.4866 7.45783C61.7914 7.45783 61.2433 7.73189 60.8423 8.28002C60.4546 8.81477 60.2607 9.6169 60.2607 10.6864C60.2607 11.7693 60.4546 12.5848 60.8423 13.1329C61.2433 13.6677 61.7914 13.9351 62.4866 13.9351Z"
        fill={fill || "#002338"}
      />
      <path
        d="M71.6783 5.37228V16.0005H68.4898V5.37228H71.6783ZM71.6783 1.48194V3.96855H68.4898V1.48194H71.6783Z"
        fill={fill || "#002338"}
      />
      <path
        d="M78.0684 5.11159C79.2181 5.11159 80.2074 5.33886 81.0363 5.7934C81.8785 6.24795 82.5202 6.89634 82.9614 7.73858C83.4026 8.56745 83.6231 9.55006 83.6231 10.6864C83.6231 12.411 83.1285 13.7746 82.1392 14.7773C81.1499 15.7666 79.793 16.2612 78.0684 16.2612C76.3171 16.2612 74.9467 15.7666 73.9574 14.7773C72.9815 13.788 72.4936 12.4244 72.4936 10.6864C72.4936 8.96183 72.9815 7.60489 73.9574 6.61559C74.9467 5.61292 76.3171 5.11159 78.0684 5.11159ZM78.0684 13.915C78.7903 13.915 79.3518 13.6476 79.7529 13.1129C80.1673 12.5781 80.3745 11.7693 80.3745 10.6864C80.3745 9.6169 80.1673 8.81477 79.7529 8.28002C79.3518 7.73189 78.7903 7.45783 78.0684 7.45783C77.3331 7.45783 76.7582 7.73189 76.3438 8.28002C75.9294 8.81477 75.7221 9.6169 75.7221 10.6864C75.7221 11.7693 75.9294 12.5781 76.3438 13.1129C76.7582 13.6476 77.3331 13.915 78.0684 13.915ZM76.9053 4.18914L78.6299 0.900391H81.8785L79.1914 4.18914H76.9053Z"
        fill={fill || "#002338"}
      />
      <path
        d="M87.6083 6.79607C87.9692 6.28805 88.4305 5.8803 88.992 5.57282C89.5534 5.26533 90.2152 5.11159 90.9772 5.11159C92.0869 5.11159 92.9826 5.44581 93.6644 6.11426C94.3596 6.76933 94.7072 7.73858 94.7072 9.02199V16.0005H91.5187V9.80407C91.5187 9.04204 91.3649 8.49392 91.0574 8.1597C90.7633 7.82547 90.3155 7.65836 89.7139 7.65836C89.1256 7.65836 88.631 7.87895 88.2299 8.32012C87.8422 8.7613 87.6484 9.403 87.6484 10.2452V16.0005H84.4599V5.37228H87.5281V6.79607H87.6083Z"
        fill={fill || "#002338"}
      />
      <path
        d="M11.0293 27.3776V29.9444H4.13096V33.2733H11.3903V36.0005H0.701843V21.6825H11.3903V24.3295H4.13096V27.3776H11.0293Z"
        fill={fill || "#002338"}
      />
      <path
        d="M19.4276 34.5768C19.0666 35.0848 18.6054 35.4925 18.0439 35.8C17.4824 36.1075 16.814 36.2612 16.0386 36.2612C14.9289 36.2612 14.0265 35.9337 13.3314 35.2786C12.6496 34.6102 12.3086 33.6343 12.3086 32.3508V25.3723H15.4971V31.5688C15.4971 32.3308 15.6509 32.8789 15.9584 33.2131C16.2658 33.5474 16.7137 33.7145 17.3019 33.7145C17.8902 33.7145 18.3781 33.4939 18.7658 33.0527C19.1669 32.6115 19.3674 31.9698 19.3674 31.1276V25.3723H22.5559V36.0005H19.5078V34.5768H19.4276Z"
        fill={fill || "#002338"}
      />
      <path
        d="M34.2323 35.1784C34.2323 36.8628 33.7376 38.0794 32.7483 38.8281C31.7724 39.5767 30.4556 39.9511 28.7978 39.9511C27.4074 39.9511 26.2377 39.6636 25.2885 39.0888C24.3527 38.5139 23.7243 37.6182 23.4035 36.4016L26.5719 36.1209C26.7323 36.6423 26.993 37.0233 27.354 37.2639C27.7283 37.5179 28.2096 37.6449 28.7978 37.6449C30.3085 37.6449 31.0638 36.796 31.0638 35.0981V34.0754H30.9836C30.3286 34.9979 29.2791 35.4591 27.8353 35.4591C26.9796 35.4591 26.2109 35.2519 25.5291 34.8375C24.8607 34.4097 24.3326 33.8014 23.9449 33.0126C23.5572 32.2238 23.3634 31.3081 23.3634 30.2653C23.3634 29.2225 23.5572 28.3134 23.9449 27.538C24.3326 26.7626 24.8674 26.1677 25.5492 25.7533C26.2444 25.3255 27.0331 25.1116 27.9155 25.1116C29.4261 25.1116 30.489 25.633 31.1039 26.6757H31.1842V25.3723H34.2323V35.1784ZM28.9181 33.0928C29.6133 33.0928 30.1681 32.8388 30.5826 32.3308C31.0104 31.8228 31.2243 31.1343 31.2243 30.2653C31.2243 29.4231 31.0104 28.7546 30.5826 28.26C30.1681 27.7519 29.6133 27.4979 28.9181 27.4979C28.2096 27.4979 27.6414 27.7519 27.2136 28.26C26.7992 28.7546 26.5919 29.4231 26.5919 30.2653C26.5919 31.1343 26.7992 31.8228 27.2136 32.3308C27.6414 32.8388 28.2096 33.0928 28.9181 33.0928Z"
        fill={fill || "#002338"}
      />
      <path
        d="M45.8391 32.8121C45.692 33.3736 45.4113 33.915 44.9968 34.4364C44.5824 34.9578 43.9942 35.3923 43.2321 35.7399C42.4835 36.0874 41.5677 36.2612 40.4848 36.2612C39.3618 36.2612 38.3859 36.0407 37.557 35.5995C36.7415 35.1449 36.1132 34.5032 35.672 33.6744C35.2309 32.8321 35.0103 31.8428 35.0103 30.7065C35.0103 28.9685 35.4915 27.6049 36.4541 26.6156C37.43 25.6129 38.7736 25.1116 40.4848 25.1116C42.1559 25.1116 43.4861 25.5996 44.4754 26.5755C45.4647 27.538 45.9594 28.915 45.9594 30.7065C45.9594 30.9872 45.9527 31.1944 45.9393 31.3281H38.2589C38.2723 32.1704 38.4795 32.8455 38.8806 33.3535C39.2816 33.8482 39.8164 34.0955 40.4848 34.0955C41.1132 34.0955 41.5944 33.9484 41.9287 33.6543C42.2629 33.3602 42.4768 33.0059 42.5704 32.5915L45.8391 32.8121ZM40.4848 27.2172C39.8298 27.2172 39.3084 27.4244 38.9207 27.8388C38.533 28.2399 38.3191 28.7613 38.279 29.403H42.6907C42.6506 28.7613 42.4367 28.2399 42.049 27.8388C41.6613 27.4244 41.1399 27.2172 40.4848 27.2172Z"
        fill={fill || "#002338"}
      />
      <path
        d="M49.9487 26.7961C50.3097 26.2881 50.7709 25.8803 51.3324 25.5728C51.8939 25.2653 52.5557 25.1116 53.3177 25.1116C54.4273 25.1116 55.323 25.4458 56.0049 26.1143C56.7 26.7693 57.0476 27.7386 57.0476 29.022V36.0005H53.8591V29.8041C53.8591 29.042 53.7054 28.4939 53.3979 28.1597C53.1038 27.8255 52.6559 27.6584 52.0543 27.6584C51.4661 27.6584 50.9715 27.8789 50.5704 28.3201C50.1827 28.7613 49.9889 29.403 49.9889 30.2452V36.0005H46.8004V25.3723H49.8685V26.7961H49.9487Z"
        fill={fill || "#002338"}
      />
      <path
        d="M61.2842 25.3723V36.0005H58.0957V25.3723H61.2842ZM61.2842 21.4819V23.9685H58.0957V21.4819H61.2842Z"
        fill={fill || "#002338"}
      />
      <path
        d="M67.6743 25.1116C68.824 25.1116 69.8133 25.3389 70.6422 25.7934C71.4845 26.2479 72.1262 26.8963 72.5673 27.7386C73.0085 28.5674 73.2291 29.5501 73.2291 30.6864C73.2291 32.411 72.7345 33.7746 71.7452 34.7773C70.7559 35.7666 69.3989 36.2612 67.6743 36.2612C65.923 36.2612 64.5527 35.7666 63.5634 34.7773C62.5875 33.788 62.0995 32.4244 62.0995 30.6864C62.0995 28.9618 62.5875 27.6049 63.5634 26.6156C64.5527 25.6129 65.923 25.1116 67.6743 25.1116ZM67.6743 33.915C68.3962 33.915 68.9577 33.6476 69.3588 33.1129C69.7732 32.5781 69.9805 31.7693 69.9805 30.6864C69.9805 29.6169 69.7732 28.8148 69.3588 28.28C68.9577 27.7319 68.3962 27.4578 67.6743 27.4578C66.939 27.4578 66.3642 27.7319 65.9497 28.28C65.5353 28.8148 65.3281 29.6169 65.3281 30.6864C65.3281 31.7693 65.5353 32.5781 65.9497 33.1129C66.3642 33.6476 66.939 33.915 67.6743 33.915Z"
        fill={fill || "#002338"}
      />
      <path
        d="M6.69779 50.9672H4.11091V56.0005H0.701843V41.6825H7.88094C9.55205 41.6825 10.8488 42.0969 11.7713 42.9258C12.7071 43.7413 13.175 44.8709 13.175 46.3148C13.175 47.3709 12.921 48.2733 12.413 49.022C11.9183 49.7573 11.1964 50.2853 10.2472 50.6062L13.536 56.0005H9.58547L6.69779 50.9672ZM7.31944 48.3201C8.09484 48.3201 8.68307 48.1463 9.08414 47.7987C9.49857 47.4378 9.70579 46.9431 9.70579 46.3148C9.70579 45.6865 9.49857 45.1985 9.08414 44.8509C8.68307 44.5033 8.09484 44.3295 7.31944 44.3295H4.11091V48.3201H7.31944Z"
        fill={fill || "#002338"}
      />
      <path
        d="M19.0724 45.1116C20.2221 45.1116 21.2114 45.3389 22.0403 45.7934C22.8825 46.2479 23.5243 46.8963 23.9654 47.7386C24.4066 48.5674 24.6272 49.5501 24.6272 50.6864C24.6272 52.411 24.1325 53.7746 23.1432 54.7773C22.1539 55.7666 20.797 56.2612 19.0724 56.2612C17.3211 56.2612 15.9508 55.7666 14.9615 54.7773C13.9856 53.788 13.4976 52.4244 13.4976 50.6864C13.4976 48.9618 13.9856 47.6049 14.9615 46.6156C15.9508 45.6129 17.3211 45.1116 19.0724 45.1116ZM19.0724 53.915C19.7943 53.915 20.3558 53.6476 20.7569 53.1129C21.1713 52.5781 21.3785 51.7693 21.3785 50.6864C21.3785 49.6169 21.1713 48.8148 20.7569 48.28C20.3558 47.7319 19.7943 47.4578 19.0724 47.4578C18.3371 47.4578 17.7623 47.7319 17.3478 48.28C16.9334 48.8148 16.7262 49.6169 16.7262 50.6864C16.7262 51.7693 16.9334 52.5781 17.3478 53.1129C17.7623 53.6476 18.3371 53.915 19.0724 53.915Z"
        fill={fill || "#002338"}
      />
      <path
        d="M29.7353 45.1116C30.4706 45.1116 31.1056 45.2453 31.6404 45.5127C32.1751 45.78 32.6029 46.1544 32.9238 46.6356H33.004V41.4819H36.1925V56.0005H33.1444V54.5968H33.0642C32.7433 55.1717 32.2954 55.5928 31.7206 55.8602C31.1591 56.1276 30.5241 56.2612 29.8155 56.2612C28.9332 56.2612 28.1444 56.034 27.4492 55.5794C26.754 55.1249 26.2059 54.4765 25.8049 53.6343C25.4172 52.792 25.2233 51.8094 25.2233 50.6864C25.2233 49.5634 25.4172 48.5808 25.8049 47.7386C26.2059 46.8963 26.7474 46.2479 27.4292 45.7934C28.111 45.3389 28.8797 45.1116 29.7353 45.1116ZM30.8182 53.8749C31.5535 53.8749 32.1283 53.6075 32.5428 53.0728C32.9572 52.538 33.1644 51.7426 33.1644 50.6864C33.1644 49.6436 32.9572 48.8549 32.5428 48.3201C32.1283 47.7854 31.5535 47.518 30.8182 47.518C30.0829 47.518 29.5013 47.7854 29.0735 48.3201C28.6591 48.8549 28.4519 49.6436 28.4519 50.6864C28.4519 51.7426 28.6591 52.538 29.0735 53.0728C29.5013 53.6075 30.0829 53.8749 30.8182 53.8749Z"
        fill={fill || "#002338"}
      />
      <path
        d="M40.2378 47.0167H40.318C40.6388 46.4151 41.0666 45.9471 41.6014 45.6129C42.1362 45.2787 42.7845 45.1116 43.5466 45.1116C43.7605 45.1116 43.9744 45.1383 44.1883 45.1918V48.1597C43.8674 48.1062 43.4864 48.0795 43.0452 48.0795C42.2164 48.0795 41.5613 48.2867 41.08 48.7011C40.6121 49.1156 40.3781 49.8108 40.3781 50.7867V56.0005H37.1897V45.3723H40.2378V47.0167Z"
        fill={fill || "#002338"}
      />
      <path
        d="M47.9527 45.3723V56.0005H44.7642V45.3723H47.9527ZM45.2053 44.1891L46.9299 40.9004H50.1786L47.4914 44.1891H45.2053Z"
        fill={fill || "#002338"}
      />
      <path
        d="M59.6569 55.1784C59.6569 56.8628 59.1623 58.0794 58.173 58.8281C57.197 59.5767 55.8802 59.9511 54.2225 59.9511C52.8321 59.9511 51.6623 59.6636 50.7131 59.0888C49.7773 58.5139 49.149 57.6182 48.8281 56.4016L51.9965 56.1209C52.157 56.6423 52.4177 57.0233 52.7786 57.2639C53.1529 57.5179 53.6342 57.6449 54.2225 57.6449C55.7331 57.6449 56.4885 56.796 56.4885 55.0981V54.0754H56.4083C55.7532 54.9979 54.7037 55.4591 53.2599 55.4591C52.4043 55.4591 51.6356 55.2519 50.9538 54.8375C50.2853 54.4097 49.7573 53.8014 49.3696 53.0126C48.9819 52.2238 48.788 51.3081 48.788 50.2653C48.788 49.2225 48.9819 48.3134 49.3696 47.538C49.7573 46.7626 50.292 46.1677 50.9738 45.7533C51.669 45.3255 52.4578 45.1116 53.3401 45.1116C54.8508 45.1116 55.9136 45.633 56.5286 46.6758H56.6088V45.3723H59.6569V55.1784ZM54.3428 53.0928C55.038 53.0928 55.5928 52.8388 56.0072 52.3308C56.435 51.8228 56.6489 51.1343 56.6489 50.2653C56.6489 49.4231 56.435 48.7546 56.0072 48.26C55.5928 47.7519 55.038 47.4979 54.3428 47.4979C53.6342 47.4979 53.066 47.7519 52.6382 48.26C52.2238 48.7546 52.0166 49.4231 52.0166 50.2653C52.0166 51.1343 52.2238 51.8228 52.6382 52.3308C53.066 52.8388 53.6342 53.0928 54.3428 53.0928Z"
        fill={fill || "#002338"}
      />
      <path
        d="M67.7945 54.5768C67.4335 55.0848 66.9723 55.4925 66.4108 55.8C65.8493 56.1075 65.1809 56.2612 64.4055 56.2612C63.2959 56.2612 62.3935 55.9337 61.6983 55.2786C61.0165 54.6102 60.6756 53.6343 60.6756 52.3508V45.3723H63.864V51.5688C63.864 52.3308 64.0178 52.8789 64.3253 53.2131C64.6327 53.5474 65.0806 53.7145 65.6688 53.7145C66.2571 53.7145 66.745 53.4939 67.1327 53.0527C67.5338 52.6115 67.7343 51.9698 67.7343 51.1276V45.3723H70.9228V56.0005H67.8747V54.5768H67.7945Z"
        fill={fill || "#002338"}
      />
      <path
        d="M82.539 52.8121C82.392 53.3736 82.1112 53.915 81.6968 54.4364C81.2823 54.9578 80.6941 55.3923 79.9321 55.7399C79.1834 56.0874 78.2676 56.2612 77.1848 56.2612C76.0618 56.2612 75.0859 56.0407 74.257 55.5995C73.4415 55.1449 72.8131 54.5032 72.372 53.6744C71.9308 52.8321 71.7102 51.8428 71.7102 50.7065C71.7102 48.9685 72.1915 47.6049 73.1541 46.6156C74.13 45.6129 75.4736 45.1116 77.1848 45.1116C78.8559 45.1116 80.1861 45.5996 81.1754 46.5755C82.1647 47.538 82.6593 48.915 82.6593 50.7065C82.6593 50.9872 82.6526 51.1944 82.6393 51.3281H74.9588C74.9722 52.1704 75.1794 52.8455 75.5805 53.3535C75.9816 53.8482 76.5163 54.0955 77.1848 54.0955C77.8131 54.0955 78.2944 53.9484 78.6286 53.6543C78.9628 53.3602 79.1767 53.0059 79.2703 52.5915L82.539 52.8121ZM77.1848 47.2172C76.5297 47.2172 76.0083 47.4244 75.6206 47.8388C75.2329 48.2399 75.019 48.7613 74.9789 49.403H79.3906C79.3505 48.7613 79.1366 48.2399 78.7489 47.8388C78.3612 47.4244 77.8398 47.2172 77.1848 47.2172Z"
        fill={fill || "#002338"}
      />
      <path
        d="M82.8852 53.554L88.0991 47.8388H83.166V45.3723H92.1699V47.8188L86.9561 53.554H92.1699V56.0005H82.8852V53.554Z"
        fill={fill || "#002338"}
      />
      <path
        d="M103.452 41.6825C105.123 41.6825 106.42 42.1036 107.342 42.9458C108.278 43.7747 108.746 44.9244 108.746 46.395C108.746 47.879 108.278 49.042 107.342 49.8843C106.42 50.7132 105.123 51.1276 103.452 51.1276H100.003V56.0005H96.5936V41.6825H103.452ZM102.85 48.4805C103.639 48.4805 104.234 48.3001 104.635 47.9391C105.049 47.5648 105.257 47.0501 105.257 46.395C105.257 45.7399 105.049 45.2319 104.635 44.8709C104.221 44.51 103.626 44.3295 102.85 44.3295H100.003V48.4805H102.85Z"
        fill={fill || "#002338"}
      />
      <path
        d="M116.277 56.0005C116.089 55.7733 115.996 55.2719 115.996 54.4965C115.715 55.0447 115.254 55.4792 114.612 55.8C113.984 56.1075 113.282 56.2612 112.507 56.2612C111.878 56.2612 111.29 56.1342 110.742 55.8802C110.207 55.6262 109.773 55.2653 109.438 54.7973C109.118 54.3161 108.957 53.7546 108.957 53.1129C108.957 52.03 109.311 51.2279 110.02 50.7065C110.742 50.1717 111.838 49.8108 113.309 49.6236C114.338 49.4899 115.04 49.3428 115.414 49.1824C115.789 49.0086 115.976 48.768 115.976 48.4605C115.976 48.0862 115.835 47.7987 115.555 47.5982C115.274 47.3843 114.859 47.2773 114.311 47.2773C113.843 47.2773 113.429 47.4044 113.068 47.6584C112.72 47.9124 112.473 48.28 112.326 48.7613L109.358 48.4003C109.599 47.3709 110.16 46.5688 111.043 45.9939C111.938 45.4057 113.048 45.1116 114.371 45.1116C115.962 45.1116 117.159 45.4258 117.961 46.0541C118.763 46.6824 119.164 47.5514 119.164 48.661V53.9351C119.164 54.5367 119.178 54.9845 119.204 55.2786C119.244 55.5727 119.325 55.8134 119.445 56.0005H116.277ZM115.976 50.8869C115.829 50.9939 115.608 51.0808 115.314 51.1476C115.02 51.2145 114.552 51.3014 113.91 51.4083C113.389 51.4886 112.968 51.6557 112.647 51.9097C112.339 52.1637 112.186 52.4979 112.186 52.9123C112.186 53.3 112.313 53.6075 112.567 53.8348C112.834 54.0621 113.182 54.1757 113.609 54.1757C113.97 54.1757 114.331 54.0955 114.692 53.9351C115.053 53.7746 115.354 53.5206 115.595 53.173C115.849 52.8254 115.976 52.3976 115.976 51.8896V50.8869Z"
        fill={fill || "#002338"}
      />
      <path
        d="M126.598 48.6009C126.505 48.133 126.284 47.772 125.936 47.518C125.602 47.264 125.188 47.137 124.693 47.137C124.225 47.137 123.844 47.2372 123.55 47.4378C123.269 47.6249 123.129 47.8923 123.129 48.2399C123.129 48.5608 123.269 48.7947 123.55 48.9418C123.831 49.0888 124.279 49.2158 124.894 49.3228L125.997 49.4832C126.772 49.6169 127.434 49.7907 127.982 50.0046C128.53 50.2185 128.978 50.5527 129.325 51.0073C129.673 51.4484 129.847 52.05 129.847 52.8121C129.847 53.9618 129.379 54.8241 128.443 55.3989C127.521 55.9738 126.297 56.2612 124.773 56.2612C123.356 56.2612 122.18 55.9671 121.244 55.3789C120.308 54.7773 119.753 53.9484 119.58 52.8923L122.567 52.5514C122.661 53.0995 122.902 53.5206 123.289 53.8147C123.69 54.0955 124.198 54.2359 124.813 54.2359C125.362 54.2359 125.796 54.1222 126.117 53.8949C126.438 53.6677 126.598 53.3535 126.598 52.9524C126.598 52.645 126.438 52.4043 126.117 52.2305C125.809 52.0567 125.342 51.9164 124.713 51.8094L123.51 51.6289C122.44 51.4551 121.578 51.141 120.923 50.6864C120.268 50.2185 119.941 49.4632 119.941 48.4204C119.941 47.7252 120.154 47.1303 120.582 46.6356C121.01 46.141 121.585 45.7667 122.307 45.5127C123.029 45.2453 123.817 45.1116 124.673 45.1116C125.97 45.1116 127.059 45.3923 127.942 45.9538C128.824 46.5153 129.352 47.284 129.526 48.26L126.598 48.6009Z"
        fill={fill || "#002338"}
      />
      <path
        d="M135.828 53.9351C136.443 53.9351 136.911 53.7546 137.231 53.3936C137.566 53.0193 137.8 52.5447 137.933 51.9698L141.182 52.3107C140.915 53.4204 140.346 54.3562 139.477 55.1182C138.622 55.8802 137.405 56.2612 135.828 56.2612C134.13 56.2612 132.793 55.7666 131.817 54.7773C130.855 53.7746 130.373 52.411 130.373 50.6864C130.373 48.9618 130.855 47.6049 131.817 46.6156C132.793 45.6129 134.13 45.1116 135.828 45.1116C137.379 45.1116 138.568 45.4659 139.397 46.1744C140.226 46.883 140.774 47.7052 141.042 48.641L137.913 49.2225C137.766 48.7279 137.526 48.3134 137.191 47.9792C136.871 47.6316 136.416 47.4578 135.828 47.4578C135.133 47.4578 134.584 47.7319 134.183 48.28C133.796 48.8148 133.602 49.6169 133.602 50.6864C133.602 51.7693 133.796 52.5848 134.183 53.1329C134.584 53.6677 135.133 53.9351 135.828 53.9351Z"
        fill={fill || "#002338"}
      />
      <path
        d="M148.93 54.5768C148.569 55.0848 148.108 55.4925 147.546 55.8C146.985 56.1075 146.316 56.2612 145.541 56.2612C144.431 56.2612 143.529 55.9337 142.834 55.2786C142.152 54.6102 141.811 53.6343 141.811 52.3508V45.3723H144.999V51.5688C144.999 52.3308 145.153 52.8789 145.461 53.2131C145.768 53.5474 146.216 53.7145 146.804 53.7145C147.392 53.7145 147.88 53.4939 148.268 53.0527C148.669 52.6115 148.87 51.9698 148.87 51.1276V45.3723H152.058V56.0005H149.01V54.5768H148.93Z"
        fill={fill || "#002338"}
      />
      <path
        d="M160.105 56.0005C159.918 55.7733 159.824 55.2719 159.824 54.4965C159.543 55.0447 159.082 55.4792 158.44 55.8C157.812 56.1075 157.11 56.2612 156.335 56.2612C155.706 56.2612 155.118 56.1342 154.57 55.8802C154.035 55.6262 153.601 55.2653 153.267 54.7973C152.946 54.3161 152.785 53.7546 152.785 53.1129C152.785 52.03 153.14 51.2279 153.848 50.7065C154.57 50.1717 155.666 49.8108 157.137 49.6236C158.166 49.4899 158.868 49.3428 159.243 49.1824C159.617 49.0086 159.804 48.768 159.804 48.4605C159.804 48.0862 159.664 47.7987 159.383 47.5982C159.102 47.3843 158.688 47.2773 158.14 47.2773C157.672 47.2773 157.257 47.4044 156.896 47.6584C156.549 47.9124 156.301 48.28 156.154 48.7613L153.186 48.4003C153.427 47.3709 153.989 46.5688 154.871 45.9939C155.767 45.4057 156.876 45.1116 158.2 45.1116C159.791 45.1116 160.987 45.4258 161.789 46.0541C162.591 46.6824 162.993 47.5514 162.993 48.661V53.9351C162.993 54.5367 163.006 54.9845 163.033 55.2786C163.073 55.5727 163.153 55.8134 163.273 56.0005H160.105ZM159.804 50.8869C159.657 50.9939 159.436 51.0808 159.142 51.1476C158.848 51.2145 158.38 51.3014 157.739 51.4083C157.217 51.4886 156.796 51.6557 156.475 51.9097C156.168 52.1637 156.014 52.4979 156.014 52.9123C156.014 53.3 156.141 53.6075 156.395 53.8348C156.662 54.0621 157.01 54.1757 157.438 54.1757C157.799 54.1757 158.16 54.0955 158.521 53.9351C158.882 53.7746 159.182 53.5206 159.423 53.173C159.677 52.8254 159.804 52.3976 159.804 51.8896V50.8869Z"
        fill={fill || "#002338"}
      />
      <path
        d="M167.198 41.4819V56.0005H164.009V41.4819H167.198Z"
        fill={fill || "#002338"}
      />
    </chakra.svg>
  )
}
