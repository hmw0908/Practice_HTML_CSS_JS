//1. 박스 2개 필요
//2. Dropdown 리스트 만들기
//3. 환전을 위한 환율정보 들고오기
//4. 드랍다운 리스트에서 아이템 선태하면 선택한 아이템으로 바뀜
//5. 금액을 입력하면 환전이 된다.
//6. ㄷ랍다운 리스트에서 아이텝을 선택하면 다시 그 기준으로 환전이 됨
//7. 숫자를 한국어로 읽는법
//8. 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용된다.

let currencyRatio = {
    USD:{
        KRW:1184.36,
        USD:1,
        VND:22970.50,
        unit: '달러'
    },
    KRW:{
        KRW:1,
        USD:0.00084,
        VND:19.40,
        unit: '원'
    },
    VND:{
        KRW:0.052,
        USD:0.000044,
        VND:1,
        unit: '동'
    }
}
let fromCurrency = 'USD'
let toCurrency = 'USD'

/* 
currencyRatio 사용하는 방법 3가지
1. console.log(currencyRatio.VND.unit);
2. console.log(currencyRatio['VND']['nuit']);
3. console.log(currencyRatio['VND'].unit);
모두 동일한 방식
*/

document.querySelectorAll("#from-currency-list a").forEach(menu=>menu.addEventListener("click",function(){
    //1. 버튼을 가져온다. getElementById 이용
    //2. 버튼에 값을 바꾼다. textContent 이용
    document.getElementById("from-button").textContent=this.textContent;
    
    //3. 선택된 currency값을 변수에 저장해준다.
    fromCurrency = this.textContent;

}));

document.querySelectorAll("#to-currency-list a").forEach(menu=>menu.addEventListener("click",function(){
    //1. 버튼을 가져온다. getElementById 이용
    //2. 버튼에 값을 바꾼다. textContent 이용
    document.getElementById("to-button").textContent=this.textContent;
    
    //3. 선택된 currency값을 변수에 저장해준다.
    toCurrency = this.textContent;

}));