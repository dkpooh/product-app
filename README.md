상품리스트, 위시리스트 과제
=====================

1. 프로덕트 페이지(/products)
	* score에 따라 정렬(내림차순)하여 5개씩 보여준다.
 	* 각 상품에는 장바구니 담기/빼기 버튼이 있다. (담겨 있다면 빼기/없다면 담기) 
  
2. 위시리스트 페이지(/wishlist)
	*  장바구니에는 최대 3개의 상품이 담긴다.
	*  쿠폰 불가능한 (availableCoupon == false) 상품을 제외하고는 쿠폰 설정이 가능하다.
	*  쿠폰 type으로 정액 할인/비율 할인 여부를 결정한다.
	*  결제할 상품을 고를 수 있게 상품마다 체크박스와 갯수 설정, 쿠폰을 선택할 수 있는 셀렉터도 추가한다.
	*  상품 가격들에 일괄적으로 쿠폰에 적힌 금액과 비율을 차감해서 보여준다.
	*  페이지 하단에 선택된 상품의 금액을 더하고, 쿠폰 할인가를 전부 뺀 가격을 보여준다.
