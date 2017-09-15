package net.pmosoft.fframe.util;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;

public class ExcelUtil {

    
	public void downRsToExcel(ResultSet rs, String filePathNm) throws SQLException {
		Workbook xlsWb;
		Sheet sheet1;
		Row row = null;
		Cell cell = null;
		
		xlsWb = new HSSFWorkbook();
		sheet1 = xlsWb.createSheet("sheet1");
		
		//---------------------------------------
		// Header
		//---------------------------------------
		row = sheet1.createRow(0);
		ResultSetMetaData rsmd = rs.getMetaData();
		int colCnt = rsmd.getColumnCount();
		System.out.println("colCnt="+colCnt);
		for (int i = 0; i < colCnt; i++) {
			cell = row.createCell(i);
			System.out.println(rsmd.getColumnName(i+1));
			cell.setCellValue(rsmd.getColumnName(i+1));
		}
		
		//---------------------------------------
		// Data
		//---------------------------------------
		int j=1;
		while(rs.next()){
			row = sheet1.createRow(j);
			for (int i = 0; i < colCnt; i++) {
				cell = row.createCell(i);
				cell.setCellValue(rs.getString(i+1));
				System.out.println("i="+i+" "+rsmd.getColumnName(i+1)+"   "+rs.getString(i+1));				
			}
			System.out.println("j="+j);
			j++;
		}
	
		//---------------------------------------
		// Create Excel File
		//---------------------------------------
		try {
			File xlsFile = new File(filePathNm);
			FileOutputStream fileOut = new FileOutputStream(xlsFile);
			xlsWb.write(fileOut);
		} catch (FileNotFoundException fe) {
			System.out.println("FileNotFoundException >> "+ fe.toString());
		} catch (IOException ie) {
			System.out.println("IOException >> "+ ie.toString());
		}
	}
	

    public void downListToExcel(List<Map<String,String>> list, String filePathNm) throws SQLException {
        Workbook xlsWb;
        Sheet sheet1;
        Row row = null;
        Cell cell = null;
        
        xlsWb = new HSSFWorkbook();
        sheet1 = xlsWb.createSheet("sheet1");
       
        //---------------------------------------
        // Data
        //---------------------------------------
        for (int i = 0; i < list.size(); i++) {
            row = sheet1.createRow(i);
            int j=0;    
            for (Map.Entry<String, String> entry : list.get(i).entrySet()) {
                cell = row.createCell(j);
                if(i==0) {
                    cell.setCellValue(entry.getKey());
                    System.out.println("entry.getKey() : " + entry.getKey());
                    
                }  else { 
                    cell.setCellValue(entry.getValue());
                    System.out.println("entry.getValue() : " + entry.getValue());
                }
                j++;
                //System.out.println("Item : " + entry.getKey() + " Count : " + entry.getValue());
            }        
            System.out.println("i="+i);
        }
    
        //---------------------------------------
        // Create Excel File
        //---------------------------------------
        try {
            File xlsFile = new File(filePathNm);
            FileOutputStream fileOut = new FileOutputStream(xlsFile);
            xlsWb.write(fileOut);
            fileOut.close();

        } catch (FileNotFoundException fe) {
            System.out.println("FileNotFoundException >> "+ fe.toString());
        } catch (IOException ie) {
            System.out.println("IOException >> "+ ie.toString());
        }
    }	
	
	
}
