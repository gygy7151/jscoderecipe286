// 디바이스 화소 비율에 따라 제어 방식을 구분하고 싶을 때
// 고해상도 디바이스에서 큰 이미지를 사용하고 싶을 때

// 고해상도 디바이스란 아이폰의 레티나Retina 디스플에이와 같이 화소 밀도가 높은 디스플레이를 의미
// 고해상도에 맞춰 처리 작업을 하지 않으면 해당 기기에서 사진등이 뿌옇게 보이거나 화소가 깨져 보이는 현상 발생가능

const dpr = window.devicePixelRatio;
// 일반적인 디스플레이의 비율이 1, 아이폰과 안드로이드 대부분 2, 고급사양 아이폰은 3
// 윈도우즈와 맥은 2