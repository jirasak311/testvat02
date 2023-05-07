function calculate(vat){
    if (vat=="" ){
        alert("กรุณากรอกข้อมูล")
      
    }
    else if (vat < 150000 ){
        document.getElementById("vatresult").innerHTML ="ได้รับการยกเว้น";
      
    }
    else if (vat >=150000 && vat <=300000 ){
        const sum = vat*0.05
        document.getElementById("vatresult").innerHTML ="ภาษีที่โดนหัก5% คือ : "+sum +" บาท"
       
    }
    else if (vat >300000 && vat <=500000 ){
        const sum = vat*0.1
        document.getElementById("vatresult").innerHTML ="ภาษีที่โดนหัก10% คือ : "+sum +" บาท"
     
    }
    else if (vat >500000 && vat <=750000 ){
        const sum = vat*0.15
        document.getElementById("vatresult").innerHTML ="ภาษีที่โดนหัก15% คือ : "+sum +" บาท"
     
    }
    else if (vat >750000 && vat <=1000000 ){
        const sum = vat*0.20
        document.getElementById("vatresult").innerHTML ="ภาษีที่โดนหัก20% คือ : "+sum +" บาท"
    
    }
    else if (vat >1000000 && vat <=2000000 ){
        const sum = vat*0.25
        document.getElementById("vatresult").innerHTML ="ภาษีที่โดนหัก25% คือ : "+sum +" บาท"
     
    }
    else if (vat >2000000 && vat <=50000000 ){
        const sum = vat*0.30
        document.getElementById("vatresult").innerHTML ="ภาษีที่โดนหัก30% คือ : "+sum +" บาท"
     
    }
    else if ( vat >50000000 ){
        const sum = vat*0.35
        document.getElementById("vatresult").innerHTML ="ภาษีที่โดนหัก35% คือ : "+sum +" บาท"
     
    }
    else {
        //document.getElementById("vatresult").innerHTML ="ไม่สามารถคำนวนได้";
        alert("ใส่จำนวนตัวเลขเท่านั้น")
    }

}