let newitems =[];
onload();

function onload() {
    loadItemBag();
    itemsselected();
    loadPriceDetails();
    displayBag()
}
  
function loadItemBag(){
    newitems = bagItems.map(itemid =>{
            for(let i=0;i<items.length;i++)
            {
                if(itemid == items[i].item_id)
                {
                    return items[i];
                }
            }
    })
}

console.log(bagItems);

function removetheitem(itemid) {
    bagItems = bagItems.filter(bagitem => bagitem !== itemid)
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    onload();
}

  function itemsselected(){
    let itemsElement = document.querySelector('.items_selected');
    let iteminnerHtml ='';

    newitems.forEach(item => {
        
    iteminnerHtml +=`
    <div class="item_container">
    <div class="item_selected_container">
        <img class="item_image" src="../${item.item_image}">
    </div>

    <div class="item_container_details">
        <div class="items_compayname">${item.item_companyname}</div>
        <div class="items_name">${item.item_name}</div>
        <div class="items_price">
            <span class="items_sellingprice">Rs ${item.item_sellingprice}</span>
            <span class="items_actualprice">Rs ${item.item_actualprice}</span>
            <span class="items_discount">(${item.item_discount}% OFF)</span>
        </div>
        <div class="item_returnDate"><span class="returnDate">${item.item_returnDate} Days</span>return available</div>
        <div class="deliveryDate">Delivery by<span class="delivery_Date">${item.item_deliveryDate}</span></div>

        <div class="removeFromBag" onclick="removetheitem(${item.item_id})">X</div>
    </div>
    </div>`;
    });

    itemsElement.innerHTML =iteminnerHtml;
  }

  function loadPriceDetails(){
    let priceLoadElement = document.querySelector('.price_details');

    priceLoadElement.innerHTML =`
                <div class="price_detail_container">
                    <div class="price_detail_items">PRICE DETAILS (3 ITEMS)</div>
                </div>
                <div class="price_detail_summary">
                    <div class="priceMrp">
                        <span>Total MRP</span>
                        <span class="priceMrp_value">₹2000</span>
                    </div>
                    <div class="priceMrp">
                        <span>Discount on Mrp</span>
                        <span class="priceMrp_value discount_value">-₹1000</span>
                    </div>
                    <div class="priceMrp">
                        <span>Convenience Fee</span>
                        <span class="priceMrp_value">₹2000</span>
                    </div>
                    <div class="priceMrp price_total">
                        <span>Total Amount</span>
                        <span class="priceMrp_value">₹2000</span>
                    </div>
                </div>
                <div><button class="place_order_button">PLACE ORDER</button>
                </div>
    `;

  }


