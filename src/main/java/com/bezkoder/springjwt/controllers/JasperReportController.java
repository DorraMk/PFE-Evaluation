package com.bezkoder.springjwt.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperExportManager;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;


@RestController
@RequestMapping("/report")
public class JasperReportController {

	 @Autowired
	    private DataSource dataSource;
	
	 @GetMapping(value = "/myreport/{id_res}/{usr_matricule}", produces = "application/pdf")
	    public void generateMyReport(HttpServletResponse response, @PathVariable("id_res") Long id_res,@PathVariable("usr_matricule") String usr_matricule) throws Exception {
		 
	        //JasperReport jasperReport = JasperCompileManager.compileReport(getClass().getResourceAsStream("/rapportResultat.jrxml"));

	        JasperReport jasperReport = JasperCompileManager.compileReport(getClass().getClassLoader().getResourceAsStream("rapportResultatEvalue.jrxml"));

	        Map<String, Object> params = new HashMap<>();
	        params.put("id_res", id_res); 
	        params.put("usr_matricule", usr_matricule);
	        JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, params, dataSource.getConnection());

	      
	        JasperExportManager.exportReportToPdfStream(jasperPrint, response.getOutputStream());

	        // Generate a unique filename for the PDF report
//	        String uniqueFilename = "report_" + UUID.randomUUID().toString() + ".pdf";
//	        String tempDir = System.getProperty("java.io.tmpdir");
//	        String reportFilePath = tempDir + File.separator + uniqueFilename;
//
//	        JasperExportManager.exportReportToPdfFile(jasperPrint, reportFilePath);

	        // Call the mailing procedure with the dynamic filename
	        //mailingProcedureWithAttachment(id_res, usr_matricule, reportFilePath);
	        
	        
	       
	        response.setContentType("application/pdf");
	        response.setHeader("Content-Disposition", "inline; filename=myreport.pdf");
	        response.getOutputStream().flush();
	    }
}
