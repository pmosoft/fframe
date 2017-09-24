package net.pmosoft.fframe.gens.pgm.core;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
 
@RestController
public class GensPgmCtrl {

    @Autowired
    private GensPgmSrv gensPgmSrv;

    @RequestMapping(value = "/gens/pgm/genPgm")
    public Map<String, Object> genPgm(@RequestParam Map<String,String> params) {
        return gensPgmSrv.genPgm(params);
    }
    
}
