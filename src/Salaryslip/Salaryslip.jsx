import React, { useRef } from 'react'
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Salaryslip = () => {
    const slipRef = useRef();

    const downloadpdf =()=>{
        const input = slipRef.current;
        html2canvas(input,{scale:2}).then((canvas)=>{
            const imgData = canvas.toDataURL("image/png");
            const spdf = new jsPDF("p", "mm", "a4");
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            spdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
            s   pdf.save("salary_Slip.pdf");
        })
    }
    const empd = {
        empname: "Devendra Mali",
        designation: "Front-end-developer",
        empid: 100,
        paiddays: 29,
        acno: 987654323456,
        uan: 45678545,
        pf: 6787654567,
        basesalary: 23000,
        homerant: 15000,
        overtimebonus: 5000,
        spacialallownce: 3000,
        epf: 2000,
        tds: 1000,
        doj: "31/08/2023",
        pd: "31/01/2025",
        lop: 2,
        bank:"Central Bank of India",
        pft:1200

    }
    const netpay = empd.basesalary + empd.homerant + empd.overtimebonus + empd.spacialallownce + empd.epf + empd.tds+empd.pft

    const grossern = empd.basesalary + empd.homerant + empd.overtimebonus + empd.spacialallownce

    const disct = empd.epf + empd.tds+empd.pft 

    const total = grossern - disct
    return (
        <>
            <div className="container slip-container" ref={slipRef}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contain">
                            <div className="salarydetials">
                                <h4 className="head">employee summry</h4>
                                <h5>Name: <span>{empd.empname}</span></h5>
                                <h5>Designation: <span>{empd.designation}</span></h5>
                                <h5>Employee Id: <span>{empd.empid}</span></h5>
                                <h5>Bank Name: <span>{empd.bank}</span></h5>
                                <h5>AC Nunber: <span>{empd.acno}</span></h5>
                                <h5>Date Of Joining: <span>{empd.doj}</span></h5>
                                <h5>Pay Date: <span>{empd.pd}</span></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contain">
                            <div className="salarydetials">
                                <div className="slip">
                                    <div className="net">
                                        <h3> ₹{total}.00</h3>
                                        <span>Employee Net Pay</span>
                                    </div>
                                    <div className="p-4">
                                        <h5>Paid Days: <span>{empd.paiddays}</span></h5>
                                        <h5>LOP Days: <span>{empd.lop}</span></h5>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr />
                <div className="pfno">
                    <h5>PF Number: <span>{empd.pf}</span></h5>
                    <h5>UNA Number: <span>{empd.uan}</span></h5>
                </div>
                <div className="salarystucture">
                    <div className="row">
                        <div className="col-lg-6">
                           

                            <table class="table table-bordered">
                                <thead >
                                    <tr>
                                        <th colspan="2">EARNINGS</th>
                                        <th>AMOUNT</th>
                                     
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="2">Basic</td>
                                        <td>₹{empd.basesalary}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">House Rent Allowance</td>
                                        <td>₹{empd.homerant}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">Overtime Bonus</td>
                                        <td>₹{empd.overtimebonus}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">Spacial Allowance</td>
                                        <td>₹{empd.spacialallownce}</td>
                                    </tr>
                                    <tr className='bottom'>
                                        <td className="sdsd" colspan="2">Gross Erning</td>
                                        <td>₹{grossern}</td>
                                    </tr>
                                   
                                </tbody>
                                </table>

                        </div>
                        <div className="col-lg-6">
                           

                            <table class="table table-bordered">
                                <thead >
                                    <tr>
                                        <th colspan="2">EARNINGS</th>
                                        <th>AMOUNT</th>
                                     
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="2">EPF</td>
                                        <td>₹{empd.epf}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">Professional Tax</td>
                                        <td>₹{empd.pft}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">TDS</td>
                                        <td>₹{empd.tds}</td>
                                    </tr>
                                    <tr className='bottom'>
                                        <td className="sdsd" colspan="2">Total Deductions</td>
                                        <td>₹{disct}</td>
                                    </tr>
                                   
                                </tbody>
                                </table>

                        </div>
                    </div>
                </div>
                <hr />
                <div className="totalerning">
                    <div className="tit">
                        <h4>TOTAL NET PAYABLE</h4>
                        <span>Gross Earning - Total Deduction</span>
                    </div>
                    <div className="to">
                    <h3>₹{total}.00</h3>
                    </div>
                </div>
              
            </div> 
             <div className="container">
                <div className="btn1 d-flex align-items-end">
                    <button onClick={downloadpdf }>Download Salary Slip</button>
                </div>
             </div>
        </>
    )
}

export default Salaryslip