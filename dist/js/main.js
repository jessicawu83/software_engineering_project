$(document).ready( function () {
    $('#demo_datatables').DataTable();

    $("#report").click(function(){
		
		alert("下載完成")
	});

    $("#createjob").click(function(){
		
		alert("創建成功")
	});

    var dataset = [
        ["High","port scan","192.168.56.2","Windows","cpe:/a:postgresql:postgresql:8.3","CVE-2010-1447","8.5","syn-ack","https://vulners.com/cve/CVE-2010-1447"],
        ["High","port scan","192.168.56.2","Windows","cpe:/a:postgresql:postgresql:8.3","CVE-2010-1169","8.5","syn-ack","https://vulners.com/cve/CVE-2010-1169"],
        ["High","port scan","192.168.56.2","Windows","cpe:/a:postgresql:postgresql:8.3","CVE-2013-0255","6.8","syn-ack","https://vulners.com/cve/CVE-2013-0255"],
        ["High","port scan","192.168.56.2","Windows","cpe:/a:postgresql:postgresql:8.3","CVE-2012-0868","6.8","syn-ack","https://vulners.com/cve/CVE-2012-0868"],
        ["High","port scan","192.168.56.2","Windows","cpe:/a:postgresql:postgresql:8.3","CVE-2009-3231","6.8","syn-ack","https://vulners.com/cve/CVE-2009-3231"],
        ["Med","port scan","192.168.56.2","Windows","cpe:/a:postgresql:postgresql:8.3","CVE-2014-0065","6.5","syn-ack","https://vulners.com/cve/CVE-2014-0065"],
        ["Med","port scan","192.168.56.2","Windows","cpe:/a:postgresql:postgresql:8.3","CVE-2014-0064","6.5","syn-ack","https://vulners.com/cve/CVE-2014-0064"],
        ["Med","port scan","192.168.56.2","Windows","cpe:/a:postgresql:postgresql:8.3","CVE-2014-0063","6.5","syn-ack","https://vulners.com/cve/CVE-2014-0063"],
        ["Med","port scan","192.168.56.2","Windows","cpe:/a:postgresql:postgresql:8.3","CVE-2014-0061","6.5","syn-ack","https://vulners.com/cve/CVE-2014-0061"],
        ["Med","port scan","192.168.56.2","Windows","cpe:/a:postgresql:postgresql:8.3","CVE-2012-0866","6.5","syn-ack","https://vulners.com/cve/CVE-2012-0866"],
        ["Med","port scan","192.168.56.2","Windows","cpe:/a:postgresql:postgresql:8.3","CVE-2010-4015","6.5","syn-ack","https://vulners.com/cve/CVE-2010-4015"],
        ["Med","port scan","192.168.56.2","Windows","cpe:/a:postgresql:postgresql:8.3","CVE-2010-3433","6.0","syn-ack","https://vulners.com/cve/CVE-2010-3433"],
        ["Med","port scan","192.168.56.2","Windows","cpe:/a:postgresql:postgresql:8.3","CVE-2010-1170","6.0","syn-ack","https://vulners.com/cve/CVE-2010-1170"],
        ["Med","port scan","192.168.56.2","Windows","cpe:/a:postgresql:postgresql:8.3","CVE-2010-1975","5.5","syn-ack","https://vulners.com/cve/CVE-2010-1975"],
        ["High","port scan","192.168.56.2","Windows","cpe:/a:mysql:mysql:5.0.51a-3ubuntu5","CVE-2009-2446","8.5","syn-ack","https://vulners.com/cve/CVE-2009-2446"],
        ["High","port scan","192.168.56.2","Windows","cpe:/a:mysql:mysql:5.0.51a-3ubuntu5","CVE-2008-0226","7.5","syn-ack","https://vulners.com/cve/CVE-2008-0226"],
        ["High","port scan","192.168.56.2","Windows","cpe:/a:mysql:mysql:5.0.51a-3ubuntu5","CVE-2009-5026","6.8","syn-ack","https://vulners.com/cve/CVE-2009-5026"],
        ["High","port scan","192.168.56.2","Windows","cpe:/a:mysql:mysql:5.0.51a-3ubuntu5","CVE-2009-4028","6.8","syn-ack","https://vulners.com/cve/CVE-2009-4028"],
        ["Med","port scan","192.168.56.2","Windows","cpe:/a:mysql:mysql:5.0.51a-3ubuntu5","CVE-2010-1848","6.5","syn-ack","https://vulners.com/cve/CVE-2010-1848"],
        ["Med","port scan","192.168.56.2","Windows","cpe:/a:mysql:mysql:5.0.51a-3ubuntu5","CVE-2010-1850","6.0","syn-ack","https://vulners.com/cve/CVE-2010-1850"],
        ["Med","port scan","192.168.56.2","Windows","cpe:/a:mysql:mysql:5.0.51a-3ubuntu5","CVE-2008-7247","6.0","syn-ack","https://vulners.com/cve/CVE-2008-7247"],
        ["Med","port scan","192.168.56.2","Windows","cpe:/a:mysql:mysql:5.0.51a-3ubuntu5","CVE-2010-3833","5.0","syn-ack","https://vulners.com/cve/CVE-2010-3833"],
        ["Med","port scan","192.168.56.2","Windows","cpe:/a:mysql:mysql:5.0.51a-3ubuntu5","CVE-2010-1849","5.0","syn-ack","https://vulners.com/cve/CVE-2010-1849"]
        
    ];
    $('#demo_datatable1').DataTable({
        "data": dataset,
        "columns": [ // 列的標題一般是從DOM中讀取（也可以使用這個屬性為表格創建列標題)
        { title: "Status" //,
        // render: function (data, type, row) {
        //     if (data.Status.indexOf('High')>=0){ $(row).css('background-color', '#FFB6C1'); }
        //   }
        },
        { title: "Scan Item" },
        { title: "Host" },
        { title: "OS" },
        { title: "CPE" },
        { title: "CVE" },
        { title: "CVSS" },
        { title: "Reason" },
        { title: "Url" },
      ],
      columnDefs:[
        {
            targets: [0],
            createdCell: function (td, cellData, rowData, row, col) {
                // console.log(rowData[])
                if(rowData[0]=="High"){
                    $(td).css('color', 'red')
                }else{
                    $(td).css('color', 'rgb(255, 218, 34)')
                }
            },
        }
    ]
    });

    

} );