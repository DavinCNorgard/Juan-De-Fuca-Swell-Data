        var x = document.getElementById("JDFWater");
        var y = document.getElementById("JDFAir");

        var ctx = document.getElementById("JDFWater").getContext('2d');
        var cty = document.getElementById("JDFAir").getContext('2d');
        
        x.width = 800;
        x.height = 400;
        
        y.width = 800;
        y.height = 400;
        /*
        addEventListener('resize', ()=> {
            x.width = 800;
            x.height = 400;
            
            y.width = 800;
            y.height = 400;
        
        });
        */

        function colorScale(temp){
            if(temp < 5){
                return "rgb(0, 77, 153)";
            } else if(temp < 6){
                return "rgb(0, 77, 153)";
            } else if(temp < 7){
                return "rgb(0, 77, 153)";
            } else if(temp < 8){
                return "rgb(0, 77, 153)"; //low
            } else if(temp < 9){
                return "rgb(0, 115, 230)"; //40%
            }else if(temp < 9.5){
                return "rgb(26, 140, 255)"; //55%
            }else if(temp < 10){
                return "rgb(102, 179, 255)"; //70%
            }else if(temp < 10.5){
                return "rgb(179, 217, 255)" //85%
            }else if(temp < 11){
                return "rgb(255, 255, 255)"; //mid
            }else if(temp < 11.5){
                return "rgb(255, 194, 179)"; //85%
            }else if(temp < 12){
                return "rgb(255, 133, 102)"; //70%
            }else if(temp < 12.5){
                return "rgb(255, 71, 26)"; //55%
            }else if(temp < 13){
                return "rgb(204, 41, 0)"; //40%
            }else if(temp < 13.5){
                return "rgb(179, 36, 0)"; //35
            }else if(temp < 14){
                return "rgb(179, 36, 0)"; //high
            }else{
                return "rgb(179, 36, 0)";
            }
        }
  


        //Ocean data---------------------------
        var WVHT = [2.32, //average monthly wave height (m)
                        1.80,
                        1.69,
                        2.01,
                        1.50,
                        1.38,
                        1.04,
                        1.07,
                        1.60,
                        1.84,
                        1.71,
                        2.34,]

        var DPD = [12.22, //average monthly dominant wave period (sec)
                        12.02,
                        12.84,
                        11.42,
                        10.28,
                        8.53,
                        10.89,
                        8.96,
                        10.29,
                        11.09,
                        10.99,
                        12.31]

        var WTMP = [9.23, //Water temperature avereage for each month (degC)
                    8.26,
                    8.62,
                    10.51,
                    11.29,
                    11.48,
                    12.78,
                    12.48,
                    13.64,
                    10.80,
                    9.46,
                    8.89]


        var bbl = [{x: 1, y: WVHT[0] , r: DPD[0]}, //bubble graph data
                        {x: 2, y: WVHT[1], r: DPD[1]},
                        {x: 3, y: WVHT[2], r: DPD[2]},
                        {x: 4, y: WVHT[3], r: DPD[3]},
                        {x: 5, y: WVHT[4], r: DPD[4]},
                        {x: 6, y: WVHT[5], r: DPD[5]},
                        {x: 7, y: WVHT[6], r: DPD[6]},
                        {x: 8, y: WVHT[7], r: DPD[7]},
                        {x: 9, y: WVHT[8], r: DPD[8]},
                        {x: 10, y: WVHT[9], r: DPD[9]},
                        {x: 11, y: WVHT[10], r: DPD[10]},
                        {x: 12, y: WVHT[11], r: DPD[11]},]


        var gradientfillwater = ctx.createLinearGradient(0,0,800,0); //water temperature color gradient
        gradientfillwater.addColorStop(0/12, colorScale(WTMP[0]))
        gradientfillwater.addColorStop(1/11, colorScale(WTMP[1]))
        gradientfillwater.addColorStop(2/12, colorScale(WTMP[2]))
        gradientfillwater.addColorStop(3/11, colorScale(WTMP[3]))
        gradientfillwater.addColorStop(4/12, colorScale(WTMP[4]))
        gradientfillwater.addColorStop(5/11, colorScale(WTMP[5]))
        gradientfillwater.addColorStop(6/12, colorScale(WTMP[6]))
        gradientfillwater.addColorStop(7/11, colorScale(WTMP[7]))
        gradientfillwater.addColorStop(8/12, colorScale(WTMP[8]))
        gradientfillwater.addColorStop(9/11, colorScale(WTMP[9]))
        gradientfillwater.addColorStop(10/12, colorScale(WTMP[10]))
        gradientfillwater.addColorStop(11/11, colorScale(WTMP[11]))

        //Air Data---------------------------------

   
        var WSPD = [7.73, //average monthly windspeed (m/s)
                    6.89,
                    5.29,
                    5.54,
                    3.40,
                    3.36,
                    2.44,
                    2.67,
                    3.56,
                    5.77,
                    5.99,
                    6.61]


        var ATMP = [8.23, //average monthly air temp (degC)
                    4.26,
                    7.38,
                    9.64,
                    11.32,
                    11.77,
                    13.43,
                    13.72,
                    13.73,
                    10.22,
                    8.67,
                    7.67]
                    
        var gradientfillair = cty.createLinearGradient(0,0,800,0); //Air temperature color gradient
        gradientfillair.addColorStop(0/12, colorScale(ATMP[0]))
        gradientfillair.addColorStop(1/11, colorScale(ATMP[1]))
        gradientfillair.addColorStop(2/12, colorScale(ATMP[2]))
        gradientfillair.addColorStop(3/11, colorScale(ATMP[3]))
        gradientfillair.addColorStop(4/12, colorScale(ATMP[4]))
        gradientfillair.addColorStop(5/11, colorScale(ATMP[5]))
        gradientfillair.addColorStop(6/12, colorScale(ATMP[6]))
        gradientfillair.addColorStop(7/11, colorScale(ATMP[7]))
        gradientfillair.addColorStop(8/12, colorScale(ATMP[8]))
        gradientfillair.addColorStop(9/11, colorScale(ATMP[9]))
        gradientfillair.addColorStop(10/12, colorScale(ATMP[10]))
        gradientfillair.addColorStop(11/11, colorScale(ATMP[11])) 

      


        var JDFWater = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [{
                    label: 'Wave Height',
                    pointStyle: 'triangle',
                    borderColor: 'rgba(0, 0, 0, 1)',
                    backgroundColor: gradientfillwater,
                    borderWidth: 1,   
                                    
                    fill: true,
                    data: WVHT,
                    
                },{
                    label: 'period',
                    //fill: true,
                    borderColor: 'rgba(0, 0, 0, 1)',
                    type: 'bubble',
                    
                    data: bbl,


                }]
                    
            },
            options: {
                responsive: false,
                title:{
                    display: true,
                },

                tooltips: {
                    enabled: true,
                    filter: function (tooltipItem){
                        return tooltipItem.datasetIndex === 0;
                    },
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var datasetLabel1 = "Wave Height"
                            var datasetLabel2 = "Wave Period"
                            var datasetLabel3 = "Water Temperature"
                            rLabel = data.datasets[1].data[tooltipItem.index].r;
                            tempw = WTMP[tooltipItem.index];
                            return [datasetLabel1 + ' : ' + tooltipItem.yLabel + " m", 
                                    datasetLabel2 + ' : ' +  rLabel + " s",
                                    datasetLabel3 + ' : ' + tempw + " degC"];
                        }
                        

                    }  
                      
                    
                    
                    
                }
            }
        });

        var JDFAir = new Chart(cty, {
            type: 'line',
            
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [{
                    label: 'Wind Speed',
                    pointStyle: 'triangle',
                    borderColor: 'rgba(0, 0, 0, 1)',
                    backgroundColor: gradientfillair,
                    borderWidth: 1,                    
                    fill: true,
                    data: WSPD,
                    
                }]
            },
            
            
            options: {
                responsive: false,
                title:{
                    display: true,
                },

                tooltips: {
                    enabled: true,
                    
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var datasetLabel1 = "Wind Speed";
                            var datasetLabel2 = "Air Temperature";
                            tempa = ATMP[tooltipItem.index];
                            return [datasetLabel1 + " : " + tooltipItem.yLabel + " m/s",
                                    datasetLabel2 + " : " + tempa + " degC"];
                        }
                        

                    }  
                      
                    
                    
                    
                    
                }
                    
                
                
            }
       
        });


