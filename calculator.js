export class Calculator
{
    constructor(host)
    {
        this.host = host;
        this.cars = [];

    }
    draw()
    {
        const div1 = document.createElement("div");
        div1.className = "div1";
        this.host.appendChild(div1);

        const topdiv = document.createElement("div");
        div1.appendChild(topdiv);

        const title = document.createElement("h2");
        title.textContent = "Car Leasing Calculator";
        topdiv.appendChild(title);

        const middiv = document.createElement("div");
        middiv.className = "middiv";
        div1.appendChild(middiv);

        const cleft = document.createElement("div");
        cleft.className = "cleft";
        const cright = document.createElement("div");
        cright.className = "cright";
        middiv.appendChild(cleft);
        middiv.appendChild(cright);

        const typelbl = document.createElement("p");
        typelbl.textContent = "Car Type:";
        cleft.appendChild(typelbl);

        const typebox = document.createElement("select");
        typebox.className = "typebox";
        cleft.appendChild(typebox);

        this.cars.forEach(car => {
            const opt1 = document.createElement("option");
            opt1.value = car.interest;
            opt1.innerText = car.type;
            typebox.add(opt1);
        });

        typebox.onchange=()=>{
            updatevalues();
        }

        const valuelbl = document.createElement("p");
        valuelbl.textContent = "Car Value (€10,000 - €200,000):";
        cleft.appendChild(valuelbl);

        const valuebox = document.createElement("input");
        valuebox.value = 100000;
        cleft.appendChild(valuebox);

        valuebox.onchange=()=>{
            if (valuebox.value < 10000) valuebox.value = 10000;
            if (valuebox.value > 200000) valuebox.value = 200000;
            valuerange.value = valuebox.value;
            updatevalues();
        }

        const valuerange = document.createElement("input");
        valuerange.type = "range";
        valuerange.min = 10000;
        valuerange.max = 200000;
        valuerange.value = 100000;
        cleft.appendChild(valuerange);

        valuerange.onchange=()=>{
            valuebox.value = valuerange.value;
            updatevalues();
        }

        const leaselbl = document.createElement("p");
        leaselbl.textContent = "Lease Period (months):";
        cright.appendChild(leaselbl);

        const leasebox = document.createElement("input");
        leasebox.value = 36;
        cright.appendChild(leasebox);

        leasebox.onchange=()=>{
            if (leasebox.value < 12) leasebox.value = 12;
            if (leasebox.value > 60) leasebox.value = 60;
            leasebox.value = Math.round(leasebox.value / 12) * 12;
            leaserange.value = leasebox.value;
            updatevalues();
        }

        const leaserange = document.createElement("input");
        leaserange.type = "range";
        leaserange.min = 12;
        leaserange.max = 60;
        leaserange.step = 12;
        leaserange.value = 36;
        cright.appendChild(leaserange);

        leaserange.onchange=()=>{
            leasebox.value = leaserange.value;
            updatevalues();
        }

        const downlbl = document.createElement("p");
        downlbl.textContent = "Down Payment (10-50%):";
        cright.appendChild(downlbl);

        const downrange = document.createElement("input");
        downrange.type = "range";
        downrange.min = 10;
        downrange.max = 50;
        downrange.step = 5;
        downrange.value = 20;
        cright.appendChild(downrange);

        downrange.onchange=()=>{
            updatevalues();
        }

        const bottomdiv = document.createElement("div");
        div1.appendChild(bottomdiv);

        const detailslbl = document.createElement("h3");
        detailslbl.textContent = "Leasing Details";
        bottomdiv.appendChild(detailslbl);

        const bottom2 = document.createElement("div");
        bottom2.className = "bottom2";
        bottomdiv.appendChild(bottom2);
        
        const bottomleft = document.createElement("div");
        const bottomright = document.createElement("div");
        bottomleft.className = "bottomleft";
        bottomright.className = "bottomright";
        bottom2.appendChild(bottomleft);
        bottom2.appendChild(bottomright);

        const bleftlbl = document.createElement("p");
        bottomleft.appendChild(bleftlbl);

        const bleftlbl2 = document.createElement("p");
        bottomleft.appendChild(bleftlbl2);

        const brightlbl = document.createElement("p");
        const monthlyl = valuerange.value * ((downrange.value / 100)+((100-downrange.value)/1000 * (10+typebox.value)/10));
        bottomright.appendChild(brightlbl);

        const brightlbl2 = document.createElement("p");
        brightlbl2.className = "brightlbl2";
        bottomright.appendChild(brightlbl2);

        updatevalues();


        
        function updatevalues()
        {
            const months = leasebox.value;
            const interestm = typebox.value / (12*100);
            const principal = valuebox.value * (100 - downrange.value) / 100;
            const plusinterest = Math.pow((1 + interestm), months);
            const monthlyl = (principal * interestm * plusinterest) / (plusinterest - 1);
            brightlbl.textContent = "Monthly Installment: €" + monthlyl.toFixed(2);
            let downp = valuebox.value * downrange.value / 100;
            let leasingcost = (monthlyl * months) + downp;
            bleftlbl.textContent = "Total Leasing Cost: €" + leasingcost.toFixed(2);
            bleftlbl2.textContent = "Down Payment: €" + downp.toFixed(2) + " (" + downrange.value + "%)";
            brightlbl2.textContent = "Interest Rate: " + typebox.value + "%";
        }

    }

    add(car)
    {
        this.cars.push(car);
    }
}