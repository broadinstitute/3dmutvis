import React, { Component } from 'react';
import jQuery from 'jquery';
window.$ = jQuery;

const $3Dmol = require('3dmol');

let wrapperStyle = {
	position: 'relative',
}
let viewerStyle = {
	width: "100%",
	height: 400 
}

class ProteinViewer extends Component {
  constructor(props){
		super(props)

  }
  componentDidMount(){
	let config = { backgroundColor: 'white' };
	let viewer = $3Dmol.createViewer( jQuery(this.refs.viewer), config );
	viewer.addModel(data, 'pdb');
  	let colorAsSnake = function(atom) {

    	 return atom.resi % 5 ? 'white': 'red'

  	};
	viewer.setStyle({chain: "A"}, {cartoon: {color: "spectrum"}});  /* style all atoms */
	//viewer.setStyle({resi:[404,405,406,407]},{stick:{color:"red"}})
	//viewer.addResLabels({resi: [404,405,406,407], atom: 'CA'});
	//viewer.addSurface("VDW",{opacity:0.6, colorfunc:colorAsSnake});
    viewer.setClickable({chain:"A"}, true, function(event){ console.log("HI", event); });

    viewer.zoomTo();                                      /* set camera */
    viewer.render();
    window.viewer = viewer;                                     /* render scene */
  }
  render() {
  	return(
		  <div style={wrapperStyle} >
  			<div style={viewerStyle} ref="viewer">
  			</div>
		</div>
  		)
  }
}

export default ProteinViewer;



let data = `
HEADER    TRANSFERASE/DNA                         13-AUG-13   4M8O              
TITLE     TERNARY COMPLEX OF DNA POLYMERASE EPSILON WITH AN INCOMING DATP       
COMPND    MOL_ID: 1;                                                            
COMPND   2 MOLECULE: DNA POLYMERASE EPSILON CATALYTIC SUBUNIT A;                
COMPND   3 CHAIN: A;                                                            
COMPND   4 FRAGMENT: POL2 DOMAIN, UNP RESIDUES 1-1228;                          
COMPND   5 SYNONYM: DNA POLYMERASE II SUBUNIT A;                                
COMPND   6 EC: 2.7.7.7;                                                         
COMPND   7 ENGINEERED: YES;                                                     
COMPND   8 MUTATION: YES;                                                       
COMPND   9 MOL_ID: 2;                                                           
COMPND  10 MOLECULE: PRIMER DNA;                                                
COMPND  11 CHAIN: P;                                                            
COMPND  12 ENGINEERED: YES;                                                     
COMPND  13 MOL_ID: 3;                                                           
COMPND  14 MOLECULE: TEMPLATE DNA;                                              
COMPND  15 CHAIN: T;                                                            
COMPND  16 ENGINEERED: YES                                                      
SOURCE    MOL_ID: 1;                                                            
SOURCE   2 ORGANISM_SCIENTIFIC: SACCHAROMYCES CEREVISIAE;                       
SOURCE   3 ORGANISM_COMMON: BAKER'S YEAST;                                      
SOURCE   4 ORGANISM_TAXID: 559292;                                              
SOURCE   5 STRAIN: ATCC 204508 / S288C;                                         
SOURCE   6 GENE: POL2, DUN2, YNL262W, N0825;                                    
SOURCE   7 EXPRESSION_SYSTEM: SACCHAROMYCES CEREVISIAE;                         
SOURCE   8 EXPRESSION_SYSTEM_TAXID: 4932;                                       
SOURCE   9 MOL_ID: 2;                                                           
SOURCE  10 SYNTHETIC: YES;                                                      
SOURCE  11 OTHER_DETAILS: SYNTHETIC CONSTRUCT;                                  
SOURCE  12 MOL_ID: 3;                                                           
SOURCE  13 SYNTHETIC: YES;                                                      
SOURCE  14 OTHER_DETAILS: SYNTHETIC CONSTRUCT                                   
KEYWDS    DNA POLYMERASE B TYPE, DNA SYNTHESIS, PROTEIN-DNA COMPLEX, DNA        
KEYWDS   2 REPLICATION, METAL-BINDING, TRANSFERASE DNA COMPLEX,                 
KEYWDS   3 NUCLEOTIDYLTRANSFERASE, TRANSFERASE-DNA COMPLEX                      
EXPDTA    X-RAY DIFFRACTION                                                     
AUTHOR    A.E.SAUER-ERIKSSON,M.HOGG,P.OSTERMAN,E.JOHANSSON                      
REVDAT   3   19-MAR-14 4M8O    1       JRNL                                     
REVDAT   2   11-DEC-13 4M8O    1       JRNL                                     
REVDAT   1   27-NOV-13 4M8O    0                                                
JRNL        AUTH   M.HOGG,P.OSTERMAN,G.O.BYLUND,R.A.GANAI,E.B.LUNDSTROM,        
JRNL        AUTH 2 A.E.SAUER-ERIKSSON,E.JOHANSSON                               
JRNL        TITL   STRUCTURAL BASIS FOR PROCESSIVE DNA SYNTHESIS BY YEAST DNA   
JRNL        TITL 2 POLYMERASE EPSILON.                                          
JRNL        REF    NAT.STRUCT.MOL.BIOL.          V.  21    49 2014              
JRNL        REFN                   ISSN 1545-9993                               
JRNL        PMID   24292646                                                     
JRNL        DOI    10.1038/NSMB.2712                                            
REMARK   2                                                                      
REMARK   2 RESOLUTION.    2.20 ANGSTROMS.                                       
REMARK   3                                                                      
REMARK   3 REFINEMENT.                                                          
REMARK   3   PROGRAM     : REFMAC 5.7.0032                                      
REMARK   3   AUTHORS     : MURSHUDOV,VAGIN,DODSON                               
REMARK   3                                                                      
REMARK   3    REFINEMENT TARGET : MAXIMUM LIKELIHOOD                            
REMARK   3                                                                      
REMARK   3  DATA USED IN REFINEMENT.                                            
REMARK   3   RESOLUTION RANGE HIGH (ANGSTROMS) : 2.20                           
REMARK   3   RESOLUTION RANGE LOW  (ANGSTROMS) : 47.05                          
REMARK   3   DATA CUTOFF            (SIGMA(F)) : NULL                           
REMARK   3   COMPLETENESS FOR RANGE        (%) : 99.9                           
REMARK   3   NUMBER OF REFLECTIONS             : 69054                          
REMARK   3                                                                      
REMARK   3  FIT TO DATA USED IN REFINEMENT.                                     
REMARK   3   CROSS-VALIDATION METHOD          : THROUGHOUT                      
REMARK   3   FREE R VALUE TEST SET SELECTION  : RANDOM                          
REMARK   3   R VALUE     (WORKING + TEST SET) : 0.183                           
REMARK   3   R VALUE            (WORKING SET) : 0.180                           
REMARK   3   FREE R VALUE                     : 0.237                           
REMARK   3   FREE R VALUE TEST SET SIZE   (%) : 5.000                           
REMARK   3   FREE R VALUE TEST SET COUNT      : 3667                            
REMARK   3                                                                      
REMARK   3  FIT IN THE HIGHEST RESOLUTION BIN.                                  
REMARK   3   TOTAL NUMBER OF BINS USED           : 20                           
REMARK   3   BIN RESOLUTION RANGE HIGH       (A) : 2.20                         
REMARK   3   BIN RESOLUTION RANGE LOW        (A) : 2.32                         
REMARK   3   REFLECTION IN BIN     (WORKING SET) : 5076                         
REMARK   3   BIN COMPLETENESS (WORKING+TEST) (%) : 99.81                        
REMARK   3   BIN R VALUE           (WORKING SET) : 0.2470                       
REMARK   3   BIN FREE R VALUE SET COUNT          : 256                          
REMARK   3   BIN FREE R VALUE                    : 0.3050                       
REMARK   3                                                                      
REMARK   3  NUMBER OF NON-HYDROGEN ATOMS USED IN REFINEMENT.                    
REMARK   3   PROTEIN ATOMS            : 9173                                    
REMARK   3   NUCLEIC ACID ATOMS       : 535                                     
REMARK   3   HETEROGEN ATOMS          : 48                                      
REMARK   3   SOLVENT ATOMS            : 459                                     
REMARK   3                                                                      
REMARK   3  B VALUES.                                                           
REMARK   3   FROM WILSON PLOT           (A**2) : NULL                           
REMARK   3   MEAN B VALUE      (OVERALL, A**2) : 38.06                          
REMARK   3   OVERALL ANISOTROPIC B VALUE.                                       
REMARK   3    B11 (A**2) : -0.02000                                             
REMARK   3    B22 (A**2) : 1.03000                                              
REMARK   3    B33 (A**2) : -0.73000                                             
REMARK   3    B12 (A**2) : 0.00000                                              
REMARK   3    B13 (A**2) : -0.24000                                             
REMARK   3    B23 (A**2) : 0.00000                                              
REMARK   3                                                                      
REMARK   3  ESTIMATED OVERALL COORDINATE ERROR.                                 
REMARK   3   ESU BASED ON R VALUE                            (A): 0.243         
REMARK   3   ESU BASED ON FREE R VALUE                       (A): 0.204         
REMARK   3   ESU BASED ON MAXIMUM LIKELIHOOD                 (A): 0.143         
REMARK   3   ESU FOR B VALUES BASED ON MAXIMUM LIKELIHOOD (A**2): 5.604         
REMARK   3                                                                      
REMARK   3 CORRELATION COEFFICIENTS.                                            
REMARK   3   CORRELATION COEFFICIENT FO-FC      : 0.953                         
REMARK   3   CORRELATION COEFFICIENT FO-FC FREE : 0.921                         
REMARK   3                                                                      
REMARK   3  RMS DEVIATIONS FROM IDEAL VALUES        COUNT    RMS    WEIGHT      
REMARK   3   BOND LENGTHS REFINED ATOMS        (A): 10043 ; 0.016 ; 0.019       
REMARK   3   BOND LENGTHS OTHERS               (A):  9221 ; 0.001 ; 0.020       
REMARK   3   BOND ANGLES REFINED ATOMS   (DEGREES): 13693 ; 1.866 ; 1.972       
REMARK   3   BOND ANGLES OTHERS          (DEGREES): 21301 ; 0.912 ; 3.000       
REMARK   3   TORSION ANGLES, PERIOD 1    (DEGREES):  1122 ; 6.904 ; 5.000       
REMARK   3   TORSION ANGLES, PERIOD 2    (DEGREES):   459 ;36.084 ;24.205       
REMARK   3   TORSION ANGLES, PERIOD 3    (DEGREES):  1702 ;17.558 ;15.000       
REMARK   3   TORSION ANGLES, PERIOD 4    (DEGREES):    59 ;16.981 ;15.000       
REMARK   3   CHIRAL-CENTER RESTRAINTS       (A**3):  1462 ; 0.105 ; 0.200       
REMARK   3   GENERAL PLANES REFINED ATOMS      (A): 10830 ; 0.009 ; 0.021       
REMARK   3   GENERAL PLANES OTHERS             (A):  2294 ; 0.001 ; 0.020       
REMARK   3   NON-BONDED CONTACTS REFINED ATOMS (A):  NULL ;  NULL ;  NULL       
REMARK   3   NON-BONDED CONTACTS OTHERS        (A):  NULL ;  NULL ;  NULL       
REMARK   3   NON-BONDED TORSION REFINED ATOMS  (A):  NULL ;  NULL ;  NULL       
REMARK   3   NON-BONDED TORSION OTHERS         (A):  NULL ;  NULL ;  NULL       
REMARK   3   H-BOND (X...Y) REFINED ATOMS      (A):  NULL ;  NULL ;  NULL       
REMARK   3   H-BOND (X...Y) OTHERS             (A):  NULL ;  NULL ;  NULL       
REMARK   3   POTENTIAL METAL-ION REFINED ATOMS (A):  NULL ;  NULL ;  NULL       
REMARK   3   POTENTIAL METAL-ION OTHERS        (A):  NULL ;  NULL ;  NULL       
REMARK   3   SYMMETRY VDW REFINED ATOMS        (A):  NULL ;  NULL ;  NULL       
REMARK   3   SYMMETRY VDW OTHERS               (A):  NULL ;  NULL ;  NULL       
REMARK   3   SYMMETRY H-BOND REFINED ATOMS     (A):  NULL ;  NULL ;  NULL       
REMARK   3   SYMMETRY H-BOND OTHERS            (A):  NULL ;  NULL ;  NULL       
REMARK   3   SYMMETRY METAL-ION REFINED ATOMS  (A):  NULL ;  NULL ;  NULL       
REMARK   3   SYMMETRY METAL-ION OTHERS         (A):  NULL ;  NULL ;  NULL       
REMARK   3                                                                      
REMARK   3  ISOTROPIC THERMAL FACTOR RESTRAINTS.     COUNT   RMS    WEIGHT      
REMARK   3   MAIN-CHAIN BOND REFINED ATOMS  (A**2):  4500 ; 3.282 ; 3.569       
REMARK   3   MAIN-CHAIN BOND OTHER ATOMS    (A**2):  4499 ; 3.280 ; 3.568       
REMARK   3   MAIN-CHAIN ANGLE REFINED ATOMS (A**2):  5618 ; 5.009 ; 5.333       
REMARK   3   MAIN-CHAIN ANGLE OTHER ATOMS   (A**2):  5619 ; 5.009 ; 5.334       
REMARK   3   SIDE-CHAIN BOND REFINED ATOMS  (A**2):  5543 ; 3.908 ; 3.940       
REMARK   3   SIDE-CHAIN BOND OTHER ATOMS    (A**2):  5544 ; 3.908 ; 3.940       
REMARK   3   SIDE-CHAIN ANGLE REFINED ATOMS (A**2):  NULL ;  NULL ;  NULL       
REMARK   3   SIDE-CHAIN ANGLE OTHER ATOMS   (A**2):  8076 ; 6.071 ; 5.736       
REMARK   3   LONG RANGE B REFINED ATOMS     (A**2): 11856 ; 8.581 ;28.733       
REMARK   3   LONG RANGE B OTHER ATOMS       (A**2): 11857 ; 8.580 ;28.736       
REMARK   3                                                                      
REMARK   3 ANISOTROPIC THERMAL FACTOR RESTRAINTS.    COUNT   RMS   WEIGHT       
REMARK   3   RIGID-BOND RESTRAINTS          (A**2):  NULL ;  NULL ;  NULL       
REMARK   3   SPHERICITY; FREE ATOMS         (A**2):  NULL ;  NULL ;  NULL       
REMARK   3   SPHERICITY; BONDED ATOMS       (A**2):  NULL ;  NULL ;  NULL       
REMARK   3                                                                      
REMARK   3  NCS RESTRAINTS STATISTICS                                           
REMARK   3   NUMBER OF DIFFERENT NCS GROUPS : NULL                              
REMARK   3                                                                      
REMARK   3  TLS DETAILS                                                         
REMARK   3   NUMBER OF TLS GROUPS  : NULL                                       
REMARK   3                                                                      
REMARK   3  BULK SOLVENT MODELLING.                                             
REMARK   3   METHOD USED : MASK                                                 
REMARK   3   PARAMETERS FOR MASK CALCULATION                                    
REMARK   3   VDW PROBE RADIUS   : 1.20                                          
REMARK   3   ION PROBE RADIUS   : 0.80                                          
REMARK   3   SHRINKAGE RADIUS   : 0.80                                          
REMARK   3                                                                      
REMARK   3  OTHER REFINEMENT REMARKS: NULL                                      
REMARK   4                                                                      
REMARK   4 4M8O COMPLIES WITH FORMAT V. 3.30, 13-JUL-11                         
REMARK 100                                                                      
REMARK 100 THIS ENTRY HAS BEEN PROCESSED BY RCSB ON 11-SEP-13.                  
REMARK 100 THE RCSB ID CODE IS RCSB081605.                                      
REMARK 200                                                                      
REMARK 200 EXPERIMENTAL DETAILS                                                 
REMARK 200  EXPERIMENT TYPE                : X-RAY DIFFRACTION                  
REMARK 200  DATE OF DATA COLLECTION        : 03-OCT-12                          
REMARK 200  TEMPERATURE           (KELVIN) : 100                                
REMARK 200  PH                             : 7.0                                
REMARK 200  NUMBER OF CRYSTALS USED        : 1                                  
REMARK 200                                                                      
REMARK 200  SYNCHROTRON              (Y/N) : Y                                  
REMARK 200  RADIATION SOURCE               : ESRF                               
REMARK 200  BEAMLINE                       : ID23-2                             
REMARK 200  X-RAY GENERATOR MODEL          : NULL                               
REMARK 200  MONOCHROMATIC OR LAUE    (M/L) : M                                  
REMARK 200  WAVELENGTH OR RANGE        (A) : 0.873                              
REMARK 200  MONOCHROMATOR                  : PT COATED SI MIRRORS               
REMARK 200  OPTICS                         : NULL                               
REMARK 200                                                                      
REMARK 200  DETECTOR TYPE                  : CCD                                
REMARK 200  DETECTOR MANUFACTURER          : MARMOSAIC 225 MM CCD               
REMARK 200  INTENSITY-INTEGRATION SOFTWARE : XDS                                
REMARK 200  DATA SCALING SOFTWARE          : SCALA                              
REMARK 200                                                                      
REMARK 200  NUMBER OF UNIQUE REFLECTIONS   : 69054                              
REMARK 200  RESOLUTION RANGE HIGH      (A) : 2.200                              
REMARK 200  RESOLUTION RANGE LOW       (A) : 47.050                             
REMARK 200  REJECTION CRITERIA  (SIGMA(I)) : NULL                               
REMARK 200                                                                      
REMARK 200 OVERALL.                                                             
REMARK 200  COMPLETENESS FOR RANGE     (%) : 99.9                               
REMARK 200  DATA REDUNDANCY                : NULL                               
REMARK 200  R MERGE                    (I) : NULL                               
REMARK 200  R SYM                      (I) : NULL                               
REMARK 200  <I/SIGMA(I)> FOR THE DATA SET  : NULL                               
REMARK 200                                                                      
REMARK 200 IN THE HIGHEST RESOLUTION SHELL.                                     
REMARK 200  HIGHEST RESOLUTION SHELL, RANGE HIGH (A) : 2.20                     
REMARK 200  HIGHEST RESOLUTION SHELL, RANGE LOW  (A) : 2.32                     
REMARK 200  COMPLETENESS FOR SHELL     (%) : 99.8                               
REMARK 200  DATA REDUNDANCY IN SHELL       : 3.60                               
REMARK 200  R MERGE FOR SHELL          (I) : 0.54800                            
REMARK 200  R SYM FOR SHELL            (I) : NULL                               
REMARK 200  <I/SIGMA(I)> FOR SHELL         : 2.500                              
REMARK 200                                                                      
REMARK 200 DIFFRACTION PROTOCOL: SINGLE WAVELENGTH                              
REMARK 200 METHOD USED TO DETERMINE THE STRUCTURE: MOLECULAR REPLACEMENT        
REMARK 200 SOFTWARE USED: PHASER                                                
REMARK 200 STARTING MODEL: PDB ENTRY 3IAY                                       
REMARK 200                                                                      
REMARK 200 REMARK: NULL                                                         
REMARK 280                                                                      
REMARK 280 CRYSTAL                                                              
REMARK 280 SOLVENT CONTENT, VS   (%): 48.52                                     
REMARK 280 MATTHEWS COEFFICIENT, VM (ANGSTROMS**3/DA): 2.39                     
REMARK 280                                                                      
REMARK 280 CRYSTALLIZATION CONDITIONS: 20% PEG-3350, 50 MM HEPES-NAOH PH 7.0,   
REMARK 280  10 MM MGCL2, 400 MM LIAC, AND 10 MM 2-AMINOETHANESULFONIC ACID      
REMARK 280  (TAURINE) , VAPOR DIFFUSION, HANGING DROP, TEMPERATURE 291K         
REMARK 290                                                                      
REMARK 290 CRYSTALLOGRAPHIC SYMMETRY                                            
REMARK 290 SYMMETRY OPERATORS FOR SPACE GROUP: C 1 2 1                          
REMARK 290                                                                      
REMARK 290      SYMOP   SYMMETRY                                                
REMARK 290     NNNMMM   OPERATOR                                                
REMARK 290       1555   X,Y,Z                                                   
REMARK 290       2555   -X,Y,-Z                                                 
REMARK 290       3555   X+1/2,Y+1/2,Z                                           
REMARK 290       4555   -X+1/2,Y+1/2,-Z                                         
REMARK 290                                                                      
REMARK 290     WHERE NNN -> OPERATOR NUMBER                                     
REMARK 290           MMM -> TRANSLATION VECTOR                                  
REMARK 290                                                                      
REMARK 290 CRYSTALLOGRAPHIC SYMMETRY TRANSFORMATIONS                            
REMARK 290 THE FOLLOWING TRANSFORMATIONS OPERATE ON THE ATOM/HETATM             
REMARK 290 RECORDS IN THIS ENTRY TO PRODUCE CRYSTALLOGRAPHICALLY                
REMARK 290 RELATED MOLECULES.                                                   
REMARK 290   SMTRY1   1  1.000000  0.000000  0.000000        0.00000            
REMARK 290   SMTRY2   1  0.000000  1.000000  0.000000        0.00000            
REMARK 290   SMTRY3   1  0.000000  0.000000  1.000000        0.00000            
REMARK 290   SMTRY1   2 -1.000000  0.000000  0.000000        0.00000            
REMARK 290   SMTRY2   2  0.000000  1.000000  0.000000        0.00000            
REMARK 290   SMTRY3   2  0.000000  0.000000 -1.000000        0.00000            
REMARK 290   SMTRY1   3  1.000000  0.000000  0.000000       74.24750            
REMARK 290   SMTRY2   3  0.000000  1.000000  0.000000       34.45950            
REMARK 290   SMTRY3   3  0.000000  0.000000  1.000000        0.00000            
REMARK 290   SMTRY1   4 -1.000000  0.000000  0.000000       74.24750            
REMARK 290   SMTRY2   4  0.000000  1.000000  0.000000       34.45950            
REMARK 290   SMTRY3   4  0.000000  0.000000 -1.000000        0.00000            
REMARK 290                                                                      
REMARK 290 REMARK: NULL                                                         
REMARK 300                                                                      
REMARK 300 BIOMOLECULE: 1                                                       
REMARK 300 SEE REMARK 350 FOR THE AUTHOR PROVIDED AND/OR PROGRAM                
REMARK 300 GENERATED ASSEMBLY INFORMATION FOR THE STRUCTURE IN                  
REMARK 300 THIS ENTRY. THE REMARK MAY ALSO PROVIDE INFORMATION ON               
REMARK 300 BURIED SURFACE AREA.                                                 
REMARK 350                                                                      
REMARK 350 COORDINATES FOR A COMPLETE MULTIMER REPRESENTING THE KNOWN           
REMARK 350 BIOLOGICALLY SIGNIFICANT OLIGOMERIZATION STATE OF THE                
REMARK 350 MOLECULE CAN BE GENERATED BY APPLYING BIOMT TRANSFORMATIONS          
REMARK 350 GIVEN BELOW.  BOTH NON-CRYSTALLOGRAPHIC AND                          
REMARK 350 CRYSTALLOGRAPHIC OPERATIONS ARE GIVEN.                               
REMARK 350                                                                      
REMARK 350 BIOMOLECULE: 1                                                       
REMARK 350 AUTHOR DETERMINED BIOLOGICAL UNIT: TRIMERIC                          
REMARK 350 SOFTWARE DETERMINED QUATERNARY STRUCTURE: TRIMERIC                   
REMARK 350 SOFTWARE USED: PISA                                                  
REMARK 350 TOTAL BURIED SURFACE AREA: 13170 ANGSTROM**2                         
REMARK 350 SURFACE AREA OF THE COMPLEX: 52260 ANGSTROM**2                       
REMARK 350 CHANGE IN SOLVENT FREE ENERGY: 7.0 KCAL/MOL                          
REMARK 350 APPLY THE FOLLOWING TO CHAINS: A, T, P                               
REMARK 350   BIOMT1   1  1.000000  0.000000  0.000000        0.00000            
REMARK 350   BIOMT2   1  0.000000  1.000000  0.000000        0.00000            
REMARK 350   BIOMT3   1  0.000000  0.000000  1.000000        0.00000            
REMARK 465                                                                      
REMARK 465 MISSING RESIDUES                                                     
REMARK 465 THE FOLLOWING RESIDUES WERE NOT LOCATED IN THE                       
REMARK 465 EXPERIMENT. (M=MODEL NUMBER; RES=RESIDUE NAME; C=CHAIN               
REMARK 465 IDENTIFIER; SSSEQ=SEQUENCE NUMBER; I=INSERTION CODE.)                
REMARK 465                                                                      
REMARK 465   M RES C SSSEQI                                                     
REMARK 465     MET A     1                                                      
REMARK 465     MET A     2                                                      
REMARK 465     PHE A     3                                                      
REMARK 465     GLY A     4                                                      
REMARK 465     LYS A     5                                                      
REMARK 465     LYS A     6                                                      
REMARK 465     LYS A     7                                                      
REMARK 465     ASN A     8                                                      
REMARK 465     ASN A     9                                                      
REMARK 465     GLY A    10                                                      
REMARK 465     GLY A    11                                                      
REMARK 465     SER A    12                                                      
REMARK 465     SER A    13                                                      
REMARK 465     THR A    14                                                      
REMARK 465     ALA A    15                                                      
REMARK 465     ARG A    16                                                      
REMARK 465     TYR A    17                                                      
REMARK 465     SER A    18                                                      
REMARK 465     ALA A    19                                                      
REMARK 465     GLY A    20                                                      
REMARK 465     ASN A    21                                                      
REMARK 465     LYS A    22                                                      
REMARK 465     TYR A    23                                                      
REMARK 465     ASN A    24                                                      
REMARK 465     THR A    25                                                      
REMARK 465     LEU A    26                                                      
REMARK 465     SER A    27                                                      
REMARK 465     ASN A    28                                                      
REMARK 465     ASN A    29                                                      
REMARK 465     TYR A    30                                                      
REMARK 465     THR A    91                                                      
REMARK 465     LEU A    92                                                      
REMARK 465     SER A    93                                                      
REMARK 465     SER A    94                                                      
REMARK 465     GLY A    95                                                      
REMARK 465     SER A    96                                                      
REMARK 465     ASN A    97                                                      
REMARK 465     GLY A    98                                                      
REMARK 465     GLY A    99                                                      
REMARK 465     GLY A   100                                                      
REMARK 465     ASN A   101                                                      
REMARK 465     SER A   102                                                      
REMARK 465     ASN A   103                                                      
REMARK 465     ASP A   104                                                      
REMARK 465     GLY A   105                                                      
REMARK 465     GLU A   106                                                      
REMARK 465     ARG A   107                                                      
REMARK 465     ALA A   226                                                      
REMARK 465     ALA A   227                                                      
REMARK 465     ASN A   228                                                      
REMARK 465     GLY A   229                                                      
REMARK 465     SER A   230                                                      
REMARK 465     GLU A   231                                                      
REMARK 465     ASP A   669                                                      
REMARK 465     PHE A   670                                                      
REMARK 465     ASN A   671                                                      
REMARK 465     ARG A   672                                                      
REMARK 465     PRO A   673                                                      
REMARK 465     GLY A   674                                                      
REMARK 465     LYS A   675                                                      
REMARK 465     LYS A  1187                                                      
REMARK 465     GLU A  1188                                                      
REMARK 465     ASP A  1189                                                      
REMARK 465     LYS A  1190                                                      
REMARK 465     PHE A  1191                                                      
REMARK 465     LYS A  1192                                                      
REMARK 465     GLN A  1193                                                      
REMARK 465     THR A  1194                                                      
REMARK 465     SER A  1195                                                      
REMARK 465     LEU A  1196                                                      
REMARK 465     THR A  1197                                                      
REMARK 465     LYS A  1198                                                      
REMARK 465     PHE A  1199                                                      
REMARK 465     PHE A  1200                                                      
REMARK 465     SER A  1201                                                      
REMARK 465     LYS A  1202                                                      
REMARK 465     THR A  1203                                                      
REMARK 465     LYS A  1204                                                      
REMARK 465     ASN A  1205                                                      
REMARK 465     VAL A  1206                                                      
REMARK 465     PRO A  1207                                                      
REMARK 465     THR A  1208                                                      
REMARK 465     MET A  1209                                                      
REMARK 465     GLY A  1210                                                      
REMARK 465     LYS A  1211                                                      
REMARK 465     ILE A  1212                                                      
REMARK 465     LYS A  1213                                                      
REMARK 465     ASP A  1214                                                      
REMARK 465     ILE A  1215                                                      
REMARK 465     GLU A  1216                                                      
REMARK 465     ASP A  1217                                                      
REMARK 465     LEU A  1218                                                      
REMARK 465     PHE A  1219                                                      
REMARK 465     GLU A  1220                                                      
REMARK 465     PRO A  1221                                                      
REMARK 465     THR A  1222                                                      
REMARK 465     VAL A  1223                                                      
REMARK 465     GLU A  1224                                                      
REMARK 465     GLU A  1225                                                      
REMARK 465     ASP A  1226                                                      
REMARK 465     ASN A  1227                                                      
REMARK 465     ALA A  1228                                                      
REMARK 465     C38 T     1                                                      
REMARK 500                                                                      
REMARK 500 GEOMETRY AND STEREOCHEMISTRY                                         
REMARK 500 SUBTOPIC: CLOSE CONTACTS IN SAME ASYMMETRIC UNIT                     
REMARK 500                                                                      
REMARK 500 THE FOLLOWING ATOMS ARE IN CLOSE CONTACT.                            
REMARK 500                                                                      
REMARK 500  ATM1  RES C  SSEQI   ATM2  RES C  SSEQI           DISTANCE          
REMARK 500   I5   5IU P    10    CL     CL P   101              1.79            
REMARK 500                                                                      
REMARK 500 REMARK: NULL                                                         
REMARK 500                                                                      
REMARK 500 GEOMETRY AND STEREOCHEMISTRY                                         
REMARK 500 SUBTOPIC: COVALENT BOND ANGLES                                       
REMARK 500                                                                      
REMARK 500 THE STEREOCHEMICAL PARAMETERS OF THE FOLLOWING RESIDUES              
REMARK 500 HAVE VALUES WHICH DEVIATE FROM EXPECTED VALUES BY MORE               
REMARK 500 THAN 6*RMSD (M=MODEL NUMBER; RES=RESIDUE NAME; C=CHAIN               
REMARK 500 IDENTIFIER; SSEQ=SEQUENCE NUMBER; I=INSERTION CODE).                 
REMARK 500                                                                      
REMARK 500 STANDARD TABLE:                                                      
REMARK 500 FORMAT: (10X,I3,1X,A3,1X,A1,I4,A1,3(1X,A4,2X),12X,F5.1)              
REMARK 500                                                                      
REMARK 500 EXPECTED VALUES PROTEIN: ENGH AND HUBER, 1999                        
REMARK 500 EXPECTED VALUES NUCLEIC ACID: CLOWNEY ET AL 1996                     
REMARK 500                                                                      
REMARK 500  M RES CSSEQI ATM1   ATM2   ATM3                                     
REMARK 500    TYR A 747   N   -  CA  -  C   ANGL. DEV. =  18.3 DEGREES          
REMARK 500                                                                      
REMARK 500 REMARK: NULL                                                         
REMARK 500                                                                      
REMARK 500 GEOMETRY AND STEREOCHEMISTRY                                         
REMARK 500 SUBTOPIC: TORSION ANGLES                                             
REMARK 500                                                                      
REMARK 500 TORSION ANGLES OUTSIDE THE EXPECTED RAMACHANDRAN REGIONS:            
REMARK 500 (M=MODEL NUMBER; RES=RESIDUE NAME; C=CHAIN IDENTIFIER;               
REMARK 500 SSEQ=SEQUENCE NUMBER; I=INSERTION CODE).                             
REMARK 500                                                                      
REMARK 500 STANDARD TABLE:                                                      
REMARK 500 FORMAT:(10X,I3,1X,A3,1X,A1,I4,A1,4X,F7.2,3X,F7.2)                    
REMARK 500                                                                      
REMARK 500 EXPECTED VALUES: GJ KLEYWEGT AND TA JONES (1996). PHI/PSI-           
REMARK 500 CHOLOGY: RAMACHANDRAN REVISITED. STRUCTURE 4, 1395 - 1400            
REMARK 500                                                                      
REMARK 500  M RES CSSEQI        PSI       PHI                                   
REMARK 500    PHE A  52       76.78   -116.15                                   
REMARK 500    PHE A  64      107.22    -58.74                                   
REMARK 500    ASP A  68       34.35    -99.71                                   
REMARK 500    THR A 109     -163.89   -102.68                                   
REMARK 500    THR A 110     -158.48   -119.59                                   
REMARK 500    ARG A 220      -77.22   -118.74                                   
REMARK 500    ASN A 224      -82.43    -94.88                                   
REMARK 500    LEU A 298        6.52     58.96                                   
REMARK 500    VAL A 305      -31.75   -133.47                                   
REMARK 500    ILE A 327      -51.66   -121.84                                   
REMARK 500    TYR A 343       67.48   -110.78                                   
REMARK 500    PHE A 382      -76.42   -116.05                                   
REMARK 500    SER A 602     -159.50   -127.12                                   
REMARK 500    SER A 643       63.32     36.17                                   
REMARK 500    ALA A 661       59.59   -107.21                                   
REMARK 500    ASP A 664       47.11   -148.85                                   
REMARK 500    CYS A 677      -48.23     72.32                                   
REMARK 500    VAL A 750      -76.54    -77.47                                   
REMARK 500    PRO A 768       38.33    -93.19                                   
REMARK 500    ILE A 798      -20.06   -166.56                                   
REMARK 500    ASP A 802      150.49    -44.96                                   
REMARK 500    ASP A 807      -60.99     88.54                                   
REMARK 500    THR A 876      -61.38     68.26                                   
REMARK 500    ASP A 877       17.15   -142.89                                   
REMARK 500    GLU A 889      -99.45   -120.79                                   
REMARK 500    ASN A 940      109.80   -168.02                                   
REMARK 500    GLU A 991      151.71     73.81                                   
REMARK 500    MET A1036       42.00    -79.61                                   
REMARK 500    LYS A1054     -163.55   -112.08                                   
REMARK 500    ILE A1137      -38.54    -35.36                                   
REMARK 500    ASN A1169       99.31    -26.09                                   
REMARK 500                                                                      
REMARK 500 REMARK: NULL                                                         
REMARK 500                                                                      
REMARK 500 GEOMETRY AND STEREOCHEMISTRY                                         
REMARK 500 SUBTOPIC: CHIRAL CENTERS                                             
REMARK 500                                                                      
REMARK 500 UNEXPECTED CONFIGURATION OF THE FOLLOWING CHIRAL                     
REMARK 500 CENTER(S) USING IMPROPER CA--C--CB--N CHIRALITY                      
REMARK 500 FOR AMINO ACIDS AND C1'--O4'--N1(N9)--C2' FOR                        
REMARK 500 NUCLEIC ACIDS OR EQUIVALENT ANGLE                                    
REMARK 500 M=MODEL NUMBER; RES=RESIDUE NAME; C=CHAIN                            
REMARK 500 IDENTIFIER; SSEQ=SEQUENCE NUMBER; I=INSERTION CODE                   
REMARK 500                                                                      
REMARK 500 STANDARD TABLE:                                                      
REMARK 500 FORMAT: (10X,I3,1X,A3,1X,A1,I4,A1,6X,F5.1,6X,A1,10X,A1,3X,A16)       
REMARK 500                                                                      
REMARK 500  M RES CSSEQI    IMPROPER   EXPECTED   FOUND DETAILS                 
REMARK 500    TYR A 747        21.3      L          L   OUTSIDE RANGE           
REMARK 500                                                                      
REMARK 500 REMARK: NULL                                                         
REMARK 620                                                                      
REMARK 620 METAL COORDINATION                                                   
REMARK 620 (M=MODEL NUMBER; RES=RESIDUE NAME; C=CHAIN IDENTIFIER;               
REMARK 620 SSEQ=SEQUENCE NUMBER; I=INSERTION CODE):                             
REMARK 620                                                                      
REMARK 620 COORDINATION ANGLES FOR:  M RES CSSEQI METAL                         
REMARK 620                              MG A1302  MG                            
REMARK 620 N RES CSSEQI ATOM                                                    
REMARK 620 1 ASP A 640   OD1                                                    
REMARK 620 2 DTP A1301   O1B 172.8                                              
REMARK 620 3 DTP A1301   O3G  88.3  92.1                                        
REMARK 620 4 DTP A1301   O1A  96.5  90.6  97.1                                  
REMARK 620 5 VAL A 641   O    82.5  90.3  92.7 170.1                            
REMARK 620 6 ASP A 877   OD2  89.4  89.5 174.4  88.2  81.9                      
REMARK 620 N                    1     2     3     4     5                       
REMARK 620                                                                      
REMARK 620 COORDINATION ANGLES FOR:  M RES CSSEQI METAL                         
REMARK 620                              ZN A1303  ZN                            
REMARK 620 N RES CSSEQI ATOM                                                    
REMARK 620 1 CYS A 677   SG                                                     
REMARK 620 2 CYS A 668   SG  107.6                                              
REMARK 620 3 CYS A 665   SG  104.3 112.3                                        
REMARK 620 4 CYS A 763   SG  110.4 113.6 108.3                                  
REMARK 620 N                    1     2     3                                   
REMARK 800                                                                      
REMARK 800 SITE                                                                 
REMARK 800 SITE_IDENTIFIER: AC1                                                 
REMARK 800 EVIDENCE_CODE: SOFTWARE                                              
REMARK 800 SITE_DESCRIPTION: BINDING SITE FOR RESIDUE DTP A 1301                
REMARK 800                                                                      
REMARK 800 SITE_IDENTIFIER: AC2                                                 
REMARK 800 EVIDENCE_CODE: SOFTWARE                                              
REMARK 800 SITE_DESCRIPTION: BINDING SITE FOR RESIDUE MG A 1302                 
REMARK 800                                                                      
REMARK 800 SITE_IDENTIFIER: AC3                                                 
REMARK 800 EVIDENCE_CODE: SOFTWARE                                              
REMARK 800 SITE_DESCRIPTION: BINDING SITE FOR RESIDUE ZN A 1303                 
REMARK 800                                                                      
REMARK 800 SITE_IDENTIFIER: AC4                                                 
REMARK 800 EVIDENCE_CODE: SOFTWARE                                              
REMARK 800 SITE_DESCRIPTION: BINDING SITE FOR RESIDUE TAU A 1304                
REMARK 800                                                                      
REMARK 800 SITE_IDENTIFIER: AC5                                                 
REMARK 800 EVIDENCE_CODE: SOFTWARE                                              
REMARK 800 SITE_DESCRIPTION: BINDING SITE FOR RESIDUE TAU A 1305                
REMARK 800                                                                      
REMARK 800 SITE_IDENTIFIER: AC6                                                 
REMARK 800 EVIDENCE_CODE: SOFTWARE                                              
REMARK 800 SITE_DESCRIPTION: BINDING SITE FOR RESIDUE CL P 101                  
REMARK 800                                                                      
REMARK 800 SITE_IDENTIFIER: AC7                                                 
REMARK 800 EVIDENCE_CODE: SOFTWARE                                              
REMARK 800 SITE_DESCRIPTION: BINDING SITE FOR RESIDUE CL P 102                  
DBREF  4M8O A    1  1228  UNP    P21951   DPOE_YEAST       1   1228             
DBREF  4M8O P    1    11  PDB    4M8O     4M8O             1     11             
DBREF  4M8O T    1    16  PDB    4M8O     4M8O             1     16             
SEQADV 4M8O ALA A  290  UNP  P21951    ASP   290 ENGINEERED MUTATION            
SEQADV 4M8O ALA A  292  UNP  P21951    GLU   292 ENGINEERED MUTATION            
SEQRES   1 A 1228  MET MET PHE GLY LYS LYS LYS ASN ASN GLY GLY SER SER          
SEQRES   2 A 1228  THR ALA ARG TYR SER ALA GLY ASN LYS TYR ASN THR LEU          
SEQRES   3 A 1228  SER ASN ASN TYR ALA LEU SER ALA GLN GLN LEU LEU ASN          
SEQRES   4 A 1228  ALA SER LYS ILE ASP ASP ILE ASP SER MET MET GLY PHE          
SEQRES   5 A 1228  GLU ARG TYR VAL PRO PRO GLN TYR ASN GLY ARG PHE ASP          
SEQRES   6 A 1228  ALA LYS ASP ILE ASP GLN ILE PRO GLY ARG VAL GLY TRP          
SEQRES   7 A 1228  LEU THR ASN MET HIS ALA THR LEU VAL SER GLN GLU THR          
SEQRES   8 A 1228  LEU SER SER GLY SER ASN GLY GLY GLY ASN SER ASN ASP          
SEQRES   9 A 1228  GLY GLU ARG VAL THR THR ASN GLN GLY ILE SER GLY VAL          
SEQRES  10 A 1228  ASP PHE TYR PHE LEU ASP GLU GLU GLY GLY SER PHE LYS          
SEQRES  11 A 1228  SER THR VAL VAL TYR ASP PRO TYR PHE PHE ILE ALA CYS          
SEQRES  12 A 1228  ASN ASP GLU SER ARG VAL ASN ASP VAL GLU GLU LEU VAL          
SEQRES  13 A 1228  LYS LYS TYR LEU GLU SER CYS LEU LYS SER LEU GLN ILE          
SEQRES  14 A 1228  ILE ARG LYS GLU ASP LEU THR MET ASP ASN HIS LEU LEU          
SEQRES  15 A 1228  GLY LEU GLN LYS THR LEU ILE LYS LEU SER PHE VAL ASN          
SEQRES  16 A 1228  SER ASN GLN LEU PHE GLU ALA ARG LYS LEU LEU ARG PRO          
SEQRES  17 A 1228  ILE LEU GLN ASP ASN ALA ASN ASN ASN VAL GLN ARG ASN          
SEQRES  18 A 1228  ILE TYR ASN VAL ALA ALA ASN GLY SER GLU LYS VAL ASP          
SEQRES  19 A 1228  ALA LYS HIS LEU ILE GLU ASP ILE ARG GLU TYR ASP VAL          
SEQRES  20 A 1228  PRO TYR HIS VAL ARG VAL SER ILE ASP LYS ASP ILE ARG          
SEQRES  21 A 1228  VAL GLY LYS TRP TYR LYS VAL THR GLN GLN GLY PHE ILE          
SEQRES  22 A 1228  GLU ASP THR ARG LYS ILE ALA PHE ALA ASP PRO VAL VAL          
SEQRES  23 A 1228  MET ALA PHE ALA ILE ALA THR THR LYS PRO PRO LEU LYS          
SEQRES  24 A 1228  PHE PRO ASP SER ALA VAL ASP GLN ILE MET MET ILE SER          
SEQRES  25 A 1228  TYR MET ILE ASP GLY GLU GLY PHE LEU ILE THR ASN ARG          
SEQRES  26 A 1228  GLU ILE ILE SER GLU ASP ILE GLU ASP PHE GLU TYR THR          
SEQRES  27 A 1228  PRO LYS PRO GLU TYR PRO GLY PHE PHE THR ILE PHE ASN          
SEQRES  28 A 1228  GLU ASN ASP GLU VAL ALA LEU LEU GLN ARG PHE PHE GLU          
SEQRES  29 A 1228  HIS ILE ARG ASP VAL ARG PRO THR VAL ILE SER THR PHE          
SEQRES  30 A 1228  ASN GLY ASP PHE PHE ASP TRP PRO PHE ILE HIS ASN ARG          
SEQRES  31 A 1228  SER LYS ILE HIS GLY LEU ASP MET PHE ASP GLU ILE GLY          
SEQRES  32 A 1228  PHE ALA PRO ASP ALA GLU GLY GLU TYR LYS SER SER TYR          
SEQRES  33 A 1228  CYS SER HIS MET ASP CYS PHE ARG TRP VAL LYS ARG ASP          
SEQRES  34 A 1228  SER TYR LEU PRO GLN GLY SER GLN GLY LEU LYS ALA VAL          
SEQRES  35 A 1228  THR GLN SER LYS LEU GLY TYR ASN PRO ILE GLU LEU ASP          
SEQRES  36 A 1228  PRO GLU LEU MET THR PRO TYR ALA PHE GLU LYS PRO GLN          
SEQRES  37 A 1228  HIS LEU SER GLU TYR SER VAL SER ASP ALA VAL ALA THR          
SEQRES  38 A 1228  TYR TYR LEU TYR MET LYS TYR VAL HIS PRO PHE ILE PHE          
SEQRES  39 A 1228  SER LEU CYS THR ILE ILE PRO LEU ASN PRO ASP GLU THR          
SEQRES  40 A 1228  LEU ARG LYS GLY THR GLY THR LEU CYS GLU MET LEU LEU          
SEQRES  41 A 1228  MET VAL GLN ALA TYR GLN HIS ASN ILE LEU LEU PRO ASN          
SEQRES  42 A 1228  LYS HIS THR ASP PRO ILE GLU ARG PHE TYR ASP GLY HIS          
SEQRES  43 A 1228  LEU LEU GLU SER GLU THR TYR VAL GLY GLY HIS VAL GLU          
SEQRES  44 A 1228  SER LEU GLU ALA GLY VAL PHE ARG SER ASP LEU LYS ASN          
SEQRES  45 A 1228  GLU PHE LYS ILE ASP PRO SER ALA ILE ASP GLU LEU LEU          
SEQRES  46 A 1228  GLN GLU LEU PRO GLU ALA LEU LYS PHE SER VAL GLU VAL          
SEQRES  47 A 1228  GLU ASN LYS SER SER VAL ASP LYS VAL THR ASN PHE GLU          
SEQRES  48 A 1228  GLU ILE LYS ASN GLN ILE THR GLN LYS LEU LEU GLU LEU          
SEQRES  49 A 1228  LYS GLU ASN ASN ILE ARG ASN GLU LEU PRO LEU ILE TYR          
SEQRES  50 A 1228  HIS VAL ASP VAL ALA SER MET TYR PRO ASN ILE MET THR          
SEQRES  51 A 1228  THR ASN ARG LEU GLN PRO ASP SER ILE LYS ALA GLU ARG          
SEQRES  52 A 1228  ASP CYS ALA SER CYS ASP PHE ASN ARG PRO GLY LYS THR          
SEQRES  53 A 1228  CYS ALA ARG LYS LEU LYS TRP ALA TRP ARG GLY GLU PHE          
SEQRES  54 A 1228  PHE PRO SER LYS MET ASP GLU TYR ASN MET ILE LYS ARG          
SEQRES  55 A 1228  ALA LEU GLN ASN GLU THR PHE PRO ASN LYS ASN LYS PHE          
SEQRES  56 A 1228  SER LYS LYS LYS VAL LEU THR PHE ASP GLU LEU SER TYR          
SEQRES  57 A 1228  ALA ASP GLN VAL ILE HIS ILE LYS LYS ARG LEU THR GLU          
SEQRES  58 A 1228  TYR SER ARG LYS VAL TYR HIS ARG VAL LYS VAL SER GLU          
SEQRES  59 A 1228  ILE VAL GLU ARG GLU ALA ILE VAL CYS GLN ARG GLU ASN          
SEQRES  60 A 1228  PRO PHE TYR VAL ASP THR VAL LYS SER PHE ARG ASP ARG          
SEQRES  61 A 1228  ARG TYR GLU PHE LYS GLY LEU ALA LYS THR TRP LYS GLY          
SEQRES  62 A 1228  ASN LEU SER LYS ILE ASP PRO SER ASP LYS HIS ALA ARG          
SEQRES  63 A 1228  ASP GLU ALA LYS LYS MET ILE VAL LEU TYR ASP SER LEU          
SEQRES  64 A 1228  GLN LEU ALA HIS LYS VAL ILE LEU ASN SER PHE TYR GLY          
SEQRES  65 A 1228  TYR VAL MET ARG LYS GLY SER ARG TRP TYR SER MET GLU          
SEQRES  66 A 1228  MET ALA GLY ILE THR CYS LEU THR GLY ALA THR ILE ILE          
SEQRES  67 A 1228  GLN MET ALA ARG ALA LEU VAL GLU ARG VAL GLY ARG PRO          
SEQRES  68 A 1228  LEU GLU LEU ASP THR ASP GLY ILE TRP CYS ILE LEU PRO          
SEQRES  69 A 1228  LYS SER PHE PRO GLU THR TYR PHE PHE THR LEU GLU ASN          
SEQRES  70 A 1228  GLY LYS LYS LEU TYR LEU SER TYR PRO CYS SER MET LEU          
SEQRES  71 A 1228  ASN TYR ARG VAL HIS GLN LYS PHE THR ASN HIS GLN TYR          
SEQRES  72 A 1228  GLN GLU LEU LYS ASP PRO LEU ASN TYR ILE TYR GLU THR          
SEQRES  73 A 1228  HIS SER GLU ASN THR ILE PHE PHE GLU VAL ASP GLY PRO          
SEQRES  74 A 1228  TYR LYS ALA MET ILE LEU PRO SER SER LYS GLU GLU GLY          
SEQRES  75 A 1228  LYS GLY ILE LYS LYS ARG TYR ALA VAL PHE ASN GLU ASP          
SEQRES  76 A 1228  GLY SER LEU ALA GLU LEU LYS GLY PHE GLU LEU LYS ARG          
SEQRES  77 A 1228  ARG GLY GLU LEU GLN LEU ILE LYS ASN PHE GLN SER ASP          
SEQRES  78 A 1228  ILE PHE LYS VAL PHE LEU GLU GLY ASP THR LEU GLU GLY          
SEQRES  79 A 1228  CYS TYR SER ALA VAL ALA SER VAL CYS ASN ARG TRP LEU          
SEQRES  80 A 1228  ASP VAL LEU ASP SER HIS GLY LEU MET LEU GLU ASP GLU          
SEQRES  81 A 1228  ASP LEU VAL SER LEU ILE CYS GLU ASN ARG SER MET SER          
SEQRES  82 A 1228  LYS THR LEU LYS GLU TYR GLU GLY GLN LYS SER THR SER          
SEQRES  83 A 1228  ILE THR THR ALA ARG ARG LEU GLY ASP PHE LEU GLY GLU          
SEQRES  84 A 1228  ASP MET VAL LYS ASP LYS GLY LEU GLN CYS LYS TYR ILE          
SEQRES  85 A 1228  ILE SER SER LYS PRO PHE ASN ALA PRO VAL THR GLU ARG          
SEQRES  86 A 1228  ALA ILE PRO VAL ALA ILE PHE SER ALA ASP ILE PRO ILE          
SEQRES  87 A 1228  LYS ARG SER PHE LEU ARG ARG TRP THR LEU ASP PRO SER          
SEQRES  88 A 1228  LEU GLU ASP LEU ASP ILE ARG THR ILE ILE ASP TRP GLY          
SEQRES  89 A 1228  TYR TYR ARG GLU ARG LEU GLY SER ALA ILE GLN LYS ILE          
SEQRES  90 A 1228  ILE THR ILE PRO ALA ALA LEU GLN GLY VAL SER ASN PRO          
SEQRES  91 A 1228  VAL PRO ARG VAL GLU HIS PRO ASP TRP LEU LYS ARG LYS          
SEQRES  92 A 1228  ILE ALA THR LYS GLU ASP LYS PHE LYS GLN THR SER LEU          
SEQRES  93 A 1228  THR LYS PHE PHE SER LYS THR LYS ASN VAL PRO THR MET          
SEQRES  94 A 1228  GLY LYS ILE LYS ASP ILE GLU ASP LEU PHE GLU PRO THR          
SEQRES  95 A 1228  VAL GLU GLU ASP ASN ALA                                      
SEQRES   1 P   11  5IU  DA  DA C38 C38  DG C38  DG 5IU 5IU DOC                  
SEQRES   1 T   16  C38 5IU C38 5IU  DT  DG  DA  DA C38  DG C38  DG  DG          
SEQRES   2 T   16  5IU 5IU  DA                                                  
MODRES 4M8O 5IU P    1   DU  5-IODO-2'-DEOXYURIDINE-5'-MONOPHOSPHATE            
MODRES 4M8O C38 P    4   DC                                                     
MODRES 4M8O C38 P    5   DC                                                     
MODRES 4M8O C38 P    7   DC                                                     
MODRES 4M8O 5IU P    9   DU  5-IODO-2'-DEOXYURIDINE-5'-MONOPHOSPHATE            
MODRES 4M8O 5IU P   10   DU  5-IODO-2'-DEOXYURIDINE-5'-MONOPHOSPHATE            
MODRES 4M8O DOC P   11   DC  2',3'-DIDEOXYCYTIDINE-5'-MONOPHOSPHATE             
MODRES 4M8O 5IU T    2   DU  5-IODO-2'-DEOXYURIDINE-5'-MONOPHOSPHATE            
MODRES 4M8O C38 T    3   DC                                                     
MODRES 4M8O 5IU T    4   DU  5-IODO-2'-DEOXYURIDINE-5'-MONOPHOSPHATE            
MODRES 4M8O C38 T    9   DC                                                     
MODRES 4M8O C38 T   11   DC                                                     
MODRES 4M8O 5IU T   14   DU  5-IODO-2'-DEOXYURIDINE-5'-MONOPHOSPHATE            
MODRES 4M8O 5IU T   15   DU  5-IODO-2'-DEOXYURIDINE-5'-MONOPHOSPHATE            
HET    5IU  P   1      20                                                       
HET    C38  P   4      20                                                       
HET    C38  P   5      20                                                       
HET    C38  P   7      20                                                       
HET    5IU  P   9      20                                                       
HET    5IU  P  10      20                                                       
HET    DOC  P  11      18                                                       
HET    5IU  T   2      20                                                       
HET    C38  T   3      20                                                       
HET    5IU  T   4      40                                                       
HET    C38  T   9      20                                                       
HET    C38  T  11      20                                                       
HET    5IU  T  14      20                                                       
HET    5IU  T  15      20                                                       
HET    DTP  A1301      30                                                       
HET     MG  A1302       1                                                       
HET     ZN  A1303       1                                                       
HET    TAU  A1304       7                                                       
HET    TAU  A1305       7                                                       
HET     CL  P 101       1                                                       
HET     CL  P 102       1                                                       
HETNAM     5IU 5-IODO-2'-DEOXYURIDINE-5'-MONOPHOSPHATE                          
HETNAM     C38 5-IODO-2'-DEOXY-CYTIDINE-5'-MONOPHOSPHATE                        
HETNAM     DOC 2',3'-DIDEOXYCYTIDINE-5'-MONOPHOSPHATE                           
HETNAM     DTP 2'-DEOXYADENOSINE 5'-TRIPHOSPHATE                                
HETNAM      MG MAGNESIUM ION                                                    
HETNAM      ZN ZINC ION                                                         
HETNAM     TAU 2-AMINOETHANESULFONIC ACID                                       
HETNAM      CL CHLORIDE ION                                                     
FORMUL   2  5IU    7(C9 H12 I N2 O8 P)                                          
FORMUL   2  C38    6(C9 H13 I N3 O7 P)                                          
FORMUL   2  DOC    C9 H14 N3 O6 P                                               
FORMUL   4  DTP    C10 H16 N5 O12 P3                                            
FORMUL   5   MG    MG 2+                                                        
FORMUL   6   ZN    ZN 2+                                                        
FORMUL   7  TAU    2(C2 H7 N O3 S)                                              
FORMUL   9   CL    2(CL 1-)                                                     
FORMUL  11  HOH   *459(H2 O)                                                    
HELIX    1   1 LEU A   32  MET A   50  1                                  19    
HELIX    2   2 ASP A  145  SER A  147  5                                   3    
HELIX    3   3 ARG A  148  LEU A  160  1                                  13    
HELIX    4   4 ASN A  179  GLY A  183  5                                   5    
HELIX    5   5 ASN A  195  ASN A  216  1                                  22    
HELIX    6   6 ASP A  234  HIS A  237  5                                   4    
HELIX    7   7 PRO A  248  ASP A  258  1                                  11    
HELIX    8   8 ASP A  354  ARG A  370  1                                  17    
HELIX    9   9 PHE A  382  HIS A  394  1                                  13    
HELIX   10  10 ASP A  397  GLY A  403  1                                   7    
HELIX   11  11 CYS A  422  SER A  430  1                                   9    
HELIX   12  12 PRO A  433  GLN A  437  5                                   5    
HELIX   13  13 GLY A  438  GLY A  448  1                                  11    
HELIX   14  14 ASP A  455  GLU A  457  5                                   3    
HELIX   15  15 LEU A  458  LYS A  466  1                                   9    
HELIX   16  16 LYS A  466  TYR A  488  1                                  23    
HELIX   17  17 TYR A  488  THR A  498  1                                  11    
HELIX   18  18 ASN A  503  LYS A  510  1                                   8    
HELIX   19  19 GLY A  511  HIS A  527  1                                  17    
HELIX   20  20 ASP A  577  VAL A  598  1                                  22    
HELIX   21  21 SER A  603  VAL A  607  5                                   5    
HELIX   22  22 ASN A  609  ASN A  627  1                                  19    
HELIX   23  23 SER A  643  ARG A  653  1                                  11    
HELIX   24  24 GLN A  655  ASP A  657  5                                   3    
HELIX   25  25 LYS A  693  ASN A  706  1                                  14    
HELIX   26  26 ASP A  724  LEU A  726  5                                   3    
HELIX   27  27 SER A  727  HIS A  748  1                                  22    
HELIX   28  28 PRO A  768  ILE A  798  1                                  31    
HELIX   29  29 ASP A  807  TYR A  833  1                                  27    
HELIX   30  30 VAL A  834  ARG A  836  5                                   3    
HELIX   31  31 SER A  843  GLY A  869  1                                  27    
HELIX   32  32 TYR A  905  THR A  919  1                                  15    
HELIX   33  33 GLN A  993  PHE A 1003  1                                  11    
HELIX   34  34 LYS A 1004  GLU A 1008  5                                   5    
HELIX   35  35 THR A 1011  SER A 1032  1                                  22    
HELIX   36  36 GLU A 1038  CYS A 1047  1                                  10    
HELIX   37  37 THR A 1055  GLU A 1060  5                                   6    
HELIX   38  38 SER A 1064  GLY A 1078  1                                  15    
HELIX   39  39 GLU A 1079  LYS A 1083  5                                   5    
HELIX   40  40 PRO A 1101  GLU A 1104  5                                   4    
HELIX   41  41 ALA A 1110  ALA A 1114  5                                   5    
HELIX   42  42 ASP A 1115  LEU A 1128  1                                  14    
HELIX   43  43 ASP A 1136  ILE A 1141  1                                   6    
HELIX   44  44 ASP A 1142  ILE A 1158  1                                  17    
HELIX   45  45 ILE A 1158  GLN A 1165  1                                   8    
HELIX   46  46 PRO A 1177  ILE A 1184  1                                   8    
SHEET    1   A 5 SER A 128  VAL A 134  0                                        
SHEET    2   A 5 ILE A 114  ASP A 123 -1  N  PHE A 121   O  PHE A 129           
SHEET    3   A 5 ARG A  75  VAL A  87 -1  N  THR A  80   O  TYR A 120           
SHEET    4   A 5 TRP A 264  THR A 268 -1  O  VAL A 267   N  ARG A  75           
SHEET    5   A 5 GLY A 271  GLU A 274 -1  O  ILE A 273   N  LYS A 266           
SHEET    1   B 4 SER A 166  LYS A 172  0                                        
SHEET    2   B 4 LYS A 186  SER A 192 -1  O  LEU A 188   N  ILE A 170           
SHEET    3   B 4 TYR A 138  CYS A 143 -1  N  PHE A 139   O  LEU A 191           
SHEET    4   B 4 ILE A 239  ARG A 243 -1  O  ASP A 241   N  ALA A 142           
SHEET    1   C 7 PHE A 335  GLU A 336  0                                        
SHEET    2   C 7 PHE A 346  GLU A 352 -1  O  PHE A 347   N  PHE A 335           
SHEET    3   C 7 GLU A 318  ASN A 324  1  N  LEU A 321   O  PHE A 350           
SHEET    4   C 7 ILE A 308  ILE A 315 -1  N  ILE A 311   O  ILE A 322           
SHEET    5   C 7 VAL A 286  THR A 293 -1  N  ALA A 292   O  MET A 309           
SHEET    6   C 7 VAL A 373  THR A 376  1  O  VAL A 373   N  MET A 287           
SHEET    7   C 7 SER A 418  ASP A 421  1  O  SER A 418   N  ILE A 374           
SHEET    1   D 2 ALA A 405  PRO A 406  0                                        
SHEET    2   D 2 TYR A 412  LYS A 413 -1  O  LYS A 413   N  ALA A 405           
SHEET    1   E 5 PHE A 542  TYR A 543  0                                        
SHEET    2   E 5 HIS A 546  TYR A 553 -1  O  HIS A 546   N  TYR A 543           
SHEET    3   E 5 ALA A 678  PHE A 689 -1  O  GLU A 688   N  GLU A 549           
SHEET    4   E 5 VAL A 752  CYS A 763 -1  O  ARG A 758   N  TRP A 683           
SHEET    5   E 5 ILE A 659  LYS A 660 -1  N  LYS A 660   O  ILE A 761           
SHEET    1   F 5 VAL A 558  SER A 560  0                                        
SHEET    2   F 5 ARG A 870  ASP A 875 -1  O  LEU A 874   N  GLU A 559           
SHEET    3   F 5 GLY A 878  PRO A 884 -1  O  ILE A 882   N  ARG A 870           
SHEET    4   F 5 PRO A 634  VAL A 641 -1  N  VAL A 639   O  ILE A 879           
SHEET    5   F 5 PHE A 944  TYR A 950 -1  O  GLU A 945   N  ASP A 640           
SHEET    1   G 4 GLY A 564  ARG A 567  0                                        
SHEET    2   G 4 ALA A 952  LEU A 955 -1  O  LEU A 955   N  GLY A 564           
SHEET    3   G 4 TYR A 969  PHE A 972 -1  O  ALA A 970   N  ILE A 954           
SHEET    4   G 4 LEU A 978  LYS A 982 -1  O  GLU A 980   N  VAL A 971           
SHEET    1   H 2 ASN A 572  LYS A 575  0                                        
SHEET    2   H 2 ILE A 629  GLU A 632 -1  O  GLU A 632   N  ASN A 572           
SHEET    1   I 2 THR A 708  PRO A 710  0                                        
SHEET    2   I 2 VAL A 720  THR A 722 -1  O  LEU A 721   N  PHE A 709           
SHEET    1   J 2 THR A 890  THR A 894  0                                        
SHEET    2   J 2 LYS A 900  SER A 904 -1  O  LEU A 903   N  TYR A 891           
SHEET    1   K 2 ASN A 920  ASP A 928  0                                        
SHEET    2   K 2 ILE A 933  GLU A 939 -1  O  GLU A 939   N  ASN A 920           
SHEET    1   L 4 GLU A 991  LEU A 992  0                                        
SHEET    2   L 4 GLU A1048  SER A1051 -1  O  ASN A1049   N  GLU A 991           
SHEET    3   L 4 GLN A1088  ILE A1093 -1  O  TYR A1091   N  GLU A1048           
SHEET    4   L 4 ALA A1106  PRO A1108 -1  O  ILE A1107   N  ILE A1092           
LINK         O3' 5IU P   1                 P    DA P   2     1555   1555  1.61  
LINK         O3'  DA P   3                 P   C38 P   4     1555   1555  1.60  
LINK         O3'  DG P   6                 P   C38 P   7     1555   1555  1.57  
LINK         O3'  DG P   8                 P   5IU P   9     1555   1555  1.55  
LINK         O3' 5IU P   9                 P   5IU P  10     1555   1555  1.60  
LINK         O3' 5IU P  10                 P   DOC P  11     1555   1555  1.53  
LINK         O3' 5IU T   2                 P   C38 T   3     1555   1555  1.62  
LINK         O3'A5IU T   4                 P    DT T   5     1555   1555  1.59  
LINK         O3'B5IU T   4                 P    DT T   5     1555   1555  1.57  
LINK         O3'  DA T   8                 P   C38 T   9     1555   1555  1.64  
LINK         O3'  DG T  10                 P   C38 T  11     1555   1555  1.64  
LINK         O3'  DG T  13                 P   5IU T  14     1555   1555  1.62  
LINK         O3' 5IU T  14                 P   5IU T  15     1555   1555  1.63  
LINK         O3' 5IU T  15                 P    DA T  16     1555   1555  1.60  
LINK         OD1 ASP A 640                MG    MG A1302     1555   1555  1.93  
LINK         O1B DTP A1301                MG    MG A1302     1555   1555  2.01  
LINK         O3G DTP A1301                MG    MG A1302     1555   1555  2.04  
LINK         O1A DTP A1301                MG    MG A1302     1555   1555  2.08  
LINK         O   VAL A 641                MG    MG A1302     1555   1555  2.16  
LINK         SG  CYS A 677                ZN    ZN A1303     1555   1555  2.22  
LINK         SG  CYS A 668                ZN    ZN A1303     1555   1555  2.30  
LINK         OD2 ASP A 877                MG    MG A1302     1555   1555  2.30  
LINK         SG  CYS A 665                ZN    ZN A1303     1555   1555  2.32  
LINK         SG  CYS A 763                ZN    ZN A1303     1555   1555  2.42  
LINK         O3' C38 P   4                 P   C38 P   5     1555   1555  1.61  
LINK         O3' C38 P   5                 P    DG P   6     1555   1555  1.57  
LINK         O3' C38 P   7                 P    DG P   8     1555   1555  1.61  
LINK         O3' C38 T   3                 P  A5IU T   4     1555   1555  1.61  
LINK         O3' C38 T   9                 P    DG T  10     1555   1555  1.60  
LINK         O3' C38 T  11                 P    DG T  12     1555   1555  1.64  
LINK         O3' C38 T   3                 P  B5IU T   4     1555   1555  1.64  
CISPEP   1 ARG A  663    ASP A  664          0         0.10                     
CISPEP   2 ALA A  666    SER A  667          0         2.46                     
CISPEP   3 TYR A  747    HIS A  748          0        17.33                     
CISPEP   4 ASP A  802    LYS A  803          0        -0.07                     
CISPEP   5 ARG A  806    ASP A  807          0       -25.20                     
CISPEP   6 GLY A  948    PRO A  949          0         3.74                     
CISPEP   7 LYS A 1096    PRO A 1097          0        -0.32                     
SITE     1 AC1 19 ASP A 640  VAL A 641  ALA A 642  SER A 643                    
SITE     2 AC1 19 MET A 644  TYR A 645  ARG A 781  LYS A 785                    
SITE     3 AC1 19 LYS A 824  ASN A 828  ASP A 877   MG A1302                    
SITE     4 AC1 19 HOH A1430  HOH A1432  HOH A1655  HOH A1742                    
SITE     5 AC1 19 DOC P  11   DT T   5   DG T   6                               
SITE     1 AC2  4 ASP A 640  VAL A 641  ASP A 877  DTP A1301                    
SITE     1 AC3  4 CYS A 665  CYS A 668  CYS A 677  CYS A 763                    
SITE     1 AC4  4 LYS A 427  ARG A 428  HOH A1741  HOH A1799                    
SITE     1 AC5  6 ALA A 979  GLU A 980  LEU A 981  LYS A 982                    
SITE     2 AC5  6 LYS A 987  HOH A1754                                          
SITE     1 AC6  2 5IU P  10  HOH P 204                                          
SITE     1 AC7  1 5IU P   9                                                     
CRYST1  148.495   68.919  149.852  90.00 109.50  90.00 C 1 2 1       4          
ORIGX1      1.000000  0.000000  0.000000        0.00000                         
ORIGX2      0.000000  1.000000  0.000000        0.00000                         
ORIGX3      0.000000  0.000000  1.000000        0.00000                         
SCALE1      0.006734  0.000000  0.002385        0.00000                         
SCALE2      0.000000  0.014510  0.000000        0.00000                         
SCALE3      0.000000  0.000000  0.007079        0.00000                         
ATOM      1  N   ALA A  31      39.325  77.405   8.222  1.00 78.02           N  
ATOM      2  CA  ALA A  31      40.280  77.478   9.377  1.00 79.73           C  
ATOM      3  C   ALA A  31      40.109  76.274  10.343  1.00 80.32           C  
ATOM      4  O   ALA A  31      41.033  75.474  10.507  1.00 78.74           O  
ATOM      5  CB  ALA A  31      40.125  78.818  10.103  1.00 77.63           C  
ATOM      6  N   LEU A  32      38.926  76.156  10.958  1.00 79.49           N  
ATOM      7  CA  LEU A  32      38.532  74.996  11.807  1.00 72.78           C  
ATOM      8  C   LEU A  32      37.952  73.863  10.935  1.00 64.53           C  
ATOM      9  O   LEU A  32      38.017  72.678  11.274  1.00 58.11           O  
ATOM     10  CB  LEU A  32      37.517  75.454  12.881  1.00 72.37           C  
ATOM     11  CG  LEU A  32      36.495  74.483  13.489  1.00 71.66           C  
ATOM     12  CD1 LEU A  32      37.169  73.409  14.327  1.00 72.22           C  
ATOM     13  CD2 LEU A  32      35.471  75.245  14.321  1.00 70.99           C  
ATOM     14  N   SER A  33      37.369  74.274   9.812  1.00 66.76           N  
ATOM     15  CA  SER A  33      37.078  73.410   8.679  1.00 65.85           C  
ATOM     16  C   SER A  33      38.232  72.420   8.435  1.00 66.15           C  
ATOM     17  O   SER A  33      38.040  71.200   8.523  1.00 63.12           O  
ATOM     18  CB  SER A  33      36.822  74.273   7.434  1.00 70.22           C  
ATOM     19  OG  SER A  33      36.186  73.546   6.395  1.00 76.34           O  
ATOM     20  N   ALA A  34      39.438  72.935   8.193  1.00 63.03           N  
ATOM     21  CA  ALA A  34      40.567  72.076   7.810  1.00 59.22           C  
ATOM     22  C   ALA A  34      41.041  71.082   8.911  1.00 52.99           C  
ATOM     23  O   ALA A  34      41.605  70.057   8.590  1.00 49.55           O  
ATOM     24  CB  ALA A  34      41.723  72.916   7.288  1.00 58.80           C  
ATOM     25  N   GLN A  35      40.779  71.387  10.179  1.00 51.07           N  
ATOM     26  CA  GLN A  35      41.067  70.499  11.312  1.00 48.68           C  
ATOM     27  C   GLN A  35      40.006  69.394  11.458  1.00 52.32           C  
ATOM     28  O   GLN A  35      40.323  68.229  11.739  1.00 54.18           O  
ATOM     29  CB  GLN A  35      41.104  71.339  12.587  1.00 52.44           C  
ATOM     30  CG  GLN A  35      41.075  70.562  13.898  1.00 58.35           C  
ATOM     31  CD  GLN A  35      42.424  69.951  14.237  1.00 62.60           C  
ATOM     32  OE1 GLN A  35      43.457  70.656  14.251  1.00 69.07           O  
ATOM     33  NE2 GLN A  35      42.434  68.641  14.521  1.00 51.37           N  
ATOM     34  N   GLN A  36      38.735  69.753  11.286  1.00 52.94           N  
ATOM     35  CA  GLN A  36      37.680  68.730  11.250  1.00 50.33           C  
ATOM     36  C   GLN A  36      37.891  67.764  10.087  1.00 46.75           C  
ATOM     37  O   GLN A  36      37.554  66.596  10.201  1.00 45.92           O  
ATOM     38  CB  GLN A  36      36.293  69.355  11.176  1.00 51.56           C  
ATOM     39  CG  GLN A  36      35.798  69.977  12.486  1.00 53.46           C  
ATOM     40  CD  GLN A  36      34.679  70.994  12.274  1.00 56.26           C  
ATOM     41  OE1 GLN A  36      34.183  71.177  11.163  1.00 63.08           O  
ATOM     42  NE2 GLN A  36      34.290  71.671  13.335  1.00 57.06           N  
ATOM     43  N   LEU A  37      38.475  68.241   8.987  1.00 46.69           N  
ATOM     44  CA  LEU A  37      38.803  67.363   7.861  1.00 47.48           C  
ATOM     45  C   LEU A  37      39.929  66.384   8.217  1.00 45.94           C  
ATOM     46  O   LEU A  37      39.987  65.267   7.699  1.00 45.85           O  
ATOM     47  CB  LEU A  37      39.182  68.166   6.613  1.00 46.97           C  
ATOM     48  CG  LEU A  37      38.080  68.595   5.638  1.00 51.84           C  
ATOM     49  CD1 LEU A  37      38.661  69.660   4.697  1.00 53.85           C  
ATOM     50  CD2 LEU A  37      37.442  67.451   4.829  1.00 49.77           C  
ATOM     51  N   LEU A  38      40.828  66.804   9.096  1.00 51.33           N  
ATOM     52  CA  LEU A  38      41.904  65.928   9.547  1.00 54.71           C  
ATOM     53  C   LEU A  38      41.345  64.829  10.446  1.00 51.61           C  
ATOM     54  O   LEU A  38      41.744  63.679  10.332  1.00 46.43           O  
ATOM     55  CB  LEU A  38      43.020  66.718  10.280  1.00 61.15           C  
ATOM     56  CG  LEU A  38      44.412  66.747   9.608  1.00 66.76           C  
ATOM     57  CD1 LEU A  38      44.751  68.111   9.001  1.00 62.49           C  
ATOM     58  CD2 LEU A  38      45.495  66.306  10.596  1.00 70.91           C  
ATOM     59  N   ASN A  39      40.424  65.184  11.340  1.00 48.89           N  
ATOM     60  CA  ASN A  39      39.797  64.180  12.196  1.00 46.44           C  
ATOM     61  C   ASN A  39      39.012  63.150  11.401  1.00 39.76           C  
ATOM     62  O   ASN A  39      39.073  61.972  11.713  1.00 38.26           O  
ATOM     63  CB  ASN A  39      38.912  64.828  13.260  1.00 51.91           C  
ATOM     64  CG  ASN A  39      39.725  65.418  14.396  1.00 58.25           C  
ATOM     65  OD1 ASN A  39      40.101  64.725  15.350  1.00 63.75           O  
ATOM     66  ND2 ASN A  39      40.017  66.703  14.292  1.00 63.05           N  
ATOM     67  N   ALA A  40      38.294  63.604  10.377  1.00 36.56           N  
ATOM     68  CA  ALA A  40      37.545  62.733   9.457  1.00 34.01           C  
ATOM     69  C   ALA A  40      38.419  61.695   8.768  1.00 37.69           C  
ATOM     70  O   ALA A  40      38.055  60.483   8.597  1.00 37.05           O  
ATOM     71  CB  ALA A  40      36.895  63.605   8.404  1.00 33.94           C  
ATOM     72  N   SER A  41      39.585  62.183   8.359  1.00 35.68           N  
ATOM     73  CA  SER A  41      40.519  61.396   7.603  1.00 38.19           C  
ATOM     74  C   SER A  41      41.155  60.354   8.538  1.00 35.96           C  
ATOM     75  O   SER A  41      41.322  59.193   8.144  1.00 31.17           O  
ATOM     76  CB  SER A  41      41.542  62.329   6.909  1.00 43.02           C  
ATOM     77  OG  SER A  41      42.834  61.787   6.965  1.00 44.05           O  
ATOM     78  N   LYS A  42      41.431  60.738   9.788  1.00 34.37           N  
ATOM     79  CA  LYS A  42      41.793  59.757  10.825  1.00 35.82           C  
ATOM     80  C   LYS A  42      40.690  58.721  11.076  1.00 36.21           C  
ATOM     81  O   LYS A  42      40.961  57.546  11.272  1.00 34.05           O  
ATOM     82  CB  LYS A  42      42.104  60.462  12.167  1.00 46.80           C  
ATOM     83  CG  LYS A  42      43.406  61.263  12.187  1.00 55.66           C  
ATOM     84  CD  LYS A  42      44.027  61.363  13.591  1.00 64.21           C  
ATOM     85  CE  LYS A  42      43.745  62.688  14.298  1.00 66.14           C  
ATOM     86  NZ  LYS A  42      44.739  63.737  13.923  1.00 67.87           N  
ATOM     87  N   ILE A  43      39.433  59.167  11.119  1.00 33.90           N  
ATOM     88  CA  ILE A  43      38.308  58.231  11.278  1.00 33.17           C  
ATOM     89  C   ILE A  43      38.184  57.311  10.079  1.00 28.04           C  
ATOM     90  O   ILE A  43      37.950  56.122  10.233  1.00 28.95           O  
ATOM     91  CB  ILE A  43      36.967  58.975  11.518  1.00 32.97           C  
ATOM     92  CG1 ILE A  43      36.922  59.517  12.946  1.00 32.09           C  
ATOM     93  CG2 ILE A  43      35.800  58.046  11.232  1.00 31.27           C  
ATOM     94  CD1 ILE A  43      36.066  60.761  13.078  1.00 33.90           C  
ATOM     95  N   ASP A  44      38.398  57.840   8.882  1.00 31.44           N  
ATOM     96  CA  ASP A  44      38.434  56.984   7.670  1.00 29.61           C  
ATOM     97  C   ASP A  44      39.457  55.864   7.762  1.00 29.35           C  
ATOM     98  O   ASP A  44      39.174  54.697   7.412  1.00 26.74           O  
ATOM     99  CB  ASP A  44      38.597  57.816   6.401  1.00 31.65           C  
ATOM    100  CG  ASP A  44      37.345  58.649   6.103  1.00 34.92           C  
ATOM    101  OD1 ASP A  44      36.254  58.334   6.684  1.00 36.43           O  
ATOM    102  OD2 ASP A  44      37.424  59.601   5.289  1.00 37.29           O  
ATOM    103  N   ASP A  45      40.615  56.167   8.320  1.00 31.35           N  
ATOM    104  CA  ASP A  45      41.667  55.124   8.468  1.00 33.43           C  
ATOM    105  C   ASP A  45      41.295  54.041   9.480  1.00 31.77           C  
ATOM    106  O   ASP A  45      41.476  52.822   9.233  1.00 26.84           O  
ATOM    107  CB  ASP A  45      42.983  55.787   8.862  1.00 34.66           C  
ATOM    108  CG  ASP A  45      43.482  56.773   7.789  1.00 38.92           C  
ATOM    109  OD1 ASP A  45      43.094  56.643   6.592  1.00 41.91           O  
ATOM    110  OD2 ASP A  45      44.276  57.690   8.132  1.00 46.09           O  
ATOM    111  N   ILE A  46      40.775  54.471  10.631  1.00 33.43           N  
ATOM    112  CA  ILE A  46      40.217  53.507  11.615  1.00 32.05           C  
ATOM    113  C   ILE A  46      39.143  52.599  10.937  1.00 25.69           C  
ATOM    114  O   ILE A  46      39.146  51.399  11.048  1.00 24.87           O  
ATOM    115  CB  ILE A  46      39.591  54.268  12.800  1.00 33.02           C  
ATOM    116  CG1 ILE A  46      40.676  54.967  13.626  1.00 37.03           C  
ATOM    117  CG2 ILE A  46      38.694  53.337  13.633  1.00 33.13           C  
ATOM    118  CD1 ILE A  46      41.894  54.106  13.939  1.00 38.64           C  
ATOM    119  N   ASP A  47      38.227  53.219  10.230  1.00 27.26           N  
ATOM    120  CA  ASP A  47      37.145  52.507   9.586  1.00 29.11           C  
ATOM    121  C   ASP A  47      37.650  51.511   8.567  1.00 29.67           C  
ATOM    122  O   ASP A  47      37.169  50.388   8.581  1.00 32.34           O  
ATOM    123  CB  ASP A  47      36.188  53.506   8.912  1.00 31.24           C  
ATOM    124  CG  ASP A  47      35.303  54.238   9.904  1.00 32.51           C  
ATOM    125  OD1 ASP A  47      35.143  53.746  11.038  1.00 41.70           O  
ATOM    126  OD2 ASP A  47      34.732  55.296   9.546  1.00 30.86           O  
ATOM    127  N   SER A  48      38.635  51.855   7.722  1.00 30.89           N  
ATOM    128  CA  SER A  48      39.124  50.845   6.725  1.00 33.96           C  
ATOM    129  C   SER A  48      39.844  49.741   7.428  1.00 31.38           C  
ATOM    130  O   SER A  48      39.689  48.571   7.083  1.00 37.98           O  
ATOM    131  CB  SER A  48      40.036  51.436   5.626  1.00 36.36           C  
ATOM    132  OG  SER A  48      40.060  52.856   5.662  1.00 40.99           O  
ATOM    133  N   MET A  49      40.607  50.063   8.461  1.00 33.79           N  
ATOM    134  CA  MET A  49      41.223  48.957   9.255  1.00 37.69           C  
ATOM    135  C   MET A  49      40.188  47.974   9.864  1.00 35.25           C  
ATOM    136  O   MET A  49      40.439  46.761  10.000  1.00 32.60           O  
ATOM    137  CB  MET A  49      42.142  49.520  10.350  1.00 40.28           C  
ATOM    138  CG  MET A  49      42.550  48.510  11.402  1.00 42.56           C  
ATOM    139  SD  MET A  49      43.465  49.312  12.735  1.00 53.80           S  
ATOM    140  CE  MET A  49      42.238  50.236  13.647  1.00 50.50           C  
ATOM    141  N   MET A  50      39.018  48.496  10.238  1.00 32.66           N  
ATOM    142  CA  MET A  50      37.983  47.641  10.822  1.00 29.40           C  
ATOM    143  C   MET A  50      36.955  47.143   9.831  1.00 29.75           C  
ATOM    144  O   MET A  50      35.926  46.566  10.251  1.00 28.33           O  
ATOM    145  CB  MET A  50      37.281  48.368  11.978  1.00 29.98           C  
ATOM    146  CG  MET A  50      38.250  48.871  13.039  1.00 29.02           C  
ATOM    147  SD  MET A  50      39.029  47.477  13.798  1.00 32.12           S  
ATOM    148  CE  MET A  50      37.798  46.702  14.828  1.00 34.25           C  
ATOM    149  N   GLY A  51      37.206  47.343   8.531  1.00 27.06           N  
ATOM    150  CA  GLY A  51      36.363  46.699   7.505  1.00 25.87           C  
ATOM    151  C   GLY A  51      35.288  47.582   6.910  1.00 26.54           C  
ATOM    152  O   GLY A  51      34.370  47.063   6.262  1.00 32.44           O  
ATOM    153  N   PHE A  52      35.375  48.882   7.121  1.00 28.04           N  
ATOM    154  CA  PHE A  52      34.439  49.826   6.536  1.00 28.74           C  
ATOM    155  C   PHE A  52      35.084  50.791   5.567  1.00 31.60           C  
ATOM    156  O   PHE A  52      35.268  51.916   5.880  1.00 34.45           O  
ATOM    157  CB  PHE A  52      33.654  50.601   7.606  1.00 27.46           C  
ATOM    158  CG  PHE A  52      32.671  49.774   8.361  1.00 26.91           C  
ATOM    159  CD1 PHE A  52      33.071  49.075   9.450  1.00 28.48           C  
ATOM    160  CD2 PHE A  52      31.341  49.703   7.974  1.00 26.02           C  
ATOM    161  CE1 PHE A  52      32.188  48.308  10.156  1.00 29.21           C  
ATOM    162  CE2 PHE A  52      30.457  48.929   8.663  1.00 24.28           C  
ATOM    163  CZ  PHE A  52      30.878  48.225   9.755  1.00 28.47           C  
ATOM    164  N   GLU A  53      35.381  50.337   4.370  1.00 31.13           N  
ATOM    165  CA  GLU A  53      35.833  51.232   3.294  1.00 36.97           C  
ATOM    166  C   GLU A  53      34.651  51.963   2.736  1.00 34.83           C  
ATOM    167  O   GLU A  53      33.569  51.430   2.703  1.00 32.83           O  
ATOM    168  CB  GLU A  53      36.440  50.449   2.110  1.00 43.00           C  
ATOM    169  CG  GLU A  53      37.687  49.636   2.454  1.00 44.90           C  
ATOM    170  CD  GLU A  53      38.962  50.467   2.497  1.00 53.68           C  
ATOM    171  OE1 GLU A  53      38.908  51.731   2.315  1.00 56.66           O  
ATOM    172  OE2 GLU A  53      40.029  49.836   2.719  1.00 59.86           O  
ATOM    173  N   ARG A  54      34.894  53.178   2.264  1.00 35.30           N  
ATOM    174  CA  ARG A  54      33.895  53.993   1.632  1.00 37.46           C  
ATOM    175  C   ARG A  54      33.548  53.399   0.270  1.00 37.72           C  
ATOM    176  O   ARG A  54      34.417  53.234  -0.564  1.00 40.98           O  
ATOM    177  CB  ARG A  54      34.407  55.431   1.501  1.00 36.69           C  
ATOM    178  CG  ARG A  54      33.369  56.347   0.882  1.00 40.17           C  
ATOM    179  CD  ARG A  54      33.672  57.834   1.043  1.00 41.99           C  
ATOM    180  NE  ARG A  54      33.345  58.347   2.385  1.00 46.09           N  
ATOM    181  CZ  ARG A  54      34.237  58.667   3.329  1.00 48.59           C  
ATOM    182  NH1 ARG A  54      35.549  58.515   3.115  1.00 45.09           N  
ATOM    183  NH2 ARG A  54      33.818  59.149   4.508  1.00 45.25           N  
ATOM    184  N   TYR A  55      32.288  53.012   0.098  1.00 35.70           N  
ATOM    185  CA  TYR A  55      31.718  52.544  -1.172  1.00 33.90           C  
ATOM    186  C   TYR A  55      31.012  53.721  -1.886  1.00 34.98           C  
ATOM    187  O   TYR A  55      30.217  54.474  -1.258  1.00 34.55           O  
ATOM    188  CB  TYR A  55      30.735  51.416  -0.877  1.00 32.84           C  
ATOM    189  CG  TYR A  55      29.897  51.041  -2.021  1.00 33.28           C  
ATOM    190  CD1 TYR A  55      30.404  50.209  -3.029  1.00 34.25           C  
ATOM    191  CD2 TYR A  55      28.595  51.519  -2.140  1.00 31.34           C  
ATOM    192  CE1 TYR A  55      29.628  49.850  -4.117  1.00 33.35           C  
ATOM    193  CE2 TYR A  55      27.810  51.187  -3.237  1.00 33.53           C  
ATOM    194  CZ  TYR A  55      28.315  50.343  -4.223  1.00 34.90           C  
ATOM    195  OH  TYR A  55      27.530  50.013  -5.321  1.00 30.81           O  
ATOM    196  N   VAL A  56      31.329  53.892  -3.170  1.00 32.25           N  
ATOM    197  CA  VAL A  56      30.710  54.884  -4.058  1.00 35.50           C  
ATOM    198  C   VAL A  56      30.041  54.103  -5.165  1.00 34.52           C  
ATOM    199  O   VAL A  56      30.744  53.415  -5.922  1.00 35.72           O  
ATOM    200  CB  VAL A  56      31.786  55.839  -4.642  1.00 40.38           C  
ATOM    201  CG1 VAL A  56      31.159  57.103  -5.223  1.00 44.19           C  
ATOM    202  CG2 VAL A  56      32.780  56.258  -3.572  1.00 37.83           C  
ATOM    203  N   PRO A  57      28.683  54.126  -5.250  1.00 34.04           N  
ATOM    204  CA  PRO A  57      27.998  53.233  -6.208  1.00 31.38           C  
ATOM    205  C   PRO A  57      28.230  53.661  -7.650  1.00 34.31           C  
ATOM    206  O   PRO A  57      28.651  54.786  -7.883  1.00 32.34           O  
ATOM    207  CB  PRO A  57      26.521  53.411  -5.878  1.00 32.30           C  
ATOM    208  CG  PRO A  57      26.437  54.757  -5.251  1.00 31.91           C  
ATOM    209  CD  PRO A  57      27.728  54.993  -4.536  1.00 32.92           C  
ATOM    210  N   PRO A  58      27.929  52.787  -8.619  1.00 34.96           N  
ATOM    211  CA  PRO A  58      28.231  53.201  -9.985  1.00 39.77           C  
ATOM    212  C   PRO A  58      27.281  54.267 -10.484  1.00 40.97           C  
ATOM    213  O   PRO A  58      26.136  54.337 -10.022  1.00 39.22           O  
ATOM    214  CB  PRO A  58      28.042  51.907 -10.803  1.00 39.06           C  
ATOM    215  CG  PRO A  58      28.043  50.794  -9.815  1.00 37.46           C  
ATOM    216  CD  PRO A  58      27.464  51.394  -8.567  1.00 36.64           C  
ATOM    217  N   GLN A  59      27.771  55.099 -11.402  1.00 47.01           N  
ATOM    218  CA  GLN A  59      26.926  56.039 -12.160  1.00 51.96           C  
ATOM    219  C   GLN A  59      25.794  55.305 -12.784  1.00 45.46           C  
ATOM    220  O   GLN A  59      25.969  54.190 -13.254  1.00 47.49           O  
ATOM    221  CB  GLN A  59      27.717  56.765 -13.263  1.00 56.91           C  
ATOM    222  CG  GLN A  59      28.282  58.095 -12.790  1.00 65.69           C  
ATOM    223  CD  GLN A  59      29.694  58.360 -13.291  1.00 80.80           C  
ATOM    224  OE1 GLN A  59      30.227  57.621 -14.128  1.00 93.10           O  
ATOM    225  NE2 GLN A  59      30.313  59.420 -12.774  1.00 80.52           N  
ATOM    226  N   TYR A  60      24.623  55.924 -12.757  1.00 51.15           N  
ATOM    227  CA  TYR A  60      23.442  55.373 -13.399  1.00 51.66           C  
ATOM    228  C   TYR A  60      22.494  56.479 -13.821  1.00 55.86           C  
ATOM    229  O   TYR A  60      21.732  56.995 -13.007  1.00 60.12           O  
ATOM    230  CB  TYR A  60      22.722  54.462 -12.453  1.00 48.79           C  
ATOM    231  CG  TYR A  60      21.456  53.901 -13.021  1.00 46.94           C  
ATOM    232  CD1 TYR A  60      21.497  52.927 -14.026  1.00 53.10           C  
ATOM    233  CD2 TYR A  60      20.213  54.315 -12.547  1.00 50.73           C  
ATOM    234  CE1 TYR A  60      20.324  52.381 -14.554  1.00 55.10           C  
ATOM    235  CE2 TYR A  60      19.024  53.790 -13.070  1.00 52.04           C  
ATOM    236  CZ  TYR A  60      19.084  52.818 -14.073  1.00 58.73           C  
ATOM    237  OH  TYR A  60      17.920  52.274 -14.590  1.00 59.18           O  
ATOM    238  N   ASN A  61      22.528  56.807 -15.105  1.00 62.90           N  
ATOM    239  CA  ASN A  61      21.738  57.908 -15.662  1.00 69.43           C  
ATOM    240  C   ASN A  61      20.235  57.664 -15.711  1.00 64.94           C  
ATOM    241  O   ASN A  61      19.497  58.605 -15.883  1.00 60.86           O  
ATOM    242  CB  ASN A  61      22.227  58.243 -17.076  1.00 71.24           C  
ATOM    243  CG  ASN A  61      23.636  58.798 -17.087  1.00 75.36           C  
ATOM    244  OD1 ASN A  61      24.031  59.539 -16.179  1.00 77.68           O  
ATOM    245  ND2 ASN A  61      24.402  58.454 -18.119  1.00 71.32           N  
ATOM    246  N   GLY A  62      19.814  56.423 -15.541  1.00 64.40           N  
ATOM    247  CA  GLY A  62      18.432  56.028 -15.662  1.00 62.26           C  
ATOM    248  C   GLY A  62      17.488  56.590 -14.643  1.00 61.86           C  
ATOM    249  O   GLY A  62      17.811  57.526 -13.984  1.00 66.94           O  
ATOM    250  N   ARG A  63      16.312  55.993 -14.535  1.00 71.04           N  
ATOM    251  CA  ARG A  63      15.254  56.459 -13.657  1.00 78.12           C  
ATOM    252  C   ARG A  63      15.394  55.907 -12.280  1.00 94.66           C  
ATOM    253  O   ARG A  63      15.194  54.727 -12.028  1.00 93.90           O  
ATOM    254  CB  ARG A  63      13.886  56.057 -14.160  1.00 78.01           C  
ATOM    255  CG  ARG A  63      12.753  56.985 -13.736  1.00 79.81           C  
ATOM    256  CD  ARG A  63      11.544  56.729 -14.620  1.00 81.36           C  
ATOM    257  NE  ARG A  63      10.412  57.659 -14.505  1.00 84.92           N  
ATOM    258  CZ  ARG A  63      10.281  58.812 -15.161  1.00 77.54           C  
ATOM    259  NH1 ARG A  63      11.220  59.231 -15.963  1.00 78.76           N  
ATOM    260  NH2 ARG A  63       9.208  59.552 -14.995  1.00 72.95           N  
ATOM    261  N   PHE A  64      15.688  56.813 -11.349  1.00112.05           N  
ATOM    262  CA  PHE A  64      15.693  56.509  -9.923  1.00116.72           C  
ATOM    263  C   PHE A  64      14.242  56.055  -9.810  1.00116.86           C  
ATOM    264  O   PHE A  64      13.310  56.857  -9.867  1.00117.37           O  
ATOM    265  CB  PHE A  64      16.103  57.739  -9.112  1.00123.46           C  
ATOM    266  CG  PHE A  64      15.873  57.595  -7.635  1.00125.75           C  
ATOM    267  CD1 PHE A  64      16.677  56.765  -6.872  1.00122.38           C  
ATOM    268  CD2 PHE A  64      14.851  58.290  -7.009  1.00122.14           C  
ATOM    269  CE1 PHE A  64      16.468  56.631  -5.513  1.00122.05           C  
ATOM    270  CE2 PHE A  64      14.636  58.160  -5.650  1.00121.74           C  
ATOM    271  CZ  PHE A  64      15.446  57.329  -4.901  1.00119.93           C  
ATOM    272  N   ASP A  65      14.078  54.749  -9.652  1.00117.36           N  
ATOM    273  CA  ASP A  65      12.791  54.100  -9.490  1.00109.96           C  
ATOM    274  C   ASP A  65      12.967  53.160  -8.308  1.00110.93           C  
ATOM    275  O   ASP A  65      14.018  52.531  -8.166  1.00111.98           O  
ATOM    276  CB  ASP A  65      12.375  53.315 -10.730  1.00101.95           C  
ATOM    277  CG  ASP A  65      11.054  52.597 -10.561  1.00 94.71           C  
ATOM    278  OD1 ASP A  65      10.629  52.371  -9.407  1.00 87.10           O  
ATOM    279  OD2 ASP A  65      10.438  52.249 -11.588  1.00 92.20           O  
ATOM    280  N   ALA A  66      11.951  53.055  -7.458  1.00105.49           N  
ATOM    281  CA  ALA A  66      12.081  52.186  -6.285  1.00 96.98           C  
ATOM    282  C   ALA A  66      11.558  50.791  -6.488  1.00 83.49           C  
ATOM    283  O   ALA A  66      11.855  49.942  -5.680  1.00 73.89           O  
ATOM    284  CB  ALA A  66      11.441  52.801  -5.053  1.00 94.29           C  
ATOM    285  N   LYS A  67      10.805  50.555  -7.557  1.00 73.12           N  
ATOM    286  CA  LYS A  67      10.117  49.280  -7.730  1.00 78.84           C  
ATOM    287  C   LYS A  67      10.935  48.173  -8.413  1.00 74.31           C  
ATOM    288  O   LYS A  67      10.735  46.996  -8.111  1.00 75.49           O  
ATOM    289  CB  LYS A  67       8.824  49.524  -8.513  1.00 82.05           C  
ATOM    290  CG  LYS A  67       7.780  50.353  -7.754  1.00 80.60           C  
ATOM    291  CD  LYS A  67       6.527  49.540  -7.454  1.00 80.50           C  
ATOM    292  CE  LYS A  67       5.736  49.251  -8.733  1.00 79.23           C  
ATOM    293  NZ  LYS A  67       5.029  47.936  -8.724  1.00 77.92           N  
ATOM    294  N   ASP A  68      11.837  48.543  -9.324  1.00 75.23           N  
ATOM    295  CA  ASP A  68      12.707  47.570 -10.032  1.00 78.74           C  
ATOM    296  C   ASP A  68      14.092  47.534  -9.392  1.00 72.98           C  
ATOM    297  O   ASP A  68      15.108  47.342 -10.074  1.00 67.09           O  
ATOM    298  CB  ASP A  68      12.847  47.953 -11.508  1.00 81.34           C  
ATOM    299  CG  ASP A  68      11.528  48.373 -12.124  1.00 85.66           C  
ATOM    300  OD1 ASP A  68      10.515  47.672 -11.892  1.00 83.79           O  
ATOM    301  OD2 ASP A  68      11.502  49.412 -12.822  1.00 85.98           O  
ATOM    302  N   ILE A  69      14.105  47.716  -8.072  1.00 64.50           N  
ATOM    303  CA  ILE A  69      15.326  47.944  -7.300  1.00 55.84           C  
ATOM    304  C   ILE A  69      16.425  46.973  -7.736  1.00 45.02           C  
ATOM    305  O   ILE A  69      17.583  47.356  -7.802  1.00 38.03           O  
ATOM    306  CB  ILE A  69      15.060  47.892  -5.749  1.00 51.18           C  
ATOM    307  CG1 ILE A  69      16.306  48.280  -4.930  1.00 52.87           C  
ATOM    308  CG2 ILE A  69      14.552  46.523  -5.310  1.00 49.37           C  
ATOM    309  CD1 ILE A  69      16.161  48.078  -3.412  1.00 57.12           C  
ATOM    310  N   ASP A  70      16.058  45.742  -8.076  1.00 49.68           N  
ATOM    311  CA  ASP A  70      17.078  44.712  -8.351  1.00 52.92           C  
ATOM    312  C   ASP A  70      17.861  44.931  -9.633  1.00 52.08           C  
ATOM    313  O   ASP A  70      18.932  44.366  -9.786  1.00 57.78           O  
ATOM    314  CB  ASP A  70      16.484  43.309  -8.284  1.00 51.22           C  
ATOM    315  CG  ASP A  70      16.041  42.932  -6.868  1.00 56.03           C  
ATOM    316  OD1 ASP A  70      16.771  43.205  -5.885  1.00 64.35           O  
ATOM    317  OD2 ASP A  70      14.948  42.357  -6.709  1.00 54.91           O  
ATOM    318  N   GLN A  71      17.366  45.776 -10.532  1.00 57.38           N  
ATOM    319  CA  GLN A  71      18.128  46.133 -11.748  1.00 62.33           C  
ATOM    320  C   GLN A  71      19.226  47.162 -11.471  1.00 56.49           C  
ATOM    321  O   GLN A  71      20.370  47.015 -11.914  1.00 62.76           O  
ATOM    322  CB  GLN A  71      17.186  46.646 -12.865  1.00 67.05           C  
ATOM    323  CG  GLN A  71      16.811  45.597 -13.905  1.00 71.00           C  
ATOM    324  CD  GLN A  71      18.016  45.106 -14.728  1.00 79.82           C  
ATOM    325  OE1 GLN A  71      18.546  44.015 -14.462  1.00 79.89           O  
ATOM    326  NE2 GLN A  71      18.455  45.906 -15.730  1.00 71.91           N  
ATOM    327  N   ILE A  72      18.870  48.169 -10.691  1.00 52.20           N  
ATOM    328  CA  ILE A  72      19.680  49.367 -10.511  1.00 51.07           C  
ATOM    329  C   ILE A  72      21.064  49.064  -9.931  1.00 47.72           C  
ATOM    330  O   ILE A  72      21.175  48.273  -9.009  1.00 39.23           O  
ATOM    331  CB  ILE A  72      18.991  50.353  -9.550  1.00 54.84           C  
ATOM    332  CG1 ILE A  72      17.576  50.706 -10.038  1.00 62.40           C  
ATOM    333  CG2 ILE A  72      19.813  51.629  -9.414  1.00 56.79           C  
ATOM    334  CD1 ILE A  72      16.687  51.324  -8.972  1.00 64.12           C  
ATOM    335  N   PRO A  73      22.117  49.711 -10.458  1.00 45.60           N  
ATOM    336  CA  PRO A  73      23.441  49.462  -9.921  1.00 43.46           C  
ATOM    337  C   PRO A  73      23.637  50.064  -8.523  1.00 39.31           C  
ATOM    338  O   PRO A  73      23.285  51.213  -8.269  1.00 42.50           O  
ATOM    339  CB  PRO A  73      24.365  50.154 -10.933  1.00 40.60           C  
ATOM    340  CG  PRO A  73      23.519  50.329 -12.153  1.00 44.21           C  
ATOM    341  CD  PRO A  73      22.189  50.660 -11.574  1.00 43.15           C  
ATOM    342  N   GLY A  74      24.226  49.277  -7.648  1.00 34.53           N  
ATOM    343  CA  GLY A  74      24.532  49.689  -6.290  1.00 32.74           C  
ATOM    344  C   GLY A  74      24.714  48.475  -5.405  1.00 30.68           C  
ATOM    345  O   GLY A  74      24.841  47.360  -5.902  1.00 27.09           O  
ATOM    346  N   ARG A  75      24.654  48.685  -4.090  1.00 30.96           N  
ATOM    347  CA  ARG A  75      24.927  47.615  -3.105  1.00 28.02           C  
ATOM    348  C   ARG A  75      23.925  47.640  -1.956  1.00 25.36           C  
ATOM    349  O   ARG A  75      23.636  48.694  -1.414  1.00 24.57           O  
ATOM    350  CB  ARG A  75      26.342  47.775  -2.581  1.00 25.66           C  
ATOM    351  CG  ARG A  75      26.983  46.557  -1.940  1.00 24.82           C  
ATOM    352  CD  ARG A  75      28.422  46.964  -1.623  1.00 24.87           C  
ATOM    353  NE  ARG A  75      29.123  45.999  -0.793  1.00 28.58           N  
ATOM    354  CZ  ARG A  75      30.361  46.168  -0.312  1.00 27.11           C  
ATOM    355  NH1 ARG A  75      31.031  47.266  -0.561  1.00 26.12           N  
ATOM    356  NH2 ARG A  75      30.880  45.270   0.493  1.00 30.28           N  
ATOM    357  N   VAL A  76      23.392  46.467  -1.653  1.00 26.56           N  
ATOM    358  CA  VAL A  76      22.446  46.236  -0.597  1.00 28.77           C  
ATOM    359  C   VAL A  76      23.137  46.026   0.766  1.00 26.73           C  
ATOM    360  O   VAL A  76      24.114  45.298   0.867  1.00 27.64           O  
ATOM    361  CB  VAL A  76      21.641  44.968  -0.884  1.00 30.29           C  
ATOM    362  CG1 VAL A  76      20.735  44.629   0.303  1.00 32.53           C  
ATOM    363  CG2 VAL A  76      20.804  45.127  -2.158  1.00 32.29           C  
ATOM    364  N   GLY A  77      22.607  46.663   1.806  1.00 25.14           N  
ATOM    365  CA  GLY A  77      23.201  46.644   3.147  1.00 21.64           C  
ATOM    366  C   GLY A  77      22.178  46.824   4.245  1.00 19.33           C  
ATOM    367  O   GLY A  77      21.164  47.461   4.023  1.00 21.05           O  
ATOM    368  N   TRP A  78      22.458  46.271   5.427  1.00 19.04           N  
ATOM    369  CA  TRP A  78      21.670  46.463   6.628  1.00 17.41           C  
ATOM    370  C   TRP A  78      22.342  47.606   7.341  1.00 17.56           C  
ATOM    371  O   TRP A  78      23.509  47.574   7.581  1.00 16.40           O  
ATOM    372  CB  TRP A  78      21.671  45.247   7.489  1.00 17.67           C  
ATOM    373  CG  TRP A  78      20.829  45.385   8.737  1.00 17.75           C  
ATOM    374  CD1 TRP A  78      19.504  45.537   8.782  1.00 18.11           C  
ATOM    375  CD2 TRP A  78      21.273  45.356  10.077  1.00 18.64           C  
ATOM    376  NE1 TRP A  78      19.055  45.629  10.070  1.00 18.64           N  
ATOM    377  CE2 TRP A  78      20.121  45.513  10.905  1.00 18.84           C  
ATOM    378  CE3 TRP A  78      22.515  45.238  10.678  1.00 18.19           C  
ATOM    379  CZ2 TRP A  78      20.185  45.564  12.323  1.00 18.18           C  
ATOM    380  CZ3 TRP A  78      22.578  45.259  12.088  1.00 18.58           C  
ATOM    381  CH2 TRP A  78      21.407  45.472  12.897  1.00 16.92           C  
ATOM    382  N   LEU A  79      21.627  48.659   7.601  1.00 16.93           N  
ATOM    383  CA  LEU A  79      22.237  49.829   8.123  1.00 18.84           C  
ATOM    384  C   LEU A  79      22.396  49.662   9.635  1.00 18.80           C  
ATOM    385  O   LEU A  79      21.458  49.300  10.341  1.00 18.45           O  
ATOM    386  CB  LEU A  79      21.376  51.044   7.771  1.00 20.70           C  
ATOM    387  CG  LEU A  79      21.878  52.347   8.364  1.00 21.10           C  
ATOM    388  CD1 LEU A  79      23.216  52.722   7.822  1.00 21.78           C  
ATOM    389  CD2 LEU A  79      20.874  53.421   8.046  1.00 22.81           C  
ATOM    390  N   THR A  80      23.603  49.878  10.132  1.00 18.12           N  
ATOM    391  CA  THR A  80      23.864  49.592  11.520  1.00 19.46           C  
ATOM    392  C   THR A  80      24.378  50.773  12.349  1.00 18.23           C  
ATOM    393  O   THR A  80      24.409  50.682  13.562  1.00 16.56           O  
ATOM    394  CB  THR A  80      24.801  48.381  11.720  1.00 22.22           C  
ATOM    395  OG1 THR A  80      24.766  48.018  13.096  1.00 26.86           O  
ATOM    396  CG2 THR A  80      26.220  48.734  11.347  1.00 22.41           C  
ATOM    397  N   ASN A  81      24.771  51.881  11.719  1.00 19.61           N  
ATOM    398  CA  ASN A  81      25.257  53.020  12.459  1.00 19.76           C  
ATOM    399  C   ASN A  81      25.303  54.208  11.521  1.00 20.74           C  
ATOM    400  O   ASN A  81      25.211  54.020  10.329  1.00 19.82           O  
ATOM    401  CB  ASN A  81      26.638  52.725  13.038  1.00 20.25           C  
ATOM    402  CG  ASN A  81      26.898  53.477  14.354  1.00 22.42           C  
ATOM    403  OD1 ASN A  81      26.141  54.391  14.743  1.00 23.45           O  
ATOM    404  ND2 ASN A  81      27.970  53.088  15.055  1.00 20.41           N  
ATOM    405  N   MET A  82      25.428  55.421  12.050  1.00 19.62           N  
ATOM    406  CA  MET A  82      25.575  56.623  11.232  1.00 22.09           C  
ATOM    407  C   MET A  82      26.213  57.733  12.080  1.00 22.68           C  
ATOM    408  O   MET A  82      25.991  57.766  13.280  1.00 23.72           O  
ATOM    409  CB  MET A  82      24.234  57.136  10.697  1.00 25.17           C  
ATOM    410  CG  MET A  82      23.030  57.185  11.668  1.00 29.41           C  
ATOM    411  SD  MET A  82      21.445  57.800  10.961  1.00 31.07           S  
ATOM    412  CE  MET A  82      20.973  56.515   9.860  1.00 39.22           C  
ATOM    413  N   HIS A  83      27.018  58.607  11.478  1.00 21.59           N  
ATOM    414  CA  HIS A  83      27.638  59.758  12.214  1.00 23.88           C  
ATOM    415  C   HIS A  83      27.805  60.972  11.257  1.00 23.08           C  
ATOM    416  O   HIS A  83      28.139  60.785  10.104  1.00 25.78           O  
ATOM    417  CB  HIS A  83      29.034  59.380  12.737  1.00 22.54           C  
ATOM    418  CG  HIS A  83      29.033  58.196  13.646  1.00 24.87           C  
ATOM    419  ND1 HIS A  83      28.593  58.271  14.956  1.00 26.10           N  
ATOM    420  CD2 HIS A  83      29.397  56.906  13.446  1.00 26.14           C  
ATOM    421  CE1 HIS A  83      28.699  57.078  15.520  1.00 26.52           C  
ATOM    422  NE2 HIS A  83      29.159  56.226  14.622  1.00 26.09           N  
ATOM    423  N   ALA A  84      27.618  62.183  11.735  1.00 22.51           N  
ATOM    424  CA  ALA A  84      27.995  63.382  11.013  1.00 24.19           C  
ATOM    425  C   ALA A  84      29.444  63.365  10.713  1.00 26.19           C  
ATOM    426  O   ALA A  84      30.236  62.857  11.483  1.00 26.05           O  
ATOM    427  CB  ALA A  84      27.727  64.626  11.860  1.00 25.39           C  
ATOM    428  N   THR A  85      29.806  63.939   9.581  1.00 30.51           N  
ATOM    429  CA  THR A  85      31.208  64.036   9.222  1.00 30.27           C  
ATOM    430  C   THR A  85      31.391  65.206   8.259  1.00 32.55           C  
ATOM    431  O   THR A  85      30.451  65.889   7.851  1.00 26.01           O  
ATOM    432  CB  THR A  85      31.718  62.697   8.597  1.00 31.93           C  
ATOM    433  OG1 THR A  85      33.112  62.783   8.326  1.00 32.67           O  
ATOM    434  CG2 THR A  85      31.030  62.377   7.266  1.00 30.59           C  
ATOM    435  N   LEU A  86      32.641  65.450   7.911  1.00 35.42           N  
ATOM    436  CA  LEU A  86      32.960  66.509   6.966  1.00 35.89           C  
ATOM    437  C   LEU A  86      33.849  65.902   5.881  1.00 37.03           C  
ATOM    438  O   LEU A  86      34.785  65.183   6.172  1.00 34.45           O  
ATOM    439  CB  LEU A  86      33.665  67.649   7.690  1.00 35.86           C  
ATOM    440  CG  LEU A  86      33.649  68.990   6.982  1.00 35.66           C  
ATOM    441  CD1 LEU A  86      32.320  69.678   7.201  1.00 34.18           C  
ATOM    442  CD2 LEU A  86      34.780  69.867   7.513  1.00 40.61           C  
ATOM    443  N   VAL A  87      33.536  66.212   4.636  1.00 38.00           N  
ATOM    444  CA  VAL A  87      34.139  65.545   3.516  1.00 41.70           C  
ATOM    445  C   VAL A  87      34.600  66.633   2.546  1.00 42.19           C  
ATOM    446  O   VAL A  87      33.960  67.669   2.469  1.00 38.10           O  
ATOM    447  CB  VAL A  87      33.084  64.566   2.930  1.00 44.70           C  
ATOM    448  CG1 VAL A  87      32.592  64.968   1.542  1.00 45.05           C  
ATOM    449  CG2 VAL A  87      33.593  63.131   2.994  1.00 47.63           C  
ATOM    450  N   SER A  88      35.725  66.413   1.859  1.00 47.78           N  
ATOM    451  CA  SER A  88      36.220  67.342   0.826  1.00 50.29           C  
ATOM    452  C   SER A  88      35.588  67.087  -0.510  1.00 51.10           C  
ATOM    453  O   SER A  88      35.114  65.990  -0.779  1.00 50.31           O  
ATOM    454  CB  SER A  88      37.736  67.218   0.657  1.00 49.33           C  
ATOM    455  OG  SER A  88      38.057  65.889   0.307  1.00 49.13           O  
ATOM    456  N   GLN A  89      35.614  68.113  -1.360  1.00 62.43           N  
ATOM    457  CA  GLN A  89      35.261  67.992  -2.792  1.00 69.97           C  
ATOM    458  C   GLN A  89      35.866  66.745  -3.464  1.00 69.17           C  
ATOM    459  O   GLN A  89      35.163  66.039  -4.164  1.00 71.90           O  
ATOM    460  CB  GLN A  89      35.717  69.239  -3.556  1.00 80.08           C  
ATOM    461  CG  GLN A  89      34.922  69.527  -4.824  1.00 86.48           C  
ATOM    462  CD  GLN A  89      33.848  70.585  -4.618  1.00 87.49           C  
ATOM    463  OE1 GLN A  89      34.142  71.781  -4.546  1.00 90.59           O  
ATOM    464  NE2 GLN A  89      32.595  70.150  -4.539  1.00 86.68           N  
ATOM    465  N   GLU A  90      37.170  66.518  -3.267  1.00 73.07           N  
ATOM    466  CA  GLU A  90      37.854  65.244  -3.570  1.00 75.68           C  
ATOM    467  C   GLU A  90      39.379  65.449  -3.642  1.00 77.79           C  
ATOM    468  O   GLU A  90      40.160  64.508  -3.440  1.00 68.50           O  
ATOM    469  CB  GLU A  90      37.323  64.560  -4.859  1.00 77.52           C  
ATOM    470  CG  GLU A  90      36.445  63.306  -4.653  1.00 78.61           C  
ATOM    471  CD  GLU A  90      35.358  63.421  -3.562  1.00 79.70           C  
ATOM    472  OE1 GLU A  90      34.164  63.622  -3.920  1.00 68.02           O  
ATOM    473  OE2 GLU A  90      35.687  63.295  -2.345  1.00 75.03           O  
ATOM    474  N   VAL A 108      30.231  74.264  -6.433  1.00 95.34           N  
ATOM    475  CA  VAL A 108      31.199  75.252  -6.893  1.00100.10           C  
ATOM    476  C   VAL A 108      31.741  76.075  -5.734  1.00 94.73           C  
ATOM    477  O   VAL A 108      31.621  77.280  -5.737  1.00 82.53           O  
ATOM    478  CB  VAL A 108      30.588  76.178  -7.979  1.00 99.28           C  
ATOM    479  CG1 VAL A 108      31.671  76.841  -8.808  1.00 95.12           C  
ATOM    480  CG2 VAL A 108      29.643  75.408  -8.886  1.00 95.46           C  
ATOM    481  N   THR A 109      32.352  75.392  -4.766  1.00 98.71           N  
ATOM    482  CA  THR A 109      32.794  75.963  -3.491  1.00 96.95           C  
ATOM    483  C   THR A 109      34.328  76.155  -3.618  1.00 97.28           C  
ATOM    484  O   THR A 109      34.889  75.944  -4.701  1.00 80.67           O  
ATOM    485  CB  THR A 109      32.834  74.877  -2.375  1.00 98.72           C  
ATOM    486  OG1 THR A 109      32.325  73.627  -2.861  1.00100.89           O  
ATOM    487  CG2 THR A 109      32.053  75.306  -1.176  1.00 94.64           C  
ATOM    488  N   THR A 110      34.941  76.346  -2.417  1.00 95.33           N  
ATOM    489  CA  THR A 110      36.292  76.869  -2.109  1.00 87.91           C  
ATOM    490  C   THR A 110      37.089  75.762  -1.342  1.00 89.62           C  
ATOM    491  O   THR A 110      36.792  74.598  -1.468  1.00 81.64           O  
ATOM    492  CB  THR A 110      36.096  77.892  -0.982  1.00 81.24           C  
ATOM    493  OG1 THR A 110      34.978  78.716  -1.284  1.00 74.65           O  
ATOM    494  CG2 THR A 110      37.297  78.719  -0.810  1.00 77.31           C  
ATOM    495  N   ASN A 111      38.132  76.132  -0.595  1.00 95.68           N  
ATOM    496  CA  ASN A 111      38.950  75.152   0.116  1.00 97.19           C  
ATOM    497  C   ASN A 111      38.365  74.981   1.528  1.00 92.22           C  
ATOM    498  O   ASN A 111      38.977  75.360   2.518  1.00 90.39           O  
ATOM    499  CB  ASN A 111      40.420  75.561   0.249  1.00 99.79           C  
ATOM    500  CG  ASN A 111      41.137  75.656  -1.072  1.00 98.41           C  
ATOM    501  OD1 ASN A 111      40.552  75.408  -2.114  1.00105.42           O  
ATOM    502  ND2 ASN A 111      42.408  76.025  -1.028  1.00 80.41           N  
ATOM    503  N   GLN A 112      37.167  74.425   1.602  1.00 79.23           N  
ATOM    504  CA  GLN A 112      36.482  74.222   2.855  1.00 69.39           C  
ATOM    505  C   GLN A 112      35.649  72.962   2.702  1.00 59.03           C  
ATOM    506  O   GLN A 112      35.231  72.648   1.613  1.00 57.97           O  
ATOM    507  CB  GLN A 112      35.622  75.442   3.177  1.00 69.63           C  
ATOM    508  CG  GLN A 112      34.235  75.432   2.582  1.00 66.13           C  
ATOM    509  CD  GLN A 112      33.483  76.710   2.824  1.00 68.08           C  
ATOM    510  OE1 GLN A 112      33.401  77.197   3.934  1.00 73.96           O  
ATOM    511  NE2 GLN A 112      32.934  77.256   1.781  1.00 66.58           N  
ATOM    512  N   GLY A 113      35.423  72.249   3.791  1.00 49.44           N  
ATOM    513  CA  GLY A 113      34.717  70.969   3.742  1.00 44.29           C  
ATOM    514  C   GLY A 113      33.187  71.047   3.650  1.00 37.14           C  
ATOM    515  O   GLY A 113      32.584  72.097   3.904  1.00 36.69           O  
ATOM    516  N   ILE A 114      32.611  69.921   3.250  1.00 30.93           N  
ATOM    517  CA  ILE A 114      31.190  69.739   2.984  1.00 33.63           C  
ATOM    518  C   ILE A 114      30.600  68.823   4.051  1.00 30.79           C  
ATOM    519  O   ILE A 114      31.115  67.739   4.273  1.00 26.33           O  
ATOM    520  CB  ILE A 114      30.934  69.017   1.626  1.00 37.06           C  
ATOM    521  CG1 ILE A 114      31.683  69.666   0.446  1.00 40.18           C  
ATOM    522  CG2 ILE A 114      29.473  69.070   1.261  1.00 36.88           C  
ATOM    523  CD1 ILE A 114      31.289  71.103   0.217  1.00 42.78           C  
ATOM    524  N   SER A 115      29.510  69.243   4.689  1.00 28.75           N  
ATOM    525  CA  SER A 115      28.851  68.400   5.696  1.00 26.75           C  
ATOM    526  C   SER A 115      28.110  67.236   5.028  1.00 25.44           C  
ATOM    527  O   SER A 115      27.518  67.373   3.957  1.00 24.59           O  
ATOM    528  CB  SER A 115      27.870  69.219   6.543  1.00 26.18           C  
ATOM    529  OG  SER A 115      28.588  70.003   7.530  1.00 28.37           O  
ATOM    530  N   GLY A 116      28.159  66.092   5.681  1.00 24.70           N  
ATOM    531  CA  GLY A 116      27.371  64.936   5.251  1.00 25.60           C  
ATOM    532  C   GLY A 116      27.370  63.936   6.399  1.00 24.26           C  
ATOM    533  O   GLY A 116      27.829  64.265   7.525  1.00 26.01           O  
ATOM    534  N   VAL A 117      26.841  62.743   6.127  1.00 24.33           N  
ATOM    535  CA  VAL A 117      26.719  61.671   7.135  1.00 24.31           C  
ATOM    536  C   VAL A 117      27.271  60.392   6.573  1.00 23.34           C  
ATOM    537  O   VAL A 117      26.955  60.020   5.456  1.00 23.48           O  
ATOM    538  CB  VAL A 117      25.256  61.411   7.620  1.00 23.89           C  
ATOM    539  CG1 VAL A 117      25.165  60.208   8.578  1.00 24.88           C  
ATOM    540  CG2 VAL A 117      24.700  62.633   8.321  1.00 25.65           C  
ATOM    541  N   ASP A 118      28.084  59.717   7.368  1.00 22.64           N  
ATOM    542  CA  ASP A 118      28.558  58.384   7.022  1.00 24.65           C  
ATOM    543  C   ASP A 118      27.531  57.376   7.570  1.00 24.47           C  
ATOM    544  O   ASP A 118      27.179  57.407   8.768  1.00 26.22           O  
ATOM    545  CB  ASP A 118      29.907  58.082   7.670  1.00 25.39           C  
ATOM    546  CG  ASP A 118      31.121  58.782   7.004  1.00 31.30           C  
ATOM    547  OD1 ASP A 118      31.046  59.341   5.900  1.00 35.55           O  
ATOM    548  OD2 ASP A 118      32.206  58.725   7.615  1.00 31.88           O  
ATOM    549  N   PHE A 119      27.089  56.474   6.709  1.00 22.08           N  
ATOM    550  CA  PHE A 119      26.232  55.396   7.086  1.00 23.07           C  
ATOM    551  C   PHE A 119      26.982  54.063   6.976  1.00 25.16           C  
ATOM    552  O   PHE A 119      27.626  53.816   5.965  1.00 24.25           O  
ATOM    553  CB  PHE A 119      25.061  55.402   6.181  1.00 23.06           C  
ATOM    554  CG  PHE A 119      24.259  56.665   6.232  1.00 22.72           C  
ATOM    555  CD1 PHE A 119      24.578  57.728   5.445  1.00 20.86           C  
ATOM    556  CD2 PHE A 119      23.147  56.766   7.086  1.00 24.46           C  
ATOM    557  CE1 PHE A 119      23.810  58.888   5.489  1.00 21.18           C  
ATOM    558  CE2 PHE A 119      22.370  57.938   7.130  1.00 24.27           C  
ATOM    559  CZ  PHE A 119      22.706  59.000   6.297  1.00 20.60           C  
ATOM    560  N   TYR A 120      26.910  53.234   8.032  1.00 23.82           N  
ATOM    561  CA  TYR A 120      27.644  51.946   8.156  1.00 21.02           C  
ATOM    562  C   TYR A 120      26.739  50.741   7.917  1.00 22.42           C  
ATOM    563  O   TYR A 120      25.728  50.574   8.598  1.00 25.96           O  
ATOM    564  CB  TYR A 120      28.258  51.845   9.565  1.00 20.28           C  
ATOM    565  CG  TYR A 120      29.337  52.897   9.845  1.00 22.48           C  
ATOM    566  CD1 TYR A 120      29.018  54.243   9.908  1.00 20.68           C  
ATOM    567  CD2 TYR A 120      30.676  52.539   9.955  1.00 22.73           C  
ATOM    568  CE1 TYR A 120      29.973  55.182  10.105  1.00 22.08           C  
ATOM    569  CE2 TYR A 120      31.671  53.477  10.190  1.00 23.40           C  
ATOM    570  CZ  TYR A 120      31.330  54.786  10.250  1.00 24.12           C  
ATOM    571  OH  TYR A 120      32.293  55.725  10.448  1.00 23.45           O  
ATOM    572  N   PHE A 121      27.111  49.875   6.983  1.00 21.02           N  
ATOM    573  CA  PHE A 121      26.293  48.774   6.533  1.00 18.95           C  
ATOM    574  C   PHE A 121      26.974  47.449   6.712  1.00 21.50           C  
ATOM    575  O   PHE A 121      28.214  47.332   6.570  1.00 19.75           O  
ATOM    576  CB  PHE A 121      26.058  48.911   5.023  1.00 19.75           C  
ATOM    577  CG  PHE A 121      25.161  50.057   4.651  1.00 20.32           C  
ATOM    578  CD1 PHE A 121      23.816  49.905   4.667  1.00 18.74           C  
ATOM    579  CD2 PHE A 121      25.678  51.270   4.299  1.00 20.28           C  
ATOM    580  CE1 PHE A 121      22.996  50.938   4.289  1.00 21.21           C  
ATOM    581  CE2 PHE A 121      24.867  52.331   3.946  1.00 18.86           C  
ATOM    582  CZ  PHE A 121      23.512  52.169   3.952  1.00 18.82           C  
ATOM    583  N   LEU A 122      26.173  46.436   6.983  1.00 21.90           N  
ATOM    584  CA  LEU A 122      26.625  45.051   6.879  1.00 24.32           C  
ATOM    585  C   LEU A 122      26.002  44.469   5.595  1.00 27.87           C  
ATOM    586  O   LEU A 122      24.775  44.618   5.386  1.00 26.27           O  
ATOM    587  CB  LEU A 122      26.172  44.240   8.077  1.00 21.49           C  
ATOM    588  CG  LEU A 122      26.561  44.770   9.483  1.00 23.27           C  
ATOM    589  CD1 LEU A 122      26.037  43.830  10.538  1.00 23.44           C  
ATOM    590  CD2 LEU A 122      28.050  44.971   9.696  1.00 23.86           C  
ATOM    591  N   ASP A 123      26.816  43.826   4.749  1.00 25.61           N  
ATOM    592  CA  ASP A 123      26.274  43.295   3.503  1.00 31.64           C  
ATOM    593  C   ASP A 123      25.666  41.905   3.658  1.00 32.96           C  
ATOM    594  O   ASP A 123      25.689  41.299   4.733  1.00 35.08           O  
ATOM    595  CB  ASP A 123      27.236  43.424   2.282  1.00 32.70           C  
ATOM    596  CG  ASP A 123      28.537  42.629   2.422  1.00 34.79           C  
ATOM    597  OD1 ASP A 123      28.496  41.431   2.801  1.00 41.58           O  
ATOM    598  OD2 ASP A 123      29.610  43.228   2.129  1.00 43.53           O  
ATOM    599  N   GLU A 124      25.062  41.449   2.566  1.00 38.18           N  
ATOM    600  CA  GLU A 124      24.437  40.152   2.488  1.00 40.01           C  
ATOM    601  C   GLU A 124      25.460  39.014   2.424  1.00 40.06           C  
ATOM    602  O   GLU A 124      25.089  37.862   2.584  1.00 40.60           O  
ATOM    603  CB  GLU A 124      23.556  40.108   1.246  1.00 42.87           C  
ATOM    604  CG  GLU A 124      22.396  41.081   1.276  1.00 45.99           C  
ATOM    605  CD  GLU A 124      21.343  40.752   0.225  1.00 44.25           C  
ATOM    606  OE1 GLU A 124      21.481  41.185  -0.938  1.00 52.34           O  
ATOM    607  OE2 GLU A 124      20.384  40.058   0.559  1.00 45.80           O  
ATOM    608  N   GLU A 125      26.731  39.335   2.193  1.00 42.98           N  
ATOM    609  CA  GLU A 125      27.773  38.315   1.999  1.00 47.77           C  
ATOM    610  C   GLU A 125      28.719  38.134   3.204  1.00 44.63           C  
ATOM    611  O   GLU A 125      29.778  37.541   3.043  1.00 46.53           O  
ATOM    612  CB  GLU A 125      28.632  38.674   0.771  1.00 55.64           C  
ATOM    613  CG  GLU A 125      27.877  39.066  -0.494  1.00 66.59           C  
ATOM    614  CD  GLU A 125      28.606  40.149  -1.284  1.00 80.66           C  
ATOM    615  OE1 GLU A 125      28.586  41.333  -0.854  1.00 85.94           O  
ATOM    616  OE2 GLU A 125      29.207  39.817  -2.336  1.00 84.88           O  
ATOM    617  N   GLY A 126      28.363  38.621   4.396  1.00 41.87           N  
ATOM    618  CA  GLY A 126      29.289  38.583   5.554  1.00 36.78           C  
ATOM    619  C   GLY A 126      30.361  39.689   5.657  1.00 33.99           C  
ATOM    620  O   GLY A 126      31.237  39.649   6.527  1.00 36.21           O  
ATOM    621  N   GLY A 127      30.292  40.681   4.786  1.00 33.33           N  
ATOM    622  CA  GLY A 127      31.237  41.791   4.775  1.00 30.66           C  
ATOM    623  C   GLY A 127      30.531  43.069   5.230  1.00 29.10           C  
ATOM    624  O   GLY A 127      29.391  43.022   5.636  1.00 25.12           O  
ATOM    625  N   SER A 128      31.215  44.202   5.098  1.00 24.52           N  
ATOM    626  CA  SER A 128      30.719  45.440   5.588  1.00 27.18           C  
ATOM    627  C   SER A 128      31.272  46.589   4.747  1.00 25.59           C  
ATOM    628  O   SER A 128      32.309  46.441   4.081  1.00 25.17           O  
ATOM    629  CB  SER A 128      31.113  45.605   7.069  1.00 25.33           C  
ATOM    630  OG  SER A 128      32.509  45.728   7.182  1.00 31.27           O  
ATOM    631  N   PHE A 129      30.570  47.724   4.760  1.00 23.23           N  
ATOM    632  CA  PHE A 129      31.049  48.943   4.105  1.00 22.55           C  
ATOM    633  C   PHE A 129      30.358  50.200   4.612  1.00 23.18           C  
ATOM    634  O   PHE A 129      29.335  50.130   5.259  1.00 27.54           O  
ATOM    635  CB  PHE A 129      30.781  48.861   2.592  1.00 21.34           C  
ATOM    636  CG  PHE A 129      29.304  48.787   2.232  1.00 20.03           C  
ATOM    637  CD1 PHE A 129      28.608  47.603   2.304  1.00 19.02           C  
ATOM    638  CD2 PHE A 129      28.637  49.901   1.775  1.00 19.04           C  
ATOM    639  CE1 PHE A 129      27.265  47.545   1.984  1.00 19.50           C  
ATOM    640  CE2 PHE A 129      27.312  49.839   1.413  1.00 17.55           C  
ATOM    641  CZ  PHE A 129      26.621  48.682   1.502  1.00 18.18           C  
ATOM    642  N   LYS A 130      30.901  51.354   4.282  1.00 22.63           N  
ATOM    643  CA  LYS A 130      30.224  52.568   4.570  1.00 26.07           C  
ATOM    644  C   LYS A 130      30.023  53.401   3.347  1.00 26.19           C  
ATOM    645  O   LYS A 130      30.767  53.339   2.411  1.00 25.71           O  
ATOM    646  CB  LYS A 130      30.935  53.351   5.667  1.00 26.06           C  
ATOM    647  CG  LYS A 130      32.136  54.140   5.297  1.00 28.01           C  
ATOM    648  CD  LYS A 130      32.476  55.074   6.465  1.00 29.12           C  
ATOM    649  CE  LYS A 130      33.789  55.779   6.217  1.00 28.37           C  
ATOM    650  NZ  LYS A 130      34.214  56.654   7.340  1.00 30.07           N  
ATOM    651  N   SER A 131      29.009  54.223   3.375  1.00 28.42           N  
ATOM    652  CA  SER A 131      28.768  55.084   2.270  1.00 31.08           C  
ATOM    653  C   SER A 131      28.230  56.396   2.827  1.00 33.35           C  
ATOM    654  O   SER A 131      27.741  56.442   3.946  1.00 29.30           O  
ATOM    655  CB  SER A 131      27.832  54.379   1.298  1.00 30.77           C  
ATOM    656  OG  SER A 131      27.722  55.192   0.175  1.00 42.73           O  
ATOM    657  N   THR A 132      28.383  57.466   2.065  1.00 33.01           N  
ATOM    658  CA  THR A 132      28.213  58.848   2.555  1.00 30.84           C  
ATOM    659  C   THR A 132      27.178  59.631   1.767  1.00 31.22           C  
ATOM    660  O   THR A 132      27.164  59.580   0.547  1.00 29.71           O  
ATOM    661  CB  THR A 132      29.513  59.625   2.381  1.00 29.19           C  
ATOM    662  OG1 THR A 132      30.469  59.077   3.251  1.00 28.13           O  
ATOM    663  CG2 THR A 132      29.350  61.021   2.763  1.00 30.72           C  
ATOM    664  N   VAL A 133      26.339  60.365   2.483  1.00 33.03           N  
ATOM    665  CA  VAL A 133      25.328  61.239   1.888  1.00 33.74           C  
ATOM    666  C   VAL A 133      25.751  62.649   2.257  1.00 30.48           C  
ATOM    667  O   VAL A 133      26.079  62.910   3.407  1.00 26.97           O  
ATOM    668  CB  VAL A 133      23.937  60.909   2.473  1.00 33.89           C  
ATOM    669  CG1 VAL A 133      22.860  61.869   2.028  1.00 38.39           C  
ATOM    670  CG2 VAL A 133      23.536  59.507   2.083  1.00 37.05           C  
ATOM    671  N   VAL A 134      25.746  63.534   1.292  1.00 30.40           N  
ATOM    672  CA  VAL A 134      25.906  64.933   1.573  1.00 29.28           C  
ATOM    673  C   VAL A 134      24.585  65.683   1.494  1.00 27.62           C  
ATOM    674  O   VAL A 134      23.732  65.341   0.739  1.00 23.91           O  
ATOM    675  CB  VAL A 134      26.990  65.578   0.726  1.00 31.99           C  
ATOM    676  CG1 VAL A 134      28.290  64.875   0.945  1.00 32.86           C  
ATOM    677  CG2 VAL A 134      26.615  65.574  -0.721  1.00 33.39           C  
ATOM    678  N   TYR A 135      24.455  66.705   2.321  1.00 28.07           N  
ATOM    679  CA  TYR A 135      23.235  67.473   2.470  1.00 27.27           C  
ATOM    680  C   TYR A 135      23.617  68.814   3.060  1.00 25.39           C  
ATOM    681  O   TYR A 135      24.337  68.870   3.982  1.00 25.25           O  
ATOM    682  CB  TYR A 135      22.238  66.673   3.289  1.00 25.31           C  
ATOM    683  CG  TYR A 135      20.822  67.141   3.292  1.00 25.78           C  
ATOM    684  CD1 TYR A 135      20.113  67.251   2.129  1.00 25.24           C  
ATOM    685  CD2 TYR A 135      20.174  67.425   4.472  1.00 24.21           C  
ATOM    686  CE1 TYR A 135      18.807  67.632   2.133  1.00 26.54           C  
ATOM    687  CE2 TYR A 135      18.868  67.799   4.487  1.00 23.98           C  
ATOM    688  CZ  TYR A 135      18.195  67.913   3.307  1.00 26.79           C  
ATOM    689  OH  TYR A 135      16.915  68.289   3.302  1.00 26.03           O  
ATOM    690  N   ASP A 136      23.082  69.883   2.500  1.00 25.58           N  
ATOM    691  CA  ASP A 136      23.198  71.232   3.037  1.00 26.27           C  
ATOM    692  C   ASP A 136      22.367  71.441   4.320  1.00 26.38           C  
ATOM    693  O   ASP A 136      21.188  71.287   4.299  1.00 23.94           O  
ATOM    694  CB  ASP A 136      22.816  72.298   2.000  1.00 27.96           C  
ATOM    695  CG  ASP A 136      23.712  72.300   0.749  1.00 30.51           C  
ATOM    696  OD1 ASP A 136      24.767  71.719   0.701  1.00 32.94           O  
ATOM    697  OD2 ASP A 136      23.337  72.904  -0.217  1.00 35.24           O  
ATOM    698  N   PRO A 137      23.011  71.777   5.422  1.00 24.64           N  
ATOM    699  CA  PRO A 137      22.320  72.235   6.589  1.00 25.45           C  
ATOM    700  C   PRO A 137      21.638  73.547   6.313  1.00 29.61           C  
ATOM    701  O   PRO A 137      22.121  74.378   5.493  1.00 27.28           O  
ATOM    702  CB  PRO A 137      23.415  72.465   7.621  1.00 25.38           C  
ATOM    703  CG  PRO A 137      24.675  71.987   7.061  1.00 25.37           C  
ATOM    704  CD  PRO A 137      24.476  71.751   5.603  1.00 26.29           C  
ATOM    705  N   TYR A 138      20.519  73.718   6.999  1.00 25.57           N  
ATOM    706  CA  TYR A 138      19.669  74.862   6.789  1.00 24.43           C  
ATOM    707  C   TYR A 138      18.879  75.248   8.027  1.00 21.91           C  
ATOM    708  O   TYR A 138      18.702  74.448   8.932  1.00 23.95           O  
ATOM    709  CB  TYR A 138      18.750  74.587   5.609  1.00 24.76           C  
ATOM    710  CG  TYR A 138      17.719  73.513   5.845  1.00 23.07           C  
ATOM    711  CD1 TYR A 138      16.559  73.800   6.553  1.00 22.16           C  
ATOM    712  CD2 TYR A 138      17.918  72.195   5.367  1.00 23.71           C  
ATOM    713  CE1 TYR A 138      15.597  72.823   6.775  1.00 25.16           C  
ATOM    714  CE2 TYR A 138      16.951  71.198   5.580  1.00 23.53           C  
ATOM    715  CZ  TYR A 138      15.813  71.509   6.317  1.00 22.54           C  
ATOM    716  OH  TYR A 138      14.831  70.589   6.550  1.00 23.88           O  
ATOM    717  N   PHE A 139      18.445  76.504   8.057  1.00 23.74           N  
ATOM    718  CA  PHE A 139      17.446  77.005   9.019  1.00 21.14           C  
ATOM    719  C   PHE A 139      16.637  78.142   8.386  1.00 22.64           C  
ATOM    720  O   PHE A 139      16.943  78.555   7.247  1.00 20.81           O  
ATOM    721  CB  PHE A 139      18.065  77.340  10.388  1.00 22.04           C  
ATOM    722  CG  PHE A 139      18.909  78.579  10.445  1.00 22.98           C  
ATOM    723  CD1 PHE A 139      18.339  79.839  10.577  1.00 25.17           C  
ATOM    724  CD2 PHE A 139      20.259  78.485  10.473  1.00 23.24           C  
ATOM    725  CE1 PHE A 139      19.119  80.973  10.668  1.00 25.59           C  
ATOM    726  CE2 PHE A 139      21.045  79.603  10.543  1.00 23.85           C  
ATOM    727  CZ  PHE A 139      20.490  80.850  10.658  1.00 24.88           C  
ATOM    728  N   PHE A 140      15.557  78.590   9.063  1.00 20.66           N  
ATOM    729  CA  PHE A 140      14.633  79.508   8.488  1.00 21.06           C  
ATOM    730  C   PHE A 140      14.675  80.854   9.248  1.00 24.16           C  
ATOM    731  O   PHE A 140      14.973  80.899  10.446  1.00 23.37           O  
ATOM    732  CB  PHE A 140      13.201  78.982   8.502  1.00 21.36           C  
ATOM    733  CG  PHE A 140      13.027  77.651   7.841  1.00 25.57           C  
ATOM    734  CD1 PHE A 140      12.876  77.540   6.458  1.00 26.24           C  
ATOM    735  CD2 PHE A 140      13.000  76.477   8.596  1.00 26.56           C  
ATOM    736  CE1 PHE A 140      12.737  76.285   5.854  1.00 25.05           C  
ATOM    737  CE2 PHE A 140      12.831  75.233   7.994  1.00 26.44           C  
ATOM    738  CZ  PHE A 140      12.710  75.136   6.623  1.00 24.31           C  
ATOM    739  N   ILE A 141      14.365  81.930   8.519  1.00 25.90           N  
ATOM    740  CA  ILE A 141      14.046  83.238   9.107  1.00 27.35           C  
ATOM    741  C   ILE A 141      12.595  83.490   8.919  1.00 27.82           C  
ATOM    742  O   ILE A 141      12.081  83.332   7.810  1.00 29.14           O  
ATOM    743  CB  ILE A 141      14.795  84.369   8.409  1.00 31.66           C  
ATOM    744  CG1 ILE A 141      16.240  84.365   8.885  1.00 31.24           C  
ATOM    745  CG2 ILE A 141      14.110  85.719   8.689  1.00 32.53           C  
ATOM    746  CD1 ILE A 141      17.127  85.348   8.161  1.00 38.16           C  
ATOM    747  N   ALA A 142      11.918  83.885   9.990  1.00 26.13           N  
ATOM    748  CA  ALA A 142      10.539  84.285   9.874  1.00 31.82           C  
ATOM    749  C   ALA A 142      10.420  85.821   9.888  1.00 34.48           C  
ATOM    750  O   ALA A 142      11.184  86.484  10.632  1.00 31.74           O  
ATOM    751  CB  ALA A 142       9.725  83.712  11.028  1.00 32.27           C  
ATOM    752  N   CYS A 143       9.427  86.347   9.142  1.00 34.00           N  
ATOM    753  CA  CYS A 143       9.150  87.791   9.070  1.00 37.93           C  
ATOM    754  C   CYS A 143       7.841  88.210   9.701  1.00 43.71           C  
ATOM    755  O   CYS A 143       6.853  87.467   9.692  1.00 43.44           O  
ATOM    756  CB  CYS A 143       9.135  88.259   7.644  1.00 43.51           C  
ATOM    757  SG  CYS A 143      10.694  87.915   6.832  1.00 54.46           S  
ATOM    758  N   ASN A 144       7.820  89.417  10.256  1.00 46.44           N  
ATOM    759  CA  ASN A 144       6.546  89.974  10.763  1.00 53.34           C  
ATOM    760  C   ASN A 144       5.729  90.769   9.717  1.00 51.31           C  
ATOM    761  O   ASN A 144       4.564  91.074   9.972  1.00 44.72           O  
ATOM    762  CB  ASN A 144       6.762  90.822  12.023  1.00 51.72           C  
ATOM    763  CG  ASN A 144       7.801  91.875  11.822  1.00 46.47           C  
ATOM    764  OD1 ASN A 144       7.828  92.556  10.784  1.00 44.78           O  
ATOM    765  ND2 ASN A 144       8.698  91.989  12.781  1.00 43.41           N  
ATOM    766  N   ASP A 145       6.321  91.077   8.563  1.00 47.98           N  
ATOM    767  CA  ASP A 145       5.556  91.637   7.426  1.00 53.63           C  
ATOM    768  C   ASP A 145       5.779  90.903   6.105  1.00 45.71           C  
ATOM    769  O   ASP A 145       6.779  91.144   5.416  1.00 40.92           O  
ATOM    770  CB  ASP A 145       5.896  93.128   7.225  1.00 60.69           C  
ATOM    771  CG  ASP A 145       5.127  93.776   6.035  1.00 68.10           C  
ATOM    772  OD1 ASP A 145       4.068  93.256   5.597  1.00 71.71           O  
ATOM    773  OD2 ASP A 145       5.599  94.815   5.527  1.00 73.59           O  
ATOM    774  N   GLU A 146       4.822  90.076   5.710  1.00 50.99           N  
ATOM    775  CA  GLU A 146       4.985  89.297   4.474  1.00 58.34           C  
ATOM    776  C   GLU A 146       5.256  90.189   3.261  1.00 58.08           C  
ATOM    777  O   GLU A 146       6.099  89.868   2.432  1.00 53.99           O  
ATOM    778  CB  GLU A 146       3.774  88.382   4.201  1.00 69.43           C  
ATOM    779  CG  GLU A 146       2.455  89.099   3.889  1.00 77.19           C  
ATOM    780  CD  GLU A 146       2.240  89.447   2.404  1.00 83.27           C  
ATOM    781  OE1 GLU A 146       1.453  90.387   2.138  1.00 83.08           O  
ATOM    782  OE2 GLU A 146       2.840  88.806   1.502  1.00 80.68           O  
ATOM    783  N   SER A 147       4.572  91.329   3.177  1.00 62.53           N  
ATOM    784  CA  SER A 147       4.612  92.155   1.958  1.00 61.04           C  
ATOM    785  C   SER A 147       6.038  92.525   1.590  1.00 56.81           C  
ATOM    786  O   SER A 147       6.364  92.661   0.410  1.00 55.67           O  
ATOM    787  CB  SER A 147       3.758  93.415   2.127  1.00 66.56           C  
ATOM    788  OG  SER A 147       4.188  94.173   3.238  1.00 66.26           O  
ATOM    789  N   ARG A 148       6.894  92.621   2.607  1.00 51.07           N  
ATOM    790  CA  ARG A 148       8.280  93.002   2.413  1.00 49.55           C  
ATOM    791  C   ARG A 148       9.279  91.874   2.659  1.00 48.80           C  
ATOM    792  O   ARG A 148      10.432  92.112   2.993  1.00 47.67           O  
ATOM    793  CB  ARG A 148       8.584  94.178   3.331  1.00 50.07           C  
ATOM    794  CG  ARG A 148       7.748  95.419   3.039  1.00 51.71           C  
ATOM    795  CD  ARG A 148       8.156  96.538   3.979  1.00 52.66           C  
ATOM    796  NE  ARG A 148       9.603  96.784   3.879  1.00 49.32           N  
ATOM    797  CZ  ARG A 148      10.342  97.389   4.811  1.00 46.63           C  
ATOM    798  NH1 ARG A 148       9.791  97.834   5.948  1.00 45.98           N  
ATOM    799  NH2 ARG A 148      11.651  97.545   4.602  1.00 48.38           N  
ATOM    800  N   VAL A 149       8.852  90.642   2.472  1.00 50.20           N  
ATOM    801  CA  VAL A 149       9.784  89.519   2.492  1.00 49.07           C  
ATOM    802  C   VAL A 149      10.958  89.749   1.553  1.00 46.90           C  
ATOM    803  O   VAL A 149      12.065  89.359   1.881  1.00 46.46           O  
ATOM    804  CB  VAL A 149       9.085  88.182   2.131  1.00 47.61           C  
ATOM    805  CG1 VAL A 149      10.092  87.044   1.961  1.00 45.39           C  
ATOM    806  CG2 VAL A 149       8.053  87.853   3.197  1.00 45.36           C  
ATOM    807  N   ASN A 150      10.739  90.374   0.398  1.00 53.04           N  
ATOM    808  CA  ASN A 150      11.833  90.595  -0.548  1.00 53.88           C  
ATOM    809  C   ASN A 150      12.923  91.506   0.025  1.00 49.22           C  
ATOM    810  O   ASN A 150      14.102  91.296  -0.244  1.00 49.14           O  
ATOM    811  CB  ASN A 150      11.312  91.137  -1.883  1.00 63.40           C  
ATOM    812  CG  ASN A 150      10.477  90.116  -2.653  1.00 75.16           C  
ATOM    813  OD1 ASN A 150      10.682  88.903  -2.543  1.00 80.48           O  
ATOM    814  ND2 ASN A 150       9.530  90.608  -3.452  1.00 83.95           N  
ATOM    815  N   ASP A 151      12.552  92.488   0.840  1.00 50.17           N  
ATOM    816  CA  ASP A 151      13.574  93.343   1.502  1.00 50.88           C  
ATOM    817  C   ASP A 151      14.401  92.549   2.566  1.00 49.42           C  
ATOM    818  O   ASP A 151      15.615  92.784   2.741  1.00 47.43           O  
ATOM    819  CB  ASP A 151      12.959  94.580   2.188  1.00 55.78           C  
ATOM    820  CG  ASP A 151      11.985  95.391   1.292  1.00 59.32           C  
ATOM    821  OD1 ASP A 151      12.176  95.458   0.057  1.00 55.87           O  
ATOM    822  OD2 ASP A 151      11.036  95.995   1.870  1.00 54.81           O  
ATOM    823  N   VAL A 152      13.771  91.630   3.303  1.00 41.56           N  
ATOM    824  CA  VAL A 152      14.561  90.853   4.261  1.00 40.21           C  
ATOM    825  C   VAL A 152      15.596  90.023   3.527  1.00 38.15           C  
ATOM    826  O   VAL A 152      16.772  89.988   3.910  1.00 36.30           O  
ATOM    827  CB  VAL A 152      13.717  89.925   5.143  1.00 40.42           C  
ATOM    828  CG1 VAL A 152      14.632  89.018   5.967  1.00 37.97           C  
ATOM    829  CG2 VAL A 152      12.877  90.743   6.091  1.00 42.06           C  
ATOM    830  N   GLU A 153      15.136  89.369   2.461  1.00 39.20           N  
ATOM    831  CA  GLU A 153      15.961  88.540   1.627  1.00 41.49           C  
ATOM    832  C   GLU A 153      17.204  89.287   1.136  1.00 45.32           C  
ATOM    833  O   GLU A 153      18.339  88.796   1.258  1.00 43.21           O  
ATOM    834  CB  GLU A 153      15.092  88.068   0.479  1.00 50.09           C  
ATOM    835  CG  GLU A 153      15.705  87.051  -0.469  1.00 58.44           C  
ATOM    836  CD  GLU A 153      14.703  86.550  -1.520  1.00 65.23           C  
ATOM    837  OE1 GLU A 153      13.531  87.004  -1.475  1.00 72.07           O  
ATOM    838  OE2 GLU A 153      15.078  85.698  -2.382  1.00 64.80           O  
ATOM    839  N   GLU A 154      16.990  90.488   0.600  1.00 48.69           N  
ATOM    840  CA  GLU A 154      18.078  91.308   0.044  1.00 52.03           C  
ATOM    841  C   GLU A 154      19.028  91.719   1.145  1.00 49.29           C  
ATOM    842  O   GLU A 154      20.244  91.697   0.982  1.00 48.44           O  
ATOM    843  CB  GLU A 154      17.502  92.562  -0.647  1.00 59.86           C  
ATOM    844  CG  GLU A 154      18.526  93.507  -1.284  1.00 68.59           C  
ATOM    845  CD  GLU A 154      17.899  94.555  -2.232  1.00 74.27           C  
ATOM    846  OE1 GLU A 154      16.664  94.800  -2.171  1.00 73.50           O  
ATOM    847  OE2 GLU A 154      18.650  95.137  -3.057  1.00 66.48           O  
ATOM    848  N   LEU A 155      18.474  92.118   2.276  1.00 44.18           N  
ATOM    849  CA  LEU A 155      19.319  92.447   3.400  1.00 44.19           C  
ATOM    850  C   LEU A 155      20.254  91.261   3.774  1.00 44.46           C  
ATOM    851  O   LEU A 155      21.474  91.448   3.937  1.00 44.24           O  
ATOM    852  CB  LEU A 155      18.460  92.898   4.589  1.00 44.39           C  
ATOM    853  CG  LEU A 155      19.123  92.680   5.947  1.00 47.54           C  
ATOM    854  CD1 LEU A 155      20.261  93.681   6.154  1.00 52.70           C  
ATOM    855  CD2 LEU A 155      18.123  92.779   7.071  1.00 50.23           C  
ATOM    856  N   VAL A 156      19.708  90.049   3.923  1.00 43.02           N  
ATOM    857  CA  VAL A 156      20.539  88.972   4.527  1.00 43.68           C  
ATOM    858  C   VAL A 156      21.520  88.348   3.561  1.00 41.54           C  
ATOM    859  O   VAL A 156      22.628  87.979   3.966  1.00 41.92           O  
ATOM    860  CB  VAL A 156      19.745  87.874   5.269  1.00 43.88           C  
ATOM    861  CG1 VAL A 156      18.923  88.492   6.395  1.00 42.15           C  
ATOM    862  CG2 VAL A 156      18.880  87.071   4.314  1.00 47.16           C  
ATOM    863  N   LYS A 157      21.127  88.247   2.295  1.00 43.32           N  
ATOM    864  CA  LYS A 157      22.050  87.839   1.234  1.00 49.23           C  
ATOM    865  C   LYS A 157      23.406  88.538   1.413  1.00 51.16           C  
ATOM    866  O   LYS A 157      24.457  87.906   1.330  1.00 54.73           O  
ATOM    867  CB  LYS A 157      21.495  88.249  -0.114  1.00 53.17           C  
ATOM    868  CG  LYS A 157      20.680  87.205  -0.831  1.00 60.04           C  
ATOM    869  CD  LYS A 157      20.382  87.668  -2.252  1.00 68.04           C  
ATOM    870  CE  LYS A 157      21.672  88.074  -2.972  1.00 71.68           C  
ATOM    871  NZ  LYS A 157      21.562  88.084  -4.453  1.00 71.08           N  
ATOM    872  N   LYS A 158      23.332  89.850   1.658  1.00 51.81           N  
ATOM    873  CA  LYS A 158      24.476  90.709   1.934  1.00 50.00           C  
ATOM    874  C   LYS A 158      24.999  90.617   3.336  1.00 40.30           C  
ATOM    875  O   LYS A 158      26.175  90.391   3.521  1.00 37.62           O  
ATOM    876  CB  LYS A 158      24.114  92.165   1.657  1.00 58.63           C  
ATOM    877  CG  LYS A 158      24.762  92.683   0.405  1.00 66.73           C  
ATOM    878  CD  LYS A 158      24.358  91.871  -0.829  1.00 80.74           C  
ATOM    879  CE  LYS A 158      25.562  91.597  -1.726  1.00 93.07           C  
ATOM    880  NZ  LYS A 158      26.459  92.790  -1.907  1.00 96.58           N  
ATOM    881  N   TYR A 159      24.157  90.809   4.343  1.00 38.24           N  
ATOM    882  CA  TYR A 159      24.666  90.694   5.743  1.00 40.36           C  
ATOM    883  C   TYR A 159      25.401  89.360   6.007  1.00 40.31           C  
ATOM    884  O   TYR A 159      26.398  89.354   6.715  1.00 39.30           O  
ATOM    885  CB  TYR A 159      23.546  90.926   6.774  1.00 44.25           C  
ATOM    886  CG  TYR A 159      24.021  91.137   8.192  1.00 51.04           C  
ATOM    887  CD1 TYR A 159      24.811  92.224   8.528  1.00 55.86           C  
ATOM    888  CD2 TYR A 159      23.659  90.258   9.206  1.00 57.36           C  
ATOM    889  CE1 TYR A 159      25.255  92.421   9.833  1.00 62.33           C  
ATOM    890  CE2 TYR A 159      24.087  90.443  10.513  1.00 59.23           C  
ATOM    891  CZ  TYR A 159      24.882  91.531  10.830  1.00 64.04           C  
ATOM    892  OH  TYR A 159      25.312  91.721  12.139  1.00 68.11           O  
ATOM    893  N   LEU A 160      24.950  88.261   5.380  1.00 38.34           N  
ATOM    894  CA  LEU A 160      25.503  86.899   5.622  1.00 38.97           C  
ATOM    895  C   LEU A 160      26.333  86.397   4.446  1.00 39.52           C  
ATOM    896  O   LEU A 160      26.533  85.199   4.282  1.00 34.03           O  
ATOM    897  CB  LEU A 160      24.361  85.889   5.872  1.00 39.71           C  
ATOM    898  CG  LEU A 160      23.537  86.115   7.148  1.00 43.59           C  
ATOM    899  CD1 LEU A 160      22.273  85.262   7.169  1.00 45.33           C  
ATOM    900  CD2 LEU A 160      24.357  85.855   8.397  1.00 44.12           C  
ATOM    901  N   GLU A 161      26.814  87.320   3.624  1.00 47.33           N  
ATOM    902  CA  GLU A 161      27.578  86.970   2.415  1.00 51.72           C  
ATOM    903  C   GLU A 161      28.754  86.047   2.732  1.00 43.65           C  
ATOM    904  O   GLU A 161      29.050  85.171   1.970  1.00 41.33           O  
ATOM    905  CB  GLU A 161      28.086  88.239   1.725  1.00 61.48           C  
ATOM    906  CG  GLU A 161      28.384  88.070   0.247  1.00 72.32           C  
ATOM    907  CD  GLU A 161      29.056  89.302  -0.354  1.00 80.19           C  
ATOM    908  OE1 GLU A 161      29.347  90.284   0.391  1.00 72.01           O  
ATOM    909  OE2 GLU A 161      29.295  89.275  -1.584  1.00 78.05           O  
ATOM    910  N   SER A 162      29.393  86.218   3.882  1.00 46.08           N  
ATOM    911  CA  SER A 162      30.593  85.434   4.219  1.00 44.20           C  
ATOM    912  C   SER A 162      30.353  83.966   4.632  1.00 49.01           C  
ATOM    913  O   SER A 162      31.309  83.194   4.772  1.00 48.89           O  
ATOM    914  CB  SER A 162      31.327  86.141   5.352  1.00 46.70           C  
ATOM    915  OG  SER A 162      30.393  86.618   6.324  1.00 58.21           O  
ATOM    916  N   CYS A 163      29.104  83.576   4.876  1.00 47.02           N  
ATOM    917  CA  CYS A 163      28.819  82.246   5.364  1.00 45.61           C  
ATOM    918  C   CYS A 163      27.741  81.440   4.582  1.00 39.03           C  
ATOM    919  O   CYS A 163      27.709  80.223   4.610  1.00 45.33           O  
ATOM    920  CB  CYS A 163      28.569  82.227   6.876  1.00 42.65           C  
ATOM    921  SG  CYS A 163      27.190  83.250   7.406  1.00 44.60           S  
ATOM    922  N   LEU A 164      26.923  82.149   3.835  1.00 34.08           N  
ATOM    923  CA  LEU A 164      25.685  81.680   3.321  1.00 35.20           C  
ATOM    924  C   LEU A 164      25.950  80.984   1.971  1.00 36.12           C  
ATOM    925  O   LEU A 164      26.754  81.484   1.188  1.00 36.20           O  
ATOM    926  CB  LEU A 164      24.746  82.809   3.195  1.00 38.04           C  
ATOM    927  CG  LEU A 164      23.332  82.470   2.757  1.00 43.56           C  
ATOM    928  CD1 LEU A 164      22.547  81.773   3.870  1.00 40.43           C  
ATOM    929  CD2 LEU A 164      22.676  83.757   2.329  1.00 39.80           C  
ATOM    930  N   LYS A 165      25.295  79.852   1.719  1.00 35.26           N  
ATOM    931  CA  LYS A 165      25.391  79.155   0.437  1.00 31.23           C  
ATOM    932  C   LYS A 165      24.248  79.490  -0.494  1.00 33.52           C  
ATOM    933  O   LYS A 165      24.445  79.562  -1.680  1.00 34.97           O  
ATOM    934  CB  LYS A 165      25.394  77.645   0.618  1.00 32.75           C  
ATOM    935  CG  LYS A 165      25.302  76.928  -0.736  1.00 35.22           C  
ATOM    936  CD  LYS A 165      25.708  75.471  -0.687  1.00 35.34           C  
ATOM    937  CE  LYS A 165      25.128  74.722  -1.878  1.00 34.88           C  
ATOM    938  NZ  LYS A 165      25.538  73.302  -1.861  1.00 36.66           N  
ATOM    939  N   SER A 166      23.030  79.625   0.027  1.00 36.21           N  
ATOM    940  CA  SER A 166      21.885  80.014  -0.810  1.00 34.00           C  
ATOM    941  C   SER A 166      20.665  80.317   0.015  1.00 33.34           C  
ATOM    942  O   SER A 166      20.618  80.119   1.228  1.00 29.56           O  
ATOM    943  CB  SER A 166      21.506  78.953  -1.873  1.00 32.56           C  
ATOM    944  OG  SER A 166      21.331  77.677  -1.336  1.00 36.68           O  
ATOM    945  N   LEU A 167      19.649  80.776  -0.662  1.00 33.68           N  
ATOM    946  CA  LEU A 167      18.462  81.145   0.035  1.00 38.48           C  
ATOM    947  C   LEU A 167      17.280  81.029  -0.874  1.00 39.65           C  
ATOM    948  O   LEU A 167      17.431  81.049  -2.113  1.00 39.94           O  
ATOM    949  CB  LEU A 167      18.692  82.517   0.629  1.00 40.04           C  
ATOM    950  CG  LEU A 167      17.804  83.718   0.490  1.00 47.96           C  
ATOM    951  CD1 LEU A 167      18.508  84.822   1.245  1.00 48.19           C  
ATOM    952  CD2 LEU A 167      17.599  84.113  -0.963  1.00 54.53           C  
ATOM    953  N   GLN A 168      16.107  80.859  -0.268  1.00 34.92           N  
ATOM    954  CA  GLN A 168      14.939  80.573  -1.036  1.00 40.02           C  
ATOM    955  C   GLN A 168      13.726  80.749  -0.160  1.00 37.44           C  
ATOM    956  O   GLN A 168      13.789  80.626   1.050  1.00 42.88           O  
ATOM    957  CB  GLN A 168      15.134  79.171  -1.611  1.00 43.81           C  
ATOM    958  CG  GLN A 168      13.947  78.310  -1.858  1.00 50.57           C  
ATOM    959  CD  GLN A 168      14.373  76.838  -1.839  1.00 58.75           C  
ATOM    960  OE1 GLN A 168      15.571  76.516  -1.655  1.00 58.33           O  
ATOM    961  NE2 GLN A 168      13.396  75.937  -1.991  1.00 55.55           N  
ATOM    962  N   ILE A 169      12.642  81.148  -0.774  1.00 34.26           N  
ATOM    963  CA  ILE A 169      11.407  81.407  -0.070  1.00 37.36           C  
ATOM    964  C   ILE A 169      10.606  80.131  -0.072  1.00 36.50           C  
ATOM    965  O   ILE A 169      10.446  79.524  -1.102  1.00 35.29           O  
ATOM    966  CB  ILE A 169      10.582  82.495  -0.759  1.00 38.25           C  
ATOM    967  CG1 ILE A 169      11.419  83.791  -0.880  1.00 38.90           C  
ATOM    968  CG2 ILE A 169       9.260  82.738  -0.028  1.00 39.59           C  
ATOM    969  CD1 ILE A 169      12.281  84.107   0.308  1.00 36.29           C  
ATOM    970  N   ILE A 170      10.142  79.719   1.098  1.00 35.22           N  
ATOM    971  CA  ILE A 170       9.346  78.519   1.211  1.00 32.85           C  
ATOM    972  C   ILE A 170       8.190  78.758   2.180  1.00 33.07           C  
ATOM    973  O   ILE A 170       8.124  79.798   2.868  1.00 28.07           O  
ATOM    974  CB  ILE A 170      10.202  77.322   1.650  1.00 35.27           C  
ATOM    975  CG1 ILE A 170      10.695  77.496   3.085  1.00 35.25           C  
ATOM    976  CG2 ILE A 170      11.388  77.131   0.702  1.00 36.45           C  
ATOM    977  CD1 ILE A 170       9.631  77.146   4.104  1.00 38.67           C  
ATOM    978  N   ARG A 171       7.263  77.805   2.171  1.00 29.90           N  
ATOM    979  CA  ARG A 171       6.053  77.877   2.948  1.00 30.56           C  
ATOM    980  C   ARG A 171       5.890  76.589   3.754  1.00 28.31           C  
ATOM    981  O   ARG A 171       6.119  75.481   3.226  1.00 25.42           O  
ATOM    982  CB  ARG A 171       4.879  78.033   2.022  1.00 35.11           C  
ATOM    983  CG  ARG A 171       4.769  79.402   1.360  1.00 39.78           C  
ATOM    984  CD  ARG A 171       4.329  79.283  -0.110  1.00 44.04           C  
ATOM    985  NE  ARG A 171       4.844  80.452  -0.811  1.00 49.26           N  
ATOM    986  CZ  ARG A 171       5.904  80.482  -1.603  1.00 47.95           C  
ATOM    987  NH1 ARG A 171       6.575  79.374  -1.906  1.00 51.30           N  
ATOM    988  NH2 ARG A 171       6.275  81.647  -2.122  1.00 53.29           N  
ATOM    989  N   LYS A 172       5.539  76.752   5.024  1.00 24.65           N  
ATOM    990  CA  LYS A 172       5.176  75.623   5.895  1.00 26.87           C  
ATOM    991  C   LYS A 172       3.859  75.912   6.607  1.00 26.32           C  
ATOM    992  O   LYS A 172       3.410  77.085   6.623  1.00 25.77           O  
ATOM    993  CB  LYS A 172       6.287  75.434   6.921  1.00 29.73           C  
ATOM    994  CG  LYS A 172       7.582  74.917   6.335  1.00 30.14           C  
ATOM    995  CD  LYS A 172       8.320  74.046   7.343  1.00 35.75           C  
ATOM    996  CE  LYS A 172       9.535  73.313   6.780  1.00 39.39           C  
ATOM    997  NZ  LYS A 172       9.300  72.772   5.396  1.00 41.24           N  
ATOM    998  N   GLU A 173       3.229  74.885   7.189  1.00 29.03           N  
ATOM    999  CA  GLU A 173       2.012  75.099   8.003  1.00 30.10           C  
ATOM   1000  C   GLU A 173       2.522  75.573   9.358  1.00 29.95           C  
ATOM   1001  O   GLU A 173       3.547  75.083   9.836  1.00 28.48           O  
ATOM   1002  CB  GLU A 173       1.142  73.849   8.220  1.00 37.12           C  
ATOM   1003  CG  GLU A 173       0.974  72.865   7.070  1.00 46.13           C  
ATOM   1004  CD  GLU A 173       0.598  73.503   5.725  1.00 57.95           C  
ATOM   1005  OE1 GLU A 173      -0.414  74.252   5.686  1.00 55.46           O  
ATOM   1006  OE2 GLU A 173       1.307  73.224   4.695  1.00 62.15           O  
ATOM   1007  N   ASP A 174       1.870  76.603   9.904  1.00 27.75           N  
ATOM   1008  CA  ASP A 174       2.145  77.163  11.228  1.00 27.03           C  
ATOM   1009  C   ASP A 174       0.867  77.017  12.067  1.00 25.98           C  
ATOM   1010  O   ASP A 174      -0.168  77.618  11.740  1.00 26.29           O  
ATOM   1011  CB  ASP A 174       2.508  78.621  11.102  1.00 27.86           C  
ATOM   1012  CG  ASP A 174       2.862  79.276  12.450  1.00 33.01           C  
ATOM   1013  OD1 ASP A 174       2.724  78.630  13.545  1.00 32.85           O  
ATOM   1014  OD2 ASP A 174       3.323  80.441  12.382  1.00 30.13           O  
ATOM   1015  N   LEU A 175       0.925  76.237  13.137  1.00 22.29           N  
ATOM   1016  CA  LEU A 175      -0.282  75.964  13.882  1.00 26.91           C  
ATOM   1017  C   LEU A 175      -0.702  77.084  14.877  1.00 27.93           C  
ATOM   1018  O   LEU A 175      -1.748  76.965  15.488  1.00 31.86           O  
ATOM   1019  CB  LEU A 175      -0.144  74.624  14.600  1.00 25.88           C  
ATOM   1020  CG  LEU A 175       0.151  73.422  13.698  1.00 24.54           C  
ATOM   1021  CD1 LEU A 175      -0.091  72.144  14.459  1.00 25.39           C  
ATOM   1022  CD2 LEU A 175      -0.705  73.431  12.443  1.00 25.52           C  
ATOM   1023  N   THR A 176       0.118  78.121  15.056  1.00 28.73           N  
ATOM   1024  CA  THR A 176      -0.296  79.344  15.793  1.00 31.43           C  
ATOM   1025  C   THR A 176      -1.012  80.385  14.935  1.00 32.95           C  
ATOM   1026  O   THR A 176      -1.490  81.368  15.465  1.00 38.61           O  
ATOM   1027  CB  THR A 176       0.901  80.087  16.369  1.00 28.42           C  
ATOM   1028  OG1 THR A 176       1.728  80.517  15.283  1.00 30.29           O  
ATOM   1029  CG2 THR A 176       1.711  79.173  17.335  1.00 29.64           C  
ATOM   1030  N   MET A 177      -1.080  80.169  13.629  1.00 34.13           N  
ATOM   1031  CA  MET A 177      -1.511  81.187  12.652  1.00 38.50           C  
ATOM   1032  C   MET A 177      -2.985  81.040  12.300  1.00 42.82           C  
ATOM   1033  O   MET A 177      -3.457  79.931  12.019  1.00 43.92           O  
ATOM   1034  CB  MET A 177      -0.631  81.090  11.377  1.00 36.38           C  
ATOM   1035  CG  MET A 177      -1.240  81.666  10.108  1.00 43.21           C  
ATOM   1036  SD  MET A 177      -0.163  81.721   8.656  1.00 44.23           S  
ATOM   1037  CE  MET A 177       1.333  82.332   9.399  1.00 47.28           C  
ATOM   1038  N   ASP A 178      -3.701  82.173  12.269  1.00 51.45           N  
ATOM   1039  CA  ASP A 178      -5.098  82.217  11.822  1.00 49.60           C  
ATOM   1040  C   ASP A 178      -5.291  81.715  10.414  1.00 47.19           C  
ATOM   1041  O   ASP A 178      -4.507  82.039   9.512  1.00 43.98           O  
ATOM   1042  CB  ASP A 178      -5.632  83.646  11.879  1.00 61.39           C  
ATOM   1043  CG  ASP A 178      -5.936  84.089  13.283  1.00 64.19           C  
ATOM   1044  OD1 ASP A 178      -6.414  83.249  14.094  1.00 67.50           O  
ATOM   1045  OD2 ASP A 178      -5.692  85.272  13.559  1.00 61.13           O  
ATOM   1046  N   ASN A 179      -6.349  80.917  10.252  1.00 46.90           N  
ATOM   1047  CA  ASN A 179      -6.735  80.259   8.986  1.00 46.43           C  
ATOM   1048  C   ASN A 179      -5.718  79.232   8.433  1.00 45.41           C  
ATOM   1049  O   ASN A 179      -5.771  78.856   7.231  1.00 44.42           O  
ATOM   1050  CB  ASN A 179      -7.142  81.292   7.913  1.00 54.56           C  
ATOM   1051  CG  ASN A 179      -8.137  82.319   8.441  1.00 55.30           C  
ATOM   1052  OD1 ASN A 179      -9.196  81.969   8.972  1.00 58.69           O  
ATOM   1053  ND2 ASN A 179      -7.778  83.583   8.341  1.00 57.90           N  
ATOM   1054  N   HIS A 180      -4.839  78.715   9.299  1.00 39.05           N  
ATOM   1055  CA  HIS A 180      -3.979  77.636   8.836  1.00 36.93           C  
ATOM   1056  C   HIS A 180      -4.830  76.398   8.450  1.00 31.29           C  
ATOM   1057  O   HIS A 180      -4.453  75.641   7.575  1.00 30.05           O  
ATOM   1058  CB  HIS A 180      -2.862  77.321   9.839  1.00 36.90           C  
ATOM   1059  CG  HIS A 180      -3.331  76.659  11.087  1.00 38.63           C  
ATOM   1060  ND1 HIS A 180      -3.603  77.367  12.243  1.00 39.05           N  
ATOM   1061  CD2 HIS A 180      -3.598  75.360  11.364  1.00 37.17           C  
ATOM   1062  CE1 HIS A 180      -4.024  76.536  13.180  1.00 35.81           C  
ATOM   1063  NE2 HIS A 180      -4.041  75.315  12.669  1.00 38.36           N  
ATOM   1064  N   LEU A 181      -5.996  76.245   9.057  1.00 32.33           N  
ATOM   1065  CA  LEU A 181      -6.959  75.144   8.759  1.00 37.52           C  
ATOM   1066  C   LEU A 181      -7.712  75.263   7.418  1.00 42.60           C  
ATOM   1067  O   LEU A 181      -8.385  74.302   6.976  1.00 34.99           O  
ATOM   1068  CB  LEU A 181      -8.030  75.075   9.882  1.00 38.58           C  
ATOM   1069  CG  LEU A 181      -7.508  74.597  11.262  1.00 42.27           C  
ATOM   1070  CD1 LEU A 181      -8.624  74.531  12.294  1.00 40.48           C  
ATOM   1071  CD2 LEU A 181      -6.751  73.264  11.145  1.00 39.42           C  
ATOM   1072  N   LEU A 182      -7.648  76.449   6.804  1.00 47.76           N  
ATOM   1073  CA  LEU A 182      -8.223  76.681   5.457  1.00 46.74           C  
ATOM   1074  C   LEU A 182      -7.140  76.673   4.401  1.00 46.28           C  
ATOM   1075  O   LEU A 182      -7.406  77.051   3.254  1.00 45.55           O  
ATOM   1076  CB  LEU A 182      -8.972  78.013   5.423  1.00 47.13           C  
ATOM   1077  CG  LEU A 182     -10.311  77.940   6.170  1.00 52.34           C  
ATOM   1078  CD1 LEU A 182     -10.976  79.318   6.236  1.00 50.80           C  
ATOM   1079  CD2 LEU A 182     -11.251  76.915   5.527  1.00 52.27           C  
ATOM   1080  N   GLY A 183      -5.925  76.255   4.809  1.00 38.47           N  
ATOM   1081  CA  GLY A 183      -4.790  76.085   3.919  1.00 36.04           C  
ATOM   1082  C   GLY A 183      -3.801  77.239   3.824  1.00 32.74           C  
ATOM   1083  O   GLY A 183      -2.786  77.114   3.138  1.00 36.50           O  
ATOM   1084  N   LEU A 184      -4.075  78.340   4.507  1.00 30.27           N  
ATOM   1085  CA  LEU A 184      -3.128  79.453   4.622  1.00 33.81           C  
ATOM   1086  C   LEU A 184      -1.794  79.019   5.252  1.00 33.82           C  
ATOM   1087  O   LEU A 184      -1.767  78.413   6.292  1.00 32.66           O  
ATOM   1088  CB  LEU A 184      -3.738  80.576   5.438  1.00 34.20           C  
ATOM   1089  CG  LEU A 184      -2.916  81.871   5.638  1.00 40.13           C  
ATOM   1090  CD1 LEU A 184      -2.248  82.412   4.380  1.00 41.18           C  
ATOM   1091  CD2 LEU A 184      -3.854  82.932   6.222  1.00 38.59           C  
ATOM   1092  N   GLN A 185      -0.689  79.324   4.592  1.00 36.04           N  
ATOM   1093  CA  GLN A 185       0.644  78.908   5.052  1.00 35.61           C  
ATOM   1094  C   GLN A 185       1.520  80.087   5.513  1.00 36.35           C  
ATOM   1095  O   GLN A 185       1.273  81.242   5.146  1.00 34.09           O  
ATOM   1096  CB  GLN A 185       1.336  78.184   3.908  1.00 36.95           C  
ATOM   1097  CG  GLN A 185       0.739  76.829   3.591  1.00 39.05           C  
ATOM   1098  CD  GLN A 185       1.468  76.088   2.472  1.00 39.44           C  
ATOM   1099  OE1 GLN A 185       1.653  76.612   1.356  1.00 43.62           O  
ATOM   1100  NE2 GLN A 185       1.894  74.877   2.764  1.00 36.41           N  
ATOM   1101  N   LYS A 186       2.562  79.794   6.285  1.00 35.39           N  
ATOM   1102  CA  LYS A 186       3.540  80.812   6.660  1.00 30.20           C  
ATOM   1103  C   LYS A 186       4.677  80.856   5.662  1.00 30.81           C  
ATOM   1104  O   LYS A 186       5.202  79.807   5.305  1.00 29.64           O  
ATOM   1105  CB  LYS A 186       4.136  80.531   8.022  1.00 30.14           C  
ATOM   1106  CG  LYS A 186       4.894  81.745   8.557  1.00 31.37           C  
ATOM   1107  CD  LYS A 186       5.533  81.411   9.874  1.00 32.84           C  
ATOM   1108  CE  LYS A 186       6.250  82.589  10.472  1.00 34.56           C  
ATOM   1109  NZ  LYS A 186       5.319  83.708  10.761  1.00 37.97           N  
ATOM   1110  N   THR A 187       5.086  82.066   5.252  1.00 31.47           N  
ATOM   1111  CA  THR A 187       6.152  82.234   4.257  1.00 32.60           C  
ATOM   1112  C   THR A 187       7.441  82.393   4.972  1.00 29.12           C  
ATOM   1113  O   THR A 187       7.524  83.191   5.884  1.00 29.16           O  
ATOM   1114  CB  THR A 187       5.952  83.505   3.408  1.00 36.13           C  
ATOM   1115  OG1 THR A 187       4.784  83.356   2.648  1.00 35.78           O  
ATOM   1116  CG2 THR A 187       7.083  83.689   2.411  1.00 39.03           C  
ATOM   1117  N   LEU A 188       8.467  81.654   4.580  1.00 29.49           N  
ATOM   1118  CA  LEU A 188       9.732  81.685   5.328  1.00 28.53           C  
ATOM   1119  C   LEU A 188      10.882  81.850   4.364  1.00 28.88           C  
ATOM   1120  O   LEU A 188      10.763  81.438   3.179  1.00 30.16           O  
ATOM   1121  CB  LEU A 188       9.929  80.387   6.146  1.00 31.39           C  
ATOM   1122  CG  LEU A 188       8.860  80.071   7.210  1.00 31.41           C  
ATOM   1123  CD1 LEU A 188       8.551  78.593   7.368  1.00 32.87           C  
ATOM   1124  CD2 LEU A 188       9.347  80.658   8.511  1.00 30.26           C  
ATOM   1125  N   ILE A 189      11.989  82.382   4.882  1.00 23.67           N  
ATOM   1126  CA  ILE A 189      13.244  82.329   4.182  1.00 26.93           C  
ATOM   1127  C   ILE A 189      14.103  81.172   4.660  1.00 24.66           C  
ATOM   1128  O   ILE A 189      14.544  81.172   5.784  1.00 24.05           O  
ATOM   1129  CB  ILE A 189      14.048  83.643   4.332  1.00 33.17           C  
ATOM   1130  CG1 ILE A 189      13.133  84.833   3.941  1.00 38.92           C  
ATOM   1131  CG2 ILE A 189      15.302  83.608   3.448  1.00 33.59           C  
ATOM   1132  CD1 ILE A 189      13.697  86.211   4.228  1.00 41.26           C  
ATOM   1133  N   LYS A 190      14.316  80.194   3.797  1.00 23.27           N  
ATOM   1134  CA  LYS A 190      15.248  79.100   4.056  1.00 25.06           C  
ATOM   1135  C   LYS A 190      16.688  79.446   3.704  1.00 25.09           C  
ATOM   1136  O   LYS A 190      16.985  79.822   2.572  1.00 24.85           O  
ATOM   1137  CB  LYS A 190      14.816  77.895   3.237  1.00 24.61           C  
ATOM   1138  CG  LYS A 190      15.669  76.677   3.384  1.00 25.56           C  
ATOM   1139  CD  LYS A 190      15.009  75.458   2.731  1.00 28.15           C  
ATOM   1140  CE  LYS A 190      16.004  74.290   2.677  1.00 30.14           C  
ATOM   1141  NZ  LYS A 190      15.368  72.978   2.355  1.00 31.02           N  
ATOM   1142  N   LEU A 191      17.588  79.277   4.669  1.00 26.05           N  
ATOM   1143  CA  LEU A 191      18.979  79.621   4.514  1.00 26.10           C  
ATOM   1144  C   LEU A 191      19.756  78.354   4.527  1.00 26.49           C  
ATOM   1145  O   LEU A 191      19.706  77.630   5.518  1.00 27.47           O  
ATOM   1146  CB  LEU A 191      19.472  80.472   5.683  1.00 28.46           C  
ATOM   1147  CG  LEU A 191      18.816  81.780   6.054  1.00 34.18           C  
ATOM   1148  CD1 LEU A 191      19.615  82.381   7.185  1.00 38.39           C  
ATOM   1149  CD2 LEU A 191      18.852  82.757   4.906  1.00 35.54           C  
ATOM   1150  N   SER A 192      20.499  78.089   3.446  1.00 28.07           N  
ATOM   1151  CA  SER A 192      21.322  76.886   3.340  1.00 26.82           C  
ATOM   1152  C   SER A 192      22.796  77.235   3.388  1.00 26.22           C  
ATOM   1153  O   SER A 192      23.247  78.357   3.002  1.00 23.81           O  
ATOM   1154  CB  SER A 192      21.055  76.149   2.033  1.00 25.82           C  
ATOM   1155  OG  SER A 192      19.714  75.942   1.906  1.00 25.07           O  
ATOM   1156  N   PHE A 193      23.535  76.232   3.801  1.00 25.46           N  
ATOM   1157  CA  PHE A 193      24.941  76.365   4.123  1.00 27.02           C  
ATOM   1158  C   PHE A 193      25.691  75.166   3.637  1.00 29.77           C  
ATOM   1159  O   PHE A 193      25.111  74.087   3.435  1.00 32.08           O  
ATOM   1160  CB  PHE A 193      25.099  76.516   5.628  1.00 24.89           C  
ATOM   1161  CG  PHE A 193      24.361  77.677   6.181  1.00 23.92           C  
ATOM   1162  CD1 PHE A 193      24.933  78.904   6.202  1.00 25.30           C  
ATOM   1163  CD2 PHE A 193      23.093  77.526   6.703  1.00 27.15           C  
ATOM   1164  CE1 PHE A 193      24.268  80.003   6.716  1.00 27.13           C  
ATOM   1165  CE2 PHE A 193      22.399  78.603   7.210  1.00 27.29           C  
ATOM   1166  CZ  PHE A 193      22.992  79.861   7.226  1.00 26.94           C  
ATOM   1167  N   VAL A 194      26.994  75.353   3.452  1.00 31.72           N  
ATOM   1168  CA  VAL A 194      27.883  74.328   2.932  1.00 30.52           C  
ATOM   1169  C   VAL A 194      28.170  73.339   4.003  1.00 28.12           C  
ATOM   1170  O   VAL A 194      28.347  72.163   3.731  1.00 32.71           O  
ATOM   1171  CB  VAL A 194      29.238  74.924   2.435  1.00 35.43           C  
ATOM   1172  CG1 VAL A 194      30.321  73.867   2.453  1.00 39.01           C  
ATOM   1173  CG2 VAL A 194      29.098  75.449   1.014  1.00 38.04           C  
ATOM   1174  N   ASN A 195      28.257  73.836   5.221  1.00 29.21           N  
ATOM   1175  CA  ASN A 195      28.487  73.014   6.364  1.00 28.26           C  
ATOM   1176  C   ASN A 195      28.007  73.639   7.667  1.00 28.02           C  
ATOM   1177  O   ASN A 195      27.521  74.771   7.713  1.00 28.57           O  
ATOM   1178  CB  ASN A 195      29.963  72.640   6.441  1.00 29.83           C  
ATOM   1179  CG  ASN A 195      30.867  73.825   6.686  1.00 31.04           C  
ATOM   1180  OD1 ASN A 195      30.571  74.685   7.499  1.00 32.59           O  
ATOM   1181  ND2 ASN A 195      32.050  73.822   6.024  1.00 33.27           N  
ATOM   1182  N   SER A 196      28.135  72.852   8.715  1.00 28.90           N  
ATOM   1183  CA  SER A 196      27.638  73.176  10.038  1.00 31.69           C  
ATOM   1184  C   SER A 196      28.345  74.389  10.662  1.00 30.61           C  
ATOM   1185  O   SER A 196      27.711  75.234  11.290  1.00 28.21           O  
ATOM   1186  CB  SER A 196      27.744  71.910  10.931  1.00 31.19           C  
ATOM   1187  OG  SER A 196      26.718  70.952  10.610  1.00 27.42           O  
ATOM   1188  N   ASN A 197      29.646  74.515  10.439  1.00 34.63           N  
ATOM   1189  CA  ASN A 197      30.398  75.705  10.897  1.00 36.21           C  
ATOM   1190  C   ASN A 197      29.835  76.974  10.314  1.00 35.06           C  
ATOM   1191  O   ASN A 197      29.717  77.968  11.002  1.00 37.95           O  
ATOM   1192  CB  ASN A 197      31.858  75.639  10.480  1.00 39.47           C  
ATOM   1193  CG  ASN A 197      32.548  74.396  10.972  1.00 44.80           C  
ATOM   1194  OD1 ASN A 197      32.274  73.927  12.065  1.00 52.47           O  
ATOM   1195  ND2 ASN A 197      33.442  73.851  10.165  1.00 47.90           N  
ATOM   1196  N   GLN A 198      29.519  76.961   9.029  1.00 34.60           N  
ATOM   1197  CA  GLN A 198      28.981  78.159   8.406  1.00 35.42           C  
ATOM   1198  C   GLN A 198      27.586  78.456   8.970  1.00 35.55           C  
ATOM   1199  O   GLN A 198      27.244  79.623   9.170  1.00 34.21           O  
ATOM   1200  CB  GLN A 198      28.894  78.010   6.883  1.00 37.00           C  
ATOM   1201  CG  GLN A 198      30.215  77.806   6.162  1.00 39.31           C  
ATOM   1202  CD  GLN A 198      31.059  79.054   6.150  1.00 41.35           C  
ATOM   1203  OE1 GLN A 198      31.457  79.526   7.188  1.00 40.57           O  
ATOM   1204  NE2 GLN A 198      31.318  79.607   4.966  1.00 47.36           N  
ATOM   1205  N   LEU A 199      26.789  77.401   9.225  1.00 29.86           N  
ATOM   1206  CA  LEU A 199      25.460  77.585   9.822  1.00 29.78           C  
ATOM   1207  C   LEU A 199      25.584  78.372  11.143  1.00 30.80           C  
ATOM   1208  O   LEU A 199      24.820  79.324  11.372  1.00 26.11           O  
ATOM   1209  CB  LEU A 199      24.725  76.247  10.022  1.00 29.63           C  
ATOM   1210  CG  LEU A 199      23.251  76.326  10.461  1.00 29.27           C  
ATOM   1211  CD1 LEU A 199      22.439  75.146   9.937  1.00 31.03           C  
ATOM   1212  CD2 LEU A 199      23.129  76.387  11.971  1.00 28.97           C  
ATOM   1213  N   PHE A 200      26.570  77.986  11.961  1.00 32.61           N  
ATOM   1214  CA  PHE A 200      26.766  78.539  13.286  1.00 38.24           C  
ATOM   1215  C   PHE A 200      27.218  80.005  13.218  1.00 38.15           C  
ATOM   1216  O   PHE A 200      26.820  80.802  14.065  1.00 37.94           O  
ATOM   1217  CB  PHE A 200      27.742  77.668  14.077  1.00 45.87           C  
ATOM   1218  CG  PHE A 200      27.703  77.900  15.566  1.00 61.27           C  
ATOM   1219  CD1 PHE A 200      26.675  77.361  16.349  1.00 70.67           C  
ATOM   1220  CD2 PHE A 200      28.703  78.640  16.207  1.00 66.84           C  
ATOM   1221  CE1 PHE A 200      26.641  77.570  17.733  1.00 73.04           C  
ATOM   1222  CE2 PHE A 200      28.667  78.850  17.583  1.00 68.71           C  
ATOM   1223  CZ  PHE A 200      27.637  78.317  18.346  1.00 73.40           C  
ATOM   1224  N   GLU A 201      27.977  80.375  12.187  1.00 38.04           N  
ATOM   1225  CA  GLU A 201      28.327  81.780  11.930  1.00 37.41           C  
ATOM   1226  C   GLU A 201      27.106  82.551  11.550  1.00 33.73           C  
ATOM   1227  O   GLU A 201      26.944  83.705  11.919  1.00 39.83           O  
ATOM   1228  CB  GLU A 201      29.357  81.937  10.804  1.00 42.42           C  
ATOM   1229  CG  GLU A 201      30.712  81.259  11.033  1.00 47.33           C  
ATOM   1230  CD  GLU A 201      31.497  81.787  12.240  1.00 55.21           C  
ATOM   1231  OE1 GLU A 201      31.474  83.026  12.509  1.00 56.90           O  
ATOM   1232  OE2 GLU A 201      32.161  80.959  12.926  1.00 60.94           O  
ATOM   1233  N   ALA A 202      26.202  81.936  10.818  1.00 34.71           N  
ATOM   1234  CA  ALA A 202      25.003  82.670  10.500  1.00 31.78           C  
ATOM   1235  C   ALA A 202      24.283  82.945  11.777  1.00 31.75           C  
ATOM   1236  O   ALA A 202      23.723  84.013  11.930  1.00 34.27           O  
ATOM   1237  CB  ALA A 202      24.125  81.929   9.534  1.00 31.40           C  
ATOM   1238  N   ARG A 203      24.239  81.981  12.695  1.00 30.55           N  
ATOM   1239  CA  ARG A 203      23.471  82.214  13.926  1.00 33.46           C  
ATOM   1240  C   ARG A 203      24.065  83.338  14.796  1.00 37.09           C  
ATOM   1241  O   ARG A 203      23.313  84.104  15.414  1.00 37.67           O  
ATOM   1242  CB  ARG A 203      23.331  80.954  14.769  1.00 30.99           C  
ATOM   1243  CG  ARG A 203      22.395  79.921  14.188  1.00 30.36           C  
ATOM   1244  CD  ARG A 203      22.512  78.657  14.997  1.00 32.26           C  
ATOM   1245  NE  ARG A 203      22.175  78.924  16.398  1.00 35.89           N  
ATOM   1246  CZ  ARG A 203      22.230  78.028  17.368  1.00 36.28           C  
ATOM   1247  NH1 ARG A 203      22.538  76.774  17.111  1.00 37.16           N  
ATOM   1248  NH2 ARG A 203      21.899  78.382  18.597  1.00 38.97           N  
ATOM   1249  N   LYS A 204      25.397  83.387  14.862  1.00 40.03           N  
ATOM   1250  CA  LYS A 204      26.133  84.429  15.591  1.00 44.48           C  
ATOM   1251  C   LYS A 204      25.937  85.839  15.016  1.00 43.73           C  
ATOM   1252  O   LYS A 204      25.899  86.822  15.753  1.00 46.46           O  
ATOM   1253  CB  LYS A 204      27.615  84.116  15.542  1.00 49.07           C  
ATOM   1254  CG  LYS A 204      28.095  83.140  16.600  1.00 52.90           C  
ATOM   1255  CD  LYS A 204      29.351  82.378  16.153  1.00 58.94           C  
ATOM   1256  CE  LYS A 204      30.402  83.277  15.504  1.00 63.14           C  
ATOM   1257  NZ  LYS A 204      31.732  82.600  15.351  1.00 65.89           N  
ATOM   1258  N   LEU A 205      25.841  85.948  13.698  1.00 43.22           N  
ATOM   1259  CA  LEU A 205      25.501  87.223  13.067  1.00 40.10           C  
ATOM   1260  C   LEU A 205      24.045  87.627  13.304  1.00 40.97           C  
ATOM   1261  O   LEU A 205      23.738  88.808  13.453  1.00 39.56           O  
ATOM   1262  CB  LEU A 205      25.780  87.138  11.584  1.00 42.90           C  
ATOM   1263  CG  LEU A 205      27.271  87.084  11.260  1.00 39.10           C  
ATOM   1264  CD1 LEU A 205      27.504  86.577   9.855  1.00 39.86           C  
ATOM   1265  CD2 LEU A 205      27.865  88.471  11.412  1.00 38.36           C  
ATOM   1266  N   LEU A 206      23.145  86.654  13.358  1.00 38.08           N  
ATOM   1267  CA  LEU A 206      21.721  86.976  13.471  1.00 37.43           C  
ATOM   1268  C   LEU A 206      21.230  87.158  14.872  1.00 38.38           C  
ATOM   1269  O   LEU A 206      20.338  87.951  15.094  1.00 38.14           O  
ATOM   1270  CB  LEU A 206      20.870  85.928  12.785  1.00 39.02           C  
ATOM   1271  CG  LEU A 206      21.132  85.858  11.273  1.00 40.78           C  
ATOM   1272  CD1 LEU A 206      20.364  84.722  10.623  1.00 39.38           C  
ATOM   1273  CD2 LEU A 206      20.772  87.166  10.599  1.00 38.72           C  
ATOM   1274  N   ARG A 207      21.809  86.449  15.836  1.00 44.16           N  
ATOM   1275  CA  ARG A 207      21.325  86.550  17.214  1.00 43.44           C  
ATOM   1276  C   ARG A 207      21.349  87.988  17.738  1.00 41.31           C  
ATOM   1277  O   ARG A 207      20.426  88.362  18.429  1.00 42.21           O  
ATOM   1278  CB  ARG A 207      22.094  85.623  18.177  1.00 46.41           C  
ATOM   1279  CG  ARG A 207      21.518  85.541  19.599  1.00 47.20           C  
ATOM   1280  CD  ARG A 207      19.993  85.356  19.714  1.00 45.70           C  
ATOM   1281  NE  ARG A 207      19.565  84.069  19.182  1.00 47.21           N  
ATOM   1282  CZ  ARG A 207      18.302  83.611  19.123  1.00 47.03           C  
ATOM   1283  NH1 ARG A 207      17.268  84.324  19.564  1.00 44.10           N  
ATOM   1284  NH2 ARG A 207      18.071  82.396  18.608  1.00 45.83           N  
ATOM   1285  N   PRO A 208      22.402  88.767  17.446  1.00 39.54           N  
ATOM   1286  CA  PRO A 208      22.443  90.158  17.906  1.00 41.65           C  
ATOM   1287  C   PRO A 208      21.339  91.021  17.295  1.00 42.01           C  
ATOM   1288  O   PRO A 208      20.785  91.888  17.945  1.00 32.15           O  
ATOM   1289  CB  PRO A 208      23.835  90.652  17.433  1.00 41.88           C  
ATOM   1290  CG  PRO A 208      24.653  89.422  17.424  1.00 41.80           C  
ATOM   1291  CD  PRO A 208      23.716  88.346  16.925  1.00 42.98           C  
ATOM   1292  N   ILE A 209      21.025  90.799  16.038  1.00 41.61           N  
ATOM   1293  CA  ILE A 209      19.944  91.560  15.461  1.00 42.94           C  
ATOM   1294  C   ILE A 209      18.645  91.343  16.268  1.00 43.01           C  
ATOM   1295  O   ILE A 209      17.940  92.305  16.616  1.00 35.90           O  
ATOM   1296  CB  ILE A 209      19.762  91.167  13.984  1.00 43.89           C  
ATOM   1297  CG1 ILE A 209      20.947  91.701  13.158  1.00 44.47           C  
ATOM   1298  CG2 ILE A 209      18.416  91.637  13.484  1.00 43.46           C  
ATOM   1299  CD1 ILE A 209      20.858  91.381  11.682  1.00 48.36           C  
ATOM   1300  N   LEU A 210      18.367  90.078  16.585  1.00 40.66           N  
ATOM   1301  CA  LEU A 210      17.135  89.679  17.272  1.00 41.74           C  
ATOM   1302  C   LEU A 210      17.141  90.189  18.704  1.00 43.52           C  
ATOM   1303  O   LEU A 210      16.089  90.596  19.213  1.00 47.79           O  
ATOM   1304  CB  LEU A 210      16.952  88.125  17.251  1.00 39.37           C  
ATOM   1305  CG  LEU A 210      16.577  87.351  15.974  1.00 36.33           C  
ATOM   1306  CD1 LEU A 210      16.564  85.860  16.240  1.00 37.94           C  
ATOM   1307  CD2 LEU A 210      15.212  87.712  15.447  1.00 39.14           C  
ATOM   1308  N   GLN A 211      18.313  90.148  19.348  1.00 43.12           N  
ATOM   1309  CA  GLN A 211      18.549  90.834  20.632  1.00 48.44           C  
ATOM   1310  C   GLN A 211      18.211  92.332  20.552  1.00 47.38           C  
ATOM   1311  O   GLN A 211      17.295  92.770  21.205  1.00 47.99           O  
ATOM   1312  CB  GLN A 211      20.000  90.659  21.091  1.00 48.14           C  
ATOM   1313  CG  GLN A 211      20.318  89.251  21.563  1.00 57.18           C  
ATOM   1314  CD  GLN A 211      21.798  89.008  21.793  1.00 61.71           C  
ATOM   1315  OE1 GLN A 211      22.660  89.842  21.471  1.00 63.87           O  
ATOM   1316  NE2 GLN A 211      22.102  87.855  22.363  1.00 71.58           N  
ATOM   1317  N   ASP A 212      18.943  93.085  19.727  1.00 46.78           N  
ATOM   1318  CA  ASP A 212      18.718  94.522  19.491  1.00 45.38           C  
ATOM   1319  C   ASP A 212      17.235  94.823  19.216  1.00 46.68           C  
ATOM   1320  O   ASP A 212      16.673  95.752  19.818  1.00 45.97           O  
ATOM   1321  CB  ASP A 212      19.633  95.014  18.351  1.00 47.96           C  
ATOM   1322  CG  ASP A 212      19.437  96.501  18.009  1.00 54.73           C  
ATOM   1323  OD1 ASP A 212      18.331  96.894  17.587  1.00 67.00           O  
ATOM   1324  OD2 ASP A 212      20.405  97.291  18.115  1.00 58.94           O  
ATOM   1325  N   ASN A 213      16.582  94.030  18.362  1.00 44.99           N  
ATOM   1326  CA  ASN A 213      15.140  94.247  18.053  1.00 45.75           C  
ATOM   1327  C   ASN A 213      14.224  94.176  19.285  1.00 42.98           C  
ATOM   1328  O   ASN A 213      13.287  94.935  19.414  1.00 46.06           O  
ATOM   1329  CB  ASN A 213      14.596  93.243  16.997  1.00 45.91           C  
ATOM   1330  CG  ASN A 213      15.055  93.539  15.558  1.00 49.27           C  
ATOM   1331  OD1 ASN A 213      15.814  94.481  15.274  1.00 46.82           O  
ATOM   1332  ND2 ASN A 213      14.574  92.716  14.635  1.00 48.76           N  
ATOM   1333  N   ALA A 214      14.476  93.243  20.186  1.00 44.07           N  
ATOM   1334  CA  ALA A 214      13.600  93.069  21.347  1.00 43.59           C  
ATOM   1335  C   ALA A 214      14.012  93.981  22.533  1.00 46.41           C  
ATOM   1336  O   ALA A 214      13.230  94.188  23.454  1.00 43.45           O  
ATOM   1337  CB  ALA A 214      13.594  91.596  21.755  1.00 43.06           C  
ATOM   1338  N   ASN A 215      15.237  94.510  22.479  1.00 50.02           N  
ATOM   1339  CA  ASN A 215      15.919  95.163  23.605  1.00 58.22           C  
ATOM   1340  C   ASN A 215      15.876  96.682  23.646  1.00 61.37           C  
ATOM   1341  O   ASN A 215      15.827  97.252  24.729  1.00 58.47           O  
ATOM   1342  CB  ASN A 215      17.435  94.866  23.560  1.00 62.94           C  
ATOM   1343  CG  ASN A 215      17.855  93.754  24.479  1.00 70.40           C  
ATOM   1344  OD1 ASN A 215      17.025  92.983  24.970  1.00 78.96           O  
ATOM   1345  ND2 ASN A 215      19.171  93.650  24.712  1.00 71.68           N  
ATOM   1346  N   ASN A 216      16.067  97.337  22.502  1.00 68.99           N  
ATOM   1347  CA  ASN A 216      16.207  98.798  22.511  1.00 77.86           C  
ATOM   1348  C   ASN A 216      15.378  99.560  21.482  1.00 70.37           C  
ATOM   1349  O   ASN A 216      15.310  99.226  20.291  1.00 67.24           O  
ATOM   1350  CB  ASN A 216      17.687  99.265  22.506  1.00 84.01           C  
ATOM   1351  CG  ASN A 216      18.439  98.853  21.263  1.00 87.54           C  
ATOM   1352  OD1 ASN A 216      18.337  99.488  20.205  1.00 89.37           O  
ATOM   1353  ND2 ASN A 216      19.230  97.794  21.392  1.00 89.57           N  
ATOM   1354  N   ASN A 217      14.729 100.580  22.022  1.00 63.87           N  
ATOM   1355  CA  ASN A 217      14.062 101.605  21.273  1.00 62.51           C  
ATOM   1356  C   ASN A 217      15.031 102.696  20.758  1.00 59.49           C  
ATOM   1357  O   ASN A 217      15.696 103.456  21.522  1.00 47.09           O  
ATOM   1358  CB  ASN A 217      12.998 102.230  22.157  1.00 68.22           C  
ATOM   1359  CG  ASN A 217      12.078 103.141  21.391  1.00 69.19           C  
ATOM   1360  OD1 ASN A 217      12.230 104.367  21.431  1.00 66.42           O  
ATOM   1361  ND2 ASN A 217      11.130 102.547  20.663  1.00 66.14           N  
ATOM   1362  N   VAL A 218      15.141 102.754  19.440  1.00 58.56           N  
ATOM   1363  CA  VAL A 218      15.998 103.765  18.839  1.00 59.33           C  
ATOM   1364  C   VAL A 218      15.083 104.880  18.378  1.00 51.23           C  
ATOM   1365  O   VAL A 218      14.349 104.743  17.380  1.00 48.33           O  
ATOM   1366  CB  VAL A 218      16.873 103.219  17.681  1.00 62.45           C  
ATOM   1367  CG1 VAL A 218      17.916 104.267  17.270  1.00 60.15           C  
ATOM   1368  CG2 VAL A 218      17.544 101.904  18.087  1.00 60.56           C  
ATOM   1369  N   GLN A 219      15.089 105.966  19.142  1.00 51.30           N  
ATOM   1370  CA  GLN A 219      14.378 107.170  18.725  1.00 52.95           C  
ATOM   1371  C   GLN A 219      15.381 108.196  18.248  1.00 46.29           C  
ATOM   1372  O   GLN A 219      16.375 108.446  18.945  1.00 45.49           O  
ATOM   1373  CB  GLN A 219      13.618 107.758  19.876  1.00 59.07           C  
ATOM   1374  CG  GLN A 219      12.129 107.520  19.847  1.00 62.77           C  
ATOM   1375  CD  GLN A 219      11.515 108.293  20.975  1.00 63.52           C  
ATOM   1376  OE1 GLN A 219      12.240 109.019  21.690  1.00 64.40           O  
ATOM   1377  NE2 GLN A 219      10.208 108.152  21.168  1.00 61.78           N  
ATOM   1378  N   ARG A 220      15.113 108.767  17.078  1.00 38.26           N  
ATOM   1379  CA  ARG A 220      15.895 109.861  16.537  1.00 40.74           C  
ATOM   1380  C   ARG A 220      14.987 111.069  16.376  1.00 35.02           C  
ATOM   1381  O   ARG A 220      15.015 111.954  17.219  1.00 32.08           O  
ATOM   1382  CB  ARG A 220      16.541 109.483  15.203  1.00 52.10           C  
ATOM   1383  CG  ARG A 220      15.934 108.283  14.507  1.00 56.19           C  
ATOM   1384  CD  ARG A 220      16.665 107.037  14.977  1.00 64.59           C  
ATOM   1385  NE  ARG A 220      17.946 106.936  14.296  1.00 64.33           N  
ATOM   1386  CZ  ARG A 220      18.072 106.584  13.022  1.00 58.53           C  
ATOM   1387  NH1 ARG A 220      17.002 106.294  12.289  1.00 54.26           N  
ATOM   1388  NH2 ARG A 220      19.280 106.520  12.485  1.00 60.06           N  
ATOM   1389  N   ASN A 221      14.163 111.058  15.328  1.00 28.97           N  
ATOM   1390  CA  ASN A 221      13.238 112.116  15.048  1.00 30.12           C  
ATOM   1391  C   ASN A 221      11.969 111.705  15.750  1.00 29.91           C  
ATOM   1392  O   ASN A 221      11.254 110.826  15.277  1.00 30.56           O  
ATOM   1393  CB  ASN A 221      13.005 112.237  13.557  1.00 27.77           C  
ATOM   1394  CG  ASN A 221      12.163 113.433  13.177  1.00 29.40           C  
ATOM   1395  OD1 ASN A 221      11.434 114.070  13.990  1.00 26.90           O  
ATOM   1396  ND2 ASN A 221      12.264 113.772  11.900  1.00 30.40           N  
ATOM   1397  N   ILE A 222      11.717 112.296  16.913  1.00 27.59           N  
ATOM   1398  CA  ILE A 222      10.533 111.947  17.664  1.00 22.78           C  
ATOM   1399  C   ILE A 222       9.261 112.439  16.973  1.00 22.04           C  
ATOM   1400  O   ILE A 222       8.162 112.019  17.344  1.00 22.80           O  
ATOM   1401  CB  ILE A 222      10.566 112.550  19.040  1.00 22.75           C  
ATOM   1402  CG1 ILE A 222      10.446 114.081  18.950  1.00 22.33           C  
ATOM   1403  CG2 ILE A 222      11.846 112.143  19.749  1.00 23.62           C  
ATOM   1404  CD1 ILE A 222      10.375 114.721  20.305  1.00 24.99           C  
ATOM   1405  N   TYR A 223       9.398 113.311  16.002  1.00 22.53           N  
ATOM   1406  CA  TYR A 223       8.273 113.768  15.232  1.00 25.99           C  
ATOM   1407  C   TYR A 223       7.983 112.920  13.994  1.00 33.69           C  
ATOM   1408  O   TYR A 223       7.065 113.195  13.277  1.00 34.08           O  
ATOM   1409  CB  TYR A 223       8.398 115.251  14.862  1.00 28.00           C  
ATOM   1410  CG  TYR A 223       8.623 116.178  16.006  1.00 23.37           C  
ATOM   1411  CD1 TYR A 223       7.772 116.196  17.079  1.00 20.96           C  
ATOM   1412  CD2 TYR A 223       9.694 117.032  16.013  1.00 22.33           C  
ATOM   1413  CE1 TYR A 223       7.984 117.026  18.124  1.00 19.58           C  
ATOM   1414  CE2 TYR A 223       9.909 117.868  17.058  1.00 21.15           C  
ATOM   1415  CZ  TYR A 223       9.049 117.852  18.112  1.00 19.54           C  
ATOM   1416  OH  TYR A 223       9.283 118.663  19.126  1.00 17.54           O  
ATOM   1417  N   ASN A 224       8.773 111.895  13.754  1.00 38.68           N  
ATOM   1418  CA  ASN A 224       8.572 111.067  12.597  1.00 46.33           C  
ATOM   1419  C   ASN A 224       7.741 109.817  12.831  1.00 54.50           C  
ATOM   1420  O   ASN A 224       6.527 109.778  12.552  1.00 55.11           O  
ATOM   1421  CB  ASN A 224       9.907 110.741  11.969  1.00 46.97           C  
ATOM   1422  CG  ASN A 224       9.804 109.750  10.861  1.00 47.18           C  
ATOM   1423  OD1 ASN A 224      10.711 108.984  10.634  1.00 49.30           O  
ATOM   1424  ND2 ASN A 224       8.718 109.772  10.165  1.00 43.07           N  
ATOM   1425  N   VAL A 225       8.426 108.803  13.332  1.00 63.83           N  
ATOM   1426  CA  VAL A 225       7.896 107.467  13.442  1.00 81.53           C  
ATOM   1427  C   VAL A 225       7.176 107.176  14.761  1.00 82.04           C  
ATOM   1428  O   VAL A 225       6.176 106.470  14.789  1.00 75.01           O  
ATOM   1429  CB  VAL A 225       8.983 106.404  13.127  1.00 86.55           C  
ATOM   1430  CG1 VAL A 225      10.280 106.702  13.836  1.00 83.48           C  
ATOM   1431  CG2 VAL A 225       8.511 105.014  13.464  1.00 91.24           C  
ATOM   1432  N   LYS A 232       9.519 104.938   6.212  1.00 76.28           N  
ATOM   1433  CA  LYS A 232       9.956 103.735   5.511  1.00 84.89           C  
ATOM   1434  C   LYS A 232      10.945 102.866   6.357  1.00 92.15           C  
ATOM   1435  O   LYS A 232      12.177 102.965   6.201  1.00 82.77           O  
ATOM   1436  CB  LYS A 232      10.545 104.141   4.147  1.00 83.54           C  
ATOM   1437  CG  LYS A 232      11.208 103.026   3.341  1.00 91.20           C  
ATOM   1438  CD  LYS A 232      10.485 101.682   3.442  1.00 90.52           C  
ATOM   1439  CE  LYS A 232      11.241 100.570   2.730  1.00 90.94           C  
ATOM   1440  NZ  LYS A 232      10.647 100.278   1.396  1.00 91.45           N  
ATOM   1441  N   VAL A 233      10.386 102.001   7.223  1.00 93.72           N  
ATOM   1442  CA  VAL A 233      11.167 101.146   8.175  1.00 89.92           C  
ATOM   1443  C   VAL A 233      12.284 100.300   7.490  1.00 89.45           C  
ATOM   1444  O   VAL A 233      12.256 100.026   6.276  1.00 83.54           O  
ATOM   1445  CB  VAL A 233      10.224 100.299   9.123  1.00 79.97           C  
ATOM   1446  CG1 VAL A 233      10.851  98.997   9.600  1.00 71.70           C  
ATOM   1447  CG2 VAL A 233       9.797 101.122  10.345  1.00 78.89           C  
ATOM   1448  N   ASP A 234      13.295  99.947   8.280  1.00 82.23           N  
ATOM   1449  CA  ASP A 234      14.470  99.278   7.770  1.00 77.58           C  
ATOM   1450  C   ASP A 234      14.366  97.759   7.945  1.00 70.53           C  
ATOM   1451  O   ASP A 234      13.600  97.239   8.765  1.00 58.77           O  
ATOM   1452  CB  ASP A 234      15.736  99.830   8.440  1.00 84.54           C  
ATOM   1453  CG  ASP A 234      15.995  99.223   9.819  1.00 93.60           C  
ATOM   1454  OD1 ASP A 234      15.052  99.134  10.648  1.00 91.73           O  
ATOM   1455  OD2 ASP A 234      17.161  98.831  10.068  1.00100.88           O  
ATOM   1456  N   ALA A 235      15.183  97.062   7.173  1.00 59.73           N  
ATOM   1457  CA  ALA A 235      15.031  95.646   6.997  1.00 59.29           C  
ATOM   1458  C   ALA A 235      15.196  94.836   8.318  1.00 53.32           C  
ATOM   1459  O   ALA A 235      14.488  93.862   8.542  1.00 49.36           O  
ATOM   1460  CB  ALA A 235      16.019  95.187   5.929  1.00 59.14           C  
ATOM   1461  N   LYS A 236      16.091  95.260   9.199  1.00 45.77           N  
ATOM   1462  CA  LYS A 236      16.408  94.454  10.336  1.00 48.35           C  
ATOM   1463  C   LYS A 236      15.172  94.175  11.142  1.00 47.89           C  
ATOM   1464  O   LYS A 236      15.000  93.105  11.665  1.00 48.68           O  
ATOM   1465  CB  LYS A 236      17.441  95.128  11.222  1.00 51.42           C  
ATOM   1466  CG  LYS A 236      18.830  95.224  10.622  1.00 54.81           C  
ATOM   1467  CD  LYS A 236      19.775  95.911  11.602  1.00 59.57           C  
ATOM   1468  CE  LYS A 236      20.617  96.983  10.926  1.00 67.67           C  
ATOM   1469  NZ  LYS A 236      21.545  96.419   9.903  1.00 71.09           N  
ATOM   1470  N   HIS A 237      14.281  95.134  11.250  1.00 49.78           N  
ATOM   1471  CA  HIS A 237      13.210  94.950  12.187  1.00 50.00           C  
ATOM   1472  C   HIS A 237      12.103  94.086  11.656  1.00 45.58           C  
ATOM   1473  O   HIS A 237      11.154  93.817  12.390  1.00 34.88           O  
ATOM   1474  CB  HIS A 237      12.688  96.296  12.691  1.00 54.91           C  
ATOM   1475  CG  HIS A 237      13.563  96.899  13.748  1.00 59.60           C  
ATOM   1476  ND1 HIS A 237      13.209  96.927  15.087  1.00 59.56           N  
ATOM   1477  CD2 HIS A 237      14.791  97.464  13.666  1.00 57.39           C  
ATOM   1478  CE1 HIS A 237      14.174  97.511  15.776  1.00 61.53           C  
ATOM   1479  NE2 HIS A 237      15.149  97.834  14.940  1.00 59.40           N  
ATOM   1480  N   LEU A 238      12.214  93.623  10.411  1.00 43.78           N  
ATOM   1481  CA  LEU A 238      11.189  92.704   9.877  1.00 46.88           C  
ATOM   1482  C   LEU A 238      11.506  91.225  10.217  1.00 45.59           C  
ATOM   1483  O   LEU A 238      10.628  90.371  10.097  1.00 40.94           O  
ATOM   1484  CB  LEU A 238      11.021  92.894   8.376  1.00 46.00           C  
ATOM   1485  CG  LEU A 238      10.583  94.315   7.998  1.00 46.21           C  
ATOM   1486  CD1 LEU A 238      10.807  94.523   6.511  1.00 47.36           C  
ATOM   1487  CD2 LEU A 238       9.127  94.597   8.402  1.00 49.96           C  
ATOM   1488  N   ILE A 239      12.749  90.957  10.648  1.00 42.37           N  
ATOM   1489  CA  ILE A 239      13.163  89.633  11.106  1.00 39.22           C  
ATOM   1490  C   ILE A 239      12.580  89.397  12.497  1.00 37.96           C  
ATOM   1491  O   ILE A 239      13.111  89.864  13.496  1.00 45.75           O  
ATOM   1492  CB  ILE A 239      14.704  89.551  11.183  1.00 39.07           C  
ATOM   1493  CG1 ILE A 239      15.340  89.847   9.829  1.00 38.32           C  
ATOM   1494  CG2 ILE A 239      15.175  88.186  11.643  1.00 40.61           C  
ATOM   1495  CD1 ILE A 239      16.860  89.757   9.834  1.00 39.25           C  
ATOM   1496  N   GLU A 240      11.496  88.666  12.578  1.00 35.59           N  
ATOM   1497  CA  GLU A 240      10.868  88.403  13.839  1.00 39.09           C  
ATOM   1498  C   GLU A 240      11.600  87.318  14.613  1.00 34.91           C  
ATOM   1499  O   GLU A 240      11.685  87.391  15.817  1.00 37.05           O  
ATOM   1500  CB  GLU A 240       9.448  87.912  13.561  1.00 51.93           C  
ATOM   1501  CG  GLU A 240       8.542  87.766  14.774  1.00 59.21           C  
ATOM   1502  CD  GLU A 240       7.387  86.806  14.509  1.00 73.03           C  
ATOM   1503  OE1 GLU A 240       7.365  86.128  13.436  1.00 75.44           O  
ATOM   1504  OE2 GLU A 240       6.496  86.722  15.391  1.00 86.06           O  
ATOM   1505  N   ASP A 241      12.068  86.274  13.936  1.00 33.52           N  
ATOM   1506  CA  ASP A 241      12.798  85.152  14.612  1.00 32.96           C  
ATOM   1507  C   ASP A 241      13.500  84.234  13.624  1.00 30.35           C  
ATOM   1508  O   ASP A 241      13.302  84.347  12.429  1.00 32.18           O  
ATOM   1509  CB  ASP A 241      11.822  84.312  15.429  1.00 34.46           C  
ATOM   1510  CG  ASP A 241      12.453  83.685  16.650  1.00 38.47           C  
ATOM   1511  OD1 ASP A 241      13.701  83.555  16.784  1.00 36.38           O  
ATOM   1512  OD2 ASP A 241      11.640  83.265  17.490  1.00 46.26           O  
ATOM   1513  N   ILE A 242      14.292  83.307  14.151  1.00 28.72           N  
ATOM   1514  CA  ILE A 242      14.807  82.200  13.400  1.00 27.82           C  
ATOM   1515  C   ILE A 242      14.228  80.866  13.923  1.00 26.27           C  
ATOM   1516  O   ILE A 242      13.883  80.745  15.097  1.00 24.46           O  
ATOM   1517  CB  ILE A 242      16.335  82.196  13.406  1.00 28.60           C  
ATOM   1518  CG1 ILE A 242      16.899  82.208  14.803  1.00 30.22           C  
ATOM   1519  CG2 ILE A 242      16.847  83.407  12.674  1.00 30.46           C  
ATOM   1520  CD1 ILE A 242      18.345  81.700  14.909  1.00 29.54           C  
ATOM   1521  N   ARG A 243      14.072  79.912  12.998  1.00 22.98           N  
ATOM   1522  CA  ARG A 243      13.288  78.749  13.233  1.00 22.96           C  
ATOM   1523  C   ARG A 243      14.078  77.536  12.776  1.00 23.00           C  
ATOM   1524  O   ARG A 243      14.888  77.634  11.833  1.00 21.28           O  
ATOM   1525  CB  ARG A 243      11.936  78.857  12.532  1.00 23.45           C  
ATOM   1526  CG  ARG A 243      11.114  80.078  12.954  1.00 27.12           C  
ATOM   1527  CD  ARG A 243      10.667  80.038  14.438  1.00 27.47           C  
ATOM   1528  NE  ARG A 243       9.725  78.953  14.675  1.00 23.88           N  
ATOM   1529  CZ  ARG A 243       8.410  79.072  14.559  1.00 24.32           C  
ATOM   1530  NH1 ARG A 243       7.837  80.217  14.168  1.00 25.79           N  
ATOM   1531  NH2 ARG A 243       7.651  78.023  14.773  1.00 23.19           N  
ATOM   1532  N   GLU A 244      13.918  76.429  13.517  1.00 21.65           N  
ATOM   1533  CA  GLU A 244      14.590  75.189  13.224  1.00 21.31           C  
ATOM   1534  C   GLU A 244      16.093  75.362  13.110  1.00 22.64           C  
ATOM   1535  O   GLU A 244      16.731  74.790  12.232  1.00 23.40           O  
ATOM   1536  CB  GLU A 244      13.998  74.555  11.948  1.00 23.25           C  
ATOM   1537  CG  GLU A 244      12.461  74.414  12.046  1.00 25.86           C  
ATOM   1538  CD  GLU A 244      11.829  73.341  11.161  1.00 29.94           C  
ATOM   1539  OE1 GLU A 244      12.561  72.431  10.675  1.00 31.76           O  
ATOM   1540  OE2 GLU A 244      10.564  73.367  10.980  1.00 31.63           O  
ATOM   1541  N   TYR A 245      16.665  76.122  14.030  1.00 23.31           N  
ATOM   1542  CA  TYR A 245      18.058  76.527  13.915  1.00 24.53           C  
ATOM   1543  C   TYR A 245      18.973  75.640  14.746  1.00 24.21           C  
ATOM   1544  O   TYR A 245      20.174  75.750  14.596  1.00 23.95           O  
ATOM   1545  CB  TYR A 245      18.257  78.011  14.333  1.00 27.89           C  
ATOM   1546  CG  TYR A 245      17.805  78.286  15.750  1.00 28.14           C  
ATOM   1547  CD1 TYR A 245      18.654  78.058  16.820  1.00 28.19           C  
ATOM   1548  CD2 TYR A 245      16.514  78.704  16.022  1.00 28.04           C  
ATOM   1549  CE1 TYR A 245      18.250  78.290  18.134  1.00 27.41           C  
ATOM   1550  CE2 TYR A 245      16.102  78.909  17.336  1.00 31.01           C  
ATOM   1551  CZ  TYR A 245      16.993  78.692  18.371  1.00 28.23           C  
ATOM   1552  OH  TYR A 245      16.591  78.856  19.643  1.00 31.97           O  
ATOM   1553  N   ASP A 246      18.402  74.759  15.574  1.00 23.68           N  
ATOM   1554  CA  ASP A 246      19.146  73.945  16.533  1.00 24.36           C  
ATOM   1555  C   ASP A 246      18.762  72.493  16.364  1.00 24.11           C  
ATOM   1556  O   ASP A 246      18.707  71.769  17.341  1.00 22.82           O  
ATOM   1557  CB  ASP A 246      18.787  74.342  18.003  1.00 26.14           C  
ATOM   1558  CG  ASP A 246      17.227  74.388  18.250  1.00 29.64           C  
ATOM   1559  OD1 ASP A 246      16.405  74.102  17.309  1.00 29.58           O  
ATOM   1560  OD2 ASP A 246      16.813  74.796  19.358  1.00 30.17           O  
ATOM   1561  N   VAL A 247      18.436  72.055  15.155  1.00 25.32           N  
ATOM   1562  CA  VAL A 247      18.084  70.637  14.952  1.00 25.40           C  
ATOM   1563  C   VAL A 247      19.423  69.992  14.713  1.00 26.89           C  
ATOM   1564  O   VAL A 247      20.142  70.472  13.856  1.00 26.00           O  
ATOM   1565  CB  VAL A 247      17.210  70.426  13.726  1.00 26.07           C  
ATOM   1566  CG1 VAL A 247      17.006  68.922  13.475  1.00 29.18           C  
ATOM   1567  CG2 VAL A 247      15.889  71.179  13.879  1.00 26.25           C  
ATOM   1568  N   PRO A 248      19.793  68.938  15.486  1.00 27.22           N  
ATOM   1569  CA  PRO A 248      21.141  68.395  15.290  1.00 24.39           C  
ATOM   1570  C   PRO A 248      21.283  67.826  13.885  1.00 24.92           C  
ATOM   1571  O   PRO A 248      20.293  67.304  13.314  1.00 22.44           O  
ATOM   1572  CB  PRO A 248      21.245  67.321  16.374  1.00 26.58           C  
ATOM   1573  CG  PRO A 248      20.203  67.671  17.382  1.00 25.65           C  
ATOM   1574  CD  PRO A 248      19.077  68.212  16.564  1.00 26.66           C  
ATOM   1575  N   TYR A 249      22.471  67.999  13.293  1.00 21.08           N  
ATOM   1576  CA  TYR A 249      22.616  67.746  11.880  1.00 20.36           C  
ATOM   1577  C   TYR A 249      22.356  66.331  11.496  1.00 21.13           C  
ATOM   1578  O   TYR A 249      21.711  66.101  10.488  1.00 23.47           O  
ATOM   1579  CB  TYR A 249      23.991  68.234  11.341  1.00 22.46           C  
ATOM   1580  CG  TYR A 249      24.232  67.941   9.842  1.00 21.09           C  
ATOM   1581  CD1 TYR A 249      23.590  68.640   8.852  1.00 21.80           C  
ATOM   1582  CD2 TYR A 249      25.058  66.907   9.456  1.00 21.69           C  
ATOM   1583  CE1 TYR A 249      23.777  68.325   7.493  1.00 23.20           C  
ATOM   1584  CE2 TYR A 249      25.304  66.636   8.114  1.00 21.65           C  
ATOM   1585  CZ  TYR A 249      24.671  67.332   7.149  1.00 21.96           C  
ATOM   1586  OH  TYR A 249      24.916  66.964   5.862  1.00 23.22           O  
ATOM   1587  N   HIS A 250      22.857  65.362  12.268  1.00 22.50           N  
ATOM   1588  CA  HIS A 250      22.636  63.958  11.941  1.00 22.09           C  
ATOM   1589  C   HIS A 250      21.112  63.652  11.939  1.00 20.66           C  
ATOM   1590  O   HIS A 250      20.627  62.910  11.117  1.00 20.10           O  
ATOM   1591  CB  HIS A 250      23.403  63.037  12.895  1.00 25.44           C  
ATOM   1592  CG  HIS A 250      23.162  63.308  14.345  1.00 28.10           C  
ATOM   1593  ND1 HIS A 250      23.853  64.274  15.058  1.00 33.07           N  
ATOM   1594  CD2 HIS A 250      22.299  62.751  15.221  1.00 32.83           C  
ATOM   1595  CE1 HIS A 250      23.429  64.295  16.308  1.00 32.30           C  
ATOM   1596  NE2 HIS A 250      22.468  63.395  16.428  1.00 35.15           N  
ATOM   1597  N   VAL A 251      20.355  64.296  12.814  1.00 19.62           N  
ATOM   1598  CA  VAL A 251      18.899  64.120  12.876  1.00 18.89           C  
ATOM   1599  C   VAL A 251      18.224  64.705  11.662  1.00 19.30           C  
ATOM   1600  O   VAL A 251      17.304  64.142  11.099  1.00 20.18           O  
ATOM   1601  CB  VAL A 251      18.401  64.704  14.211  1.00 21.98           C  
ATOM   1602  CG1 VAL A 251      16.883  64.779  14.318  1.00 23.04           C  
ATOM   1603  CG2 VAL A 251      18.991  63.908  15.355  1.00 22.94           C  
ATOM   1604  N   ARG A 252      18.685  65.895  11.288  1.00 20.70           N  
ATOM   1605  CA  ARG A 252      18.125  66.623  10.159  1.00 20.65           C  
ATOM   1606  C   ARG A 252      18.240  65.788   8.895  1.00 20.65           C  
ATOM   1607  O   ARG A 252      17.318  65.747   8.081  1.00 20.41           O  
ATOM   1608  CB  ARG A 252      18.842  67.961   9.974  1.00 22.68           C  
ATOM   1609  CG  ARG A 252      18.413  68.729   8.734  1.00 23.72           C  
ATOM   1610  CD  ARG A 252      16.900  68.736   8.586  1.00 28.20           C  
ATOM   1611  NE  ARG A 252      16.286  69.853   9.298  1.00 32.23           N  
ATOM   1612  CZ  ARG A 252      15.004  69.901   9.648  1.00 31.65           C  
ATOM   1613  NH1 ARG A 252      14.195  68.893   9.352  1.00 26.69           N  
ATOM   1614  NH2 ARG A 252      14.531  70.958  10.295  1.00 31.41           N  
ATOM   1615  N   VAL A 253      19.376  65.119   8.738  1.00 19.64           N  
ATOM   1616  CA  VAL A 253      19.571  64.259   7.603  1.00 21.69           C  
ATOM   1617  C   VAL A 253      18.737  63.004   7.697  1.00 19.05           C  
ATOM   1618  O   VAL A 253      18.191  62.598   6.733  1.00 20.11           O  
ATOM   1619  CB  VAL A 253      21.050  63.823   7.425  1.00 21.29           C  
ATOM   1620  CG1 VAL A 253      21.156  62.802   6.330  1.00 22.54           C  
ATOM   1621  CG2 VAL A 253      21.914  65.019   7.082  1.00 22.80           C  
ATOM   1622  N   SER A 254      18.754  62.323   8.827  1.00 19.09           N  
ATOM   1623  CA  SER A 254      17.925  61.140   9.026  1.00 19.07           C  
ATOM   1624  C   SER A 254      16.449  61.407   8.796  1.00 20.75           C  
ATOM   1625  O   SER A 254      15.747  60.602   8.186  1.00 21.29           O  
ATOM   1626  CB  SER A 254      18.138  60.583  10.436  1.00 21.09           C  
ATOM   1627  OG  SER A 254      17.442  59.368  10.634  1.00 21.89           O  
ATOM   1628  N   ILE A 255      15.960  62.544   9.254  1.00 20.71           N  
ATOM   1629  CA  ILE A 255      14.525  62.878   9.024  1.00 20.80           C  
ATOM   1630  C   ILE A 255      14.226  63.220   7.552  1.00 19.19           C  
ATOM   1631  O   ILE A 255      13.316  62.678   6.959  1.00 19.57           O  
ATOM   1632  CB  ILE A 255      14.097  64.055   9.939  1.00 21.31           C  
ATOM   1633  CG1 ILE A 255      14.219  63.613  11.392  1.00 22.23           C  
ATOM   1634  CG2 ILE A 255      12.701  64.560   9.594  1.00 22.66           C  
ATOM   1635  CD1 ILE A 255      13.815  64.630  12.425  1.00 22.13           C  
ATOM   1636  N   ASP A 256      14.964  64.162   6.991  1.00 19.94           N  
ATOM   1637  CA  ASP A 256      14.639  64.687   5.667  1.00 20.69           C  
ATOM   1638  C   ASP A 256      14.864  63.609   4.645  1.00 20.95           C  
ATOM   1639  O   ASP A 256      14.171  63.599   3.700  1.00 21.57           O  
ATOM   1640  CB  ASP A 256      15.511  65.894   5.299  1.00 22.66           C  
ATOM   1641  CG  ASP A 256      15.206  67.144   6.125  1.00 26.60           C  
ATOM   1642  OD1 ASP A 256      14.623  67.028   7.231  1.00 25.08           O  
ATOM   1643  OD2 ASP A 256      15.516  68.253   5.619  1.00 26.83           O  
ATOM   1644  N   LYS A 257      15.864  62.726   4.811  1.00 22.29           N  
ATOM   1645  CA  LYS A 257      16.091  61.650   3.846  1.00 24.57           C  
ATOM   1646  C   LYS A 257      15.341  60.399   4.173  1.00 27.16           C  
ATOM   1647  O   LYS A 257      15.320  59.500   3.363  1.00 25.11           O  
ATOM   1648  CB  LYS A 257      17.580  61.294   3.746  1.00 30.70           C  
ATOM   1649  CG  LYS A 257      18.461  62.425   3.236  1.00 35.41           C  
ATOM   1650  CD  LYS A 257      17.690  63.237   2.207  1.00 43.13           C  
ATOM   1651  CE  LYS A 257      18.583  64.029   1.282  1.00 50.51           C  
ATOM   1652  NZ  LYS A 257      19.641  63.176   0.677  1.00 54.50           N  
ATOM   1653  N   ASP A 258      14.746  60.331   5.382  1.00 26.16           N  
ATOM   1654  CA  ASP A 258      13.984  59.188   5.794  1.00 28.42           C  
ATOM   1655  C   ASP A 258      14.822  57.889   5.831  1.00 26.57           C  
ATOM   1656  O   ASP A 258      14.429  56.864   5.288  1.00 29.06           O  
ATOM   1657  CB  ASP A 258      12.744  59.008   4.926  1.00 27.83           C  
ATOM   1658  CG  ASP A 258      11.728  58.105   5.595  1.00 33.49           C  
ATOM   1659  OD1 ASP A 258      11.652  58.095   6.863  1.00 37.18           O  
ATOM   1660  OD2 ASP A 258      11.029  57.368   4.881  1.00 36.69           O  
ATOM   1661  N   ILE A 259      15.967  57.947   6.498  1.00 22.64           N  
ATOM   1662  CA  ILE A 259      16.865  56.824   6.606  1.00 20.78           C  
ATOM   1663  C   ILE A 259      16.859  56.463   8.099  1.00 19.97           C  
ATOM   1664  O   ILE A 259      16.927  57.361   8.943  1.00 20.55           O  
ATOM   1665  CB  ILE A 259      18.267  57.266   6.117  1.00 24.35           C  
ATOM   1666  CG1 ILE A 259      18.264  57.533   4.628  1.00 25.71           C  
ATOM   1667  CG2 ILE A 259      19.322  56.197   6.397  1.00 26.60           C  
ATOM   1668  CD1 ILE A 259      19.512  58.230   4.109  1.00 27.93           C  
ATOM   1669  N   ARG A 260      16.801  55.171   8.424  1.00 19.18           N  
ATOM   1670  CA  ARG A 260      16.862  54.641   9.819  1.00 18.58           C  
ATOM   1671  C   ARG A 260      17.762  53.434  10.034  1.00 18.83           C  
ATOM   1672  O   ARG A 260      17.739  52.460   9.265  1.00 18.60           O  
ATOM   1673  CB  ARG A 260      15.493  54.149  10.233  1.00 18.96           C  
ATOM   1674  CG  ARG A 260      14.452  55.259  10.257  1.00 20.18           C  
ATOM   1675  CD  ARG A 260      14.682  56.237  11.415  1.00 20.01           C  
ATOM   1676  NE  ARG A 260      13.546  57.120  11.442  1.00 20.51           N  
ATOM   1677  CZ  ARG A 260      13.376  58.140  10.618  1.00 18.76           C  
ATOM   1678  NH1 ARG A 260      14.336  58.506   9.779  1.00 18.45           N  
ATOM   1679  NH2 ARG A 260      12.253  58.793  10.652  1.00 17.98           N  
ATOM   1680  N   VAL A 261      18.548  53.487  11.093  1.00 18.30           N  
ATOM   1681  CA  VAL A 261      19.311  52.354  11.469  1.00 17.45           C  
ATOM   1682  C   VAL A 261      18.376  51.203  11.673  1.00 18.64           C  
ATOM   1683  O   VAL A 261      17.253  51.393  12.126  1.00 19.45           O  
ATOM   1684  CB  VAL A 261      20.210  52.715  12.667  1.00 18.40           C  
ATOM   1685  CG1 VAL A 261      20.801  51.487  13.326  1.00 17.15           C  
ATOM   1686  CG2 VAL A 261      21.329  53.634  12.165  1.00 19.11           C  
ATOM   1687  N   GLY A 262      18.809  49.990  11.319  1.00 19.33           N  
ATOM   1688  CA  GLY A 262      17.972  48.791  11.457  1.00 19.54           C  
ATOM   1689  C   GLY A 262      17.187  48.361  10.200  1.00 20.86           C  
ATOM   1690  O   GLY A 262      16.683  47.243  10.123  1.00 21.25           O  
ATOM   1691  N   LYS A 263      17.090  49.240   9.219  1.00 20.99           N  
ATOM   1692  CA  LYS A 263      16.476  48.899   7.960  1.00 22.73           C  
ATOM   1693  C   LYS A 263      17.548  48.636   6.924  1.00 23.84           C  
ATOM   1694  O   LYS A 263      18.718  49.022   7.120  1.00 21.70           O  
ATOM   1695  CB  LYS A 263      15.651  50.066   7.469  1.00 24.05           C  
ATOM   1696  CG  LYS A 263      14.336  50.227   8.220  1.00 27.62           C  
ATOM   1697  CD  LYS A 263      13.613  51.467   7.705  1.00 29.85           C  
ATOM   1698  CE  LYS A 263      12.304  51.725   8.417  1.00 30.00           C  
ATOM   1699  NZ  LYS A 263      11.381  50.615   8.168  1.00 33.56           N  
ATOM   1700  N   TRP A 264      17.111  48.024   5.820  1.00 23.66           N  
ATOM   1701  CA  TRP A 264      17.954  47.571   4.706  1.00 23.43           C  
ATOM   1702  C   TRP A 264      17.732  48.550   3.607  1.00 24.20           C  
ATOM   1703  O   TRP A 264      16.602  48.949   3.395  1.00 25.46           O  
ATOM   1704  CB  TRP A 264      17.475  46.206   4.180  1.00 23.95           C  
ATOM   1705  CG  TRP A 264      17.773  45.026   5.053  1.00 24.00           C  
ATOM   1706  CD1 TRP A 264      17.048  44.603   6.085  1.00 24.39           C  
ATOM   1707  CD2 TRP A 264      18.895  44.137   4.952  1.00 26.14           C  
ATOM   1708  NE1 TRP A 264      17.635  43.507   6.666  1.00 25.67           N  
ATOM   1709  CE2 TRP A 264      18.762  43.180   5.973  1.00 25.40           C  
ATOM   1710  CE3 TRP A 264      20.038  44.090   4.122  1.00 27.23           C  
ATOM   1711  CZ2 TRP A 264      19.722  42.151   6.202  1.00 25.94           C  
ATOM   1712  CZ3 TRP A 264      20.976  43.050   4.333  1.00 27.32           C  
ATOM   1713  CH2 TRP A 264      20.817  42.107   5.369  1.00 26.14           C  
ATOM   1714  N   TYR A 265      18.807  48.939   2.937  1.00 23.47           N  
ATOM   1715  CA  TYR A 265      18.811  49.898   1.854  1.00 23.64           C  
ATOM   1716  C   TYR A 265      19.706  49.342   0.699  1.00 25.43           C  
ATOM   1717  O   TYR A 265      20.751  48.643   0.944  1.00 22.92           O  
ATOM   1718  CB  TYR A 265      19.352  51.285   2.325  1.00 25.15           C  
ATOM   1719  CG  TYR A 265      18.456  51.964   3.368  1.00 24.04           C  
ATOM   1720  CD1 TYR A 265      17.357  52.758   2.978  1.00 24.62           C  
ATOM   1721  CD2 TYR A 265      18.662  51.749   4.748  1.00 22.32           C  
ATOM   1722  CE1 TYR A 265      16.500  53.316   3.933  1.00 22.85           C  
ATOM   1723  CE2 TYR A 265      17.843  52.323   5.696  1.00 20.68           C  
ATOM   1724  CZ  TYR A 265      16.756  53.086   5.304  1.00 21.57           C  
ATOM   1725  OH  TYR A 265      15.922  53.574   6.304  1.00 20.13           O  
ATOM   1726  N   LYS A 266      19.316  49.639  -0.551  1.00 26.82           N  
ATOM   1727  CA  LYS A 266      20.290  49.608  -1.651  1.00 26.66           C  
ATOM   1728  C   LYS A 266      20.887  50.999  -1.847  1.00 26.26           C  
ATOM   1729  O   LYS A 266      20.179  51.948  -2.107  1.00 28.92           O  
ATOM   1730  CB  LYS A 266      19.657  49.080  -2.920  1.00 28.93           C  
ATOM   1731  CG  LYS A 266      20.671  48.949  -4.057  1.00 30.37           C  
ATOM   1732  CD  LYS A 266      20.142  48.130  -5.215  1.00 31.64           C  
ATOM   1733  CE  LYS A 266      21.263  47.485  -6.014  1.00 33.56           C  
ATOM   1734  NZ  LYS A 266      20.717  46.767  -7.199  1.00 33.62           N  
ATOM   1735  N   VAL A 267      22.195  51.110  -1.720  1.00 26.16           N  
ATOM   1736  CA  VAL A 267      22.920  52.337  -1.974  1.00 26.89           C  
ATOM   1737  C   VAL A 267      23.205  52.498  -3.476  1.00 29.49           C  
ATOM   1738  O   VAL A 267      23.877  51.638  -4.075  1.00 26.80           O  
ATOM   1739  CB  VAL A 267      24.224  52.320  -1.213  1.00 27.64           C  
ATOM   1740  CG1 VAL A 267      24.939  53.648  -1.345  1.00 32.05           C  
ATOM   1741  CG2 VAL A 267      23.955  52.001   0.246  1.00 29.83           C  
ATOM   1742  N   THR A 268      22.718  53.613  -4.037  1.00 28.70           N  
ATOM   1743  CA  THR A 268      22.721  53.942  -5.466  1.00 29.70           C  
ATOM   1744  C   THR A 268      23.164  55.377  -5.584  1.00 33.60           C  
ATOM   1745  O   THR A 268      23.249  56.102  -4.567  1.00 35.01           O  
ATOM   1746  CB  THR A 268      21.338  53.870  -6.158  1.00 30.92           C  
ATOM   1747  OG1 THR A 268      20.484  54.972  -5.761  1.00 30.98           O  
ATOM   1748  CG2 THR A 268      20.657  52.567  -5.846  1.00 30.38           C  
ATOM   1749  N   GLN A 269      23.444  55.789  -6.815  1.00 34.94           N  
ATOM   1750  CA  GLN A 269      23.861  57.182  -7.082  1.00 41.42           C  
ATOM   1751  C   GLN A 269      22.711  58.159  -6.761  1.00 39.34           C  
ATOM   1752  O   GLN A 269      22.927  59.269  -6.342  1.00 43.09           O  
ATOM   1753  CB  GLN A 269      24.285  57.336  -8.541  1.00 45.86           C  
ATOM   1754  CG  GLN A 269      25.150  58.563  -8.832  1.00 54.79           C  
ATOM   1755  CD  GLN A 269      24.998  59.075 -10.274  1.00 58.08           C  
ATOM   1756  OE1 GLN A 269      24.779  58.296 -11.213  1.00 54.61           O  
ATOM   1757  NE2 GLN A 269      25.102  60.394 -10.448  1.00 59.96           N  
ATOM   1758  N   GLN A 270      21.497  57.686  -6.951  1.00 44.54           N  
ATOM   1759  CA  GLN A 270      20.285  58.416  -6.657  1.00 49.95           C  
ATOM   1760  C   GLN A 270      19.996  58.632  -5.160  1.00 49.46           C  
ATOM   1761  O   GLN A 270      19.255  59.561  -4.799  1.00 54.92           O  
ATOM   1762  CB  GLN A 270      19.114  57.666  -7.297  1.00 56.12           C  
ATOM   1763  CG  GLN A 270      18.932  57.951  -8.795  1.00 66.30           C  
ATOM   1764  CD  GLN A 270      19.786  57.117  -9.751  1.00 74.66           C  
ATOM   1765  OE1 GLN A 270      20.599  56.244  -9.351  1.00 72.90           O  
ATOM   1766  NE2 GLN A 270      19.594  57.386 -11.049  1.00 77.29           N  
ATOM   1767  N   GLY A 271      20.588  57.784  -4.312  1.00 43.41           N  
ATOM   1768  CA  GLY A 271      20.396  57.808  -2.869  1.00 35.23           C  
ATOM   1769  C   GLY A 271      20.094  56.407  -2.358  1.00 32.43           C  
ATOM   1770  O   GLY A 271      20.249  55.370  -3.070  1.00 28.96           O  
ATOM   1771  N   PHE A 272      19.642  56.365  -1.119  1.00 30.31           N  
ATOM   1772  CA  PHE A 272      19.403  55.099  -0.452  1.00 29.83           C  
ATOM   1773  C   PHE A 272      17.991  54.685  -0.761  1.00 27.92           C  
ATOM   1774  O   PHE A 272      17.097  55.460  -0.551  1.00 30.39           O  
ATOM   1775  CB  PHE A 272      19.582  55.263   1.057  1.00 27.50           C  
ATOM   1776  CG  PHE A 272      20.978  55.506   1.487  1.00 26.40           C  
ATOM   1777  CD1 PHE A 272      21.958  55.886   0.596  1.00 25.91           C  
ATOM   1778  CD2 PHE A 272      21.337  55.279   2.809  1.00 26.08           C  
ATOM   1779  CE1 PHE A 272      23.254  56.119   1.035  1.00 25.78           C  
ATOM   1780  CE2 PHE A 272      22.632  55.479   3.239  1.00 23.77           C  
ATOM   1781  CZ  PHE A 272      23.574  55.910   2.372  1.00 24.43           C  
ATOM   1782  N   ILE A 273      17.804  53.473  -1.238  1.00 24.87           N  
ATOM   1783  CA  ILE A 273      16.502  52.973  -1.550  1.00 27.33           C  
ATOM   1784  C   ILE A 273      16.137  51.895  -0.571  1.00 28.33           C  
ATOM   1785  O   ILE A 273      16.732  50.841  -0.585  1.00 30.37           O  
ATOM   1786  CB  ILE A 273      16.498  52.390  -2.992  1.00 29.37           C  
ATOM   1787  CG1 ILE A 273      16.974  53.461  -3.958  1.00 33.17           C  
ATOM   1788  CG2 ILE A 273      15.099  51.964  -3.406  1.00 29.61           C  
ATOM   1789  CD1 ILE A 273      17.099  52.959  -5.373  1.00 39.62           C  
ATOM   1790  N   GLU A 274      15.144  52.138   0.271  1.00 31.90           N  
ATOM   1791  CA  GLU A 274      14.713  51.146   1.279  1.00 35.88           C  
ATOM   1792  C   GLU A 274      14.237  49.856   0.628  1.00 38.49           C  
ATOM   1793  O   GLU A 274      13.393  49.856  -0.285  1.00 37.42           O  
ATOM   1794  CB  GLU A 274      13.608  51.708   2.187  1.00 36.84           C  
ATOM   1795  CG  GLU A 274      13.257  50.814   3.382  1.00 38.11           C  
ATOM   1796  CD  GLU A 274      12.026  51.306   4.151  1.00 38.88           C  
ATOM   1797  OE1 GLU A 274      11.732  52.512   4.092  1.00 36.26           O  
ATOM   1798  OE2 GLU A 274      11.330  50.491   4.803  1.00 45.75           O  
ATOM   1799  N   ASP A 275      14.780  48.749   1.104  1.00 40.69           N  
ATOM   1800  CA  ASP A 275      14.239  47.479   0.715  1.00 40.68           C  
ATOM   1801  C   ASP A 275      13.216  47.020   1.705  1.00 41.82           C  
ATOM   1802  O   ASP A 275      13.532  46.405   2.710  1.00 43.54           O  
ATOM   1803  CB  ASP A 275      15.300  46.420   0.503  1.00 42.23           C  
ATOM   1804  CG  ASP A 275      14.763  45.247  -0.324  1.00 43.35           C  
ATOM   1805  OD1 ASP A 275      13.508  45.098  -0.407  1.00 37.83           O  
ATOM   1806  OD2 ASP A 275      15.592  44.491  -0.872  1.00 41.59           O  
ATOM   1807  N   THR A 276      11.972  47.329   1.359  1.00 44.06           N  
ATOM   1808  CA  THR A 276      10.799  46.943   2.107  1.00 47.78           C  
ATOM   1809  C   THR A 276      10.561  45.433   2.150  1.00 48.67           C  
ATOM   1810  O   THR A 276       9.805  44.959   2.997  1.00 55.10           O  
ATOM   1811  CB  THR A 276       9.533  47.608   1.513  1.00 47.80           C  
ATOM   1812  OG1 THR A 276       9.520  47.408   0.093  1.00 50.27           O  
ATOM   1813  CG2 THR A 276       9.496  49.106   1.842  1.00 46.57           C  
ATOM   1814  N   ARG A 277      11.215  44.678   1.275  1.00 49.43           N  
ATOM   1815  CA  ARG A 277      11.104  43.209   1.307  1.00 50.44           C  
ATOM   1816  C   ARG A 277      11.894  42.532   2.424  1.00 52.22           C  
ATOM   1817  O   ARG A 277      11.576  41.415   2.831  1.00 48.74           O  
ATOM   1818  CB  ARG A 277      11.559  42.616  -0.021  1.00 51.76           C  
ATOM   1819  CG  ARG A 277      10.798  43.130  -1.241  1.00 53.03           C  
ATOM   1820  CD  ARG A 277      11.526  42.725  -2.502  1.00 55.62           C  
ATOM   1821  NE  ARG A 277      12.845  43.351  -2.561  1.00 57.01           N  
ATOM   1822  CZ  ARG A 277      13.744  43.132  -3.515  1.00 57.68           C  
ATOM   1823  NH1 ARG A 277      13.474  42.309  -4.519  1.00 55.42           N  
ATOM   1824  NH2 ARG A 277      14.917  43.761  -3.485  1.00 58.17           N  
ATOM   1825  N   LYS A 278      12.965  43.174   2.864  1.00 53.80           N  
ATOM   1826  CA  LYS A 278      13.811  42.634   3.923  1.00 53.75           C  
ATOM   1827  C   LYS A 278      13.500  43.411   5.193  1.00 49.86           C  
ATOM   1828  O   LYS A 278      13.632  44.647   5.211  1.00 43.69           O  
ATOM   1829  CB  LYS A 278      15.281  42.822   3.572  1.00 54.89           C  
ATOM   1830  CG  LYS A 278      15.654  42.309   2.196  1.00 58.36           C  
ATOM   1831  CD  LYS A 278      17.064  41.730   2.169  1.00 65.09           C  
ATOM   1832  CE  LYS A 278      17.151  40.407   2.947  1.00 65.21           C  
ATOM   1833  NZ  LYS A 278      18.566  39.975   3.103  1.00 67.39           N  
ATOM   1834  N   ILE A 279      13.054  42.694   6.207  1.00 45.91           N  
ATOM   1835  CA  ILE A 279      12.741  43.233   7.518  1.00 40.50           C  
ATOM   1836  C   ILE A 279      13.622  42.640   8.611  1.00 38.54           C  
ATOM   1837  O   ILE A 279      14.107  43.374   9.419  1.00 36.75           O  
ATOM   1838  CB  ILE A 279      11.262  43.033   7.859  1.00 47.29           C  
ATOM   1839  CG1 ILE A 279      10.390  43.305   6.622  1.00 50.42           C  
ATOM   1840  CG2 ILE A 279      10.875  43.842   9.065  1.00 44.25           C  
ATOM   1841  CD1 ILE A 279       9.539  44.549   6.647  1.00 50.28           C  
ATOM   1842  N   ALA A 280      13.826  41.322   8.634  1.00 34.33           N  
ATOM   1843  CA  ALA A 280      14.790  40.666   9.550  1.00 30.05           C  
ATOM   1844  C   ALA A 280      16.169  41.324   9.548  1.00 27.84           C  
ATOM   1845  O   ALA A 280      16.772  41.530   8.496  1.00 27.82           O  
ATOM   1846  CB  ALA A 280      14.973  39.210   9.182  1.00 31.24           C  
ATOM   1847  N   PHE A 281      16.666  41.647  10.731  1.00 25.52           N  
ATOM   1848  CA  PHE A 281      17.968  42.249  10.877  1.00 25.60           C  
ATOM   1849  C   PHE A 281      19.092  41.300  10.391  1.00 23.48           C  
ATOM   1850  O   PHE A 281      18.987  40.110  10.576  1.00 25.62           O  
ATOM   1851  CB  PHE A 281      18.252  42.513  12.353  1.00 24.91           C  
ATOM   1852  CG  PHE A 281      17.412  43.583  12.982  1.00 26.81           C  
ATOM   1853  CD1 PHE A 281      16.605  44.431  12.226  1.00 27.17           C  
ATOM   1854  CD2 PHE A 281      17.456  43.752  14.374  1.00 26.65           C  
ATOM   1855  CE1 PHE A 281      15.849  45.414  12.842  1.00 27.23           C  
ATOM   1856  CE2 PHE A 281      16.692  44.728  14.983  1.00 27.91           C  
ATOM   1857  CZ  PHE A 281      15.910  45.580  14.218  1.00 24.23           C  
ATOM   1858  N   ALA A 282      20.196  41.846   9.886  1.00 21.04           N  
ATOM   1859  CA  ALA A 282      21.466  41.096   9.764  1.00 21.35           C  
ATOM   1860  C   ALA A 282      22.076  40.904  11.144  1.00 21.99           C  
ATOM   1861  O   ALA A 282      21.545  41.441  12.135  1.00 21.22           O  
ATOM   1862  CB  ALA A 282      22.458  41.821   8.853  1.00 20.02           C  
ATOM   1863  N   ASP A 283      23.200  40.181  11.215  1.00 21.55           N  
ATOM   1864  CA  ASP A 283      23.788  39.807  12.506  1.00 22.78           C  
ATOM   1865  C   ASP A 283      25.113  40.447  12.676  1.00 24.38           C  
ATOM   1866  O   ASP A 283      26.101  39.983  12.117  1.00 22.63           O  
ATOM   1867  CB  ASP A 283      23.925  38.303  12.662  1.00 24.65           C  
ATOM   1868  CG  ASP A 283      22.583  37.602  12.638  1.00 27.30           C  
ATOM   1869  OD1 ASP A 283      21.730  37.948  13.489  1.00 31.29           O  
ATOM   1870  OD2 ASP A 283      22.338  36.740  11.760  1.00 26.60           O  
ATOM   1871  N   PRO A 284      25.153  41.535  13.466  1.00 24.36           N  
ATOM   1872  CA  PRO A 284      26.475  42.142  13.708  1.00 24.01           C  
ATOM   1873  C   PRO A 284      27.384  41.190  14.489  1.00 22.38           C  
ATOM   1874  O   PRO A 284      26.892  40.293  15.156  1.00 24.24           O  
ATOM   1875  CB  PRO A 284      26.157  43.388  14.573  1.00 23.12           C  
ATOM   1876  CG  PRO A 284      24.790  43.131  15.151  1.00 23.16           C  
ATOM   1877  CD  PRO A 284      24.109  42.033  14.378  1.00 22.66           C  
ATOM   1878  N   VAL A 285      28.699  41.397  14.423  1.00 20.67           N  
ATOM   1879  CA  VAL A 285      29.604  40.783  15.369  1.00 19.90           C  
ATOM   1880  C   VAL A 285      29.461  41.527  16.721  1.00 19.14           C  
ATOM   1881  O   VAL A 285      29.715  42.724  16.783  1.00 17.67           O  
ATOM   1882  CB  VAL A 285      31.053  40.911  14.888  1.00 20.44           C  
ATOM   1883  CG1 VAL A 285      31.996  40.510  16.015  1.00 22.29           C  
ATOM   1884  CG2 VAL A 285      31.291  40.047  13.622  1.00 21.74           C  
ATOM   1885  N   VAL A 286      29.134  40.806  17.788  1.00 17.86           N  
ATOM   1886  CA  VAL A 286      28.886  41.416  19.061  1.00 20.37           C  
ATOM   1887  C   VAL A 286      29.884  40.987  20.108  1.00 20.56           C  
ATOM   1888  O   VAL A 286      30.055  39.790  20.333  1.00 19.39           O  
ATOM   1889  CB  VAL A 286      27.488  41.044  19.588  1.00 20.40           C  
ATOM   1890  CG1 VAL A 286      27.295  41.549  21.013  1.00 19.66           C  
ATOM   1891  CG2 VAL A 286      26.435  41.638  18.673  1.00 21.37           C  
ATOM   1892  N   MET A 287      30.544  41.952  20.723  1.00 19.30           N  
ATOM   1893  CA  MET A 287      31.434  41.629  21.830  1.00 23.04           C  
ATOM   1894  C   MET A 287      30.982  42.242  23.145  1.00 22.13           C  
ATOM   1895  O   MET A 287      30.723  43.401  23.143  1.00 26.27           O  
ATOM   1896  CB  MET A 287      32.833  42.148  21.527  1.00 25.79           C  
ATOM   1897  CG  MET A 287      33.794  41.977  22.696  1.00 31.29           C  
ATOM   1898  SD  MET A 287      35.447  42.594  22.313  1.00 45.95           S  
ATOM   1899  CE  MET A 287      36.141  41.168  21.524  1.00 48.01           C  
ATOM   1900  N   ALA A 288      30.977  41.496  24.251  1.00 19.01           N  
ATOM   1901  CA  ALA A 288      30.742  42.036  25.563  1.00 20.15           C  
ATOM   1902  C   ALA A 288      31.943  41.733  26.451  1.00 21.76           C  
ATOM   1903  O   ALA A 288      32.417  40.609  26.424  1.00 22.49           O  
ATOM   1904  CB  ALA A 288      29.523  41.367  26.191  1.00 20.05           C  
ATOM   1905  N   PHE A 289      32.349  42.689  27.283  1.00 19.13           N  
ATOM   1906  CA  PHE A 289      33.455  42.524  28.180  1.00 20.53           C  
ATOM   1907  C   PHE A 289      33.243  43.168  29.577  1.00 21.51           C  
ATOM   1908  O   PHE A 289      32.387  44.059  29.776  1.00 20.63           O  
ATOM   1909  CB  PHE A 289      34.770  43.031  27.526  1.00 22.10           C  
ATOM   1910  CG  PHE A 289      34.985  44.511  27.622  1.00 21.89           C  
ATOM   1911  CD1 PHE A 289      34.469  45.359  26.681  1.00 22.39           C  
ATOM   1912  CD2 PHE A 289      35.673  45.058  28.679  1.00 21.98           C  
ATOM   1913  CE1 PHE A 289      34.640  46.743  26.794  1.00 20.65           C  
ATOM   1914  CE2 PHE A 289      35.874  46.431  28.777  1.00 22.11           C  
ATOM   1915  CZ  PHE A 289      35.362  47.281  27.814  1.00 21.19           C  
ATOM   1916  N   ALA A 290      33.972  42.608  30.534  1.00 20.59           N  
ATOM   1917  CA  ALA A 290      34.084  43.086  31.896  1.00 21.96           C  
ATOM   1918  C   ALA A 290      35.589  43.002  32.349  1.00 23.10           C  
ATOM   1919  O   ALA A 290      36.251  42.002  32.066  1.00 26.87           O  
ATOM   1920  CB  ALA A 290      33.230  42.210  32.776  1.00 20.24           C  
ATOM   1921  N   ILE A 291      36.102  44.040  33.003  1.00 22.23           N  
ATOM   1922  CA  ILE A 291      37.411  44.019  33.641  1.00 23.33           C  
ATOM   1923  C   ILE A 291      37.337  43.807  35.133  1.00 25.25           C  
ATOM   1924  O   ILE A 291      36.357  44.163  35.785  1.00 23.02           O  
ATOM   1925  CB  ILE A 291      38.213  45.319  33.385  1.00 22.08           C  
ATOM   1926  CG1 ILE A 291      37.724  46.496  34.214  1.00 21.78           C  
ATOM   1927  CG2 ILE A 291      38.166  45.719  31.922  1.00 21.71           C  
ATOM   1928  CD1 ILE A 291      38.603  47.742  34.107  1.00 19.65           C  
ATOM   1929  N   ALA A 292      38.413  43.251  35.663  1.00 23.82           N  
ATOM   1930  CA  ALA A 292      38.647  43.119  37.075  1.00 23.83           C  
ATOM   1931  C   ALA A 292      39.978  43.794  37.380  1.00 26.08           C  
ATOM   1932  O   ALA A 292      40.988  43.579  36.657  1.00 27.65           O  
ATOM   1933  CB  ALA A 292      38.673  41.646  37.488  1.00 22.54           C  
ATOM   1934  N   THR A 293      39.987  44.622  38.422  1.00 24.63           N  
ATOM   1935  CA  THR A 293      41.158  45.363  38.794  1.00 24.94           C  
ATOM   1936  C   THR A 293      41.513  45.103  40.258  1.00 26.55           C  
ATOM   1937  O   THR A 293      40.670  44.655  41.012  1.00 24.89           O  
ATOM   1938  CB  THR A 293      40.982  46.844  38.562  1.00 24.17           C  
ATOM   1939  OG1 THR A 293      40.394  47.419  39.706  1.00 24.81           O  
ATOM   1940  CG2 THR A 293      40.123  47.104  37.349  1.00 25.14           C  
ATOM   1941  N   THR A 294      42.782  45.327  40.615  1.00 26.09           N  
ATOM   1942  CA  THR A 294      43.246  45.336  41.997  1.00 26.45           C  
ATOM   1943  C   THR A 294      42.692  46.618  42.617  1.00 29.10           C  
ATOM   1944  O   THR A 294      42.322  47.543  41.912  1.00 29.34           O  
ATOM   1945  CB  THR A 294      44.788  45.524  42.119  1.00 26.91           C  
ATOM   1946  OG1 THR A 294      45.189  46.763  41.508  1.00 27.02           O  
ATOM   1947  CG2 THR A 294      45.587  44.444  41.486  1.00 26.26           C  
ATOM   1948  N   LYS A 295      42.652  46.670  43.939  1.00 31.17           N  
ATOM   1949  CA  LYS A 295      42.341  47.917  44.662  1.00 31.03           C  
ATOM   1950  C   LYS A 295      42.866  47.806  46.110  1.00 28.56           C  
ATOM   1951  O   LYS A 295      43.040  46.723  46.631  1.00 28.14           O  
ATOM   1952  CB  LYS A 295      40.829  48.139  44.712  1.00 31.67           C  
ATOM   1953  CG  LYS A 295      40.111  47.211  45.665  1.00 31.69           C  
ATOM   1954  CD  LYS A 295      38.588  47.458  45.674  1.00 34.54           C  
ATOM   1955  CE  LYS A 295      37.917  46.922  46.928  1.00 35.05           C  
ATOM   1956  NZ  LYS A 295      38.283  47.751  48.121  1.00 37.44           N  
ATOM   1957  N   PRO A 296      43.063  48.927  46.774  1.00 31.94           N  
ATOM   1958  CA  PRO A 296      43.415  48.780  48.180  1.00 35.31           C  
ATOM   1959  C   PRO A 296      42.253  48.364  49.080  1.00 36.77           C  
ATOM   1960  O   PRO A 296      41.107  48.680  48.795  1.00 37.69           O  
ATOM   1961  CB  PRO A 296      43.891  50.183  48.580  1.00 35.79           C  
ATOM   1962  CG  PRO A 296      43.747  51.064  47.355  1.00 36.67           C  
ATOM   1963  CD  PRO A 296      42.907  50.332  46.361  1.00 33.75           C  
ATOM   1964  N   PRO A 297      42.555  47.718  50.210  1.00 41.25           N  
ATOM   1965  CA  PRO A 297      41.490  47.432  51.171  1.00 42.26           C  
ATOM   1966  C   PRO A 297      40.596  48.650  51.576  1.00 36.86           C  
ATOM   1967  O   PRO A 297      41.069  49.747  51.802  1.00 33.28           O  
ATOM   1968  CB  PRO A 297      42.246  46.840  52.370  1.00 44.18           C  
ATOM   1969  CG  PRO A 297      43.488  46.272  51.769  1.00 47.46           C  
ATOM   1970  CD  PRO A 297      43.869  47.248  50.691  1.00 43.91           C  
ATOM   1971  N   LEU A 298      39.290  48.412  51.548  1.00 34.42           N  
ATOM   1972  CA  LEU A 298      38.246  49.393  51.881  1.00 34.49           C  
ATOM   1973  C   LEU A 298      38.206  50.672  51.058  1.00 32.04           C  
ATOM   1974  O   LEU A 298      37.442  51.543  51.404  1.00 31.64           O  
ATOM   1975  CB  LEU A 298      38.383  49.902  53.349  1.00 34.63           C  
ATOM   1976  CG  LEU A 298      38.527  48.766  54.375  1.00 34.92           C  
ATOM   1977  CD1 LEU A 298      39.016  49.269  55.722  1.00 36.94           C  
ATOM   1978  CD2 LEU A 298      37.232  47.932  54.491  1.00 35.17           C  
ATOM   1979  N   LYS A 299      39.009  50.806  50.002  1.00 32.50           N  
ATOM   1980  CA  LYS A 299      38.917  51.973  49.124  1.00 34.87           C  
ATOM   1981  C   LYS A 299      38.524  51.561  47.720  1.00 35.13           C  
ATOM   1982  O   LYS A 299      38.354  50.389  47.424  1.00 31.40           O  
ATOM   1983  CB  LYS A 299      40.237  52.735  49.109  1.00 38.83           C  
ATOM   1984  CG  LYS A 299      40.710  53.040  50.518  1.00 45.37           C  
ATOM   1985  CD  LYS A 299      42.125  53.588  50.565  1.00 51.29           C  
ATOM   1986  CE  LYS A 299      42.234  54.609  51.684  1.00 57.74           C  
ATOM   1987  NZ  LYS A 299      43.507  54.578  52.456  1.00 61.90           N  
ATOM   1988  N   PHE A 300      38.366  52.555  46.872  1.00 34.85           N  
ATOM   1989  CA  PHE A 300      38.011  52.334  45.497  1.00 37.54           C  
ATOM   1990  C   PHE A 300      39.241  52.141  44.633  1.00 35.68           C  
ATOM   1991  O   PHE A 300      40.341  52.638  44.975  1.00 32.18           O  
ATOM   1992  CB  PHE A 300      37.213  53.527  44.972  1.00 39.16           C  
ATOM   1993  CG  PHE A 300      35.989  53.820  45.783  1.00 44.68           C  
ATOM   1994  CD1 PHE A 300      35.212  52.771  46.298  1.00 48.78           C  
ATOM   1995  CD2 PHE A 300      35.605  55.141  46.054  1.00 47.91           C  
ATOM   1996  CE1 PHE A 300      34.082  53.030  47.075  1.00 52.00           C  
ATOM   1997  CE2 PHE A 300      34.466  55.401  46.821  1.00 46.68           C  
ATOM   1998  CZ  PHE A 300      33.711  54.345  47.334  1.00 46.16           C  
ATOM   1999  N   PRO A 301      39.054  51.423  43.511  1.00 35.56           N  
ATOM   2000  CA  PRO A 301      40.103  51.259  42.488  1.00 35.04           C  
ATOM   2001  C   PRO A 301      40.559  52.605  42.004  1.00 31.24           C  
ATOM   2002  O   PRO A 301      39.741  53.489  41.803  1.00 28.36           O  
ATOM   2003  CB  PRO A 301      39.383  50.495  41.345  1.00 36.41           C  
ATOM   2004  CG  PRO A 301      38.186  49.859  41.974  1.00 35.78           C  
ATOM   2005  CD  PRO A 301      37.777  50.814  43.081  1.00 34.97           C  
ATOM   2006  N   ASP A 302      41.859  52.789  41.849  1.00 32.94           N  
ATOM   2007  CA  ASP A 302      42.352  54.016  41.264  1.00 34.00           C  
ATOM   2008  C   ASP A 302      43.302  53.722  40.098  1.00 33.43           C  
ATOM   2009  O   ASP A 302      44.332  53.102  40.291  1.00 35.89           O  
ATOM   2010  CB  ASP A 302      43.043  54.817  42.336  1.00 37.21           C  
ATOM   2011  CG  ASP A 302      43.718  56.051  41.788  1.00 43.79           C  
ATOM   2012  OD1 ASP A 302      43.538  56.424  40.602  1.00 46.00           O  
ATOM   2013  OD2 ASP A 302      44.454  56.662  42.568  1.00 55.38           O  
ATOM   2014  N   SER A 303      42.978  54.205  38.899  1.00 31.17           N  
ATOM   2015  CA  SER A 303      43.658  53.743  37.700  1.00 30.02           C  
ATOM   2016  C   SER A 303      45.075  54.285  37.566  1.00 31.87           C  
ATOM   2017  O   SER A 303      45.867  53.738  36.803  1.00 28.12           O  
ATOM   2018  CB  SER A 303      42.851  53.993  36.429  1.00 26.34           C  
ATOM   2019  OG  SER A 303      42.654  55.379  36.134  1.00 26.73           O  
ATOM   2020  N   ALA A 304      45.389  55.290  38.353  1.00 35.67           N  
ATOM   2021  CA  ALA A 304      46.731  55.808  38.470  1.00 40.31           C  
ATOM   2022  C   ALA A 304      47.705  54.817  39.072  1.00 41.95           C  
ATOM   2023  O   ALA A 304      48.869  54.882  38.788  1.00 48.48           O  
ATOM   2024  CB  ALA A 304      46.733  57.088  39.259  1.00 39.24           C  
ATOM   2025  N   VAL A 305      47.224  53.903  39.887  1.00 39.73           N  
ATOM   2026  CA  VAL A 305      48.086  52.985  40.562  1.00 38.70           C  
ATOM   2027  C   VAL A 305      47.650  51.540  40.521  1.00 41.70           C  
ATOM   2028  O   VAL A 305      48.482  50.666  40.523  1.00 40.15           O  
ATOM   2029  CB  VAL A 305      48.217  53.326  42.050  1.00 43.96           C  
ATOM   2030  CG1 VAL A 305      48.679  54.741  42.236  1.00 45.85           C  
ATOM   2031  CG2 VAL A 305      46.911  53.120  42.756  1.00 45.41           C  
ATOM   2032  N   ASP A 306      46.354  51.284  40.491  1.00 34.46           N  
ATOM   2033  CA  ASP A 306      45.874  49.934  40.387  1.00 36.47           C  
ATOM   2034  C   ASP A 306      45.991  49.360  38.991  1.00 31.19           C  
ATOM   2035  O   ASP A 306      46.004  50.069  38.041  1.00 30.14           O  
ATOM   2036  CB  ASP A 306      44.447  49.836  40.873  1.00 39.66           C  
ATOM   2037  CG  ASP A 306      44.345  49.914  42.352  1.00 43.79           C  
ATOM   2038  OD1 ASP A 306      44.778  48.986  43.026  1.00 40.67           O  
ATOM   2039  OD2 ASP A 306      43.846  50.917  42.839  1.00 44.13           O  
ATOM   2040  N   GLN A 307      46.078  48.047  38.906  1.00 31.45           N  
ATOM   2041  CA  GLN A 307      46.336  47.394  37.630  1.00 30.47           C  
ATOM   2042  C   GLN A 307      45.161  46.546  37.212  1.00 29.37           C  
ATOM   2043  O   GLN A 307      44.505  45.954  38.069  1.00 25.90           O  
ATOM   2044  CB  GLN A 307      47.533  46.389  37.758  1.00 29.89           C  
ATOM   2045  CG  GLN A 307      48.928  47.006  37.775  1.00 32.39           C  
ATOM   2046  CD  GLN A 307      50.058  45.940  37.729  1.00 35.44           C  
ATOM   2047  OE1 GLN A 307      49.984  44.951  36.978  1.00 35.84           O  
ATOM   2048  NE2 GLN A 307      51.075  46.119  38.557  1.00 35.05           N  
ATOM   2049  N   ILE A 308      45.025  46.312  35.907  1.00 26.64           N  
ATOM   2050  CA  ILE A 308      44.037  45.326  35.448  1.00 28.59           C  
ATOM   2051  C   ILE A 308      44.578  43.906  35.623  1.00 28.92           C  
ATOM   2052  O   ILE A 308      45.697  43.621  35.193  1.00 25.30           O  
ATOM   2053  CB  ILE A 308      43.656  45.570  33.987  1.00 26.31           C  
ATOM   2054  CG1 ILE A 308      43.067  46.954  33.849  1.00 26.26           C  
ATOM   2055  CG2 ILE A 308      42.685  44.500  33.480  1.00 27.76           C  
ATOM   2056  CD1 ILE A 308      42.962  47.422  32.393  1.00 29.25           C  
ATOM   2057  N   MET A 309      43.792  43.033  36.245  1.00 28.86           N  
ATOM   2058  CA  MET A 309      44.194  41.659  36.473  1.00 31.02           C  
ATOM   2059  C   MET A 309      43.556  40.623  35.533  1.00 31.86           C  
ATOM   2060  O   MET A 309      44.214  39.605  35.226  1.00 31.21           O  
ATOM   2061  CB  MET A 309      44.089  41.263  37.954  1.00 33.98           C  
ATOM   2062  CG  MET A 309      42.760  40.905  38.625  1.00 36.47           C  
ATOM   2063  SD  MET A 309      42.860  41.063  40.469  1.00 35.92           S  
ATOM   2064  CE  MET A 309      43.581  42.649  40.392  1.00 41.15           C  
ATOM   2065  N   MET A 310      42.328  40.876  35.062  1.00 26.13           N  
ATOM   2066  CA  MET A 310      41.651  40.052  34.051  1.00 25.47           C  
ATOM   2067  C   MET A 310      40.740  40.918  33.210  1.00 27.52           C  
ATOM   2068  O   MET A 310      40.262  41.977  33.675  1.00 25.73           O  
ATOM   2069  CB  MET A 310      40.781  38.987  34.668  1.00 28.92           C  
ATOM   2070  CG  MET A 310      41.322  38.391  35.937  1.00 32.89           C  
ATOM   2071  SD  MET A 310      40.457  36.952  36.561  1.00 36.22           S  
ATOM   2072  CE  MET A 310      40.015  36.046  35.142  1.00 40.51           C  
ATOM   2073  N   ILE A 311      40.555  40.509  31.951  1.00 25.91           N  
ATOM   2074  CA  ILE A 311      39.456  40.963  31.123  1.00 25.46           C  
ATOM   2075  C   ILE A 311      38.787  39.730  30.613  1.00 24.86           C  
ATOM   2076  O   ILE A 311      39.478  38.886  30.046  1.00 25.03           O  
ATOM   2077  CB  ILE A 311      39.927  41.795  29.969  1.00 28.12           C  
ATOM   2078  CG1 ILE A 311      40.626  43.020  30.579  1.00 26.67           C  
ATOM   2079  CG2 ILE A 311      38.721  42.092  29.062  1.00 30.96           C  
ATOM   2080  CD1 ILE A 311      41.209  44.006  29.629  1.00 24.69           C  
ATOM   2081  N   SER A 312      37.506  39.552  30.960  1.00 22.17           N  
ATOM   2082  CA  SER A 312      36.664  38.459  30.433  1.00 22.89           C  
ATOM   2083  C   SER A 312      35.836  39.075  29.333  1.00 22.85           C  
ATOM   2084  O   SER A 312      35.513  40.283  29.387  1.00 23.21           O  
ATOM   2085  CB  SER A 312      35.735  37.916  31.490  1.00 25.00           C  
ATOM   2086  OG  SER A 312      35.069  38.998  32.156  1.00 26.82           O  
ATOM   2087  N   TYR A 313      35.549  38.294  28.319  1.00 22.32           N  
ATOM   2088  CA  TYR A 313      34.677  38.728  27.265  1.00 22.31           C  
ATOM   2089  C   TYR A 313      34.032  37.588  26.500  1.00 23.16           C  
ATOM   2090  O   TYR A 313      34.421  36.434  26.654  1.00 24.55           O  
ATOM   2091  CB  TYR A 313      35.366  39.721  26.342  1.00 24.24           C  
ATOM   2092  CG  TYR A 313      36.701  39.336  25.724  1.00 26.87           C  
ATOM   2093  CD1 TYR A 313      37.855  39.401  26.452  1.00 26.51           C  
ATOM   2094  CD2 TYR A 313      36.817  39.020  24.371  1.00 29.69           C  
ATOM   2095  CE1 TYR A 313      39.050  39.100  25.893  1.00 26.87           C  
ATOM   2096  CE2 TYR A 313      38.050  38.744  23.794  1.00 25.38           C  
ATOM   2097  CZ  TYR A 313      39.147  38.778  24.577  1.00 27.16           C  
ATOM   2098  OH  TYR A 313      40.397  38.522  24.080  1.00 27.87           O  
ATOM   2099  N   MET A 314      32.989  37.914  25.746  1.00 22.54           N  
ATOM   2100  CA  MET A 314      32.358  37.001  24.842  1.00 25.28           C  
ATOM   2101  C   MET A 314      32.251  37.675  23.497  1.00 25.31           C  
ATOM   2102  O   MET A 314      31.982  38.855  23.421  1.00 27.08           O  
ATOM   2103  CB  MET A 314      30.941  36.613  25.312  1.00 27.53           C  
ATOM   2104  CG  MET A 314      30.862  35.824  26.619  1.00 29.66           C  
ATOM   2105  SD  MET A 314      29.546  34.560  26.588  1.00 36.18           S  
ATOM   2106  CE  MET A 314      30.510  33.129  26.196  1.00 32.97           C  
ATOM   2107  N   ILE A 315      32.471  36.907  22.440  1.00 26.94           N  
ATOM   2108  CA  ILE A 315      32.291  37.331  21.057  1.00 24.96           C  
ATOM   2109  C   ILE A 315      31.355  36.310  20.392  1.00 26.28           C  
ATOM   2110  O   ILE A 315      31.660  35.108  20.297  1.00 25.37           O  
ATOM   2111  CB  ILE A 315      33.631  37.357  20.308  1.00 28.92           C  
ATOM   2112  CG1 ILE A 315      34.646  38.265  21.039  1.00 29.76           C  
ATOM   2113  CG2 ILE A 315      33.448  37.837  18.858  1.00 25.67           C  
ATOM   2114  CD1 ILE A 315      36.084  37.945  20.649  1.00 31.60           C  
ATOM   2115  N   ASP A 316      30.166  36.774  20.023  1.00 26.32           N  
ATOM   2116  CA  ASP A 316      29.177  35.955  19.369  1.00 28.81           C  
ATOM   2117  C   ASP A 316      29.063  34.605  20.037  1.00 30.51           C  
ATOM   2118  O   ASP A 316      28.886  33.584  19.398  1.00 28.80           O  
ATOM   2119  CB  ASP A 316      29.448  35.821  17.859  1.00 30.54           C  
ATOM   2120  CG  ASP A 316      29.282  37.149  17.104  1.00 32.73           C  
ATOM   2121  OD1 ASP A 316      28.551  38.091  17.597  1.00 30.88           O  
ATOM   2122  OD2 ASP A 316      29.872  37.227  15.995  1.00 31.41           O  
ATOM   2123  N   GLY A 317      29.097  34.620  21.361  1.00 32.00           N  
ATOM   2124  CA  GLY A 317      28.761  33.417  22.120  1.00 29.54           C  
ATOM   2125  C   GLY A 317      29.935  32.549  22.515  1.00 27.32           C  
ATOM   2126  O   GLY A 317      29.699  31.500  23.098  1.00 29.11           O  
ATOM   2127  N   GLU A 318      31.154  33.020  22.261  1.00 26.79           N  
ATOM   2128  CA  GLU A 318      32.420  32.323  22.590  1.00 30.47           C  
ATOM   2129  C   GLU A 318      33.188  33.142  23.602  1.00 26.06           C  
ATOM   2130  O   GLU A 318      33.378  34.334  23.407  1.00 22.53           O  
ATOM   2131  CB  GLU A 318      33.314  32.183  21.344  1.00 35.38           C  
ATOM   2132  CG  GLU A 318      32.779  31.212  20.299  1.00 45.25           C  
ATOM   2133  CD  GLU A 318      32.889  29.730  20.722  1.00 56.31           C  
ATOM   2134  OE1 GLU A 318      33.079  29.421  21.941  1.00 62.47           O  
ATOM   2135  OE2 GLU A 318      32.787  28.858  19.829  1.00 61.21           O  
ATOM   2136  N   GLY A 319      33.637  32.512  24.674  1.00 24.44           N  
ATOM   2137  CA  GLY A 319      34.283  33.235  25.768  1.00 24.68           C  
ATOM   2138  C   GLY A 319      35.790  33.267  25.690  1.00 25.14           C  
ATOM   2139  O   GLY A 319      36.438  32.348  25.195  1.00 25.78           O  
ATOM   2140  N   PHE A 320      36.338  34.352  26.201  1.00 24.18           N  
ATOM   2141  CA  PHE A 320      37.737  34.575  26.281  1.00 23.73           C  
ATOM   2142  C   PHE A 320      37.980  35.208  27.650  1.00 28.17           C  
ATOM   2143  O   PHE A 320      37.137  35.933  28.151  1.00 29.30           O  
ATOM   2144  CB  PHE A 320      38.185  35.472  25.127  1.00 24.56           C  
ATOM   2145  CG  PHE A 320      38.067  34.798  23.778  1.00 25.76           C  
ATOM   2146  CD1 PHE A 320      39.008  33.872  23.380  1.00 24.75           C  
ATOM   2147  CD2 PHE A 320      36.985  35.002  22.976  1.00 26.10           C  
ATOM   2148  CE1 PHE A 320      38.889  33.208  22.158  1.00 29.71           C  
ATOM   2149  CE2 PHE A 320      36.841  34.316  21.762  1.00 29.59           C  
ATOM   2150  CZ  PHE A 320      37.785  33.407  21.350  1.00 30.34           C  
ATOM   2151  N   LEU A 321      39.116  34.866  28.249  1.00 26.58           N  
ATOM   2152  CA  LEU A 321      39.618  35.432  29.467  1.00 26.40           C  
ATOM   2153  C   LEU A 321      41.123  35.696  29.348  1.00 27.48           C  
ATOM   2154  O   LEU A 321      41.920  34.755  29.046  1.00 24.70           O  
ATOM   2155  CB  LEU A 321      39.366  34.477  30.625  1.00 26.72           C  
ATOM   2156  CG  LEU A 321      40.000  34.927  31.937  1.00 30.69           C  
ATOM   2157  CD1 LEU A 321      39.445  36.283  32.370  1.00 32.79           C  
ATOM   2158  CD2 LEU A 321      39.815  33.871  33.029  1.00 31.60           C  
ATOM   2159  N   ILE A 322      41.503  36.956  29.570  1.00 26.18           N  
ATOM   2160  CA  ILE A 322      42.864  37.361  29.469  1.00 28.02           C  
ATOM   2161  C   ILE A 322      43.264  37.594  30.881  1.00 31.38           C  
ATOM   2162  O   ILE A 322      42.511  38.194  31.630  1.00 33.76           O  
ATOM   2163  CB  ILE A 322      43.085  38.679  28.741  1.00 29.28           C  
ATOM   2164  CG1 ILE A 322      42.523  38.594  27.334  1.00 28.13           C  
ATOM   2165  CG2 ILE A 322      44.569  38.994  28.746  1.00 30.89           C  
ATOM   2166  CD1 ILE A 322      42.567  39.908  26.598  1.00 26.43           C  
ATOM   2167  N   THR A 323      44.483  37.173  31.219  1.00 30.34           N  
ATOM   2168  CA  THR A 323      44.919  37.077  32.585  1.00 28.84           C  
ATOM   2169  C   THR A 323      46.254  37.859  32.646  1.00 32.00           C  
ATOM   2170  O   THR A 323      47.003  37.914  31.679  1.00 26.06           O  
ATOM   2171  CB  THR A 323      44.983  35.584  32.810  1.00 32.55           C  
ATOM   2172  OG1 THR A 323      43.912  35.147  33.686  1.00 30.51           O  
ATOM   2173  CG2 THR A 323      46.315  35.161  33.219  1.00 31.09           C  
ATOM   2174  N   ASN A 324      46.485  38.550  33.747  1.00 32.17           N  
ATOM   2175  CA  ASN A 324      47.697  39.253  33.957  1.00 32.65           C  
ATOM   2176  C   ASN A 324      48.527  38.532  34.994  1.00 32.85           C  
ATOM   2177  O   ASN A 324      48.338  38.769  36.182  1.00 31.86           O  
ATOM   2178  CB  ASN A 324      47.433  40.696  34.424  1.00 32.46           C  
ATOM   2179  CG  ASN A 324      48.670  41.362  35.014  1.00 30.99           C  
ATOM   2180  OD1 ASN A 324      49.725  40.741  35.126  1.00 32.34           O  
ATOM   2181  ND2 ASN A 324      48.533  42.617  35.425  1.00 29.55           N  
ATOM   2182  N   ARG A 325      49.505  37.739  34.517  1.00 32.79           N  
ATOM   2183  CA  ARG A 325      50.287  36.833  35.368  1.00 29.77           C  
ATOM   2184  C   ARG A 325      51.326  37.486  36.290  1.00 30.46           C  
ATOM   2185  O   ARG A 325      51.926  36.755  37.072  1.00 31.24           O  
ATOM   2186  CB  ARG A 325      50.938  35.706  34.542  1.00 32.40           C  
ATOM   2187  CG  ARG A 325      49.958  34.729  33.887  1.00 33.81           C  
ATOM   2188  CD  ARG A 325      49.362  33.687  34.833  1.00 34.95           C  
ATOM   2189  NE  ARG A 325      50.287  32.556  35.028  1.00 35.78           N  
ATOM   2190  CZ  ARG A 325      51.147  32.429  36.048  1.00 37.35           C  
ATOM   2191  NH1 ARG A 325      51.209  33.303  37.041  1.00 34.67           N  
ATOM   2192  NH2 ARG A 325      51.955  31.380  36.094  1.00 40.28           N  
ATOM   2193  N   GLU A 326      51.479  38.805  36.282  1.00 30.29           N  
ATOM   2194  CA  GLU A 326      52.175  39.532  37.330  1.00 32.86           C  
ATOM   2195  C   GLU A 326      51.352  39.510  38.591  1.00 37.69           C  
ATOM   2196  O   GLU A 326      51.851  39.793  39.643  1.00 33.91           O  
ATOM   2197  CB  GLU A 326      52.332  41.008  37.005  1.00 36.53           C  
ATOM   2198  CG  GLU A 326      53.539  41.501  36.251  1.00 41.96           C  
ATOM   2199  CD  GLU A 326      53.502  43.009  36.002  1.00 49.28           C  
ATOM   2200  OE1 GLU A 326      52.483  43.553  35.520  1.00 54.46           O  
ATOM   2201  OE2 GLU A 326      54.500  43.673  36.272  1.00 52.01           O  
ATOM   2202  N   ILE A 327      50.060  39.225  38.462  1.00 41.24           N  
ATOM   2203  CA  ILE A 327      49.109  39.324  39.555  1.00 37.66           C  
ATOM   2204  C   ILE A 327      48.419  38.013  39.824  1.00 34.62           C  
ATOM   2205  O   ILE A 327      48.388  37.556  40.920  1.00 35.31           O  
ATOM   2206  CB  ILE A 327      48.058  40.396  39.258  1.00 39.34           C  
ATOM   2207  CG1 ILE A 327      48.727  41.680  38.800  1.00 42.76           C  
ATOM   2208  CG2 ILE A 327      47.137  40.618  40.431  1.00 40.97           C  
ATOM   2209  CD1 ILE A 327      49.000  42.701  39.858  1.00 43.84           C  
ATOM   2210  N   ILE A 328      47.866  37.418  38.791  1.00 35.71           N  
ATOM   2211  CA  ILE A 328      47.205  36.140  38.862  1.00 35.50           C  
ATOM   2212  C   ILE A 328      48.258  35.045  39.012  1.00 40.78           C  
ATOM   2213  O   ILE A 328      49.069  34.868  38.143  1.00 37.73           O  
ATOM   2214  CB  ILE A 328      46.425  35.879  37.574  1.00 34.45           C  
ATOM   2215  CG1 ILE A 328      45.444  37.001  37.276  1.00 37.34           C  
ATOM   2216  CG2 ILE A 328      45.714  34.563  37.638  1.00 35.64           C  
ATOM   2217  CD1 ILE A 328      44.761  37.566  38.486  1.00 38.55           C  
ATOM   2218  N   SER A 329      48.224  34.318  40.111  1.00 41.56           N  
ATOM   2219  CA  SER A 329      49.347  33.519  40.540  1.00 43.77           C  
ATOM   2220  C   SER A 329      49.428  32.125  39.897  1.00 47.89           C  
ATOM   2221  O   SER A 329      50.314  31.341  40.243  1.00 51.47           O  
ATOM   2222  CB  SER A 329      49.275  33.356  42.051  1.00 44.42           C  
ATOM   2223  OG  SER A 329      48.151  32.554  42.393  1.00 39.33           O  
ATOM   2224  N   GLU A 330      48.506  31.778  39.012  1.00 47.64           N  
ATOM   2225  CA  GLU A 330      48.742  30.606  38.161  1.00 45.29           C  
ATOM   2226  C   GLU A 330      48.098  30.772  36.806  1.00 46.54           C  
ATOM   2227  O   GLU A 330      47.206  31.607  36.620  1.00 44.69           O  
ATOM   2228  CB  GLU A 330      48.281  29.306  38.827  1.00 43.79           C  
ATOM   2229  CG  GLU A 330      46.806  29.243  39.149  1.00 47.55           C  
ATOM   2230  CD  GLU A 330      46.463  28.162  40.167  1.00 49.83           C  
ATOM   2231  OE1 GLU A 330      46.895  28.250  41.347  1.00 54.73           O  
ATOM   2232  OE2 GLU A 330      45.754  27.213  39.789  1.00 51.01           O  
ATOM   2233  N   ASP A 331      48.583  29.986  35.854  1.00 43.97           N  
ATOM   2234  CA  ASP A 331      47.988  29.928  34.539  1.00 44.64           C  
ATOM   2235  C   ASP A 331      46.608  29.362  34.740  1.00 43.91           C  
ATOM   2236  O   ASP A 331      46.444  28.260  35.280  1.00 38.00           O  
ATOM   2237  CB  ASP A 331      48.737  28.971  33.585  1.00 46.34           C  
ATOM   2238  CG  ASP A 331      50.011  29.572  32.957  1.00 45.70           C  
ATOM   2239  OD1 ASP A 331      50.303  30.812  33.063  1.00 44.82           O  
ATOM   2240  OD2 ASP A 331      50.701  28.746  32.310  1.00 36.33           O  
ATOM   2241  N   ILE A 332      45.608  30.107  34.293  1.00 42.21           N  
ATOM   2242  CA  ILE A 332      44.257  29.604  34.332  1.00 34.71           C  
ATOM   2243  C   ILE A 332      44.041  28.757  33.101  1.00 31.48           C  
ATOM   2244  O   ILE A 332      44.471  29.149  32.022  1.00 32.75           O  
ATOM   2245  CB  ILE A 332      43.251  30.778  34.352  1.00 34.33           C  
ATOM   2246  CG1 ILE A 332      43.456  31.644  35.606  1.00 31.77           C  
ATOM   2247  CG2 ILE A 332      41.832  30.245  34.349  1.00 33.17           C  
ATOM   2248  CD1 ILE A 332      43.394  30.861  36.911  1.00 29.68           C  
ATOM   2249  N   GLU A 333      43.344  27.628  33.258  1.00 30.79           N  
ATOM   2250  CA  GLU A 333      42.995  26.732  32.171  1.00 35.60           C  
ATOM   2251  C   GLU A 333      41.559  27.008  31.599  1.00 36.40           C  
ATOM   2252  O   GLU A 333      40.711  27.602  32.243  1.00 37.11           O  
ATOM   2253  CB  GLU A 333      43.025  25.274  32.664  1.00 40.81           C  
ATOM   2254  CG  GLU A 333      44.250  24.870  33.501  1.00 49.24           C  
ATOM   2255  CD  GLU A 333      45.355  24.150  32.720  1.00 56.88           C  
ATOM   2256  OE1 GLU A 333      45.457  24.333  31.479  1.00 60.00           O  
ATOM   2257  OE2 GLU A 333      46.136  23.395  33.362  1.00 64.50           O  
ATOM   2258  N   ASP A 334      41.333  26.527  30.394  1.00 32.03           N  
ATOM   2259  CA  ASP A 334      40.133  26.716  29.674  1.00 29.75           C  
ATOM   2260  C   ASP A 334      39.056  26.057  30.461  1.00 31.70           C  
ATOM   2261  O   ASP A 334      39.271  24.967  30.990  1.00 34.43           O  
ATOM   2262  CB  ASP A 334      40.220  26.052  28.320  1.00 25.82           C  
ATOM   2263  CG  ASP A 334      41.175  26.730  27.357  1.00 27.13           C  
ATOM   2264  OD1 ASP A 334      41.847  27.710  27.688  1.00 31.40           O  
ATOM   2265  OD2 ASP A 334      41.298  26.238  26.210  1.00 28.45           O  
ATOM   2266  N   PHE A 335      37.883  26.693  30.555  1.00 28.30           N  
ATOM   2267  CA  PHE A 335      36.766  26.036  31.255  1.00 27.83           C  
ATOM   2268  C   PHE A 335      35.437  26.560  30.790  1.00 27.01           C  
ATOM   2269  O   PHE A 335      35.368  27.545  30.073  1.00 24.45           O  
ATOM   2270  CB  PHE A 335      36.897  26.173  32.781  1.00 29.11           C  
ATOM   2271  CG  PHE A 335      36.776  27.607  33.296  1.00 29.91           C  
ATOM   2272  CD1 PHE A 335      37.824  28.500  33.156  1.00 29.17           C  
ATOM   2273  CD2 PHE A 335      35.619  28.044  33.961  1.00 30.45           C  
ATOM   2274  CE1 PHE A 335      37.741  29.812  33.649  1.00 30.70           C  
ATOM   2275  CE2 PHE A 335      35.536  29.359  34.473  1.00 28.66           C  
ATOM   2276  CZ  PHE A 335      36.583  30.252  34.280  1.00 26.77           C  
ATOM   2277  N   GLU A 336      34.399  25.879  31.229  1.00 28.93           N  
ATOM   2278  CA  GLU A 336      33.044  26.122  30.819  1.00 32.11           C  
ATOM   2279  C   GLU A 336      32.330  26.757  31.979  1.00 30.52           C  
ATOM   2280  O   GLU A 336      32.394  26.249  33.082  1.00 26.47           O  
ATOM   2281  CB  GLU A 336      32.352  24.793  30.494  1.00 35.64           C  
ATOM   2282  CG  GLU A 336      31.022  24.967  29.761  1.00 39.00           C  
ATOM   2283  CD  GLU A 336      30.116  23.733  29.796  1.00 43.65           C  
ATOM   2284  OE1 GLU A 336      30.594  22.621  30.144  1.00 46.89           O  
ATOM   2285  OE2 GLU A 336      28.896  23.872  29.502  1.00 45.67           O  
ATOM   2286  N   TYR A 337      31.622  27.854  31.724  1.00 29.69           N  
ATOM   2287  CA  TYR A 337      30.573  28.316  32.631  1.00 29.93           C  
ATOM   2288  C   TYR A 337      29.272  28.615  31.876  1.00 29.10           C  
ATOM   2289  O   TYR A 337      29.135  29.650  31.201  1.00 29.22           O  
ATOM   2290  CB  TYR A 337      31.066  29.514  33.434  1.00 29.74           C  
ATOM   2291  CG  TYR A 337      29.974  30.180  34.249  1.00 29.22           C  
ATOM   2292  CD1 TYR A 337      29.569  29.644  35.482  1.00 31.01           C  
ATOM   2293  CD2 TYR A 337      29.331  31.319  33.785  1.00 26.87           C  
ATOM   2294  CE1 TYR A 337      28.553  30.229  36.214  1.00 30.13           C  
ATOM   2295  CE2 TYR A 337      28.322  31.931  34.534  1.00 30.03           C  
ATOM   2296  CZ  TYR A 337      27.931  31.380  35.739  1.00 29.09           C  
ATOM   2297  OH  TYR A 337      26.965  31.975  36.493  1.00 30.42           O  
ATOM   2298  N   THR A 338      28.320  27.717  32.046  1.00 27.67           N  
ATOM   2299  CA  THR A 338      27.115  27.663  31.277  1.00 27.40           C  
ATOM   2300  C   THR A 338      25.965  27.497  32.272  1.00 29.85           C  
ATOM   2301  O   THR A 338      25.700  26.383  32.720  1.00 29.36           O  
ATOM   2302  CB  THR A 338      27.145  26.448  30.345  1.00 29.20           C  
ATOM   2303  OG1 THR A 338      28.157  26.638  29.347  1.00 27.22           O  
ATOM   2304  CG2 THR A 338      25.785  26.178  29.683  1.00 29.49           C  
ATOM   2305  N   PRO A 339      25.314  28.619  32.661  1.00 29.39           N  
ATOM   2306  CA  PRO A 339      24.312  28.588  33.764  1.00 29.19           C  
ATOM   2307  C   PRO A 339      22.959  28.105  33.351  1.00 28.39           C  
ATOM   2308  O   PRO A 339      22.169  27.726  34.212  1.00 30.71           O  
ATOM   2309  CB  PRO A 339      24.229  30.055  34.237  1.00 30.78           C  
ATOM   2310  CG  PRO A 339      24.782  30.867  33.099  1.00 28.88           C  
ATOM   2311  CD  PRO A 339      25.812  29.984  32.400  1.00 28.65           C  
ATOM   2312  N   LYS A 340      22.713  28.097  32.045  1.00 30.13           N  
ATOM   2313  CA  LYS A 340      21.543  27.478  31.471  1.00 33.69           C  
ATOM   2314  C   LYS A 340      21.935  26.967  30.100  1.00 33.98           C  
ATOM   2315  O   LYS A 340      22.763  27.568  29.467  1.00 39.09           O  
ATOM   2316  CB  LYS A 340      20.433  28.507  31.301  1.00 36.69           C  
ATOM   2317  CG  LYS A 340      19.842  29.064  32.596  1.00 41.84           C  
ATOM   2318  CD  LYS A 340      18.826  28.133  33.243  1.00 45.93           C  
ATOM   2319  CE  LYS A 340      17.642  28.857  33.901  1.00 48.86           C  
ATOM   2320  NZ  LYS A 340      16.906  29.735  32.938  1.00 49.49           N  
ATOM   2321  N   PRO A 341      21.312  25.889  29.606  1.00 34.75           N  
ATOM   2322  CA  PRO A 341      21.743  25.435  28.267  1.00 36.32           C  
ATOM   2323  C   PRO A 341      21.634  26.550  27.210  1.00 37.63           C  
ATOM   2324  O   PRO A 341      22.515  26.658  26.373  1.00 39.74           O  
ATOM   2325  CB  PRO A 341      20.811  24.239  27.958  1.00 35.44           C  
ATOM   2326  CG  PRO A 341      20.303  23.787  29.297  1.00 37.71           C  
ATOM   2327  CD  PRO A 341      20.278  25.008  30.198  1.00 35.91           C  
ATOM   2328  N   GLU A 342      20.613  27.390  27.299  1.00 38.49           N  
ATOM   2329  CA  GLU A 342      20.479  28.609  26.485  1.00 41.76           C  
ATOM   2330  C   GLU A 342      21.687  29.534  26.455  1.00 36.86           C  
ATOM   2331  O   GLU A 342      21.910  30.202  25.493  1.00 30.24           O  
ATOM   2332  CB  GLU A 342      19.351  29.495  27.000  1.00 45.31           C  
ATOM   2333  CG  GLU A 342      17.977  28.924  26.967  1.00 48.94           C  
ATOM   2334  CD  GLU A 342      17.586  28.308  28.265  1.00 51.33           C  
ATOM   2335  OE1 GLU A 342      18.202  27.334  28.682  1.00 47.96           O  
ATOM   2336  OE2 GLU A 342      16.643  28.793  28.863  1.00 60.56           O  
ATOM   2337  N   TYR A 343      22.421  29.600  27.553  1.00 34.68           N  
ATOM   2338  CA  TYR A 343      23.542  30.498  27.687  1.00 32.28           C  
ATOM   2339  C   TYR A 343      24.911  29.812  27.730  1.00 32.73           C  
ATOM   2340  O   TYR A 343      25.529  29.718  28.761  1.00 30.26           O  
ATOM   2341  CB  TYR A 343      23.383  31.342  28.927  1.00 31.60           C  
ATOM   2342  CG  TYR A 343      22.040  31.927  29.173  1.00 32.37           C  
ATOM   2343  CD1 TYR A 343      21.342  32.560  28.186  1.00 35.34           C  
ATOM   2344  CD2 TYR A 343      21.498  31.883  30.413  1.00 34.98           C  
ATOM   2345  CE1 TYR A 343      20.122  33.107  28.440  1.00 37.19           C  
ATOM   2346  CE2 TYR A 343      20.292  32.441  30.681  1.00 36.01           C  
ATOM   2347  CZ  TYR A 343      19.610  33.050  29.700  1.00 35.71           C  
ATOM   2348  OH  TYR A 343      18.410  33.574  29.977  1.00 38.67           O  
ATOM   2349  N   PRO A 344      25.332  29.214  26.643  1.00 31.17           N  
ATOM   2350  CA  PRO A 344      26.602  28.520  26.694  1.00 29.92           C  
ATOM   2351  C   PRO A 344      27.749  29.472  26.995  1.00 29.53           C  
ATOM   2352  O   PRO A 344      27.772  30.577  26.564  1.00 25.93           O  
ATOM   2353  CB  PRO A 344      26.726  27.922  25.315  1.00 31.62           C  
ATOM   2354  CG  PRO A 344      25.877  28.737  24.451  1.00 33.35           C  
ATOM   2355  CD  PRO A 344      24.750  29.174  25.300  1.00 34.70           C  
ATOM   2356  N   GLY A 345      28.677  29.031  27.810  1.00 27.96           N  
ATOM   2357  CA  GLY A 345      29.907  29.784  27.974  1.00 29.18           C  
ATOM   2358  C   GLY A 345      31.167  28.943  28.026  1.00 29.33           C  
ATOM   2359  O   GLY A 345      31.625  28.601  29.092  1.00 29.53           O  
ATOM   2360  N   PHE A 346      31.774  28.669  26.879  1.00 31.30           N  
ATOM   2361  CA  PHE A 346      33.068  27.929  26.854  1.00 30.81           C  
ATOM   2362  C   PHE A 346      34.159  28.985  26.784  1.00 28.92           C  
ATOM   2363  O   PHE A 346      34.211  29.783  25.834  1.00 28.30           O  
ATOM   2364  CB  PHE A 346      33.139  26.939  25.692  1.00 32.63           C  
ATOM   2365  CG  PHE A 346      32.271  25.694  25.902  1.00 43.89           C  
ATOM   2366  CD1 PHE A 346      30.885  25.721  25.646  1.00 45.07           C  
ATOM   2367  CD2 PHE A 346      32.822  24.509  26.397  1.00 44.56           C  
ATOM   2368  CE1 PHE A 346      30.084  24.593  25.854  1.00 49.24           C  
ATOM   2369  CE2 PHE A 346      32.023  23.386  26.615  1.00 48.12           C  
ATOM   2370  CZ  PHE A 346      30.655  23.419  26.344  1.00 50.50           C  
ATOM   2371  N   PHE A 347      34.989  29.067  27.819  1.00 24.30           N  
ATOM   2372  CA  PHE A 347      36.018  30.075  27.822  1.00 27.57           C  
ATOM   2373  C   PHE A 347      37.423  29.543  27.450  1.00 27.94           C  
ATOM   2374  O   PHE A 347      37.921  28.614  28.094  1.00 27.25           O  
ATOM   2375  CB  PHE A 347      36.030  30.815  29.174  1.00 26.24           C  
ATOM   2376  CG  PHE A 347      34.915  31.827  29.287  1.00 27.40           C  
ATOM   2377  CD1 PHE A 347      33.605  31.394  29.413  1.00 29.99           C  
ATOM   2378  CD2 PHE A 347      35.160  33.175  29.156  1.00 24.72           C  
ATOM   2379  CE1 PHE A 347      32.581  32.298  29.431  1.00 30.62           C  
ATOM   2380  CE2 PHE A 347      34.134  34.086  29.181  1.00 27.14           C  
ATOM   2381  CZ  PHE A 347      32.850  33.655  29.321  1.00 27.41           C  
ATOM   2382  N   THR A 348      38.063  30.230  26.491  1.00 29.13           N  
ATOM   2383  CA  THR A 348      39.472  30.024  26.098  1.00 29.73           C  
ATOM   2384  C   THR A 348      40.344  31.056  26.781  1.00 28.87           C  
ATOM   2385  O   THR A 348      39.961  32.228  26.835  1.00 24.24           O  
ATOM   2386  CB  THR A 348      39.638  30.183  24.575  1.00 31.66           C  
ATOM   2387  OG1 THR A 348      38.909  29.151  23.948  1.00 35.74           O  
ATOM   2388  CG2 THR A 348      41.105  30.070  24.117  1.00 36.36           C  
ATOM   2389  N   ILE A 349      41.522  30.629  27.285  1.00 27.99           N  
ATOM   2390  CA  ILE A 349      42.363  31.482  28.122  1.00 28.21           C  
ATOM   2391  C   ILE A 349      43.609  31.989  27.435  1.00 29.15           C  
ATOM   2392  O   ILE A 349      44.214  31.254  26.655  1.00 34.59           O  
ATOM   2393  CB  ILE A 349      42.742  30.795  29.449  1.00 28.94           C  
ATOM   2394  CG1 ILE A 349      41.539  30.081  30.067  1.00 30.14           C  
ATOM   2395  CG2 ILE A 349      43.376  31.807  30.404  1.00 29.09           C  
ATOM   2396  CD1 ILE A 349      40.274  30.911  30.234  1.00 31.61           C  
ATOM   2397  N   PHE A 350      43.954  33.255  27.710  1.00 30.75           N  
ATOM   2398  CA  PHE A 350      45.174  33.911  27.259  1.00 31.29           C  
ATOM   2399  C   PHE A 350      45.898  34.413  28.481  1.00 34.01           C  
ATOM   2400  O   PHE A 350      45.613  35.523  29.002  1.00 34.50           O  
ATOM   2401  CB  PHE A 350      44.899  35.101  26.335  1.00 36.70           C  
ATOM   2402  CG  PHE A 350      44.221  34.733  25.051  1.00 39.57           C  
ATOM   2403  CD1 PHE A 350      44.828  33.872  24.152  1.00 39.21           C  
ATOM   2404  CD2 PHE A 350      42.960  35.242  24.748  1.00 45.16           C  
ATOM   2405  CE1 PHE A 350      44.202  33.522  22.966  1.00 41.24           C  
ATOM   2406  CE2 PHE A 350      42.320  34.889  23.574  1.00 45.67           C  
ATOM   2407  CZ  PHE A 350      42.938  34.018  22.686  1.00 44.54           C  
ATOM   2408  N   ASN A 351      46.829  33.587  28.964  1.00 32.23           N  
ATOM   2409  CA  ASN A 351      47.635  33.947  30.108  1.00 32.32           C  
ATOM   2410  C   ASN A 351      48.799  34.834  29.692  1.00 31.06           C  
ATOM   2411  O   ASN A 351      49.767  34.334  29.148  1.00 33.80           O  
ATOM   2412  CB  ASN A 351      48.145  32.678  30.794  1.00 32.28           C  
ATOM   2413  CG  ASN A 351      47.043  31.922  31.461  1.00 31.39           C  
ATOM   2414  OD1 ASN A 351      46.610  32.285  32.539  1.00 31.91           O  
ATOM   2415  ND2 ASN A 351      46.579  30.854  30.826  1.00 32.77           N  
ATOM   2416  N   GLU A 352      48.715  36.129  29.939  1.00 30.37           N  
ATOM   2417  CA  GLU A 352      49.736  37.071  29.498  1.00 31.02           C  
ATOM   2418  C   GLU A 352      50.655  37.402  30.637  1.00 33.26           C  
ATOM   2419  O   GLU A 352      50.249  37.322  31.773  1.00 29.96           O  
ATOM   2420  CB  GLU A 352      49.094  38.356  28.984  1.00 32.38           C  
ATOM   2421  CG  GLU A 352      48.062  38.093  27.898  1.00 35.97           C  
ATOM   2422  CD  GLU A 352      48.637  37.508  26.607  1.00 38.78           C  
ATOM   2423  OE1 GLU A 352      49.849  37.702  26.302  1.00 40.52           O  
ATOM   2424  OE2 GLU A 352      47.851  36.865  25.880  1.00 40.53           O  
ATOM   2425  N   ASN A 353      51.905  37.769  30.333  1.00 36.27           N  
ATOM   2426  CA  ASN A 353      52.898  37.904  31.387  1.00 37.78           C  
ATOM   2427  C   ASN A 353      52.634  39.119  32.257  1.00 38.15           C  
ATOM   2428  O   ASN A 353      52.972  39.127  33.419  1.00 34.29           O  
ATOM   2429  CB  ASN A 353      54.319  38.120  30.822  1.00 41.05           C  
ATOM   2430  CG  ASN A 353      54.850  36.932  30.043  1.00 38.76           C  
ATOM   2431  OD1 ASN A 353      54.485  35.774  30.272  1.00 41.98           O  
ATOM   2432  ND2 ASN A 353      55.721  37.234  29.101  1.00 32.87           N  
ATOM   2433  N   ASP A 354      52.128  40.193  31.666  1.00 37.65           N  
ATOM   2434  CA  ASP A 354      51.920  41.402  32.433  1.00 37.64           C  
ATOM   2435  C   ASP A 354      50.789  42.281  31.871  1.00 34.19           C  
ATOM   2436  O   ASP A 354      50.084  41.896  30.935  1.00 30.75           O  
ATOM   2437  CB  ASP A 354      53.252  42.186  32.550  1.00 37.10           C  
ATOM   2438  CG  ASP A 354      53.799  42.638  31.191  1.00 44.00           C  
ATOM   2439  OD1 ASP A 354      53.087  42.480  30.162  1.00 43.76           O  
ATOM   2440  OD2 ASP A 354      54.961  43.146  31.153  1.00 48.93           O  
ATOM   2441  N   GLU A 355      50.692  43.493  32.397  1.00 33.79           N  
ATOM   2442  CA  GLU A 355      49.560  44.306  32.168  1.00 34.20           C  
ATOM   2443  C   GLU A 355      49.539  44.747  30.738  1.00 34.30           C  
ATOM   2444  O   GLU A 355      48.501  44.700  30.098  1.00 34.25           O  
ATOM   2445  CB  GLU A 355      49.522  45.496  33.101  1.00 32.46           C  
ATOM   2446  CG  GLU A 355      48.103  46.072  33.174  1.00 34.72           C  
ATOM   2447  CD  GLU A 355      47.994  47.343  34.015  1.00 36.31           C  
ATOM   2448  OE1 GLU A 355      49.006  48.090  34.166  1.00 36.05           O  
ATOM   2449  OE2 GLU A 355      46.870  47.625  34.498  1.00 34.27           O  
ATOM   2450  N   VAL A 356      50.694  45.157  30.228  1.00 34.28           N  
ATOM   2451  CA  VAL A 356      50.777  45.728  28.882  1.00 29.56           C  
ATOM   2452  C   VAL A 356      50.416  44.630  27.855  1.00 28.71           C  
ATOM   2453  O   VAL A 356      49.701  44.835  26.878  1.00 29.66           O  
ATOM   2454  CB  VAL A 356      52.149  46.414  28.689  1.00 33.13           C  
ATOM   2455  CG1 VAL A 356      53.313  45.391  28.673  1.00 33.28           C  
ATOM   2456  CG2 VAL A 356      52.191  47.292  27.447  1.00 35.54           C  
ATOM   2457  N   ALA A 357      50.858  43.425  28.118  1.00 27.43           N  
ATOM   2458  CA  ALA A 357      50.587  42.355  27.234  1.00 28.16           C  
ATOM   2459  C   ALA A 357      49.059  42.062  27.213  1.00 27.08           C  
ATOM   2460  O   ALA A 357      48.449  41.838  26.149  1.00 23.81           O  
ATOM   2461  CB  ALA A 357      51.396  41.129  27.688  1.00 28.22           C  
ATOM   2462  N   LEU A 358      48.446  42.043  28.403  1.00 28.35           N  
ATOM   2463  CA  LEU A 358      46.984  41.857  28.516  1.00 25.59           C  
ATOM   2464  C   LEU A 358      46.272  42.902  27.684  1.00 23.41           C  
ATOM   2465  O   LEU A 358      45.396  42.531  26.920  1.00 23.71           O  
ATOM   2466  CB  LEU A 358      46.530  41.874  29.975  1.00 24.79           C  
ATOM   2467  CG  LEU A 358      45.050  42.039  30.342  1.00 23.89           C  
ATOM   2468  CD1 LEU A 358      44.775  41.324  31.683  1.00 22.34           C  
ATOM   2469  CD2 LEU A 358      44.667  43.513  30.460  1.00 23.59           C  
ATOM   2470  N   LEU A 359      46.679  44.175  27.777  1.00 21.16           N  
ATOM   2471  CA  LEU A 359      46.096  45.224  26.929  1.00 26.31           C  
ATOM   2472  C   LEU A 359      46.283  45.011  25.426  1.00 29.65           C  
ATOM   2473  O   LEU A 359      45.367  45.236  24.614  1.00 27.58           O  
ATOM   2474  CB  LEU A 359      46.637  46.644  27.301  1.00 26.58           C  
ATOM   2475  CG  LEU A 359      46.150  47.164  28.634  1.00 26.60           C  
ATOM   2476  CD1 LEU A 359      46.836  48.455  29.006  1.00 28.76           C  
ATOM   2477  CD2 LEU A 359      44.634  47.329  28.603  1.00 26.54           C  
ATOM   2478  N   GLN A 360      47.486  44.595  25.051  1.00 30.97           N  
ATOM   2479  CA  GLN A 360      47.823  44.421  23.642  1.00 29.58           C  
ATOM   2480  C   GLN A 360      47.088  43.234  23.102  1.00 26.10           C  
ATOM   2481  O   GLN A 360      46.604  43.261  21.985  1.00 29.47           O  
ATOM   2482  CB  GLN A 360      49.365  44.216  23.481  1.00 34.10           C  
ATOM   2483  CG  GLN A 360      50.155  45.507  23.696  1.00 33.89           C  
ATOM   2484  CD  GLN A 360      51.670  45.318  23.727  1.00 39.19           C  
ATOM   2485  OE1 GLN A 360      52.397  46.099  23.127  1.00 45.39           O  
ATOM   2486  NE2 GLN A 360      52.146  44.270  24.402  1.00 39.56           N  
ATOM   2487  N   ARG A 361      46.987  42.188  23.893  1.00 24.48           N  
ATOM   2488  CA  ARG A 361      46.138  41.061  23.511  1.00 28.55           C  
ATOM   2489  C   ARG A 361      44.611  41.478  23.337  1.00 31.04           C  
ATOM   2490  O   ARG A 361      43.919  40.959  22.462  1.00 24.70           O  
ATOM   2491  CB  ARG A 361      46.289  39.996  24.573  1.00 31.65           C  
ATOM   2492  CG  ARG A 361      45.318  38.835  24.507  1.00 40.32           C  
ATOM   2493  CD  ARG A 361      45.457  38.043  23.229  1.00 47.38           C  
ATOM   2494  NE  ARG A 361      46.737  37.353  23.164  1.00 57.28           N  
ATOM   2495  CZ  ARG A 361      47.115  36.589  22.145  1.00 63.33           C  
ATOM   2496  NH1 ARG A 361      46.308  36.427  21.099  1.00 64.77           N  
ATOM   2497  NH2 ARG A 361      48.301  35.984  22.171  1.00 62.61           N  
ATOM   2498  N   PHE A 362      44.114  42.398  24.177  1.00 27.94           N  
ATOM   2499  CA  PHE A 362      42.692  42.815  24.100  1.00 24.97           C  
ATOM   2500  C   PHE A 362      42.456  43.556  22.804  1.00 25.83           C  
ATOM   2501  O   PHE A 362      41.572  43.179  22.038  1.00 22.69           O  
ATOM   2502  CB  PHE A 362      42.347  43.678  25.326  1.00 28.04           C  
ATOM   2503  CG  PHE A 362      40.887  43.994  25.488  1.00 27.55           C  
ATOM   2504  CD1 PHE A 362      39.946  42.990  25.583  1.00 27.76           C  
ATOM   2505  CD2 PHE A 362      40.466  45.295  25.499  1.00 26.66           C  
ATOM   2506  CE1 PHE A 362      38.594  43.287  25.746  1.00 30.27           C  
ATOM   2507  CE2 PHE A 362      39.119  45.599  25.637  1.00 28.68           C  
ATOM   2508  CZ  PHE A 362      38.174  44.584  25.761  1.00 25.41           C  
ATOM   2509  N   PHE A 363      43.295  44.566  22.542  1.00 25.63           N  
ATOM   2510  CA  PHE A 363      43.214  45.374  21.349  1.00 26.12           C  
ATOM   2511  C   PHE A 363      43.403  44.545  20.081  1.00 30.02           C  
ATOM   2512  O   PHE A 363      42.617  44.636  19.120  1.00 32.45           O  
ATOM   2513  CB  PHE A 363      44.217  46.520  21.401  1.00 26.39           C  
ATOM   2514  CG  PHE A 363      44.032  47.478  22.565  1.00 27.37           C  
ATOM   2515  CD1 PHE A 363      42.779  47.684  23.186  1.00 29.92           C  
ATOM   2516  CD2 PHE A 363      45.113  48.210  23.040  1.00 29.83           C  
ATOM   2517  CE1 PHE A 363      42.624  48.604  24.237  1.00 29.52           C  
ATOM   2518  CE2 PHE A 363      44.973  49.103  24.117  1.00 32.88           C  
ATOM   2519  CZ  PHE A 363      43.707  49.301  24.723  1.00 31.74           C  
ATOM   2520  N   GLU A 364      44.400  43.684  20.078  1.00 29.72           N  
ATOM   2521  CA  GLU A 364      44.606  42.868  18.916  1.00 29.29           C  
ATOM   2522  C   GLU A 364      43.388  41.952  18.644  1.00 27.05           C  
ATOM   2523  O   GLU A 364      42.960  41.801  17.512  1.00 24.61           O  
ATOM   2524  CB  GLU A 364      45.870  42.043  19.038  1.00 32.80           C  
ATOM   2525  CG  GLU A 364      46.235  41.437  17.691  1.00 40.24           C  
ATOM   2526  CD  GLU A 364      47.604  40.776  17.679  1.00 50.76           C  
ATOM   2527  OE1 GLU A 364      48.498  41.367  17.027  1.00 60.22           O  
ATOM   2528  OE2 GLU A 364      47.769  39.675  18.299  1.00 49.46           O  
ATOM   2529  N   HIS A 365      42.836  41.330  19.670  1.00 23.80           N  
ATOM   2530  CA  HIS A 365      41.635  40.532  19.429  1.00 23.83           C  
ATOM   2531  C   HIS A 365      40.451  41.320  18.859  1.00 23.49           C  
ATOM   2532  O   HIS A 365      39.687  40.865  18.004  1.00 22.54           O  
ATOM   2533  CB  HIS A 365      41.235  39.834  20.698  1.00 22.40           C  
ATOM   2534  CG  HIS A 365      40.536  38.562  20.441  1.00 22.11           C  
ATOM   2535  ND1 HIS A 365      40.361  37.604  21.407  1.00 21.54           N  
ATOM   2536  CD2 HIS A 365      39.984  38.070  19.308  1.00 23.31           C  
ATOM   2537  CE1 HIS A 365      39.709  36.581  20.882  1.00 22.41           C  
ATOM   2538  NE2 HIS A 365      39.447  36.849  19.614  1.00 19.71           N  
ATOM   2539  N   ILE A 366      40.311  42.533  19.333  1.00 24.71           N  
ATOM   2540  CA  ILE A 366      39.262  43.391  18.839  1.00 26.33           C  
ATOM   2541  C   ILE A 366      39.499  43.710  17.356  1.00 27.16           C  
ATOM   2542  O   ILE A 366      38.562  43.681  16.553  1.00 24.63           O  
ATOM   2543  CB  ILE A 366      39.223  44.704  19.628  1.00 23.01           C  
ATOM   2544  CG1 ILE A 366      38.503  44.486  20.952  1.00 22.27           C  
ATOM   2545  CG2 ILE A 366      38.519  45.746  18.805  1.00 24.21           C  
ATOM   2546  CD1 ILE A 366      38.651  45.659  21.930  1.00 23.21           C  
ATOM   2547  N   ARG A 367      40.737  44.068  17.022  1.00 28.80           N  
ATOM   2548  CA  ARG A 367      41.132  44.274  15.621  1.00 29.42           C  
ATOM   2549  C   ARG A 367      40.909  42.995  14.798  1.00 29.19           C  
ATOM   2550  O   ARG A 367      40.426  43.086  13.682  1.00 27.95           O  
ATOM   2551  CB  ARG A 367      42.588  44.746  15.520  1.00 31.83           C  
ATOM   2552  CG  ARG A 367      42.755  46.221  15.680  1.00 30.49           C  
ATOM   2553  CD  ARG A 367      44.187  46.657  15.333  1.00 32.42           C  
ATOM   2554  NE  ARG A 367      45.175  45.844  16.030  1.00 31.16           N  
ATOM   2555  CZ  ARG A 367      45.791  46.132  17.183  1.00 33.12           C  
ATOM   2556  NH1 ARG A 367      45.590  47.281  17.855  1.00 31.29           N  
ATOM   2557  NH2 ARG A 367      46.671  45.248  17.668  1.00 33.90           N  
ATOM   2558  N   ASP A 368      41.207  41.820  15.344  1.00 30.39           N  
ATOM   2559  CA  ASP A 368      40.944  40.583  14.628  1.00 35.11           C  
ATOM   2560  C   ASP A 368      39.448  40.361  14.241  1.00 35.06           C  
ATOM   2561  O   ASP A 368      39.176  39.911  13.119  1.00 31.12           O  
ATOM   2562  CB  ASP A 368      41.422  39.355  15.436  1.00 44.37           C  
ATOM   2563  CG  ASP A 368      42.960  39.192  15.457  1.00 59.73           C  
ATOM   2564  OD1 ASP A 368      43.666  39.803  14.598  1.00 71.61           O  
ATOM   2565  OD2 ASP A 368      43.467  38.436  16.353  1.00 63.31           O  
ATOM   2566  N   VAL A 369      38.497  40.605  15.163  1.00 29.89           N  
ATOM   2567  CA  VAL A 369      37.064  40.205  14.926  1.00 27.61           C  
ATOM   2568  C   VAL A 369      36.152  41.294  14.393  1.00 23.60           C  
ATOM   2569  O   VAL A 369      35.108  41.004  13.850  1.00 28.03           O  
ATOM   2570  CB  VAL A 369      36.390  39.533  16.159  1.00 30.12           C  
ATOM   2571  CG1 VAL A 369      37.150  38.263  16.561  1.00 30.96           C  
ATOM   2572  CG2 VAL A 369      36.230  40.511  17.335  1.00 28.87           C  
ATOM   2573  N   ARG A 370      36.539  42.537  14.582  1.00 23.92           N  
ATOM   2574  CA  ARG A 370      35.853  43.694  14.070  1.00 28.59           C  
ATOM   2575  C   ARG A 370      34.404  43.715  14.619  1.00 25.94           C  
ATOM   2576  O   ARG A 370      33.450  43.560  13.843  1.00 23.40           O  
ATOM   2577  CB  ARG A 370      35.880  43.689  12.527  1.00 31.90           C  
ATOM   2578  CG  ARG A 370      37.284  43.615  11.915  1.00 35.31           C  
ATOM   2579  CD  ARG A 370      37.175  43.283  10.435  1.00 36.92           C  
ATOM   2580  NE  ARG A 370      38.431  43.568   9.771  1.00 43.11           N  
ATOM   2581  CZ  ARG A 370      38.596  43.647   8.448  1.00 46.40           C  
ATOM   2582  NH1 ARG A 370      37.591  43.452   7.622  1.00 44.66           N  
ATOM   2583  NH2 ARG A 370      39.788  43.936   7.939  1.00 48.54           N  
ATOM   2584  N   PRO A 371      34.270  43.834  15.953  1.00 23.91           N  
ATOM   2585  CA  PRO A 371      32.924  43.890  16.518  1.00 22.37           C  
ATOM   2586  C   PRO A 371      32.306  45.185  16.013  1.00 21.26           C  
ATOM   2587  O   PRO A 371      32.975  46.179  15.860  1.00 19.59           O  
ATOM   2588  CB  PRO A 371      33.167  43.891  18.016  1.00 22.44           C  
ATOM   2589  CG  PRO A 371      34.474  44.611  18.154  1.00 25.02           C  
ATOM   2590  CD  PRO A 371      35.298  44.257  16.932  1.00 23.19           C  
ATOM   2591  N   THR A 372      31.032  45.136  15.726  1.00 22.20           N  
ATOM   2592  CA  THR A 372      30.298  46.357  15.527  1.00 23.58           C  
ATOM   2593  C   THR A 372      29.316  46.762  16.649  1.00 21.54           C  
ATOM   2594  O   THR A 372      28.812  47.905  16.660  1.00 21.10           O  
ATOM   2595  CB  THR A 372      29.689  46.355  14.153  1.00 27.02           C  
ATOM   2596  OG1 THR A 372      29.445  47.731  13.784  1.00 45.06           O  
ATOM   2597  CG2 THR A 372      28.505  45.556  14.131  1.00 25.39           C  
ATOM   2598  N   VAL A 373      29.105  45.866  17.605  1.00 20.12           N  
ATOM   2599  CA  VAL A 373      28.681  46.247  18.900  1.00 19.01           C  
ATOM   2600  C   VAL A 373      29.668  45.781  19.949  1.00 21.51           C  
ATOM   2601  O   VAL A 373      30.093  44.633  19.934  1.00 21.16           O  
ATOM   2602  CB  VAL A 373      27.310  45.646  19.209  1.00 19.86           C  
ATOM   2603  CG1 VAL A 373      26.924  45.861  20.676  1.00 19.26           C  
ATOM   2604  CG2 VAL A 373      26.274  46.257  18.295  1.00 20.62           C  
ATOM   2605  N   ILE A 374      30.040  46.687  20.851  1.00 21.24           N  
ATOM   2606  CA  ILE A 374      30.710  46.307  22.078  1.00 22.63           C  
ATOM   2607  C   ILE A 374      29.821  46.702  23.246  1.00 20.05           C  
ATOM   2608  O   ILE A 374      29.540  47.871  23.405  1.00 20.48           O  
ATOM   2609  CB  ILE A 374      32.080  47.016  22.243  1.00 24.61           C  
ATOM   2610  CG1 ILE A 374      33.137  46.294  21.429  1.00 27.87           C  
ATOM   2611  CG2 ILE A 374      32.596  46.875  23.668  1.00 27.70           C  
ATOM   2612  CD1 ILE A 374      34.496  46.965  21.470  1.00 29.91           C  
ATOM   2613  N   SER A 375      29.455  45.751  24.081  1.00 18.50           N  
ATOM   2614  CA  SER A 375      28.581  45.984  25.196  1.00 20.10           C  
ATOM   2615  C   SER A 375      29.327  45.842  26.496  1.00 20.62           C  
ATOM   2616  O   SER A 375      30.272  45.035  26.602  1.00 21.21           O  
ATOM   2617  CB  SER A 375      27.503  44.943  25.161  1.00 22.23           C  
ATOM   2618  OG  SER A 375      26.528  45.247  26.159  1.00 29.97           O  
ATOM   2619  N   THR A 376      28.899  46.586  27.495  1.00 19.87           N  
ATOM   2620  CA  THR A 376      29.420  46.483  28.863  1.00 18.93           C  
ATOM   2621  C   THR A 376      28.272  46.622  29.867  1.00 19.96           C  
ATOM   2622  O   THR A 376      27.120  46.801  29.483  1.00 20.50           O  
ATOM   2623  CB  THR A 376      30.383  47.595  29.184  1.00 20.94           C  
ATOM   2624  OG1 THR A 376      29.759  48.881  28.991  1.00 20.65           O  
ATOM   2625  CG2 THR A 376      31.557  47.511  28.306  1.00 23.22           C  
ATOM   2626  N   PHE A 377      28.588  46.525  31.147  1.00 19.41           N  
ATOM   2627  CA  PHE A 377      27.676  46.934  32.191  1.00 20.83           C  
ATOM   2628  C   PHE A 377      28.354  48.012  33.016  1.00 19.81           C  
ATOM   2629  O   PHE A 377      29.280  47.697  33.706  1.00 19.01           O  
ATOM   2630  CB  PHE A 377      27.215  45.720  33.021  1.00 20.45           C  
ATOM   2631  CG  PHE A 377      26.045  46.011  33.926  1.00 19.66           C  
ATOM   2632  CD1 PHE A 377      26.228  46.694  35.125  1.00 18.26           C  
ATOM   2633  CD2 PHE A 377      24.781  45.552  33.604  1.00 22.50           C  
ATOM   2634  CE1 PHE A 377      25.152  46.983  35.954  1.00 19.67           C  
ATOM   2635  CE2 PHE A 377      23.701  45.820  34.437  1.00 22.30           C  
ATOM   2636  CZ  PHE A 377      23.905  46.555  35.626  1.00 20.76           C  
ATOM   2637  N   ASN A 378      27.946  49.286  32.841  1.00 19.98           N  
ATOM   2638  CA  ASN A 378      28.616  50.414  33.457  1.00 20.81           C  
ATOM   2639  C   ASN A 378      30.055  50.609  32.953  1.00 22.25           C  
ATOM   2640  O   ASN A 378      30.869  51.150  33.642  1.00 20.58           O  
ATOM   2641  CB  ASN A 378      28.609  50.295  34.997  1.00 21.86           C  
ATOM   2642  CG  ASN A 378      28.807  51.648  35.724  1.00 25.70           C  
ATOM   2643  OD1 ASN A 378      28.424  52.756  35.274  1.00 24.95           O  
ATOM   2644  ND2 ASN A 378      29.501  51.558  36.845  1.00 28.85           N  
ATOM   2645  N   GLY A 379      30.320  50.268  31.700  1.00 20.96           N  
ATOM   2646  CA  GLY A 379      31.609  50.521  31.118  1.00 19.61           C  
ATOM   2647  C   GLY A 379      31.961  51.938  30.843  1.00 20.59           C  
ATOM   2648  O   GLY A 379      33.135  52.253  30.808  1.00 21.36           O  
ATOM   2649  N   ASP A 380      30.991  52.833  30.664  1.00 20.97           N  
ATOM   2650  CA  ASP A 380      31.310  54.224  30.427  1.00 21.69           C  
ATOM   2651  C   ASP A 380      31.897  54.869  31.652  1.00 24.63           C  
ATOM   2652  O   ASP A 380      32.725  55.761  31.519  1.00 27.54           O  
ATOM   2653  CB  ASP A 380      30.096  55.052  29.991  1.00 25.30           C  
ATOM   2654  CG  ASP A 380      29.875  55.052  28.443  1.00 28.38           C  
ATOM   2655  OD1 ASP A 380      30.842  55.029  27.619  1.00 26.37           O  
ATOM   2656  OD2 ASP A 380      28.692  55.061  28.081  1.00 28.32           O  
ATOM   2657  N   PHE A 381      31.499  54.427  32.843  1.00 26.79           N  
ATOM   2658  CA  PHE A 381      32.026  54.994  34.068  1.00 31.96           C  
ATOM   2659  C   PHE A 381      33.144  54.221  34.768  1.00 27.88           C  
ATOM   2660  O   PHE A 381      33.911  54.814  35.466  1.00 27.54           O  
ATOM   2661  CB  PHE A 381      30.896  55.373  35.063  1.00 39.84           C  
ATOM   2662  CG  PHE A 381      30.259  56.719  34.715  1.00 56.76           C  
ATOM   2663  CD1 PHE A 381      29.449  56.855  33.565  1.00 59.28           C  
ATOM   2664  CD2 PHE A 381      30.536  57.877  35.474  1.00 67.95           C  
ATOM   2665  CE1 PHE A 381      28.897  58.081  33.211  1.00 67.70           C  
ATOM   2666  CE2 PHE A 381      29.976  59.115  35.124  1.00 74.13           C  
ATOM   2667  CZ  PHE A 381      29.152  59.213  33.997  1.00 75.24           C  
ATOM   2668  N   PHE A 382      33.243  52.925  34.579  1.00 24.92           N  
ATOM   2669  CA  PHE A 382      34.321  52.169  35.172  1.00 24.16           C  
ATOM   2670  C   PHE A 382      35.283  51.523  34.102  1.00 22.61           C  
ATOM   2671  O   PHE A 382      36.339  52.033  33.916  1.00 25.90           O  
ATOM   2672  CB  PHE A 382      33.727  51.151  36.123  1.00 24.24           C  
ATOM   2673  CG  PHE A 382      34.741  50.300  36.784  1.00 25.93           C  
ATOM   2674  CD1 PHE A 382      35.732  50.880  37.586  1.00 28.21           C  
ATOM   2675  CD2 PHE A 382      34.743  48.944  36.603  1.00 27.30           C  
ATOM   2676  CE1 PHE A 382      36.718  50.103  38.172  1.00 29.57           C  
ATOM   2677  CE2 PHE A 382      35.728  48.152  37.200  1.00 28.29           C  
ATOM   2678  CZ  PHE A 382      36.703  48.722  37.994  1.00 26.36           C  
ATOM   2679  N   ASP A 383      34.858  50.439  33.463  1.00 22.99           N  
ATOM   2680  CA  ASP A 383      35.703  49.697  32.532  1.00 22.52           C  
ATOM   2681  C   ASP A 383      36.533  50.559  31.578  1.00 25.45           C  
ATOM   2682  O   ASP A 383      37.763  50.512  31.601  1.00 25.26           O  
ATOM   2683  CB  ASP A 383      34.858  48.704  31.728  1.00 22.42           C  
ATOM   2684  CG  ASP A 383      34.105  47.730  32.612  1.00 23.34           C  
ATOM   2685  OD1 ASP A 383      33.201  48.172  33.352  1.00 23.96           O  
ATOM   2686  OD2 ASP A 383      34.417  46.521  32.568  1.00 19.78           O  
ATOM   2687  N   TRP A 384      35.858  51.330  30.731  1.00 24.70           N  
ATOM   2688  CA  TRP A 384      36.511  52.021  29.637  1.00 26.08           C  
ATOM   2689  C   TRP A 384      37.560  53.020  30.134  1.00 28.12           C  
ATOM   2690  O   TRP A 384      38.689  52.982  29.680  1.00 22.86           O  
ATOM   2691  CB  TRP A 384      35.520  52.694  28.694  1.00 26.83           C  
ATOM   2692  CG  TRP A 384      34.958  51.818  27.650  1.00 23.84           C  
ATOM   2693  CD1 TRP A 384      33.666  51.403  27.535  1.00 25.12           C  
ATOM   2694  CD2 TRP A 384      35.644  51.304  26.527  1.00 23.15           C  
ATOM   2695  NE1 TRP A 384      33.513  50.637  26.425  1.00 23.59           N  
ATOM   2696  CE2 TRP A 384      34.724  50.550  25.794  1.00 24.07           C  
ATOM   2697  CE3 TRP A 384      36.980  51.379  26.089  1.00 24.02           C  
ATOM   2698  CZ2 TRP A 384      35.075  49.879  24.652  1.00 28.28           C  
ATOM   2699  CZ3 TRP A 384      37.342  50.695  24.986  1.00 26.09           C  
ATOM   2700  CH2 TRP A 384      36.396  49.971  24.241  1.00 29.31           C  
ATOM   2701  N   PRO A 385      37.182  53.927  31.055  1.00 27.71           N  
ATOM   2702  CA  PRO A 385      38.165  54.891  31.557  1.00 28.30           C  
ATOM   2703  C   PRO A 385      39.376  54.237  32.249  1.00 26.16           C  
ATOM   2704  O   PRO A 385      40.520  54.729  32.110  1.00 25.98           O  
ATOM   2705  CB  PRO A 385      37.376  55.786  32.527  1.00 27.09           C  
ATOM   2706  CG  PRO A 385      36.084  55.146  32.706  1.00 28.48           C  
ATOM   2707  CD  PRO A 385      35.841  54.194  31.576  1.00 30.17           C  
ATOM   2708  N   PHE A 386      39.130  53.101  32.889  1.00 23.56           N  
ATOM   2709  CA  PHE A 386      40.194  52.357  33.490  1.00 24.68           C  
ATOM   2710  C   PHE A 386      41.152  51.837  32.413  1.00 25.39           C  
ATOM   2711  O   PHE A 386      42.349  52.078  32.479  1.00 24.62           O  
ATOM   2712  CB  PHE A 386      39.675  51.207  34.347  1.00 25.77           C  
ATOM   2713  CG  PHE A 386      40.541  50.916  35.538  1.00 29.67           C  
ATOM   2714  CD1 PHE A 386      41.752  50.198  35.386  1.00 30.69           C  
ATOM   2715  CD2 PHE A 386      40.220  51.435  36.790  1.00 26.44           C  
ATOM   2716  CE1 PHE A 386      42.569  49.951  36.491  1.00 30.39           C  
ATOM   2717  CE2 PHE A 386      41.019  51.179  37.880  1.00 29.62           C  
ATOM   2718  CZ  PHE A 386      42.199  50.443  37.737  1.00 29.99           C  
ATOM   2719  N   ILE A 387      40.610  51.162  31.417  1.00 23.74           N  
ATOM   2720  CA  ILE A 387      41.382  50.746  30.297  1.00 23.90           C  
ATOM   2721  C   ILE A 387      42.118  51.883  29.643  1.00 25.73           C  
ATOM   2722  O   ILE A 387      43.309  51.753  29.417  1.00 24.71           O  
ATOM   2723  CB  ILE A 387      40.560  50.017  29.265  1.00 22.49           C  
ATOM   2724  CG1 ILE A 387      40.056  48.728  29.864  1.00 19.20           C  
ATOM   2725  CG2 ILE A 387      41.408  49.673  28.032  1.00 24.95           C  
ATOM   2726  CD1 ILE A 387      39.126  47.964  28.952  1.00 18.38           C  
ATOM   2727  N   HIS A 388      41.458  53.000  29.384  1.00 27.02           N  
ATOM   2728  CA  HIS A 388      42.132  54.170  28.783  1.00 26.08           C  
ATOM   2729  C   HIS A 388      43.319  54.690  29.631  1.00 28.90           C  
ATOM   2730  O   HIS A 388      44.357  55.073  29.077  1.00 31.77           O  
ATOM   2731  CB  HIS A 388      41.119  55.287  28.612  1.00 27.50           C  
ATOM   2732  CG  HIS A 388      41.579  56.437  27.777  1.00 28.08           C  
ATOM   2733  ND1 HIS A 388      40.900  57.634  27.740  1.00 36.45           N  
ATOM   2734  CD2 HIS A 388      42.643  56.594  26.952  1.00 28.72           C  
ATOM   2735  CE1 HIS A 388      41.515  58.479  26.925  1.00 30.48           C  
ATOM   2736  NE2 HIS A 388      42.581  57.872  26.446  1.00 29.64           N  
ATOM   2737  N   ASN A 389      43.182  54.735  30.950  1.00 28.11           N  
ATOM   2738  CA  ASN A 389      44.221  55.347  31.768  1.00 29.74           C  
ATOM   2739  C   ASN A 389      45.454  54.456  31.932  1.00 29.66           C  
ATOM   2740  O   ASN A 389      46.567  54.921  31.819  1.00 28.48           O  
ATOM   2741  CB  ASN A 389      43.661  55.866  33.082  1.00 34.70           C  
ATOM   2742  CG  ASN A 389      42.882  57.181  32.892  1.00 38.55           C  
ATOM   2743  OD1 ASN A 389      43.448  58.197  32.442  1.00 41.06           O  
ATOM   2744  ND2 ASN A 389      41.565  57.162  33.195  1.00 37.75           N  
ATOM   2745  N   ARG A 390      45.246  53.156  32.054  1.00 29.85           N  
ATOM   2746  CA  ARG A 390      46.321  52.200  32.047  1.00 31.04           C  
ATOM   2747  C   ARG A 390      47.014  52.141  30.678  1.00 35.11           C  
ATOM   2748  O   ARG A 390      48.252  51.986  30.613  1.00 38.24           O  
ATOM   2749  CB  ARG A 390      45.820  50.816  32.430  1.00 29.71           C  
ATOM   2750  CG  ARG A 390      45.025  50.784  33.720  1.00 32.15           C  
ATOM   2751  CD  ARG A 390      45.798  51.336  34.907  1.00 33.65           C  
ATOM   2752  NE  ARG A 390      47.025  50.554  35.144  1.00 34.58           N  
ATOM   2753  CZ  ARG A 390      48.069  50.974  35.883  1.00 31.86           C  
ATOM   2754  NH1 ARG A 390      48.030  52.136  36.482  1.00 29.34           N  
ATOM   2755  NH2 ARG A 390      49.172  50.212  36.015  1.00 33.39           N  
ATOM   2756  N   SER A 391      46.243  52.280  29.598  1.00 32.55           N  
ATOM   2757  CA  SER A 391      46.832  52.328  28.270  1.00 31.09           C  
ATOM   2758  C   SER A 391      47.826  53.449  28.157  1.00 30.10           C  
ATOM   2759  O   SER A 391      48.937  53.240  27.712  1.00 35.16           O  
ATOM   2760  CB  SER A 391      45.764  52.424  27.177  1.00 29.50           C  
ATOM   2761  OG  SER A 391      45.157  51.168  27.027  1.00 28.18           O  
ATOM   2762  N   LYS A 392      47.415  54.632  28.560  1.00 32.71           N  
ATOM   2763  CA  LYS A 392      48.282  55.798  28.606  1.00 35.02           C  
ATOM   2764  C   LYS A 392      49.505  55.592  29.533  1.00 36.30           C  
ATOM   2765  O   LYS A 392      50.589  55.949  29.187  1.00 35.42           O  
ATOM   2766  CB  LYS A 392      47.477  57.011  29.083  1.00 37.56           C  
ATOM   2767  CG  LYS A 392      46.513  57.538  28.005  1.00 39.54           C  
ATOM   2768  CD  LYS A 392      46.030  58.965  28.256  1.00 43.10           C  
ATOM   2769  CE  LYS A 392      44.737  58.988  29.047  1.00 44.80           C  
ATOM   2770  NZ  LYS A 392      44.361  60.350  29.533  1.00 43.96           N  
ATOM   2771  N   ILE A 393      49.333  54.986  30.699  1.00 38.20           N  
ATOM   2772  CA  ILE A 393      50.474  54.795  31.553  1.00 39.33           C  
ATOM   2773  C   ILE A 393      51.545  53.950  30.852  1.00 39.63           C  
ATOM   2774  O   ILE A 393      52.703  54.190  31.041  1.00 47.23           O  
ATOM   2775  CB  ILE A 393      50.098  54.216  32.951  1.00 40.43           C  
ATOM   2776  CG1 ILE A 393      50.094  55.345  34.022  1.00 44.22           C  
ATOM   2777  CG2 ILE A 393      51.124  53.198  33.404  1.00 38.20           C  
ATOM   2778  CD1 ILE A 393      48.732  55.691  34.602  1.00 45.59           C  
ATOM   2779  N   HIS A 394      51.161  52.968  30.054  1.00 37.08           N  
ATOM   2780  CA  HIS A 394      52.117  52.160  29.326  1.00 38.33           C  
ATOM   2781  C   HIS A 394      52.458  52.698  27.917  1.00 34.74           C  
ATOM   2782  O   HIS A 394      52.918  51.948  27.082  1.00 33.32           O  
ATOM   2783  CB  HIS A 394      51.612  50.722  29.170  1.00 36.40           C  
ATOM   2784  CG  HIS A 394      51.401  50.007  30.448  1.00 39.87           C  
ATOM   2785  ND1 HIS A 394      52.443  49.552  31.219  1.00 43.31           N  
ATOM   2786  CD2 HIS A 394      50.266  49.605  31.072  1.00 40.47           C  
ATOM   2787  CE1 HIS A 394      51.963  48.923  32.278  1.00 43.28           C  
ATOM   2788  NE2 HIS A 394      50.645  48.930  32.204  1.00 39.39           N  
ATOM   2789  N   GLY A 395      52.205  53.964  27.643  1.00 36.51           N  
ATOM   2790  CA  GLY A 395      52.535  54.482  26.335  1.00 38.41           C  
ATOM   2791  C   GLY A 395      51.759  53.970  25.142  1.00 37.85           C  
ATOM   2792  O   GLY A 395      52.216  54.117  24.015  1.00 38.89           O  
ATOM   2793  N   LEU A 396      50.563  53.423  25.358  1.00 40.38           N  
ATOM   2794  CA  LEU A 396      49.710  52.985  24.254  1.00 36.45           C  
ATOM   2795  C   LEU A 396      48.660  54.031  23.915  1.00 40.00           C  
ATOM   2796  O   LEU A 396      48.179  54.745  24.809  1.00 41.02           O  
ATOM   2797  CB  LEU A 396      49.015  51.699  24.606  1.00 34.90           C  
ATOM   2798  CG  LEU A 396      49.881  50.501  24.959  1.00 37.45           C  
ATOM   2799  CD1 LEU A 396      49.001  49.272  25.249  1.00 34.55           C  
ATOM   2800  CD2 LEU A 396      50.884  50.240  23.847  1.00 36.64           C  
ATOM   2801  N   ASP A 397      48.272  54.086  22.636  1.00 39.34           N  
ATOM   2802  CA  ASP A 397      47.255  55.039  22.171  1.00 42.40           C  
ATOM   2803  C   ASP A 397      45.962  54.296  21.795  1.00 39.06           C  
ATOM   2804  O   ASP A 397      45.864  53.648  20.728  1.00 33.26           O  
ATOM   2805  CB  ASP A 397      47.742  55.868  20.978  1.00 45.14           C  
ATOM   2806  CG  ASP A 397      46.738  56.981  20.602  1.00 52.49           C  
ATOM   2807  OD1 ASP A 397      45.525  56.683  20.496  1.00 49.16           O  
ATOM   2808  OD2 ASP A 397      47.145  58.152  20.431  1.00 53.01           O  
ATOM   2809  N   MET A 398      44.980  54.366  22.686  1.00 35.95           N  
ATOM   2810  CA  MET A 398      43.785  53.525  22.541  1.00 32.22           C  
ATOM   2811  C   MET A 398      43.051  53.926  21.282  1.00 26.17           C  
ATOM   2812  O   MET A 398      42.597  53.093  20.538  1.00 24.66           O  
ATOM   2813  CB  MET A 398      42.853  53.620  23.756  1.00 32.73           C  
ATOM   2814  CG  MET A 398      41.877  52.447  23.808  1.00 34.24           C  
ATOM   2815  SD  MET A 398      40.814  52.415  25.244  1.00 34.22           S  
ATOM   2816  CE  MET A 398      40.049  54.036  25.163  1.00 27.21           C  
ATOM   2817  N   PHE A 399      42.973  55.208  21.020  1.00 25.07           N  
ATOM   2818  CA  PHE A 399      42.350  55.614  19.815  1.00 28.45           C  
ATOM   2819  C   PHE A 399      43.024  54.968  18.580  1.00 32.65           C  
ATOM   2820  O   PHE A 399      42.307  54.443  17.720  1.00 35.58           O  
ATOM   2821  CB  PHE A 399      42.262  57.130  19.694  1.00 29.85           C  
ATOM   2822  CG  PHE A 399      41.521  57.573  18.466  1.00 35.72           C  
ATOM   2823  CD1 PHE A 399      40.130  57.457  18.397  1.00 38.10           C  
ATOM   2824  CD2 PHE A 399      42.192  58.075  17.369  1.00 41.43           C  
ATOM   2825  CE1 PHE A 399      39.433  57.859  17.264  1.00 40.64           C  
ATOM   2826  CE2 PHE A 399      41.493  58.487  16.237  1.00 45.73           C  
ATOM   2827  CZ  PHE A 399      40.107  58.385  16.186  1.00 41.55           C  
ATOM   2828  N   ASP A 400      44.367  54.964  18.493  1.00 34.10           N  
ATOM   2829  CA  ASP A 400      45.047  54.339  17.344  1.00 33.61           C  
ATOM   2830  C   ASP A 400      44.895  52.867  17.339  1.00 29.65           C  
ATOM   2831  O   ASP A 400      44.887  52.263  16.299  1.00 27.95           O  
ATOM   2832  CB  ASP A 400      46.552  54.622  17.301  1.00 39.42           C  
ATOM   2833  CG  ASP A 400      46.864  56.061  17.024  1.00 44.99           C  
ATOM   2834  OD1 ASP A 400      46.075  56.712  16.313  1.00 49.17           O  
ATOM   2835  OD2 ASP A 400      47.918  56.542  17.520  1.00 56.88           O  
ATOM   2836  N   GLU A 401      44.778  52.258  18.496  1.00 30.71           N  
ATOM   2837  CA  GLU A 401      44.715  50.791  18.533  1.00 32.58           C  
ATOM   2838  C   GLU A 401      43.332  50.243  18.123  1.00 32.96           C  
ATOM   2839  O   GLU A 401      43.230  49.230  17.414  1.00 34.96           O  
ATOM   2840  CB  GLU A 401      45.056  50.307  19.953  1.00 38.25           C  
ATOM   2841  CG  GLU A 401      46.436  50.744  20.471  1.00 39.74           C  
ATOM   2842  CD  GLU A 401      47.548  49.729  20.198  1.00 46.13           C  
ATOM   2843  OE1 GLU A 401      47.299  48.478  20.157  1.00 40.62           O  
ATOM   2844  OE2 GLU A 401      48.696  50.214  20.049  1.00 55.22           O  
ATOM   2845  N   ILE A 402      42.261  50.898  18.573  1.00 29.02           N  
ATOM   2846  CA  ILE A 402      40.891  50.398  18.288  1.00 26.09           C  
ATOM   2847  C   ILE A 402      39.803  51.439  18.035  1.00 24.56           C  
ATOM   2848  O   ILE A 402      38.626  51.076  17.879  1.00 27.32           O  
ATOM   2849  CB  ILE A 402      40.382  49.557  19.460  1.00 24.78           C  
ATOM   2850  CG1 ILE A 402      40.459  50.359  20.760  1.00 25.19           C  
ATOM   2851  CG2 ILE A 402      41.168  48.275  19.586  1.00 23.84           C  
ATOM   2852  CD1 ILE A 402      39.701  49.702  21.915  1.00 25.10           C  
ATOM   2853  N   GLY A 403      40.169  52.706  18.002  1.00 24.64           N  
ATOM   2854  CA  GLY A 403      39.281  53.752  17.510  1.00 26.95           C  
ATOM   2855  C   GLY A 403      38.255  54.286  18.495  1.00 27.45           C  
ATOM   2856  O   GLY A 403      37.366  55.026  18.101  1.00 30.02           O  
ATOM   2857  N   PHE A 404      38.442  53.947  19.773  1.00 29.69           N  
ATOM   2858  CA  PHE A 404      37.657  54.418  20.911  1.00 27.29           C  
ATOM   2859  C   PHE A 404      38.383  55.528  21.666  1.00 28.40           C  
ATOM   2860  O   PHE A 404      39.614  55.455  21.839  1.00 26.32           O  
ATOM   2861  CB  PHE A 404      37.387  53.267  21.856  1.00 26.05           C  
ATOM   2862  CG  PHE A 404      36.263  52.405  21.427  1.00 23.40           C  
ATOM   2863  CD1 PHE A 404      36.456  51.416  20.479  1.00 22.67           C  
ATOM   2864  CD2 PHE A 404      34.977  52.588  21.979  1.00 23.36           C  
ATOM   2865  CE1 PHE A 404      35.410  50.602  20.091  1.00 23.49           C  
ATOM   2866  CE2 PHE A 404      33.927  51.780  21.574  1.00 22.05           C  
ATOM   2867  CZ  PHE A 404      34.142  50.784  20.654  1.00 20.95           C  
ATOM   2868  N   ALA A 405      37.589  56.533  22.059  1.00 26.32           N  
ATOM   2869  CA  ALA A 405      37.973  57.727  22.834  1.00 26.90           C  
ATOM   2870  C   ALA A 405      36.744  58.283  23.597  1.00 30.98           C  
ATOM   2871  O   ALA A 405      35.588  58.073  23.200  1.00 26.76           O  
ATOM   2872  CB  ALA A 405      38.463  58.836  21.913  1.00 26.21           C  
ATOM   2873  N   PRO A 406      37.004  59.053  24.662  1.00 32.67           N  
ATOM   2874  CA  PRO A 406      35.909  59.703  25.324  1.00 32.11           C  
ATOM   2875  C   PRO A 406      35.356  60.828  24.448  1.00 33.88           C  
ATOM   2876  O   PRO A 406      36.125  61.458  23.728  1.00 34.53           O  
ATOM   2877  CB  PRO A 406      36.572  60.224  26.619  1.00 32.80           C  
ATOM   2878  CG  PRO A 406      38.006  60.466  26.246  1.00 33.11           C  
ATOM   2879  CD  PRO A 406      38.316  59.380  25.265  1.00 31.45           C  
ATOM   2880  N   ASP A 407      34.032  61.021  24.455  1.00 32.35           N  
ATOM   2881  CA  ASP A 407      33.375  62.122  23.737  1.00 32.55           C  
ATOM   2882  C   ASP A 407      33.135  63.267  24.686  1.00 31.32           C  
ATOM   2883  O   ASP A 407      33.513  63.196  25.855  1.00 30.36           O  
ATOM   2884  CB  ASP A 407      32.046  61.667  23.069  1.00 32.06           C  
ATOM   2885  CG  ASP A 407      30.908  61.306  24.083  1.00 35.69           C  
ATOM   2886  OD1 ASP A 407      31.064  61.493  25.323  1.00 32.28           O  
ATOM   2887  OD2 ASP A 407      29.827  60.834  23.612  1.00 35.82           O  
ATOM   2888  N   ALA A 408      32.418  64.283  24.244  1.00 32.81           N  
ATOM   2889  CA  ALA A 408      32.246  65.480  25.092  1.00 38.31           C  
ATOM   2890  C   ALA A 408      31.532  65.178  26.442  1.00 41.76           C  
ATOM   2891  O   ALA A 408      31.728  65.895  27.412  1.00 46.74           O  
ATOM   2892  CB  ALA A 408      31.536  66.585  24.294  1.00 38.94           C  
ATOM   2893  N   GLU A 409      30.737  64.106  26.522  1.00 43.85           N  
ATOM   2894  CA  GLU A 409      30.091  63.748  27.803  1.00 44.97           C  
ATOM   2895  C   GLU A 409      30.988  62.902  28.692  1.00 37.84           C  
ATOM   2896  O   GLU A 409      30.557  62.445  29.749  1.00 36.33           O  
ATOM   2897  CB  GLU A 409      28.774  62.988  27.587  1.00 50.70           C  
ATOM   2898  CG  GLU A 409      27.578  63.865  27.300  1.00 57.76           C  
ATOM   2899  CD  GLU A 409      27.642  64.488  25.929  1.00 66.54           C  
ATOM   2900  OE1 GLU A 409      27.886  63.748  24.935  1.00 77.04           O  
ATOM   2901  OE2 GLU A 409      27.449  65.723  25.849  1.00 75.45           O  
ATOM   2902  N   GLY A 410      32.219  62.654  28.270  1.00 34.14           N  
ATOM   2903  CA  GLY A 410      33.039  61.680  28.965  1.00 32.63           C  
ATOM   2904  C   GLY A 410      32.666  60.234  28.652  1.00 32.49           C  
ATOM   2905  O   GLY A 410      33.238  59.324  29.218  1.00 36.98           O  
ATOM   2906  N   GLU A 411      31.793  59.985  27.685  1.00 28.32           N  
ATOM   2907  CA  GLU A 411      31.443  58.597  27.350  1.00 28.42           C  
ATOM   2908  C   GLU A 411      32.310  58.044  26.208  1.00 26.07           C  
ATOM   2909  O   GLU A 411      32.757  58.818  25.387  1.00 29.01           O  
ATOM   2910  CB  GLU A 411      29.958  58.507  26.994  1.00 30.77           C  
ATOM   2911  CG  GLU A 411      29.022  58.585  28.218  1.00 30.87           C  
ATOM   2912  CD  GLU A 411      27.571  58.916  27.832  1.00 35.53           C  
ATOM   2913  OE1 GLU A 411      27.241  58.999  26.606  1.00 36.40           O  
ATOM   2914  OE2 GLU A 411      26.758  59.125  28.761  1.00 38.98           O  
ATOM   2915  N   TYR A 412      32.530  56.729  26.188  1.00 21.74           N  
ATOM   2916  CA  TYR A 412      33.389  56.047  25.239  1.00 24.52           C  
ATOM   2917  C   TYR A 412      32.635  55.508  23.991  1.00 26.05           C  
ATOM   2918  O   TYR A 412      31.707  54.661  24.069  1.00 22.78           O  
ATOM   2919  CB  TYR A 412      34.175  54.938  25.949  1.00 24.62           C  
ATOM   2920  CG  TYR A 412      35.322  55.567  26.758  1.00 28.94           C  
ATOM   2921  CD1 TYR A 412      35.087  56.218  27.971  1.00 26.14           C  
ATOM   2922  CD2 TYR A 412      36.650  55.502  26.291  1.00 30.08           C  
ATOM   2923  CE1 TYR A 412      36.116  56.804  28.688  1.00 29.38           C  
ATOM   2924  CE2 TYR A 412      37.696  56.079  27.006  1.00 29.35           C  
ATOM   2925  CZ  TYR A 412      37.439  56.724  28.207  1.00 31.92           C  
ATOM   2926  OH  TYR A 412      38.495  57.282  28.912  1.00 31.06           O  
ATOM   2927  N   LYS A 413      33.076  56.035  22.861  1.00 25.50           N  
ATOM   2928  CA  LYS A 413      32.454  55.912  21.541  1.00 26.56           C  
ATOM   2929  C   LYS A 413      33.532  55.654  20.494  1.00 28.23           C  
ATOM   2930  O   LYS A 413      34.712  56.080  20.678  1.00 28.10           O  
ATOM   2931  CB  LYS A 413      31.746  57.216  21.169  1.00 26.83           C  
ATOM   2932  CG  LYS A 413      30.712  57.724  22.195  1.00 27.34           C  
ATOM   2933  CD  LYS A 413      29.569  56.730  22.393  1.00 29.17           C  
ATOM   2934  CE  LYS A 413      28.602  57.048  23.556  1.00 30.31           C  
ATOM   2935  NZ  LYS A 413      28.263  58.491  23.817  1.00 28.58           N  
ATOM   2936  N   SER A 414      33.141  54.901  19.457  1.00 28.43           N  
ATOM   2937  CA  SER A 414      33.871  54.812  18.185  1.00 27.10           C  
ATOM   2938  C   SER A 414      32.982  55.145  17.011  1.00 25.67           C  
ATOM   2939  O   SER A 414      31.772  55.284  17.154  1.00 25.83           O  
ATOM   2940  CB  SER A 414      34.387  53.402  17.980  1.00 27.30           C  
ATOM   2941  OG  SER A 414      33.336  52.489  17.712  1.00 25.65           O  
ATOM   2942  N   SER A 415      33.563  55.225  15.824  1.00 24.91           N  
ATOM   2943  CA  SER A 415      32.802  55.437  14.606  1.00 23.38           C  
ATOM   2944  C   SER A 415      32.122  54.134  14.140  1.00 24.70           C  
ATOM   2945  O   SER A 415      30.920  54.086  13.843  1.00 29.70           O  
ATOM   2946  CB  SER A 415      33.747  56.028  13.540  1.00 25.39           C  
ATOM   2947  OG  SER A 415      34.946  55.220  13.351  1.00 28.46           O  
ATOM   2948  N   TYR A 416      32.873  53.052  14.132  1.00 20.89           N  
ATOM   2949  CA  TYR A 416      32.497  51.850  13.489  1.00 19.54           C  
ATOM   2950  C   TYR A 416      31.809  50.899  14.475  1.00 21.71           C  
ATOM   2951  O   TYR A 416      31.251  49.903  14.061  1.00 18.68           O  
ATOM   2952  CB  TYR A 416      33.739  51.143  12.866  1.00 20.60           C  
ATOM   2953  CG  TYR A 416      34.639  50.612  13.885  1.00 19.16           C  
ATOM   2954  CD1 TYR A 416      35.617  51.425  14.464  1.00 18.77           C  
ATOM   2955  CD2 TYR A 416      34.460  49.340  14.379  1.00 20.56           C  
ATOM   2956  CE1 TYR A 416      36.403  50.962  15.518  1.00 17.78           C  
ATOM   2957  CE2 TYR A 416      35.270  48.859  15.408  1.00 20.20           C  
ATOM   2958  CZ  TYR A 416      36.210  49.692  15.977  1.00 18.74           C  
ATOM   2959  OH  TYR A 416      36.978  49.182  16.984  1.00 21.36           O  
ATOM   2960  N   CYS A 417      31.841  51.176  15.784  1.00 20.88           N  
ATOM   2961  CA  CYS A 417      31.288  50.197  16.714  1.00 21.85           C  
ATOM   2962  C   CYS A 417      30.505  50.854  17.863  1.00 20.35           C  
ATOM   2963  O   CYS A 417      31.034  51.687  18.586  1.00 20.30           O  
ATOM   2964  CB  CYS A 417      32.430  49.360  17.264  1.00 22.13           C  
ATOM   2965  SG  CYS A 417      31.946  48.101  18.406  1.00 21.37           S  
ATOM   2966  N   SER A 418      29.253  50.478  18.024  1.00 19.54           N  
ATOM   2967  CA  SER A 418      28.418  51.070  19.085  1.00 18.99           C  
ATOM   2968  C   SER A 418      28.884  50.585  20.432  1.00 18.01           C  
ATOM   2969  O   SER A 418      29.317  49.471  20.573  1.00 18.24           O  
ATOM   2970  CB  SER A 418      26.960  50.713  18.925  1.00 18.46           C  
ATOM   2971  OG  SER A 418      26.433  51.171  17.706  1.00 18.94           O  
ATOM   2972  N   HIS A 419      28.860  51.469  21.403  1.00 16.78           N  
ATOM   2973  CA  HIS A 419      29.086  51.073  22.779  1.00 15.89           C  
ATOM   2974  C   HIS A 419      27.753  51.000  23.544  1.00 16.59           C  
ATOM   2975  O   HIS A 419      27.239  52.021  24.032  1.00 18.88           O  
ATOM   2976  CB  HIS A 419      29.991  52.064  23.514  1.00 15.14           C  
ATOM   2977  CG  HIS A 419      30.222  51.686  24.936  1.00 13.87           C  
ATOM   2978  ND1 HIS A 419      30.471  52.608  25.909  1.00 14.44           N  
ATOM   2979  CD2 HIS A 419      30.115  50.494  25.566  1.00 14.21           C  
ATOM   2980  CE1 HIS A 419      30.525  52.008  27.090  1.00 15.11           C  
ATOM   2981  NE2 HIS A 419      30.277  50.726  26.914  1.00 15.30           N  
ATOM   2982  N   MET A 420      27.263  49.794  23.716  1.00 16.51           N  
ATOM   2983  CA  MET A 420      25.991  49.554  24.283  1.00 17.25           C  
ATOM   2984  C   MET A 420      26.208  49.173  25.726  1.00 18.20           C  
ATOM   2985  O   MET A 420      26.464  48.023  26.060  1.00 20.12           O  
ATOM   2986  CB  MET A 420      25.293  48.486  23.449  1.00 19.48           C  
ATOM   2987  CG  MET A 420      25.169  48.935  21.998  1.00 20.73           C  
ATOM   2988  SD  MET A 420      23.736  49.941  21.829  1.00 28.88           S  
ATOM   2989  CE  MET A 420      24.410  51.497  21.451  1.00 28.26           C  
ATOM   2990  N   ASP A 421      26.182  50.192  26.567  1.00 17.98           N  
ATOM   2991  CA  ASP A 421      26.323  50.021  28.006  1.00 19.03           C  
ATOM   2992  C   ASP A 421      24.963  49.587  28.544  1.00 17.79           C  
ATOM   2993  O   ASP A 421      24.031  50.378  28.554  1.00 16.85           O  
ATOM   2994  CB  ASP A 421      26.774  51.339  28.586  1.00 17.68           C  
ATOM   2995  CG  ASP A 421      27.055  51.270  30.058  1.00 19.80           C  
ATOM   2996  OD1 ASP A 421      26.493  50.405  30.756  1.00 20.54           O  
ATOM   2997  OD2 ASP A 421      27.835  52.132  30.544  1.00 23.03           O  
ATOM   2998  N   CYS A 422      24.864  48.327  28.954  1.00 18.62           N  
ATOM   2999  CA  CYS A 422      23.625  47.758  29.401  1.00 19.67           C  
ATOM   3000  C   CYS A 422      23.046  48.491  30.614  1.00 19.72           C  
ATOM   3001  O   CYS A 422      21.847  48.511  30.789  1.00 19.58           O  
ATOM   3002  CB  CYS A 422      23.787  46.308  29.777  1.00 20.14           C  
ATOM   3003  SG  CYS A 422      24.087  45.236  28.377  1.00 26.30           S  
ATOM   3004  N   PHE A 423      23.885  49.061  31.450  1.00 18.67           N  
ATOM   3005  CA  PHE A 423      23.408  49.835  32.581  1.00 20.15           C  
ATOM   3006  C   PHE A 423      22.462  50.983  32.178  1.00 19.52           C  
ATOM   3007  O   PHE A 423      21.529  51.256  32.904  1.00 16.72           O  
ATOM   3008  CB  PHE A 423      24.567  50.387  33.408  1.00 20.92           C  
ATOM   3009  CG  PHE A 423      24.167  51.037  34.683  1.00 22.70           C  
ATOM   3010  CD1 PHE A 423      23.340  50.392  35.578  1.00 24.17           C  
ATOM   3011  CD2 PHE A 423      24.694  52.253  35.030  1.00 25.69           C  
ATOM   3012  CE1 PHE A 423      22.989  50.995  36.773  1.00 26.16           C  
ATOM   3013  CE2 PHE A 423      24.383  52.864  36.255  1.00 26.63           C  
ATOM   3014  CZ  PHE A 423      23.534  52.223  37.130  1.00 26.55           C  
ATOM   3015  N   ARG A 424      22.683  51.601  31.025  1.00 20.38           N  
ATOM   3016  CA  ARG A 424      21.800  52.670  30.547  1.00 19.62           C  
ATOM   3017  C   ARG A 424      20.392  52.140  30.282  1.00 20.40           C  
ATOM   3018  O   ARG A 424      19.440  52.793  30.697  1.00 19.56           O  
ATOM   3019  CB  ARG A 424      22.376  53.367  29.336  1.00 19.88           C  
ATOM   3020  CG  ARG A 424      23.720  54.022  29.634  1.00 23.67           C  
ATOM   3021  CD  ARG A 424      23.658  54.980  30.819  1.00 24.11           C  
ATOM   3022  NE  ARG A 424      22.790  56.080  30.415  1.00 27.44           N  
ATOM   3023  CZ  ARG A 424      23.206  57.187  29.809  1.00 29.25           C  
ATOM   3024  NH1 ARG A 424      24.493  57.382  29.535  1.00 29.22           N  
ATOM   3025  NH2 ARG A 424      22.335  58.122  29.501  1.00 31.29           N  
ATOM   3026  N   TRP A 425      20.287  50.956  29.672  1.00 18.46           N  
ATOM   3027  CA  TRP A 425      19.002  50.299  29.397  1.00 19.63           C  
ATOM   3028  C   TRP A 425      18.357  49.922  30.731  1.00 21.59           C  
ATOM   3029  O   TRP A 425      17.146  50.099  30.922  1.00 20.46           O  
ATOM   3030  CB  TRP A 425      19.168  49.019  28.553  1.00 18.81           C  
ATOM   3031  CG  TRP A 425      17.864  48.156  28.390  1.00 19.03           C  
ATOM   3032  CD1 TRP A 425      16.884  48.305  27.447  1.00 20.33           C  
ATOM   3033  CD2 TRP A 425      17.452  47.067  29.208  1.00 17.89           C  
ATOM   3034  NE1 TRP A 425      15.890  47.346  27.615  1.00 20.41           N  
ATOM   3035  CE2 TRP A 425      16.228  46.577  28.692  1.00 19.55           C  
ATOM   3036  CE3 TRP A 425      18.018  46.429  30.288  1.00 20.01           C  
ATOM   3037  CZ2 TRP A 425      15.568  45.515  29.242  1.00 19.54           C  
ATOM   3038  CZ3 TRP A 425      17.368  45.344  30.842  1.00 20.42           C  
ATOM   3039  CH2 TRP A 425      16.138  44.908  30.324  1.00 20.56           C  
ATOM   3040  N   VAL A 426      19.169  49.366  31.626  1.00 21.21           N  
ATOM   3041  CA  VAL A 426      18.706  49.049  32.937  1.00 19.18           C  
ATOM   3042  C   VAL A 426      18.061  50.270  33.594  1.00 19.25           C  
ATOM   3043  O   VAL A 426      16.990  50.124  34.095  1.00 18.80           O  
ATOM   3044  CB  VAL A 426      19.787  48.480  33.845  1.00 18.97           C  
ATOM   3045  CG1 VAL A 426      19.281  48.388  35.278  1.00 18.31           C  
ATOM   3046  CG2 VAL A 426      20.209  47.080  33.393  1.00 20.72           C  
ATOM   3047  N   LYS A 427      18.708  51.411  33.650  1.00 19.67           N  
ATOM   3048  CA  LYS A 427      18.123  52.566  34.361  1.00 23.38           C  
ATOM   3049  C   LYS A 427      16.883  53.147  33.658  1.00 22.31           C  
ATOM   3050  O   LYS A 427      15.995  53.679  34.293  1.00 20.10           O  
ATOM   3051  CB  LYS A 427      19.111  53.724  34.428  1.00 25.66           C  
ATOM   3052  CG  LYS A 427      20.115  53.691  35.558  1.00 31.86           C  
ATOM   3053  CD  LYS A 427      20.750  55.073  35.848  1.00 38.19           C  
ATOM   3054  CE  LYS A 427      21.885  55.349  34.866  1.00 48.12           C  
ATOM   3055  NZ  LYS A 427      21.861  56.757  34.363  1.00 54.20           N  
ATOM   3056  N   ARG A 428      16.878  53.131  32.322  1.00 22.13           N  
ATOM   3057  CA  ARG A 428      15.827  53.792  31.557  1.00 20.76           C  
ATOM   3058  C   ARG A 428      14.603  52.925  31.254  1.00 19.54           C  
ATOM   3059  O   ARG A 428      13.477  53.357  31.441  1.00 19.13           O  
ATOM   3060  CB  ARG A 428      16.404  54.455  30.286  1.00 18.89           C  
ATOM   3061  CG  ARG A 428      15.496  55.545  29.749  1.00 18.53           C  
ATOM   3062  CD  ARG A 428      15.801  56.016  28.335  1.00 18.09           C  
ATOM   3063  NE  ARG A 428      15.683  54.900  27.418  1.00 17.55           N  
ATOM   3064  CZ  ARG A 428      16.222  54.883  26.194  1.00 16.70           C  
ATOM   3065  NH1 ARG A 428      16.858  55.939  25.714  1.00 16.20           N  
ATOM   3066  NH2 ARG A 428      16.125  53.799  25.450  1.00 16.72           N  
ATOM   3067  N   ASP A 429      14.834  51.685  30.881  1.00 19.72           N  
ATOM   3068  CA  ASP A 429      13.879  50.856  30.204  1.00 19.41           C  
ATOM   3069  C   ASP A 429      13.498  49.542  30.926  1.00 19.61           C  
ATOM   3070  O   ASP A 429      12.521  48.909  30.562  1.00 19.28           O  
ATOM   3071  CB  ASP A 429      14.479  50.440  28.861  1.00 21.68           C  
ATOM   3072  CG  ASP A 429      14.734  51.604  27.927  1.00 22.13           C  
ATOM   3073  OD1 ASP A 429      13.968  52.545  28.018  1.00 23.21           O  
ATOM   3074  OD2 ASP A 429      15.651  51.558  27.025  1.00 23.65           O  
ATOM   3075  N   SER A 430      14.268  49.101  31.911  1.00 19.14           N  
ATOM   3076  CA  SER A 430      13.998  47.800  32.521  1.00 18.22           C  
ATOM   3077  C   SER A 430      12.769  47.771  33.423  1.00 19.01           C  
ATOM   3078  O   SER A 430      12.332  46.708  33.775  1.00 18.33           O  
ATOM   3079  CB  SER A 430      15.196  47.321  33.378  1.00 16.94           C  
ATOM   3080  OG  SER A 430      15.454  48.160  34.522  1.00 16.00           O  
ATOM   3081  N   TYR A 431      12.367  48.936  33.925  1.00 21.71           N  
ATOM   3082  CA  TYR A 431      11.313  49.072  34.935  1.00 22.43           C  
ATOM   3083  C   TYR A 431      11.699  48.425  36.261  1.00 22.27           C  
ATOM   3084  O   TYR A 431      10.858  48.010  36.965  1.00 26.02           O  
ATOM   3085  CB  TYR A 431       9.998  48.441  34.430  1.00 22.84           C  
ATOM   3086  CG  TYR A 431       8.766  49.244  34.816  1.00 24.75           C  
ATOM   3087  CD1 TYR A 431       8.474  50.430  34.150  1.00 27.19           C  
ATOM   3088  CD2 TYR A 431       7.892  48.817  35.861  1.00 26.55           C  
ATOM   3089  CE1 TYR A 431       7.370  51.186  34.473  1.00 28.19           C  
ATOM   3090  CE2 TYR A 431       6.752  49.558  36.199  1.00 27.94           C  
ATOM   3091  CZ  TYR A 431       6.493  50.735  35.492  1.00 29.42           C  
ATOM   3092  OH  TYR A 431       5.401  51.510  35.781  1.00 32.46           O  
ATOM   3093  N   LEU A 432      12.973  48.292  36.582  1.00 25.13           N  
ATOM   3094  CA  LEU A 432      13.365  47.731  37.873  1.00 22.51           C  
ATOM   3095  C   LEU A 432      13.610  48.851  38.849  1.00 20.05           C  
ATOM   3096  O   LEU A 432      14.157  49.891  38.492  1.00 18.08           O  
ATOM   3097  CB  LEU A 432      14.654  46.910  37.787  1.00 21.13           C  
ATOM   3098  CG  LEU A 432      14.571  45.599  37.021  1.00 22.45           C  
ATOM   3099  CD1 LEU A 432      15.940  45.133  36.569  1.00 23.45           C  
ATOM   3100  CD2 LEU A 432      13.962  44.487  37.852  1.00 26.09           C  
ATOM   3101  N   PRO A 433      13.283  48.607  40.113  1.00 18.78           N  
ATOM   3102  CA  PRO A 433      13.673  49.582  41.120  1.00 19.57           C  
ATOM   3103  C   PRO A 433      15.191  49.708  41.230  1.00 20.20           C  
ATOM   3104  O   PRO A 433      15.906  48.766  41.019  1.00 21.34           O  
ATOM   3105  CB  PRO A 433      13.136  48.994  42.428  1.00 18.04           C  
ATOM   3106  CG  PRO A 433      12.974  47.544  42.160  1.00 18.22           C  
ATOM   3107  CD  PRO A 433      12.668  47.401  40.701  1.00 18.48           C  
ATOM   3108  N   GLN A 434      15.652  50.873  41.600  1.00 22.22           N  
ATOM   3109  CA  GLN A 434      17.076  51.111  41.698  1.00 24.73           C  
ATOM   3110  C   GLN A 434      17.721  50.098  42.624  1.00 25.84           C  
ATOM   3111  O   GLN A 434      18.844  49.687  42.365  1.00 24.42           O  
ATOM   3112  CB  GLN A 434      17.327  52.534  42.175  1.00 27.41           C  
ATOM   3113  CG  GLN A 434      16.950  53.532  41.085  1.00 31.06           C  
ATOM   3114  CD  GLN A 434      17.292  54.942  41.432  1.00 34.52           C  
ATOM   3115  OE1 GLN A 434      17.754  55.712  40.609  1.00 39.08           O  
ATOM   3116  NE2 GLN A 434      17.105  55.285  42.676  1.00 40.42           N  
ATOM   3117  N   GLY A 435      16.992  49.627  43.650  1.00 26.77           N  
ATOM   3118  CA  GLY A 435      17.518  48.544  44.537  1.00 26.83           C  
ATOM   3119  C   GLY A 435      17.829  47.237  43.806  1.00 25.86           C  
ATOM   3120  O   GLY A 435      18.598  46.414  44.303  1.00 22.21           O  
ATOM   3121  N   SER A 436      17.233  47.043  42.624  1.00 22.88           N  
ATOM   3122  CA  SER A 436      17.522  45.845  41.837  1.00 23.69           C  
ATOM   3123  C   SER A 436      18.248  46.128  40.518  1.00 23.01           C  
ATOM   3124  O   SER A 436      18.107  45.358  39.565  1.00 22.37           O  
ATOM   3125  CB  SER A 436      16.216  45.094  41.527  1.00 24.34           C  
ATOM   3126  OG  SER A 436      15.559  44.745  42.724  1.00 25.99           O  
ATOM   3127  N   GLN A 437      19.023  47.206  40.458  1.00 21.65           N  
ATOM   3128  CA  GLN A 437      19.704  47.575  39.211  1.00 22.84           C  
ATOM   3129  C   GLN A 437      21.178  47.173  39.108  1.00 23.83           C  
ATOM   3130  O   GLN A 437      21.831  47.548  38.150  1.00 24.45           O  
ATOM   3131  CB  GLN A 437      19.522  49.072  38.933  1.00 23.08           C  
ATOM   3132  CG  GLN A 437      18.070  49.375  38.469  1.00 22.80           C  
ATOM   3133  CD  GLN A 437      17.861  50.809  38.130  1.00 21.96           C  
ATOM   3134  OE1 GLN A 437      18.821  51.538  38.036  1.00 24.87           O  
ATOM   3135  NE2 GLN A 437      16.604  51.223  37.893  1.00 20.99           N  
ATOM   3136  N   GLY A 438      21.695  46.446  40.095  1.00 23.74           N  
ATOM   3137  CA  GLY A 438      23.021  45.832  40.029  1.00 24.83           C  
ATOM   3138  C   GLY A 438      22.965  44.636  39.070  1.00 25.07           C  
ATOM   3139  O   GLY A 438      21.870  44.054  38.817  1.00 22.69           O  
ATOM   3140  N   LEU A 439      24.126  44.257  38.525  1.00 24.39           N  
ATOM   3141  CA  LEU A 439      24.178  43.130  37.558  1.00 24.64           C  
ATOM   3142  C   LEU A 439      23.623  41.868  38.124  1.00 24.67           C  
ATOM   3143  O   LEU A 439      22.935  41.137  37.456  1.00 26.83           O  
ATOM   3144  CB  LEU A 439      25.615  42.844  37.114  1.00 25.12           C  
ATOM   3145  CG  LEU A 439      25.871  41.886  35.968  1.00 25.47           C  
ATOM   3146  CD1 LEU A 439      24.960  42.086  34.750  1.00 24.50           C  
ATOM   3147  CD2 LEU A 439      27.341  42.062  35.578  1.00 30.22           C  
ATOM   3148  N   LYS A 440      23.931  41.610  39.371  1.00 26.13           N  
ATOM   3149  CA  LYS A 440      23.426  40.410  40.015  1.00 27.36           C  
ATOM   3150  C   LYS A 440      21.890  40.363  39.990  1.00 25.60           C  
ATOM   3151  O   LYS A 440      21.282  39.386  39.523  1.00 25.57           O  
ATOM   3152  CB  LYS A 440      23.942  40.386  41.456  1.00 29.02           C  
ATOM   3153  CG  LYS A 440      23.963  39.018  42.083  1.00 38.62           C  
ATOM   3154  CD  LYS A 440      22.889  38.818  43.123  1.00 47.49           C  
ATOM   3155  CE  LYS A 440      23.113  37.473  43.818  1.00 53.91           C  
ATOM   3156  NZ  LYS A 440      21.815  36.767  44.027  1.00 53.45           N  
ATOM   3157  N   ALA A 441      21.259  41.418  40.524  1.00 24.06           N  
ATOM   3158  CA  ALA A 441      19.801  41.460  40.563  1.00 25.53           C  
ATOM   3159  C   ALA A 441      19.164  41.504  39.135  1.00 23.51           C  
ATOM   3160  O   ALA A 441      18.133  40.899  38.886  1.00 24.79           O  
ATOM   3161  CB  ALA A 441      19.355  42.617  41.417  1.00 26.06           C  
ATOM   3162  N   VAL A 442      19.809  42.166  38.188  1.00 24.04           N  
ATOM   3163  CA  VAL A 442      19.306  42.193  36.813  1.00 23.29           C  
ATOM   3164  C   VAL A 442      19.427  40.793  36.222  1.00 24.11           C  
ATOM   3165  O   VAL A 442      18.531  40.309  35.511  1.00 21.56           O  
ATOM   3166  CB  VAL A 442      20.103  43.206  35.973  1.00 23.72           C  
ATOM   3167  CG1 VAL A 442      19.700  43.123  34.515  1.00 23.08           C  
ATOM   3168  CG2 VAL A 442      19.946  44.619  36.507  1.00 23.63           C  
ATOM   3169  N   THR A 443      20.516  40.104  36.566  1.00 23.65           N  
ATOM   3170  CA  THR A 443      20.714  38.786  36.023  1.00 23.79           C  
ATOM   3171  C   THR A 443      19.549  37.865  36.515  1.00 25.60           C  
ATOM   3172  O   THR A 443      18.918  37.166  35.708  1.00 27.61           O  
ATOM   3173  CB  THR A 443      22.176  38.282  36.291  1.00 24.16           C  
ATOM   3174  OG1 THR A 443      23.156  39.199  35.724  1.00 19.87           O  
ATOM   3175  CG2 THR A 443      22.392  36.904  35.664  1.00 24.73           C  
ATOM   3176  N   GLN A 444      19.218  37.915  37.805  1.00 27.63           N  
ATOM   3177  CA  GLN A 444      18.177  37.015  38.376  1.00 29.94           C  
ATOM   3178  C   GLN A 444      16.820  37.316  37.792  1.00 30.22           C  
ATOM   3179  O   GLN A 444      16.105  36.438  37.328  1.00 30.08           O  
ATOM   3180  CB  GLN A 444      18.094  37.168  39.878  1.00 31.70           C  
ATOM   3181  CG  GLN A 444      19.331  36.640  40.546  1.00 35.14           C  
ATOM   3182  CD  GLN A 444      19.422  37.000  42.008  1.00 42.45           C  
ATOM   3183  OE1 GLN A 444      19.806  36.173  42.820  1.00 45.84           O  
ATOM   3184  NE2 GLN A 444      19.118  38.243  42.348  1.00 47.51           N  
ATOM   3185  N   SER A 445      16.527  38.599  37.694  1.00 29.78           N  
ATOM   3186  CA  SER A 445      15.231  39.050  37.204  1.00 27.60           C  
ATOM   3187  C   SER A 445      15.103  38.707  35.721  1.00 27.76           C  
ATOM   3188  O   SER A 445      14.094  38.190  35.284  1.00 30.21           O  
ATOM   3189  CB  SER A 445      15.136  40.551  37.497  1.00 28.36           C  
ATOM   3190  OG  SER A 445      14.133  41.161  36.749  1.00 31.78           O  
ATOM   3191  N   LYS A 446      16.141  38.938  34.928  1.00 25.43           N  
ATOM   3192  CA  LYS A 446      15.932  38.962  33.509  1.00 23.89           C  
ATOM   3193  C   LYS A 446      16.413  37.686  32.817  1.00 24.09           C  
ATOM   3194  O   LYS A 446      15.809  37.262  31.813  1.00 20.38           O  
ATOM   3195  CB  LYS A 446      16.612  40.182  32.910  1.00 24.66           C  
ATOM   3196  CG  LYS A 446      16.083  41.514  33.402  1.00 27.32           C  
ATOM   3197  CD  LYS A 446      14.609  41.689  33.037  1.00 30.96           C  
ATOM   3198  CE  LYS A 446      14.050  43.018  33.536  1.00 35.43           C  
ATOM   3199  NZ  LYS A 446      12.561  43.026  33.364  1.00 39.97           N  
ATOM   3200  N   LEU A 447      17.472  37.076  33.345  1.00 24.88           N  
ATOM   3201  CA  LEU A 447      17.986  35.850  32.730  1.00 26.62           C  
ATOM   3202  C   LEU A 447      17.594  34.593  33.536  1.00 24.80           C  
ATOM   3203  O   LEU A 447      17.756  33.477  33.063  1.00 23.12           O  
ATOM   3204  CB  LEU A 447      19.532  35.920  32.554  1.00 27.29           C  
ATOM   3205  CG  LEU A 447      20.190  37.003  31.713  1.00 26.88           C  
ATOM   3206  CD1 LEU A 447      21.689  36.856  31.710  1.00 28.17           C  
ATOM   3207  CD2 LEU A 447      19.690  36.967  30.300  1.00 27.14           C  
ATOM   3208  N   GLY A 448      17.181  34.779  34.782  1.00 26.86           N  
ATOM   3209  CA  GLY A 448      16.465  33.730  35.503  1.00 25.38           C  
ATOM   3210  C   GLY A 448      17.367  32.708  36.172  1.00 27.62           C  
ATOM   3211  O   GLY A 448      16.985  31.578  36.350  1.00 29.23           O  
ATOM   3212  N   TYR A 449      18.538  33.142  36.596  1.00 28.60           N  
ATOM   3213  CA  TYR A 449      19.469  32.290  37.265  1.00 29.56           C  
ATOM   3214  C   TYR A 449      20.315  33.181  38.149  1.00 28.55           C  
ATOM   3215  O   TYR A 449      20.267  34.391  38.099  1.00 28.95           O  
ATOM   3216  CB  TYR A 449      20.328  31.498  36.241  1.00 29.95           C  
ATOM   3217  CG  TYR A 449      21.464  32.305  35.583  1.00 30.44           C  
ATOM   3218  CD1 TYR A 449      22.683  32.538  36.248  1.00 29.44           C  
ATOM   3219  CD2 TYR A 449      21.318  32.806  34.302  1.00 28.36           C  
ATOM   3220  CE1 TYR A 449      23.684  33.267  35.648  1.00 28.71           C  
ATOM   3221  CE2 TYR A 449      22.312  33.554  33.707  1.00 28.19           C  
ATOM   3222  CZ  TYR A 449      23.486  33.768  34.361  1.00 26.13           C  
ATOM   3223  OH  TYR A 449      24.471  34.487  33.710  1.00 23.57           O  
ATOM   3224  N   ASN A 450      21.119  32.546  38.957  1.00 31.13           N  
ATOM   3225  CA  ASN A 450      21.813  33.191  40.031  1.00 32.74           C  
ATOM   3226  C   ASN A 450      23.314  33.219  39.759  1.00 32.97           C  
ATOM   3227  O   ASN A 450      23.959  32.208  39.856  1.00 30.36           O  
ATOM   3228  CB  ASN A 450      21.543  32.351  41.253  1.00 39.51           C  
ATOM   3229  CG  ASN A 450      21.498  33.162  42.486  1.00 49.92           C  
ATOM   3230  OD1 ASN A 450      22.460  33.894  42.820  1.00 51.42           O  
ATOM   3231  ND2 ASN A 450      20.366  33.072  43.179  1.00 52.38           N  
ATOM   3232  N   PRO A 451      23.873  34.380  39.406  1.00 31.99           N  
ATOM   3233  CA  PRO A 451      25.251  34.353  38.973  1.00 32.23           C  
ATOM   3234  C   PRO A 451      26.206  34.256  40.114  1.00 34.26           C  
ATOM   3235  O   PRO A 451      25.805  34.394  41.292  1.00 33.82           O  
ATOM   3236  CB  PRO A 451      25.426  35.707  38.282  1.00 32.43           C  
ATOM   3237  CG  PRO A 451      24.438  36.590  39.003  1.00 33.49           C  
ATOM   3238  CD  PRO A 451      23.258  35.705  39.246  1.00 31.99           C  
ATOM   3239  N   ILE A 452      27.479  34.062  39.759  1.00 34.73           N  
ATOM   3240  CA  ILE A 452      28.522  33.983  40.760  1.00 33.70           C  
ATOM   3241  C   ILE A 452      28.756  35.338  41.374  1.00 34.60           C  
ATOM   3242  O   ILE A 452      28.873  36.368  40.701  1.00 37.22           O  
ATOM   3243  CB  ILE A 452      29.849  33.427  40.204  1.00 35.57           C  
ATOM   3244  CG1 ILE A 452      29.641  31.963  39.796  1.00 37.99           C  
ATOM   3245  CG2 ILE A 452      30.973  33.579  41.248  1.00 33.95           C  
ATOM   3246  CD1 ILE A 452      30.911  31.240  39.413  1.00 42.19           C  
ATOM   3247  N   GLU A 453      28.905  35.284  42.682  1.00 39.90           N  
ATOM   3248  CA  GLU A 453      29.039  36.424  43.533  1.00 39.90           C  
ATOM   3249  C   GLU A 453      30.345  36.326  44.326  1.00 36.03           C  
ATOM   3250  O   GLU A 453      30.702  35.255  44.789  1.00 33.52           O  
ATOM   3251  CB  GLU A 453      27.867  36.357  44.464  1.00 44.55           C  
ATOM   3252  CG  GLU A 453      27.509  37.637  45.128  1.00 54.95           C  
ATOM   3253  CD  GLU A 453      26.351  37.404  46.066  1.00 61.30           C  
ATOM   3254  OE1 GLU A 453      26.268  36.281  46.616  1.00 63.57           O  
ATOM   3255  OE2 GLU A 453      25.535  38.332  46.228  1.00 65.28           O  
ATOM   3256  N   LEU A 454      31.031  37.457  44.471  1.00 34.35           N  
ATOM   3257  CA  LEU A 454      32.307  37.557  45.166  1.00 38.48           C  
ATOM   3258  C   LEU A 454      32.433  38.925  45.829  1.00 39.63           C  
ATOM   3259  O   LEU A 454      32.270  39.943  45.182  1.00 46.97           O  
ATOM   3260  CB  LEU A 454      33.491  37.411  44.177  1.00 39.80           C  
ATOM   3261  CG  LEU A 454      34.877  37.344  44.850  1.00 40.75           C  
ATOM   3262  CD1 LEU A 454      34.977  36.097  45.722  1.00 40.97           C  
ATOM   3263  CD2 LEU A 454      35.989  37.351  43.835  1.00 37.49           C  
ATOM   3264  N   ASP A 455      32.768  38.946  47.110  1.00 38.20           N  
ATOM   3265  CA  ASP A 455      32.983  40.177  47.867  1.00 36.40           C  
ATOM   3266  C   ASP A 455      34.117  41.038  47.262  1.00 36.56           C  
ATOM   3267  O   ASP A 455      35.225  40.542  47.000  1.00 35.17           O  
ATOM   3268  CB  ASP A 455      33.261  39.744  49.336  1.00 39.54           C  
ATOM   3269  CG  ASP A 455      33.522  40.903  50.283  1.00 44.73           C  
ATOM   3270  OD1 ASP A 455      33.447  42.106  49.870  1.00 42.02           O  
ATOM   3271  OD2 ASP A 455      33.845  40.565  51.456  1.00 45.40           O  
ATOM   3272  N   PRO A 456      33.855  42.332  47.015  1.00 39.92           N  
ATOM   3273  CA  PRO A 456      34.894  43.140  46.383  1.00 38.22           C  
ATOM   3274  C   PRO A 456      36.202  43.197  47.138  1.00 40.74           C  
ATOM   3275  O   PRO A 456      37.308  43.244  46.489  1.00 34.19           O  
ATOM   3276  CB  PRO A 456      34.256  44.526  46.308  1.00 41.38           C  
ATOM   3277  CG  PRO A 456      32.803  44.232  46.142  1.00 39.44           C  
ATOM   3278  CD  PRO A 456      32.552  43.039  47.017  1.00 41.01           C  
ATOM   3279  N   GLU A 457      36.099  43.206  48.474  1.00 37.81           N  
ATOM   3280  CA  GLU A 457      37.296  43.146  49.342  1.00 41.55           C  
ATOM   3281  C   GLU A 457      38.145  41.875  49.120  1.00 40.36           C  
ATOM   3282  O   GLU A 457      39.322  41.882  49.422  1.00 38.40           O  
ATOM   3283  CB  GLU A 457      36.946  43.237  50.846  1.00 42.53           C  
ATOM   3284  CG  GLU A 457      36.445  44.599  51.324  1.00 46.10           C  
ATOM   3285  CD  GLU A 457      37.309  45.773  50.890  1.00 46.64           C  
ATOM   3286  OE1 GLU A 457      38.505  45.810  51.261  1.00 48.58           O  
ATOM   3287  OE2 GLU A 457      36.785  46.676  50.188  1.00 44.66           O  
ATOM   3288  N   LEU A 458      37.550  40.805  48.597  1.00 35.75           N  
ATOM   3289  CA  LEU A 458      38.304  39.571  48.370  1.00 36.46           C  
ATOM   3290  C   LEU A 458      38.985  39.411  47.003  1.00 35.42           C  
ATOM   3291  O   LEU A 458      39.751  38.457  46.815  1.00 33.38           O  
ATOM   3292  CB  LEU A 458      37.434  38.324  48.661  1.00 35.01           C  
ATOM   3293  CG  LEU A 458      37.072  38.111  50.142  1.00 40.86           C  
ATOM   3294  CD1 LEU A 458      36.235  36.830  50.316  1.00 42.06           C  
ATOM   3295  CD2 LEU A 458      38.298  38.110  51.080  1.00 40.30           C  
ATOM   3296  N   MET A 459      38.748  40.306  46.059  1.00 34.98           N  
ATOM   3297  CA  MET A 459      39.213  40.062  44.674  1.00 36.52           C  
ATOM   3298  C   MET A 459      40.752  40.161  44.475  1.00 34.17           C  
ATOM   3299  O   MET A 459      41.341  39.340  43.766  1.00 36.51           O  
ATOM   3300  CB  MET A 459      38.484  40.982  43.706  1.00 38.95           C  
ATOM   3301  CG  MET A 459      37.039  40.513  43.498  1.00 42.86           C  
ATOM   3302  SD  MET A 459      36.065  41.753  42.617  1.00 51.85           S  
ATOM   3303  CE  MET A 459      37.155  42.071  41.208  1.00 50.23           C  
ATOM   3304  N   THR A 460      41.369  41.149  45.106  1.00 30.77           N  
ATOM   3305  CA  THR A 460      42.808  41.348  45.043  1.00 34.05           C  
ATOM   3306  C   THR A 460      43.517  40.147  45.720  1.00 35.90           C  
ATOM   3307  O   THR A 460      44.234  39.413  45.026  1.00 38.53           O  
ATOM   3308  CB  THR A 460      43.178  42.746  45.582  1.00 33.70           C  
ATOM   3309  OG1 THR A 460      42.534  43.716  44.759  1.00 32.84           O  
ATOM   3310  CG2 THR A 460      44.710  43.013  45.555  1.00 34.58           C  
ATOM   3311  N   PRO A 461      43.201  39.857  47.013  1.00 38.33           N  
ATOM   3312  CA  PRO A 461      43.769  38.688  47.706  1.00 37.39           C  
ATOM   3313  C   PRO A 461      43.587  37.365  46.995  1.00 40.56           C  
ATOM   3314  O   PRO A 461      44.516  36.556  46.986  1.00 43.76           O  
ATOM   3315  CB  PRO A 461      43.023  38.654  49.034  1.00 37.63           C  
ATOM   3316  CG  PRO A 461      42.686  40.078  49.287  1.00 38.71           C  
ATOM   3317  CD  PRO A 461      42.341  40.642  47.926  1.00 37.69           C  
ATOM   3318  N   TYR A 462      42.417  37.132  46.420  1.00 34.43           N  
ATOM   3319  CA  TYR A 462      42.163  35.893  45.676  1.00 36.69           C  
ATOM   3320  C   TYR A 462      43.011  35.710  44.415  1.00 32.85           C  
ATOM   3321  O   TYR A 462      43.219  34.610  43.970  1.00 33.02           O  
ATOM   3322  CB  TYR A 462      40.679  35.786  45.280  1.00 34.02           C  
ATOM   3323  CG  TYR A 462      39.788  35.236  46.396  1.00 37.24           C  
ATOM   3324  CD1 TYR A 462      40.206  35.245  47.716  1.00 37.43           C  
ATOM   3325  CD2 TYR A 462      38.520  34.717  46.118  1.00 38.71           C  
ATOM   3326  CE1 TYR A 462      39.414  34.723  48.732  1.00 40.66           C  
ATOM   3327  CE2 TYR A 462      37.707  34.206  47.131  1.00 41.34           C  
ATOM   3328  CZ  TYR A 462      38.155  34.221  48.451  1.00 45.31           C  
ATOM   3329  OH  TYR A 462      37.369  33.718  49.498  1.00 45.07           O  
ATOM   3330  N   ALA A 463      43.427  36.797  43.813  1.00 33.57           N  
ATOM   3331  CA  ALA A 463      44.342  36.736  42.684  1.00 37.29           C  
ATOM   3332  C   ALA A 463      45.521  35.829  43.057  1.00 42.19           C  
ATOM   3333  O   ALA A 463      45.929  34.970  42.262  1.00 40.26           O  
ATOM   3334  CB  ALA A 463      44.858  38.127  42.360  1.00 33.20           C  
ATOM   3335  N   PHE A 464      46.056  36.056  44.265  1.00 44.13           N  
ATOM   3336  CA  PHE A 464      47.137  35.248  44.797  1.00 46.18           C  
ATOM   3337  C   PHE A 464      46.613  33.907  45.326  1.00 44.80           C  
ATOM   3338  O   PHE A 464      47.105  32.847  44.933  1.00 39.76           O  
ATOM   3339  CB  PHE A 464      47.911  35.991  45.884  1.00 49.74           C  
ATOM   3340  CG  PHE A 464      49.151  35.262  46.322  1.00 61.57           C  
ATOM   3341  CD1 PHE A 464      49.074  34.188  47.216  1.00 66.68           C  
ATOM   3342  CD2 PHE A 464      50.396  35.610  45.812  1.00 67.18           C  
ATOM   3343  CE1 PHE A 464      50.214  33.490  47.611  1.00 71.72           C  
ATOM   3344  CE2 PHE A 464      51.540  34.919  46.207  1.00 72.96           C  
ATOM   3345  CZ  PHE A 464      51.449  33.854  47.102  1.00 72.25           C  
ATOM   3346  N   GLU A 465      45.610  33.955  46.193  1.00 41.20           N  
ATOM   3347  CA  GLU A 465      45.224  32.799  46.973  1.00 42.85           C  
ATOM   3348  C   GLU A 465      44.261  31.869  46.269  1.00 47.89           C  
ATOM   3349  O   GLU A 465      44.365  30.672  46.474  1.00 47.20           O  
ATOM   3350  CB  GLU A 465      44.581  33.223  48.290  1.00 48.44           C  
ATOM   3351  CG  GLU A 465      45.461  34.101  49.188  1.00 53.75           C  
ATOM   3352  CD  GLU A 465      44.667  34.910  50.214  1.00 55.57           C  
ATOM   3353  OE1 GLU A 465      43.548  34.493  50.602  1.00 58.32           O  
ATOM   3354  OE2 GLU A 465      45.160  35.983  50.610  1.00 53.72           O  
ATOM   3355  N   LYS A 466      43.301  32.380  45.484  1.00 45.94           N  
ATOM   3356  CA  LYS A 466      42.306  31.498  44.850  1.00 45.00           C  
ATOM   3357  C   LYS A 466      42.020  31.925  43.407  1.00 46.88           C  
ATOM   3358  O   LYS A 466      40.880  32.222  43.073  1.00 47.60           O  
ATOM   3359  CB  LYS A 466      40.989  31.518  45.625  1.00 52.27           C  
ATOM   3360  CG  LYS A 466      41.051  31.085  47.072  1.00 53.47           C  
ATOM   3361  CD  LYS A 466      39.744  30.403  47.445  1.00 59.13           C  
ATOM   3362  CE  LYS A 466      39.648  30.153  48.939  1.00 61.59           C  
ATOM   3363  NZ  LYS A 466      39.230  31.375  49.685  1.00 59.99           N  
ATOM   3364  N   PRO A 467      42.988  31.842  42.508  1.00 46.89           N  
ATOM   3365  CA  PRO A 467      42.937  32.498  41.217  1.00 41.95           C  
ATOM   3366  C   PRO A 467      41.843  31.888  40.374  1.00 40.50           C  
ATOM   3367  O   PRO A 467      41.252  32.586  39.553  1.00 41.55           O  
ATOM   3368  CB  PRO A 467      44.325  32.231  40.589  1.00 45.55           C  
ATOM   3369  CG  PRO A 467      44.836  31.033  41.311  1.00 44.56           C  
ATOM   3370  CD  PRO A 467      44.344  31.218  42.717  1.00 44.65           C  
ATOM   3371  N   GLN A 468      41.561  30.611  40.577  1.00 38.97           N  
ATOM   3372  CA  GLN A 468      40.468  29.951  39.878  1.00 39.79           C  
ATOM   3373  C   GLN A 468      39.101  30.512  40.255  1.00 41.36           C  
ATOM   3374  O   GLN A 468      38.235  30.696  39.381  1.00 31.75           O  
ATOM   3375  CB  GLN A 468      40.454  28.454  40.133  1.00 42.58           C  
ATOM   3376  CG  GLN A 468      39.418  27.711  39.306  1.00 47.30           C  
ATOM   3377  CD  GLN A 468      39.562  27.963  37.797  1.00 50.47           C  
ATOM   3378  OE1 GLN A 468      40.673  28.254  37.311  1.00 52.28           O  
ATOM   3379  NE2 GLN A 468      38.439  27.825  37.040  1.00 47.59           N  
ATOM   3380  N   HIS A 469      38.905  30.796  41.540  1.00 39.14           N  
ATOM   3381  CA  HIS A 469      37.614  31.315  41.985  1.00 41.10           C  
ATOM   3382  C   HIS A 469      37.399  32.742  41.412  1.00 35.62           C  
ATOM   3383  O   HIS A 469      36.340  33.062  40.855  1.00 32.58           O  
ATOM   3384  CB  HIS A 469      37.520  31.280  43.502  1.00 46.05           C  
ATOM   3385  CG  HIS A 469      36.119  31.274  44.003  1.00 60.31           C  
ATOM   3386  ND1 HIS A 469      35.429  32.433  44.309  1.00 61.51           N  
ATOM   3387  CD2 HIS A 469      35.259  30.253  44.223  1.00 68.69           C  
ATOM   3388  CE1 HIS A 469      34.211  32.125  44.711  1.00 67.97           C  
ATOM   3389  NE2 HIS A 469      34.082  30.808  44.668  1.00 75.11           N  
ATOM   3390  N   LEU A 470      38.419  33.578  41.503  1.00 31.34           N  
ATOM   3391  CA  LEU A 470      38.351  34.889  40.892  1.00 30.66           C  
ATOM   3392  C   LEU A 470      38.024  34.827  39.383  1.00 35.39           C  
ATOM   3393  O   LEU A 470      37.197  35.606  38.873  1.00 34.23           O  
ATOM   3394  CB  LEU A 470      39.639  35.619  41.163  1.00 30.90           C  
ATOM   3395  CG  LEU A 470      39.830  36.967  40.479  1.00 28.39           C  
ATOM   3396  CD1 LEU A 470      38.826  38.025  40.905  1.00 31.59           C  
ATOM   3397  CD2 LEU A 470      41.239  37.415  40.797  1.00 29.02           C  
ATOM   3398  N   SER A 471      38.588  33.857  38.669  1.00 30.88           N  
ATOM   3399  CA  SER A 471      38.346  33.785  37.226  1.00 32.59           C  
ATOM   3400  C   SER A 471      36.939  33.277  36.928  1.00 29.22           C  
ATOM   3401  O   SER A 471      36.345  33.620  35.933  1.00 27.64           O  
ATOM   3402  CB  SER A 471      39.452  32.949  36.526  1.00 33.47           C  
ATOM   3403  OG  SER A 471      39.352  31.597  36.904  1.00 39.99           O  
ATOM   3404  N   GLU A 472      36.376  32.490  37.817  1.00 28.23           N  
ATOM   3405  CA  GLU A 472      35.017  32.070  37.630  1.00 30.66           C  
ATOM   3406  C   GLU A 472      34.050  33.266  37.781  1.00 28.42           C  
ATOM   3407  O   GLU A 472      33.107  33.365  37.007  1.00 24.82           O  
ATOM   3408  CB  GLU A 472      34.668  30.933  38.570  1.00 35.52           C  
ATOM   3409  CG  GLU A 472      35.440  29.673  38.145  1.00 40.04           C  
ATOM   3410  CD  GLU A 472      35.414  28.525  39.152  1.00 43.88           C  
ATOM   3411  OE1 GLU A 472      35.117  28.737  40.336  1.00 42.19           O  
ATOM   3412  OE2 GLU A 472      35.695  27.378  38.738  1.00 56.29           O  
ATOM   3413  N   TYR A 473      34.330  34.149  38.735  1.00 24.67           N  
ATOM   3414  CA  TYR A 473      33.571  35.353  38.924  1.00 27.85           C  
ATOM   3415  C   TYR A 473      33.679  36.247  37.671  1.00 28.61           C  
ATOM   3416  O   TYR A 473      32.670  36.723  37.108  1.00 26.57           O  
ATOM   3417  CB  TYR A 473      34.104  36.123  40.151  1.00 30.38           C  
ATOM   3418  CG  TYR A 473      33.440  37.472  40.299  1.00 36.40           C  
ATOM   3419  CD1 TYR A 473      32.100  37.566  40.714  1.00 36.50           C  
ATOM   3420  CD2 TYR A 473      34.103  38.644  39.957  1.00 36.90           C  
ATOM   3421  CE1 TYR A 473      31.477  38.803  40.856  1.00 38.98           C  
ATOM   3422  CE2 TYR A 473      33.470  39.880  40.062  1.00 40.44           C  
ATOM   3423  CZ  TYR A 473      32.160  39.958  40.522  1.00 42.97           C  
ATOM   3424  OH  TYR A 473      31.525  41.193  40.645  1.00 45.84           O  
ATOM   3425  N   SER A 474      34.921  36.436  37.230  1.00 25.03           N  
ATOM   3426  CA  SER A 474      35.214  37.272  36.120  1.00 24.53           C  
ATOM   3427  C   SER A 474      34.419  36.813  34.916  1.00 24.16           C  
ATOM   3428  O   SER A 474      33.771  37.661  34.288  1.00 25.66           O  
ATOM   3429  CB  SER A 474      36.731  37.310  35.800  1.00 24.83           C  
ATOM   3430  OG  SER A 474      36.942  37.940  34.537  1.00 25.05           O  
ATOM   3431  N   VAL A 475      34.447  35.519  34.596  1.00 20.76           N  
ATOM   3432  CA  VAL A 475      33.804  35.071  33.424  1.00 22.09           C  
ATOM   3433  C   VAL A 475      32.272  35.099  33.605  1.00 24.02           C  
ATOM   3434  O   VAL A 475      31.566  35.241  32.613  1.00 18.83           O  
ATOM   3435  CB  VAL A 475      34.263  33.701  32.873  1.00 25.12           C  
ATOM   3436  CG1 VAL A 475      35.768  33.560  32.863  1.00 25.83           C  
ATOM   3437  CG2 VAL A 475      33.592  32.536  33.560  1.00 26.96           C  
ATOM   3438  N   SER A 476      31.780  34.944  34.841  1.00 23.76           N  
ATOM   3439  CA  SER A 476      30.343  35.039  35.099  1.00 25.51           C  
ATOM   3440  C   SER A 476      29.763  36.432  34.701  1.00 23.36           C  
ATOM   3441  O   SER A 476      28.670  36.529  34.138  1.00 24.70           O  
ATOM   3442  CB  SER A 476      30.030  34.723  36.565  1.00 24.78           C  
ATOM   3443  OG  SER A 476      28.637  34.878  36.835  1.00 28.28           O  
ATOM   3444  N   ASP A 477      30.482  37.484  35.045  1.00 21.74           N  
ATOM   3445  CA  ASP A 477      30.194  38.833  34.579  1.00 22.55           C  
ATOM   3446  C   ASP A 477      30.030  38.993  33.070  1.00 22.00           C  
ATOM   3447  O   ASP A 477      29.080  39.616  32.595  1.00 20.40           O  
ATOM   3448  CB  ASP A 477      31.274  39.781  35.070  1.00 22.13           C  
ATOM   3449  CG  ASP A 477      31.002  40.288  36.508  1.00 26.92           C  
ATOM   3450  OD1 ASP A 477      30.155  39.665  37.276  1.00 27.81           O  
ATOM   3451  OD2 ASP A 477      31.630  41.336  36.845  1.00 27.75           O  
ATOM   3452  N   ALA A 478      30.968  38.435  32.318  1.00 20.28           N  
ATOM   3453  CA  ALA A 478      30.943  38.555  30.888  1.00 20.19           C  
ATOM   3454  C   ALA A 478      29.784  37.755  30.340  1.00 19.23           C  
ATOM   3455  O   ALA A 478      29.226  38.137  29.315  1.00 16.63           O  
ATOM   3456  CB  ALA A 478      32.269  38.079  30.292  1.00 21.75           C  
ATOM   3457  N   VAL A 479      29.452  36.624  30.965  1.00 18.91           N  
ATOM   3458  CA  VAL A 479      28.317  35.780  30.469  1.00 20.91           C  
ATOM   3459  C   VAL A 479      26.973  36.562  30.705  1.00 20.19           C  
ATOM   3460  O   VAL A 479      26.096  36.625  29.826  1.00 20.18           O  
ATOM   3461  CB  VAL A 479      28.308  34.379  31.125  1.00 19.94           C  
ATOM   3462  CG1 VAL A 479      27.034  33.603  30.855  1.00 20.40           C  
ATOM   3463  CG2 VAL A 479      29.512  33.540  30.658  1.00 23.17           C  
ATOM   3464  N   ALA A 480      26.830  37.108  31.894  1.00 18.51           N  
ATOM   3465  CA  ALA A 480      25.601  37.820  32.255  1.00 21.40           C  
ATOM   3466  C   ALA A 480      25.458  39.002  31.282  1.00 20.96           C  
ATOM   3467  O   ALA A 480      24.399  39.202  30.759  1.00 21.72           O  
ATOM   3468  CB  ALA A 480      25.642  38.316  33.680  1.00 18.70           C  
ATOM   3469  N   THR A 481      26.566  39.692  31.005  1.00 19.64           N  
ATOM   3470  CA  THR A 481      26.542  40.870  30.265  1.00 18.28           C  
ATOM   3471  C   THR A 481      26.214  40.598  28.841  1.00 21.24           C  
ATOM   3472  O   THR A 481      25.364  41.329  28.299  1.00 23.15           O  
ATOM   3473  CB  THR A 481      27.834  41.648  30.375  1.00 18.44           C  
ATOM   3474  OG1 THR A 481      28.063  42.004  31.737  1.00 19.75           O  
ATOM   3475  CG2 THR A 481      27.764  42.913  29.582  1.00 17.58           C  
ATOM   3476  N   TYR A 482      26.827  39.556  28.247  1.00 18.80           N  
ATOM   3477  CA  TYR A 482      26.584  39.170  26.876  1.00 19.50           C  
ATOM   3478  C   TYR A 482      25.122  38.821  26.595  1.00 20.51           C  
ATOM   3479  O   TYR A 482      24.536  39.251  25.587  1.00 19.77           O  
ATOM   3480  CB  TYR A 482      27.469  37.959  26.443  1.00 20.47           C  
ATOM   3481  CG  TYR A 482      27.251  37.569  24.990  1.00 20.52           C  
ATOM   3482  CD1 TYR A 482      27.750  38.348  23.958  1.00 19.90           C  
ATOM   3483  CD2 TYR A 482      26.506  36.430  24.643  1.00 21.87           C  
ATOM   3484  CE1 TYR A 482      27.521  38.011  22.643  1.00 19.21           C  
ATOM   3485  CE2 TYR A 482      26.290  36.090  23.309  1.00 21.11           C  
ATOM   3486  CZ  TYR A 482      26.784  36.902  22.323  1.00 20.00           C  
ATOM   3487  OH  TYR A 482      26.572  36.587  20.969  1.00 21.46           O  
ATOM   3488  N   TYR A 483      24.563  37.957  27.422  1.00 20.02           N  
ATOM   3489  CA  TYR A 483      23.260  37.460  27.110  1.00 19.66           C  
ATOM   3490  C   TYR A 483      22.164  38.468  27.510  1.00 19.35           C  
ATOM   3491  O   TYR A 483      21.104  38.451  26.948  1.00 19.71           O  
ATOM   3492  CB  TYR A 483      23.036  36.077  27.731  1.00 20.14           C  
ATOM   3493  CG  TYR A 483      23.813  35.008  27.018  1.00 20.64           C  
ATOM   3494  CD1 TYR A 483      23.476  34.626  25.727  1.00 20.99           C  
ATOM   3495  CD2 TYR A 483      24.891  34.367  27.643  1.00 23.36           C  
ATOM   3496  CE1 TYR A 483      24.176  33.644  25.066  1.00 22.61           C  
ATOM   3497  CE2 TYR A 483      25.633  33.369  26.986  1.00 23.35           C  
ATOM   3498  CZ  TYR A 483      25.277  33.023  25.705  1.00 22.70           C  
ATOM   3499  OH  TYR A 483      26.006  32.087  25.049  1.00 25.18           O  
ATOM   3500  N   LEU A 484      22.446  39.319  28.486  1.00 19.65           N  
ATOM   3501  CA  LEU A 484      21.587  40.448  28.817  1.00 18.83           C  
ATOM   3502  C   LEU A 484      21.458  41.352  27.611  1.00 17.60           C  
ATOM   3503  O   LEU A 484      20.305  41.745  27.205  1.00 19.20           O  
ATOM   3504  CB  LEU A 484      22.108  41.184  30.068  1.00 19.30           C  
ATOM   3505  CG  LEU A 484      21.404  42.457  30.448  1.00 22.83           C  
ATOM   3506  CD1 LEU A 484      19.971  42.132  30.806  1.00 25.07           C  
ATOM   3507  CD2 LEU A 484      22.057  43.095  31.641  1.00 23.20           C  
ATOM   3508  N   TYR A 485      22.610  41.622  26.998  1.00 16.17           N  
ATOM   3509  CA  TYR A 485      22.700  42.416  25.808  1.00 16.51           C  
ATOM   3510  C   TYR A 485      21.942  41.757  24.653  1.00 19.03           C  
ATOM   3511  O   TYR A 485      21.109  42.418  24.053  1.00 17.69           O  
ATOM   3512  CB  TYR A 485      24.162  42.743  25.378  1.00 16.34           C  
ATOM   3513  CG  TYR A 485      24.074  43.562  24.095  1.00 16.35           C  
ATOM   3514  CD1 TYR A 485      23.703  44.848  24.132  1.00 16.05           C  
ATOM   3515  CD2 TYR A 485      24.233  42.973  22.853  1.00 18.76           C  
ATOM   3516  CE1 TYR A 485      23.459  45.554  23.022  1.00 16.73           C  
ATOM   3517  CE2 TYR A 485      24.051  43.702  21.700  1.00 18.13           C  
ATOM   3518  CZ  TYR A 485      23.618  44.987  21.795  1.00 17.22           C  
ATOM   3519  OH  TYR A 485      23.421  45.760  20.643  1.00 17.91           O  
ATOM   3520  N   MET A 486      22.214  40.478  24.339  1.00 16.85           N  
ATOM   3521  CA  MET A 486      21.600  39.854  23.197  1.00 19.19           C  
ATOM   3522  C   MET A 486      20.051  39.678  23.359  1.00 21.07           C  
ATOM   3523  O   MET A 486      19.307  39.817  22.408  1.00 20.47           O  
ATOM   3524  CB  MET A 486      22.234  38.476  22.944  1.00 19.97           C  
ATOM   3525  CG  MET A 486      23.661  38.505  22.437  1.00 20.35           C  
ATOM   3526  SD  MET A 486      23.965  39.593  21.008  1.00 22.82           S  
ATOM   3527  CE  MET A 486      22.958  38.700  19.789  1.00 23.70           C  
ATOM   3528  N   LYS A 487      19.595  39.362  24.555  1.00 21.37           N  
ATOM   3529  CA  LYS A 487      18.205  39.049  24.799  1.00 23.25           C  
ATOM   3530  C   LYS A 487      17.306  40.258  25.072  1.00 21.02           C  
ATOM   3531  O   LYS A 487      16.144  40.200  24.725  1.00 20.16           O  
ATOM   3532  CB  LYS A 487      18.084  38.066  25.979  1.00 29.34           C  
ATOM   3533  CG  LYS A 487      18.743  36.682  25.679  1.00 36.64           C  
ATOM   3534  CD  LYS A 487      18.046  35.893  24.547  1.00 41.05           C  
ATOM   3535  CE  LYS A 487      18.993  35.238  23.540  1.00 42.12           C  
ATOM   3536  NZ  LYS A 487      18.245  34.816  22.306  1.00 48.94           N  
ATOM   3537  N   TYR A 488      17.853  41.333  25.673  1.00 18.96           N  
ATOM   3538  CA  TYR A 488      17.053  42.480  26.097  1.00 17.77           C  
ATOM   3539  C   TYR A 488      17.454  43.741  25.407  1.00 17.07           C  
ATOM   3540  O   TYR A 488      16.609  44.349  24.854  1.00 18.90           O  
ATOM   3541  CB  TYR A 488      17.041  42.633  27.608  1.00 16.64           C  
ATOM   3542  CG  TYR A 488      16.305  41.525  28.275  1.00 17.73           C  
ATOM   3543  CD1 TYR A 488      16.935  40.395  28.643  1.00 18.32           C  
ATOM   3544  CD2 TYR A 488      14.929  41.629  28.536  1.00 20.98           C  
ATOM   3545  CE1 TYR A 488      16.258  39.337  29.195  1.00 20.63           C  
ATOM   3546  CE2 TYR A 488      14.226  40.594  29.132  1.00 22.52           C  
ATOM   3547  CZ  TYR A 488      14.890  39.447  29.458  1.00 23.12           C  
ATOM   3548  OH  TYR A 488      14.225  38.451  30.087  1.00 27.16           O  
ATOM   3549  N   VAL A 489      18.738  44.111  25.366  1.00 15.56           N  
ATOM   3550  CA  VAL A 489      19.113  45.417  24.923  1.00 16.06           C  
ATOM   3551  C   VAL A 489      19.113  45.506  23.380  1.00 18.51           C  
ATOM   3552  O   VAL A 489      18.506  46.386  22.782  1.00 16.56           O  
ATOM   3553  CB  VAL A 489      20.464  45.776  25.464  1.00 16.10           C  
ATOM   3554  CG1 VAL A 489      20.819  47.204  25.109  1.00 17.94           C  
ATOM   3555  CG2 VAL A 489      20.453  45.642  26.959  1.00 17.34           C  
ATOM   3556  N   HIS A 490      19.694  44.517  22.745  1.00 15.91           N  
ATOM   3557  CA  HIS A 490      19.859  44.526  21.327  1.00 18.36           C  
ATOM   3558  C   HIS A 490      18.559  44.623  20.541  1.00 18.89           C  
ATOM   3559  O   HIS A 490      18.431  45.518  19.708  1.00 19.28           O  
ATOM   3560  CB  HIS A 490      20.684  43.299  20.879  1.00 18.73           C  
ATOM   3561  CG  HIS A 490      20.981  43.296  19.449  1.00 19.57           C  
ATOM   3562  ND1 HIS A 490      21.922  44.137  18.884  1.00 21.92           N  
ATOM   3563  CD2 HIS A 490      20.482  42.539  18.448  1.00 22.23           C  
ATOM   3564  CE1 HIS A 490      21.957  43.905  17.583  1.00 23.34           C  
ATOM   3565  NE2 HIS A 490      21.096  42.937  17.297  1.00 21.67           N  
ATOM   3566  N   PRO A 491      17.626  43.677  20.750  1.00 19.51           N  
ATOM   3567  CA  PRO A 491      16.352  43.772  20.013  1.00 21.10           C  
ATOM   3568  C   PRO A 491      15.628  45.116  20.250  1.00 21.08           C  
ATOM   3569  O   PRO A 491      15.167  45.771  19.291  1.00 21.28           O  
ATOM   3570  CB  PRO A 491      15.520  42.563  20.504  1.00 20.94           C  
ATOM   3571  CG  PRO A 491      16.284  41.935  21.627  1.00 22.12           C  
ATOM   3572  CD  PRO A 491      17.716  42.483  21.607  1.00 19.89           C  
ATOM   3573  N   PHE A 492      15.631  45.572  21.488  1.00 20.11           N  
ATOM   3574  CA  PHE A 492      14.905  46.774  21.811  1.00 20.53           C  
ATOM   3575  C   PHE A 492      15.497  47.986  21.158  1.00 19.30           C  
ATOM   3576  O   PHE A 492      14.800  48.703  20.460  1.00 16.73           O  
ATOM   3577  CB  PHE A 492      14.834  46.991  23.322  1.00 22.09           C  
ATOM   3578  CG  PHE A 492      13.950  48.139  23.715  1.00 22.75           C  
ATOM   3579  CD1 PHE A 492      12.609  48.087  23.469  1.00 23.30           C  
ATOM   3580  CD2 PHE A 492      14.469  49.238  24.376  1.00 23.71           C  
ATOM   3581  CE1 PHE A 492      11.772  49.134  23.846  1.00 26.74           C  
ATOM   3582  CE2 PHE A 492      13.655  50.291  24.773  1.00 25.40           C  
ATOM   3583  CZ  PHE A 492      12.301  50.256  24.495  1.00 26.70           C  
ATOM   3584  N   ILE A 493      16.793  48.222  21.355  1.00 19.15           N  
ATOM   3585  CA  ILE A 493      17.411  49.430  20.813  1.00 19.58           C  
ATOM   3586  C   ILE A 493      17.411  49.475  19.272  1.00 19.38           C  
ATOM   3587  O   ILE A 493      16.980  50.465  18.653  1.00 20.13           O  
ATOM   3588  CB  ILE A 493      18.838  49.607  21.364  1.00 20.58           C  
ATOM   3589  CG1 ILE A 493      18.775  49.748  22.874  1.00 21.50           C  
ATOM   3590  CG2 ILE A 493      19.473  50.844  20.794  1.00 21.24           C  
ATOM   3591  CD1 ILE A 493      17.775  50.792  23.360  1.00 22.75           C  
ATOM   3592  N   PHE A 494      17.858  48.390  18.646  1.00 18.51           N  
ATOM   3593  CA  PHE A 494      17.883  48.316  17.192  1.00 17.14           C  
ATOM   3594  C   PHE A 494      16.477  48.431  16.632  1.00 17.41           C  
ATOM   3595  O   PHE A 494      16.286  49.111  15.629  1.00 18.68           O  
ATOM   3596  CB  PHE A 494      18.652  47.089  16.689  1.00 16.81           C  
ATOM   3597  CG  PHE A 494      20.119  47.318  16.653  1.00 18.61           C  
ATOM   3598  CD1 PHE A 494      20.871  47.221  17.810  1.00 19.35           C  
ATOM   3599  CD2 PHE A 494      20.710  47.800  15.523  1.00 18.59           C  
ATOM   3600  CE1 PHE A 494      22.195  47.538  17.833  1.00 18.64           C  
ATOM   3601  CE2 PHE A 494      22.059  48.095  15.516  1.00 20.81           C  
ATOM   3602  CZ  PHE A 494      22.817  47.961  16.666  1.00 19.58           C  
ATOM   3603  N   SER A 495      15.475  47.797  17.241  1.00 16.80           N  
ATOM   3604  CA  SER A 495      14.117  48.026  16.739  1.00 16.37           C  
ATOM   3605  C   SER A 495      13.622  49.458  16.915  1.00 17.05           C  
ATOM   3606  O   SER A 495      13.008  50.001  16.032  1.00 20.10           O  
ATOM   3607  CB  SER A 495      13.125  47.077  17.350  1.00 16.38           C  
ATOM   3608  OG  SER A 495      13.615  45.761  17.216  1.00 16.20           O  
ATOM   3609  N   LEU A 496      13.890  50.077  18.042  1.00 17.25           N  
ATOM   3610  CA  LEU A 496      13.591  51.522  18.246  1.00 16.00           C  
ATOM   3611  C   LEU A 496      14.264  52.435  17.211  1.00 15.94           C  
ATOM   3612  O   LEU A 496      13.677  53.366  16.664  1.00 15.72           O  
ATOM   3613  CB  LEU A 496      14.046  51.830  19.642  1.00 17.90           C  
ATOM   3614  CG  LEU A 496      13.096  52.481  20.624  1.00 20.71           C  
ATOM   3615  CD1 LEU A 496      11.624  52.121  20.531  1.00 19.88           C  
ATOM   3616  CD2 LEU A 496      13.630  52.343  22.023  1.00 19.68           C  
ATOM   3617  N   CYS A 497      15.498  52.124  16.848  1.00 16.51           N  
ATOM   3618  CA  CYS A 497      16.140  52.845  15.781  1.00 17.22           C  
ATOM   3619  C   CYS A 497      15.370  52.791  14.452  1.00 15.78           C  
ATOM   3620  O   CYS A 497      15.561  53.654  13.602  1.00 14.12           O  
ATOM   3621  CB  CYS A 497      17.545  52.267  15.532  1.00 20.49           C  
ATOM   3622  SG  CYS A 497      18.837  52.614  16.775  1.00 24.70           S  
ATOM   3623  N   THR A 498      14.584  51.753  14.194  1.00 15.21           N  
ATOM   3624  CA  THR A 498      13.877  51.730  12.917  1.00 15.91           C  
ATOM   3625  C   THR A 498      12.761  52.801  12.838  1.00 17.12           C  
ATOM   3626  O   THR A 498      12.264  53.109  11.741  1.00 17.28           O  
ATOM   3627  CB  THR A 498      13.257  50.378  12.593  1.00 15.54           C  
ATOM   3628  OG1 THR A 498      12.275  50.038  13.545  1.00 16.59           O  
ATOM   3629  CG2 THR A 498      14.249  49.326  12.581  1.00 15.54           C  
ATOM   3630  N   ILE A 499      12.427  53.409  13.954  1.00 16.61           N  
ATOM   3631  CA  ILE A 499      11.462  54.502  13.956  1.00 20.09           C  
ATOM   3632  C   ILE A 499      11.959  55.833  14.525  1.00 19.92           C  
ATOM   3633  O   ILE A 499      11.402  56.852  14.197  1.00 22.74           O  
ATOM   3634  CB  ILE A 499      10.182  54.122  14.685  1.00 22.30           C  
ATOM   3635  CG1 ILE A 499      10.449  53.647  16.107  1.00 23.96           C  
ATOM   3636  CG2 ILE A 499       9.439  53.055  13.916  1.00 23.52           C  
ATOM   3637  CD1 ILE A 499       9.165  53.603  16.955  1.00 26.34           C  
ATOM   3638  N   ILE A 500      13.003  55.833  15.331  1.00 20.12           N  
ATOM   3639  CA  ILE A 500      13.568  57.062  15.874  1.00 22.02           C  
ATOM   3640  C   ILE A 500      14.846  57.380  15.085  1.00 21.91           C  
ATOM   3641  O   ILE A 500      15.599  56.473  14.813  1.00 24.18           O  
ATOM   3642  CB  ILE A 500      13.947  56.873  17.337  1.00 23.57           C  
ATOM   3643  CG1 ILE A 500      12.700  56.792  18.161  1.00 25.15           C  
ATOM   3644  CG2 ILE A 500      14.751  58.064  17.866  1.00 24.96           C  
ATOM   3645  CD1 ILE A 500      12.935  56.019  19.404  1.00 27.51           C  
ATOM   3646  N   PRO A 501      15.048  58.642  14.683  1.00 20.49           N  
ATOM   3647  CA  PRO A 501      16.099  59.079  13.779  1.00 20.12           C  
ATOM   3648  C   PRO A 501      17.407  59.342  14.447  1.00 20.65           C  
ATOM   3649  O   PRO A 501      17.894  60.450  14.361  1.00 23.75           O  
ATOM   3650  CB  PRO A 501      15.560  60.394  13.242  1.00 21.09           C  
ATOM   3651  CG  PRO A 501      14.622  60.922  14.324  1.00 21.40           C  
ATOM   3652  CD  PRO A 501      13.954  59.644  14.753  1.00 21.67           C  
ATOM   3653  N   LEU A 502      17.969  58.311  15.083  1.00 20.97           N  
ATOM   3654  CA  LEU A 502      19.193  58.382  15.882  1.00 20.27           C  
ATOM   3655  C   LEU A 502      19.955  57.078  15.693  1.00 20.27           C  
ATOM   3656  O   LEU A 502      19.363  56.049  15.326  1.00 19.26           O  
ATOM   3657  CB  LEU A 502      18.837  58.521  17.401  1.00 23.49           C  
ATOM   3658  CG  LEU A 502      18.224  59.849  17.945  1.00 22.97           C  
ATOM   3659  CD1 LEU A 502      17.797  59.690  19.376  1.00 23.03           C  
ATOM   3660  CD2 LEU A 502      19.157  61.045  17.830  1.00 22.41           C  
ATOM   3661  N   ASN A 503      21.249  57.096  15.963  1.00 19.15           N  
ATOM   3662  CA  ASN A 503      22.002  55.868  15.980  1.00 18.12           C  
ATOM   3663  C   ASN A 503      21.817  55.120  17.284  1.00 18.17           C  
ATOM   3664  O   ASN A 503      21.228  55.638  18.206  1.00 17.96           O  
ATOM   3665  CB  ASN A 503      23.457  56.126  15.621  1.00 19.22           C  
ATOM   3666  CG  ASN A 503      24.213  56.864  16.661  1.00 22.14           C  
ATOM   3667  OD1 ASN A 503      23.884  56.840  17.825  1.00 25.04           O  
ATOM   3668  ND2 ASN A 503      25.297  57.472  16.249  1.00 25.56           N  
ATOM   3669  N   PRO A 504      22.264  53.866  17.336  1.00 18.48           N  
ATOM   3670  CA  PRO A 504      22.117  53.052  18.514  1.00 18.98           C  
ATOM   3671  C   PRO A 504      22.679  53.623  19.828  1.00 18.58           C  
ATOM   3672  O   PRO A 504      21.999  53.560  20.847  1.00 20.15           O  
ATOM   3673  CB  PRO A 504      22.812  51.761  18.124  1.00 18.16           C  
ATOM   3674  CG  PRO A 504      22.728  51.699  16.671  1.00 18.47           C  
ATOM   3675  CD  PRO A 504      22.900  53.101  16.239  1.00 19.25           C  
ATOM   3676  N   ASP A 505      23.886  54.152  19.802  1.00 18.06           N  
ATOM   3677  CA  ASP A 505      24.513  54.783  20.950  1.00 18.43           C  
ATOM   3678  C   ASP A 505      23.552  55.829  21.612  1.00 19.43           C  
ATOM   3679  O   ASP A 505      23.424  55.927  22.861  1.00 17.11           O  
ATOM   3680  CB  ASP A 505      25.771  55.546  20.485  1.00 22.00           C  
ATOM   3681  CG  ASP A 505      27.044  54.672  20.378  1.00 25.41           C  
ATOM   3682  OD1 ASP A 505      27.159  53.689  21.145  1.00 30.34           O  
ATOM   3683  OD2 ASP A 505      27.957  55.005  19.559  1.00 28.75           O  
ATOM   3684  N   GLU A 506      22.955  56.632  20.751  1.00 18.96           N  
ATOM   3685  CA  GLU A 506      22.145  57.779  21.141  1.00 21.92           C  
ATOM   3686  C   GLU A 506      20.791  57.257  21.596  1.00 19.33           C  
ATOM   3687  O   GLU A 506      20.328  57.583  22.662  1.00 19.91           O  
ATOM   3688  CB  GLU A 506      21.995  58.742  19.946  1.00 24.88           C  
ATOM   3689  CG  GLU A 506      23.266  59.503  19.529  1.00 29.26           C  
ATOM   3690  CD  GLU A 506      23.332  60.003  18.017  1.00 38.43           C  
ATOM   3691  OE1 GLU A 506      22.566  59.543  17.052  1.00 37.59           O  
ATOM   3692  OE2 GLU A 506      24.249  60.858  17.766  1.00 50.38           O  
ATOM   3693  N   THR A 507      20.223  56.349  20.801  1.00 17.48           N  
ATOM   3694  CA  THR A 507      18.968  55.734  21.088  1.00 17.03           C  
ATOM   3695  C   THR A 507      18.956  55.010  22.413  1.00 19.56           C  
ATOM   3696  O   THR A 507      17.941  55.058  23.135  1.00 17.99           O  
ATOM   3697  CB  THR A 507      18.529  54.823  19.948  1.00 16.99           C  
ATOM   3698  OG1 THR A 507      18.290  55.631  18.807  1.00 15.78           O  
ATOM   3699  CG2 THR A 507      17.251  54.125  20.261  1.00 18.03           C  
ATOM   3700  N   LEU A 508      20.091  54.402  22.774  1.00 20.79           N  
ATOM   3701  CA  LEU A 508      20.280  53.840  24.127  1.00 20.10           C  
ATOM   3702  C   LEU A 508      20.266  54.876  25.269  1.00 19.96           C  
ATOM   3703  O   LEU A 508      19.804  54.609  26.366  1.00 19.00           O  
ATOM   3704  CB  LEU A 508      21.584  53.045  24.190  1.00 19.62           C  
ATOM   3705  CG  LEU A 508      21.894  52.357  25.499  1.00 22.77           C  
ATOM   3706  CD1 LEU A 508      20.966  51.130  25.792  1.00 24.48           C  
ATOM   3707  CD2 LEU A 508      23.369  51.961  25.539  1.00 23.85           C  
ATOM   3708  N   ARG A 509      20.822  56.029  25.011  1.00 19.65           N  
ATOM   3709  CA  ARG A 509      21.188  56.953  26.066  1.00 19.99           C  
ATOM   3710  C   ARG A 509      20.250  58.160  26.209  1.00 20.64           C  
ATOM   3711  O   ARG A 509      20.205  58.683  27.288  1.00 20.77           O  
ATOM   3712  CB  ARG A 509      22.570  57.514  25.825  1.00 18.96           C  
ATOM   3713  CG  ARG A 509      23.646  56.467  26.111  1.00 19.84           C  
ATOM   3714  CD  ARG A 509      25.000  56.994  25.633  1.00 17.70           C  
ATOM   3715  NE  ARG A 509      26.052  56.010  25.933  1.00 17.81           N  
ATOM   3716  CZ  ARG A 509      26.357  54.951  25.205  1.00 18.63           C  
ATOM   3717  NH1 ARG A 509      25.739  54.657  24.049  1.00 19.75           N  
ATOM   3718  NH2 ARG A 509      27.327  54.168  25.612  1.00 21.48           N  
ATOM   3719  N   LYS A 510      19.522  58.600  25.178  1.00 19.38           N  
ATOM   3720  CA  LYS A 510      18.698  59.805  25.374  1.00 21.52           C  
ATOM   3721  C   LYS A 510      17.593  59.621  26.433  1.00 18.34           C  
ATOM   3722  O   LYS A 510      17.040  58.558  26.552  1.00 16.95           O  
ATOM   3723  CB  LYS A 510      18.013  60.228  24.094  1.00 22.26           C  
ATOM   3724  CG  LYS A 510      18.933  60.745  23.024  1.00 27.01           C  
ATOM   3725  CD  LYS A 510      19.829  61.855  23.474  1.00 27.85           C  
ATOM   3726  CE  LYS A 510      20.734  62.231  22.321  1.00 32.56           C  
ATOM   3727  NZ  LYS A 510      21.755  63.236  22.732  1.00 32.73           N  
ATOM   3728  N   GLY A 511      17.209  60.693  27.094  1.00 17.07           N  
ATOM   3729  CA  GLY A 511      15.956  60.661  27.962  1.00 17.18           C  
ATOM   3730  C   GLY A 511      14.730  60.210  27.144  1.00 16.17           C  
ATOM   3731  O   GLY A 511      14.680  60.444  25.932  1.00 15.99           O  
ATOM   3732  N   THR A 512      13.753  59.548  27.771  1.00 16.16           N  
ATOM   3733  CA  THR A 512      12.487  59.238  27.105  1.00 16.47           C  
ATOM   3734  C   THR A 512      11.713  60.453  26.568  1.00 16.16           C  
ATOM   3735  O   THR A 512      11.050  60.388  25.526  1.00 17.63           O  
ATOM   3736  CB  THR A 512      11.579  58.441  28.022  1.00 17.46           C  
ATOM   3737  OG1 THR A 512      11.206  59.218  29.164  1.00 20.81           O  
ATOM   3738  CG2 THR A 512      12.271  57.146  28.502  1.00 19.48           C  
ATOM   3739  N   GLY A 513      11.800  61.585  27.246  1.00 16.07           N  
ATOM   3740  CA  GLY A 513      11.231  62.818  26.699  1.00 15.04           C  
ATOM   3741  C   GLY A 513      11.826  63.215  25.366  1.00 16.97           C  
ATOM   3742  O   GLY A 513      11.109  63.641  24.442  1.00 15.72           O  
ATOM   3743  N   THR A 514      13.146  63.077  25.230  1.00 18.03           N  
ATOM   3744  CA  THR A 514      13.807  63.398  23.965  1.00 18.93           C  
ATOM   3745  C   THR A 514      13.435  62.421  22.879  1.00 17.35           C  
ATOM   3746  O   THR A 514      13.295  62.823  21.698  1.00 19.01           O  
ATOM   3747  CB  THR A 514      15.318  63.422  24.171  1.00 19.43           C  
ATOM   3748  OG1 THR A 514      15.568  64.366  25.201  1.00 22.15           O  
ATOM   3749  CG2 THR A 514      16.078  63.856  22.871  1.00 21.27           C  
ATOM   3750  N   LEU A 515      13.267  61.165  23.254  1.00 16.50           N  
ATOM   3751  CA  LEU A 515      12.792  60.161  22.294  1.00 18.10           C  
ATOM   3752  C   LEU A 515      11.440  60.564  21.677  1.00 17.79           C  
ATOM   3753  O   LEU A 515      11.265  60.439  20.448  1.00 16.16           O  
ATOM   3754  CB  LEU A 515      12.658  58.770  22.891  1.00 16.89           C  
ATOM   3755  CG  LEU A 515      13.970  58.120  23.378  1.00 19.41           C  
ATOM   3756  CD1 LEU A 515      13.641  56.711  23.875  1.00 17.93           C  
ATOM   3757  CD2 LEU A 515      15.011  58.091  22.270  1.00 19.18           C  
ATOM   3758  N   CYS A 516      10.508  60.958  22.556  1.00 17.62           N  
ATOM   3759  CA  CYS A 516       9.201  61.517  22.161  1.00 18.65           C  
ATOM   3760  C   CYS A 516       9.358  62.661  21.237  1.00 18.39           C  
ATOM   3761  O   CYS A 516       8.719  62.694  20.161  1.00 18.28           O  
ATOM   3762  CB  CYS A 516       8.404  61.984  23.372  1.00 18.63           C  
ATOM   3763  SG  CYS A 516       7.910  60.566  24.380  1.00 19.99           S  
ATOM   3764  N   GLU A 517      10.227  63.585  21.617  1.00 16.59           N  
ATOM   3765  CA  GLU A 517      10.483  64.738  20.756  1.00 19.12           C  
ATOM   3766  C   GLU A 517      10.856  64.353  19.255  1.00 19.74           C  
ATOM   3767  O   GLU A 517      10.376  64.950  18.243  1.00 16.22           O  
ATOM   3768  CB  GLU A 517      11.557  65.625  21.357  1.00 19.26           C  
ATOM   3769  CG  GLU A 517      11.602  66.943  20.660  1.00 23.46           C  
ATOM   3770  CD  GLU A 517      12.562  67.919  21.325  1.00 26.40           C  
ATOM   3771  OE1 GLU A 517      13.732  67.987  20.888  1.00 32.90           O  
ATOM   3772  OE2 GLU A 517      12.153  68.590  22.290  1.00 25.18           O  
ATOM   3773  N   MET A 518      11.706  63.336  19.153  1.00 19.06           N  
ATOM   3774  CA  MET A 518      12.250  62.903  17.876  1.00 19.97           C  
ATOM   3775  C   MET A 518      11.080  62.300  17.119  1.00 18.48           C  
ATOM   3776  O   MET A 518      10.855  62.626  15.961  1.00 19.30           O  
ATOM   3777  CB  MET A 518      13.403  61.879  18.028  1.00 19.79           C  
ATOM   3778  CG  MET A 518      14.659  62.350  18.703  1.00 22.19           C  
ATOM   3779  SD  MET A 518      15.483  63.612  17.740  1.00 27.64           S  
ATOM   3780  CE  MET A 518      15.475  65.098  18.737  1.00 33.30           C  
ATOM   3781  N   LEU A 519      10.254  61.523  17.788  1.00 18.35           N  
ATOM   3782  CA  LEU A 519       9.071  60.999  17.085  1.00 18.25           C  
ATOM   3783  C   LEU A 519       8.160  62.103  16.574  1.00 18.07           C  
ATOM   3784  O   LEU A 519       7.639  62.062  15.433  1.00 18.71           O  
ATOM   3785  CB  LEU A 519       8.325  60.021  17.976  1.00 18.18           C  
ATOM   3786  CG  LEU A 519       9.192  58.762  18.133  1.00 20.78           C  
ATOM   3787  CD1 LEU A 519       8.761  57.952  19.354  1.00 20.64           C  
ATOM   3788  CD2 LEU A 519       9.125  57.834  16.899  1.00 23.82           C  
ATOM   3789  N   LEU A 520       7.960  63.115  17.399  1.00 16.22           N  
ATOM   3790  CA  LEU A 520       7.038  64.193  17.016  1.00 14.94           C  
ATOM   3791  C   LEU A 520       7.598  65.028  15.919  1.00 15.11           C  
ATOM   3792  O   LEU A 520       6.865  65.472  15.090  1.00 15.50           O  
ATOM   3793  CB  LEU A 520       6.709  65.058  18.196  1.00 13.98           C  
ATOM   3794  CG  LEU A 520       5.918  64.346  19.275  1.00 14.38           C  
ATOM   3795  CD1 LEU A 520       6.136  65.014  20.613  1.00 16.14           C  
ATOM   3796  CD2 LEU A 520       4.439  64.308  18.981  1.00 16.04           C  
ATOM   3797  N   MET A 521       8.910  65.230  15.906  1.00 16.54           N  
ATOM   3798  CA  MET A 521       9.561  65.994  14.881  1.00 17.55           C  
ATOM   3799  C   MET A 521       9.408  65.348  13.513  1.00 18.50           C  
ATOM   3800  O   MET A 521       9.261  66.031  12.511  1.00 17.98           O  
ATOM   3801  CB  MET A 521      11.046  66.205  15.208  1.00 18.44           C  
ATOM   3802  CG  MET A 521      11.157  67.201  16.348  1.00 20.27           C  
ATOM   3803  SD  MET A 521      12.781  67.631  17.052  1.00 27.54           S  
ATOM   3804  CE  MET A 521      13.651  67.904  15.538  1.00 25.87           C  
ATOM   3805  N   VAL A 522       9.508  64.031  13.467  1.00 19.29           N  
ATOM   3806  CA  VAL A 522       9.305  63.351  12.214  1.00 19.17           C  
ATOM   3807  C   VAL A 522       7.887  63.602  11.734  1.00 19.60           C  
ATOM   3808  O   VAL A 522       7.630  63.998  10.576  1.00 17.95           O  
ATOM   3809  CB  VAL A 522       9.492  61.892  12.391  1.00 18.27           C  
ATOM   3810  CG1 VAL A 522       9.095  61.105  11.136  1.00 18.68           C  
ATOM   3811  CG2 VAL A 522      10.922  61.642  12.817  1.00 19.05           C  
ATOM   3812  N   GLN A 523       6.960  63.391  12.628  1.00 19.34           N  
ATOM   3813  CA  GLN A 523       5.572  63.560  12.215  1.00 19.97           C  
ATOM   3814  C   GLN A 523       5.322  64.981  11.787  1.00 19.62           C  
ATOM   3815  O   GLN A 523       4.639  65.209  10.775  1.00 17.15           O  
ATOM   3816  CB  GLN A 523       4.604  63.063  13.266  1.00 19.41           C  
ATOM   3817  CG  GLN A 523       4.606  61.542  13.430  1.00 20.07           C  
ATOM   3818  CD  GLN A 523       4.407  60.728  12.146  1.00 22.00           C  
ATOM   3819  OE1 GLN A 523       5.254  59.905  11.779  1.00 23.86           O  
ATOM   3820  NE2 GLN A 523       3.359  60.981  11.448  1.00 22.23           N  
ATOM   3821  N   ALA A 524       5.958  65.946  12.440  1.00 20.70           N  
ATOM   3822  CA  ALA A 524       5.686  67.342  12.058  1.00 20.49           C  
ATOM   3823  C   ALA A 524       6.315  67.665  10.732  1.00 20.77           C  
ATOM   3824  O   ALA A 524       5.675  68.263   9.830  1.00 17.16           O  
ATOM   3825  CB  ALA A 524       6.230  68.283  13.063  1.00 22.41           C  
ATOM   3826  N   TYR A 525       7.596  67.304  10.603  1.00 20.82           N  
ATOM   3827  CA  TYR A 525       8.285  67.478   9.330  1.00 20.13           C  
ATOM   3828  C   TYR A 525       7.543  66.851   8.161  1.00 19.96           C  
ATOM   3829  O   TYR A 525       7.354  67.476   7.144  1.00 20.42           O  
ATOM   3830  CB  TYR A 525       9.725  66.917   9.398  1.00 22.40           C  
ATOM   3831  CG  TYR A 525      10.400  67.020   8.075  1.00 21.90           C  
ATOM   3832  CD1 TYR A 525      10.865  68.244   7.615  1.00 22.71           C  
ATOM   3833  CD2 TYR A 525      10.447  65.924   7.211  1.00 23.25           C  
ATOM   3834  CE1 TYR A 525      11.498  68.380   6.379  1.00 21.44           C  
ATOM   3835  CE2 TYR A 525      11.067  66.038   5.976  1.00 24.01           C  
ATOM   3836  CZ  TYR A 525      11.576  67.282   5.568  1.00 24.03           C  
ATOM   3837  OH  TYR A 525      12.167  67.388   4.345  1.00 25.43           O  
ATOM   3838  N   GLN A 526       7.056  65.632   8.307  1.00 20.95           N  
ATOM   3839  CA  GLN A 526       6.378  64.980   7.167  1.00 22.34           C  
ATOM   3840  C   GLN A 526       5.031  65.599   6.864  1.00 23.06           C  
ATOM   3841  O   GLN A 526       4.588  65.487   5.792  1.00 22.04           O  
ATOM   3842  CB  GLN A 526       6.233  63.488   7.358  1.00 21.93           C  
ATOM   3843  CG  GLN A 526       7.610  62.864   7.389  1.00 23.22           C  
ATOM   3844  CD  GLN A 526       7.630  61.345   7.571  1.00 24.89           C  
ATOM   3845  OE1 GLN A 526       6.667  60.731   8.001  1.00 22.10           O  
ATOM   3846  NE2 GLN A 526       8.780  60.755   7.272  1.00 26.45           N  
ATOM   3847  N   HIS A 527       4.409  66.307   7.784  1.00 24.10           N  
ATOM   3848  CA  HIS A 527       3.142  66.931   7.456  1.00 22.86           C  
ATOM   3849  C   HIS A 527       3.405  68.401   7.127  1.00 22.60           C  
ATOM   3850  O   HIS A 527       2.491  69.203   7.098  1.00 19.88           O  
ATOM   3851  CB  HIS A 527       2.193  66.782   8.619  1.00 24.21           C  
ATOM   3852  CG  HIS A 527       1.738  65.378   8.842  1.00 26.76           C  
ATOM   3853  ND1 HIS A 527       0.525  64.902   8.375  1.00 29.22           N  
ATOM   3854  CD2 HIS A 527       2.332  64.342   9.475  1.00 25.44           C  
ATOM   3855  CE1 HIS A 527       0.399  63.627   8.718  1.00 30.26           C  
ATOM   3856  NE2 HIS A 527       1.487  63.263   9.377  1.00 28.31           N  
ATOM   3857  N   ASN A 528       4.683  68.747   6.924  1.00 22.44           N  
ATOM   3858  CA  ASN A 528       5.080  70.094   6.609  1.00 22.71           C  
ATOM   3859  C   ASN A 528       4.731  71.122   7.629  1.00 22.36           C  
ATOM   3860  O   ASN A 528       4.410  72.259   7.259  1.00 23.51           O  
ATOM   3861  CB  ASN A 528       4.467  70.517   5.267  1.00 24.65           C  
ATOM   3862  CG  ASN A 528       5.256  71.622   4.568  1.00 25.64           C  
ATOM   3863  OD1 ASN A 528       6.501  71.659   4.611  1.00 21.93           O  
ATOM   3864  ND2 ASN A 528       4.514  72.553   3.919  1.00 25.62           N  
ATOM   3865  N   ILE A 529       4.805  70.757   8.896  1.00 21.20           N  
ATOM   3866  CA  ILE A 529       4.521  71.696   9.993  1.00 22.58           C  
ATOM   3867  C   ILE A 529       5.823  72.264  10.520  1.00 21.23           C  
ATOM   3868  O   ILE A 529       6.727  71.539  10.852  1.00 21.43           O  
ATOM   3869  CB  ILE A 529       3.784  71.015  11.140  1.00 24.93           C  
ATOM   3870  CG1 ILE A 529       2.375  70.615  10.700  1.00 23.17           C  
ATOM   3871  CG2 ILE A 529       3.623  71.945  12.343  1.00 25.32           C  
ATOM   3872  CD1 ILE A 529       1.841  69.459  11.489  1.00 24.02           C  
ATOM   3873  N   LEU A 530       5.925  73.574  10.541  1.00 19.14           N  
ATOM   3874  CA  LEU A 530       7.057  74.269  11.104  1.00 21.18           C  
ATOM   3875  C   LEU A 530       7.153  73.978  12.596  1.00 20.70           C  
ATOM   3876  O   LEU A 530       6.177  74.120  13.337  1.00 19.87           O  
ATOM   3877  CB  LEU A 530       6.877  75.764  10.877  1.00 19.63           C  
ATOM   3878  CG  LEU A 530       7.948  76.718  11.333  1.00 21.86           C  
ATOM   3879  CD1 LEU A 530       9.190  76.538  10.529  1.00 23.34           C  
ATOM   3880  CD2 LEU A 530       7.413  78.154  11.131  1.00 23.69           C  
ATOM   3881  N   LEU A 531       8.331  73.579  13.028  1.00 20.89           N  
ATOM   3882  CA  LEU A 531       8.564  73.322  14.413  1.00 21.22           C  
ATOM   3883  C   LEU A 531       8.603  74.596  15.258  1.00 21.77           C  
ATOM   3884  O   LEU A 531       9.291  75.596  14.921  1.00 22.52           O  
ATOM   3885  CB  LEU A 531       9.895  72.565  14.633  1.00 21.23           C  
ATOM   3886  CG  LEU A 531      10.238  71.295  13.846  1.00 21.56           C  
ATOM   3887  CD1 LEU A 531      11.611  70.748  14.201  1.00 21.51           C  
ATOM   3888  CD2 LEU A 531       9.270  70.160  14.103  1.00 23.85           C  
ATOM   3889  N   PRO A 532       7.939  74.544  16.411  1.00 21.11           N  
ATOM   3890  CA  PRO A 532       8.120  75.619  17.375  1.00 21.82           C  
ATOM   3891  C   PRO A 532       9.527  75.548  17.923  1.00 22.42           C  
ATOM   3892  O   PRO A 532      10.099  74.478  17.966  1.00 19.88           O  
ATOM   3893  CB  PRO A 532       7.107  75.290  18.464  1.00 21.36           C  
ATOM   3894  CG  PRO A 532       6.076  74.449  17.775  1.00 21.11           C  
ATOM   3895  CD  PRO A 532       6.940  73.572  16.885  1.00 21.25           C  
ATOM   3896  N   ASN A 533      10.089  76.701  18.282  1.00 23.73           N  
ATOM   3897  CA  ASN A 533      11.278  76.772  19.106  1.00 23.76           C  
ATOM   3898  C   ASN A 533      11.073  76.230  20.531  1.00 23.10           C  
ATOM   3899  O   ASN A 533       9.961  76.149  21.049  1.00 21.09           O  
ATOM   3900  CB  ASN A 533      11.722  78.217  19.181  1.00 26.53           C  
ATOM   3901  CG  ASN A 533      12.420  78.648  17.924  1.00 25.12           C  
ATOM   3902  OD1 ASN A 533      12.850  77.815  17.137  1.00 28.93           O  
ATOM   3903  ND2 ASN A 533      12.610  79.916  17.769  1.00 26.13           N  
ATOM   3904  N   LYS A 534      12.168  75.859  21.143  1.00 23.26           N  
ATOM   3905  CA  LYS A 534      12.161  75.339  22.507  1.00 24.91           C  
ATOM   3906  C   LYS A 534      11.668  76.382  23.474  1.00 22.25           C  
ATOM   3907  O   LYS A 534      12.006  77.531  23.350  1.00 22.87           O  
ATOM   3908  CB  LYS A 534      13.566  74.895  22.920  1.00 25.29           C  
ATOM   3909  CG  LYS A 534      14.093  73.665  22.179  1.00 27.99           C  
ATOM   3910  CD  LYS A 534      15.365  73.200  22.897  1.00 32.32           C  
ATOM   3911  CE  LYS A 534      16.489  72.767  21.967  1.00 36.10           C  
ATOM   3912  NZ  LYS A 534      16.369  71.337  21.590  1.00 35.94           N  
ATOM   3913  N   HIS A 535      10.794  75.930  24.354  1.00 23.36           N  
ATOM   3914  CA  HIS A 535      10.198  76.685  25.401  1.00 26.20           C  
ATOM   3915  C   HIS A 535      11.211  77.050  26.439  1.00 29.33           C  
ATOM   3916  O   HIS A 535      12.068  76.259  26.802  1.00 27.86           O  
ATOM   3917  CB  HIS A 535       9.174  75.837  26.119  1.00 28.11           C  
ATOM   3918  CG  HIS A 535       8.492  76.554  27.239  1.00 32.15           C  
ATOM   3919  ND1 HIS A 535       7.513  77.503  27.019  1.00 36.87           N  
ATOM   3920  CD2 HIS A 535       8.615  76.445  28.581  1.00 28.92           C  
ATOM   3921  CE1 HIS A 535       7.085  77.972  28.178  1.00 34.08           C  
ATOM   3922  NE2 HIS A 535       7.722  77.332  29.139  1.00 32.24           N  
ATOM   3923  N   THR A 536      11.088  78.247  26.941  1.00 33.30           N  
ATOM   3924  CA  THR A 536      11.929  78.674  28.019  1.00 41.06           C  
ATOM   3925  C   THR A 536      11.002  79.208  29.134  1.00 39.31           C  
ATOM   3926  O   THR A 536      10.122  80.011  28.848  1.00 35.65           O  
ATOM   3927  CB  THR A 536      12.957  79.673  27.492  1.00 44.21           C  
ATOM   3928  OG1 THR A 536      14.057  79.719  28.408  1.00 55.34           O  
ATOM   3929  CG2 THR A 536      12.341  81.061  27.274  1.00 46.06           C  
ATOM   3930  N   ASP A 537      11.159  78.689  30.360  1.00 42.86           N  
ATOM   3931  CA  ASP A 537      10.273  79.026  31.517  1.00 49.56           C  
ATOM   3932  C   ASP A 537      10.438  80.494  31.848  1.00 43.01           C  
ATOM   3933  O   ASP A 537      11.549  81.017  31.737  1.00 41.07           O  
ATOM   3934  CB  ASP A 537      10.662  78.254  32.787  1.00 60.22           C  
ATOM   3935  CG  ASP A 537      10.620  76.726  32.620  1.00 68.49           C  
ATOM   3936  OD1 ASP A 537       9.506  76.153  32.710  1.00 67.91           O  
ATOM   3937  OD2 ASP A 537      11.712  76.112  32.435  1.00 71.17           O  
ATOM   3938  N   PRO A 538       9.356  81.176  32.240  1.00 42.08           N  
ATOM   3939  CA  PRO A 538       9.576  82.583  32.662  1.00 45.07           C  
ATOM   3940  C   PRO A 538      10.477  82.629  33.918  1.00 40.47           C  
ATOM   3941  O   PRO A 538      10.433  81.745  34.751  1.00 37.53           O  
ATOM   3942  CB  PRO A 538       8.165  83.113  32.937  1.00 45.02           C  
ATOM   3943  CG  PRO A 538       7.222  82.051  32.446  1.00 48.49           C  
ATOM   3944  CD  PRO A 538       7.978  80.747  32.498  1.00 48.32           C  
ATOM   3945  N   ILE A 539      11.354  83.605  33.995  1.00 43.51           N  
ATOM   3946  CA  ILE A 539      12.250  83.700  35.140  1.00 50.31           C  
ATOM   3947  C   ILE A 539      11.491  83.989  36.479  1.00 47.60           C  
ATOM   3948  O   ILE A 539      11.842  83.442  37.533  1.00 51.19           O  
ATOM   3949  CB  ILE A 539      13.366  84.711  34.828  1.00 56.25           C  
ATOM   3950  CG1 ILE A 539      14.303  84.059  33.778  1.00 60.99           C  
ATOM   3951  CG2 ILE A 539      14.101  85.103  36.107  1.00 59.92           C  
ATOM   3952  CD1 ILE A 539      15.480  84.879  33.306  1.00 60.56           C  
ATOM   3953  N   GLU A 540      10.438  84.799  36.412  1.00 44.27           N  
ATOM   3954  CA  GLU A 540       9.598  85.072  37.551  1.00 50.75           C  
ATOM   3955  C   GLU A 540       8.140  85.220  37.161  1.00 50.24           C  
ATOM   3956  O   GLU A 540       7.813  85.950  36.236  1.00 53.56           O  
ATOM   3957  CB  GLU A 540      10.108  86.311  38.289  1.00 56.73           C  
ATOM   3958  CG  GLU A 540       9.711  87.671  37.736  1.00 56.73           C  
ATOM   3959  CD  GLU A 540      10.538  88.804  38.370  1.00 61.01           C  
ATOM   3960  OE1 GLU A 540      11.090  88.589  39.486  1.00 55.72           O  
ATOM   3961  OE2 GLU A 540      10.633  89.906  37.762  1.00 57.00           O  
ATOM   3962  N   ARG A 541       7.257  84.510  37.857  1.00 52.61           N  
ATOM   3963  CA  ARG A 541       5.822  84.740  37.713  1.00 57.54           C  
ATOM   3964  C   ARG A 541       5.223  85.205  39.044  1.00 52.41           C  
ATOM   3965  O   ARG A 541       5.715  84.840  40.107  1.00 45.76           O  
ATOM   3966  CB  ARG A 541       5.086  83.494  37.180  1.00 65.57           C  
ATOM   3967  CG  ARG A 541       3.882  83.876  36.305  1.00 72.61           C  
ATOM   3968  CD  ARG A 541       2.977  82.725  35.843  1.00 70.07           C  
ATOM   3969  NE  ARG A 541       3.535  81.959  34.714  1.00 70.34           N  
ATOM   3970  CZ  ARG A 541       3.448  82.298  33.423  1.00 70.23           C  
ATOM   3971  NH1 ARG A 541       2.837  83.416  33.035  1.00 70.02           N  
ATOM   3972  NH2 ARG A 541       3.986  81.513  32.498  1.00 70.34           N  
ATOM   3973  N   PHE A 542       4.164  86.001  38.936  1.00 44.69           N  
ATOM   3974  CA  PHE A 542       3.443  86.587  40.052  1.00 46.43           C  
ATOM   3975  C   PHE A 542       1.994  86.126  40.063  1.00 43.40           C  
ATOM   3976  O   PHE A 542       1.416  85.939  39.011  1.00 46.07           O  
ATOM   3977  CB  PHE A 542       3.444  88.110  39.932  1.00 45.00           C  
ATOM   3978  CG  PHE A 542       4.779  88.705  40.119  1.00 45.85           C  
ATOM   3979  CD1 PHE A 542       5.641  88.828  39.051  1.00 46.18           C  
ATOM   3980  CD2 PHE A 542       5.190  89.102  41.364  1.00 44.16           C  
ATOM   3981  CE1 PHE A 542       6.902  89.352  39.227  1.00 45.25           C  
ATOM   3982  CE2 PHE A 542       6.448  89.610  41.551  1.00 43.86           C  
ATOM   3983  CZ  PHE A 542       7.306  89.745  40.481  1.00 43.16           C  
ATOM   3984  N   TYR A 543       1.415  85.933  41.246  1.00 41.96           N  
ATOM   3985  CA  TYR A 543      -0.023  85.674  41.377  1.00 39.97           C  
ATOM   3986  C   TYR A 543      -0.541  86.569  42.499  1.00 41.65           C  
ATOM   3987  O   TYR A 543       0.081  86.627  43.550  1.00 37.81           O  
ATOM   3988  CB  TYR A 543      -0.255  84.204  41.672  1.00 40.03           C  
ATOM   3989  CG  TYR A 543      -1.667  83.826  42.102  1.00 37.91           C  
ATOM   3990  CD1 TYR A 543      -2.724  83.796  41.199  1.00 39.02           C  
ATOM   3991  CD2 TYR A 543      -1.922  83.417  43.385  1.00 37.27           C  
ATOM   3992  CE1 TYR A 543      -4.016  83.436  41.598  1.00 33.42           C  
ATOM   3993  CE2 TYR A 543      -3.187  83.029  43.778  1.00 36.49           C  
ATOM   3994  CZ  TYR A 543      -4.230  83.058  42.894  1.00 34.77           C  
ATOM   3995  OH  TYR A 543      -5.495  82.676  43.341  1.00 39.14           O  
ATOM   3996  N   ASP A 544      -1.637  87.305  42.238  1.00 50.23           N  
ATOM   3997  CA  ASP A 544      -2.232  88.250  43.203  1.00 50.31           C  
ATOM   3998  C   ASP A 544      -1.166  89.166  43.789  1.00 45.83           C  
ATOM   3999  O   ASP A 544      -1.158  89.428  44.993  1.00 42.53           O  
ATOM   4000  CB  ASP A 544      -2.921  87.465  44.340  1.00 61.41           C  
ATOM   4001  CG  ASP A 544      -4.441  87.649  44.369  1.00 70.95           C  
ATOM   4002  OD1 ASP A 544      -4.895  88.795  44.624  1.00 69.86           O  
ATOM   4003  OD2 ASP A 544      -5.164  86.633  44.170  1.00 71.64           O  
ATOM   4004  N   GLY A 545      -0.209  89.587  42.967  1.00 44.66           N  
ATOM   4005  CA  GLY A 545       0.871  90.468  43.449  1.00 45.61           C  
ATOM   4006  C   GLY A 545       1.991  89.782  44.224  1.00 43.57           C  
ATOM   4007  O   GLY A 545       2.916  90.450  44.659  1.00 40.05           O  
ATOM   4008  N   HIS A 546       1.925  88.453  44.376  1.00 44.82           N  
ATOM   4009  CA  HIS A 546       2.960  87.692  45.071  1.00 43.36           C  
ATOM   4010  C   HIS A 546       3.864  87.035  44.060  1.00 40.92           C  
ATOM   4011  O   HIS A 546       3.390  86.616  43.005  1.00 39.36           O  
ATOM   4012  CB  HIS A 546       2.322  86.591  45.897  1.00 45.22           C  
ATOM   4013  CG  HIS A 546       1.315  87.085  46.873  1.00 46.42           C  
ATOM   4014  ND1 HIS A 546       1.670  87.722  48.036  1.00 47.11           N  
ATOM   4015  CD2 HIS A 546      -0.035  87.030  46.873  1.00 48.83           C  
ATOM   4016  CE1 HIS A 546       0.582  88.048  48.712  1.00 43.74           C  
ATOM   4017  NE2 HIS A 546      -0.464  87.635  48.029  1.00 47.52           N  
ATOM   4018  N   LEU A 547       5.144  86.906  44.396  1.00 35.36           N  
ATOM   4019  CA  LEU A 547       6.057  86.151  43.581  1.00 35.19           C  
ATOM   4020  C   LEU A 547       5.836  84.672  43.844  1.00 39.49           C  
ATOM   4021  O   LEU A 547       5.734  84.232  44.999  1.00 33.69           O  
ATOM   4022  CB  LEU A 547       7.497  86.498  43.906  1.00 33.63           C  
ATOM   4023  CG  LEU A 547       8.643  85.798  43.177  1.00 33.71           C  
ATOM   4024  CD1 LEU A 547       8.639  86.025  41.674  1.00 37.40           C  
ATOM   4025  CD2 LEU A 547       9.957  86.327  43.696  1.00 37.71           C  
ATOM   4026  N   LEU A 548       5.764  83.904  42.759  1.00 42.13           N  
ATOM   4027  CA  LEU A 548       5.578  82.449  42.852  1.00 40.28           C  
ATOM   4028  C   LEU A 548       6.923  81.806  43.062  1.00 37.80           C  
ATOM   4029  O   LEU A 548       7.854  82.113  42.353  1.00 35.70           O  
ATOM   4030  CB  LEU A 548       4.950  81.898  41.569  1.00 37.04           C  
ATOM   4031  CG  LEU A 548       3.447  82.164  41.528  1.00 34.49           C  
ATOM   4032  CD1 LEU A 548       2.928  82.095  40.112  1.00 32.08           C  
ATOM   4033  CD2 LEU A 548       2.696  81.195  42.422  1.00 34.34           C  
ATOM   4034  N   GLU A 549       7.026  80.922  44.041  1.00 38.31           N  
ATOM   4035  CA  GLU A 549       8.184  80.044  44.123  1.00 42.35           C  
ATOM   4036  C   GLU A 549       8.039  78.899  43.075  1.00 40.17           C  
ATOM   4037  O   GLU A 549       8.996  78.557  42.400  1.00 42.48           O  
ATOM   4038  CB  GLU A 549       8.356  79.538  45.557  1.00 49.32           C  
ATOM   4039  CG  GLU A 549       9.652  78.768  45.818  1.00 59.32           C  
ATOM   4040  CD  GLU A 549       9.469  77.251  45.939  1.00 65.39           C  
ATOM   4041  OE1 GLU A 549       8.312  76.750  46.027  1.00 65.39           O  
ATOM   4042  OE2 GLU A 549      10.510  76.549  45.946  1.00 70.67           O  
ATOM   4043  N   SER A 550       6.844  78.346  42.906  1.00 38.50           N  
ATOM   4044  CA  SER A 550       6.590  77.314  41.885  1.00 38.43           C  
ATOM   4045  C   SER A 550       5.113  77.257  41.511  1.00 40.73           C  
ATOM   4046  O   SER A 550       4.266  77.726  42.275  1.00 36.12           O  
ATOM   4047  CB  SER A 550       6.987  75.929  42.402  1.00 40.07           C  
ATOM   4048  OG  SER A 550       6.114  75.528  43.429  1.00 41.11           O  
ATOM   4049  N   GLU A 551       4.802  76.694  40.341  1.00 39.13           N  
ATOM   4050  CA  GLU A 551       3.437  76.439  39.993  1.00 40.57           C  
ATOM   4051  C   GLU A 551       3.343  75.193  39.183  1.00 40.24           C  
ATOM   4052  O   GLU A 551       4.229  74.920  38.379  1.00 36.73           O  
ATOM   4053  CB  GLU A 551       2.841  77.594  39.207  1.00 44.51           C  
ATOM   4054  CG  GLU A 551       3.484  77.872  37.881  1.00 46.06           C  
ATOM   4055  CD  GLU A 551       2.876  79.085  37.178  1.00 50.15           C  
ATOM   4056  OE1 GLU A 551       3.638  79.975  36.740  1.00 55.93           O  
ATOM   4057  OE2 GLU A 551       1.639  79.166  37.064  1.00 47.17           O  
ATOM   4058  N   THR A 552       2.225  74.489  39.366  1.00 31.41           N  
ATOM   4059  CA  THR A 552       2.056  73.133  38.865  1.00 29.30           C  
ATOM   4060  C   THR A 552       0.544  72.919  38.803  1.00 24.59           C  
ATOM   4061  O   THR A 552      -0.229  73.902  38.821  1.00 24.34           O  
ATOM   4062  CB  THR A 552       2.903  72.129  39.736  1.00 33.79           C  
ATOM   4063  OG1 THR A 552       2.860  70.805  39.215  1.00 38.96           O  
ATOM   4064  CG2 THR A 552       2.461  72.066  41.134  1.00 32.62           C  
ATOM   4065  N   TYR A 553       0.113  71.681  38.633  1.00 24.38           N  
ATOM   4066  CA  TYR A 553      -1.315  71.311  38.586  1.00 21.50           C  
ATOM   4067  C   TYR A 553      -1.438  70.139  39.474  1.00 22.88           C  
ATOM   4068  O   TYR A 553      -0.428  69.463  39.737  1.00 21.71           O  
ATOM   4069  CB  TYR A 553      -1.798  70.942  37.183  1.00 21.47           C  
ATOM   4070  CG  TYR A 553      -0.860  70.005  36.484  1.00 21.73           C  
ATOM   4071  CD1 TYR A 553       0.187  70.497  35.715  1.00 24.00           C  
ATOM   4072  CD2 TYR A 553      -0.984  68.635  36.610  1.00 21.13           C  
ATOM   4073  CE1 TYR A 553       1.103  69.637  35.092  1.00 23.61           C  
ATOM   4074  CE2 TYR A 553      -0.068  67.758  36.005  1.00 20.69           C  
ATOM   4075  CZ  TYR A 553       0.952  68.248  35.223  1.00 22.69           C  
ATOM   4076  OH  TYR A 553       1.880  67.377  34.646  1.00 20.92           O  
ATOM   4077  N   VAL A 554      -2.679  69.882  39.915  1.00 22.49           N  
ATOM   4078  CA  VAL A 554      -2.983  68.719  40.723  1.00 23.57           C  
ATOM   4079  C   VAL A 554      -2.886  67.475  39.839  1.00 23.75           C  
ATOM   4080  O   VAL A 554      -3.482  67.431  38.755  1.00 22.13           O  
ATOM   4081  CB  VAL A 554      -4.397  68.844  41.399  1.00 23.56           C  
ATOM   4082  CG1 VAL A 554      -4.769  67.632  42.191  1.00 23.48           C  
ATOM   4083  CG2 VAL A 554      -4.471  70.068  42.332  1.00 24.66           C  
ATOM   4084  N   GLY A 555      -2.198  66.447  40.332  1.00 20.83           N  
ATOM   4085  CA  GLY A 555      -1.963  65.245  39.535  1.00 20.80           C  
ATOM   4086  C   GLY A 555      -2.889  64.086  39.806  1.00 20.73           C  
ATOM   4087  O   GLY A 555      -4.108  64.235  39.916  1.00 22.97           O  
ATOM   4088  N   GLY A 556      -2.323  62.903  39.917  1.00 21.28           N  
ATOM   4089  CA  GLY A 556      -3.163  61.707  40.133  1.00 21.36           C  
ATOM   4090  C   GLY A 556      -3.829  61.702  41.492  1.00 20.42           C  
ATOM   4091  O   GLY A 556      -3.382  62.400  42.420  1.00 20.71           O  
ATOM   4092  N   HIS A 557      -4.908  60.926  41.595  1.00 20.14           N  
ATOM   4093  CA  HIS A 557      -5.651  60.853  42.790  1.00 19.43           C  
ATOM   4094  C   HIS A 557      -5.339  59.547  43.440  1.00 19.17           C  
ATOM   4095  O   HIS A 557      -5.502  58.503  42.811  1.00 17.82           O  
ATOM   4096  CB  HIS A 557      -7.149  60.933  42.502  1.00 19.68           C  
ATOM   4097  CG  HIS A 557      -8.008  61.091  43.728  1.00 21.53           C  
ATOM   4098  ND1 HIS A 557      -8.092  62.279  44.450  1.00 22.91           N  
ATOM   4099  CD2 HIS A 557      -8.883  60.235  44.319  1.00 21.83           C  
ATOM   4100  CE1 HIS A 557      -8.919  62.117  45.469  1.00 21.39           C  
ATOM   4101  NE2 HIS A 557      -9.416  60.891  45.410  1.00 21.09           N  
ATOM   4102  N   VAL A 558      -5.051  59.602  44.749  1.00 18.85           N  
ATOM   4103  CA  VAL A 558      -4.696  58.416  45.507  1.00 19.89           C  
ATOM   4104  C   VAL A 558      -5.453  58.330  46.821  1.00 18.52           C  
ATOM   4105  O   VAL A 558      -5.563  59.326  47.525  1.00 18.69           O  
ATOM   4106  CB  VAL A 558      -3.187  58.472  45.860  1.00 18.39           C  
ATOM   4107  CG1 VAL A 558      -2.688  57.097  46.387  1.00 18.58           C  
ATOM   4108  CG2 VAL A 558      -2.388  58.936  44.673  1.00 17.32           C  
ATOM   4109  N   GLU A 559      -5.873  57.127  47.189  1.00 19.90           N  
ATOM   4110  CA  GLU A 559      -6.598  56.916  48.464  1.00 22.36           C  
ATOM   4111  C   GLU A 559      -6.223  55.594  49.154  1.00 21.57           C  
ATOM   4112  O   GLU A 559      -6.138  54.539  48.518  1.00 20.69           O  
ATOM   4113  CB  GLU A 559      -8.141  56.907  48.279  1.00 24.08           C  
ATOM   4114  CG  GLU A 559      -8.775  58.179  47.711  1.00 30.26           C  
ATOM   4115  CD  GLU A 559     -10.305  58.018  47.499  1.00 33.42           C  
ATOM   4116  OE1 GLU A 559     -10.968  57.254  48.213  1.00 43.63           O  
ATOM   4117  OE2 GLU A 559     -10.870  58.656  46.612  1.00 38.20           O  
ATOM   4118  N   SER A 560      -6.022  55.694  50.460  1.00 22.71           N  
ATOM   4119  CA  SER A 560      -5.955  54.562  51.314  1.00 26.77           C  
ATOM   4120  C   SER A 560      -7.319  54.440  52.030  1.00 27.32           C  
ATOM   4121  O   SER A 560      -7.665  55.283  52.781  1.00 27.99           O  
ATOM   4122  CB  SER A 560      -4.866  54.754  52.346  1.00 29.13           C  
ATOM   4123  OG  SER A 560      -4.740  53.567  53.125  1.00 36.29           O  
ATOM   4124  N   LEU A 561      -8.034  53.356  51.817  1.00 28.64           N  
ATOM   4125  CA  LEU A 561      -9.384  53.169  52.379  1.00 33.13           C  
ATOM   4126  C   LEU A 561      -9.388  52.151  53.499  1.00 34.49           C  
ATOM   4127  O   LEU A 561     -10.122  52.279  54.437  1.00 36.89           O  
ATOM   4128  CB  LEU A 561     -10.340  52.732  51.266  1.00 32.25           C  
ATOM   4129  CG  LEU A 561     -10.171  53.753  50.127  1.00 35.14           C  
ATOM   4130  CD1 LEU A 561     -10.421  53.182  48.744  1.00 38.72           C  
ATOM   4131  CD2 LEU A 561     -11.012  54.996  50.406  1.00 36.12           C  
ATOM   4132  N   GLU A 562      -8.568  51.125  53.389  1.00 34.31           N  
ATOM   4133  CA  GLU A 562      -8.555  50.093  54.396  1.00 33.10           C  
ATOM   4134  C   GLU A 562      -7.161  49.494  54.605  1.00 31.37           C  
ATOM   4135  O   GLU A 562      -6.351  49.450  53.691  1.00 27.40           O  
ATOM   4136  CB  GLU A 562      -9.541  49.003  53.975  1.00 36.77           C  
ATOM   4137  CG  GLU A 562     -10.996  49.415  54.199  1.00 42.49           C  
ATOM   4138  CD  GLU A 562     -11.912  48.212  54.396  1.00 44.36           C  
ATOM   4139  OE1 GLU A 562     -12.980  48.137  53.745  1.00 43.95           O  
ATOM   4140  OE2 GLU A 562     -11.550  47.326  55.199  1.00 44.47           O  
ATOM   4141  N   ALA A 563      -6.931  49.010  55.819  1.00 26.00           N  
ATOM   4142  CA  ALA A 563      -5.779  48.282  56.150  1.00 24.54           C  
ATOM   4143  C   ALA A 563      -6.215  46.912  56.653  1.00 28.60           C  
ATOM   4144  O   ALA A 563      -7.435  46.667  56.898  1.00 28.71           O  
ATOM   4145  CB  ALA A 563      -4.981  49.047  57.177  1.00 24.87           C  
ATOM   4146  N   GLY A 564      -5.273  45.977  56.714  1.00 25.92           N  
ATOM   4147  CA  GLY A 564      -5.645  44.613  57.136  1.00 24.14           C  
ATOM   4148  C   GLY A 564      -5.182  43.508  56.205  1.00 24.18           C  
ATOM   4149  O   GLY A 564      -4.513  43.737  55.177  1.00 23.78           O  
ATOM   4150  N   VAL A 565      -5.519  42.283  56.587  1.00 23.15           N  
ATOM   4151  CA  VAL A 565      -5.235  41.093  55.822  1.00 22.59           C  
ATOM   4152  C   VAL A 565      -6.552  40.753  55.195  1.00 23.67           C  
ATOM   4153  O   VAL A 565      -7.576  40.773  55.894  1.00 22.28           O  
ATOM   4154  CB  VAL A 565      -4.837  39.926  56.753  1.00 24.83           C  
ATOM   4155  CG1 VAL A 565      -4.496  38.673  55.981  1.00 28.14           C  
ATOM   4156  CG2 VAL A 565      -3.637  40.307  57.574  1.00 28.52           C  
ATOM   4157  N   PHE A 566      -6.518  40.424  53.901  1.00 24.49           N  
ATOM   4158  CA  PHE A 566      -7.663  39.961  53.133  1.00 22.97           C  
ATOM   4159  C   PHE A 566      -7.270  38.669  52.395  1.00 25.28           C  
ATOM   4160  O   PHE A 566      -6.213  38.590  51.777  1.00 23.69           O  
ATOM   4161  CB  PHE A 566      -8.064  41.062  52.179  1.00 23.08           C  
ATOM   4162  CG  PHE A 566      -8.532  42.291  52.887  1.00 23.18           C  
ATOM   4163  CD1 PHE A 566      -9.838  42.350  53.396  1.00 22.66           C  
ATOM   4164  CD2 PHE A 566      -7.653  43.308  53.198  1.00 20.91           C  
ATOM   4165  CE1 PHE A 566     -10.264  43.453  54.089  1.00 21.17           C  
ATOM   4166  CE2 PHE A 566      -8.075  44.413  53.891  1.00 22.76           C  
ATOM   4167  CZ  PHE A 566      -9.386  44.484  54.346  1.00 23.82           C  
ATOM   4168  N   ARG A 567      -8.094  37.639  52.498  1.00 24.77           N  
ATOM   4169  CA  ARG A 567      -7.742  36.329  51.974  1.00 26.93           C  
ATOM   4170  C   ARG A 567      -8.963  35.605  51.462  1.00 27.00           C  
ATOM   4171  O   ARG A 567     -10.005  35.750  52.047  1.00 25.27           O  
ATOM   4172  CB  ARG A 567      -7.096  35.504  53.072  1.00 27.73           C  
ATOM   4173  CG  ARG A 567      -5.623  35.277  52.856  1.00 31.31           C  
ATOM   4174  CD  ARG A 567      -4.926  34.746  54.071  1.00 31.74           C  
ATOM   4175  NE  ARG A 567      -5.514  33.498  54.514  1.00 34.81           N  
ATOM   4176  CZ  ARG A 567      -5.110  32.840  55.591  1.00 37.40           C  
ATOM   4177  NH1 ARG A 567      -4.110  33.326  56.336  1.00 38.28           N  
ATOM   4178  NH2 ARG A 567      -5.690  31.683  55.901  1.00 35.77           N  
ATOM   4179  N   SER A 568      -8.789  34.826  50.391  1.00 28.02           N  
ATOM   4180  CA  SER A 568      -9.878  34.209  49.663  1.00 30.39           C  
ATOM   4181  C   SER A 568     -10.561  33.115  50.465  1.00 33.97           C  
ATOM   4182  O   SER A 568     -11.647  32.661  50.111  1.00 34.81           O  
ATOM   4183  CB  SER A 568      -9.389  33.653  48.319  1.00 31.09           C  
ATOM   4184  OG  SER A 568      -8.498  32.577  48.439  1.00 32.26           O  
ATOM   4185  N   ASP A 569      -9.941  32.713  51.562  1.00 33.14           N  
ATOM   4186  CA  ASP A 569     -10.522  31.692  52.413  1.00 34.42           C  
ATOM   4187  C   ASP A 569     -10.938  32.262  53.768  1.00 34.19           C  
ATOM   4188  O   ASP A 569     -11.246  31.494  54.656  1.00 39.10           O  
ATOM   4189  CB  ASP A 569      -9.529  30.539  52.598  1.00 35.76           C  
ATOM   4190  CG  ASP A 569      -8.208  30.999  53.211  1.00 38.84           C  
ATOM   4191  OD1 ASP A 569      -7.744  32.157  52.980  1.00 38.42           O  
ATOM   4192  OD2 ASP A 569      -7.605  30.184  53.902  1.00 47.35           O  
ATOM   4193  N   LEU A 570     -10.959  33.592  53.928  1.00 35.41           N  
ATOM   4194  CA  LEU A 570     -11.501  34.224  55.143  1.00 34.97           C  
ATOM   4195  C   LEU A 570     -12.616  35.184  54.777  1.00 36.59           C  
ATOM   4196  O   LEU A 570     -12.510  35.951  53.837  1.00 36.01           O  
ATOM   4197  CB  LEU A 570     -10.432  34.952  55.966  1.00 33.91           C  
ATOM   4198  CG  LEU A 570      -9.189  34.088  56.316  1.00 35.67           C  
ATOM   4199  CD1 LEU A 570      -8.056  34.909  56.903  1.00 33.16           C  
ATOM   4200  CD2 LEU A 570      -9.540  32.930  57.253  1.00 35.92           C  
ATOM   4201  N   LYS A 571     -13.682  35.162  55.567  1.00 34.88           N  
ATOM   4202  CA  LYS A 571     -14.888  35.884  55.240  1.00 31.69           C  
ATOM   4203  C   LYS A 571     -14.795  37.289  55.680  1.00 28.71           C  
ATOM   4204  O   LYS A 571     -14.166  37.605  56.702  1.00 29.31           O  
ATOM   4205  CB  LYS A 571     -16.089  35.219  55.925  1.00 36.75           C  
ATOM   4206  CG  LYS A 571     -16.313  33.779  55.479  1.00 41.21           C  
ATOM   4207  CD  LYS A 571     -17.476  33.127  56.221  1.00 47.37           C  
ATOM   4208  CE  LYS A 571     -17.729  31.736  55.642  1.00 49.79           C  
ATOM   4209  NZ  LYS A 571     -19.080  31.217  55.995  1.00 53.94           N  
ATOM   4210  N   ASN A 572     -15.454  38.142  54.923  1.00 29.00           N  
ATOM   4211  CA  ASN A 572     -15.557  39.550  55.249  1.00 30.22           C  
ATOM   4212  C   ASN A 572     -17.010  39.948  55.259  1.00 31.76           C  
ATOM   4213  O   ASN A 572     -17.852  39.312  54.577  1.00 32.24           O  
ATOM   4214  CB  ASN A 572     -14.807  40.396  54.201  1.00 27.76           C  
ATOM   4215  CG  ASN A 572     -13.305  40.190  54.250  1.00 25.83           C  
ATOM   4216  OD1 ASN A 572     -12.700  39.549  53.358  1.00 27.41           O  
ATOM   4217  ND2 ASN A 572     -12.697  40.692  55.303  1.00 22.95           N  
ATOM   4218  N   GLU A 573     -17.291  40.985  56.040  1.00 33.28           N  
ATOM   4219  CA  GLU A 573     -18.607  41.587  56.097  1.00 38.35           C  
ATOM   4220  C   GLU A 573     -18.775  42.597  54.968  1.00 40.12           C  
ATOM   4221  O   GLU A 573     -17.956  43.526  54.825  1.00 38.46           O  
ATOM   4222  CB  GLU A 573     -18.823  42.314  57.439  1.00 43.88           C  
ATOM   4223  CG  GLU A 573     -19.029  41.372  58.630  1.00 53.97           C  
ATOM   4224  CD  GLU A 573     -19.383  42.074  59.940  1.00 64.04           C  
ATOM   4225  OE1 GLU A 573     -19.071  43.282  60.088  1.00 67.73           O  
ATOM   4226  OE2 GLU A 573     -19.966  41.405  60.833  1.00 67.55           O  
ATOM   4227  N   PHE A 574     -19.869  42.455  54.226  1.00 36.55           N  
ATOM   4228  CA  PHE A 574     -20.279  43.423  53.210  1.00 34.82           C  
ATOM   4229  C   PHE A 574     -21.631  44.027  53.507  1.00 34.55           C  
ATOM   4230  O   PHE A 574     -22.558  43.323  53.925  1.00 37.36           O  
ATOM   4231  CB  PHE A 574     -20.378  42.729  51.846  1.00 32.83           C  
ATOM   4232  CG  PHE A 574     -19.100  42.157  51.368  1.00 31.85           C  
ATOM   4233  CD1 PHE A 574     -18.730  40.876  51.713  1.00 30.89           C  
ATOM   4234  CD2 PHE A 574     -18.235  42.914  50.573  1.00 31.24           C  
ATOM   4235  CE1 PHE A 574     -17.521  40.347  51.296  1.00 29.06           C  
ATOM   4236  CE2 PHE A 574     -17.035  42.383  50.151  1.00 29.68           C  
ATOM   4237  CZ  PHE A 574     -16.679  41.095  50.500  1.00 29.93           C  
ATOM   4238  N   LYS A 575     -21.757  45.318  53.265  1.00 38.26           N  
ATOM   4239  CA  LYS A 575     -23.035  46.016  53.290  1.00 43.27           C  
ATOM   4240  C   LYS A 575     -23.391  46.597  51.927  1.00 41.92           C  
ATOM   4241  O   LYS A 575     -22.992  47.688  51.597  1.00 41.15           O  
ATOM   4242  CB  LYS A 575     -23.000  47.135  54.317  1.00 51.20           C  
ATOM   4243  CG  LYS A 575     -22.985  46.632  55.748  1.00 65.31           C  
ATOM   4244  CD  LYS A 575     -23.114  47.767  56.768  1.00 74.28           C  
ATOM   4245  CE  LYS A 575     -23.745  47.284  58.073  1.00 81.16           C  
ATOM   4246  NZ  LYS A 575     -24.170  48.420  58.945  1.00 81.57           N  
ATOM   4247  N   ILE A 576     -24.200  45.886  51.157  1.00 40.71           N  
ATOM   4248  CA  ILE A 576     -24.581  46.344  49.823  1.00 40.76           C  
ATOM   4249  C   ILE A 576     -25.704  47.372  49.859  1.00 42.95           C  
ATOM   4250  O   ILE A 576     -26.723  47.156  50.495  1.00 44.58           O  
ATOM   4251  CB  ILE A 576     -24.971  45.144  48.945  1.00 42.28           C  
ATOM   4252  CG1 ILE A 576     -23.747  44.250  48.777  1.00 43.56           C  
ATOM   4253  CG2 ILE A 576     -25.505  45.583  47.600  1.00 39.41           C  
ATOM   4254  CD1 ILE A 576     -24.080  42.797  48.837  1.00 43.02           C  
ATOM   4255  N   ASP A 577     -25.466  48.514  49.205  1.00 44.42           N  
ATOM   4256  CA  ASP A 577     -26.491  49.521  48.907  1.00 43.70           C  
ATOM   4257  C   ASP A 577     -27.480  48.986  47.843  1.00 42.98           C  
ATOM   4258  O   ASP A 577     -27.148  48.933  46.648  1.00 41.99           O  
ATOM   4259  CB  ASP A 577     -25.800  50.786  48.376  1.00 44.44           C  
ATOM   4260  CG  ASP A 577     -26.768  51.858  47.911  1.00 45.18           C  
ATOM   4261  OD1 ASP A 577     -27.991  51.612  47.767  1.00 44.52           O  
ATOM   4262  OD2 ASP A 577     -26.272  52.969  47.686  1.00 48.27           O  
ATOM   4263  N   PRO A 578     -28.705  48.608  48.257  1.00 42.08           N  
ATOM   4264  CA  PRO A 578     -29.642  48.046  47.272  1.00 38.56           C  
ATOM   4265  C   PRO A 578     -29.954  48.987  46.102  1.00 32.59           C  
ATOM   4266  O   PRO A 578     -30.267  48.514  45.041  1.00 27.80           O  
ATOM   4267  CB  PRO A 578     -30.934  47.765  48.098  1.00 40.35           C  
ATOM   4268  CG  PRO A 578     -30.521  47.875  49.516  1.00 42.05           C  
ATOM   4269  CD  PRO A 578     -29.370  48.860  49.546  1.00 45.02           C  
ATOM   4270  N   SER A 579     -29.872  50.306  46.287  1.00 34.37           N  
ATOM   4271  CA  SER A 579     -30.152  51.220  45.179  1.00 36.86           C  
ATOM   4272  C   SER A 579     -29.012  51.240  44.112  1.00 42.50           C  
ATOM   4273  O   SER A 579     -29.207  51.692  42.971  1.00 44.69           O  
ATOM   4274  CB  SER A 579     -30.506  52.610  45.706  1.00 37.64           C  
ATOM   4275  OG  SER A 579     -29.392  53.282  46.236  1.00 43.27           O  
ATOM   4276  N   ALA A 580     -27.845  50.704  44.484  1.00 40.91           N  
ATOM   4277  CA  ALA A 580     -26.782  50.452  43.538  1.00 38.75           C  
ATOM   4278  C   ALA A 580     -27.120  49.267  42.681  1.00 35.10           C  
ATOM   4279  O   ALA A 580     -26.895  49.277  41.459  1.00 29.39           O  
ATOM   4280  CB  ALA A 580     -25.477  50.195  44.279  1.00 40.10           C  
ATOM   4281  N   ILE A 581     -27.626  48.221  43.324  1.00 31.90           N  
ATOM   4282  CA  ILE A 581     -27.998  47.033  42.589  1.00 32.50           C  
ATOM   4283  C   ILE A 581     -29.101  47.329  41.581  1.00 32.04           C  
ATOM   4284  O   ILE A 581     -29.174  46.671  40.533  1.00 29.29           O  
ATOM   4285  CB  ILE A 581     -28.529  45.898  43.495  1.00 33.69           C  
ATOM   4286  CG1 ILE A 581     -27.483  45.434  44.518  1.00 31.78           C  
ATOM   4287  CG2 ILE A 581     -28.995  44.736  42.643  1.00 35.47           C  
ATOM   4288  CD1 ILE A 581     -26.165  44.945  43.933  1.00 31.46           C  
ATOM   4289  N   ASP A 582     -29.974  48.265  41.931  1.00 31.54           N  
ATOM   4290  CA  ASP A 582     -31.108  48.608  41.071  1.00 35.84           C  
ATOM   4291  C   ASP A 582     -30.606  49.317  39.797  1.00 31.26           C  
ATOM   4292  O   ASP A 582     -31.042  48.995  38.703  1.00 30.56           O  
ATOM   4293  CB  ASP A 582     -32.091  49.559  41.805  1.00 38.14           C  
ATOM   4294  CG  ASP A 582     -33.009  48.839  42.890  1.00 43.93           C  
ATOM   4295  OD1 ASP A 582     -33.335  47.638  42.728  1.00 42.98           O  
ATOM   4296  OD2 ASP A 582     -33.424  49.515  43.887  1.00 37.05           O  
ATOM   4297  N   GLU A 583     -29.692  50.278  39.966  1.00 31.51           N  
ATOM   4298  CA  GLU A 583     -28.990  50.935  38.825  1.00 31.70           C  
ATOM   4299  C   GLU A 583     -28.288  49.909  37.946  1.00 31.70           C  
ATOM   4300  O   GLU A 583     -28.443  49.918  36.722  1.00 34.60           O  
ATOM   4301  CB  GLU A 583     -27.988  51.953  39.335  1.00 34.03           C  
ATOM   4302  CG  GLU A 583     -28.590  53.166  40.036  1.00 34.83           C  
ATOM   4303  CD  GLU A 583     -27.530  53.984  40.795  1.00 40.49           C  
ATOM   4304  OE1 GLU A 583     -26.292  53.806  40.550  1.00 39.39           O  
ATOM   4305  OE2 GLU A 583     -27.905  54.805  41.660  1.00 38.10           O  
ATOM   4306  N   LEU A 584     -27.584  48.956  38.559  1.00 31.75           N  
ATOM   4307  CA  LEU A 584     -26.916  47.940  37.753  1.00 30.70           C  
ATOM   4308  C   LEU A 584     -27.896  47.162  36.917  1.00 32.84           C  
ATOM   4309  O   LEU A 584     -27.691  46.952  35.708  1.00 32.63           O  
ATOM   4310  CB  LEU A 584     -26.084  46.996  38.625  1.00 30.28           C  
ATOM   4311  CG  LEU A 584     -24.852  47.691  39.293  1.00 35.34           C  
ATOM   4312  CD1 LEU A 584     -24.031  46.687  40.059  1.00 34.91           C  
ATOM   4313  CD2 LEU A 584     -23.933  48.438  38.330  1.00 35.44           C  
ATOM   4314  N   LEU A 585     -28.965  46.716  37.568  1.00 33.07           N  
ATOM   4315  CA  LEU A 585     -30.053  46.002  36.889  1.00 33.36           C  
ATOM   4316  C   LEU A 585     -30.672  46.812  35.767  1.00 29.16           C  
ATOM   4317  O   LEU A 585     -30.964  46.324  34.721  1.00 30.24           O  
ATOM   4318  CB  LEU A 585     -31.142  45.690  37.914  1.00 37.40           C  
ATOM   4319  CG  LEU A 585     -30.852  44.444  38.766  1.00 38.09           C  
ATOM   4320  CD1 LEU A 585     -31.876  44.251  39.904  1.00 39.94           C  
ATOM   4321  CD2 LEU A 585     -30.785  43.230  37.851  1.00 36.68           C  
ATOM   4322  N   GLN A 586     -30.856  48.068  36.004  1.00 31.65           N  
ATOM   4323  CA  GLN A 586     -31.416  48.932  34.987  1.00 38.62           C  
ATOM   4324  C   GLN A 586     -30.453  49.022  33.769  1.00 41.32           C  
ATOM   4325  O   GLN A 586     -30.864  48.908  32.606  1.00 36.44           O  
ATOM   4326  CB  GLN A 586     -31.658  50.297  35.654  1.00 45.27           C  
ATOM   4327  CG  GLN A 586     -32.485  51.278  34.857  1.00 52.18           C  
ATOM   4328  CD  GLN A 586     -31.760  51.661  33.599  1.00 58.27           C  
ATOM   4329  OE1 GLN A 586     -30.568  51.964  33.632  1.00 60.91           O  
ATOM   4330  NE2 GLN A 586     -32.459  51.614  32.475  1.00 63.89           N  
ATOM   4331  N   GLU A 587     -29.157  49.194  34.045  1.00 38.17           N  
ATOM   4332  CA  GLU A 587     -28.158  49.386  32.984  1.00 33.52           C  
ATOM   4333  C   GLU A 587     -27.841  48.075  32.265  1.00 32.39           C  
ATOM   4334  O   GLU A 587     -27.297  48.067  31.127  1.00 27.80           O  
ATOM   4335  CB  GLU A 587     -26.867  49.966  33.605  1.00 37.64           C  
ATOM   4336  CG  GLU A 587     -27.047  51.350  34.217  1.00 38.09           C  
ATOM   4337  CD  GLU A 587     -25.916  51.789  35.158  1.00 40.20           C  
ATOM   4338  OE1 GLU A 587     -24.883  51.117  35.264  1.00 47.56           O  
ATOM   4339  OE2 GLU A 587     -26.059  52.830  35.814  1.00 45.93           O  
ATOM   4340  N   LEU A 588     -28.234  46.964  32.886  1.00 29.57           N  
ATOM   4341  CA  LEU A 588     -27.716  45.680  32.465  1.00 32.54           C  
ATOM   4342  C   LEU A 588     -27.858  45.373  30.990  1.00 35.78           C  
ATOM   4343  O   LEU A 588     -26.883  44.932  30.389  1.00 34.08           O  
ATOM   4344  CB  LEU A 588     -28.315  44.561  33.295  1.00 33.20           C  
ATOM   4345  CG  LEU A 588     -27.769  43.143  33.111  1.00 35.19           C  
ATOM   4346  CD1 LEU A 588     -26.308  43.002  33.534  1.00 35.87           C  
ATOM   4347  CD2 LEU A 588     -28.612  42.151  33.892  1.00 33.00           C  
ATOM   4348  N   PRO A 589     -29.068  45.560  30.404  1.00 37.87           N  
ATOM   4349  CA  PRO A 589     -29.198  45.281  28.956  1.00 36.98           C  
ATOM   4350  C   PRO A 589     -28.215  46.097  28.077  1.00 30.93           C  
ATOM   4351  O   PRO A 589     -27.569  45.541  27.225  1.00 31.15           O  
ATOM   4352  CB  PRO A 589     -30.675  45.680  28.624  1.00 39.24           C  
ATOM   4353  CG  PRO A 589     -31.372  45.910  29.936  1.00 39.47           C  
ATOM   4354  CD  PRO A 589     -30.287  46.191  30.967  1.00 39.95           C  
ATOM   4355  N   GLU A 590     -28.103  47.398  28.283  1.00 30.95           N  
ATOM   4356  CA  GLU A 590     -27.161  48.194  27.497  1.00 31.69           C  
ATOM   4357  C   GLU A 590     -25.671  47.865  27.849  1.00 31.84           C  
ATOM   4358  O   GLU A 590     -24.812  47.882  26.973  1.00 32.10           O  
ATOM   4359  CB  GLU A 590     -27.459  49.681  27.683  1.00 37.56           C  
ATOM   4360  CG  GLU A 590     -28.806  50.145  27.136  1.00 41.72           C  
ATOM   4361  CD  GLU A 590     -29.081  49.619  25.729  1.00 50.29           C  
ATOM   4362  OE1 GLU A 590     -28.216  49.798  24.824  1.00 51.12           O  
ATOM   4363  OE2 GLU A 590     -30.166  48.990  25.539  1.00 57.26           O  
ATOM   4364  N   ALA A 591     -25.388  47.503  29.110  1.00 30.89           N  
ATOM   4365  CA  ALA A 591     -24.038  47.116  29.532  1.00 26.93           C  
ATOM   4366  C   ALA A 591     -23.531  45.825  28.865  1.00 27.96           C  
ATOM   4367  O   ALA A 591     -22.382  45.771  28.418  1.00 28.68           O  
ATOM   4368  CB  ALA A 591     -23.952  47.062  31.054  1.00 26.22           C  
ATOM   4369  N   LEU A 592     -24.382  44.801  28.693  1.00 29.21           N  
ATOM   4370  CA  LEU A 592     -23.968  43.581  28.015  1.00 29.01           C  
ATOM   4371  C   LEU A 592     -23.845  43.772  26.515  1.00 30.44           C  
ATOM   4372  O   LEU A 592     -22.991  43.152  25.863  1.00 29.44           O  
ATOM   4373  CB  LEU A 592     -24.939  42.441  28.299  1.00 35.62           C  
ATOM   4374  CG  LEU A 592     -25.157  42.158  29.782  1.00 36.70           C  
ATOM   4375  CD1 LEU A 592     -26.349  41.275  29.965  1.00 40.11           C  
ATOM   4376  CD2 LEU A 592     -23.928  41.501  30.373  1.00 35.71           C  
ATOM   4377  N   LYS A 593     -24.683  44.635  25.966  1.00 29.33           N  
ATOM   4378  CA  LYS A 593     -24.631  44.945  24.565  1.00 33.55           C  
ATOM   4379  C   LYS A 593     -23.327  45.653  24.275  1.00 31.52           C  
ATOM   4380  O   LYS A 593     -22.690  45.396  23.258  1.00 30.83           O  
ATOM   4381  CB  LYS A 593     -25.829  45.831  24.222  1.00 42.59           C  
ATOM   4382  CG  LYS A 593     -25.920  46.422  22.816  1.00 47.70           C  
ATOM   4383  CD  LYS A 593     -27.262  47.148  22.726  1.00 52.79           C  
ATOM   4384  CE  LYS A 593     -27.236  48.333  21.784  1.00 57.89           C  
ATOM   4385  NZ  LYS A 593     -27.185  47.910  20.361  1.00 60.57           N  
ATOM   4386  N   PHE A 594     -22.951  46.563  25.174  1.00 31.81           N  
ATOM   4387  CA  PHE A 594     -21.671  47.320  25.072  1.00 30.41           C  
ATOM   4388  C   PHE A 594     -20.488  46.364  25.126  1.00 32.88           C  
ATOM   4389  O   PHE A 594     -19.602  46.450  24.287  1.00 31.67           O  
ATOM   4390  CB  PHE A 594     -21.611  48.326  26.185  1.00 31.66           C  
ATOM   4391  CG  PHE A 594     -20.268  49.006  26.385  1.00 33.65           C  
ATOM   4392  CD1 PHE A 594     -20.016  50.255  25.803  1.00 33.79           C  
ATOM   4393  CD2 PHE A 594     -19.331  48.480  27.253  1.00 31.14           C  
ATOM   4394  CE1 PHE A 594     -18.831  50.932  26.037  1.00 33.19           C  
ATOM   4395  CE2 PHE A 594     -18.133  49.141  27.477  1.00 34.72           C  
ATOM   4396  CZ  PHE A 594     -17.870  50.370  26.867  1.00 35.37           C  
ATOM   4397  N   SER A 595     -20.494  45.438  26.097  1.00 32.26           N  
ATOM   4398  CA  SER A 595     -19.496  44.355  26.122  1.00 33.29           C  
ATOM   4399  C   SER A 595     -19.306  43.599  24.799  1.00 33.88           C  
ATOM   4400  O   SER A 595     -18.161  43.309  24.396  1.00 32.74           O  
ATOM   4401  CB  SER A 595     -19.837  43.320  27.184  1.00 30.64           C  
ATOM   4402  OG  SER A 595     -18.836  42.342  27.159  1.00 32.89           O  
ATOM   4403  N   VAL A 596     -20.417  43.267  24.149  1.00 31.00           N  
ATOM   4404  CA  VAL A 596     -20.371  42.501  22.898  1.00 32.84           C  
ATOM   4405  C   VAL A 596     -19.881  43.342  21.762  1.00 30.88           C  
ATOM   4406  O   VAL A 596     -19.086  42.886  20.954  1.00 28.68           O  
ATOM   4407  CB  VAL A 596     -21.772  42.008  22.489  1.00 36.85           C  
ATOM   4408  CG1 VAL A 596     -21.820  41.529  21.028  1.00 37.84           C  
ATOM   4409  CG2 VAL A 596     -22.220  40.912  23.430  1.00 35.08           C  
ATOM   4410  N   GLU A 597     -20.392  44.566  21.696  1.00 33.58           N  
ATOM   4411  CA  GLU A 597     -20.238  45.376  20.507  1.00 35.87           C  
ATOM   4412  C   GLU A 597     -19.101  46.370  20.597  1.00 35.02           C  
ATOM   4413  O   GLU A 597     -18.501  46.674  19.580  1.00 32.69           O  
ATOM   4414  CB  GLU A 597     -21.534  46.134  20.206  1.00 40.33           C  
ATOM   4415  CG  GLU A 597     -22.693  45.183  19.972  1.00 47.34           C  
ATOM   4416  CD  GLU A 597     -23.914  45.843  19.360  1.00 54.19           C  
ATOM   4417  OE1 GLU A 597     -24.052  47.091  19.481  1.00 57.42           O  
ATOM   4418  OE2 GLU A 597     -24.740  45.083  18.789  1.00 56.50           O  
ATOM   4419  N   VAL A 598     -18.841  46.934  21.768  1.00 32.39           N  
ATOM   4420  CA  VAL A 598     -17.699  47.832  21.894  1.00 34.25           C  
ATOM   4421  C   VAL A 598     -16.476  47.137  22.465  1.00 35.28           C  
ATOM   4422  O   VAL A 598     -15.445  47.138  21.824  1.00 38.82           O  
ATOM   4423  CB  VAL A 598     -17.996  49.089  22.726  1.00 35.49           C  
ATOM   4424  CG1 VAL A 598     -16.745  49.968  22.782  1.00 33.79           C  
ATOM   4425  CG2 VAL A 598     -19.181  49.883  22.117  1.00 35.07           C  
ATOM   4426  N   GLU A 599     -16.581  46.486  23.623  1.00 36.93           N  
ATOM   4427  CA  GLU A 599     -15.410  45.739  24.170  1.00 34.86           C  
ATOM   4428  C   GLU A 599     -14.945  44.569  23.278  1.00 36.10           C  
ATOM   4429  O   GLU A 599     -13.740  44.353  23.155  1.00 36.27           O  
ATOM   4430  CB  GLU A 599     -15.648  45.251  25.605  1.00 33.50           C  
ATOM   4431  CG  GLU A 599     -15.606  46.368  26.645  1.00 36.64           C  
ATOM   4432  CD  GLU A 599     -16.089  45.998  28.053  1.00 39.86           C  
ATOM   4433  OE1 GLU A 599     -17.111  45.320  28.225  1.00 50.01           O  
ATOM   4434  OE2 GLU A 599     -15.464  46.437  29.035  1.00 43.48           O  
ATOM   4435  N   ASN A 600     -15.851  43.814  22.651  1.00 38.78           N  
ATOM   4436  CA  ASN A 600     -15.440  42.634  21.851  1.00 36.90           C  
ATOM   4437  C   ASN A 600     -15.533  42.850  20.316  1.00 41.05           C  
ATOM   4438  O   ASN A 600     -15.172  41.955  19.532  1.00 44.12           O  
ATOM   4439  CB  ASN A 600     -16.271  41.402  22.244  1.00 37.98           C  
ATOM   4440  CG  ASN A 600     -15.889  40.807  23.610  1.00 39.61           C  
ATOM   4441  OD1 ASN A 600     -14.869  40.138  23.750  1.00 36.39           O  
ATOM   4442  ND2 ASN A 600     -16.754  41.006  24.611  1.00 37.82           N  
ATOM   4443  N   LYS A 601     -16.022  44.012  19.890  1.00 47.72           N  
ATOM   4444  CA  LYS A 601     -16.213  44.334  18.451  1.00 54.49           C  
ATOM   4445  C   LYS A 601     -17.055  43.297  17.703  1.00 50.59           C  
ATOM   4446  O   LYS A 601     -16.680  42.856  16.628  1.00 44.07           O  
ATOM   4447  CB  LYS A 601     -14.875  44.503  17.704  1.00 58.46           C  
ATOM   4448  CG  LYS A 601     -13.861  45.420  18.370  1.00 69.69           C  
ATOM   4449  CD  LYS A 601     -12.651  44.634  18.889  1.00 80.70           C  
ATOM   4450  CE  LYS A 601     -12.295  44.969  20.337  1.00 86.29           C  
ATOM   4451  NZ  LYS A 601     -12.178  46.433  20.607  1.00 85.90           N  
ATOM   4452  N   SER A 602     -18.189  42.910  18.272  1.00 52.44           N  
ATOM   4453  CA  SER A 602     -19.075  41.939  17.627  1.00 52.24           C  
ATOM   4454  C   SER A 602     -20.489  42.472  17.530  1.00 46.94           C  
ATOM   4455  O   SER A 602     -20.692  43.677  17.577  1.00 52.46           O  
ATOM   4456  CB  SER A 602     -19.038  40.616  18.383  1.00 57.58           C  
ATOM   4457  OG  SER A 602     -17.711  40.152  18.437  1.00 69.58           O  
ATOM   4458  N   SER A 603     -21.461  41.581  17.365  1.00 49.98           N  
ATOM   4459  CA  SER A 603     -22.875  41.968  17.285  1.00 52.39           C  
ATOM   4460  C   SER A 603     -23.720  40.987  18.037  1.00 46.00           C  
ATOM   4461  O   SER A 603     -23.511  39.781  17.955  1.00 48.46           O  
ATOM   4462  CB  SER A 603     -23.350  42.050  15.833  1.00 56.25           C  
ATOM   4463  OG  SER A 603     -22.698  41.079  15.054  1.00 59.65           O  
ATOM   4464  N   VAL A 604     -24.638  41.515  18.805  1.00 47.84           N  
ATOM   4465  CA  VAL A 604     -25.462  40.693  19.622  1.00 51.50           C  
ATOM   4466  C   VAL A 604     -26.125  39.713  18.704  1.00 53.52           C  
ATOM   4467  O   VAL A 604     -26.224  38.557  19.011  1.00 56.98           O  
ATOM   4468  CB  VAL A 604     -26.490  41.516  20.359  1.00 52.18           C  
ATOM   4469  CG1 VAL A 604     -25.805  42.524  21.235  1.00 56.04           C  
ATOM   4470  CG2 VAL A 604     -27.375  42.206  19.379  1.00 56.95           C  
ATOM   4471  N   ASP A 605     -26.527  40.200  17.548  1.00 53.97           N  
ATOM   4472  CA  ASP A 605     -27.008  39.390  16.463  1.00 56.73           C  
ATOM   4473  C   ASP A 605     -26.392  38.023  16.369  1.00 53.34           C  
ATOM   4474  O   ASP A 605     -27.104  37.069  16.209  1.00 55.15           O  
ATOM   4475  CB  ASP A 605     -26.792  40.113  15.155  1.00 66.74           C  
ATOM   4476  CG  ASP A 605     -27.830  41.180  14.912  1.00 79.32           C  
ATOM   4477  OD1 ASP A 605     -28.911  41.067  15.490  1.00 75.04           O  
ATOM   4478  OD2 ASP A 605     -27.568  42.141  14.158  1.00 84.62           O  
ATOM   4479  N   LYS A 606     -25.086  37.912  16.477  1.00 45.56           N  
ATOM   4480  CA  LYS A 606     -24.441  36.623  16.311  1.00 48.84           C  
ATOM   4481  C   LYS A 606     -24.193  35.866  17.593  1.00 46.25           C  
ATOM   4482  O   LYS A 606     -23.460  34.904  17.601  1.00 40.69           O  
ATOM   4483  CB  LYS A 606     -23.133  36.777  15.566  1.00 53.24           C  
ATOM   4484  CG  LYS A 606     -23.106  37.921  14.576  1.00 60.35           C  
ATOM   4485  CD  LYS A 606     -21.701  38.203  14.099  1.00 64.75           C  
ATOM   4486  CE  LYS A 606     -20.967  39.200  14.992  1.00 69.24           C  
ATOM   4487  NZ  LYS A 606     -19.705  39.747  14.409  1.00 68.50           N  
ATOM   4488  N   VAL A 607     -24.797  36.326  18.673  1.00 47.63           N  
ATOM   4489  CA  VAL A 607     -24.611  35.735  19.982  1.00 47.27           C  
ATOM   4490  C   VAL A 607     -25.715  34.738  20.240  1.00 49.53           C  
ATOM   4491  O   VAL A 607     -26.870  35.057  20.098  1.00 48.83           O  
ATOM   4492  CB  VAL A 607     -24.658  36.790  21.101  1.00 46.22           C  
ATOM   4493  CG1 VAL A 607     -24.473  36.161  22.454  1.00 43.59           C  
ATOM   4494  CG2 VAL A 607     -23.619  37.847  20.898  1.00 48.40           C  
ATOM   4495  N   THR A 608     -25.329  33.541  20.643  1.00 53.68           N  
ATOM   4496  CA  THR A 608     -26.241  32.438  20.906  1.00 57.50           C  
ATOM   4497  C   THR A 608     -26.959  32.575  22.232  1.00 57.07           C  
ATOM   4498  O   THR A 608     -28.150  32.321  22.324  1.00 61.10           O  
ATOM   4499  CB  THR A 608     -25.429  31.145  20.908  1.00 57.95           C  
ATOM   4500  OG1 THR A 608     -25.020  30.886  19.569  1.00 71.44           O  
ATOM   4501  CG2 THR A 608     -26.202  29.965  21.445  1.00 65.20           C  
ATOM   4502  N   ASN A 609     -26.235  32.981  23.265  1.00 54.36           N  
ATOM   4503  CA  ASN A 609     -26.708  32.791  24.626  1.00 49.71           C  
ATOM   4504  C   ASN A 609     -26.840  34.087  25.351  1.00 46.20           C  
ATOM   4505  O   ASN A 609     -26.684  34.144  26.558  1.00 50.97           O  
ATOM   4506  CB  ASN A 609     -25.751  31.867  25.377  1.00 52.43           C  
ATOM   4507  CG  ASN A 609     -24.352  32.444  25.480  1.00 54.43           C  
ATOM   4508  OD1 ASN A 609     -24.010  33.415  24.782  1.00 54.82           O  
ATOM   4509  ND2 ASN A 609     -23.526  31.845  26.331  1.00 50.66           N  
ATOM   4510  N   PHE A 610     -27.169  35.137  24.622  1.00 44.21           N  
ATOM   4511  CA  PHE A 610     -27.244  36.447  25.218  1.00 43.56           C  
ATOM   4512  C   PHE A 610     -28.180  36.455  26.418  1.00 46.72           C  
ATOM   4513  O   PHE A 610     -27.833  36.982  27.485  1.00 44.49           O  
ATOM   4514  CB  PHE A 610     -27.694  37.499  24.187  1.00 42.63           C  
ATOM   4515  CG  PHE A 610     -27.557  38.916  24.667  1.00 40.31           C  
ATOM   4516  CD1 PHE A 610     -26.343  39.598  24.549  1.00 42.78           C  
ATOM   4517  CD2 PHE A 610     -28.619  39.566  25.254  1.00 40.76           C  
ATOM   4518  CE1 PHE A 610     -26.211  40.898  25.021  1.00 40.27           C  
ATOM   4519  CE2 PHE A 610     -28.487  40.858  25.724  1.00 39.82           C  
ATOM   4520  CZ  PHE A 610     -27.282  41.521  25.596  1.00 40.52           C  
ATOM   4521  N   GLU A 611     -29.383  35.908  26.248  1.00 50.05           N  
ATOM   4522  CA  GLU A 611     -30.411  36.006  27.305  1.00 44.93           C  
ATOM   4523  C   GLU A 611     -30.051  35.086  28.474  1.00 37.34           C  
ATOM   4524  O   GLU A 611     -30.308  35.394  29.611  1.00 34.48           O  
ATOM   4525  CB  GLU A 611     -31.803  35.689  26.765  1.00 53.03           C  
ATOM   4526  CG  GLU A 611     -32.307  36.688  25.710  1.00 58.11           C  
ATOM   4527  CD  GLU A 611     -32.813  38.013  26.298  1.00 61.48           C  
ATOM   4528  OE1 GLU A 611     -33.490  38.002  27.353  1.00 62.84           O  
ATOM   4529  OE2 GLU A 611     -32.542  39.084  25.695  1.00 63.75           O  
ATOM   4530  N   GLU A 612     -29.415  33.973  28.210  1.00 35.46           N  
ATOM   4531  CA  GLU A 612     -29.045  33.105  29.306  1.00 42.24           C  
ATOM   4532  C   GLU A 612     -28.123  33.863  30.292  1.00 42.69           C  
ATOM   4533  O   GLU A 612     -28.458  34.040  31.496  1.00 37.10           O  
ATOM   4534  CB  GLU A 612     -28.382  31.825  28.787  1.00 49.44           C  
ATOM   4535  CG  GLU A 612     -28.139  30.826  29.910  1.00 58.59           C  
ATOM   4536  CD  GLU A 612     -27.788  29.441  29.420  1.00 65.86           C  
ATOM   4537  OE1 GLU A 612     -28.660  28.549  29.523  1.00 69.87           O  
ATOM   4538  OE2 GLU A 612     -26.640  29.238  28.957  1.00 74.30           O  
ATOM   4539  N   ILE A 613     -26.981  34.324  29.753  1.00 46.58           N  
ATOM   4540  CA  ILE A 613     -26.002  35.130  30.510  1.00 41.06           C  
ATOM   4541  C   ILE A 613     -26.721  36.213  31.280  1.00 35.77           C  
ATOM   4542  O   ILE A 613     -26.483  36.408  32.454  1.00 38.11           O  
ATOM   4543  CB  ILE A 613     -24.975  35.793  29.568  1.00 42.81           C  
ATOM   4544  CG1 ILE A 613     -24.060  34.744  28.929  1.00 43.88           C  
ATOM   4545  CG2 ILE A 613     -24.169  36.873  30.286  1.00 39.93           C  
ATOM   4546  CD1 ILE A 613     -23.674  33.607  29.827  1.00 46.29           C  
ATOM   4547  N   LYS A 614     -27.651  36.884  30.629  1.00 34.94           N  
ATOM   4548  CA  LYS A 614     -28.305  38.008  31.257  1.00 35.58           C  
ATOM   4549  C   LYS A 614     -29.226  37.590  32.406  1.00 37.18           C  
ATOM   4550  O   LYS A 614     -29.391  38.363  33.367  1.00 35.28           O  
ATOM   4551  CB  LYS A 614     -29.053  38.826  30.212  1.00 37.80           C  
ATOM   4552  CG  LYS A 614     -29.906  39.938  30.792  1.00 39.55           C  
ATOM   4553  CD  LYS A 614     -30.344  40.923  29.728  1.00 44.33           C  
ATOM   4554  CE  LYS A 614     -31.832  40.849  29.445  1.00 51.34           C  
ATOM   4555  NZ  LYS A 614     -32.605  41.377  30.610  1.00 55.11           N  
ATOM   4556  N   ASN A 615     -29.835  36.399  32.324  1.00 37.23           N  
ATOM   4557  CA  ASN A 615     -30.621  35.895  33.469  1.00 40.74           C  
ATOM   4558  C   ASN A 615     -29.703  35.577  34.619  1.00 35.93           C  
ATOM   4559  O   ASN A 615     -30.017  35.840  35.758  1.00 33.47           O  
ATOM   4560  CB  ASN A 615     -31.392  34.596  33.171  1.00 51.53           C  
ATOM   4561  CG  ASN A 615     -32.401  34.733  32.052  1.00 59.76           C  
ATOM   4562  OD1 ASN A 615     -32.804  35.839  31.678  1.00 63.84           O  
ATOM   4563  ND2 ASN A 615     -32.822  33.580  31.503  1.00 63.03           N  
ATOM   4564  N   GLN A 616     -28.568  34.968  34.301  1.00 37.97           N  
ATOM   4565  CA  GLN A 616     -27.665  34.468  35.324  1.00 39.00           C  
ATOM   4566  C   GLN A 616     -27.173  35.598  36.178  1.00 37.95           C  
ATOM   4567  O   GLN A 616     -27.061  35.465  37.392  1.00 42.85           O  
ATOM   4568  CB  GLN A 616     -26.474  33.787  34.689  1.00 44.56           C  
ATOM   4569  CG  GLN A 616     -26.818  32.483  34.032  1.00 50.42           C  
ATOM   4570  CD  GLN A 616     -25.632  31.921  33.298  1.00 54.93           C  
ATOM   4571  OE1 GLN A 616     -25.375  32.276  32.156  1.00 65.29           O  
ATOM   4572  NE2 GLN A 616     -24.897  31.056  33.950  1.00 54.91           N  
ATOM   4573  N   ILE A 617     -26.921  36.736  35.544  1.00 35.96           N  
ATOM   4574  CA  ILE A 617     -26.425  37.912  36.256  1.00 32.89           C  
ATOM   4575  C   ILE A 617     -27.551  38.530  37.053  1.00 33.14           C  
ATOM   4576  O   ILE A 617     -27.390  38.946  38.238  1.00 30.09           O  
ATOM   4577  CB  ILE A 617     -25.774  38.951  35.259  1.00 33.11           C  
ATOM   4578  CG1 ILE A 617     -24.530  38.333  34.589  1.00 32.81           C  
ATOM   4579  CG2 ILE A 617     -25.418  40.263  35.947  1.00 28.74           C  
ATOM   4580  CD1 ILE A 617     -23.894  39.181  33.496  1.00 35.55           C  
ATOM   4581  N   THR A 618     -28.703  38.629  36.398  1.00 35.15           N  
ATOM   4582  CA  THR A 618     -29.858  39.251  37.026  1.00 35.68           C  
ATOM   4583  C   THR A 618     -30.148  38.553  38.374  1.00 34.20           C  
ATOM   4584  O   THR A 618     -30.364  39.215  39.407  1.00 29.78           O  
ATOM   4585  CB  THR A 618     -31.040  39.233  36.014  1.00 39.12           C  
ATOM   4586  OG1 THR A 618     -30.611  39.846  34.785  1.00 34.27           O  
ATOM   4587  CG2 THR A 618     -32.235  39.998  36.533  1.00 37.23           C  
ATOM   4588  N   GLN A 619     -30.077  37.221  38.378  1.00 39.18           N  
ATOM   4589  CA  GLN A 619     -30.355  36.431  39.615  1.00 41.75           C  
ATOM   4590  C   GLN A 619     -29.362  36.711  40.726  1.00 38.65           C  
ATOM   4591  O   GLN A 619     -29.739  36.786  41.894  1.00 34.39           O  
ATOM   4592  CB  GLN A 619     -30.297  34.929  39.382  1.00 44.20           C  
ATOM   4593  CG  GLN A 619     -31.279  34.365  38.377  1.00 53.74           C  
ATOM   4594  CD  GLN A 619     -30.866  32.951  37.954  1.00 63.64           C  
ATOM   4595  OE1 GLN A 619     -30.482  32.125  38.800  1.00 71.37           O  
ATOM   4596  NE2 GLN A 619     -30.929  32.668  36.648  1.00 68.07           N  
ATOM   4597  N   LYS A 620     -28.084  36.855  40.370  1.00 40.70           N  
ATOM   4598  CA  LYS A 620     -27.065  37.085  41.404  1.00 34.85           C  
ATOM   4599  C   LYS A 620     -27.271  38.433  41.972  1.00 33.30           C  
ATOM   4600  O   LYS A 620     -27.055  38.618  43.160  1.00 36.03           O  
ATOM   4601  CB  LYS A 620     -25.631  36.876  40.894  1.00 35.92           C  
ATOM   4602  CG  LYS A 620     -25.383  35.458  40.367  1.00 36.47           C  
ATOM   4603  CD  LYS A 620     -24.056  34.885  40.845  1.00 44.03           C  
ATOM   4604  CE  LYS A 620     -23.623  33.732  39.960  1.00 49.51           C  
ATOM   4605  NZ  LYS A 620     -22.592  32.866  40.595  1.00 54.39           N  
ATOM   4606  N   LEU A 621     -27.695  39.388  41.141  1.00 35.00           N  
ATOM   4607  CA  LEU A 621     -27.856  40.755  41.601  1.00 34.20           C  
ATOM   4608  C   LEU A 621     -29.090  40.858  42.466  1.00 35.70           C  
ATOM   4609  O   LEU A 621     -29.097  41.620  43.448  1.00 29.60           O  
ATOM   4610  CB  LEU A 621     -27.973  41.774  40.438  1.00 35.86           C  
ATOM   4611  CG  LEU A 621     -26.780  42.145  39.501  1.00 39.64           C  
ATOM   4612  CD1 LEU A 621     -27.255  43.048  38.362  1.00 38.77           C  
ATOM   4613  CD2 LEU A 621     -25.637  42.834  40.227  1.00 37.22           C  
ATOM   4614  N   LEU A 622     -30.161  40.177  42.036  1.00 38.30           N  
ATOM   4615  CA  LEU A 622     -31.410  40.137  42.825  1.00 38.42           C  
ATOM   4616  C   LEU A 622     -31.159  39.564  44.205  1.00 37.95           C  
ATOM   4617  O   LEU A 622     -31.624  40.115  45.195  1.00 33.53           O  
ATOM   4618  CB  LEU A 622     -32.479  39.321  42.101  1.00 39.49           C  
ATOM   4619  CG  LEU A 622     -33.128  40.151  41.001  1.00 41.39           C  
ATOM   4620  CD1 LEU A 622     -33.888  39.287  40.005  1.00 43.59           C  
ATOM   4621  CD2 LEU A 622     -34.022  41.208  41.620  1.00 42.92           C  
ATOM   4622  N   GLU A 623     -30.375  38.489  44.265  1.00 40.03           N  
ATOM   4623  CA  GLU A 623     -29.944  37.911  45.536  1.00 45.21           C  
ATOM   4624  C   GLU A 623     -29.192  38.949  46.441  1.00 46.97           C  
ATOM   4625  O   GLU A 623     -29.563  39.159  47.610  1.00 46.11           O  
ATOM   4626  CB  GLU A 623     -29.134  36.621  45.259  1.00 52.96           C  
ATOM   4627  CG  GLU A 623     -28.422  35.993  46.462  1.00 59.71           C  
ATOM   4628  CD  GLU A 623     -29.352  35.759  47.661  1.00 61.11           C  
ATOM   4629  OE1 GLU A 623     -28.948  36.008  48.829  1.00 55.04           O  
ATOM   4630  OE2 GLU A 623     -30.500  35.329  47.435  1.00 64.50           O  
ATOM   4631  N   LEU A 624     -28.187  39.636  45.893  1.00 40.97           N  
ATOM   4632  CA  LEU A 624     -27.508  40.688  46.641  1.00 37.82           C  
ATOM   4633  C   LEU A 624     -28.444  41.805  47.107  1.00 36.17           C  
ATOM   4634  O   LEU A 624     -28.252  42.430  48.187  1.00 33.49           O  
ATOM   4635  CB  LEU A 624     -26.425  41.310  45.775  1.00 35.90           C  
ATOM   4636  CG  LEU A 624     -25.278  40.384  45.376  1.00 40.20           C  
ATOM   4637  CD1 LEU A 624     -24.293  41.153  44.507  1.00 38.78           C  
ATOM   4638  CD2 LEU A 624     -24.555  39.790  46.578  1.00 40.90           C  
ATOM   4639  N   LYS A 625     -29.409  42.121  46.261  1.00 37.63           N  
ATOM   4640  CA  LYS A 625     -30.388  43.189  46.581  1.00 47.62           C  
ATOM   4641  C   LYS A 625     -31.289  42.820  47.783  1.00 48.53           C  
ATOM   4642  O   LYS A 625     -31.478  43.629  48.686  1.00 45.96           O  
ATOM   4643  CB  LYS A 625     -31.273  43.499  45.366  1.00 50.79           C  
ATOM   4644  CG  LYS A 625     -31.979  44.850  45.441  1.00 51.46           C  
ATOM   4645  CD  LYS A 625     -33.130  44.952  44.445  1.00 52.92           C  
ATOM   4646  CE  LYS A 625     -34.314  45.686  45.083  1.00 55.97           C  
ATOM   4647  NZ  LYS A 625     -35.215  46.294  44.078  1.00 55.58           N  
ATOM   4648  N   GLU A 626     -31.815  41.594  47.777  1.00 51.65           N  
ATOM   4649  CA  GLU A 626     -32.623  41.086  48.896  1.00 58.90           C  
ATOM   4650  C   GLU A 626     -31.765  40.996  50.132  1.00 50.03           C  
ATOM   4651  O   GLU A 626     -32.042  41.671  51.108  1.00 49.13           O  
ATOM   4652  CB  GLU A 626     -33.272  39.702  48.616  1.00 66.57           C  
ATOM   4653  CG  GLU A 626     -33.931  39.094  49.873  1.00 80.45           C  
ATOM   4654  CD  GLU A 626     -35.179  38.224  49.623  1.00 91.99           C  
ATOM   4655  OE1 GLU A 626     -35.048  37.033  49.216  1.00 88.38           O  
ATOM   4656  OE2 GLU A 626     -36.306  38.723  49.888  1.00 88.60           O  
ATOM   4657  N   ASN A 627     -30.732  40.159  50.051  1.00 45.54           N  
ATOM   4658  CA  ASN A 627     -29.854  39.839  51.174  1.00 47.65           C  
ATOM   4659  C   ASN A 627     -28.563  40.670  51.056  1.00 46.53           C  
ATOM   4660  O   ASN A 627     -27.533  40.210  50.563  1.00 44.26           O  
ATOM   4661  CB  ASN A 627     -29.571  38.338  51.178  1.00 45.93           C  
ATOM   4662  CG  ASN A 627     -30.849  37.504  51.283  1.00 51.48           C  
ATOM   4663  OD1 ASN A 627     -31.583  37.607  52.271  1.00 50.15           O  
ATOM   4664  ND2 ASN A 627     -31.127  36.687  50.262  1.00 48.57           N  
ATOM   4665  N   ASN A 628     -28.656  41.907  51.510  1.00 46.42           N  
ATOM   4666  CA  ASN A 628     -27.610  42.884  51.298  1.00 49.72           C  
ATOM   4667  C   ASN A 628     -26.656  43.047  52.471  1.00 47.93           C  
ATOM   4668  O   ASN A 628     -25.653  43.732  52.345  1.00 47.32           O  
ATOM   4669  CB  ASN A 628     -28.238  44.229  50.974  1.00 50.72           C  
ATOM   4670  CG  ASN A 628     -29.008  44.782  52.127  1.00 52.90           C  
ATOM   4671  OD1 ASN A 628     -29.375  44.045  53.028  1.00 59.72           O  
ATOM   4672  ND2 ASN A 628     -29.223  46.079  52.133  1.00 54.82           N  
ATOM   4673  N   ILE A 629     -26.986  42.480  53.626  1.00 48.14           N  
ATOM   4674  CA  ILE A 629     -26.031  42.397  54.721  1.00 44.45           C  
ATOM   4675  C   ILE A 629     -25.466  40.997  54.726  1.00 45.17           C  
ATOM   4676  O   ILE A 629     -26.158  40.060  55.094  1.00 43.95           O  
ATOM   4677  CB  ILE A 629     -26.674  42.684  56.082  1.00 47.61           C  
ATOM   4678  CG1 ILE A 629     -27.347  44.070  56.084  1.00 50.43           C  
ATOM   4679  CG2 ILE A 629     -25.649  42.500  57.195  1.00 46.09           C  
ATOM   4680  CD1 ILE A 629     -26.514  45.228  55.554  1.00 51.19           C  
ATOM   4681  N   ARG A 630     -24.236  40.847  54.253  1.00 41.77           N  
ATOM   4682  CA  ARG A 630     -23.682  39.519  54.037  1.00 40.88           C  
ATOM   4683  C   ARG A 630     -22.312  39.326  54.667  1.00 45.49           C  
ATOM   4684  O   ARG A 630     -21.552  40.275  54.854  1.00 47.11           O  
ATOM   4685  CB  ARG A 630     -23.613  39.209  52.539  1.00 45.70           C  
ATOM   4686  CG  ARG A 630     -24.967  39.170  51.850  1.00 44.37           C  
ATOM   4687  CD  ARG A 630     -24.818  39.015  50.346  1.00 43.05           C  
ATOM   4688  NE  ARG A 630     -25.834  38.129  49.785  1.00 45.68           N  
ATOM   4689  CZ  ARG A 630     -25.575  36.937  49.256  1.00 47.07           C  
ATOM   4690  NH1 ARG A 630     -24.330  36.483  49.215  1.00 45.24           N  
ATOM   4691  NH2 ARG A 630     -26.561  36.197  48.768  1.00 54.90           N  
ATOM   4692  N   ASN A 631     -22.013  38.073  54.985  1.00 41.40           N  
ATOM   4693  CA  ASN A 631     -20.749  37.701  55.522  1.00 39.48           C  
ATOM   4694  C   ASN A 631     -20.246  36.536  54.729  1.00 41.41           C  
ATOM   4695  O   ASN A 631     -20.742  35.415  54.871  1.00 39.75           O  
ATOM   4696  CB  ASN A 631     -20.878  37.331  56.972  1.00 43.94           C  
ATOM   4697  CG  ASN A 631     -19.571  37.453  57.686  1.00 51.12           C  
ATOM   4698  OD1 ASN A 631     -19.004  38.544  57.744  1.00 58.23           O  
ATOM   4699  ND2 ASN A 631     -19.059  36.352  58.206  1.00 50.81           N  
ATOM   4700  N   GLU A 632     -19.277  36.777  53.856  1.00 40.56           N  
ATOM   4701  CA  GLU A 632     -18.831  35.699  52.989  1.00 40.49           C  
ATOM   4702  C   GLU A 632     -17.402  35.905  52.503  1.00 35.06           C  
ATOM   4703  O   GLU A 632     -16.769  36.888  52.837  1.00 33.85           O  
ATOM   4704  CB  GLU A 632     -19.835  35.523  51.818  1.00 42.32           C  
ATOM   4705  CG  GLU A 632     -19.583  36.299  50.540  1.00 40.09           C  
ATOM   4706  CD  GLU A 632     -20.861  36.475  49.713  1.00 44.16           C  
ATOM   4707  OE1 GLU A 632     -21.749  37.196  50.186  1.00 38.40           O  
ATOM   4708  OE2 GLU A 632     -20.982  35.918  48.598  1.00 40.61           O  
ATOM   4709  N   LEU A 633     -16.934  34.966  51.704  1.00 30.67           N  
ATOM   4710  CA  LEU A 633     -15.582  34.968  51.216  1.00 31.71           C  
ATOM   4711  C   LEU A 633     -15.448  36.048  50.139  1.00 35.94           C  
ATOM   4712  O   LEU A 633     -16.371  36.279  49.371  1.00 32.37           O  
ATOM   4713  CB  LEU A 633     -15.268  33.593  50.645  1.00 30.89           C  
ATOM   4714  CG  LEU A 633     -15.229  32.481  51.706  1.00 30.11           C  
ATOM   4715  CD1 LEU A 633     -15.184  31.133  51.032  1.00 30.70           C  
ATOM   4716  CD2 LEU A 633     -13.998  32.641  52.602  1.00 32.36           C  
ATOM   4717  N   PRO A 634     -14.303  36.734  50.075  1.00 34.08           N  
ATOM   4718  CA  PRO A 634     -14.217  37.797  49.110  1.00 30.91           C  
ATOM   4719  C   PRO A 634     -13.631  37.301  47.803  1.00 30.99           C  
ATOM   4720  O   PRO A 634     -13.065  36.223  47.755  1.00 28.43           O  
ATOM   4721  CB  PRO A 634     -13.244  38.729  49.746  1.00 30.70           C  
ATOM   4722  CG  PRO A 634     -12.272  37.791  50.386  1.00 32.24           C  
ATOM   4723  CD  PRO A 634     -13.081  36.627  50.864  1.00 34.38           C  
ATOM   4724  N   LEU A 635     -13.760  38.128  46.762  1.00 30.20           N  
ATOM   4725  CA  LEU A 635     -12.946  38.031  45.550  1.00 28.71           C  
ATOM   4726  C   LEU A 635     -12.037  39.264  45.547  1.00 25.69           C  
ATOM   4727  O   LEU A 635     -12.513  40.377  45.559  1.00 28.39           O  
ATOM   4728  CB  LEU A 635     -13.803  37.993  44.300  1.00 30.91           C  
ATOM   4729  CG  LEU A 635     -14.992  37.046  44.264  1.00 34.90           C  
ATOM   4730  CD1 LEU A 635     -15.957  37.502  43.171  1.00 38.21           C  
ATOM   4731  CD2 LEU A 635     -14.509  35.641  43.983  1.00 38.49           C  
ATOM   4732  N   ILE A 636     -10.726  39.051  45.592  1.00 24.87           N  
ATOM   4733  CA  ILE A 636      -9.752  40.119  45.638  1.00 22.78           C  
ATOM   4734  C   ILE A 636      -9.409  40.496  44.168  1.00 24.54           C  
ATOM   4735  O   ILE A 636      -8.676  39.789  43.483  1.00 23.14           O  
ATOM   4736  CB  ILE A 636      -8.518  39.667  46.428  1.00 22.04           C  
ATOM   4737  CG1 ILE A 636      -8.931  39.269  47.831  1.00 21.40           C  
ATOM   4738  CG2 ILE A 636      -7.443  40.763  46.529  1.00 23.02           C  
ATOM   4739  CD1 ILE A 636      -7.829  38.694  48.671  1.00 20.15           C  
ATOM   4740  N   TYR A 637      -9.944  41.623  43.701  1.00 25.51           N  
ATOM   4741  CA  TYR A 637      -9.712  42.081  42.328  1.00 26.45           C  
ATOM   4742  C   TYR A 637      -8.903  43.376  42.234  1.00 24.12           C  
ATOM   4743  O   TYR A 637      -8.924  44.154  43.137  1.00 26.05           O  
ATOM   4744  CB  TYR A 637     -11.066  42.295  41.620  1.00 28.40           C  
ATOM   4745  CG  TYR A 637     -11.601  41.065  40.926  1.00 29.97           C  
ATOM   4746  CD1 TYR A 637     -10.848  40.428  39.982  1.00 31.54           C  
ATOM   4747  CD2 TYR A 637     -12.847  40.528  41.247  1.00 33.34           C  
ATOM   4748  CE1 TYR A 637     -11.301  39.313  39.335  1.00 36.30           C  
ATOM   4749  CE2 TYR A 637     -13.318  39.396  40.619  1.00 36.14           C  
ATOM   4750  CZ  TYR A 637     -12.537  38.801  39.645  1.00 38.53           C  
ATOM   4751  OH  TYR A 637     -12.937  37.700  38.958  1.00 38.68           O  
ATOM   4752  N   HIS A 638      -8.237  43.586  41.094  1.00 22.58           N  
ATOM   4753  CA  HIS A 638      -7.623  44.800  40.721  1.00 21.80           C  
ATOM   4754  C   HIS A 638      -8.252  45.250  39.403  1.00 22.21           C  
ATOM   4755  O   HIS A 638      -8.240  44.486  38.423  1.00 24.67           O  
ATOM   4756  CB  HIS A 638      -6.098  44.588  40.515  1.00 20.78           C  
ATOM   4757  CG  HIS A 638      -5.365  45.826  40.122  1.00 21.08           C  
ATOM   4758  ND1 HIS A 638      -4.568  45.908  38.994  1.00 22.02           N  
ATOM   4759  CD2 HIS A 638      -5.278  47.031  40.724  1.00 22.20           C  
ATOM   4760  CE1 HIS A 638      -4.023  47.106  38.928  1.00 20.50           C  
ATOM   4761  NE2 HIS A 638      -4.431  47.805  39.970  1.00 21.75           N  
ATOM   4762  N   VAL A 639      -8.750  46.487  39.339  1.00 19.93           N  
ATOM   4763  CA  VAL A 639      -9.130  47.030  38.053  1.00 21.23           C  
ATOM   4764  C   VAL A 639      -8.368  48.306  37.724  1.00 19.51           C  
ATOM   4765  O   VAL A 639      -8.258  49.169  38.586  1.00 17.48           O  
ATOM   4766  CB  VAL A 639     -10.652  47.338  37.939  1.00 21.47           C  
ATOM   4767  CG1 VAL A 639     -11.479  46.072  38.017  1.00 22.28           C  
ATOM   4768  CG2 VAL A 639     -11.080  48.326  38.992  1.00 21.59           C  
ATOM   4769  N   ASP A 640      -7.924  48.436  36.460  1.00 18.81           N  
ATOM   4770  CA  ASP A 640      -6.927  49.446  36.070  1.00 19.19           C  
ATOM   4771  C   ASP A 640      -7.155  49.846  34.635  1.00 17.61           C  
ATOM   4772  O   ASP A 640      -7.305  49.013  33.710  1.00 19.60           O  
ATOM   4773  CB  ASP A 640      -5.491  48.897  36.264  1.00 21.58           C  
ATOM   4774  CG  ASP A 640      -4.410  49.978  36.072  1.00 23.39           C  
ATOM   4775  OD1 ASP A 640      -4.316  50.559  34.937  1.00 23.31           O  
ATOM   4776  OD2 ASP A 640      -3.692  50.308  37.075  1.00 25.45           O  
ATOM   4777  N   VAL A 641      -7.239  51.110  34.384  1.00 16.57           N  
ATOM   4778  CA  VAL A 641      -7.337  51.557  33.034  1.00 16.83           C  
ATOM   4779  C   VAL A 641      -6.091  51.252  32.172  1.00 17.54           C  
ATOM   4780  O   VAL A 641      -5.000  51.578  32.535  1.00 17.63           O  
ATOM   4781  CB  VAL A 641      -7.674  53.036  32.999  1.00 16.26           C  
ATOM   4782  CG1 VAL A 641      -7.840  53.509  31.594  1.00 16.49           C  
ATOM   4783  CG2 VAL A 641      -8.907  53.302  33.805  1.00 16.05           C  
ATOM   4784  N   ALA A 642      -6.316  50.628  31.036  1.00 19.07           N  
ATOM   4785  CA  ALA A 642      -5.319  50.426  29.990  1.00 17.98           C  
ATOM   4786  C   ALA A 642      -4.763  51.763  29.498  1.00 18.97           C  
ATOM   4787  O   ALA A 642      -5.512  52.585  29.128  1.00 19.17           O  
ATOM   4788  CB  ALA A 642      -5.914  49.652  28.845  1.00 16.74           C  
ATOM   4789  N   SER A 643      -3.457  51.967  29.578  1.00 18.82           N  
ATOM   4790  CA  SER A 643      -2.792  53.202  29.169  1.00 19.01           C  
ATOM   4791  C   SER A 643      -3.566  54.514  29.440  1.00 19.28           C  
ATOM   4792  O   SER A 643      -3.933  55.206  28.533  1.00 21.04           O  
ATOM   4793  CB  SER A 643      -2.428  53.129  27.685  1.00 21.77           C  
ATOM   4794  OG  SER A 643      -1.315  52.362  27.472  1.00 23.41           O  
ATOM   4795  N   MET A 644      -3.818  54.827  30.689  1.00 17.38           N  
ATOM   4796  CA  MET A 644      -4.787  55.819  31.051  1.00 16.68           C  
ATOM   4797  C   MET A 644      -4.645  57.193  30.424  1.00 16.54           C  
ATOM   4798  O   MET A 644      -5.533  57.626  29.780  1.00 17.91           O  
ATOM   4799  CB  MET A 644      -4.956  55.940  32.568  1.00 17.95           C  
ATOM   4800  CG  MET A 644      -6.237  56.653  32.985  1.00 17.92           C  
ATOM   4801  SD  MET A 644      -6.200  57.666  34.452  1.00 23.52           S  
ATOM   4802  CE  MET A 644      -7.852  57.431  35.025  1.00 23.17           C  
ATOM   4803  N   TYR A 645      -3.539  57.858  30.649  1.00 14.90           N  
ATOM   4804  CA  TYR A 645      -3.393  59.208  30.179  1.00 14.76           C  
ATOM   4805  C   TYR A 645      -3.332  59.240  28.688  1.00 14.99           C  
ATOM   4806  O   TYR A 645      -3.972  60.101  28.070  1.00 16.23           O  
ATOM   4807  CB  TYR A 645      -2.205  59.951  30.809  1.00 14.09           C  
ATOM   4808  CG  TYR A 645      -2.355  60.296  32.254  1.00 14.68           C  
ATOM   4809  CD1 TYR A 645      -3.375  59.753  33.053  1.00 15.04           C  
ATOM   4810  CD2 TYR A 645      -1.436  61.124  32.887  1.00 13.60           C  
ATOM   4811  CE1 TYR A 645      -3.473  60.090  34.396  1.00 14.58           C  
ATOM   4812  CE2 TYR A 645      -1.552  61.409  34.218  1.00 13.94           C  
ATOM   4813  CZ  TYR A 645      -2.607  60.939  34.944  1.00 13.55           C  
ATOM   4814  OH  TYR A 645      -2.708  61.234  36.294  1.00 14.88           O  
ATOM   4815  N   PRO A 646      -2.607  58.311  28.062  1.00 16.66           N  
ATOM   4816  CA  PRO A 646      -2.659  58.425  26.579  1.00 16.90           C  
ATOM   4817  C   PRO A 646      -4.054  58.296  26.003  1.00 17.41           C  
ATOM   4818  O   PRO A 646      -4.428  58.983  25.082  1.00 16.68           O  
ATOM   4819  CB  PRO A 646      -1.785  57.294  26.102  1.00 17.83           C  
ATOM   4820  CG  PRO A 646      -0.830  57.027  27.256  1.00 17.05           C  
ATOM   4821  CD  PRO A 646      -1.508  57.460  28.529  1.00 15.93           C  
ATOM   4822  N   ASN A 647      -4.866  57.440  26.580  1.00 19.22           N  
ATOM   4823  CA  ASN A 647      -6.224  57.283  26.079  1.00 16.88           C  
ATOM   4824  C   ASN A 647      -7.140  58.468  26.402  1.00 17.44           C  
ATOM   4825  O   ASN A 647      -8.021  58.787  25.621  1.00 17.99           O  
ATOM   4826  CB  ASN A 647      -6.764  55.979  26.579  1.00 16.38           C  
ATOM   4827  CG  ASN A 647      -6.368  54.811  25.686  1.00 16.08           C  
ATOM   4828  OD1 ASN A 647      -6.614  54.850  24.508  1.00 15.84           O  
ATOM   4829  ND2 ASN A 647      -5.811  53.778  26.244  1.00 16.14           N  
ATOM   4830  N   ILE A 648      -6.907  59.142  27.529  1.00 17.04           N  
ATOM   4831  CA  ILE A 648      -7.653  60.346  27.847  1.00 17.66           C  
ATOM   4832  C   ILE A 648      -7.318  61.387  26.817  1.00 18.68           C  
ATOM   4833  O   ILE A 648      -8.217  62.143  26.380  1.00 18.20           O  
ATOM   4834  CB  ILE A 648      -7.339  60.879  29.268  1.00 16.99           C  
ATOM   4835  CG1 ILE A 648      -7.990  59.949  30.295  1.00 16.77           C  
ATOM   4836  CG2 ILE A 648      -7.755  62.328  29.457  1.00 17.36           C  
ATOM   4837  CD1 ILE A 648      -7.561  60.178  31.715  1.00 15.87           C  
ATOM   4838  N   MET A 649      -6.029  61.448  26.464  1.00 16.81           N  
ATOM   4839  CA  MET A 649      -5.541  62.386  25.478  1.00 16.53           C  
ATOM   4840  C   MET A 649      -6.137  62.121  24.109  1.00 16.24           C  
ATOM   4841  O   MET A 649      -6.582  63.050  23.419  1.00 15.20           O  
ATOM   4842  CB  MET A 649      -3.981  62.350  25.365  1.00 17.54           C  
ATOM   4843  CG  MET A 649      -3.264  62.988  26.531  1.00 18.66           C  
ATOM   4844  SD  MET A 649      -1.491  62.700  26.656  1.00 22.80           S  
ATOM   4845  CE  MET A 649      -0.947  63.426  25.125  1.00 22.92           C  
ATOM   4846  N   THR A 650      -6.067  60.892  23.646  1.00 15.88           N  
ATOM   4847  CA  THR A 650      -6.639  60.608  22.300  1.00 17.36           C  
ATOM   4848  C   THR A 650      -8.193  60.729  22.313  1.00 17.94           C  
ATOM   4849  O   THR A 650      -8.802  61.149  21.351  1.00 19.28           O  
ATOM   4850  CB  THR A 650      -6.224  59.203  21.802  1.00 18.01           C  
ATOM   4851  OG1 THR A 650      -6.539  58.229  22.776  1.00 18.18           O  
ATOM   4852  CG2 THR A 650      -4.762  59.098  21.611  1.00 18.49           C  
ATOM   4853  N   THR A 651      -8.851  60.357  23.394  1.00 17.55           N  
ATOM   4854  CA  THR A 651     -10.327  60.525  23.487  1.00 16.78           C  
ATOM   4855  C   THR A 651     -10.728  61.958  23.387  1.00 17.63           C  
ATOM   4856  O   THR A 651     -11.604  62.284  22.598  1.00 18.73           O  
ATOM   4857  CB  THR A 651     -10.828  59.955  24.797  1.00 16.52           C  
ATOM   4858  OG1 THR A 651     -10.667  58.513  24.774  1.00 16.45           O  
ATOM   4859  CG2 THR A 651     -12.244  60.379  25.148  1.00 16.73           C  
ATOM   4860  N   ASN A 652     -10.068  62.835  24.137  1.00 19.22           N  
ATOM   4861  CA  ASN A 652     -10.341  64.287  24.121  1.00 17.62           C  
ATOM   4862  C   ASN A 652      -9.604  65.147  23.116  1.00 17.78           C  
ATOM   4863  O   ASN A 652      -9.789  66.386  23.071  1.00 15.54           O  
ATOM   4864  CB  ASN A 652     -10.127  64.851  25.506  1.00 17.65           C  
ATOM   4865  CG  ASN A 652     -11.168  64.348  26.468  1.00 18.00           C  
ATOM   4866  OD1 ASN A 652     -12.318  64.814  26.492  1.00 16.23           O  
ATOM   4867  ND2 ASN A 652     -10.818  63.327  27.179  1.00 19.01           N  
ATOM   4868  N   ARG A 653      -8.819  64.497  22.281  1.00 17.01           N  
ATOM   4869  CA  ARG A 653      -8.043  65.138  21.219  1.00 15.70           C  
ATOM   4870  C   ARG A 653      -7.141  66.178  21.761  1.00 15.36           C  
ATOM   4871  O   ARG A 653      -6.946  67.289  21.182  1.00 15.16           O  
ATOM   4872  CB  ARG A 653      -8.960  65.720  20.214  1.00 16.02           C  
ATOM   4873  CG  ARG A 653      -8.544  65.507  18.795  1.00 15.76           C  
ATOM   4874  CD  ARG A 653      -9.619  66.127  17.945  1.00 16.01           C  
ATOM   4875  NE  ARG A 653      -9.399  66.077  16.533  1.00 16.50           N  
ATOM   4876  CZ  ARG A 653      -8.655  66.928  15.836  1.00 17.29           C  
ATOM   4877  NH1 ARG A 653      -8.648  66.820  14.520  1.00 18.13           N  
ATOM   4878  NH2 ARG A 653      -7.957  67.902  16.425  1.00 16.57           N  
ATOM   4879  N   LEU A 654      -6.606  65.856  22.916  1.00 16.45           N  
ATOM   4880  CA  LEU A 654      -5.690  66.760  23.601  1.00 17.56           C  
ATOM   4881  C   LEU A 654      -4.282  66.737  23.041  1.00 17.84           C  
ATOM   4882  O   LEU A 654      -3.685  65.689  22.930  1.00 20.21           O  
ATOM   4883  CB  LEU A 654      -5.630  66.405  25.053  1.00 18.46           C  
ATOM   4884  CG  LEU A 654      -6.901  66.358  25.872  1.00 18.40           C  
ATOM   4885  CD1 LEU A 654      -6.570  65.945  27.292  1.00 18.44           C  
ATOM   4886  CD2 LEU A 654      -7.482  67.751  25.856  1.00 20.43           C  
ATOM   4887  N   GLN A 655      -3.747  67.918  22.714  1.00 20.07           N  
ATOM   4888  CA  GLN A 655      -2.340  68.153  22.347  1.00 19.90           C  
ATOM   4889  C   GLN A 655      -2.069  69.595  22.562  1.00 18.76           C  
ATOM   4890  O   GLN A 655      -2.975  70.368  22.547  1.00 18.34           O  
ATOM   4891  CB  GLN A 655      -2.061  67.831  20.856  1.00 22.97           C  
ATOM   4892  CG  GLN A 655      -3.267  67.983  19.962  1.00 22.78           C  
ATOM   4893  CD  GLN A 655      -2.922  67.874  18.504  1.00 24.25           C  
ATOM   4894  OE1 GLN A 655      -2.428  66.837  18.036  1.00 24.27           O  
ATOM   4895  NE2 GLN A 655      -3.204  68.933  17.761  1.00 23.76           N  
ATOM   4896  N   PRO A 656      -0.805  70.002  22.709  1.00 20.04           N  
ATOM   4897  CA  PRO A 656      -0.551  71.420  23.037  1.00 19.92           C  
ATOM   4898  C   PRO A 656      -1.067  72.449  22.059  1.00 22.09           C  
ATOM   4899  O   PRO A 656      -1.557  73.519  22.487  1.00 22.92           O  
ATOM   4900  CB  PRO A 656       0.940  71.484  23.076  1.00 19.62           C  
ATOM   4901  CG  PRO A 656       1.268  70.133  23.639  1.00 20.66           C  
ATOM   4902  CD  PRO A 656       0.409  69.195  22.863  1.00 19.87           C  
ATOM   4903  N   ASP A 657      -1.010  72.131  20.772  1.00 21.63           N  
ATOM   4904  CA  ASP A 657      -1.420  73.091  19.777  1.00 23.54           C  
ATOM   4905  C   ASP A 657      -2.907  73.238  19.705  1.00 21.85           C  
ATOM   4906  O   ASP A 657      -3.359  74.122  19.046  1.00 20.32           O  
ATOM   4907  CB  ASP A 657      -0.929  72.738  18.394  1.00 26.07           C  
ATOM   4908  CG  ASP A 657       0.502  73.137  18.174  1.00 30.09           C  
ATOM   4909  OD1 ASP A 657       0.851  74.336  18.333  1.00 37.52           O  
ATOM   4910  OD2 ASP A 657       1.287  72.236  17.813  1.00 34.01           O  
ATOM   4911  N   SER A 658      -3.669  72.346  20.318  1.00 20.30           N  
ATOM   4912  CA  SER A 658      -5.100  72.464  20.311  1.00 18.69           C  
ATOM   4913  C   SER A 658      -5.627  73.364  21.424  1.00 20.44           C  
ATOM   4914  O   SER A 658      -6.855  73.686  21.430  1.00 20.22           O  
ATOM   4915  CB  SER A 658      -5.714  71.108  20.460  1.00 19.36           C  
ATOM   4916  OG  SER A 658      -5.617  70.350  19.260  1.00 19.60           O  
ATOM   4917  N   ILE A 659      -4.755  73.754  22.380  1.00 22.77           N  
ATOM   4918  CA  ILE A 659      -5.182  74.579  23.522  1.00 23.59           C  
ATOM   4919  C   ILE A 659      -5.255  76.005  23.004  1.00 29.68           C  
ATOM   4920  O   ILE A 659      -4.243  76.616  22.679  1.00 25.81           O  
ATOM   4921  CB  ILE A 659      -4.272  74.507  24.763  1.00 24.00           C  
ATOM   4922  CG1 ILE A 659      -4.096  73.076  25.238  1.00 24.47           C  
ATOM   4923  CG2 ILE A 659      -4.850  75.284  25.958  1.00 23.48           C  
ATOM   4924  CD1 ILE A 659      -5.309  72.336  25.728  1.00 22.91           C  
ATOM   4925  N   LYS A 660      -6.472  76.534  22.928  1.00 34.78           N  
ATOM   4926  CA  LYS A 660      -6.687  77.894  22.447  1.00 43.73           C  
ATOM   4927  C   LYS A 660      -7.110  78.821  23.581  1.00 51.61           C  
ATOM   4928  O   LYS A 660      -7.980  78.481  24.382  1.00 51.93           O  
ATOM   4929  CB  LYS A 660      -7.739  77.908  21.336  1.00 42.01           C  
ATOM   4930  CG  LYS A 660      -7.478  76.908  20.221  1.00 39.41           C  
ATOM   4931  CD  LYS A 660      -6.183  77.220  19.490  1.00 39.07           C  
ATOM   4932  CE  LYS A 660      -5.967  76.275  18.320  1.00 40.99           C  
ATOM   4933  NZ  LYS A 660      -4.607  76.420  17.732  1.00 41.34           N  
ATOM   4934  N   ALA A 661      -6.490  79.995  23.640  1.00 69.35           N  
ATOM   4935  CA  ALA A 661      -6.808  80.980  24.667  1.00 88.62           C  
ATOM   4936  C   ALA A 661      -7.586  82.152  24.080  1.00 93.64           C  
ATOM   4937  O   ALA A 661      -7.144  83.299  24.146  1.00 95.51           O  
ATOM   4938  CB  ALA A 661      -5.537  81.469  25.344  1.00 88.20           C  
ATOM   4939  N   GLU A 662      -8.747  81.856  23.504  1.00100.99           N  
ATOM   4940  CA  GLU A 662      -9.591  82.882  22.903  1.00109.39           C  
ATOM   4941  C   GLU A 662      -9.054  83.316  21.543  1.00116.93           C  
ATOM   4942  O   GLU A 662      -9.500  84.315  20.979  1.00109.77           O  
ATOM   4943  CB  GLU A 662      -9.710  84.092  23.832  1.00112.73           C  
ATOM   4944  CG  GLU A 662     -11.071  84.233  24.496  1.00113.47           C  
ATOM   4945  CD  GLU A 662     -11.857  85.417  23.967  1.00112.40           C  
ATOM   4946  OE1 GLU A 662     -13.104  85.345  23.952  1.00100.20           O  
ATOM   4947  OE2 GLU A 662     -11.228  86.419  23.566  1.00105.25           O  
ATOM   4948  N   ARG A 663      -8.095  82.558  21.022  1.00132.40           N  
ATOM   4949  CA  ARG A 663      -7.496  82.862  19.727  1.00137.85           C  
ATOM   4950  C   ARG A 663      -6.767  81.644  19.155  1.00134.88           C  
ATOM   4951  O   ARG A 663      -6.008  80.988  19.869  1.00127.25           O  
ATOM   4952  CB  ARG A 663      -6.532  84.044  19.846  1.00135.29           C  
ATOM   4953  CG  ARG A 663      -7.217  85.391  20.007  1.00134.21           C  
ATOM   4954  CD  ARG A 663      -7.738  85.908  18.675  1.00130.83           C  
ATOM   4955  NE  ARG A 663      -9.077  86.477  18.796  1.00129.23           N  
ATOM   4956  CZ  ARG A 663      -9.389  87.728  18.472  1.00126.85           C  
ATOM   4957  NH1 ARG A 663      -8.456  88.546  18.005  1.00124.11           N  
ATOM   4958  NH2 ARG A 663     -10.634  88.161  18.615  1.00119.91           N  
ATOM   4959  N   ASP A 664      -6.999  81.356  17.879  1.00131.36           N  
ATOM   4960  CA  ASP A 664      -7.901  82.161  17.064  1.00131.84           C  
ATOM   4961  C   ASP A 664      -8.590  81.312  16.002  1.00126.79           C  
ATOM   4962  O   ASP A 664      -8.649  81.690  14.832  1.00133.08           O  
ATOM   4963  CB  ASP A 664      -7.141  83.314  16.403  1.00127.88           C  
ATOM   4964  CG  ASP A 664      -7.966  84.583  16.319  1.00121.81           C  
ATOM   4965  OD1 ASP A 664      -9.107  84.587  16.827  1.00117.16           O  
ATOM   4966  OD2 ASP A 664      -7.474  85.576  15.744  1.00114.31           O  
ATOM   4967  N   CYS A 665      -9.111  80.162  16.419  1.00119.35           N  
ATOM   4968  CA  CYS A 665      -9.797  79.256  15.506  1.00114.30           C  
ATOM   4969  C   CYS A 665     -10.758  80.013  14.595  1.00121.98           C  
ATOM   4970  O   CYS A 665     -11.062  79.565  13.489  1.00116.70           O  
ATOM   4971  CB  CYS A 665     -10.552  78.179  16.287  1.00 97.89           C  
ATOM   4972  SG  CYS A 665     -11.305  76.900  15.256  1.00 88.62           S  
ATOM   4973  N   ALA A 666     -11.232  81.161  15.066  1.00116.38           N  
ATOM   4974  CA  ALA A 666     -12.159  81.981  14.296  1.00104.32           C  
ATOM   4975  C   ALA A 666     -13.483  81.412  13.781  1.00103.41           C  
ATOM   4976  O   ALA A 666     -13.692  81.331  12.571  1.00105.67           O  
ATOM   4977  CB  ALA A 666     -11.442  82.634  13.124  1.00101.35           C  
ATOM   4978  N   SER A 667     -14.348  81.000  14.704  1.00 98.36           N  
ATOM   4979  CA  SER A 667     -14.065  81.138  16.130  1.00 92.09           C  
ATOM   4980  C   SER A 667     -14.188  79.827  16.910  1.00 86.99           C  
ATOM   4981  O   SER A 667     -14.932  78.924  16.526  1.00 79.64           O  
ATOM   4982  CB  SER A 667     -14.973  82.202  16.753  1.00 89.58           C  
ATOM   4983  OG  SER A 667     -16.231  82.243  16.101  1.00 78.83           O  
ATOM   4984  N   CYS A 668     -13.448  79.744  18.012  1.00 79.22           N  
ATOM   4985  CA  CYS A 668     -13.478  78.599  18.915  1.00 68.58           C  
ATOM   4986  C   CYS A 668     -14.140  78.960  20.240  1.00 65.35           C  
ATOM   4987  O   CYS A 668     -14.005  80.083  20.727  1.00 50.25           O  
ATOM   4988  CB  CYS A 668     -12.062  78.073  19.160  1.00 64.71           C  
ATOM   4989  SG  CYS A 668     -11.892  76.281  18.995  1.00 44.55           S  
ATOM   4990  N   THR A 676     -19.584  74.556  15.904  1.00 57.44           N  
ATOM   4991  CA  THR A 676     -19.510  74.495  17.364  1.00 59.53           C  
ATOM   4992  C   THR A 676     -18.051  74.529  17.920  1.00 56.55           C  
ATOM   4993  O   THR A 676     -17.707  75.462  18.680  1.00 52.84           O  
ATOM   4994  CB  THR A 676     -20.234  73.235  17.883  1.00 62.47           C  
ATOM   4995  OG1 THR A 676     -19.291  72.158  17.997  1.00 67.89           O  
ATOM   4996  CG2 THR A 676     -21.417  72.829  16.952  1.00 62.11           C  
ATOM   4997  N   CYS A 677     -17.279  73.463  17.613  1.00 45.06           N  
ATOM   4998  CA  CYS A 677     -15.773  73.367  17.681  1.00 46.83           C  
ATOM   4999  C   CYS A 677     -14.988  73.292  19.049  1.00 40.42           C  
ATOM   5000  O   CYS A 677     -14.047  72.486  19.235  1.00 36.54           O  
ATOM   5001  CB  CYS A 677     -15.160  74.483  16.836  1.00 54.18           C  
ATOM   5002  SG  CYS A 677     -13.415  74.239  16.396  1.00 57.43           S  
ATOM   5003  N   ALA A 678     -15.313  74.172  19.972  1.00 34.09           N  
ATOM   5004  CA  ALA A 678     -14.535  74.287  21.208  1.00 29.51           C  
ATOM   5005  C   ALA A 678     -14.990  73.208  22.239  1.00 28.42           C  
ATOM   5006  O   ALA A 678     -16.164  73.013  22.477  1.00 24.81           O  
ATOM   5007  CB  ALA A 678     -14.670  75.702  21.755  1.00 30.37           C  
ATOM   5008  N   ARG A 679     -14.057  72.455  22.791  1.00 25.24           N  
ATOM   5009  CA  ARG A 679     -14.379  71.558  23.887  1.00 24.71           C  
ATOM   5010  C   ARG A 679     -13.730  72.096  25.094  1.00 25.96           C  
ATOM   5011  O   ARG A 679     -12.476  72.139  25.120  1.00 23.51           O  
ATOM   5012  CB  ARG A 679     -13.828  70.192  23.542  1.00 24.75           C  
ATOM   5013  CG  ARG A 679     -13.964  69.164  24.614  1.00 23.88           C  
ATOM   5014  CD  ARG A 679     -13.883  67.805  23.986  1.00 22.95           C  
ATOM   5015  NE  ARG A 679     -13.973  66.746  24.955  1.00 23.18           N  
ATOM   5016  CZ  ARG A 679     -15.103  66.200  25.412  1.00 26.97           C  
ATOM   5017  NH1 ARG A 679     -16.306  66.622  25.008  1.00 26.53           N  
ATOM   5018  NH2 ARG A 679     -15.023  65.232  26.316  1.00 26.25           N  
ATOM   5019  N   LYS A 680     -14.527  72.520  26.081  1.00 24.32           N  
ATOM   5020  CA  LYS A 680     -13.986  73.140  27.311  1.00 28.22           C  
ATOM   5021  C   LYS A 680     -13.751  72.092  28.335  1.00 26.33           C  
ATOM   5022  O   LYS A 680     -14.578  71.253  28.531  1.00 23.93           O  
ATOM   5023  CB  LYS A 680     -14.930  74.120  27.998  1.00 33.83           C  
ATOM   5024  CG  LYS A 680     -15.301  75.334  27.177  1.00 45.59           C  
ATOM   5025  CD  LYS A 680     -16.121  76.332  28.021  1.00 54.03           C  
ATOM   5026  CE  LYS A 680     -16.985  77.242  27.160  1.00 57.90           C  
ATOM   5027  NZ  LYS A 680     -16.225  78.314  26.459  1.00 62.29           N  
ATOM   5028  N   LEU A 681     -12.606  72.160  29.007  1.00 25.08           N  
ATOM   5029  CA  LEU A 681     -12.251  71.119  29.951  1.00 22.97           C  
ATOM   5030  C   LEU A 681     -11.587  71.748  31.154  1.00 20.95           C  
ATOM   5031  O   LEU A 681     -10.969  72.791  31.073  1.00 22.49           O  
ATOM   5032  CB  LEU A 681     -11.379  70.061  29.280  1.00 21.66           C  
ATOM   5033  CG  LEU A 681     -12.130  69.157  28.256  1.00 21.04           C  
ATOM   5034  CD1 LEU A 681     -11.138  68.237  27.578  1.00 19.78           C  
ATOM   5035  CD2 LEU A 681     -13.314  68.335  28.814  1.00 18.57           C  
ATOM   5036  N   LYS A 682     -11.740  71.099  32.278  1.00 21.89           N  
ATOM   5037  CA  LYS A 682     -11.257  71.638  33.530  1.00 24.56           C  
ATOM   5038  C   LYS A 682      -9.878  71.107  33.873  1.00 23.94           C  
ATOM   5039  O   LYS A 682      -9.589  69.957  33.576  1.00 22.31           O  
ATOM   5040  CB  LYS A 682     -12.211  71.248  34.626  1.00 27.43           C  
ATOM   5041  CG  LYS A 682     -13.622  71.804  34.402  1.00 34.00           C  
ATOM   5042  CD  LYS A 682     -13.702  73.275  34.757  1.00 43.45           C  
ATOM   5043  CE  LYS A 682     -15.120  73.841  34.520  1.00 50.00           C  
ATOM   5044  NZ  LYS A 682     -16.184  72.914  35.002  1.00 51.72           N  
ATOM   5045  N   TRP A 683      -9.070  71.956  34.498  1.00 22.81           N  
ATOM   5046  CA  TRP A 683      -7.872  71.556  35.240  1.00 22.11           C  
ATOM   5047  C   TRP A 683      -7.767  72.313  36.572  1.00 21.65           C  
ATOM   5048  O   TRP A 683      -8.471  73.302  36.770  1.00 23.22           O  
ATOM   5049  CB  TRP A 683      -6.586  71.707  34.384  1.00 20.55           C  
ATOM   5050  CG  TRP A 683      -6.180  73.081  33.935  1.00 20.16           C  
ATOM   5051  CD1 TRP A 683      -6.847  73.876  33.059  1.00 20.24           C  
ATOM   5052  CD2 TRP A 683      -5.025  73.833  34.358  1.00 19.08           C  
ATOM   5053  NE1 TRP A 683      -6.158  75.052  32.887  1.00 19.66           N  
ATOM   5054  CE2 TRP A 683      -5.053  75.050  33.685  1.00 18.11           C  
ATOM   5055  CE3 TRP A 683      -3.948  73.567  35.223  1.00 19.62           C  
ATOM   5056  CZ2 TRP A 683      -4.060  76.034  33.846  1.00 19.91           C  
ATOM   5057  CZ3 TRP A 683      -2.929  74.524  35.355  1.00 21.31           C  
ATOM   5058  CH2 TRP A 683      -2.997  75.756  34.655  1.00 21.23           C  
ATOM   5059  N   ALA A 684      -6.923  71.799  37.475  1.00 21.29           N  
ATOM   5060  CA  ALA A 684      -6.667  72.413  38.763  1.00 21.82           C  
ATOM   5061  C   ALA A 684      -5.218  72.888  38.890  1.00 22.45           C  
ATOM   5062  O   ALA A 684      -4.315  72.078  39.012  1.00 20.92           O  
ATOM   5063  CB  ALA A 684      -6.972  71.432  39.867  1.00 23.77           C  
ATOM   5064  N   TRP A 685      -5.045  74.210  38.921  1.00 20.60           N  
ATOM   5065  CA  TRP A 685      -3.772  74.874  38.965  1.00 22.00           C  
ATOM   5066  C   TRP A 685      -3.398  74.993  40.423  1.00 23.98           C  
ATOM   5067  O   TRP A 685      -4.272  75.164  41.213  1.00 22.99           O  
ATOM   5068  CB  TRP A 685      -3.913  76.256  38.324  1.00 22.32           C  
ATOM   5069  CG  TRP A 685      -2.745  77.143  38.484  1.00 23.51           C  
ATOM   5070  CD1 TRP A 685      -1.680  77.220  37.648  1.00 26.48           C  
ATOM   5071  CD2 TRP A 685      -2.488  78.071  39.538  1.00 25.15           C  
ATOM   5072  NE1 TRP A 685      -0.767  78.130  38.106  1.00 30.08           N  
ATOM   5073  CE2 TRP A 685      -1.231  78.666  39.275  1.00 27.16           C  
ATOM   5074  CE3 TRP A 685      -3.177  78.445  40.681  1.00 28.67           C  
ATOM   5075  CZ2 TRP A 685      -0.678  79.641  40.077  1.00 26.02           C  
ATOM   5076  CZ3 TRP A 685      -2.622  79.444  41.504  1.00 28.48           C  
ATOM   5077  CH2 TRP A 685      -1.374  80.012  41.194  1.00 28.79           C  
ATOM   5078  N   ARG A 686      -2.125  74.833  40.782  1.00 22.59           N  
ATOM   5079  CA  ARG A 686      -1.701  74.990  42.147  1.00 22.56           C  
ATOM   5080  C   ARG A 686      -0.444  75.790  42.193  1.00 24.40           C  
ATOM   5081  O   ARG A 686       0.552  75.370  41.669  1.00 26.15           O  
ATOM   5082  CB  ARG A 686      -1.469  73.640  42.829  1.00 26.13           C  
ATOM   5083  CG  ARG A 686      -1.182  73.743  44.302  1.00 26.75           C  
ATOM   5084  CD  ARG A 686      -1.118  72.395  45.028  1.00 29.92           C  
ATOM   5085  NE  ARG A 686       0.084  71.652  44.663  1.00 31.23           N  
ATOM   5086  CZ  ARG A 686       0.134  70.372  44.265  1.00 32.56           C  
ATOM   5087  NH1 ARG A 686      -0.946  69.592  44.215  1.00 32.05           N  
ATOM   5088  NH2 ARG A 686       1.312  69.860  43.929  1.00 35.70           N  
ATOM   5089  N   GLY A 687      -0.502  76.961  42.830  1.00 25.47           N  
ATOM   5090  CA  GLY A 687       0.649  77.773  43.030  1.00 27.79           C  
ATOM   5091  C   GLY A 687       1.180  77.738  44.450  1.00 28.36           C  
ATOM   5092  O   GLY A 687       0.446  77.503  45.384  1.00 28.81           O  
ATOM   5093  N   GLU A 688       2.484  77.968  44.583  1.00 30.68           N  
ATOM   5094  CA  GLU A 688       3.117  78.184  45.864  1.00 33.73           C  
ATOM   5095  C   GLU A 688       3.920  79.474  45.819  1.00 35.67           C  
ATOM   5096  O   GLU A 688       4.774  79.683  44.949  1.00 38.80           O  
ATOM   5097  CB  GLU A 688       3.910  76.958  46.262  1.00 40.43           C  
ATOM   5098  CG  GLU A 688       3.022  75.974  47.031  1.00 47.34           C  
ATOM   5099  CD  GLU A 688       3.324  74.498  46.776  1.00 56.31           C  
ATOM   5100  OE1 GLU A 688       4.542  74.144  46.735  1.00 53.15           O  
ATOM   5101  OE2 GLU A 688       2.329  73.700  46.644  1.00 54.47           O  
ATOM   5102  N   PHE A 689       3.590  80.382  46.727  1.00 33.85           N  
ATOM   5103  CA  PHE A 689       4.059  81.763  46.618  1.00 37.73           C  
ATOM   5104  C   PHE A 689       4.442  82.365  47.981  1.00 36.85           C  
ATOM   5105  O   PHE A 689       3.938  81.952  48.998  1.00 32.98           O  
ATOM   5106  CB  PHE A 689       3.034  82.633  45.871  1.00 33.09           C  
ATOM   5107  CG  PHE A 689       1.656  82.643  46.480  1.00 35.22           C  
ATOM   5108  CD1 PHE A 689       0.726  81.702  46.129  1.00 38.85           C  
ATOM   5109  CD2 PHE A 689       1.298  83.597  47.392  1.00 39.33           C  
ATOM   5110  CE1 PHE A 689      -0.539  81.695  46.677  1.00 39.64           C  
ATOM   5111  CE2 PHE A 689       0.039  83.602  47.964  1.00 43.56           C  
ATOM   5112  CZ  PHE A 689      -0.886  82.656  47.600  1.00 42.51           C  
ATOM   5113  N   PHE A 690       5.363  83.325  47.974  1.00 39.51           N  
ATOM   5114  CA  PHE A 690       5.735  84.067  49.190  1.00 38.28           C  
ATOM   5115  C   PHE A 690       4.583  84.938  49.687  1.00 38.32           C  
ATOM   5116  O   PHE A 690       3.907  85.582  48.887  1.00 36.64           O  
ATOM   5117  CB  PHE A 690       6.934  84.961  48.920  1.00 35.88           C  
ATOM   5118  CG  PHE A 690       8.126  84.229  48.381  1.00 38.95           C  
ATOM   5119  CD1 PHE A 690       9.058  83.674  49.235  1.00 38.62           C  
ATOM   5120  CD2 PHE A 690       8.336  84.114  47.013  1.00 40.88           C  
ATOM   5121  CE1 PHE A 690      10.156  82.985  48.732  1.00 41.32           C  
ATOM   5122  CE2 PHE A 690       9.450  83.444  46.496  1.00 38.85           C  
ATOM   5123  CZ  PHE A 690      10.356  82.875  47.360  1.00 41.40           C  
ATOM   5124  N   PRO A 691       4.367  84.987  51.013  1.00 43.25           N  
ATOM   5125  CA  PRO A 691       3.410  85.924  51.619  1.00 49.88           C  
ATOM   5126  C   PRO A 691       3.610  87.396  51.234  1.00 51.12           C  
ATOM   5127  O   PRO A 691       2.628  88.145  51.143  1.00 52.60           O  
ATOM   5128  CB  PRO A 691       3.675  85.781  53.114  1.00 50.40           C  
ATOM   5129  CG  PRO A 691       4.266  84.440  53.292  1.00 50.77           C  
ATOM   5130  CD  PRO A 691       4.967  84.089  52.011  1.00 48.42           C  
ATOM   5131  N   SER A 692       4.864  87.794  51.019  1.00 48.92           N  
ATOM   5132  CA  SER A 692       5.234  89.181  50.772  1.00 51.00           C  
ATOM   5133  C   SER A 692       4.446  89.785  49.652  1.00 54.94           C  
ATOM   5134  O   SER A 692       3.970  89.069  48.779  1.00 57.48           O  
ATOM   5135  CB  SER A 692       6.697  89.245  50.404  1.00 55.21           C  
ATOM   5136  OG  SER A 692       7.435  88.456  51.326  1.00 65.31           O  
ATOM   5137  N   LYS A 693       4.316  91.109  49.661  1.00 56.04           N  
ATOM   5138  CA  LYS A 693       3.571  91.795  48.607  1.00 58.02           C  
ATOM   5139  C   LYS A 693       4.517  92.496  47.661  1.00 46.84           C  
ATOM   5140  O   LYS A 693       5.707  92.567  47.898  1.00 46.26           O  
ATOM   5141  CB  LYS A 693       2.539  92.777  49.186  1.00 66.70           C  
ATOM   5142  CG  LYS A 693       1.182  92.148  49.479  1.00 76.44           C  
ATOM   5143  CD  LYS A 693       0.918  91.955  50.972  1.00 85.18           C  
ATOM   5144  CE  LYS A 693      -0.458  91.325  51.199  1.00 89.44           C  
ATOM   5145  NZ  LYS A 693      -1.121  91.763  52.461  1.00 88.95           N  
ATOM   5146  N   MET A 694       3.973  93.015  46.572  1.00 54.02           N  
ATOM   5147  CA  MET A 694       4.797  93.636  45.515  1.00 55.84           C  
ATOM   5148  C   MET A 694       5.671  94.722  46.093  1.00 54.22           C  
ATOM   5149  O   MET A 694       6.889  94.725  45.906  1.00 58.30           O  
ATOM   5150  CB  MET A 694       3.897  94.211  44.427  1.00 59.88           C  
ATOM   5151  CG  MET A 694       4.554  94.255  43.072  1.00 69.32           C  
ATOM   5152  SD  MET A 694       5.073  92.631  42.469  1.00 74.39           S  
ATOM   5153  CE  MET A 694       6.572  93.177  41.631  1.00 75.57           C  
ATOM   5154  N   ASP A 695       5.041  95.605  46.857  1.00 54.11           N  
ATOM   5155  CA  ASP A 695       5.735  96.692  47.535  1.00 59.04           C  
ATOM   5156  C   ASP A 695       6.939  96.190  48.356  1.00 53.18           C  
ATOM   5157  O   ASP A 695       8.009  96.799  48.328  1.00 53.60           O  
ATOM   5158  CB  ASP A 695       4.746  97.545  48.378  1.00 66.37           C  
ATOM   5159  CG  ASP A 695       4.054  96.745  49.502  1.00 71.05           C  
ATOM   5160  OD1 ASP A 695       3.182  95.889  49.219  1.00 69.03           O  
ATOM   5161  OD2 ASP A 695       4.375  96.994  50.681  1.00 75.89           O  
ATOM   5162  N   GLU A 696       6.790  95.052  49.012  1.00 49.91           N  
ATOM   5163  CA  GLU A 696       7.908  94.435  49.778  1.00 53.51           C  
ATOM   5164  C   GLU A 696       8.875  93.616  48.860  1.00 53.34           C  
ATOM   5165  O   GLU A 696      10.066  93.387  49.184  1.00 44.13           O  
ATOM   5166  CB  GLU A 696       7.335  93.560  50.902  1.00 55.19           C  
ATOM   5167  CG  GLU A 696       5.989  94.066  51.429  1.00 56.60           C  
ATOM   5168  CD  GLU A 696       5.329  93.131  52.411  1.00 58.90           C  
ATOM   5169  OE1 GLU A 696       4.689  92.157  51.960  1.00 59.66           O  
ATOM   5170  OE2 GLU A 696       5.451  93.366  53.626  1.00 65.40           O  
ATOM   5171  N   TYR A 697       8.381  93.172  47.703  1.00 51.81           N  
ATOM   5172  CA  TYR A 697       9.300  92.648  46.698  1.00 49.23           C  
ATOM   5173  C   TYR A 697      10.209  93.801  46.258  1.00 53.96           C  
ATOM   5174  O   TYR A 697      11.453  93.650  46.210  1.00 49.93           O  
ATOM   5175  CB  TYR A 697       8.519  92.037  45.543  1.00 54.86           C  
ATOM   5176  CG  TYR A 697       9.304  91.775  44.279  1.00 62.48           C  
ATOM   5177  CD1 TYR A 697       9.582  92.814  43.397  1.00 66.98           C  
ATOM   5178  CD2 TYR A 697       9.728  90.476  43.927  1.00 61.18           C  
ATOM   5179  CE1 TYR A 697      10.275  92.593  42.220  1.00 69.02           C  
ATOM   5180  CE2 TYR A 697      10.415  90.248  42.740  1.00 57.48           C  
ATOM   5181  CZ  TYR A 697      10.683  91.321  41.898  1.00 62.34           C  
ATOM   5182  OH  TYR A 697      11.342  91.185  40.724  1.00 56.08           O  
ATOM   5183  N   ASN A 698       9.606  94.971  45.986  1.00 51.95           N  
ATOM   5184  CA  ASN A 698      10.380  96.121  45.481  1.00 54.41           C  
ATOM   5185  C   ASN A 698      11.388  96.622  46.487  1.00 56.46           C  
ATOM   5186  O   ASN A 698      12.480  97.055  46.107  1.00 57.49           O  
ATOM   5187  CB  ASN A 698       9.468  97.238  44.968  1.00 53.76           C  
ATOM   5188  CG  ASN A 698       8.903  96.922  43.582  1.00 57.21           C  
ATOM   5189  OD1 ASN A 698       9.651  96.528  42.686  1.00 59.49           O  
ATOM   5190  ND2 ASN A 698       7.577  97.052  43.410  1.00 57.39           N  
ATOM   5191  N   MET A 699      11.036  96.492  47.764  1.00 58.47           N  
ATOM   5192  CA  MET A 699      11.918  96.805  48.893  1.00 61.72           C  
ATOM   5193  C   MET A 699      13.172  95.987  48.942  1.00 58.21           C  
ATOM   5194  O   MET A 699      14.242  96.491  49.212  1.00 65.42           O  
ATOM   5195  CB  MET A 699      11.171  96.528  50.195  1.00 69.92           C  
ATOM   5196  CG  MET A 699      11.987  96.730  51.465  1.00 72.06           C  
ATOM   5197  SD  MET A 699      10.933  97.034  52.901  1.00 82.69           S  
ATOM   5198  CE  MET A 699       9.811  98.314  52.308  1.00 79.54           C  
ATOM   5199  N   ILE A 700      13.017  94.690  48.747  1.00 65.60           N  
ATOM   5200  CA  ILE A 700      14.132  93.751  48.858  1.00 62.13           C  
ATOM   5201  C   ILE A 700      15.157  93.946  47.737  1.00 54.93           C  
ATOM   5202  O   ILE A 700      16.365  93.768  47.961  1.00 48.09           O  
ATOM   5203  CB  ILE A 700      13.588  92.310  48.849  1.00 66.25           C  
ATOM   5204  CG1 ILE A 700      12.853  92.033  50.177  1.00 65.88           C  
ATOM   5205  CG2 ILE A 700      14.695  91.297  48.553  1.00 67.54           C  
ATOM   5206  CD1 ILE A 700      13.765  91.638  51.326  1.00 67.84           C  
ATOM   5207  N   LYS A 701      14.648  94.291  46.545  1.00 54.44           N  
ATOM   5208  CA  LYS A 701      15.459  94.616  45.375  1.00 55.97           C  
ATOM   5209  C   LYS A 701      16.440  95.745  45.674  1.00 57.79           C  
ATOM   5210  O   LYS A 701      17.650  95.550  45.538  1.00 56.78           O  
ATOM   5211  CB  LYS A 701      14.593  95.064  44.195  1.00 63.60           C  
ATOM   5212  CG  LYS A 701      13.948  93.976  43.351  1.00 70.17           C  
ATOM   5213  CD  LYS A 701      13.776  94.452  41.911  1.00 73.59           C  
ATOM   5214  CE  LYS A 701      15.101  94.373  41.152  1.00 81.50           C  
ATOM   5215  NZ  LYS A 701      15.266  95.444  40.127  1.00 84.93           N  
ATOM   5216  N   ARG A 702      15.946  96.928  46.060  1.00 61.82           N  
ATOM   5217  CA  ARG A 702      16.884  98.050  46.361  1.00 61.99           C  
ATOM   5218  C   ARG A 702      17.888  97.695  47.487  1.00 58.80           C  
ATOM   5219  O   ARG A 702      19.063  98.039  47.394  1.00 64.22           O  
ATOM   5220  CB  ARG A 702      16.197  99.419  46.578  1.00 66.46           C  
ATOM   5221  CG  ARG A 702      14.724  99.418  46.961  1.00 70.68           C  
ATOM   5222  CD  ARG A 702      14.205 100.810  47.358  1.00 74.76           C  
ATOM   5223  NE  ARG A 702      13.138 100.707  48.369  1.00 75.65           N  
ATOM   5224  CZ  ARG A 702      11.833 100.521  48.124  1.00 69.33           C  
ATOM   5225  NH1 ARG A 702      11.363 100.446  46.882  1.00 62.51           N  
ATOM   5226  NH2 ARG A 702      10.981 100.415  49.149  1.00 72.39           N  
ATOM   5227  N   ALA A 703      17.475  96.937  48.498  1.00 55.35           N  
ATOM   5228  CA  ALA A 703      18.453  96.451  49.492  1.00 55.53           C  
ATOM   5229  C   ALA A 703      19.544  95.560  48.868  1.00 58.41           C  
ATOM   5230  O   ALA A 703      20.697  95.583  49.291  1.00 66.80           O  
ATOM   5231  CB  ALA A 703      17.755  95.722  50.622  1.00 53.72           C  
ATOM   5232  N   LEU A 704      19.185  94.774  47.860  1.00 55.22           N  
ATOM   5233  CA  LEU A 704      20.198  94.013  47.105  1.00 53.73           C  
ATOM   5234  C   LEU A 704      21.061  94.894  46.176  1.00 51.07           C  
ATOM   5235  O   LEU A 704      22.263  94.659  46.070  1.00 45.22           O  
ATOM   5236  CB  LEU A 704      19.560  92.889  46.285  1.00 49.98           C  
ATOM   5237  CG  LEU A 704      19.221  91.623  47.047  1.00 48.64           C  
ATOM   5238  CD1 LEU A 704      18.167  90.840  46.299  1.00 49.88           C  
ATOM   5239  CD2 LEU A 704      20.453  90.782  47.287  1.00 47.06           C  
ATOM   5240  N   GLN A 705      20.456  95.889  45.509  1.00 49.20           N  
ATOM   5241  CA  GLN A 705      21.231  96.919  44.772  1.00 51.06           C  
ATOM   5242  C   GLN A 705      22.313  97.681  45.550  1.00 52.31           C  
ATOM   5243  O   GLN A 705      23.137  98.355  44.944  1.00 56.80           O  
ATOM   5244  CB  GLN A 705      20.306  97.926  44.113  1.00 51.91           C  
ATOM   5245  CG  GLN A 705      19.592  97.346  42.920  1.00 58.75           C  
ATOM   5246  CD  GLN A 705      18.727  98.373  42.249  1.00 66.20           C  
ATOM   5247  OE1 GLN A 705      17.798  98.909  42.851  1.00 69.37           O  
ATOM   5248  NE2 GLN A 705      19.032  98.667  40.994  1.00 69.61           N  
ATOM   5249  N   ASN A 706      22.333  97.579  46.869  1.00 60.57           N  
ATOM   5250  CA  ASN A 706      23.434  98.143  47.652  1.00 68.17           C  
ATOM   5251  C   ASN A 706      24.522  97.145  47.891  1.00 68.28           C  
ATOM   5252  O   ASN A 706      25.486  97.447  48.607  1.00 64.33           O  
ATOM   5253  CB  ASN A 706      22.948  98.643  49.023  1.00 73.59           C  
ATOM   5254  CG  ASN A 706      22.283  99.991  48.939  1.00 75.50           C  
ATOM   5255  OD1 ASN A 706      22.517 100.754  47.995  1.00 75.51           O  
ATOM   5256  ND2 ASN A 706      21.448 100.298  49.921  1.00 74.17           N  
ATOM   5257  N   GLU A 707      24.389  95.962  47.305  1.00 64.88           N  
ATOM   5258  CA  GLU A 707      25.312  94.905  47.612  1.00 65.37           C  
ATOM   5259  C   GLU A 707      26.334  94.597  46.514  1.00 61.78           C  
ATOM   5260  O   GLU A 707      26.204  95.025  45.375  1.00 55.11           O  
ATOM   5261  CB  GLU A 707      24.523  93.680  47.992  1.00 70.76           C  
ATOM   5262  CG  GLU A 707      25.182  92.882  49.089  1.00 75.94           C  
ATOM   5263  CD  GLU A 707      24.157  92.170  49.923  1.00 77.15           C  
ATOM   5264  OE1 GLU A 707      23.454  92.862  50.694  1.00 66.78           O  
ATOM   5265  OE2 GLU A 707      24.054  90.929  49.789  1.00 79.61           O  
ATOM   5266  N   THR A 708      27.373  93.878  46.911  1.00 61.25           N  
ATOM   5267  CA  THR A 708      28.453  93.431  46.035  1.00 58.99           C  
ATOM   5268  C   THR A 708      28.317  91.917  45.832  1.00 53.56           C  
ATOM   5269  O   THR A 708      27.983  91.210  46.777  1.00 49.29           O  
ATOM   5270  CB  THR A 708      29.833  93.740  46.679  1.00 59.47           C  
ATOM   5271  OG1 THR A 708      30.464  94.759  45.925  1.00 60.74           O  
ATOM   5272  CG2 THR A 708      30.797  92.495  46.739  1.00 63.05           C  
ATOM   5273  N   PHE A 709      28.619  91.435  44.622  1.00 48.86           N  
ATOM   5274  CA  PHE A 709      28.508  90.010  44.276  1.00 52.28           C  
ATOM   5275  C   PHE A 709      29.763  89.554  43.518  1.00 56.92           C  
ATOM   5276  O   PHE A 709      30.412  90.371  42.860  1.00 51.33           O  
ATOM   5277  CB  PHE A 709      27.241  89.742  43.445  1.00 47.87           C  
ATOM   5278  CG  PHE A 709      25.987  90.285  44.066  1.00 51.62           C  
ATOM   5279  CD1 PHE A 709      25.614  91.614  43.869  1.00 49.59           C  
ATOM   5280  CD2 PHE A 709      25.195  89.490  44.872  1.00 51.19           C  
ATOM   5281  CE1 PHE A 709      24.476  92.127  44.463  1.00 50.07           C  
ATOM   5282  CE2 PHE A 709      24.050  89.994  45.460  1.00 54.36           C  
ATOM   5283  CZ  PHE A 709      23.686  91.315  45.254  1.00 54.06           C  
ATOM   5284  N   PRO A 710      30.120  88.249  43.632  1.00 59.69           N  
ATOM   5285  CA  PRO A 710      31.301  87.711  42.943  1.00 57.60           C  
ATOM   5286  C   PRO A 710      31.012  87.343  41.509  1.00 53.71           C  
ATOM   5287  O   PRO A 710      30.017  86.688  41.239  1.00 58.25           O  
ATOM   5288  CB  PRO A 710      31.626  86.441  43.733  1.00 62.48           C  
ATOM   5289  CG  PRO A 710      30.303  85.987  44.256  1.00 65.94           C  
ATOM   5290  CD  PRO A 710      29.464  87.229  44.472  1.00 61.22           C  
ATOM   5291  N   ASN A 711      31.876  87.760  40.594  1.00 52.79           N  
ATOM   5292  CA  ASN A 711      31.780  87.347  39.198  1.00 55.21           C  
ATOM   5293  C   ASN A 711      31.939  85.816  39.083  1.00 61.63           C  
ATOM   5294  O   ASN A 711      33.002  85.256  39.371  1.00 62.17           O  
ATOM   5295  CB  ASN A 711      32.827  88.086  38.363  1.00 54.88           C  
ATOM   5296  CG  ASN A 711      32.619  87.927  36.863  1.00 59.88           C  
ATOM   5297  OD1 ASN A 711      31.813  87.110  36.415  1.00 57.05           O  
ATOM   5298  ND2 ASN A 711      33.368  88.713  36.073  1.00 57.77           N  
ATOM   5299  N   LYS A 712      30.850  85.152  38.694  1.00 65.47           N  
ATOM   5300  CA  LYS A 712      30.830  83.693  38.513  1.00 64.03           C  
ATOM   5301  C   LYS A 712      31.693  83.247  37.348  1.00 60.98           C  
ATOM   5302  O   LYS A 712      32.145  82.117  37.338  1.00 53.78           O  
ATOM   5303  CB  LYS A 712      29.398  83.193  38.247  1.00 65.19           C  
ATOM   5304  CG  LYS A 712      28.736  83.816  37.007  1.00 66.85           C  
ATOM   5305  CD  LYS A 712      27.718  82.897  36.343  1.00 67.54           C  
ATOM   5306  CE  LYS A 712      26.429  82.787  37.142  1.00 64.35           C  
ATOM   5307  NZ  LYS A 712      25.271  82.399  36.286  1.00 61.43           N  
ATOM   5308  N   ASN A 713      31.847  84.104  36.336  1.00 68.27           N  
ATOM   5309  CA  ASN A 713      32.659  83.771  35.176  1.00 72.06           C  
ATOM   5310  C   ASN A 713      34.148  83.840  35.538  1.00 76.74           C  
ATOM   5311  O   ASN A 713      34.669  84.878  35.970  1.00 74.49           O  
ATOM   5312  CB  ASN A 713      32.340  84.661  33.964  1.00 70.15           C  
ATOM   5313  CG  ASN A 713      33.187  84.311  32.739  1.00 69.82           C  
ATOM   5314  OD1 ASN A 713      33.551  85.181  31.955  1.00 61.74           O  
ATOM   5315  ND2 ASN A 713      33.514  83.031  32.580  1.00 71.85           N  
ATOM   5316  N   LYS A 714      34.810  82.705  35.343  1.00 86.04           N  
ATOM   5317  CA  LYS A 714      36.187  82.474  35.778  1.00 88.70           C  
ATOM   5318  C   LYS A 714      37.201  83.083  34.773  1.00 82.50           C  
ATOM   5319  O   LYS A 714      38.291  83.513  35.151  1.00 68.54           O  
ATOM   5320  CB  LYS A 714      36.405  80.956  35.937  1.00 95.38           C  
ATOM   5321  CG  LYS A 714      37.003  80.532  37.271  1.00100.93           C  
ATOM   5322  CD  LYS A 714      37.396  79.054  37.262  1.00100.50           C  
ATOM   5323  CE  LYS A 714      38.380  78.708  38.377  1.00 94.25           C  
ATOM   5324  NZ  LYS A 714      39.258  77.577  37.984  1.00 89.02           N  
ATOM   5325  N   PHE A 715      36.815  83.134  33.499  1.00 82.73           N  
ATOM   5326  CA  PHE A 715      37.636  83.725  32.428  1.00 83.55           C  
ATOM   5327  C   PHE A 715      38.012  85.213  32.626  1.00 82.19           C  
ATOM   5328  O   PHE A 715      38.897  85.717  31.930  1.00 81.83           O  
ATOM   5329  CB  PHE A 715      36.935  83.559  31.051  1.00 88.30           C  
ATOM   5330  CG  PHE A 715      37.055  82.171  30.451  1.00 93.02           C  
ATOM   5331  CD1 PHE A 715      36.395  81.074  31.024  1.00 92.76           C  
ATOM   5332  CD2 PHE A 715      37.820  81.964  29.301  1.00 92.67           C  
ATOM   5333  CE1 PHE A 715      36.513  79.806  30.473  1.00 94.42           C  
ATOM   5334  CE2 PHE A 715      37.938  80.699  28.747  1.00 97.88           C  
ATOM   5335  CZ  PHE A 715      37.282  79.619  29.331  1.00 97.74           C  
ATOM   5336  N   SER A 716      37.367  85.915  33.560  1.00 74.84           N  
ATOM   5337  CA  SER A 716      37.514  87.376  33.666  1.00 69.84           C  
ATOM   5338  C   SER A 716      38.327  87.870  34.879  1.00 68.16           C  
ATOM   5339  O   SER A 716      38.192  87.320  35.986  1.00 62.81           O  
ATOM   5340  CB  SER A 716      36.122  88.014  33.706  1.00 69.57           C  
ATOM   5341  OG  SER A 716      36.184  89.353  34.172  1.00 64.41           O  
ATOM   5342  N   LYS A 717      39.126  88.931  34.649  1.00 65.21           N  
ATOM   5343  CA  LYS A 717      39.908  89.656  35.699  1.00 63.33           C  
ATOM   5344  C   LYS A 717      39.078  90.434  36.723  1.00 63.77           C  
ATOM   5345  O   LYS A 717      39.606  90.867  37.756  1.00 57.69           O  
ATOM   5346  CB  LYS A 717      40.874  90.685  35.075  1.00 64.15           C  
ATOM   5347  CG  LYS A 717      42.294  90.207  34.822  1.00 64.23           C  
ATOM   5348  CD  LYS A 717      42.501  89.840  33.367  1.00 68.05           C  
ATOM   5349  CE  LYS A 717      43.980  89.727  33.020  1.00 71.29           C  
ATOM   5350  NZ  LYS A 717      44.200  89.983  31.571  1.00 70.70           N  
ATOM   5351  N   LYS A 718      37.803  90.664  36.415  1.00 63.53           N  
ATOM   5352  CA  LYS A 718      36.919  91.446  37.289  1.00 64.68           C  
ATOM   5353  C   LYS A 718      36.154  90.477  38.181  1.00 58.11           C  
ATOM   5354  O   LYS A 718      35.465  89.608  37.668  1.00 59.18           O  
ATOM   5355  CB  LYS A 718      35.960  92.264  36.414  1.00 62.64           C  
ATOM   5356  CG  LYS A 718      35.308  93.467  37.093  1.00 62.35           C  
ATOM   5357  CD  LYS A 718      34.179  94.016  36.218  1.00 55.00           C  
ATOM   5358  CE  LYS A 718      33.390  95.095  36.925  1.00 54.32           C  
ATOM   5359  NZ  LYS A 718      32.219  95.477  36.098  1.00 48.56           N  
ATOM   5360  N   LYS A 719      36.273  90.595  39.500  1.00 68.08           N  
ATOM   5361  CA  LYS A 719      35.571  89.627  40.393  1.00 74.72           C  
ATOM   5362  C   LYS A 719      34.546  90.232  41.393  1.00 64.66           C  
ATOM   5363  O   LYS A 719      33.951  89.499  42.197  1.00 55.30           O  
ATOM   5364  CB  LYS A 719      36.568  88.640  41.061  1.00 81.33           C  
ATOM   5365  CG  LYS A 719      37.266  89.117  42.326  1.00 87.92           C  
ATOM   5366  CD  LYS A 719      38.444  90.038  42.045  1.00 91.36           C  
ATOM   5367  CE  LYS A 719      38.742  90.895  43.268  1.00 94.10           C  
ATOM   5368  NZ  LYS A 719      39.952  91.738  43.094  1.00 91.20           N  
ATOM   5369  N   VAL A 720      34.336  91.554  41.307  1.00 58.91           N  
ATOM   5370  CA  VAL A 720      33.203  92.230  41.969  1.00 56.85           C  
ATOM   5371  C   VAL A 720      32.233  92.792  40.915  1.00 52.21           C  
ATOM   5372  O   VAL A 720      32.637  93.354  39.891  1.00 54.38           O  
ATOM   5373  CB  VAL A 720      33.616  93.398  42.896  1.00 55.28           C  
ATOM   5374  CG1 VAL A 720      32.701  93.429  44.099  1.00 62.36           C  
ATOM   5375  CG2 VAL A 720      35.050  93.284  43.366  1.00 55.14           C  
ATOM   5376  N   LEU A 721      30.948  92.644  41.204  1.00 53.31           N  
ATOM   5377  CA  LEU A 721      29.856  92.987  40.304  1.00 49.28           C  
ATOM   5378  C   LEU A 721      28.757  93.632  41.099  1.00 49.11           C  
ATOM   5379  O   LEU A 721      28.425  93.168  42.189  1.00 49.91           O  
ATOM   5380  CB  LEU A 721      29.250  91.722  39.680  1.00 51.08           C  
ATOM   5381  CG  LEU A 721      29.569  91.313  38.249  1.00 47.67           C  
ATOM   5382  CD1 LEU A 721      31.024  91.540  37.925  1.00 49.92           C  
ATOM   5383  CD2 LEU A 721      29.183  89.876  37.999  1.00 45.98           C  
ATOM   5384  N   THR A 722      28.141  94.663  40.539  1.00 43.44           N  
ATOM   5385  CA  THR A 722      26.915  95.180  41.109  1.00 40.17           C  
ATOM   5386  C   THR A 722      25.718  94.281  40.788  1.00 37.20           C  
ATOM   5387  O   THR A 722      25.721  93.506  39.838  1.00 38.77           O  
ATOM   5388  CB  THR A 722      26.632  96.616  40.624  1.00 41.81           C  
ATOM   5389  OG1 THR A 722      26.476  96.643  39.200  1.00 40.01           O  
ATOM   5390  CG2 THR A 722      27.791  97.539  41.017  1.00 41.30           C  
ATOM   5391  N   PHE A 723      24.686  94.420  41.590  1.00 38.42           N  
ATOM   5392  CA  PHE A 723      23.431  93.728  41.395  1.00 37.40           C  
ATOM   5393  C   PHE A 723      22.881  93.878  39.992  1.00 40.47           C  
ATOM   5394  O   PHE A 723      22.434  92.897  39.387  1.00 37.65           O  
ATOM   5395  CB  PHE A 723      22.403  94.266  42.352  1.00 35.57           C  
ATOM   5396  CG  PHE A 723      21.196  93.438  42.419  1.00 34.43           C  
ATOM   5397  CD1 PHE A 723      21.258  92.177  42.948  1.00 35.05           C  
ATOM   5398  CD2 PHE A 723      20.000  93.902  41.923  1.00 36.56           C  
ATOM   5399  CE1 PHE A 723      20.116  91.383  42.991  1.00 35.75           C  
ATOM   5400  CE2 PHE A 723      18.851  93.130  41.973  1.00 35.24           C  
ATOM   5401  CZ  PHE A 723      18.914  91.864  42.503  1.00 34.16           C  
ATOM   5402  N   ASP A 724      22.902  95.108  39.484  1.00 42.48           N  
ATOM   5403  CA  ASP A 724      22.393  95.374  38.147  1.00 42.43           C  
ATOM   5404  C   ASP A 724      23.156  94.627  37.050  1.00 41.56           C  
ATOM   5405  O   ASP A 724      22.559  94.255  36.054  1.00 40.53           O  
ATOM   5406  CB  ASP A 724      22.356  96.874  37.867  1.00 43.68           C  
ATOM   5407  CG  ASP A 724      21.158  97.567  38.544  1.00 43.99           C  
ATOM   5408  OD1 ASP A 724      19.985  97.146  38.357  1.00 37.51           O  
ATOM   5409  OD2 ASP A 724      21.401  98.558  39.250  1.00 44.45           O  
ATOM   5410  N   GLU A 725      24.451  94.368  37.249  1.00 40.43           N  
ATOM   5411  CA  GLU A 725      25.246  93.619  36.251  1.00 39.70           C  
ATOM   5412  C   GLU A 725      25.019  92.102  36.175  1.00 38.89           C  
ATOM   5413  O   GLU A 725      25.367  91.483  35.153  1.00 39.29           O  
ATOM   5414  CB  GLU A 725      26.729  93.835  36.467  1.00 38.30           C  
ATOM   5415  CG  GLU A 725      27.218  95.241  36.198  1.00 39.36           C  
ATOM   5416  CD  GLU A 725      28.612  95.437  36.755  1.00 40.93           C  
ATOM   5417  OE1 GLU A 725      29.612  95.170  36.029  1.00 37.50           O  
ATOM   5418  OE2 GLU A 725      28.686  95.807  37.936  1.00 36.40           O  
ATOM   5419  N   LEU A 726      24.486  91.493  37.232  1.00 37.60           N  
ATOM   5420  CA  LEU A 726      24.089  90.067  37.195  1.00 36.58           C  
ATOM   5421  C   LEU A 726      22.969  89.868  36.188  1.00 39.22           C  
ATOM   5422  O   LEU A 726      22.219  90.805  35.918  1.00 34.91           O  
ATOM   5423  CB  LEU A 726      23.542  89.614  38.542  1.00 37.57           C  
ATOM   5424  CG  LEU A 726      24.441  89.725  39.765  1.00 35.70           C  
ATOM   5425  CD1 LEU A 726      23.609  89.412  40.988  1.00 36.12           C  
ATOM   5426  CD2 LEU A 726      25.597  88.747  39.634  1.00 37.99           C  
ATOM   5427  N   SER A 727      22.810  88.648  35.674  1.00 41.51           N  
ATOM   5428  CA  SER A 727      21.736  88.385  34.715  1.00 41.35           C  
ATOM   5429  C   SER A 727      20.412  88.385  35.469  1.00 42.60           C  
ATOM   5430  O   SER A 727      20.377  88.233  36.698  1.00 35.85           O  
ATOM   5431  CB  SER A 727      21.932  87.035  34.024  1.00 40.39           C  
ATOM   5432  OG  SER A 727      21.890  85.973  34.968  1.00 40.76           O  
ATOM   5433  N   TYR A 728      19.329  88.539  34.716  1.00 43.08           N  
ATOM   5434  CA  TYR A 728      17.990  88.530  35.255  1.00 44.30           C  
ATOM   5435  C   TYR A 728      17.853  87.337  36.176  1.00 42.84           C  
ATOM   5436  O   TYR A 728      17.344  87.435  37.305  1.00 40.91           O  
ATOM   5437  CB  TYR A 728      17.005  88.352  34.111  1.00 56.97           C  
ATOM   5438  CG  TYR A 728      15.869  89.327  34.107  1.00 72.92           C  
ATOM   5439  CD1 TYR A 728      15.069  89.522  35.233  1.00 77.25           C  
ATOM   5440  CD2 TYR A 728      15.584  90.068  32.950  1.00 89.23           C  
ATOM   5441  CE1 TYR A 728      14.021  90.446  35.203  1.00 94.54           C  
ATOM   5442  CE2 TYR A 728      14.539  90.984  32.907  1.00 94.36           C  
ATOM   5443  CZ  TYR A 728      13.757  91.173  34.026  1.00 97.53           C  
ATOM   5444  OH  TYR A 728      12.727  92.085  33.954  1.00 98.62           O  
ATOM   5445  N   ALA A 729      18.281  86.195  35.646  1.00 35.84           N  
ATOM   5446  CA  ALA A 729      18.088  84.929  36.295  1.00 36.09           C  
ATOM   5447  C   ALA A 729      18.744  84.899  37.673  1.00 36.79           C  
ATOM   5448  O   ALA A 729      18.119  84.561  38.641  1.00 37.84           O  
ATOM   5449  CB  ALA A 729      18.661  83.837  35.414  1.00 36.16           C  
ATOM   5450  N   ASP A 730      20.006  85.281  37.749  1.00 40.27           N  
ATOM   5451  CA  ASP A 730      20.730  85.292  39.025  1.00 41.47           C  
ATOM   5452  C   ASP A 730      20.207  86.326  40.014  1.00 40.45           C  
ATOM   5453  O   ASP A 730      20.153  86.034  41.211  1.00 41.25           O  
ATOM   5454  CB  ASP A 730      22.228  85.514  38.788  1.00 42.80           C  
ATOM   5455  CG  ASP A 730      22.890  84.350  38.016  1.00 49.85           C  
ATOM   5456  OD1 ASP A 730      22.311  83.236  37.942  1.00 48.45           O  
ATOM   5457  OD2 ASP A 730      24.005  84.556  37.480  1.00 57.04           O  
ATOM   5458  N   GLN A 731      19.877  87.531  39.518  1.00 37.94           N  
ATOM   5459  CA  GLN A 731      19.169  88.566  40.296  1.00 37.07           C  
ATOM   5460  C   GLN A 731      17.998  87.934  41.023  1.00 37.84           C  
ATOM   5461  O   GLN A 731      17.831  88.072  42.269  1.00 38.27           O  
ATOM   5462  CB  GLN A 731      18.660  89.712  39.395  1.00 38.76           C  
ATOM   5463  CG  GLN A 731      19.728  90.746  39.010  1.00 41.62           C  
ATOM   5464  CD  GLN A 731      19.238  91.780  37.998  1.00 44.23           C  
ATOM   5465  OE1 GLN A 731      18.090  91.745  37.595  1.00 43.94           O  
ATOM   5466  NE2 GLN A 731      20.117  92.696  37.585  1.00 39.33           N  
ATOM   5467  N   VAL A 732      17.194  87.203  40.267  1.00 38.85           N  
ATOM   5468  CA  VAL A 732      16.001  86.578  40.853  1.00 39.60           C  
ATOM   5469  C   VAL A 732      16.339  85.536  41.899  1.00 38.42           C  
ATOM   5470  O   VAL A 732      15.687  85.446  42.928  1.00 38.26           O  
ATOM   5471  CB  VAL A 732      15.096  85.997  39.769  1.00 42.18           C  
ATOM   5472  CG1 VAL A 732      14.011  85.092  40.359  1.00 41.42           C  
ATOM   5473  CG2 VAL A 732      14.463  87.161  38.996  1.00 43.66           C  
ATOM   5474  N   ILE A 733      17.377  84.759  41.664  1.00 42.86           N  
ATOM   5475  CA  ILE A 733      17.773  83.758  42.652  1.00 44.18           C  
ATOM   5476  C   ILE A 733      18.040  84.457  44.001  1.00 43.98           C  
ATOM   5477  O   ILE A 733      17.510  84.042  45.049  1.00 42.91           O  
ATOM   5478  CB  ILE A 733      19.027  83.000  42.161  1.00 50.01           C  
ATOM   5479  CG1 ILE A 733      18.663  82.098  40.969  1.00 52.34           C  
ATOM   5480  CG2 ILE A 733      19.658  82.190  43.290  1.00 48.47           C  
ATOM   5481  CD1 ILE A 733      19.852  81.631  40.155  1.00 55.35           C  
ATOM   5482  N   HIS A 734      18.845  85.524  43.977  1.00 37.74           N  
ATOM   5483  CA  HIS A 734      19.102  86.253  45.197  1.00 39.67           C  
ATOM   5484  C   HIS A 734      17.838  86.830  45.800  1.00 41.36           C  
ATOM   5485  O   HIS A 734      17.674  86.863  47.021  1.00 40.26           O  
ATOM   5486  CB  HIS A 734      20.076  87.376  44.943  1.00 46.02           C  
ATOM   5487  CG  HIS A 734      21.494  86.926  44.798  1.00 48.70           C  
ATOM   5488  ND1 HIS A 734      22.176  86.979  43.600  1.00 50.67           N  
ATOM   5489  CD2 HIS A 734      22.368  86.444  45.706  1.00 47.83           C  
ATOM   5490  CE1 HIS A 734      23.407  86.535  43.774  1.00 48.53           C  
ATOM   5491  NE2 HIS A 734      23.550  86.211  45.045  1.00 48.36           N  
ATOM   5492  N   ILE A 735      16.930  87.303  44.957  1.00 41.02           N  
ATOM   5493  CA  ILE A 735      15.682  87.859  45.481  1.00 40.99           C  
ATOM   5494  C   ILE A 735      14.930  86.796  46.235  1.00 42.24           C  
ATOM   5495  O   ILE A 735      14.550  87.009  47.367  1.00 51.09           O  
ATOM   5496  CB  ILE A 735      14.796  88.431  44.378  1.00 40.76           C  
ATOM   5497  CG1 ILE A 735      15.361  89.787  43.981  1.00 43.00           C  
ATOM   5498  CG2 ILE A 735      13.351  88.588  44.839  1.00 39.05           C  
ATOM   5499  CD1 ILE A 735      14.882  90.275  42.629  1.00 42.78           C  
ATOM   5500  N   LYS A 736      14.715  85.661  45.596  1.00 42.64           N  
ATOM   5501  CA  LYS A 736      14.057  84.550  46.227  1.00 45.22           C  
ATOM   5502  C   LYS A 736      14.606  84.283  47.624  1.00 43.74           C  
ATOM   5503  O   LYS A 736      13.843  84.232  48.560  1.00 45.01           O  
ATOM   5504  CB  LYS A 736      14.221  83.302  45.380  1.00 50.13           C  
ATOM   5505  CG  LYS A 736      13.538  83.358  44.028  1.00 54.36           C  
ATOM   5506  CD  LYS A 736      12.405  82.346  43.905  1.00 56.64           C  
ATOM   5507  CE  LYS A 736      12.167  81.968  42.457  1.00 58.22           C  
ATOM   5508  NZ  LYS A 736      11.732  83.135  41.646  1.00 59.50           N  
ATOM   5509  N   LYS A 737      15.921  84.135  47.759  1.00 49.62           N  
ATOM   5510  CA  LYS A 737      16.537  83.793  49.049  1.00 55.01           C  
ATOM   5511  C   LYS A 737      16.286  84.845  50.110  1.00 57.96           C  
ATOM   5512  O   LYS A 737      16.051  84.526  51.262  1.00 62.02           O  
ATOM   5513  CB  LYS A 737      18.044  83.596  48.887  1.00 62.82           C  
ATOM   5514  CG  LYS A 737      18.435  82.315  48.170  1.00 64.30           C  
ATOM   5515  CD  LYS A 737      19.925  82.266  47.848  1.00 66.45           C  
ATOM   5516  CE  LYS A 737      20.743  81.549  48.920  1.00 72.53           C  
ATOM   5517  NZ  LYS A 737      20.687  82.172  50.277  1.00 71.68           N  
ATOM   5518  N   ARG A 738      16.330  86.109  49.722  1.00 58.62           N  
ATOM   5519  CA  ARG A 738      16.077  87.182  50.669  1.00 57.50           C  
ATOM   5520  C   ARG A 738      14.603  87.293  50.983  1.00 54.89           C  
ATOM   5521  O   ARG A 738      14.213  87.698  52.079  1.00 52.13           O  
ATOM   5522  CB  ARG A 738      16.593  88.517  50.136  1.00 61.73           C  
ATOM   5523  CG  ARG A 738      18.094  88.533  49.888  1.00 66.42           C  
ATOM   5524  CD  ARG A 738      18.885  88.298  51.171  1.00 70.28           C  
ATOM   5525  NE  ARG A 738      20.235  88.851  51.088  1.00 72.33           N  
ATOM   5526  CZ  ARG A 738      20.525  90.160  51.106  1.00 72.51           C  
ATOM   5527  NH1 ARG A 738      19.566  91.096  51.194  1.00 69.01           N  
ATOM   5528  NH2 ARG A 738      21.790  90.547  51.014  1.00 65.49           N  
ATOM   5529  N   LEU A 739      13.769  86.952  50.021  1.00 52.34           N  
ATOM   5530  CA  LEU A 739      12.341  86.892  50.291  1.00 51.05           C  
ATOM   5531  C   LEU A 739      11.942  85.718  51.173  1.00 48.73           C  
ATOM   5532  O   LEU A 739      10.937  85.822  51.851  1.00 53.32           O  
ATOM   5533  CB  LEU A 739      11.541  86.848  49.001  1.00 50.29           C  
ATOM   5534  CG  LEU A 739      10.995  88.170  48.510  1.00 56.17           C  
ATOM   5535  CD1 LEU A 739       9.956  87.870  47.451  1.00 58.60           C  
ATOM   5536  CD2 LEU A 739      10.382  89.014  49.621  1.00 57.29           C  
ATOM   5537  N   THR A 740      12.667  84.597  51.133  1.00 50.80           N  
ATOM   5538  CA  THR A 740      12.386  83.498  52.074  1.00 60.21           C  
ATOM   5539  C   THR A 740      12.424  84.026  53.524  1.00 62.35           C  
ATOM   5540  O   THR A 740      11.434  83.930  54.283  1.00 62.12           O  
ATOM   5541  CB  THR A 740      13.387  82.317  51.959  1.00 59.73           C  
ATOM   5542  OG1 THR A 740      14.724  82.793  52.160  1.00 67.16           O  
ATOM   5543  CG2 THR A 740      13.296  81.617  50.606  1.00 55.26           C  
ATOM   5544  N   GLU A 741      13.562  84.611  53.891  1.00 65.46           N  
ATOM   5545  CA  GLU A 741      13.764  85.112  55.259  1.00 63.82           C  
ATOM   5546  C   GLU A 741      12.799  86.255  55.618  1.00 61.21           C  
ATOM   5547  O   GLU A 741      12.031  86.125  56.576  1.00 55.96           O  
ATOM   5548  CB  GLU A 741      15.229  85.471  55.514  1.00 63.79           C  
ATOM   5549  CG  GLU A 741      15.808  86.544  54.598  1.00 67.68           C  
ATOM   5550  CD  GLU A 741      17.319  86.419  54.407  1.00 71.94           C  
ATOM   5551  OE1 GLU A 741      17.808  85.278  54.234  1.00 75.24           O  
ATOM   5552  OE2 GLU A 741      18.022  87.460  54.418  1.00 62.29           O  
ATOM   5553  N   TYR A 742      12.691  87.308  54.827  1.00 56.47           N  
ATOM   5554  CA  TYR A 742      11.692  88.327  55.142  1.00 59.32           C  
ATOM   5555  C   TYR A 742      10.283  87.806  55.440  1.00 65.30           C  
ATOM   5556  O   TYR A 742       9.624  88.344  56.291  1.00 61.61           O  
ATOM   5557  CB  TYR A 742      11.633  89.425  54.098  1.00 63.03           C  
ATOM   5558  CG  TYR A 742      10.547  90.485  54.305  1.00 67.58           C  
ATOM   5559  CD1 TYR A 742       9.295  90.349  53.763  1.00 64.41           C  
ATOM   5560  CD2 TYR A 742      10.805  91.648  55.006  1.00 73.08           C  
ATOM   5561  CE1 TYR A 742       8.329  91.319  53.931  1.00 68.50           C  
ATOM   5562  CE2 TYR A 742       9.837  92.624  55.181  1.00 70.33           C  
ATOM   5563  CZ  TYR A 742       8.601  92.451  54.642  1.00 67.57           C  
ATOM   5564  OH  TYR A 742       7.629  93.389  54.820  1.00 62.90           O  
ATOM   5565  N   SER A 743       9.840  86.761  54.742  1.00 72.02           N  
ATOM   5566  CA  SER A 743       8.499  86.185  54.948  1.00 74.17           C  
ATOM   5567  C   SER A 743       8.332  85.425  56.263  1.00 76.86           C  
ATOM   5568  O   SER A 743       7.315  85.516  56.919  1.00 60.07           O  
ATOM   5569  CB  SER A 743       8.101  85.276  53.775  1.00 71.64           C  
ATOM   5570  OG  SER A 743       7.865  86.030  52.604  1.00 66.61           O  
ATOM   5571  N   ARG A 744       9.325  84.638  56.620  1.00 78.82           N  
ATOM   5572  CA  ARG A 744       9.251  83.875  57.836  1.00 83.41           C  
ATOM   5573  C   ARG A 744       8.832  84.828  58.943  1.00 85.87           C  
ATOM   5574  O   ARG A 744       7.803  84.706  59.588  1.00 81.39           O  
ATOM   5575  CB  ARG A 744      10.638  83.314  58.165  1.00 75.59           C  
ATOM   5576  CG  ARG A 744      10.630  82.290  59.271  1.00 70.17           C  
ATOM   5577  CD  ARG A 744      10.859  80.909  58.719  1.00 68.22           C  
ATOM   5578  NE  ARG A 744      11.981  80.912  57.802  1.00 68.13           N  
ATOM   5579  CZ  ARG A 744      12.421  79.861  57.136  1.00 63.22           C  
ATOM   5580  NH1 ARG A 744      11.848  78.700  57.271  1.00 62.32           N  
ATOM   5581  NH2 ARG A 744      13.455  79.978  56.344  1.00 61.68           N  
ATOM   5582  N   LYS A 745       9.709  85.823  59.055  1.00 84.54           N  
ATOM   5583  CA  LYS A 745       9.749  86.832  60.072  1.00 89.65           C  
ATOM   5584  C   LYS A 745       8.438  87.515  60.149  1.00 89.06           C  
ATOM   5585  O   LYS A 745       7.794  87.510  61.174  1.00 97.69           O  
ATOM   5586  CB  LYS A 745      10.775  87.883  59.683  1.00 91.68           C  
ATOM   5587  CG  LYS A 745      11.873  88.182  60.682  1.00 96.82           C  
ATOM   5588  CD  LYS A 745      12.883  89.162  60.082  1.00 98.81           C  
ATOM   5589  CE  LYS A 745      14.185  88.496  59.626  1.00 96.46           C  
ATOM   5590  NZ  LYS A 745      14.949  89.260  58.586  1.00 90.80           N  
ATOM   5591  N   VAL A 746       8.037  88.124  59.056  1.00 77.75           N  
ATOM   5592  CA  VAL A 746       6.833  88.905  59.068  1.00 74.69           C  
ATOM   5593  C   VAL A 746       5.515  88.126  59.126  1.00 71.73           C  
ATOM   5594  O   VAL A 746       4.507  88.691  59.474  1.00 63.70           O  
ATOM   5595  CB  VAL A 746       6.818  89.844  57.854  1.00 79.31           C  
ATOM   5596  CG1 VAL A 746       5.535  90.647  57.786  1.00 80.85           C  
ATOM   5597  CG2 VAL A 746       8.026  90.759  57.846  1.00 75.84           C  
ATOM   5598  N   TYR A 747       5.498  86.838  58.799  1.00 74.21           N  
ATOM   5599  CA  TYR A 747       4.271  86.262  58.238  1.00 70.20           C  
ATOM   5600  C   TYR A 747       3.443  85.047  58.729  1.00 70.32           C  
ATOM   5601  O   TYR A 747       2.227  85.119  58.765  1.00 65.83           O  
ATOM   5602  CB  TYR A 747       4.452  86.177  56.740  1.00 63.04           C  
ATOM   5603  CG  TYR A 747       4.139  87.458  56.049  1.00 54.75           C  
ATOM   5604  CD1 TYR A 747       2.871  87.907  55.973  1.00 57.33           C  
ATOM   5605  CD2 TYR A 747       5.105  88.183  55.440  1.00 54.00           C  
ATOM   5606  CE1 TYR A 747       2.573  89.064  55.322  1.00 56.41           C  
ATOM   5607  CE2 TYR A 747       4.817  89.341  54.785  1.00 49.82           C  
ATOM   5608  CZ  TYR A 747       3.550  89.774  54.734  1.00 51.38           C  
ATOM   5609  OH  TYR A 747       3.233  90.919  54.085  1.00 47.50           O  
ATOM   5610  N   HIS A 748       4.028  83.904  58.991  1.00 81.63           N  
ATOM   5611  CA  HIS A 748       5.405  83.723  59.204  1.00 85.20           C  
ATOM   5612  C   HIS A 748       5.833  82.382  58.594  1.00 93.49           C  
ATOM   5613  O   HIS A 748       6.158  81.439  59.308  1.00 95.86           O  
ATOM   5614  CB  HIS A 748       5.626  83.682  60.710  1.00 89.41           C  
ATOM   5615  CG  HIS A 748       4.847  84.673  61.510  1.00 88.48           C  
ATOM   5616  ND1 HIS A 748       5.455  85.679  62.223  1.00 86.98           N  
ATOM   5617  CD2 HIS A 748       3.532  84.756  61.792  1.00 85.38           C  
ATOM   5618  CE1 HIS A 748       4.541  86.368  62.870  1.00 81.71           C  
ATOM   5619  NE2 HIS A 748       3.366  85.823  62.632  1.00 83.48           N  
ATOM   5620  N   ARG A 749       5.852  82.277  57.267  1.00101.29           N  
ATOM   5621  CA  ARG A 749       6.465  81.105  56.591  1.00 93.90           C  
ATOM   5622  C   ARG A 749       6.918  81.365  55.168  1.00 87.22           C  
ATOM   5623  O   ARG A 749       6.805  82.472  54.688  1.00 75.85           O  
ATOM   5624  CB  ARG A 749       5.545  79.889  56.609  1.00 91.71           C  
ATOM   5625  CG  ARG A 749       4.510  79.875  55.537  1.00 86.57           C  
ATOM   5626  CD  ARG A 749       3.361  80.729  55.978  1.00 91.30           C  
ATOM   5627  NE  ARG A 749       2.118  80.221  55.421  1.00 97.39           N  
ATOM   5628  CZ  ARG A 749       1.451  79.183  55.907  1.00 99.34           C  
ATOM   5629  NH1 ARG A 749       1.889  78.539  56.980  1.00 94.18           N  
ATOM   5630  NH2 ARG A 749       0.338  78.791  55.313  1.00101.95           N  
ATOM   5631  N   VAL A 750       7.420  80.336  54.491  1.00 88.27           N  
ATOM   5632  CA  VAL A 750       7.811  80.496  53.104  1.00 88.85           C  
ATOM   5633  C   VAL A 750       6.641  80.502  52.129  1.00 82.82           C  
ATOM   5634  O   VAL A 750       6.257  81.532  51.613  1.00 81.80           O  
ATOM   5635  CB  VAL A 750       8.764  79.389  52.682  1.00 91.83           C  
ATOM   5636  CG1 VAL A 750       9.174  79.560  51.228  1.00 95.51           C  
ATOM   5637  CG2 VAL A 750       9.972  79.386  53.578  1.00 91.90           C  
ATOM   5638  N   LYS A 751       6.114  79.326  51.868  1.00 69.10           N  
ATOM   5639  CA  LYS A 751       5.113  79.145  50.875  1.00 62.10           C  
ATOM   5640  C   LYS A 751       3.705  79.285  51.399  1.00 55.68           C  
ATOM   5641  O   LYS A 751       3.394  78.871  52.488  1.00 54.55           O  
ATOM   5642  CB  LYS A 751       5.239  77.747  50.357  1.00 67.03           C  
ATOM   5643  CG  LYS A 751       6.144  77.529  49.184  1.00 74.61           C  
ATOM   5644  CD  LYS A 751       6.582  76.087  49.184  1.00 81.28           C  
ATOM   5645  CE  LYS A 751       5.391  75.135  49.224  1.00 87.37           C  
ATOM   5646  NZ  LYS A 751       5.415  74.113  50.312  1.00 89.42           N  
ATOM   5647  N   VAL A 752       2.848  79.837  50.572  1.00 46.28           N  
ATOM   5648  CA  VAL A 752       1.429  79.714  50.712  1.00 44.57           C  
ATOM   5649  C   VAL A 752       1.013  78.978  49.452  1.00 41.49           C  
ATOM   5650  O   VAL A 752       1.492  79.251  48.392  1.00 38.16           O  
ATOM   5651  CB  VAL A 752       0.722  81.071  50.808  1.00 43.76           C  
ATOM   5652  CG1 VAL A 752      -0.757  80.890  50.970  1.00 38.88           C  
ATOM   5653  CG2 VAL A 752       1.285  81.901  51.935  1.00 46.59           C  
ATOM   5654  N   SER A 753       0.134  78.023  49.592  1.00 36.09           N  
ATOM   5655  CA  SER A 753      -0.212  77.147  48.497  1.00 36.64           C  
ATOM   5656  C   SER A 753      -1.663  77.437  48.214  1.00 35.38           C  
ATOM   5657  O   SER A 753      -2.408  77.654  49.130  1.00 33.24           O  
ATOM   5658  CB  SER A 753      -0.001  75.686  48.926  1.00 38.08           C  
ATOM   5659  OG  SER A 753      -0.525  74.780  47.982  1.00 46.97           O  
ATOM   5660  N   GLU A 754      -2.060  77.486  46.949  1.00 33.56           N  
ATOM   5661  CA  GLU A 754      -3.450  77.690  46.641  1.00 33.61           C  
ATOM   5662  C   GLU A 754      -3.775  76.945  45.374  1.00 34.46           C  
ATOM   5663  O   GLU A 754      -3.024  77.036  44.393  1.00 30.57           O  
ATOM   5664  CB  GLU A 754      -3.728  79.175  46.429  1.00 36.71           C  
ATOM   5665  CG  GLU A 754      -5.211  79.538  46.457  1.00 41.91           C  
ATOM   5666  CD  GLU A 754      -5.444  81.000  46.153  1.00 45.54           C  
ATOM   5667  OE1 GLU A 754      -4.700  81.865  46.683  1.00 45.42           O  
ATOM   5668  OE2 GLU A 754      -6.350  81.282  45.358  1.00 46.49           O  
ATOM   5669  N   ILE A 755      -4.903  76.239  45.399  1.00 30.70           N  
ATOM   5670  CA  ILE A 755      -5.431  75.575  44.237  1.00 31.64           C  
ATOM   5671  C   ILE A 755      -6.558  76.418  43.644  1.00 30.53           C  
ATOM   5672  O   ILE A 755      -7.439  76.874  44.366  1.00 36.09           O  
ATOM   5673  CB  ILE A 755      -5.990  74.184  44.606  1.00 31.76           C  
ATOM   5674  CG1 ILE A 755      -4.853  73.260  45.085  1.00 35.38           C  
ATOM   5675  CG2 ILE A 755      -6.688  73.567  43.413  1.00 34.09           C  
ATOM   5676  CD1 ILE A 755      -5.350  72.005  45.814  1.00 33.47           C  
ATOM   5677  N   VAL A 756      -6.544  76.598  42.330  1.00 29.70           N  
ATOM   5678  CA  VAL A 756      -7.563  77.352  41.586  1.00 29.70           C  
ATOM   5679  C   VAL A 756      -8.069  76.470  40.446  1.00 30.43           C  
ATOM   5680  O   VAL A 756      -7.277  75.935  39.641  1.00 26.94           O  
ATOM   5681  CB  VAL A 756      -6.956  78.611  40.971  1.00 30.80           C  
ATOM   5682  CG1 VAL A 756      -7.935  79.323  40.059  1.00 30.28           C  
ATOM   5683  CG2 VAL A 756      -6.480  79.545  42.058  1.00 32.72           C  
ATOM   5684  N   GLU A 757      -9.370  76.309  40.356  1.00 26.91           N  
ATOM   5685  CA  GLU A 757      -9.944  75.587  39.235  1.00 36.19           C  
ATOM   5686  C   GLU A 757      -9.863  76.431  37.963  1.00 34.02           C  
ATOM   5687  O   GLU A 757     -10.079  77.625  37.997  1.00 35.63           O  
ATOM   5688  CB  GLU A 757     -11.390  75.125  39.514  1.00 43.00           C  
ATOM   5689  CG  GLU A 757     -11.890  74.042  38.515  1.00 55.66           C  
ATOM   5690  CD  GLU A 757     -12.800  72.953  39.149  1.00 62.32           C  
ATOM   5691  OE1 GLU A 757     -13.843  73.291  39.776  1.00 63.15           O  
ATOM   5692  OE2 GLU A 757     -12.473  71.751  39.025  1.00 51.79           O  
ATOM   5693  N   ARG A 758      -9.473  75.816  36.860  1.00 30.35           N  
ATOM   5694  CA  ARG A 758      -9.349  76.526  35.597  1.00 28.73           C  
ATOM   5695  C   ARG A 758      -9.999  75.764  34.465  1.00 25.84           C  
ATOM   5696  O   ARG A 758     -10.316  74.604  34.570  1.00 20.63           O  
ATOM   5697  CB  ARG A 758      -7.890  76.683  35.275  1.00 30.27           C  
ATOM   5698  CG  ARG A 758      -7.147  77.580  36.247  1.00 32.73           C  
ATOM   5699  CD  ARG A 758      -6.885  78.946  35.660  1.00 34.12           C  
ATOM   5700  NE  ARG A 758      -5.451  79.221  35.818  1.00 41.61           N  
ATOM   5701  CZ  ARG A 758      -4.594  79.476  34.832  1.00 51.30           C  
ATOM   5702  NH1 ARG A 758      -4.996  79.504  33.557  1.00 58.46           N  
ATOM   5703  NH2 ARG A 758      -3.308  79.704  35.119  1.00 55.97           N  
ATOM   5704  N   GLU A 759     -10.102  76.439  33.344  1.00 27.60           N  
ATOM   5705  CA  GLU A 759     -10.786  75.938  32.192  1.00 28.21           C  
ATOM   5706  C   GLU A 759     -10.012  76.347  30.991  1.00 24.75           C  
ATOM   5707  O   GLU A 759      -9.534  77.459  30.917  1.00 20.92           O  
ATOM   5708  CB  GLU A 759     -12.127  76.664  32.015  1.00 33.54           C  
ATOM   5709  CG  GLU A 759     -13.357  75.918  32.451  1.00 42.27           C  
ATOM   5710  CD  GLU A 759     -14.591  76.502  31.776  1.00 52.17           C  
ATOM   5711  OE1 GLU A 759     -14.833  77.740  31.943  1.00 62.68           O  
ATOM   5712  OE2 GLU A 759     -15.280  75.736  31.052  1.00 51.17           O  
ATOM   5713  N   ALA A 760     -10.000  75.458  30.016  1.00 24.97           N  
ATOM   5714  CA  ALA A 760      -9.353  75.717  28.765  1.00 23.84           C  
ATOM   5715  C   ALA A 760     -10.152  75.136  27.614  1.00 22.89           C  
ATOM   5716  O   ALA A 760     -10.914  74.177  27.754  1.00 23.38           O  
ATOM   5717  CB  ALA A 760      -7.959  75.149  28.794  1.00 23.96           C  
ATOM   5718  N   ILE A 761      -9.979  75.755  26.472  1.00 23.63           N  
ATOM   5719  CA  ILE A 761     -10.689  75.385  25.275  1.00 24.10           C  
ATOM   5720  C   ILE A 761      -9.768  74.456  24.537  1.00 23.09           C  
ATOM   5721  O   ILE A 761      -8.618  74.803  24.261  1.00 21.35           O  
ATOM   5722  CB  ILE A 761     -10.872  76.602  24.365  1.00 26.07           C  
ATOM   5723  CG1 ILE A 761     -11.911  77.584  24.918  1.00 31.99           C  
ATOM   5724  CG2 ILE A 761     -11.344  76.147  23.005  1.00 28.88           C  
ATOM   5725  CD1 ILE A 761     -11.932  77.696  26.427  1.00 34.43           C  
ATOM   5726  N   VAL A 762     -10.265  73.300  24.171  1.00 21.26           N  
ATOM   5727  CA  VAL A 762      -9.501  72.403  23.334  1.00 21.80           C  
ATOM   5728  C   VAL A 762     -10.166  72.340  21.971  1.00 20.00           C  
ATOM   5729  O   VAL A 762     -11.221  71.764  21.848  1.00 20.84           O  
ATOM   5730  CB  VAL A 762      -9.455  70.986  23.942  1.00 22.28           C  
ATOM   5731  CG1 VAL A 762      -8.588  70.039  23.117  1.00 22.61           C  
ATOM   5732  CG2 VAL A 762      -8.968  71.069  25.377  1.00 24.01           C  
ATOM   5733  N   CYS A 763      -9.529  72.899  20.952  1.00 21.05           N  
ATOM   5734  CA  CYS A 763     -10.123  72.943  19.597  1.00 18.78           C  
ATOM   5735  C   CYS A 763     -10.141  71.522  19.058  1.00 18.30           C  
ATOM   5736  O   CYS A 763      -9.093  70.834  19.050  1.00 18.20           O  
ATOM   5737  CB  CYS A 763      -9.301  73.876  18.674  1.00 19.16           C  
ATOM   5738  SG  CYS A 763      -9.660  73.820  16.865  1.00 23.76           S  
ATOM   5739  N   GLN A 764     -11.302  71.105  18.567  1.00 18.39           N  
ATOM   5740  CA  GLN A 764     -11.529  69.764  18.039  1.00 18.48           C  
ATOM   5741  C   GLN A 764     -11.255  69.545  16.560  1.00 19.29           C  
ATOM   5742  O   GLN A 764     -11.371  68.403  16.113  1.00 21.07           O  
ATOM   5743  CB  GLN A 764     -12.955  69.271  18.375  1.00 17.84           C  
ATOM   5744  CG  GLN A 764     -13.205  69.222  19.856  1.00 18.99           C  
ATOM   5745  CD  GLN A 764     -12.370  68.142  20.528  1.00 18.86           C  
ATOM   5746  OE1 GLN A 764     -12.501  66.966  20.225  1.00 16.36           O  
ATOM   5747  NE2 GLN A 764     -11.454  68.559  21.345  1.00 17.90           N  
ATOM   5748  N   ARG A 765     -10.801  70.573  15.854  1.00 22.16           N  
ATOM   5749  CA  ARG A 765     -10.455  70.491  14.408  1.00 26.03           C  
ATOM   5750  C   ARG A 765      -8.961  70.735  14.096  1.00 25.49           C  
ATOM   5751  O   ARG A 765      -8.569  70.681  12.929  1.00 26.12           O  
ATOM   5752  CB  ARG A 765     -11.239  71.581  13.652  1.00 26.11           C  
ATOM   5753  CG  ARG A 765     -12.719  71.301  13.657  1.00 28.83           C  
ATOM   5754  CD  ARG A 765     -13.492  72.551  13.397  1.00 33.84           C  
ATOM   5755  NE  ARG A 765     -13.314  73.091  12.067  1.00 34.96           N  
ATOM   5756  CZ  ARG A 765     -14.221  73.010  11.084  1.00 43.68           C  
ATOM   5757  NH1 ARG A 765     -15.388  72.371  11.250  1.00 44.42           N  
ATOM   5758  NH2 ARG A 765     -13.958  73.577   9.902  1.00 41.67           N  
ATOM   5759  N   GLU A 766      -8.145  71.052  15.107  1.00 23.26           N  
ATOM   5760  CA  GLU A 766      -6.742  71.393  14.887  1.00 23.45           C  
ATOM   5761  C   GLU A 766      -5.986  70.188  14.296  1.00 21.82           C  
ATOM   5762  O   GLU A 766      -6.340  69.005  14.551  1.00 20.09           O  
ATOM   5763  CB  GLU A 766      -6.074  71.803  16.203  1.00 26.26           C  
ATOM   5764  CG  GLU A 766      -4.628  72.261  16.063  1.00 26.44           C  
ATOM   5765  CD  GLU A 766      -4.458  73.425  15.088  1.00 28.73           C  
ATOM   5766  OE1 GLU A 766      -4.644  74.601  15.521  1.00 31.59           O  
ATOM   5767  OE2 GLU A 766      -4.164  73.142  13.878  1.00 26.30           O  
ATOM   5768  N   ASN A 767      -4.992  70.493  13.476  1.00 19.28           N  
ATOM   5769  CA  ASN A 767      -4.146  69.470  12.893  1.00 19.68           C  
ATOM   5770  C   ASN A 767      -3.772  68.435  13.920  1.00 18.86           C  
ATOM   5771  O   ASN A 767      -3.139  68.780  14.881  1.00 20.41           O  
ATOM   5772  CB  ASN A 767      -2.897  70.114  12.374  1.00 19.20           C  
ATOM   5773  CG  ASN A 767      -2.049  69.149  11.548  1.00 23.95           C  
ATOM   5774  OD1 ASN A 767      -1.693  68.015  11.972  1.00 20.68           O  
ATOM   5775  ND2 ASN A 767      -1.706  69.596  10.350  1.00 22.52           N  
ATOM   5776  N   PRO A 768      -4.106  67.174  13.723  1.00 18.09           N  
ATOM   5777  CA  PRO A 768      -3.889  66.288  14.857  1.00 18.15           C  
ATOM   5778  C   PRO A 768      -2.555  65.550  14.902  1.00 18.41           C  
ATOM   5779  O   PRO A 768      -2.483  64.436  15.385  1.00 19.00           O  
ATOM   5780  CB  PRO A 768      -5.009  65.281  14.700  1.00 18.92           C  
ATOM   5781  CG  PRO A 768      -5.168  65.116  13.186  1.00 19.09           C  
ATOM   5782  CD  PRO A 768      -4.843  66.490  12.634  1.00 20.87           C  
ATOM   5783  N   PHE A 769      -1.458  66.177  14.514  1.00 18.67           N  
ATOM   5784  CA  PHE A 769      -0.224  65.375  14.299  1.00 17.70           C  
ATOM   5785  C   PHE A 769       0.315  64.853  15.635  1.00 17.26           C  
ATOM   5786  O   PHE A 769       0.942  63.803  15.676  1.00 17.61           O  
ATOM   5787  CB  PHE A 769       0.844  66.192  13.558  1.00 16.42           C  
ATOM   5788  CG  PHE A 769       1.593  67.077  14.457  1.00 15.51           C  
ATOM   5789  CD1 PHE A 769       1.049  68.239  14.877  1.00 16.50           C  
ATOM   5790  CD2 PHE A 769       2.750  66.652  15.005  1.00 16.19           C  
ATOM   5791  CE1 PHE A 769       1.709  69.037  15.779  1.00 18.57           C  
ATOM   5792  CE2 PHE A 769       3.458  67.438  15.852  1.00 17.63           C  
ATOM   5793  CZ  PHE A 769       2.922  68.622  16.291  1.00 17.45           C  
ATOM   5794  N   TYR A 770       0.116  65.619  16.716  1.00 17.24           N  
ATOM   5795  CA  TYR A 770       0.652  65.259  17.994  1.00 16.27           C  
ATOM   5796  C   TYR A 770      -0.115  64.066  18.543  1.00 16.78           C  
ATOM   5797  O   TYR A 770       0.466  62.985  18.787  1.00 16.07           O  
ATOM   5798  CB  TYR A 770       0.672  66.422  18.933  1.00 17.06           C  
ATOM   5799  CG  TYR A 770       1.467  66.210  20.235  1.00 16.83           C  
ATOM   5800  CD1 TYR A 770       1.021  65.367  21.204  1.00 18.25           C  
ATOM   5801  CD2 TYR A 770       2.595  66.983  20.523  1.00 18.17           C  
ATOM   5802  CE1 TYR A 770       1.736  65.185  22.388  1.00 19.94           C  
ATOM   5803  CE2 TYR A 770       3.281  66.841  21.731  1.00 17.91           C  
ATOM   5804  CZ  TYR A 770       2.843  65.924  22.643  1.00 18.27           C  
ATOM   5805  OH  TYR A 770       3.513  65.749  23.831  1.00 19.60           O  
ATOM   5806  N   VAL A 771      -1.432  64.200  18.645  1.00 18.24           N  
ATOM   5807  CA  VAL A 771      -2.246  63.123  19.208  1.00 19.61           C  
ATOM   5808  C   VAL A 771      -2.187  61.881  18.346  1.00 19.81           C  
ATOM   5809  O   VAL A 771      -2.240  60.764  18.851  1.00 20.93           O  
ATOM   5810  CB  VAL A 771      -3.689  63.637  19.509  1.00 22.31           C  
ATOM   5811  CG1 VAL A 771      -4.440  63.938  18.244  1.00 23.64           C  
ATOM   5812  CG2 VAL A 771      -4.456  62.644  20.338  1.00 22.83           C  
ATOM   5813  N   ASP A 772      -2.045  62.040  17.037  1.00 19.97           N  
ATOM   5814  CA  ASP A 772      -1.901  60.860  16.131  1.00 21.25           C  
ATOM   5815  C   ASP A 772      -0.577  60.074  16.399  1.00 18.87           C  
ATOM   5816  O   ASP A 772      -0.557  58.828  16.371  1.00 16.89           O  
ATOM   5817  CB  ASP A 772      -1.967  61.276  14.662  1.00 23.06           C  
ATOM   5818  CG  ASP A 772      -3.385  61.674  14.193  1.00 28.33           C  
ATOM   5819  OD1 ASP A 772      -4.378  61.536  14.965  1.00 32.77           O  
ATOM   5820  OD2 ASP A 772      -3.501  62.095  12.998  1.00 31.60           O  
ATOM   5821  N   THR A 773       0.475  60.805  16.745  1.00 17.98           N  
ATOM   5822  CA  THR A 773       1.749  60.210  17.180  1.00 18.59           C  
ATOM   5823  C   THR A 773       1.619  59.375  18.462  1.00 18.25           C  
ATOM   5824  O   THR A 773       2.148  58.277  18.529  1.00 18.50           O  
ATOM   5825  CB  THR A 773       2.827  61.284  17.376  1.00 17.73           C  
ATOM   5826  OG1 THR A 773       2.928  62.054  16.195  1.00 17.04           O  
ATOM   5827  CG2 THR A 773       4.177  60.633  17.686  1.00 18.23           C  
ATOM   5828  N   VAL A 774       0.720  59.794  19.355  1.00 20.32           N  
ATOM   5829  CA  VAL A 774       0.472  59.118  20.645  1.00 18.33           C  
ATOM   5830  C   VAL A 774      -0.355  57.888  20.426  1.00 19.90           C  
ATOM   5831  O   VAL A 774      -0.007  56.771  20.923  1.00 17.85           O  
ATOM   5832  CB  VAL A 774      -0.270  60.067  21.614  1.00 19.27           C  
ATOM   5833  CG1 VAL A 774      -0.728  59.387  22.881  1.00 19.54           C  
ATOM   5834  CG2 VAL A 774       0.553  61.298  21.910  1.00 18.65           C  
ATOM   5835  N   LYS A 775      -1.451  58.046  19.681  1.00 20.55           N  
ATOM   5836  CA  LYS A 775      -2.235  56.860  19.263  1.00 21.96           C  
ATOM   5837  C   LYS A 775      -1.386  55.756  18.609  1.00 21.73           C  
ATOM   5838  O   LYS A 775      -1.551  54.542  18.848  1.00 23.27           O  
ATOM   5839  CB  LYS A 775      -3.352  57.269  18.291  1.00 28.25           C  
ATOM   5840  CG  LYS A 775      -4.311  56.143  17.857  1.00 33.43           C  
ATOM   5841  CD  LYS A 775      -5.541  56.639  17.074  1.00 39.79           C  
ATOM   5842  CE  LYS A 775      -6.359  57.751  17.806  1.00 51.44           C  
ATOM   5843  NZ  LYS A 775      -7.801  57.993  17.346  1.00 53.69           N  
ATOM   5844  N   SER A 776      -0.523  56.155  17.706  1.00 19.62           N  
ATOM   5845  CA  SER A 776       0.239  55.165  16.964  1.00 21.35           C  
ATOM   5846  C   SER A 776       1.243  54.435  17.916  1.00 18.77           C  
ATOM   5847  O   SER A 776       1.381  53.229  17.878  1.00 20.72           O  
ATOM   5848  CB  SER A 776       0.955  55.863  15.798  1.00 21.60           C  
ATOM   5849  OG  SER A 776       2.040  55.082  15.491  1.00 25.23           O  
ATOM   5850  N   PHE A 777       1.882  55.168  18.821  1.00 18.76           N  
ATOM   5851  CA  PHE A 777       2.770  54.550  19.793  1.00 18.38           C  
ATOM   5852  C   PHE A 777       1.976  53.694  20.746  1.00 19.47           C  
ATOM   5853  O   PHE A 777       2.401  52.593  21.084  1.00 18.90           O  
ATOM   5854  CB  PHE A 777       3.645  55.566  20.519  1.00 16.97           C  
ATOM   5855  CG  PHE A 777       4.930  54.980  21.074  1.00 16.64           C  
ATOM   5856  CD1 PHE A 777       6.034  54.839  20.287  1.00 18.06           C  
ATOM   5857  CD2 PHE A 777       5.032  54.569  22.393  1.00 17.38           C  
ATOM   5858  CE1 PHE A 777       7.198  54.291  20.781  1.00 17.11           C  
ATOM   5859  CE2 PHE A 777       6.181  53.973  22.868  1.00 16.79           C  
ATOM   5860  CZ  PHE A 777       7.272  53.872  22.065  1.00 16.85           C  
ATOM   5861  N   ARG A 778       0.826  54.179  21.184  1.00 18.77           N  
ATOM   5862  CA  ARG A 778      -0.078  53.350  22.011  1.00 20.69           C  
ATOM   5863  C   ARG A 778      -0.434  51.972  21.381  1.00 20.55           C  
ATOM   5864  O   ARG A 778      -0.410  50.929  22.081  1.00 20.84           O  
ATOM   5865  CB  ARG A 778      -1.336  54.156  22.378  1.00 22.05           C  
ATOM   5866  CG  ARG A 778      -2.259  53.424  23.283  1.00 23.12           C  
ATOM   5867  CD  ARG A 778      -3.446  53.015  22.495  1.00 28.99           C  
ATOM   5868  NE  ARG A 778      -4.251  54.156  22.347  1.00 35.84           N  
ATOM   5869  CZ  ARG A 778      -5.131  54.339  21.375  1.00 40.54           C  
ATOM   5870  NH1 ARG A 778      -5.324  53.444  20.408  1.00 48.61           N  
ATOM   5871  NH2 ARG A 778      -5.818  55.452  21.385  1.00 39.95           N  
ATOM   5872  N   ASP A 779      -0.687  51.958  20.076  1.00 19.19           N  
ATOM   5873  CA  ASP A 779      -0.987  50.707  19.364  1.00 19.98           C  
ATOM   5874  C   ASP A 779       0.237  49.830  19.308  1.00 19.15           C  
ATOM   5875  O   ASP A 779       0.140  48.633  19.464  1.00 18.32           O  
ATOM   5876  CB  ASP A 779      -1.536  50.962  17.957  1.00 20.61           C  
ATOM   5877  CG  ASP A 779      -2.916  51.703  17.975  1.00 25.17           C  
ATOM   5878  OD1 ASP A 779      -3.668  51.568  18.944  1.00 28.46           O  
ATOM   5879  OD2 ASP A 779      -3.239  52.452  17.034  1.00 28.73           O  
ATOM   5880  N   ARG A 780       1.393  50.438  19.122  1.00 18.45           N  
ATOM   5881  CA  ARG A 780       2.640  49.717  19.158  1.00 20.20           C  
ATOM   5882  C   ARG A 780       2.827  49.040  20.527  1.00 23.31           C  
ATOM   5883  O   ARG A 780       3.150  47.845  20.623  1.00 22.49           O  
ATOM   5884  CB  ARG A 780       3.744  50.694  18.785  1.00 22.50           C  
ATOM   5885  CG  ARG A 780       5.141  50.179  18.730  1.00 25.31           C  
ATOM   5886  CD  ARG A 780       6.105  51.311  18.401  1.00 26.33           C  
ATOM   5887  NE  ARG A 780       5.832  51.955  17.108  1.00 25.22           N  
ATOM   5888  CZ  ARG A 780       6.152  51.450  15.914  1.00 24.95           C  
ATOM   5889  NH1 ARG A 780       6.718  50.242  15.778  1.00 24.56           N  
ATOM   5890  NH2 ARG A 780       5.852  52.138  14.848  1.00 24.75           N  
ATOM   5891  N   ARG A 781       2.558  49.761  21.607  1.00 26.00           N  
ATOM   5892  CA  ARG A 781       2.592  49.137  22.896  1.00 24.07           C  
ATOM   5893  C   ARG A 781       1.595  48.022  23.122  1.00 26.59           C  
ATOM   5894  O   ARG A 781       1.984  46.972  23.703  1.00 24.31           O  
ATOM   5895  CB  ARG A 781       2.407  50.128  24.027  1.00 24.80           C  
ATOM   5896  CG  ARG A 781       2.497  49.375  25.360  1.00 24.30           C  
ATOM   5897  CD  ARG A 781       2.178  50.264  26.503  1.00 25.41           C  
ATOM   5898  NE  ARG A 781       2.189  49.545  27.753  1.00 23.45           N  
ATOM   5899  CZ  ARG A 781       1.315  49.695  28.735  1.00 21.48           C  
ATOM   5900  NH1 ARG A 781       0.267  50.484  28.603  1.00 26.07           N  
ATOM   5901  NH2 ARG A 781       1.467  48.995  29.835  1.00 19.68           N  
ATOM   5902  N   TYR A 782       0.321  48.229  22.770  1.00 28.90           N  
ATOM   5903  CA  TYR A 782      -0.692  47.146  22.941  1.00 34.18           C  
ATOM   5904  C   TYR A 782      -0.298  45.783  22.326  1.00 35.00           C  
ATOM   5905  O   TYR A 782      -0.558  44.730  22.916  1.00 34.81           O  
ATOM   5906  CB  TYR A 782      -2.110  47.526  22.417  1.00 36.90           C  
ATOM   5907  CG  TYR A 782      -2.895  48.523  23.288  1.00 49.62           C  
ATOM   5908  CD1 TYR A 782      -2.451  48.950  24.586  1.00 54.80           C  
ATOM   5909  CD2 TYR A 782      -4.078  49.052  22.821  1.00 51.52           C  
ATOM   5910  CE1 TYR A 782      -3.192  49.855  25.323  1.00 46.07           C  
ATOM   5911  CE2 TYR A 782      -4.791  49.971  23.549  1.00 45.67           C  
ATOM   5912  CZ  TYR A 782      -4.354  50.345  24.755  1.00 39.04           C  
ATOM   5913  OH  TYR A 782      -5.121  51.210  25.344  1.00 36.72           O  
ATOM   5914  N   GLU A 783       0.306  45.774  21.147  1.00 38.11           N  
ATOM   5915  CA  GLU A 783       0.751  44.493  20.579  1.00 40.84           C  
ATOM   5916  C   GLU A 783       1.500  43.636  21.624  1.00 35.90           C  
ATOM   5917  O   GLU A 783       1.248  42.469  21.743  1.00 34.47           O  
ATOM   5918  CB  GLU A 783       1.684  44.724  19.403  1.00 48.59           C  
ATOM   5919  CG  GLU A 783       1.016  45.325  18.173  1.00 58.92           C  
ATOM   5920  CD  GLU A 783       0.081  44.341  17.506  1.00 64.50           C  
ATOM   5921  OE1 GLU A 783       0.532  43.630  16.566  1.00 69.90           O  
ATOM   5922  OE2 GLU A 783      -1.084  44.265  17.962  1.00 68.25           O  
ATOM   5923  N   PHE A 784       2.446  44.232  22.341  1.00 31.67           N  
ATOM   5924  CA  PHE A 784       3.299  43.511  23.267  1.00 34.18           C  
ATOM   5925  C   PHE A 784       2.571  43.209  24.590  1.00 42.76           C  
ATOM   5926  O   PHE A 784       2.784  42.129  25.190  1.00 39.33           O  
ATOM   5927  CB  PHE A 784       4.612  44.264  23.571  1.00 30.64           C  
ATOM   5928  CG  PHE A 784       5.424  44.573  22.354  1.00 32.08           C  
ATOM   5929  CD1 PHE A 784       5.848  43.542  21.508  1.00 35.59           C  
ATOM   5930  CD2 PHE A 784       5.747  45.873  22.034  1.00 30.08           C  
ATOM   5931  CE1 PHE A 784       6.580  43.816  20.381  1.00 32.66           C  
ATOM   5932  CE2 PHE A 784       6.478  46.148  20.902  1.00 32.16           C  
ATOM   5933  CZ  PHE A 784       6.886  45.126  20.068  1.00 32.67           C  
ATOM   5934  N   LYS A 785       1.800  44.202  25.070  1.00 42.09           N  
ATOM   5935  CA  LYS A 785       0.844  44.006  26.158  1.00 41.30           C  
ATOM   5936  C   LYS A 785      -0.090  42.814  25.827  1.00 39.54           C  
ATOM   5937  O   LYS A 785      -0.314  41.982  26.699  1.00 39.15           O  
ATOM   5938  CB  LYS A 785       0.074  45.308  26.422  1.00 40.67           C  
ATOM   5939  CG  LYS A 785      -0.633  45.374  27.740  1.00 41.83           C  
ATOM   5940  CD  LYS A 785      -1.326  46.699  27.961  1.00 44.02           C  
ATOM   5941  CE  LYS A 785      -2.001  46.640  29.321  1.00 50.82           C  
ATOM   5942  NZ  LYS A 785      -2.864  47.822  29.579  1.00 54.85           N  
ATOM   5943  N   GLY A 786      -0.564  42.693  24.577  1.00 37.76           N  
ATOM   5944  CA  GLY A 786      -1.433  41.566  24.192  1.00 38.40           C  
ATOM   5945  C   GLY A 786      -0.599  40.276  24.270  1.00 45.46           C  
ATOM   5946  O   GLY A 786      -0.976  39.315  24.942  1.00 39.71           O  
ATOM   5947  N   LEU A 787       0.573  40.255  23.618  1.00 45.58           N  
ATOM   5948  CA  LEU A 787       1.410  39.037  23.639  1.00 46.49           C  
ATOM   5949  C   LEU A 787       1.781  38.594  25.056  1.00 41.35           C  
ATOM   5950  O   LEU A 787       1.616  37.442  25.390  1.00 44.77           O  
ATOM   5951  CB  LEU A 787       2.674  39.183  22.774  1.00 49.74           C  
ATOM   5952  CG  LEU A 787       2.402  39.195  21.271  1.00 50.17           C  
ATOM   5953  CD1 LEU A 787       3.592  39.735  20.482  1.00 52.10           C  
ATOM   5954  CD2 LEU A 787       2.036  37.804  20.791  1.00 53.70           C  
ATOM   5955  N   ALA A 788       2.261  39.501  25.891  1.00 41.86           N  
ATOM   5956  CA  ALA A 788       2.444  39.211  27.314  1.00 43.09           C  
ATOM   5957  C   ALA A 788       1.270  38.392  27.873  1.00 49.77           C  
ATOM   5958  O   ALA A 788       1.495  37.305  28.458  1.00 49.44           O  
ATOM   5959  CB  ALA A 788       2.610  40.491  28.123  1.00 40.73           C  
ATOM   5960  N   LYS A 789       0.048  38.908  27.660  1.00 45.85           N  
ATOM   5961  CA  LYS A 789      -1.201  38.294  28.139  1.00 51.72           C  
ATOM   5962  C   LYS A 789      -1.552  36.925  27.487  1.00 49.95           C  
ATOM   5963  O   LYS A 789      -2.024  36.027  28.195  1.00 52.24           O  
ATOM   5964  CB  LYS A 789      -2.373  39.275  27.961  1.00 55.18           C  
ATOM   5965  CG  LYS A 789      -3.633  38.903  28.744  1.00 61.91           C  
ATOM   5966  CD  LYS A 789      -4.857  39.686  28.275  1.00 66.46           C  
ATOM   5967  CE  LYS A 789      -5.211  39.407  26.809  1.00 68.96           C  
ATOM   5968  NZ  LYS A 789      -6.646  39.706  26.517  1.00 68.30           N  
ATOM   5969  N   THR A 790      -1.322  36.793  26.185  1.00 48.04           N  
ATOM   5970  CA  THR A 790      -1.612  35.552  25.477  1.00 48.42           C  
ATOM   5971  C   THR A 790      -0.750  34.408  25.999  1.00 51.57           C  
ATOM   5972  O   THR A 790      -1.222  33.282  26.152  1.00 47.04           O  
ATOM   5973  CB  THR A 790      -1.388  35.701  23.961  1.00 52.11           C  
ATOM   5974  OG1 THR A 790      -2.229  36.743  23.451  1.00 48.47           O  
ATOM   5975  CG2 THR A 790      -1.710  34.399  23.244  1.00 49.70           C  
ATOM   5976  N   TRP A 791       0.517  34.704  26.270  1.00 54.86           N  
ATOM   5977  CA  TRP A 791       1.447  33.703  26.778  1.00 51.65           C  
ATOM   5978  C   TRP A 791       1.077  33.278  28.195  1.00 52.22           C  
ATOM   5979  O   TRP A 791       1.206  32.108  28.557  1.00 44.73           O  
ATOM   5980  CB  TRP A 791       2.880  34.237  26.746  1.00 55.86           C  
ATOM   5981  CG  TRP A 791       3.592  33.965  25.456  1.00 58.38           C  
ATOM   5982  CD1 TRP A 791       4.170  34.884  24.630  1.00 60.03           C  
ATOM   5983  CD2 TRP A 791       3.803  32.687  24.844  1.00 65.39           C  
ATOM   5984  NE1 TRP A 791       4.727  34.257  23.541  1.00 60.70           N  
ATOM   5985  CE2 TRP A 791       4.516  32.908  23.649  1.00 62.00           C  
ATOM   5986  CE3 TRP A 791       3.458  31.377  25.191  1.00 65.57           C  
ATOM   5987  CZ2 TRP A 791       4.890  31.869  22.799  1.00 65.56           C  
ATOM   5988  CZ3 TRP A 791       3.831  30.347  24.346  1.00 70.89           C  
ATOM   5989  CH2 TRP A 791       4.539  30.599  23.165  1.00 71.84           C  
ATOM   5990  N   LYS A 792       0.617  34.236  28.993  1.00 56.32           N  
ATOM   5991  CA  LYS A 792       0.226  33.963  30.371  1.00 64.19           C  
ATOM   5992  C   LYS A 792      -0.909  32.946  30.429  1.00 65.89           C  
ATOM   5993  O   LYS A 792      -0.944  32.091  31.313  1.00 58.11           O  
ATOM   5994  CB  LYS A 792      -0.190  35.256  31.076  1.00 65.02           C  
ATOM   5995  CG  LYS A 792       0.960  36.001  31.733  1.00 67.43           C  
ATOM   5996  CD  LYS A 792       0.516  37.363  32.243  1.00 73.08           C  
ATOM   5997  CE  LYS A 792       1.248  38.486  31.528  1.00 73.21           C  
ATOM   5998  NZ  LYS A 792       2.323  39.075  32.373  1.00 65.38           N  
ATOM   5999  N   GLY A 793      -1.809  33.062  29.466  1.00 69.57           N  
ATOM   6000  CA  GLY A 793      -2.959  32.195  29.354  1.00 74.59           C  
ATOM   6001  C   GLY A 793      -2.599  30.786  28.938  1.00 82.84           C  
ATOM   6002  O   GLY A 793      -3.140  29.826  29.455  1.00 90.68           O  
ATOM   6003  N   ASN A 794      -1.655  30.666  28.021  1.00 78.73           N  
ATOM   6004  CA  ASN A 794      -1.181  29.384  27.514  1.00 74.82           C  
ATOM   6005  C   ASN A 794      -0.481  28.564  28.593  1.00 74.94           C  
ATOM   6006  O   ASN A 794      -0.648  27.346  28.666  1.00 69.94           O  
ATOM   6007  CB  ASN A 794      -0.244  29.592  26.322  1.00 72.34           C  
ATOM   6008  CG  ASN A 794      -0.765  30.629  25.346  1.00 69.95           C  
ATOM   6009  OD1 ASN A 794       0.009  31.331  24.696  1.00 75.14           O  
ATOM   6010  ND2 ASN A 794      -2.085  30.729  25.238  1.00 69.54           N  
ATOM   6011  N   LEU A 795       0.301  29.239  29.428  1.00 74.80           N  
ATOM   6012  CA  LEU A 795       1.025  28.575  30.506  1.00 79.83           C  
ATOM   6013  C   LEU A 795       0.068  28.056  31.573  1.00 87.18           C  
ATOM   6014  O   LEU A 795       0.468  27.318  32.474  1.00 92.67           O  
ATOM   6015  CB  LEU A 795       2.045  29.528  31.133  1.00 74.91           C  
ATOM   6016  CG  LEU A 795       2.960  28.932  32.204  1.00 74.98           C  
ATOM   6017  CD1 LEU A 795       4.386  28.815  31.688  1.00 68.77           C  
ATOM   6018  CD2 LEU A 795       2.913  29.766  33.476  1.00 76.35           C  
ATOM   6019  N   SER A 796      -1.201  28.430  31.467  1.00 92.53           N  
ATOM   6020  CA  SER A 796      -2.221  27.942  32.390  1.00 91.27           C  
ATOM   6021  C   SER A 796      -3.290  27.154  31.634  1.00 92.05           C  
ATOM   6022  O   SER A 796      -3.954  26.285  32.196  1.00 78.10           O  
ATOM   6023  CB  SER A 796      -2.872  29.112  33.123  1.00 92.56           C  
ATOM   6024  OG  SER A 796      -3.564  29.947  32.211  1.00101.39           O  
ATOM   6025  N   LYS A 797      -3.439  27.489  30.358  1.00108.34           N  
ATOM   6026  CA  LYS A 797      -4.469  26.936  29.478  1.00114.41           C  
ATOM   6027  C   LYS A 797      -4.557  25.416  29.533  1.00134.35           C  
ATOM   6028  O   LYS A 797      -5.654  24.811  29.749  1.00139.91           O  
ATOM   6029  CB  LYS A 797      -4.157  27.387  28.041  1.00107.74           C  
ATOM   6030  CG  LYS A 797      -4.911  26.663  26.945  1.00102.59           C  
ATOM   6031  CD  LYS A 797      -5.413  27.636  25.893  1.00 98.90           C  
ATOM   6032  CE  LYS A 797      -4.311  28.559  25.408  1.00 97.62           C  
ATOM   6033  NZ  LYS A 797      -4.868  29.698  24.611  1.00 92.50           N  
ATOM   6034  N   ILE A 798      -3.372  24.831  29.333  1.00149.25           N  
ATOM   6035  CA  ILE A 798      -3.135  23.398  29.223  1.00149.62           C  
ATOM   6036  C   ILE A 798      -1.629  23.130  29.335  1.00142.64           C  
ATOM   6037  O   ILE A 798      -1.223  22.005  29.611  1.00140.93           O  
ATOM   6038  CB  ILE A 798      -3.648  22.862  27.876  1.00153.27           C  
ATOM   6039  CG1 ILE A 798      -5.175  22.882  27.852  1.00148.63           C  
ATOM   6040  CG2 ILE A 798      -3.137  21.450  27.585  1.00146.48           C  
ATOM   6041  CD1 ILE A 798      -5.738  23.722  26.727  1.00140.51           C  
ATOM   6042  N   ASP A 799      -0.827  24.163  29.090  1.00128.63           N  
ATOM   6043  CA  ASP A 799       0.626  24.054  29.123  1.00124.58           C  
ATOM   6044  C   ASP A 799       1.323  23.995  30.480  1.00123.90           C  
ATOM   6045  O   ASP A 799       2.557  23.935  30.543  1.00132.66           O  
ATOM   6046  CB  ASP A 799       1.187  25.212  28.295  1.00125.62           C  
ATOM   6047  CG  ASP A 799       0.945  25.037  26.809  1.00129.44           C  
ATOM   6048  OD1 ASP A 799       0.605  23.911  26.389  1.00124.38           O  
ATOM   6049  OD2 ASP A 799       1.093  26.026  26.061  1.00133.46           O  
ATOM   6050  N   PRO A 800       0.541  24.010  31.555  1.00120.44           N  
ATOM   6051  CA  PRO A 800       1.096  23.979  32.913  1.00119.40           C  
ATOM   6052  C   PRO A 800       1.061  22.580  33.523  1.00116.16           C  
ATOM   6053  O   PRO A 800       1.442  22.403  34.680  1.00 87.41           O  
ATOM   6054  CB  PRO A 800       0.165  24.913  33.688  1.00111.17           C  
ATOM   6055  CG  PRO A 800      -1.133  24.829  32.960  1.00112.01           C  
ATOM   6056  CD  PRO A 800      -0.779  24.663  31.509  1.00118.76           C  
ATOM   6057  N   SER A 801       0.608  21.602  32.746  1.00120.95           N  
ATOM   6058  CA  SER A 801       0.527  20.222  33.211  1.00124.02           C  
ATOM   6059  C   SER A 801       1.902  19.563  33.227  1.00128.12           C  
ATOM   6060  O   SER A 801       2.285  18.880  32.278  1.00141.51           O  
ATOM   6061  CB  SER A 801      -0.431  19.416  32.332  1.00120.77           C  
ATOM   6062  OG  SER A 801      -1.779  19.768  32.591  1.00110.73           O  
ATOM   6063  N   ASP A 802       2.640  19.773  34.312  1.00119.36           N  
ATOM   6064  CA  ASP A 802       3.974  19.202  34.454  1.00105.69           C  
ATOM   6065  C   ASP A 802       3.996  17.732  34.029  1.00110.01           C  
ATOM   6066  O   ASP A 802       2.987  17.039  34.150  1.00111.85           O  
ATOM   6067  CB  ASP A 802       4.466  19.340  35.896  1.00 94.06           C  
ATOM   6068  CG  ASP A 802       5.002  20.726  36.199  1.00 85.14           C  
ATOM   6069  OD1 ASP A 802       6.194  20.977  35.923  1.00 64.93           O  
ATOM   6070  OD2 ASP A 802       4.231  21.563  36.712  1.00 75.82           O  
ATOM   6071  N   LYS A 803       5.141  17.272  33.535  1.00113.94           N  
ATOM   6072  CA  LYS A 803       6.317  18.125  33.403  1.00112.38           C  
ATOM   6073  C   LYS A 803       6.445  18.669  31.984  1.00113.36           C  
ATOM   6074  O   LYS A 803       6.102  17.991  31.015  1.00124.01           O  
ATOM   6075  CB  LYS A 803       7.582  17.356  33.788  1.00108.14           C  
ATOM   6076  CG  LYS A 803       8.857  18.180  33.709  1.00110.42           C  
ATOM   6077  CD  LYS A 803      10.092  17.298  33.803  1.00101.48           C  
ATOM   6078  CE  LYS A 803      11.232  17.853  32.965  1.00 98.76           C  
ATOM   6079  NZ  LYS A 803      11.374  17.128  31.672  1.00 88.81           N  
ATOM   6080  N   HIS A 804       7.004  19.862  31.892  1.00109.04           N  
ATOM   6081  CA  HIS A 804       7.356  20.412  30.620  1.00112.35           C  
ATOM   6082  C   HIS A 804       8.533  21.357  30.652  1.00112.70           C  
ATOM   6083  O   HIS A 804       9.027  21.748  31.700  1.00105.90           O  
ATOM   6084  CB  HIS A 804       6.173  21.117  30.027  1.00112.69           C  
ATOM   6085  CG  HIS A 804       5.373  20.263  29.103  1.00106.57           C  
ATOM   6086  ND1 HIS A 804       5.676  20.137  27.772  1.00108.23           N  
ATOM   6087  CD2 HIS A 804       4.272  19.513  29.313  1.00103.20           C  
ATOM   6088  CE1 HIS A 804       4.791  19.348  27.194  1.00104.59           C  
ATOM   6089  NE2 HIS A 804       3.932  18.948  28.111  1.00104.60           N  
ATOM   6090  N   ALA A 805       8.973  21.709  29.458  1.00113.70           N  
ATOM   6091  CA  ALA A 805      10.072  22.608  29.274  1.00105.60           C  
ATOM   6092  C   ALA A 805       9.483  23.917  28.837  1.00104.49           C  
ATOM   6093  O   ALA A 805      10.063  24.619  28.039  1.00103.15           O  
ATOM   6094  CB  ALA A 805      11.019  22.075  28.219  1.00 98.17           C  
ATOM   6095  N   ARG A 806       8.314  24.238  29.366  1.00101.62           N  
ATOM   6096  CA  ARG A 806       7.760  25.558  29.199  1.00 91.42           C  
ATOM   6097  C   ARG A 806       7.474  26.185  30.540  1.00 83.71           C  
ATOM   6098  O   ARG A 806       6.464  25.859  31.135  1.00 77.88           O  
ATOM   6099  CB  ARG A 806       6.485  25.509  28.387  1.00 87.69           C  
ATOM   6100  CG  ARG A 806       6.469  26.508  27.250  1.00 90.42           C  
ATOM   6101  CD  ARG A 806       5.042  26.712  26.781  1.00 92.52           C  
ATOM   6102  NE  ARG A 806       4.915  26.990  25.359  1.00101.42           N  
ATOM   6103  CZ  ARG A 806       4.537  26.093  24.447  1.00102.09           C  
ATOM   6104  NH1 ARG A 806       4.277  24.842  24.790  1.00103.95           N  
ATOM   6105  NH2 ARG A 806       4.432  26.438  23.172  1.00 97.55           N  
ATOM   6106  N   ASP A 807       8.300  27.120  31.005  1.00 72.97           N  
ATOM   6107  CA  ASP A 807       9.718  27.305  30.670  1.00 68.25           C  
ATOM   6108  C   ASP A 807      10.034  28.185  29.463  1.00 59.70           C  
ATOM   6109  O   ASP A 807      10.684  29.182  29.593  1.00 53.46           O  
ATOM   6110  CB  ASP A 807      10.445  25.975  30.590  1.00 72.12           C  
ATOM   6111  CG  ASP A 807      11.727  25.941  31.419  1.00 70.86           C  
ATOM   6112  OD1 ASP A 807      11.649  25.788  32.644  1.00 65.25           O  
ATOM   6113  OD2 ASP A 807      12.816  26.031  30.839  1.00 67.26           O  
ATOM   6114  N   GLU A 808       9.571  27.802  28.297  1.00 53.48           N  
ATOM   6115  CA  GLU A 808       9.644  28.649  27.128  1.00 61.35           C  
ATOM   6116  C   GLU A 808       8.589  29.749  27.227  1.00 59.73           C  
ATOM   6117  O   GLU A 808       8.840  30.874  26.850  1.00 46.64           O  
ATOM   6118  CB  GLU A 808       9.476  27.805  25.859  1.00 62.27           C  
ATOM   6119  CG  GLU A 808       8.731  28.435  24.701  1.00 68.02           C  
ATOM   6120  CD  GLU A 808       8.414  27.442  23.606  1.00 70.90           C  
ATOM   6121  OE1 GLU A 808       9.337  27.062  22.888  1.00 68.61           O  
ATOM   6122  OE2 GLU A 808       7.248  27.039  23.470  1.00 67.04           O  
ATOM   6123  N   ALA A 809       7.424  29.370  27.745  1.00 54.68           N  
ATOM   6124  CA  ALA A 809       6.288  30.252  27.966  1.00 53.30           C  
ATOM   6125  C   ALA A 809       6.596  31.274  29.008  1.00 51.76           C  
ATOM   6126  O   ALA A 809       6.185  32.384  28.904  1.00 45.63           O  
ATOM   6127  CB  ALA A 809       5.069  29.452  28.377  1.00 47.98           C  
ATOM   6128  N   LYS A 810       7.316  30.849  30.030  1.00 54.34           N  
ATOM   6129  CA  LYS A 810       7.737  31.702  31.124  1.00 59.90           C  
ATOM   6130  C   LYS A 810       8.790  32.706  30.656  1.00 58.25           C  
ATOM   6131  O   LYS A 810       8.806  33.837  31.080  1.00 50.38           O  
ATOM   6132  CB  LYS A 810       8.300  30.856  32.243  1.00 60.15           C  
ATOM   6133  CG  LYS A 810       7.348  30.611  33.377  1.00 68.51           C  
ATOM   6134  CD  LYS A 810       7.759  29.403  34.207  1.00 70.51           C  
ATOM   6135  CE  LYS A 810       6.919  29.325  35.466  1.00 72.49           C  
ATOM   6136  NZ  LYS A 810       6.562  27.942  35.857  1.00 74.81           N  
ATOM   6137  N   LYS A 811       9.640  32.255  29.753  1.00 52.92           N  
ATOM   6138  CA  LYS A 811      10.598  33.087  29.062  1.00 50.83           C  
ATOM   6139  C   LYS A 811       9.935  34.145  28.209  1.00 46.90           C  
ATOM   6140  O   LYS A 811      10.396  35.268  28.166  1.00 33.76           O  
ATOM   6141  CB  LYS A 811      11.473  32.232  28.173  1.00 56.77           C  
ATOM   6142  CG  LYS A 811      12.876  32.764  28.001  1.00 63.49           C  
ATOM   6143  CD  LYS A 811      13.672  32.010  26.942  1.00 62.48           C  
ATOM   6144  CE  LYS A 811      14.294  30.756  27.497  1.00 61.51           C  
ATOM   6145  NZ  LYS A 811      14.747  29.891  26.392  1.00 63.29           N  
ATOM   6146  N   MET A 812       8.864  33.744  27.539  1.00 43.23           N  
ATOM   6147  CA  MET A 812       8.012  34.618  26.774  1.00 44.81           C  
ATOM   6148  C   MET A 812       7.375  35.695  27.654  1.00 42.06           C  
ATOM   6149  O   MET A 812       7.457  36.841  27.366  1.00 33.16           O  
ATOM   6150  CB  MET A 812       6.928  33.797  26.098  1.00 44.88           C  
ATOM   6151  CG  MET A 812       7.371  32.990  24.911  1.00 49.40           C  
ATOM   6152  SD  MET A 812       8.188  33.880  23.577  1.00 56.80           S  
ATOM   6153  CE  MET A 812       9.861  33.807  24.136  1.00 60.92           C  
ATOM   6154  N   ILE A 813       6.744  35.281  28.736  1.00 38.04           N  
ATOM   6155  CA  ILE A 813       6.146  36.203  29.647  1.00 39.12           C  
ATOM   6156  C   ILE A 813       7.169  37.241  30.087  1.00 43.01           C  
ATOM   6157  O   ILE A 813       6.948  38.410  29.940  1.00 34.38           O  
ATOM   6158  CB  ILE A 813       5.538  35.493  30.865  1.00 45.13           C  
ATOM   6159  CG1 ILE A 813       4.268  34.758  30.469  1.00 46.97           C  
ATOM   6160  CG2 ILE A 813       5.140  36.472  31.940  1.00 47.71           C  
ATOM   6161  CD1 ILE A 813       3.969  33.530  31.262  1.00 48.25           C  
ATOM   6162  N   VAL A 814       8.280  36.812  30.658  1.00 39.90           N  
ATOM   6163  CA  VAL A 814       9.303  37.788  31.063  1.00 42.44           C  
ATOM   6164  C   VAL A 814       9.670  38.758  29.886  1.00 40.63           C  
ATOM   6165  O   VAL A 814       9.696  39.986  30.057  1.00 37.91           O  
ATOM   6166  CB  VAL A 814      10.560  37.112  31.674  1.00 45.54           C  
ATOM   6167  CG1 VAL A 814      11.657  38.147  31.897  1.00 45.48           C  
ATOM   6168  CG2 VAL A 814      10.220  36.397  32.986  1.00 42.78           C  
ATOM   6169  N   LEU A 815       9.917  38.225  28.686  1.00 38.11           N  
ATOM   6170  CA  LEU A 815      10.284  39.069  27.536  1.00 36.75           C  
ATOM   6171  C   LEU A 815       9.258  40.146  27.113  1.00 35.72           C  
ATOM   6172  O   LEU A 815       9.605  41.334  27.025  1.00 30.38           O  
ATOM   6173  CB  LEU A 815      10.541  38.182  26.347  1.00 43.24           C  
ATOM   6174  CG  LEU A 815      10.853  38.884  25.045  1.00 45.07           C  
ATOM   6175  CD1 LEU A 815      12.178  39.634  25.211  1.00 49.74           C  
ATOM   6176  CD2 LEU A 815      10.851  37.858  23.928  1.00 48.51           C  
ATOM   6177  N   TYR A 816       8.037  39.720  26.782  1.00 32.41           N  
ATOM   6178  CA  TYR A 816       6.963  40.623  26.398  1.00 39.97           C  
ATOM   6179  C   TYR A 816       6.550  41.593  27.505  1.00 41.99           C  
ATOM   6180  O   TYR A 816       6.276  42.772  27.215  1.00 38.58           O  
ATOM   6181  CB  TYR A 816       5.744  39.868  25.859  1.00 39.84           C  
ATOM   6182  CG  TYR A 816       6.041  39.296  24.495  1.00 42.54           C  
ATOM   6183  CD1 TYR A 816       6.645  40.061  23.517  1.00 39.71           C  
ATOM   6184  CD2 TYR A 816       5.707  38.002  24.176  1.00 46.85           C  
ATOM   6185  CE1 TYR A 816       6.930  39.535  22.270  1.00 41.81           C  
ATOM   6186  CE2 TYR A 816       5.973  37.466  22.923  1.00 42.55           C  
ATOM   6187  CZ  TYR A 816       6.584  38.228  21.978  1.00 44.60           C  
ATOM   6188  OH  TYR A 816       6.853  37.681  20.746  1.00 45.65           O  
ATOM   6189  N   ASP A 817       6.562  41.128  28.749  1.00 38.17           N  
ATOM   6190  CA  ASP A 817       6.481  42.045  29.871  1.00 44.58           C  
ATOM   6191  C   ASP A 817       7.501  43.149  29.801  1.00 41.32           C  
ATOM   6192  O   ASP A 817       7.151  44.315  30.082  1.00 35.08           O  
ATOM   6193  CB  ASP A 817       6.750  41.359  31.207  1.00 51.63           C  
ATOM   6194  CG  ASP A 817       5.504  40.899  31.883  1.00 57.89           C  
ATOM   6195  OD1 ASP A 817       4.548  40.490  31.179  1.00 58.75           O  
ATOM   6196  OD2 ASP A 817       5.505  40.936  33.134  1.00 73.82           O  
ATOM   6197  N   SER A 818       8.769  42.785  29.544  1.00 33.71           N  
ATOM   6198  CA  SER A 818       9.803  43.801  29.549  1.00 36.58           C  
ATOM   6199  C   SER A 818       9.497  44.677  28.351  1.00 34.25           C  
ATOM   6200  O   SER A 818       9.666  45.877  28.430  1.00 36.77           O  
ATOM   6201  CB  SER A 818      11.257  43.262  29.451  1.00 37.15           C  
ATOM   6202  OG  SER A 818      11.510  42.320  30.469  1.00 40.99           O  
ATOM   6203  N   LEU A 819       9.056  44.087  27.245  1.00 31.36           N  
ATOM   6204  CA  LEU A 819       8.877  44.890  26.045  1.00 32.54           C  
ATOM   6205  C   LEU A 819       7.647  45.831  26.174  1.00 33.01           C  
ATOM   6206  O   LEU A 819       7.728  46.978  25.790  1.00 34.27           O  
ATOM   6207  CB  LEU A 819       8.771  44.045  24.786  1.00 32.78           C  
ATOM   6208  CG  LEU A 819      10.130  43.533  24.306  1.00 32.89           C  
ATOM   6209  CD1 LEU A 819       9.905  42.611  23.141  1.00 31.82           C  
ATOM   6210  CD2 LEU A 819      11.123  44.639  23.969  1.00 35.01           C  
ATOM   6211  N   GLN A 820       6.564  45.378  26.777  1.00 30.16           N  
ATOM   6212  CA  GLN A 820       5.415  46.262  26.898  1.00 30.45           C  
ATOM   6213  C   GLN A 820       5.740  47.337  27.914  1.00 29.36           C  
ATOM   6214  O   GLN A 820       5.404  48.505  27.685  1.00 26.90           O  
ATOM   6215  CB  GLN A 820       4.155  45.472  27.181  1.00 31.63           C  
ATOM   6216  CG  GLN A 820       4.131  44.958  28.597  1.00 32.67           C  
ATOM   6217  CD  GLN A 820       3.402  45.864  29.530  1.00 34.62           C  
ATOM   6218  OE1 GLN A 820       3.135  47.035  29.217  1.00 34.14           O  
ATOM   6219  NE2 GLN A 820       3.108  45.350  30.711  1.00 32.86           N  
ATOM   6220  N   LEU A 821       6.510  47.029  28.959  1.00 26.89           N  
ATOM   6221  CA  LEU A 821       6.887  48.074  29.914  1.00 26.06           C  
ATOM   6222  C   LEU A 821       7.983  49.029  29.434  1.00 27.65           C  
ATOM   6223  O   LEU A 821       8.067  50.221  29.841  1.00 27.62           O  
ATOM   6224  CB  LEU A 821       7.333  47.428  31.238  1.00 29.46           C  
ATOM   6225  CG  LEU A 821       6.323  46.683  32.071  1.00 28.32           C  
ATOM   6226  CD1 LEU A 821       7.005  45.812  33.129  1.00 26.55           C  
ATOM   6227  CD2 LEU A 821       5.375  47.692  32.756  1.00 30.92           C  
ATOM   6228  N   ALA A 822       8.867  48.547  28.574  1.00 30.02           N  
ATOM   6229  CA  ALA A 822       9.843  49.452  27.964  1.00 28.76           C  
ATOM   6230  C   ALA A 822       9.067  50.448  27.075  1.00 25.93           C  
ATOM   6231  O   ALA A 822       9.277  51.705  27.101  1.00 28.99           O  
ATOM   6232  CB  ALA A 822      10.888  48.636  27.202  1.00 32.41           C  
ATOM   6233  N   HIS A 823       8.034  49.949  26.432  1.00 22.76           N  
ATOM   6234  CA  HIS A 823       7.149  50.878  25.703  1.00 22.59           C  
ATOM   6235  C   HIS A 823       6.254  51.807  26.569  1.00 20.32           C  
ATOM   6236  O   HIS A 823       5.896  52.928  26.177  1.00 20.11           O  
ATOM   6237  CB  HIS A 823       6.297  50.106  24.662  1.00 24.53           C  
ATOM   6238  CG  HIS A 823       7.089  49.659  23.479  1.00 26.86           C  
ATOM   6239  ND1 HIS A 823       7.966  48.602  23.536  1.00 26.33           N  
ATOM   6240  CD2 HIS A 823       7.213  50.183  22.230  1.00 28.32           C  
ATOM   6241  CE1 HIS A 823       8.572  48.469  22.366  1.00 27.48           C  
ATOM   6242  NE2 HIS A 823       8.131  49.409  21.555  1.00 26.73           N  
ATOM   6243  N   LYS A 824       5.934  51.373  27.760  1.00 21.70           N  
ATOM   6244  CA  LYS A 824       5.056  52.108  28.631  1.00 22.48           C  
ATOM   6245  C   LYS A 824       5.658  53.473  29.034  1.00 20.78           C  
ATOM   6246  O   LYS A 824       4.970  54.508  29.046  1.00 18.69           O  
ATOM   6247  CB  LYS A 824       4.754  51.280  29.830  1.00 23.29           C  
ATOM   6248  CG  LYS A 824       4.066  52.048  30.933  1.00 24.27           C  
ATOM   6249  CD  LYS A 824       3.686  51.116  32.052  1.00 25.64           C  
ATOM   6250  CE  LYS A 824       2.823  51.898  33.027  1.00 28.10           C  
ATOM   6251  NZ  LYS A 824       2.593  51.162  34.285  1.00 27.80           N  
ATOM   6252  N   VAL A 825       6.921  53.508  29.350  1.00 19.09           N  
ATOM   6253  CA  VAL A 825       7.510  54.769  29.852  1.00 19.15           C  
ATOM   6254  C   VAL A 825       7.621  55.779  28.714  1.00 19.79           C  
ATOM   6255  O   VAL A 825       7.377  56.965  28.913  1.00 17.93           O  
ATOM   6256  CB  VAL A 825       8.847  54.548  30.543  1.00 20.64           C  
ATOM   6257  CG1 VAL A 825       9.525  55.887  30.898  1.00 21.14           C  
ATOM   6258  CG2 VAL A 825       8.585  53.770  31.829  1.00 22.27           C  
ATOM   6259  N   ILE A 826       7.985  55.330  27.511  1.00 19.36           N  
ATOM   6260  CA  ILE A 826       8.057  56.263  26.410  1.00 17.90           C  
ATOM   6261  C   ILE A 826       6.644  56.755  26.073  1.00 17.17           C  
ATOM   6262  O   ILE A 826       6.412  57.945  25.777  1.00 14.52           O  
ATOM   6263  CB  ILE A 826       8.664  55.578  25.223  1.00 19.51           C  
ATOM   6264  CG1 ILE A 826      10.128  55.255  25.514  1.00 20.38           C  
ATOM   6265  CG2 ILE A 826       8.587  56.427  23.991  1.00 18.95           C  
ATOM   6266  CD1 ILE A 826      10.665  54.273  24.499  1.00 22.69           C  
ATOM   6267  N   LEU A 827       5.691  55.835  26.102  1.00 16.85           N  
ATOM   6268  CA  LEU A 827       4.324  56.220  25.834  1.00 16.53           C  
ATOM   6269  C   LEU A 827       3.844  57.355  26.786  1.00 16.25           C  
ATOM   6270  O   LEU A 827       3.294  58.385  26.338  1.00 16.03           O  
ATOM   6271  CB  LEU A 827       3.407  55.016  25.929  1.00 16.51           C  
ATOM   6272  CG  LEU A 827       1.925  55.296  25.633  1.00 16.24           C  
ATOM   6273  CD1 LEU A 827       1.759  55.822  24.253  1.00 16.85           C  
ATOM   6274  CD2 LEU A 827       1.106  54.056  25.784  1.00 18.39           C  
ATOM   6275  N   ASN A 828       4.074  57.158  28.078  1.00 14.76           N  
ATOM   6276  CA  ASN A 828       3.671  58.112  29.074  1.00 15.37           C  
ATOM   6277  C   ASN A 828       4.418  59.409  29.069  1.00 16.38           C  
ATOM   6278  O   ASN A 828       3.861  60.457  29.470  1.00 15.60           O  
ATOM   6279  CB  ASN A 828       3.596  57.398  30.469  1.00 15.52           C  
ATOM   6280  CG  ASN A 828       2.350  56.583  30.566  1.00 15.93           C  
ATOM   6281  OD1 ASN A 828       1.374  56.934  29.915  1.00 18.19           O  
ATOM   6282  ND2 ASN A 828       2.357  55.495  31.292  1.00 16.50           N  
ATOM   6283  N   SER A 829       5.646  59.379  28.526  1.00 15.94           N  
ATOM   6284  CA  SER A 829       6.419  60.601  28.331  1.00 14.66           C  
ATOM   6285  C   SER A 829       5.840  61.513  27.283  1.00 15.11           C  
ATOM   6286  O   SER A 829       6.261  62.672  27.209  1.00 15.10           O  
ATOM   6287  CB  SER A 829       7.865  60.256  27.968  1.00 13.83           C  
ATOM   6288  OG  SER A 829       8.434  59.530  29.032  1.00 13.37           O  
ATOM   6289  N   PHE A 830       4.905  61.044  26.451  1.00 16.09           N  
ATOM   6290  CA  PHE A 830       4.230  61.978  25.519  1.00 18.48           C  
ATOM   6291  C   PHE A 830       3.306  62.939  26.286  1.00 18.29           C  
ATOM   6292  O   PHE A 830       2.998  64.047  25.814  1.00 18.19           O  
ATOM   6293  CB  PHE A 830       3.408  61.281  24.413  1.00 19.77           C  
ATOM   6294  CG  PHE A 830       4.211  60.653  23.293  1.00 19.65           C  
ATOM   6295  CD1 PHE A 830       4.705  61.413  22.267  1.00 20.67           C  
ATOM   6296  CD2 PHE A 830       4.388  59.251  23.233  1.00 20.04           C  
ATOM   6297  CE1 PHE A 830       5.449  60.821  21.238  1.00 21.91           C  
ATOM   6298  CE2 PHE A 830       5.078  58.650  22.182  1.00 19.91           C  
ATOM   6299  CZ  PHE A 830       5.619  59.445  21.190  1.00 20.46           C  
ATOM   6300  N   TYR A 831       2.846  62.483  27.457  1.00 19.36           N  
ATOM   6301  CA  TYR A 831       2.085  63.283  28.411  1.00 16.50           C  
ATOM   6302  C   TYR A 831       3.084  64.198  29.113  1.00 16.39           C  
ATOM   6303  O   TYR A 831       2.946  65.403  29.063  1.00 17.83           O  
ATOM   6304  CB  TYR A 831       1.283  62.386  29.375  1.00 16.70           C  
ATOM   6305  CG  TYR A 831       1.127  63.007  30.774  1.00 15.09           C  
ATOM   6306  CD1 TYR A 831       0.306  64.094  30.974  1.00 14.59           C  
ATOM   6307  CD2 TYR A 831       1.831  62.532  31.856  1.00 14.05           C  
ATOM   6308  CE1 TYR A 831       0.227  64.721  32.208  1.00 14.07           C  
ATOM   6309  CE2 TYR A 831       1.716  63.131  33.103  1.00 13.43           C  
ATOM   6310  CZ  TYR A 831       0.885  64.234  33.264  1.00 13.86           C  
ATOM   6311  OH  TYR A 831       0.774  64.911  34.501  1.00 14.84           O  
ATOM   6312  N   GLY A 832       4.148  63.663  29.683  1.00 16.52           N  
ATOM   6313  CA  GLY A 832       5.082  64.487  30.445  1.00 15.94           C  
ATOM   6314  C   GLY A 832       5.844  65.486  29.604  1.00 15.58           C  
ATOM   6315  O   GLY A 832       6.180  66.575  30.084  1.00 16.82           O  
ATOM   6316  N   TYR A 833       6.004  65.160  28.316  1.00 14.91           N  
ATOM   6317  CA  TYR A 833       6.736  65.982  27.390  1.00 15.35           C  
ATOM   6318  C   TYR A 833       6.256  67.415  27.371  1.00 14.04           C  
ATOM   6319  O   TYR A 833       7.059  68.340  27.220  1.00 14.64           O  
ATOM   6320  CB  TYR A 833       6.734  65.410  25.936  1.00 16.53           C  
ATOM   6321  CG  TYR A 833       7.545  66.261  25.014  1.00 16.39           C  
ATOM   6322  CD1 TYR A 833       8.934  66.211  25.058  1.00 16.85           C  
ATOM   6323  CD2 TYR A 833       6.958  67.168  24.157  1.00 15.88           C  
ATOM   6324  CE1 TYR A 833       9.720  67.030  24.230  1.00 16.10           C  
ATOM   6325  CE2 TYR A 833       7.727  67.990  23.342  1.00 14.79           C  
ATOM   6326  CZ  TYR A 833       9.096  67.916  23.390  1.00 15.70           C  
ATOM   6327  OH  TYR A 833       9.876  68.742  22.629  1.00 15.73           O  
ATOM   6328  N   VAL A 834       4.965  67.606  27.516  1.00 14.95           N  
ATOM   6329  CA  VAL A 834       4.383  68.943  27.432  1.00 15.62           C  
ATOM   6330  C   VAL A 834       4.705  69.827  28.639  1.00 16.69           C  
ATOM   6331  O   VAL A 834       4.352  71.033  28.616  1.00 18.58           O  
ATOM   6332  CB  VAL A 834       2.849  68.927  27.268  1.00 15.12           C  
ATOM   6333  CG1 VAL A 834       2.396  67.970  26.143  1.00 15.81           C  
ATOM   6334  CG2 VAL A 834       2.145  68.594  28.579  1.00 16.53           C  
ATOM   6335  N   MET A 835       5.310  69.242  29.674  1.00 15.51           N  
ATOM   6336  CA  MET A 835       5.791  70.022  30.814  1.00 17.21           C  
ATOM   6337  C   MET A 835       7.333  70.051  30.881  1.00 18.40           C  
ATOM   6338  O   MET A 835       7.871  70.613  31.815  1.00 21.37           O  
ATOM   6339  CB  MET A 835       5.310  69.460  32.113  1.00 17.86           C  
ATOM   6340  CG  MET A 835       3.882  69.731  32.448  1.00 20.56           C  
ATOM   6341  SD  MET A 835       3.695  71.474  32.765  1.00 24.34           S  
ATOM   6342  CE  MET A 835       4.250  71.545  34.466  1.00 25.91           C  
ATOM   6343  N   ARG A 836       8.044  69.477  29.913  1.00 18.91           N  
ATOM   6344  CA  ARG A 836       9.536  69.325  30.003  1.00 18.69           C  
ATOM   6345  C   ARG A 836      10.196  70.620  29.735  1.00 19.54           C  
ATOM   6346  O   ARG A 836       9.752  71.361  28.870  1.00 16.97           O  
ATOM   6347  CB  ARG A 836      10.014  68.284  28.949  1.00 21.39           C  
ATOM   6348  CG  ARG A 836      11.521  68.015  28.778  1.00 23.03           C  
ATOM   6349  CD  ARG A 836      11.607  66.998  27.645  1.00 25.53           C  
ATOM   6350  NE  ARG A 836      12.894  66.744  26.978  1.00 27.28           N  
ATOM   6351  CZ  ARG A 836      13.502  67.563  26.115  1.00 31.24           C  
ATOM   6352  NH1 ARG A 836      13.044  68.792  25.854  1.00 30.02           N  
ATOM   6353  NH2 ARG A 836      14.606  67.155  25.516  1.00 31.75           N  
ATOM   6354  N   LYS A 837      11.313  70.873  30.407  1.00 23.09           N  
ATOM   6355  CA  LYS A 837      12.133  72.028  30.066  1.00 28.00           C  
ATOM   6356  C   LYS A 837      12.595  71.936  28.622  1.00 26.46           C  
ATOM   6357  O   LYS A 837      12.995  70.869  28.159  1.00 24.13           O  
ATOM   6358  CB  LYS A 837      13.347  72.178  30.997  1.00 35.26           C  
ATOM   6359  CG  LYS A 837      12.949  72.423  32.446  1.00 44.39           C  
ATOM   6360  CD  LYS A 837      14.112  72.832  33.360  1.00 56.04           C  
ATOM   6361  CE  LYS A 837      14.978  71.653  33.828  1.00 64.01           C  
ATOM   6362  NZ  LYS A 837      14.310  70.775  34.838  1.00 65.23           N  
ATOM   6363  N   GLY A 838      12.489  73.061  27.922  1.00 24.21           N  
ATOM   6364  CA  GLY A 838      12.825  73.144  26.514  1.00 24.40           C  
ATOM   6365  C   GLY A 838      11.909  72.388  25.564  1.00 22.82           C  
ATOM   6366  O   GLY A 838      12.277  72.174  24.438  1.00 20.66           O  
ATOM   6367  N   SER A 839      10.736  71.955  26.030  1.00 21.70           N  
ATOM   6368  CA  SER A 839       9.789  71.284  25.189  1.00 19.98           C  
ATOM   6369  C   SER A 839       9.423  72.192  24.014  1.00 19.15           C  
ATOM   6370  O   SER A 839       9.229  73.421  24.188  1.00 18.78           O  
ATOM   6371  CB  SER A 839       8.499  70.976  25.998  1.00 22.33           C  
ATOM   6372  OG  SER A 839       7.491  70.468  25.151  1.00 20.83           O  
ATOM   6373  N   ARG A 840       9.289  71.599  22.835  1.00 17.36           N  
ATOM   6374  CA  ARG A 840       8.885  72.346  21.655  1.00 17.70           C  
ATOM   6375  C   ARG A 840       7.370  72.531  21.606  1.00 20.08           C  
ATOM   6376  O   ARG A 840       6.876  73.353  20.820  1.00 21.83           O  
ATOM   6377  CB  ARG A 840       9.364  71.638  20.385  1.00 17.40           C  
ATOM   6378  CG  ARG A 840      10.859  71.752  20.132  1.00 18.55           C  
ATOM   6379  CD  ARG A 840      11.211  71.294  18.726  1.00 19.00           C  
ATOM   6380  NE  ARG A 840      12.654  71.207  18.517  1.00 20.07           N  
ATOM   6381  CZ  ARG A 840      13.395  72.184  18.005  1.00 21.12           C  
ATOM   6382  NH1 ARG A 840      12.831  73.330  17.648  1.00 20.22           N  
ATOM   6383  NH2 ARG A 840      14.701  72.017  17.849  1.00 21.64           N  
ATOM   6384  N   TRP A 841       6.661  71.762  22.440  1.00 18.55           N  
ATOM   6385  CA  TRP A 841       5.178  71.697  22.469  1.00 20.34           C  
ATOM   6386  C   TRP A 841       4.773  71.731  23.973  1.00 19.35           C  
ATOM   6387  O   TRP A 841       4.368  70.692  24.535  1.00 19.21           O  
ATOM   6388  CB  TRP A 841       4.698  70.384  21.755  1.00 18.39           C  
ATOM   6389  CG  TRP A 841       4.925  70.494  20.257  1.00 20.01           C  
ATOM   6390  CD1 TRP A 841       4.284  71.354  19.439  1.00 19.13           C  
ATOM   6391  CD2 TRP A 841       5.929  69.821  19.424  1.00 17.20           C  
ATOM   6392  NE1 TRP A 841       4.773  71.240  18.172  1.00 20.37           N  
ATOM   6393  CE2 TRP A 841       5.784  70.316  18.137  1.00 17.90           C  
ATOM   6394  CE3 TRP A 841       6.903  68.861  19.653  1.00 17.47           C  
ATOM   6395  CZ2 TRP A 841       6.578  69.879  17.063  1.00 17.48           C  
ATOM   6396  CZ3 TRP A 841       7.717  68.408  18.562  1.00 16.74           C  
ATOM   6397  CH2 TRP A 841       7.534  68.921  17.309  1.00 17.45           C  
ATOM   6398  N   TYR A 842       4.996  72.883  24.622  1.00 18.21           N  
ATOM   6399  CA  TYR A 842       4.767  73.104  26.052  1.00 20.45           C  
ATOM   6400  C   TYR A 842       3.294  73.479  26.235  1.00 20.59           C  
ATOM   6401  O   TYR A 842       2.824  74.314  25.504  1.00 20.77           O  
ATOM   6402  CB  TYR A 842       5.634  74.257  26.615  1.00 21.62           C  
ATOM   6403  CG  TYR A 842       5.501  74.492  28.148  1.00 25.54           C  
ATOM   6404  CD1 TYR A 842       6.335  73.830  29.031  1.00 27.51           C  
ATOM   6405  CD2 TYR A 842       4.549  75.372  28.693  1.00 28.85           C  
ATOM   6406  CE1 TYR A 842       6.244  74.012  30.400  1.00 25.94           C  
ATOM   6407  CE2 TYR A 842       4.426  75.558  30.092  1.00 27.16           C  
ATOM   6408  CZ  TYR A 842       5.303  74.876  30.915  1.00 28.39           C  
ATOM   6409  OH  TYR A 842       5.271  74.961  32.267  1.00 31.87           O  
ATOM   6410  N   SER A 843       2.594  72.825  27.171  1.00 20.28           N  
ATOM   6411  CA  SER A 843       1.217  73.188  27.598  1.00 18.87           C  
ATOM   6412  C   SER A 843       0.909  72.685  29.028  1.00 19.38           C  
ATOM   6413  O   SER A 843       0.627  71.484  29.259  1.00 18.00           O  
ATOM   6414  CB  SER A 843       0.200  72.655  26.628  1.00 19.97           C  
ATOM   6415  OG  SER A 843      -1.099  73.051  27.048  1.00 21.11           O  
ATOM   6416  N   MET A 844       0.989  73.572  30.013  1.00 18.37           N  
ATOM   6417  CA  MET A 844       0.613  73.179  31.359  1.00 19.35           C  
ATOM   6418  C   MET A 844      -0.888  72.805  31.385  1.00 18.76           C  
ATOM   6419  O   MET A 844      -1.298  71.846  32.001  1.00 17.45           O  
ATOM   6420  CB  MET A 844       0.983  74.278  32.377  1.00 20.18           C  
ATOM   6421  CG  MET A 844       0.597  73.881  33.802  1.00 23.24           C  
ATOM   6422  SD  MET A 844       0.979  75.129  35.047  1.00 28.25           S  
ATOM   6423  CE  MET A 844       2.767  75.001  34.974  1.00 31.17           C  
ATOM   6424  N   GLU A 845      -1.703  73.496  30.631  1.00 18.36           N  
ATOM   6425  CA  GLU A 845      -3.147  73.187  30.641  1.00 19.90           C  
ATOM   6426  C   GLU A 845      -3.453  71.810  30.160  1.00 18.84           C  
ATOM   6427  O   GLU A 845      -4.315  71.137  30.716  1.00 20.90           O  
ATOM   6428  CB  GLU A 845      -3.884  74.166  29.748  1.00 21.71           C  
ATOM   6429  CG  GLU A 845      -3.835  75.588  30.266  1.00 24.20           C  
ATOM   6430  CD  GLU A 845      -2.675  76.431  29.783  1.00 29.77           C  
ATOM   6431  OE1 GLU A 845      -1.480  76.001  29.613  1.00 32.31           O  
ATOM   6432  OE2 GLU A 845      -2.985  77.609  29.582  1.00 39.81           O  
ATOM   6433  N   MET A 846      -2.762  71.371  29.129  1.00 19.49           N  
ATOM   6434  CA  MET A 846      -3.025  70.038  28.551  1.00 18.81           C  
ATOM   6435  C   MET A 846      -2.707  68.964  29.542  1.00 16.80           C  
ATOM   6436  O   MET A 846      -3.474  67.986  29.729  1.00 17.97           O  
ATOM   6437  CB  MET A 846      -2.208  69.782  27.290  1.00 19.56           C  
ATOM   6438  CG  MET A 846      -2.770  68.574  26.567  1.00 22.15           C  
ATOM   6439  SD  MET A 846      -1.546  67.564  25.783  1.00 21.61           S  
ATOM   6440  CE  MET A 846      -1.054  66.680  27.265  1.00 19.09           C  
ATOM   6441  N   ALA A 847      -1.609  69.149  30.220  1.00 15.09           N  
ATOM   6442  CA  ALA A 847      -1.221  68.203  31.246  1.00 15.66           C  
ATOM   6443  C   ALA A 847      -2.207  68.226  32.431  1.00 16.67           C  
ATOM   6444  O   ALA A 847      -2.565  67.167  32.947  1.00 19.05           O  
ATOM   6445  CB  ALA A 847       0.184  68.510  31.717  1.00 14.20           C  
ATOM   6446  N   GLY A 848      -2.641  69.423  32.853  1.00 16.96           N  
ATOM   6447  CA  GLY A 848      -3.572  69.556  33.984  1.00 17.16           C  
ATOM   6448  C   GLY A 848      -4.886  68.902  33.659  1.00 16.19           C  
ATOM   6449  O   GLY A 848      -5.466  68.186  34.472  1.00 14.36           O  
ATOM   6450  N   ILE A 849      -5.323  69.123  32.428  1.00 17.10           N  
ATOM   6451  CA  ILE A 849      -6.632  68.634  31.976  1.00 17.00           C  
ATOM   6452  C   ILE A 849      -6.665  67.131  32.000  1.00 17.33           C  
ATOM   6453  O   ILE A 849      -7.636  66.546  32.500  1.00 19.46           O  
ATOM   6454  CB  ILE A 849      -6.986  69.117  30.552  1.00 18.33           C  
ATOM   6455  CG1 ILE A 849      -7.420  70.598  30.567  1.00 19.42           C  
ATOM   6456  CG2 ILE A 849      -8.099  68.232  30.000  1.00 18.83           C  
ATOM   6457  CD1 ILE A 849      -7.474  71.275  29.194  1.00 18.66           C  
ATOM   6458  N   THR A 850      -5.578  66.508  31.522  1.00 16.59           N  
ATOM   6459  CA  THR A 850      -5.413  65.060  31.526  1.00 16.08           C  
ATOM   6460  C   THR A 850      -5.533  64.443  32.895  1.00 16.49           C  
ATOM   6461  O   THR A 850      -6.222  63.437  33.068  1.00 17.81           O  
ATOM   6462  CB  THR A 850      -4.038  64.638  30.944  1.00 16.43           C  
ATOM   6463  OG1 THR A 850      -3.852  65.181  29.631  1.00 18.35           O  
ATOM   6464  CG2 THR A 850      -3.915  63.175  30.802  1.00 16.48           C  
ATOM   6465  N   CYS A 851      -4.772  64.957  33.844  1.00 17.94           N  
ATOM   6466  CA  CYS A 851      -4.847  64.486  35.235  1.00 19.03           C  
ATOM   6467  C   CYS A 851      -6.221  64.706  35.885  1.00 19.09           C  
ATOM   6468  O   CYS A 851      -6.727  63.799  36.548  1.00 20.04           O  
ATOM   6469  CB  CYS A 851      -3.793  65.151  36.134  1.00 19.38           C  
ATOM   6470  SG  CYS A 851      -2.089  64.793  35.640  1.00 18.87           S  
ATOM   6471  N   LEU A 852      -6.853  65.869  35.699  1.00 19.03           N  
ATOM   6472  CA  LEU A 852      -8.176  66.077  36.394  1.00 18.80           C  
ATOM   6473  C   LEU A 852      -9.245  65.147  35.838  1.00 18.71           C  
ATOM   6474  O   LEU A 852     -10.066  64.591  36.592  1.00 21.39           O  
ATOM   6475  CB  LEU A 852      -8.621  67.516  36.323  1.00 19.65           C  
ATOM   6476  CG  LEU A 852      -9.935  67.888  37.078  1.00 23.00           C  
ATOM   6477  CD1 LEU A 852      -9.878  67.415  38.523  1.00 22.70           C  
ATOM   6478  CD2 LEU A 852     -10.112  69.395  37.060  1.00 22.05           C  
ATOM   6479  N   THR A 853      -9.263  64.966  34.515  1.00 17.54           N  
ATOM   6480  CA  THR A 853     -10.198  64.034  33.917  1.00 17.56           C  
ATOM   6481  C   THR A 853      -9.902  62.665  34.515  1.00 17.78           C  
ATOM   6482  O   THR A 853     -10.804  61.944  34.927  1.00 17.98           O  
ATOM   6483  CB  THR A 853     -10.056  64.037  32.391  1.00 18.59           C  
ATOM   6484  OG1 THR A 853     -10.353  65.350  31.895  1.00 22.18           O  
ATOM   6485  CG2 THR A 853     -10.930  63.084  31.786  1.00 19.06           C  
ATOM   6486  N   GLY A 854      -8.628  62.267  34.614  1.00 16.00           N  
ATOM   6487  CA  GLY A 854      -8.406  60.959  35.192  1.00 15.02           C  
ATOM   6488  C   GLY A 854      -8.839  60.832  36.634  1.00 15.59           C  
ATOM   6489  O   GLY A 854      -9.369  59.787  37.025  1.00 16.67           O  
ATOM   6490  N   ALA A 855      -8.565  61.849  37.452  1.00 16.71           N  
ATOM   6491  CA  ALA A 855      -9.077  61.858  38.840  1.00 18.96           C  
ATOM   6492  C   ALA A 855     -10.631  61.692  38.977  1.00 20.29           C  
ATOM   6493  O   ALA A 855     -11.119  61.015  39.900  1.00 18.83           O  
ATOM   6494  CB  ALA A 855      -8.607  63.114  39.572  1.00 18.95           C  
ATOM   6495  N   THR A 856     -11.377  62.304  38.050  1.00 20.48           N  
ATOM   6496  CA  THR A 856     -12.873  62.256  38.015  1.00 17.71           C  
ATOM   6497  C   THR A 856     -13.308  60.872  37.592  1.00 19.38           C  
ATOM   6498  O   THR A 856     -14.229  60.277  38.178  1.00 19.61           O  
ATOM   6499  CB  THR A 856     -13.372  63.328  37.016  1.00 17.07           C  
ATOM   6500  OG1 THR A 856     -12.818  64.569  37.431  1.00 17.62           O  
ATOM   6501  CG2 THR A 856     -14.954  63.489  36.950  1.00 16.45           C  
ATOM   6502  N   ILE A 857     -12.601  60.300  36.611  1.00 19.70           N  
ATOM   6503  CA  ILE A 857     -12.934  58.956  36.189  1.00 20.09           C  
ATOM   6504  C   ILE A 857     -12.741  57.998  37.340  1.00 19.80           C  
ATOM   6505  O   ILE A 857     -13.607  57.174  37.604  1.00 19.61           O  
ATOM   6506  CB  ILE A 857     -12.092  58.480  34.984  1.00 20.37           C  
ATOM   6507  CG1 ILE A 857     -12.461  59.285  33.710  1.00 20.81           C  
ATOM   6508  CG2 ILE A 857     -12.329  57.006  34.678  1.00 19.00           C  
ATOM   6509  CD1 ILE A 857     -11.439  59.158  32.619  1.00 19.48           C  
ATOM   6510  N   ILE A 858     -11.616  58.082  38.049  1.00 18.06           N  
ATOM   6511  CA  ILE A 858     -11.333  57.025  39.037  1.00 17.03           C  
ATOM   6512  C   ILE A 858     -12.204  57.183  40.312  1.00 18.01           C  
ATOM   6513  O   ILE A 858     -12.490  56.219  40.994  1.00 17.16           O  
ATOM   6514  CB  ILE A 858      -9.857  56.929  39.321  1.00 15.98           C  
ATOM   6515  CG1 ILE A 858      -9.463  55.568  39.897  1.00 16.74           C  
ATOM   6516  CG2 ILE A 858      -9.439  58.030  40.306  1.00 16.88           C  
ATOM   6517  CD1 ILE A 858      -9.793  54.321  39.088  1.00 17.51           C  
ATOM   6518  N   GLN A 859     -12.662  58.377  40.607  1.00 20.81           N  
ATOM   6519  CA  GLN A 859     -13.525  58.582  41.794  1.00 24.20           C  
ATOM   6520  C   GLN A 859     -14.941  58.059  41.511  1.00 25.11           C  
ATOM   6521  O   GLN A 859     -15.608  57.526  42.402  1.00 27.58           O  
ATOM   6522  CB  GLN A 859     -13.547  60.050  42.213  1.00 24.36           C  
ATOM   6523  CG  GLN A 859     -12.292  60.388  42.944  1.00 25.32           C  
ATOM   6524  CD  GLN A 859     -12.029  61.864  43.092  1.00 28.47           C  
ATOM   6525  OE1 GLN A 859     -12.389  62.468  44.089  1.00 29.80           O  
ATOM   6526  NE2 GLN A 859     -11.338  62.433  42.143  1.00 29.61           N  
ATOM   6527  N   MET A 860     -15.352  58.156  40.256  1.00 25.41           N  
ATOM   6528  CA  MET A 860     -16.592  57.588  39.780  1.00 25.47           C  
ATOM   6529  C   MET A 860     -16.555  56.093  39.906  1.00 25.34           C  
ATOM   6530  O   MET A 860     -17.519  55.474  40.355  1.00 22.66           O  
ATOM   6531  CB  MET A 860     -16.831  58.015  38.309  1.00 28.24           C  
ATOM   6532  CG  MET A 860     -18.132  57.534  37.675  1.00 28.82           C  
ATOM   6533  SD  MET A 860     -18.212  55.809  37.173  1.00 39.39           S  
ATOM   6534  CE  MET A 860     -17.006  55.612  35.853  1.00 35.86           C  
ATOM   6535  N   ALA A 861     -15.436  55.466  39.538  1.00 24.83           N  
ATOM   6536  CA  ALA A 861     -15.348  54.014  39.710  1.00 23.00           C  
ATOM   6537  C   ALA A 861     -15.341  53.604  41.185  1.00 24.05           C  
ATOM   6538  O   ALA A 861     -16.014  52.658  41.603  1.00 27.73           O  
ATOM   6539  CB  ALA A 861     -14.118  53.453  38.982  1.00 26.68           C  
ATOM   6540  N   ARG A 862     -14.640  54.375  42.008  1.00 21.68           N  
ATOM   6541  CA  ARG A 862     -14.628  54.125  43.451  1.00 22.87           C  
ATOM   6542  C   ARG A 862     -16.015  54.239  44.104  1.00 23.70           C  
ATOM   6543  O   ARG A 862     -16.343  53.479  45.015  1.00 21.66           O  
ATOM   6544  CB  ARG A 862     -13.644  55.069  44.147  1.00 23.78           C  
ATOM   6545  CG  ARG A 862     -13.191  54.593  45.517  1.00 25.83           C  
ATOM   6546  CD  ARG A 862     -13.226  55.722  46.534  1.00 29.10           C  
ATOM   6547  NE  ARG A 862     -14.520  56.398  46.557  1.00 33.14           N  
ATOM   6548  CZ  ARG A 862     -14.690  57.696  46.328  1.00 36.20           C  
ATOM   6549  NH1 ARG A 862     -13.644  58.465  46.058  1.00 35.08           N  
ATOM   6550  NH2 ARG A 862     -15.904  58.226  46.370  1.00 37.57           N  
ATOM   6551  N   ALA A 863     -16.817  55.191  43.634  1.00 23.03           N  
ATOM   6552  CA  ALA A 863     -18.139  55.475  44.195  1.00 22.72           C  
ATOM   6553  C   ALA A 863     -19.091  54.347  43.900  1.00 25.68           C  
ATOM   6554  O   ALA A 863     -19.945  54.018  44.736  1.00 30.79           O  
ATOM   6555  CB  ALA A 863     -18.680  56.801  43.699  1.00 21.70           C  
ATOM   6556  N   LEU A 864     -18.900  53.686  42.767  1.00 25.56           N  
ATOM   6557  CA  LEU A 864     -19.626  52.477  42.488  1.00 25.16           C  
ATOM   6558  C   LEU A 864     -19.185  51.258  43.286  1.00 27.51           C  
ATOM   6559  O   LEU A 864     -20.031  50.591  43.905  1.00 25.38           O  
ATOM   6560  CB  LEU A 864     -19.545  52.108  41.038  1.00 26.30           C  
ATOM   6561  CG  LEU A 864     -20.343  50.848  40.722  1.00 28.53           C  
ATOM   6562  CD1 LEU A 864     -21.765  50.899  41.324  1.00 29.80           C  
ATOM   6563  CD2 LEU A 864     -20.371  50.618  39.220  1.00 27.93           C  
ATOM   6564  N   VAL A 865     -17.886  50.933  43.241  1.00 25.79           N  
ATOM   6565  CA  VAL A 865     -17.360  49.737  43.898  1.00 24.34           C  
ATOM   6566  C   VAL A 865     -17.737  49.697  45.396  1.00 25.30           C  
ATOM   6567  O   VAL A 865     -18.086  48.649  45.933  1.00 29.04           O  
ATOM   6568  CB  VAL A 865     -15.825  49.645  43.678  1.00 25.75           C  
ATOM   6569  CG1 VAL A 865     -15.175  48.699  44.645  1.00 25.22           C  
ATOM   6570  CG2 VAL A 865     -15.573  49.223  42.228  1.00 26.67           C  
ATOM   6571  N   GLU A 866     -17.670  50.857  46.013  1.00 21.69           N  
ATOM   6572  CA  GLU A 866     -17.969  51.130  47.407  1.00 27.98           C  
ATOM   6573  C   GLU A 866     -19.435  50.826  47.803  1.00 29.88           C  
ATOM   6574  O   GLU A 866     -19.746  50.752  48.969  1.00 27.23           O  
ATOM   6575  CB  GLU A 866     -17.808  52.618  47.541  1.00 30.64           C  
ATOM   6576  CG  GLU A 866     -17.685  53.237  48.879  1.00 36.80           C  
ATOM   6577  CD  GLU A 866     -17.113  54.644  48.707  1.00 38.58           C  
ATOM   6578  OE1 GLU A 866     -17.515  55.374  47.756  1.00 36.85           O  
ATOM   6579  OE2 GLU A 866     -16.226  55.001  49.501  1.00 49.33           O  
ATOM   6580  N   ARG A 867     -20.318  50.790  46.813  1.00 28.10           N  
ATOM   6581  CA  ARG A 867     -21.740  50.519  47.030  1.00 30.95           C  
ATOM   6582  C   ARG A 867     -22.000  49.040  46.864  1.00 29.19           C  
ATOM   6583  O   ARG A 867     -23.032  48.526  47.308  1.00 30.43           O  
ATOM   6584  CB  ARG A 867     -22.574  51.341  46.033  1.00 28.32           C  
ATOM   6585  CG  ARG A 867     -22.512  52.782  46.379  1.00 28.72           C  
ATOM   6586  CD  ARG A 867     -23.075  53.679  45.291  1.00 32.30           C  
ATOM   6587  NE  ARG A 867     -24.530  53.703  45.271  1.00 37.68           N  
ATOM   6588  CZ  ARG A 867     -25.248  54.060  44.211  1.00 39.84           C  
ATOM   6589  NH1 ARG A 867     -24.651  54.395  43.086  1.00 37.50           N  
ATOM   6590  NH2 ARG A 867     -26.566  54.060  44.266  1.00 43.55           N  
ATOM   6591  N   VAL A 868     -21.047  48.336  46.267  1.00 29.02           N  
ATOM   6592  CA  VAL A 868     -21.253  46.922  45.992  1.00 31.49           C  
ATOM   6593  C   VAL A 868     -20.181  46.039  46.565  1.00 29.82           C  
ATOM   6594  O   VAL A 868     -20.247  44.848  46.395  1.00 28.50           O  
ATOM   6595  CB  VAL A 868     -21.396  46.640  44.474  1.00 34.66           C  
ATOM   6596  CG1 VAL A 868     -22.597  47.408  43.888  1.00 34.54           C  
ATOM   6597  CG2 VAL A 868     -20.134  47.013  43.718  1.00 34.40           C  
ATOM   6598  N   GLY A 869     -19.224  46.616  47.274  1.00 28.31           N  
ATOM   6599  CA  GLY A 869     -18.093  45.867  47.736  1.00 27.80           C  
ATOM   6600  C   GLY A 869     -17.257  46.772  48.571  1.00 27.20           C  
ATOM   6601  O   GLY A 869     -17.746  47.781  49.038  1.00 29.82           O  
ATOM   6602  N   ARG A 870     -15.971  46.445  48.730  1.00 27.96           N  
ATOM   6603  CA  ARG A 870     -15.130  47.283  49.565  1.00 25.49           C  
ATOM   6604  C   ARG A 870     -13.811  47.558  48.856  1.00 25.65           C  
ATOM   6605  O   ARG A 870     -12.962  46.690  48.733  1.00 23.83           O  
ATOM   6606  CB  ARG A 870     -14.910  46.638  50.919  1.00 25.90           C  
ATOM   6607  CG  ARG A 870     -16.079  46.724  51.911  1.00 26.91           C  
ATOM   6608  CD  ARG A 870     -15.950  45.631  52.975  1.00 26.16           C  
ATOM   6609  NE  ARG A 870     -14.854  45.861  53.900  1.00 26.27           N  
ATOM   6610  CZ  ARG A 870     -14.536  45.096  54.950  1.00 30.37           C  
ATOM   6611  NH1 ARG A 870     -15.217  43.997  55.266  1.00 30.10           N  
ATOM   6612  NH2 ARG A 870     -13.492  45.433  55.705  1.00 31.29           N  
ATOM   6613  N   PRO A 871     -13.637  48.794  48.412  1.00 28.09           N  
ATOM   6614  CA  PRO A 871     -12.367  49.206  47.871  1.00 27.52           C  
ATOM   6615  C   PRO A 871     -11.317  49.331  48.983  1.00 25.77           C  
ATOM   6616  O   PRO A 871     -11.625  49.880  50.041  1.00 25.70           O  
ATOM   6617  CB  PRO A 871     -12.675  50.557  47.246  1.00 26.82           C  
ATOM   6618  CG  PRO A 871     -13.875  51.045  47.932  1.00 29.98           C  
ATOM   6619  CD  PRO A 871     -14.624  49.882  48.454  1.00 28.18           C  
ATOM   6620  N   LEU A 872     -10.093  48.859  48.729  1.00 22.50           N  
ATOM   6621  CA  LEU A 872      -9.028  48.872  49.735  1.00 22.80           C  
ATOM   6622  C   LEU A 872      -7.979  49.953  49.536  1.00 23.21           C  
ATOM   6623  O   LEU A 872      -7.517  50.570  50.493  1.00 23.82           O  
ATOM   6624  CB  LEU A 872      -8.350  47.519  49.797  1.00 24.20           C  
ATOM   6625  CG  LEU A 872      -9.179  46.230  49.879  1.00 24.67           C  
ATOM   6626  CD1 LEU A 872      -8.264  45.011  49.833  1.00 26.70           C  
ATOM   6627  CD2 LEU A 872     -10.084  46.154  51.101  1.00 24.58           C  
ATOM   6628  N   GLU A 873      -7.563  50.155  48.299  1.00 22.53           N  
ATOM   6629  CA  GLU A 873      -6.529  51.155  47.944  1.00 20.58           C  
ATOM   6630  C   GLU A 873      -6.766  51.583  46.502  1.00 17.37           C  
ATOM   6631  O   GLU A 873      -7.181  50.787  45.681  1.00 17.62           O  
ATOM   6632  CB  GLU A 873      -5.126  50.537  48.118  1.00 21.97           C  
ATOM   6633  CG  GLU A 873      -3.932  51.533  48.247  1.00 24.33           C  
ATOM   6634  CD  GLU A 873      -3.268  51.986  46.919  1.00 26.76           C  
ATOM   6635  OE1 GLU A 873      -3.654  51.517  45.828  1.00 30.06           O  
ATOM   6636  OE2 GLU A 873      -2.341  52.841  46.957  1.00 29.18           O  
ATOM   6637  N   LEU A 874      -6.506  52.839  46.198  1.00 17.95           N  
ATOM   6638  CA  LEU A 874      -6.800  53.440  44.864  1.00 18.66           C  
ATOM   6639  C   LEU A 874      -5.633  54.323  44.427  1.00 16.94           C  
ATOM   6640  O   LEU A 874      -5.154  55.082  45.203  1.00 18.05           O  
ATOM   6641  CB  LEU A 874      -8.094  54.295  44.945  1.00 20.16           C  
ATOM   6642  CG  LEU A 874      -8.562  55.267  43.855  1.00 23.17           C  
ATOM   6643  CD1 LEU A 874     -10.015  55.629  44.114  1.00 25.07           C  
ATOM   6644  CD2 LEU A 874      -7.783  56.587  43.750  1.00 25.58           C  
ATOM   6645  N   ASP A 875      -5.120  54.155  43.243  1.00 18.23           N  
ATOM   6646  CA  ASP A 875      -4.052  54.995  42.761  1.00 17.93           C  
ATOM   6647  C   ASP A 875      -4.188  55.370  41.300  1.00 16.90           C  
ATOM   6648  O   ASP A 875      -3.909  54.591  40.468  1.00 16.95           O  
ATOM   6649  CB  ASP A 875      -2.691  54.377  43.073  1.00 19.61           C  
ATOM   6650  CG  ASP A 875      -1.536  55.350  42.888  1.00 21.64           C  
ATOM   6651  OD1 ASP A 875      -1.603  56.245  42.086  1.00 21.67           O  
ATOM   6652  OD2 ASP A 875      -0.544  55.226  43.543  1.00 22.13           O  
ATOM   6653  N   THR A 876      -4.598  56.601  41.060  1.00 16.10           N  
ATOM   6654  CA  THR A 876      -4.610  57.258  39.765  1.00 15.48           C  
ATOM   6655  C   THR A 876      -5.619  56.676  38.774  1.00 15.77           C  
ATOM   6656  O   THR A 876      -6.518  57.313  38.396  1.00 15.68           O  
ATOM   6657  CB  THR A 876      -3.206  57.329  39.150  1.00 16.26           C  
ATOM   6658  OG1 THR A 876      -2.353  57.875  40.096  1.00 18.20           O  
ATOM   6659  CG2 THR A 876      -3.168  58.180  37.934  1.00 16.39           C  
ATOM   6660  N   ASP A 877      -5.456  55.428  38.440  1.00 14.26           N  
ATOM   6661  CA  ASP A 877      -6.329  54.762  37.538  1.00 15.52           C  
ATOM   6662  C   ASP A 877      -6.587  53.302  37.916  1.00 15.64           C  
ATOM   6663  O   ASP A 877      -7.046  52.535  37.146  1.00 15.48           O  
ATOM   6664  CB  ASP A 877      -5.746  54.920  36.156  1.00 19.46           C  
ATOM   6665  CG  ASP A 877      -4.717  53.863  35.832  1.00 19.52           C  
ATOM   6666  OD1 ASP A 877      -4.050  53.362  36.699  1.00 21.11           O  
ATOM   6667  OD2 ASP A 877      -4.651  53.519  34.694  1.00 20.19           O  
ATOM   6668  N   GLY A 878      -6.292  52.949  39.139  1.00 16.11           N  
ATOM   6669  CA  GLY A 878      -6.438  51.596  39.601  1.00 19.49           C  
ATOM   6670  C   GLY A 878      -7.041  51.448  40.989  1.00 18.18           C  
ATOM   6671  O   GLY A 878      -6.832  52.255  41.851  1.00 19.35           O  
ATOM   6672  N   ILE A 879      -7.807  50.406  41.159  1.00 16.73           N  
ATOM   6673  CA  ILE A 879      -8.476  50.139  42.397  1.00 19.58           C  
ATOM   6674  C   ILE A 879      -8.332  48.654  42.732  1.00 18.61           C  
ATOM   6675  O   ILE A 879      -8.615  47.743  41.895  1.00 18.52           O  
ATOM   6676  CB  ILE A 879     -10.012  50.409  42.307  1.00 22.98           C  
ATOM   6677  CG1 ILE A 879     -10.292  51.850  41.991  1.00 23.40           C  
ATOM   6678  CG2 ILE A 879     -10.725  50.095  43.639  1.00 25.17           C  
ATOM   6679  CD1 ILE A 879     -11.766  52.157  41.723  1.00 25.64           C  
ATOM   6680  N   TRP A 880      -7.810  48.443  43.922  1.00 18.83           N  
ATOM   6681  CA  TRP A 880      -7.786  47.152  44.576  1.00 20.72           C  
ATOM   6682  C   TRP A 880      -9.010  47.156  45.469  1.00 20.91           C  
ATOM   6683  O   TRP A 880      -9.186  48.087  46.277  1.00 21.70           O  
ATOM   6684  CB  TRP A 880      -6.524  47.012  45.446  1.00 21.78           C  
ATOM   6685  CG  TRP A 880      -5.257  46.785  44.630  1.00 22.78           C  
ATOM   6686  CD1 TRP A 880      -4.385  47.746  44.238  1.00 22.70           C  
ATOM   6687  CD2 TRP A 880      -4.765  45.551  44.100  1.00 21.13           C  
ATOM   6688  NE1 TRP A 880      -3.360  47.196  43.512  1.00 23.23           N  
ATOM   6689  CE2 TRP A 880      -3.582  45.846  43.394  1.00 21.33           C  
ATOM   6690  CE3 TRP A 880      -5.184  44.228  44.185  1.00 21.81           C  
ATOM   6691  CZ2 TRP A 880      -2.799  44.869  42.772  1.00 21.51           C  
ATOM   6692  CZ3 TRP A 880      -4.430  43.253  43.541  1.00 22.00           C  
ATOM   6693  CH2 TRP A 880      -3.231  43.587  42.842  1.00 23.32           C  
ATOM   6694  N   CYS A 881      -9.833  46.143  45.331  1.00 22.39           N  
ATOM   6695  CA  CYS A 881     -11.073  46.044  46.114  1.00 24.14           C  
ATOM   6696  C   CYS A 881     -11.355  44.603  46.447  1.00 24.31           C  
ATOM   6697  O   CYS A 881     -10.733  43.675  45.871  1.00 22.95           O  
ATOM   6698  CB  CYS A 881     -12.238  46.556  45.301  1.00 25.78           C  
ATOM   6699  SG  CYS A 881     -12.469  45.577  43.819  1.00 29.23           S  
ATOM   6700  N   ILE A 882     -12.287  44.392  47.382  1.00 25.35           N  
ATOM   6701  CA  ILE A 882     -12.873  43.057  47.546  1.00 24.62           C  
ATOM   6702  C   ILE A 882     -14.352  43.150  47.207  1.00 24.77           C  
ATOM   6703  O   ILE A 882     -15.011  44.109  47.639  1.00 23.34           O  
ATOM   6704  CB  ILE A 882     -12.765  42.472  48.969  1.00 25.44           C  
ATOM   6705  CG1 ILE A 882     -13.207  43.497  50.017  1.00 25.14           C  
ATOM   6706  CG2 ILE A 882     -11.354  42.008  49.260  1.00 28.11           C  
ATOM   6707  CD1 ILE A 882     -13.277  42.938  51.420  1.00 25.33           C  
ATOM   6708  N   LEU A 883     -14.837  42.129  46.477  1.00 25.58           N  
ATOM   6709  CA  LEU A 883     -16.265  41.929  46.161  1.00 27.14           C  
ATOM   6710  C   LEU A 883     -16.797  40.648  46.838  1.00 27.53           C  
ATOM   6711  O   LEU A 883     -16.043  39.680  47.033  1.00 24.56           O  
ATOM   6712  CB  LEU A 883     -16.454  41.745  44.656  1.00 29.30           C  
ATOM   6713  CG  LEU A 883     -16.000  42.852  43.682  1.00 29.71           C  
ATOM   6714  CD1 LEU A 883     -16.365  42.528  42.268  1.00 29.74           C  
ATOM   6715  CD2 LEU A 883     -16.683  44.112  44.091  1.00 31.31           C  
ATOM   6716  N   PRO A 884     -18.110  40.602  47.150  1.00 29.24           N  
ATOM   6717  CA  PRO A 884     -18.726  39.385  47.682  1.00 29.10           C  
ATOM   6718  C   PRO A 884     -18.484  38.339  46.693  1.00 28.82           C  
ATOM   6719  O   PRO A 884     -18.496  38.688  45.514  1.00 29.84           O  
ATOM   6720  CB  PRO A 884     -20.213  39.719  47.660  1.00 30.34           C  
ATOM   6721  CG  PRO A 884     -20.250  41.196  47.819  1.00 30.51           C  
ATOM   6722  CD  PRO A 884     -19.095  41.686  47.018  1.00 29.46           C  
ATOM   6723  N   LYS A 885     -18.289  37.087  47.132  1.00 30.47           N  
ATOM   6724  CA  LYS A 885     -18.102  35.919  46.255  1.00 33.07           C  
ATOM   6725  C   LYS A 885     -19.328  35.648  45.371  1.00 33.52           C  
ATOM   6726  O   LYS A 885     -19.203  35.101  44.281  1.00 30.70           O  
ATOM   6727  CB  LYS A 885     -17.761  34.649  47.072  1.00 44.32           C  
ATOM   6728  CG  LYS A 885     -17.913  33.321  46.317  1.00 49.93           C  
ATOM   6729  CD  LYS A 885     -17.311  32.121  47.044  1.00 59.15           C  
ATOM   6730  CE  LYS A 885     -16.942  31.003  46.062  1.00 61.14           C  
ATOM   6731  NZ  LYS A 885     -15.905  31.406  45.042  1.00 58.11           N  
ATOM   6732  N   SER A 886     -20.499  36.028  45.865  1.00 36.12           N  
ATOM   6733  CA  SER A 886     -21.750  35.982  45.125  1.00 36.14           C  
ATOM   6734  C   SER A 886     -21.902  37.039  44.035  1.00 36.62           C  
ATOM   6735  O   SER A 886     -22.903  37.021  43.291  1.00 33.04           O  
ATOM   6736  CB  SER A 886     -22.867  36.252  46.101  1.00 37.96           C  
ATOM   6737  OG  SER A 886     -22.827  35.271  47.094  1.00 46.24           O  
ATOM   6738  N   PHE A 887     -20.974  37.999  43.968  1.00 33.10           N  
ATOM   6739  CA  PHE A 887     -21.070  39.057  42.925  1.00 27.76           C  
ATOM   6740  C   PHE A 887     -20.808  38.383  41.560  1.00 27.00           C  
ATOM   6741  O   PHE A 887     -19.940  37.509  41.424  1.00 27.37           O  
ATOM   6742  CB  PHE A 887     -20.123  40.229  43.216  1.00 27.46           C  
ATOM   6743  CG  PHE A 887     -20.440  41.462  42.448  1.00 27.07           C  
ATOM   6744  CD1 PHE A 887     -19.930  41.649  41.174  1.00 25.87           C  
ATOM   6745  CD2 PHE A 887     -21.307  42.403  42.966  1.00 28.56           C  
ATOM   6746  CE1 PHE A 887     -20.284  42.773  40.437  1.00 28.20           C  
ATOM   6747  CE2 PHE A 887     -21.672  43.526  42.232  1.00 29.60           C  
ATOM   6748  CZ  PHE A 887     -21.153  43.711  40.965  1.00 27.98           C  
ATOM   6749  N   PRO A 888     -21.599  38.732  40.575  1.00 27.98           N  
ATOM   6750  CA  PRO A 888     -21.482  38.132  39.253  1.00 31.35           C  
ATOM   6751  C   PRO A 888     -20.140  38.452  38.644  1.00 32.44           C  
ATOM   6752  O   PRO A 888     -19.736  39.565  38.676  1.00 33.49           O  
ATOM   6753  CB  PRO A 888     -22.614  38.771  38.487  1.00 31.66           C  
ATOM   6754  CG  PRO A 888     -22.961  39.980  39.231  1.00 30.25           C  
ATOM   6755  CD  PRO A 888     -22.639  39.751  40.638  1.00 28.16           C  
ATOM   6756  N   GLU A 889     -19.491  37.461  38.076  1.00 33.80           N  
ATOM   6757  CA  GLU A 889     -18.093  37.508  37.737  1.00 31.64           C  
ATOM   6758  C   GLU A 889     -17.802  37.302  36.249  1.00 33.53           C  
ATOM   6759  O   GLU A 889     -17.945  38.192  35.472  1.00 34.62           O  
ATOM   6760  CB  GLU A 889     -17.390  36.449  38.570  1.00 32.23           C  
ATOM   6761  CG  GLU A 889     -16.083  36.844  39.184  1.00 35.37           C  
ATOM   6762  CD  GLU A 889     -15.334  35.700  39.808  1.00 37.28           C  
ATOM   6763  OE1 GLU A 889     -15.915  34.775  40.347  1.00 39.05           O  
ATOM   6764  OE2 GLU A 889     -14.127  35.742  39.769  1.00 43.76           O  
ATOM   6765  N   THR A 890     -17.419  36.104  35.865  1.00 34.40           N  
ATOM   6766  CA  THR A 890     -16.998  35.832  34.512  1.00 36.93           C  
ATOM   6767  C   THR A 890     -17.933  34.932  33.723  1.00 35.83           C  
ATOM   6768  O   THR A 890     -18.341  33.912  34.188  1.00 35.29           O  
ATOM   6769  CB  THR A 890     -15.637  35.142  34.507  1.00 36.87           C  
ATOM   6770  OG1 THR A 890     -14.713  35.931  35.211  1.00 42.27           O  
ATOM   6771  CG2 THR A 890     -15.135  34.974  33.174  1.00 39.82           C  
ATOM   6772  N   TYR A 891     -18.192  35.321  32.494  1.00 37.66           N  
ATOM   6773  CA  TYR A 891     -18.988  34.578  31.554  1.00 37.33           C  
ATOM   6774  C   TYR A 891     -18.377  34.633  30.185  1.00 41.11           C  
ATOM   6775  O   TYR A 891     -17.424  35.332  29.947  1.00 32.99           O  
ATOM   6776  CB  TYR A 891     -20.381  35.160  31.487  1.00 35.48           C  
ATOM   6777  CG  TYR A 891     -21.015  35.259  32.808  1.00 35.06           C  
ATOM   6778  CD1 TYR A 891     -20.661  36.244  33.672  1.00 38.92           C  
ATOM   6779  CD2 TYR A 891     -21.963  34.366  33.210  1.00 37.68           C  
ATOM   6780  CE1 TYR A 891     -21.240  36.350  34.901  1.00 36.13           C  
ATOM   6781  CE2 TYR A 891     -22.542  34.463  34.446  1.00 36.80           C  
ATOM   6782  CZ  TYR A 891     -22.161  35.459  35.278  1.00 35.32           C  
ATOM   6783  OH  TYR A 891     -22.709  35.579  36.483  1.00 35.39           O  
ATOM   6784  N   PHE A 892     -18.970  33.875  29.285  1.00 44.21           N  
ATOM   6785  CA  PHE A 892     -18.558  33.792  27.911  1.00 46.80           C  
ATOM   6786  C   PHE A 892     -19.769  33.720  27.001  1.00 49.14           C  
ATOM   6787  O   PHE A 892     -20.497  32.771  27.025  1.00 52.25           O  
ATOM   6788  CB  PHE A 892     -17.764  32.532  27.699  1.00 52.28           C  
ATOM   6789  CG  PHE A 892     -16.366  32.581  28.227  1.00 59.74           C  
ATOM   6790  CD1 PHE A 892     -15.340  33.014  27.441  1.00 61.84           C  
ATOM   6791  CD2 PHE A 892     -16.083  32.174  29.499  1.00 61.84           C  
ATOM   6792  CE1 PHE A 892     -14.049  33.053  27.917  1.00 59.38           C  
ATOM   6793  CE2 PHE A 892     -14.796  32.214  29.978  1.00 63.04           C  
ATOM   6794  CZ  PHE A 892     -13.779  32.653  29.183  1.00 59.46           C  
ATOM   6795  N   PHE A 893     -19.974  34.720  26.186  1.00 44.56           N  
ATOM   6796  CA  PHE A 893     -21.006  34.653  25.180  1.00 42.98           C  
ATOM   6797  C   PHE A 893     -20.560  33.655  24.136  1.00 47.75           C  
ATOM   6798  O   PHE A 893     -19.380  33.585  23.825  1.00 50.25           O  
ATOM   6799  CB  PHE A 893     -21.192  35.979  24.460  1.00 39.25           C  
ATOM   6800  CG  PHE A 893     -21.567  37.130  25.360  1.00 40.85           C  
ATOM   6801  CD1 PHE A 893     -22.855  37.244  25.878  1.00 36.52           C  
ATOM   6802  CD2 PHE A 893     -20.634  38.113  25.677  1.00 40.51           C  
ATOM   6803  CE1 PHE A 893     -23.210  38.295  26.706  1.00 36.26           C  
ATOM   6804  CE2 PHE A 893     -20.981  39.171  26.499  1.00 40.32           C  
ATOM   6805  CZ  PHE A 893     -22.273  39.259  27.018  1.00 41.28           C  
ATOM   6806  N   THR A 894     -21.499  32.896  23.584  1.00 52.29           N  
ATOM   6807  CA  THR A 894     -21.181  31.958  22.495  1.00 54.84           C  
ATOM   6808  C   THR A 894     -21.613  32.642  21.210  1.00 53.85           C  
ATOM   6809  O   THR A 894     -22.734  33.159  21.135  1.00 42.10           O  
ATOM   6810  CB  THR A 894     -21.902  30.580  22.633  1.00 54.13           C  
ATOM   6811  OG1 THR A 894     -23.195  30.756  23.229  1.00 58.02           O  
ATOM   6812  CG2 THR A 894     -21.109  29.593  23.486  1.00 53.07           C  
ATOM   6813  N   LEU A 895     -20.711  32.677  20.223  1.00 58.05           N  
ATOM   6814  CA  LEU A 895     -21.040  33.134  18.865  1.00 64.06           C  
ATOM   6815  C   LEU A 895     -21.707  32.024  18.042  1.00 67.24           C  
ATOM   6816  O   LEU A 895     -21.594  30.850  18.395  1.00 62.33           O  
ATOM   6817  CB  LEU A 895     -19.767  33.568  18.139  1.00 66.75           C  
ATOM   6818  CG  LEU A 895     -19.040  34.770  18.733  1.00 66.33           C  
ATOM   6819  CD1 LEU A 895     -17.705  34.972  18.025  1.00 69.71           C  
ATOM   6820  CD2 LEU A 895     -19.923  36.009  18.647  1.00 59.76           C  
ATOM   6821  N   GLU A 896     -22.334  32.385  16.932  1.00 75.37           N  
ATOM   6822  CA  GLU A 896     -22.876  31.408  15.993  1.00 74.78           C  
ATOM   6823  C   GLU A 896     -21.829  30.487  15.405  1.00 72.35           C  
ATOM   6824  O   GLU A 896     -22.084  29.317  15.248  1.00 77.43           O  
ATOM   6825  CB  GLU A 896     -23.641  32.089  14.878  1.00 75.97           C  
ATOM   6826  CG  GLU A 896     -25.099  32.304  15.186  1.00 79.30           C  
ATOM   6827  CD  GLU A 896     -25.967  31.172  14.706  1.00 83.43           C  
ATOM   6828  OE1 GLU A 896     -26.891  30.762  15.417  1.00 78.87           O  
ATOM   6829  OE2 GLU A 896     -25.731  30.684  13.602  1.00 90.66           O  
ATOM   6830  N   ASN A 897     -20.659  31.000  15.075  1.00 68.67           N  
ATOM   6831  CA  ASN A 897     -19.585  30.137  14.638  1.00 68.13           C  
ATOM   6832  C   ASN A 897     -19.060  29.277  15.767  1.00 62.94           C  
ATOM   6833  O   ASN A 897     -18.181  28.472  15.577  1.00 59.94           O  
ATOM   6834  CB  ASN A 897     -18.482  30.921  13.938  1.00 71.05           C  
ATOM   6835  CG  ASN A 897     -18.286  32.290  14.521  1.00 73.65           C  
ATOM   6836  OD1 ASN A 897     -19.241  32.956  14.865  1.00 78.27           O  
ATOM   6837  ND2 ASN A 897     -17.048  32.726  14.609  1.00 71.55           N  
ATOM   6838  N   GLY A 898     -19.587  29.463  16.960  1.00 66.36           N  
ATOM   6839  CA  GLY A 898     -19.171  28.644  18.088  1.00 66.53           C  
ATOM   6840  C   GLY A 898     -18.081  29.221  18.973  1.00 66.69           C  
ATOM   6841  O   GLY A 898     -17.885  28.769  20.084  1.00 59.16           O  
ATOM   6842  N   LYS A 899     -17.370  30.217  18.471  1.00 70.76           N  
ATOM   6843  CA  LYS A 899     -16.365  30.924  19.246  1.00 75.32           C  
ATOM   6844  C   LYS A 899     -16.942  31.570  20.509  1.00 69.57           C  
ATOM   6845  O   LYS A 899     -18.131  31.694  20.641  1.00 73.68           O  
ATOM   6846  CB  LYS A 899     -15.716  31.977  18.369  1.00 74.91           C  
ATOM   6847  CG  LYS A 899     -14.536  31.436  17.602  1.00 80.23           C  
ATOM   6848  CD  LYS A 899     -13.836  32.521  16.814  1.00 82.86           C  
ATOM   6849  CE  LYS A 899     -13.944  32.295  15.324  1.00 80.40           C  
ATOM   6850  NZ  LYS A 899     -12.653  31.848  14.748  1.00 80.53           N  
ATOM   6851  N   LYS A 900     -16.101  31.980  21.437  1.00 64.53           N  
ATOM   6852  CA  LYS A 900     -16.595  32.578  22.661  1.00 61.30           C  
ATOM   6853  C   LYS A 900     -15.910  33.906  22.946  1.00 54.63           C  
ATOM   6854  O   LYS A 900     -14.727  34.109  22.610  1.00 43.52           O  
ATOM   6855  CB  LYS A 900     -16.462  31.612  23.844  1.00 71.83           C  
ATOM   6856  CG  LYS A 900     -15.153  30.847  23.894  1.00 80.50           C  
ATOM   6857  CD  LYS A 900     -15.214  29.574  23.056  1.00 89.29           C  
ATOM   6858  CE  LYS A 900     -13.925  29.358  22.272  1.00 90.54           C  
ATOM   6859  NZ  LYS A 900     -13.815  27.938  21.842  1.00 87.07           N  
ATOM   6860  N   LEU A 901     -16.695  34.807  23.542  1.00 43.74           N  
ATOM   6861  CA  LEU A 901     -16.250  36.127  23.918  1.00 42.62           C  
ATOM   6862  C   LEU A 901     -16.314  36.281  25.414  1.00 39.88           C  
ATOM   6863  O   LEU A 901     -17.317  35.964  26.047  1.00 37.14           O  
ATOM   6864  CB  LEU A 901     -17.130  37.199  23.328  1.00 40.29           C  
ATOM   6865  CG  LEU A 901     -17.321  37.163  21.838  1.00 43.55           C  
ATOM   6866  CD1 LEU A 901     -18.452  38.141  21.507  1.00 40.27           C  
ATOM   6867  CD2 LEU A 901     -16.017  37.483  21.098  1.00 43.89           C  
ATOM   6868  N   TYR A 902     -15.250  36.858  25.946  1.00 39.36           N  
ATOM   6869  CA  TYR A 902     -15.000  36.897  27.371  1.00 38.03           C  
ATOM   6870  C   TYR A 902     -15.779  38.095  27.933  1.00 37.58           C  
ATOM   6871  O   TYR A 902     -15.938  39.143  27.288  1.00 36.05           O  
ATOM   6872  CB  TYR A 902     -13.460  36.952  27.583  1.00 43.89           C  
ATOM   6873  CG  TYR A 902     -12.971  37.425  28.908  1.00 42.04           C  
ATOM   6874  CD1 TYR A 902     -12.931  36.570  30.018  1.00 43.43           C  
ATOM   6875  CD2 TYR A 902     -12.570  38.753  29.070  1.00 45.65           C  
ATOM   6876  CE1 TYR A 902     -12.490  37.032  31.263  1.00 44.99           C  
ATOM   6877  CE2 TYR A 902     -12.130  39.230  30.297  1.00 45.45           C  
ATOM   6878  CZ  TYR A 902     -12.081  38.372  31.383  1.00 44.57           C  
ATOM   6879  OH  TYR A 902     -11.621  38.884  32.569  1.00 46.34           O  
ATOM   6880  N   LEU A 903     -16.328  37.908  29.117  1.00 35.61           N  
ATOM   6881  CA  LEU A 903     -17.002  38.986  29.811  1.00 35.53           C  
ATOM   6882  C   LEU A 903     -16.628  38.916  31.268  1.00 32.31           C  
ATOM   6883  O   LEU A 903     -16.831  37.871  31.922  1.00 27.05           O  
ATOM   6884  CB  LEU A 903     -18.515  38.832  29.708  1.00 37.80           C  
ATOM   6885  CG  LEU A 903     -19.283  39.678  30.708  1.00 38.34           C  
ATOM   6886  CD1 LEU A 903     -19.145  41.141  30.325  1.00 39.61           C  
ATOM   6887  CD2 LEU A 903     -20.741  39.260  30.725  1.00 40.26           C  
ATOM   6888  N   SER A 904     -16.081  40.022  31.770  1.00 31.86           N  
ATOM   6889  CA  SER A 904     -15.859  40.202  33.205  1.00 30.74           C  
ATOM   6890  C   SER A 904     -16.817  41.291  33.599  1.00 31.48           C  
ATOM   6891  O   SER A 904     -16.649  42.449  33.205  1.00 31.57           O  
ATOM   6892  CB  SER A 904     -14.435  40.681  33.528  1.00 33.21           C  
ATOM   6893  OG  SER A 904     -14.377  41.156  34.883  1.00 33.15           O  
ATOM   6894  N   TYR A 905     -17.823  40.929  34.389  1.00 32.12           N  
ATOM   6895  CA  TYR A 905     -18.928  41.847  34.635  1.00 28.09           C  
ATOM   6896  C   TYR A 905     -18.464  43.005  35.496  1.00 27.48           C  
ATOM   6897  O   TYR A 905     -18.856  44.127  35.263  1.00 29.74           O  
ATOM   6898  CB  TYR A 905     -20.165  41.112  35.255  1.00 27.08           C  
ATOM   6899  CG  TYR A 905     -21.262  42.085  35.619  1.00 26.61           C  
ATOM   6900  CD1 TYR A 905     -22.033  42.665  34.632  1.00 26.57           C  
ATOM   6901  CD2 TYR A 905     -21.470  42.479  36.932  1.00 25.66           C  
ATOM   6902  CE1 TYR A 905     -23.001  43.616  34.933  1.00 28.21           C  
ATOM   6903  CE2 TYR A 905     -22.455  43.401  37.243  1.00 28.80           C  
ATOM   6904  CZ  TYR A 905     -23.206  43.972  36.226  1.00 28.38           C  
ATOM   6905  OH  TYR A 905     -24.167  44.897  36.487  1.00 29.14           O  
ATOM   6906  N   PRO A 906     -17.634  42.747  36.514  1.00 27.15           N  
ATOM   6907  CA  PRO A 906     -17.177  43.914  37.280  1.00 27.54           C  
ATOM   6908  C   PRO A 906     -16.528  45.016  36.433  1.00 28.91           C  
ATOM   6909  O   PRO A 906     -16.746  46.203  36.668  1.00 31.24           O  
ATOM   6910  CB  PRO A 906     -16.164  43.312  38.264  1.00 26.14           C  
ATOM   6911  CG  PRO A 906     -16.680  41.937  38.472  1.00 26.63           C  
ATOM   6912  CD  PRO A 906     -17.180  41.488  37.115  1.00 25.88           C  
ATOM   6913  N   CYS A 907     -15.759  44.587  35.460  1.00 29.44           N  
ATOM   6914  CA  CYS A 907     -15.111  45.452  34.493  1.00 31.74           C  
ATOM   6915  C   CYS A 907     -16.060  46.118  33.489  1.00 30.63           C  
ATOM   6916  O   CYS A 907     -15.953  47.293  33.193  1.00 31.61           O  
ATOM   6917  CB  CYS A 907     -14.172  44.574  33.706  1.00 32.87           C  
ATOM   6918  SG  CYS A 907     -12.648  45.322  33.286  1.00 37.64           S  
ATOM   6919  N   SER A 908     -16.975  45.353  32.936  1.00 29.75           N  
ATOM   6920  CA  SER A 908     -17.884  45.910  31.931  1.00 29.18           C  
ATOM   6921  C   SER A 908     -18.895  46.855  32.552  1.00 29.15           C  
ATOM   6922  O   SER A 908     -19.264  47.887  31.954  1.00 29.56           O  
ATOM   6923  CB  SER A 908     -18.558  44.807  31.127  1.00 30.65           C  
ATOM   6924  OG  SER A 908     -17.560  43.976  30.539  1.00 30.02           O  
ATOM   6925  N   MET A 909     -19.309  46.565  33.770  1.00 27.09           N  
ATOM   6926  CA  MET A 909     -20.230  47.459  34.430  1.00 28.98           C  
ATOM   6927  C   MET A 909     -19.590  48.811  34.639  1.00 28.51           C  
ATOM   6928  O   MET A 909     -20.292  49.808  34.590  1.00 30.29           O  
ATOM   6929  CB  MET A 909     -20.744  46.885  35.759  1.00 31.05           C  
ATOM   6930  CG  MET A 909     -19.807  47.072  36.936  1.00 33.48           C  
ATOM   6931  SD  MET A 909     -20.175  46.131  38.449  1.00 34.06           S  
ATOM   6932  CE  MET A 909     -18.910  46.786  39.572  1.00 31.18           C  
ATOM   6933  N   LEU A 910     -18.277  48.863  34.882  1.00 25.09           N  
ATOM   6934  CA  LEU A 910     -17.616  50.138  35.031  1.00 23.49           C  
ATOM   6935  C   LEU A 910     -17.428  50.774  33.654  1.00 21.86           C  
ATOM   6936  O   LEU A 910     -17.666  51.962  33.478  1.00 20.48           O  
ATOM   6937  CB  LEU A 910     -16.269  50.011  35.753  1.00 23.88           C  
ATOM   6938  CG  LEU A 910     -16.372  49.675  37.246  1.00 24.80           C  
ATOM   6939  CD1 LEU A 910     -15.091  49.023  37.690  1.00 27.35           C  
ATOM   6940  CD2 LEU A 910     -16.602  50.907  38.105  1.00 23.77           C  
ATOM   6941  N   ASN A 911     -16.999  49.991  32.681  1.00 21.23           N  
ATOM   6942  CA  ASN A 911     -16.712  50.543  31.350  1.00 21.33           C  
ATOM   6943  C   ASN A 911     -17.977  51.113  30.679  1.00 22.07           C  
ATOM   6944  O   ASN A 911     -17.933  52.167  30.011  1.00 20.68           O  
ATOM   6945  CB  ASN A 911     -16.013  49.516  30.481  1.00 20.51           C  
ATOM   6946  CG  ASN A 911     -14.558  49.299  30.883  1.00 20.74           C  
ATOM   6947  OD1 ASN A 911     -13.964  50.124  31.548  1.00 19.80           O  
ATOM   6948  ND2 ASN A 911     -14.000  48.188  30.491  1.00 21.77           N  
ATOM   6949  N   TYR A 912     -19.118  50.457  30.899  1.00 22.57           N  
ATOM   6950  CA  TYR A 912     -20.379  50.976  30.353  1.00 22.43           C  
ATOM   6951  C   TYR A 912     -20.597  52.369  30.911  1.00 21.20           C  
ATOM   6952  O   TYR A 912     -20.872  53.311  30.163  1.00 20.67           O  
ATOM   6953  CB  TYR A 912     -21.591  50.061  30.637  1.00 23.40           C  
ATOM   6954  CG  TYR A 912     -22.903  50.714  30.236  1.00 27.05           C  
ATOM   6955  CD1 TYR A 912     -23.297  50.776  28.889  1.00 29.54           C  
ATOM   6956  CD2 TYR A 912     -23.733  51.294  31.196  1.00 33.07           C  
ATOM   6957  CE1 TYR A 912     -24.489  51.386  28.515  1.00 33.67           C  
ATOM   6958  CE2 TYR A 912     -24.946  51.915  30.836  1.00 36.10           C  
ATOM   6959  CZ  TYR A 912     -25.314  51.959  29.502  1.00 36.73           C  
ATOM   6960  OH  TYR A 912     -26.482  52.598  29.166  1.00 43.65           O  
ATOM   6961  N   ARG A 913     -20.409  52.526  32.210  1.00 21.86           N  
ATOM   6962  CA  ARG A 913     -20.546  53.855  32.798  1.00 23.87           C  
ATOM   6963  C   ARG A 913     -19.503  54.866  32.330  1.00 24.66           C  
ATOM   6964  O   ARG A 913     -19.824  56.033  32.187  1.00 24.20           O  
ATOM   6965  CB  ARG A 913     -20.487  53.828  34.307  1.00 26.97           C  
ATOM   6966  CG  ARG A 913     -21.599  53.056  34.949  1.00 29.20           C  
ATOM   6967  CD  ARG A 913     -21.663  53.357  36.427  1.00 30.55           C  
ATOM   6968  NE  ARG A 913     -22.904  52.848  36.979  1.00 30.61           N  
ATOM   6969  CZ  ARG A 913     -23.499  53.310  38.068  1.00 31.15           C  
ATOM   6970  NH1 ARG A 913     -22.986  54.312  38.760  1.00 27.50           N  
ATOM   6971  NH2 ARG A 913     -24.643  52.756  38.456  1.00 33.80           N  
ATOM   6972  N   VAL A 914     -18.246  54.443  32.156  1.00 25.61           N  
ATOM   6973  CA  VAL A 914     -17.225  55.352  31.646  1.00 23.64           C  
ATOM   6974  C   VAL A 914     -17.677  55.845  30.261  1.00 22.20           C  
ATOM   6975  O   VAL A 914     -17.522  56.987  29.904  1.00 20.07           O  
ATOM   6976  CB  VAL A 914     -15.876  54.668  31.510  1.00 24.83           C  
ATOM   6977  CG1 VAL A 914     -14.890  55.607  30.848  1.00 25.60           C  
ATOM   6978  CG2 VAL A 914     -15.340  54.209  32.860  1.00 25.13           C  
ATOM   6979  N   HIS A 915     -18.269  54.985  29.469  1.00 21.99           N  
ATOM   6980  CA  HIS A 915     -18.633  55.421  28.165  1.00 23.34           C  
ATOM   6981  C   HIS A 915     -19.865  56.370  28.131  1.00 27.58           C  
ATOM   6982  O   HIS A 915     -19.927  57.252  27.252  1.00 28.52           O  
ATOM   6983  CB  HIS A 915     -18.676  54.237  27.251  1.00 22.41           C  
ATOM   6984  CG  HIS A 915     -17.302  53.774  26.922  1.00 24.66           C  
ATOM   6985  ND1 HIS A 915     -16.845  53.676  25.625  1.00 25.26           N  
ATOM   6986  CD2 HIS A 915     -16.245  53.478  27.730  1.00 22.69           C  
ATOM   6987  CE1 HIS A 915     -15.566  53.343  25.641  1.00 26.17           C  
ATOM   6988  NE2 HIS A 915     -15.186  53.211  26.900  1.00 26.94           N  
ATOM   6989  N   GLN A 916     -20.735  56.265  29.130  1.00 27.75           N  
ATOM   6990  CA  GLN A 916     -21.868  57.195  29.281  1.00 32.82           C  
ATOM   6991  C   GLN A 916     -21.411  58.565  29.703  1.00 36.10           C  
ATOM   6992  O   GLN A 916     -22.074  59.577  29.390  1.00 36.01           O  
ATOM   6993  CB  GLN A 916     -22.889  56.704  30.349  1.00 33.60           C  
ATOM   6994  CG  GLN A 916     -23.720  55.475  29.929  1.00 35.31           C  
ATOM   6995  CD  GLN A 916     -24.538  55.681  28.633  1.00 43.16           C  
ATOM   6996  OE1 GLN A 916     -24.287  55.038  27.605  1.00 41.15           O  
ATOM   6997  NE2 GLN A 916     -25.510  56.575  28.687  1.00 40.58           N  
ATOM   6998  N   LYS A 917     -20.314  58.615  30.457  1.00 31.41           N  
ATOM   6999  CA  LYS A 917     -19.984  59.827  31.112  1.00 28.56           C  
ATOM   7000  C   LYS A 917     -18.785  60.549  30.542  1.00 27.02           C  
ATOM   7001  O   LYS A 917     -18.651  61.755  30.768  1.00 28.19           O  
ATOM   7002  CB  LYS A 917     -19.740  59.556  32.598  1.00 33.46           C  
ATOM   7003  CG  LYS A 917     -20.934  58.973  33.349  1.00 37.07           C  
ATOM   7004  CD  LYS A 917     -20.852  59.443  34.794  1.00 44.06           C  
ATOM   7005  CE  LYS A 917     -22.060  59.035  35.618  1.00 46.67           C  
ATOM   7006  NZ  LYS A 917     -22.047  57.559  35.728  1.00 45.23           N  
ATOM   7007  N   PHE A 918     -17.887  59.846  29.855  1.00 24.51           N  
ATOM   7008  CA  PHE A 918     -16.624  60.457  29.471  1.00 23.77           C  
ATOM   7009  C   PHE A 918     -16.324  60.372  27.991  1.00 23.10           C  
ATOM   7010  O   PHE A 918     -15.173  60.601  27.543  1.00 20.31           O  
ATOM   7011  CB  PHE A 918     -15.483  59.862  30.303  1.00 22.71           C  
ATOM   7012  CG  PHE A 918     -15.627  60.137  31.747  1.00 21.40           C  
ATOM   7013  CD1 PHE A 918     -15.306  61.366  32.258  1.00 23.07           C  
ATOM   7014  CD2 PHE A 918     -16.189  59.189  32.588  1.00 21.67           C  
ATOM   7015  CE1 PHE A 918     -15.455  61.640  33.601  1.00 21.50           C  
ATOM   7016  CE2 PHE A 918     -16.373  59.458  33.950  1.00 21.64           C  
ATOM   7017  CZ  PHE A 918     -15.980  60.673  34.457  1.00 22.26           C  
ATOM   7018  N   THR A 919     -17.354  60.123  27.208  1.00 21.13           N  
ATOM   7019  CA  THR A 919     -17.199  60.089  25.746  1.00 19.87           C  
ATOM   7020  C   THR A 919     -17.086  61.500  25.243  1.00 21.30           C  
ATOM   7021  O   THR A 919     -17.803  62.373  25.688  1.00 20.32           O  
ATOM   7022  CB  THR A 919     -18.343  59.301  25.101  1.00 19.66           C  
ATOM   7023  OG1 THR A 919     -18.236  57.919  25.489  1.00 18.17           O  
ATOM   7024  CG2 THR A 919     -18.317  59.380  23.604  1.00 20.42           C  
ATOM   7025  N   ASN A 920     -16.167  61.727  24.305  1.00 21.79           N  
ATOM   7026  CA  ASN A 920     -16.106  62.969  23.548  1.00 21.10           C  
ATOM   7027  C   ASN A 920     -16.971  62.918  22.293  1.00 23.11           C  
ATOM   7028  O   ASN A 920     -16.581  62.339  21.302  1.00 22.82           O  
ATOM   7029  CB  ASN A 920     -14.696  63.232  23.159  1.00 20.86           C  
ATOM   7030  CG  ASN A 920     -14.541  64.452  22.321  1.00 20.11           C  
ATOM   7031  OD1 ASN A 920     -15.451  65.218  22.193  1.00 18.59           O  
ATOM   7032  ND2 ASN A 920     -13.333  64.685  21.822  1.00 19.42           N  
ATOM   7033  N   HIS A 921     -18.137  63.573  22.336  1.00 26.13           N  
ATOM   7034  CA  HIS A 921     -19.061  63.647  21.183  1.00 27.09           C  
ATOM   7035  C   HIS A 921     -18.721  64.709  20.159  1.00 27.03           C  
ATOM   7036  O   HIS A 921     -19.378  64.786  19.166  1.00 35.83           O  
ATOM   7037  CB  HIS A 921     -20.533  63.806  21.666  1.00 26.53           C  
ATOM   7038  CG  HIS A 921     -21.010  62.611  22.423  1.00 27.02           C  
ATOM   7039  ND1 HIS A 921     -21.183  61.378  21.826  1.00 29.58           N  
ATOM   7040  CD2 HIS A 921     -21.252  62.427  23.745  1.00 26.53           C  
ATOM   7041  CE1 HIS A 921     -21.513  60.489  22.749  1.00 28.23           C  
ATOM   7042  NE2 HIS A 921     -21.550  61.105  23.918  1.00 26.86           N  
ATOM   7043  N   GLN A 922     -17.687  65.504  20.403  1.00 27.32           N  
ATOM   7044  CA  GLN A 922     -17.297  66.633  19.586  1.00 24.88           C  
ATOM   7045  C   GLN A 922     -15.996  66.384  18.771  1.00 26.63           C  
ATOM   7046  O   GLN A 922     -15.437  67.337  18.214  1.00 28.06           O  
ATOM   7047  CB  GLN A 922     -17.069  67.853  20.473  1.00 24.38           C  
ATOM   7048  CG  GLN A 922     -18.188  68.279  21.455  1.00 25.62           C  
ATOM   7049  CD  GLN A 922     -17.720  69.390  22.403  1.00 28.30           C  
ATOM   7050  OE1 GLN A 922     -17.286  69.140  23.544  1.00 27.58           O  
ATOM   7051  NE2 GLN A 922     -17.680  70.627  21.887  1.00 31.46           N  
ATOM   7052  N   TYR A 923     -15.510  65.139  18.683  1.00 25.19           N  
ATOM   7053  CA  TYR A 923     -14.248  64.855  17.971  1.00 24.65           C  
ATOM   7054  C   TYR A 923     -14.407  65.133  16.450  1.00 23.86           C  
ATOM   7055  O   TYR A 923     -15.261  64.574  15.788  1.00 24.02           O  
ATOM   7056  CB  TYR A 923     -13.838  63.397  18.182  1.00 23.05           C  
ATOM   7057  CG  TYR A 923     -12.385  63.057  17.873  1.00 23.43           C  
ATOM   7058  CD1 TYR A 923     -11.922  63.012  16.585  1.00 25.05           C  
ATOM   7059  CD2 TYR A 923     -11.483  62.671  18.891  1.00 24.63           C  
ATOM   7060  CE1 TYR A 923     -10.603  62.628  16.289  1.00 25.41           C  
ATOM   7061  CE2 TYR A 923     -10.157  62.336  18.607  1.00 22.51           C  
ATOM   7062  CZ  TYR A 923      -9.729  62.329  17.307  1.00 23.73           C  
ATOM   7063  OH  TYR A 923      -8.434  61.991  16.981  1.00 25.26           O  
ATOM   7064  N   GLN A 924     -13.596  65.984  15.888  1.00 21.70           N  
ATOM   7065  CA  GLN A 924     -13.655  66.157  14.451  1.00 23.53           C  
ATOM   7066  C   GLN A 924     -12.407  65.658  13.730  1.00 27.21           C  
ATOM   7067  O   GLN A 924     -11.294  65.562  14.283  1.00 24.70           O  
ATOM   7068  CB  GLN A 924     -13.911  67.598  14.095  1.00 22.90           C  
ATOM   7069  CG  GLN A 924     -15.106  68.228  14.813  1.00 24.75           C  
ATOM   7070  CD  GLN A 924     -15.561  69.530  14.155  1.00 25.55           C  
ATOM   7071  OE1 GLN A 924     -15.523  69.644  12.946  1.00 25.29           O  
ATOM   7072  NE2 GLN A 924     -15.975  70.511  14.958  1.00 27.04           N  
ATOM   7073  N   GLU A 925     -12.591  65.398  12.453  1.00 30.12           N  
ATOM   7074  CA  GLU A 925     -11.565  64.803  11.655  1.00 33.81           C  
ATOM   7075  C   GLU A 925     -11.818  65.115  10.221  1.00 32.79           C  
ATOM   7076  O   GLU A 925     -12.962  65.006   9.797  1.00 29.74           O  
ATOM   7077  CB  GLU A 925     -11.658  63.296  11.826  1.00 40.62           C  
ATOM   7078  CG  GLU A 925     -10.550  62.546  11.111  1.00 48.14           C  
ATOM   7079  CD  GLU A 925     -10.227  61.240  11.767  1.00 53.44           C  
ATOM   7080  OE1 GLU A 925     -11.123  60.651  12.410  1.00 62.18           O  
ATOM   7081  OE2 GLU A 925      -9.073  60.818  11.629  1.00 62.05           O  
ATOM   7082  N   LEU A 926     -10.771  65.497   9.493  1.00 33.15           N  
ATOM   7083  CA  LEU A 926     -10.873  65.815   8.054  1.00 34.55           C  
ATOM   7084  C   LEU A 926     -11.357  64.625   7.305  1.00 32.91           C  
ATOM   7085  O   LEU A 926     -10.670  63.629   7.252  1.00 41.44           O  
ATOM   7086  CB  LEU A 926      -9.520  66.140   7.439  1.00 34.46           C  
ATOM   7087  CG  LEU A 926      -9.075  67.580   7.486  1.00 37.48           C  
ATOM   7088  CD1 LEU A 926      -7.587  67.673   7.156  1.00 38.65           C  
ATOM   7089  CD2 LEU A 926      -9.926  68.445   6.531  1.00 38.03           C  
ATOM   7090  N   LYS A 927     -12.521  64.720   6.719  1.00 33.90           N  
ATOM   7091  CA  LYS A 927     -13.012  63.641   5.887  1.00 40.79           C  
ATOM   7092  C   LYS A 927     -12.550  63.843   4.438  1.00 43.80           C  
ATOM   7093  O   LYS A 927     -12.401  62.877   3.713  1.00 51.44           O  
ATOM   7094  CB  LYS A 927     -14.522  63.586   5.936  1.00 46.88           C  
ATOM   7095  CG  LYS A 927     -15.113  62.365   5.271  1.00 58.67           C  
ATOM   7096  CD  LYS A 927     -16.631  62.364   5.396  1.00 66.42           C  
ATOM   7097  CE  LYS A 927     -17.301  63.313   4.407  1.00 70.34           C  
ATOM   7098  NZ  LYS A 927     -18.776  63.083   4.452  1.00 74.53           N  
ATOM   7099  N   ASP A 928     -12.339  65.086   4.002  1.00 40.24           N  
ATOM   7100  CA  ASP A 928     -11.884  65.339   2.628  1.00 37.95           C  
ATOM   7101  C   ASP A 928     -10.944  66.515   2.637  1.00 34.35           C  
ATOM   7102  O   ASP A 928     -11.402  67.644   2.718  1.00 31.80           O  
ATOM   7103  CB  ASP A 928     -13.103  65.627   1.728  1.00 39.04           C  
ATOM   7104  CG  ASP A 928     -12.724  66.151   0.325  1.00 42.06           C  
ATOM   7105  OD1 ASP A 928     -11.515  66.233  -0.059  1.00 42.98           O  
ATOM   7106  OD2 ASP A 928     -13.670  66.505  -0.399  1.00 39.88           O  
ATOM   7107  N   PRO A 929      -9.620  66.265   2.550  1.00 36.53           N  
ATOM   7108  CA  PRO A 929      -8.689  67.373   2.768  1.00 37.74           C  
ATOM   7109  C   PRO A 929      -8.644  68.406   1.637  1.00 40.73           C  
ATOM   7110  O   PRO A 929      -8.305  69.577   1.871  1.00 41.12           O  
ATOM   7111  CB  PRO A 929      -7.320  66.678   2.952  1.00 42.95           C  
ATOM   7112  CG  PRO A 929      -7.473  65.308   2.356  1.00 44.11           C  
ATOM   7113  CD  PRO A 929      -8.943  64.968   2.338  1.00 39.82           C  
ATOM   7114  N   LEU A 930      -8.975  68.013   0.409  1.00 40.18           N  
ATOM   7115  CA  LEU A 930      -8.868  68.984  -0.690  1.00 40.02           C  
ATOM   7116  C   LEU A 930      -9.885  70.057  -0.451  1.00 37.79           C  
ATOM   7117  O   LEU A 930      -9.653  71.258  -0.715  1.00 39.30           O  
ATOM   7118  CB  LEU A 930      -9.051  68.322  -2.067  1.00 41.39           C  
ATOM   7119  CG  LEU A 930      -7.935  67.302  -2.334  1.00 45.03           C  
ATOM   7120  CD1 LEU A 930      -8.228  66.417  -3.538  1.00 47.19           C  
ATOM   7121  CD2 LEU A 930      -6.590  68.008  -2.502  1.00 47.46           C  
ATOM   7122  N   ASN A 931     -11.015  69.633   0.094  1.00 35.97           N  
ATOM   7123  CA  ASN A 931     -12.104  70.564   0.320  1.00 41.37           C  
ATOM   7124  C   ASN A 931     -12.246  71.018   1.760  1.00 38.45           C  
ATOM   7125  O   ASN A 931     -13.089  71.858   2.039  1.00 39.35           O  
ATOM   7126  CB  ASN A 931     -13.406  69.981  -0.215  1.00 42.10           C  
ATOM   7127  CG  ASN A 931     -13.407  69.893  -1.745  1.00 46.44           C  
ATOM   7128  OD1 ASN A 931     -13.302  70.915  -2.441  1.00 42.07           O  
ATOM   7129  ND2 ASN A 931     -13.514  68.668  -2.273  1.00 44.11           N  
ATOM   7130  N   TYR A 932     -11.413  70.482   2.666  1.00 37.15           N  
ATOM   7131  CA  TYR A 932     -11.490  70.879   4.060  1.00 34.04           C  
ATOM   7132  C   TYR A 932     -12.876  70.547   4.611  1.00 29.78           C  
ATOM   7133  O   TYR A 932     -13.480  71.320   5.312  1.00 29.06           O  
ATOM   7134  CB  TYR A 932     -11.145  72.378   4.221  1.00 34.27           C  
ATOM   7135  CG  TYR A 932      -9.771  72.711   3.614  1.00 39.85           C  
ATOM   7136  CD1 TYR A 932      -8.594  72.247   4.217  1.00 40.65           C  
ATOM   7137  CD2 TYR A 932      -9.647  73.428   2.406  1.00 40.08           C  
ATOM   7138  CE1 TYR A 932      -7.336  72.493   3.660  1.00 45.26           C  
ATOM   7139  CE2 TYR A 932      -8.379  73.693   1.843  1.00 44.81           C  
ATOM   7140  CZ  TYR A 932      -7.223  73.228   2.468  1.00 46.22           C  
ATOM   7141  OH  TYR A 932      -5.952  73.467   1.944  1.00 45.38           O  
ATOM   7142  N   ILE A 933     -13.389  69.369   4.314  1.00 31.67           N  
ATOM   7143  CA  ILE A 933     -14.673  68.996   4.905  1.00 29.92           C  
ATOM   7144  C   ILE A 933     -14.360  68.120   6.089  1.00 28.75           C  
ATOM   7145  O   ILE A 933     -13.601  67.132   5.971  1.00 30.56           O  
ATOM   7146  CB  ILE A 933     -15.596  68.325   3.891  1.00 34.10           C  
ATOM   7147  CG1 ILE A 933     -16.137  69.415   2.933  1.00 37.88           C  
ATOM   7148  CG2 ILE A 933     -16.781  67.613   4.569  1.00 35.88           C  
ATOM   7149  CD1 ILE A 933     -16.553  68.893   1.564  1.00 39.38           C  
ATOM   7150  N   TYR A 934     -14.889  68.555   7.227  1.00 26.94           N  
ATOM   7151  CA  TYR A 934     -14.816  67.858   8.513  1.00 31.30           C  
ATOM   7152  C   TYR A 934     -16.019  67.031   8.790  1.00 30.73           C  
ATOM   7153  O   TYR A 934     -17.087  67.352   8.347  1.00 36.50           O  
ATOM   7154  CB  TYR A 934     -14.643  68.861   9.654  1.00 31.19           C  
ATOM   7155  CG  TYR A 934     -13.229  69.409   9.667  1.00 30.59           C  
ATOM   7156  CD1 TYR A 934     -12.240  68.763  10.387  1.00 30.26           C  
ATOM   7157  CD2 TYR A 934     -12.891  70.552   8.955  1.00 27.86           C  
ATOM   7158  CE1 TYR A 934     -10.945  69.240  10.409  1.00 28.85           C  
ATOM   7159  CE2 TYR A 934     -11.595  71.062   8.996  1.00 30.27           C  
ATOM   7160  CZ  TYR A 934     -10.624  70.381   9.718  1.00 30.66           C  
ATOM   7161  OH  TYR A 934      -9.325  70.836   9.770  1.00 33.34           O  
ATOM   7162  N   GLU A 935     -15.798  65.912   9.459  1.00 34.71           N  
ATOM   7163  CA  GLU A 935     -16.847  65.077   9.996  1.00 36.37           C  
ATOM   7164  C   GLU A 935     -16.704  65.039  11.547  1.00 35.26           C  
ATOM   7165  O   GLU A 935     -15.595  65.106  12.108  1.00 26.55           O  
ATOM   7166  CB  GLU A 935     -16.712  63.693   9.397  1.00 45.41           C  
ATOM   7167  CG  GLU A 935     -17.899  62.786   9.679  1.00 58.48           C  
ATOM   7168  CD  GLU A 935     -18.448  62.105   8.426  1.00 71.60           C  
ATOM   7169  OE1 GLU A 935     -19.480  62.594   7.891  1.00 69.48           O  
ATOM   7170  OE2 GLU A 935     -17.840  61.087   7.977  1.00 80.13           O  
ATOM   7171  N   THR A 936     -17.834  64.979  12.231  1.00 32.79           N  
ATOM   7172  CA  THR A 936     -17.849  64.938  13.680  1.00 34.42           C  
ATOM   7173  C   THR A 936     -18.252  63.574  14.103  1.00 33.56           C  
ATOM   7174  O   THR A 936     -19.055  62.940  13.432  1.00 34.08           O  
ATOM   7175  CB  THR A 936     -18.838  65.944  14.279  1.00 32.35           C  
ATOM   7176  OG1 THR A 936     -18.387  67.249  13.935  1.00 35.40           O  
ATOM   7177  CG2 THR A 936     -18.858  65.827  15.808  1.00 32.39           C  
ATOM   7178  N   HIS A 937     -17.663  63.099  15.193  1.00 30.60           N  
ATOM   7179  CA  HIS A 937     -18.081  61.853  15.785  1.00 31.58           C  
ATOM   7180  C   HIS A 937     -17.746  61.720  17.275  1.00 29.85           C  
ATOM   7181  O   HIS A 937     -17.362  62.696  17.953  1.00 26.71           O  
ATOM   7182  CB  HIS A 937     -17.534  60.688  14.981  1.00 39.88           C  
ATOM   7183  CG  HIS A 937     -16.059  60.540  15.044  1.00 43.91           C  
ATOM   7184  ND1 HIS A 937     -15.212  61.194  14.177  1.00 52.66           N  
ATOM   7185  CD2 HIS A 937     -15.281  59.756  15.826  1.00 51.87           C  
ATOM   7186  CE1 HIS A 937     -13.966  60.843  14.445  1.00 57.04           C  
ATOM   7187  NE2 HIS A 937     -13.980  59.979  15.448  1.00 54.16           N  
ATOM   7188  N   SER A 938     -17.981  60.518  17.770  1.00 26.33           N  
ATOM   7189  CA  SER A 938     -17.980  60.227  19.157  1.00 28.38           C  
ATOM   7190  C   SER A 938     -16.794  59.303  19.387  1.00 29.04           C  
ATOM   7191  O   SER A 938     -16.706  58.264  18.764  1.00 26.92           O  
ATOM   7192  CB  SER A 938     -19.296  59.543  19.562  1.00 27.79           C  
ATOM   7193  OG  SER A 938     -20.349  60.515  19.705  1.00 28.51           O  
ATOM   7194  N   GLU A 939     -15.915  59.704  20.280  1.00 26.54           N  
ATOM   7195  CA  GLU A 939     -14.728  58.979  20.619  1.00 24.76           C  
ATOM   7196  C   GLU A 939     -14.629  58.665  22.101  1.00 21.76           C  
ATOM   7197  O   GLU A 939     -14.932  59.481  22.919  1.00 20.26           O  
ATOM   7198  CB  GLU A 939     -13.521  59.796  20.199  1.00 26.10           C  
ATOM   7199  CG  GLU A 939     -12.192  59.088  20.224  1.00 29.17           C  
ATOM   7200  CD  GLU A 939     -11.942  58.223  19.008  1.00 34.22           C  
ATOM   7201  OE1 GLU A 939     -12.595  58.423  17.997  1.00 47.86           O  
ATOM   7202  OE2 GLU A 939     -11.106  57.344  19.035  1.00 35.08           O  
ATOM   7203  N   ASN A 940     -14.147  57.471  22.393  1.00 21.05           N  
ATOM   7204  CA  ASN A 940     -13.831  56.986  23.721  1.00 21.05           C  
ATOM   7205  C   ASN A 940     -13.026  55.687  23.702  1.00 20.63           C  
ATOM   7206  O   ASN A 940     -13.526  54.658  23.436  1.00 19.39           O  
ATOM   7207  CB  ASN A 940     -15.085  56.820  24.597  1.00 21.16           C  
ATOM   7208  CG  ASN A 940     -14.777  56.643  26.080  1.00 21.70           C  
ATOM   7209  OD1 ASN A 940     -13.748  56.179  26.462  1.00 20.99           O  
ATOM   7210  ND2 ASN A 940     -15.716  56.983  26.897  1.00 23.60           N  
ATOM   7211  N   THR A 941     -11.775  55.790  24.085  1.00 21.53           N  
ATOM   7212  CA  THR A 941     -10.870  54.671  24.158  1.00 22.55           C  
ATOM   7213  C   THR A 941     -10.407  54.385  25.587  1.00 22.65           C  
ATOM   7214  O   THR A 941      -9.373  53.837  25.801  1.00 22.53           O  
ATOM   7215  CB  THR A 941      -9.643  54.840  23.228  1.00 21.83           C  
ATOM   7216  OG1 THR A 941      -8.933  56.011  23.572  1.00 20.71           O  
ATOM   7217  CG2 THR A 941     -10.037  54.898  21.767  1.00 20.51           C  
ATOM   7218  N   ILE A 942     -11.220  54.738  26.550  1.00 21.83           N  
ATOM   7219  CA  ILE A 942     -10.890  54.503  27.963  1.00 20.45           C  
ATOM   7220  C   ILE A 942     -11.533  53.232  28.539  1.00 21.71           C  
ATOM   7221  O   ILE A 942     -12.736  53.170  28.671  1.00 21.33           O  
ATOM   7222  CB  ILE A 942     -11.333  55.699  28.797  1.00 18.88           C  
ATOM   7223  CG1 ILE A 942     -10.769  56.986  28.247  1.00 18.44           C  
ATOM   7224  CG2 ILE A 942     -10.940  55.427  30.236  1.00 20.68           C  
ATOM   7225  CD1 ILE A 942     -11.369  58.334  28.753  1.00 19.39           C  
ATOM   7226  N   PHE A 943     -10.744  52.226  28.931  1.00 21.88           N  
ATOM   7227  CA  PHE A 943     -11.288  50.959  29.416  1.00 22.06           C  
ATOM   7228  C   PHE A 943     -10.521  50.432  30.625  1.00 21.52           C  
ATOM   7229  O   PHE A 943      -9.294  50.285  30.598  1.00 22.57           O  
ATOM   7230  CB  PHE A 943     -11.245  49.866  28.350  1.00 22.40           C  
ATOM   7231  CG  PHE A 943     -12.023  50.181  27.087  1.00 26.04           C  
ATOM   7232  CD1 PHE A 943     -13.335  49.767  26.953  1.00 24.27           C  
ATOM   7233  CD2 PHE A 943     -11.400  50.805  25.993  1.00 24.80           C  
ATOM   7234  CE1 PHE A 943     -14.016  50.032  25.787  1.00 28.38           C  
ATOM   7235  CE2 PHE A 943     -12.077  51.059  24.821  1.00 27.16           C  
ATOM   7236  CZ  PHE A 943     -13.390  50.683  24.710  1.00 28.68           C  
ATOM   7237  N   PHE A 944     -11.258  50.093  31.651  1.00 21.01           N  
ATOM   7238  CA  PHE A 944     -10.748  49.313  32.754  1.00 23.44           C  
ATOM   7239  C   PHE A 944     -10.458  47.914  32.275  1.00 22.81           C  
ATOM   7240  O   PHE A 944     -11.236  47.374  31.524  1.00 21.80           O  
ATOM   7241  CB  PHE A 944     -11.742  49.266  33.943  1.00 21.17           C  
ATOM   7242  CG  PHE A 944     -11.775  50.546  34.745  1.00 20.68           C  
ATOM   7243  CD1 PHE A 944     -10.859  50.773  35.732  1.00 20.05           C  
ATOM   7244  CD2 PHE A 944     -12.672  51.565  34.430  1.00 19.48           C  
ATOM   7245  CE1 PHE A 944     -10.876  51.945  36.440  1.00 20.40           C  
ATOM   7246  CE2 PHE A 944     -12.683  52.723  35.131  1.00 18.26           C  
ATOM   7247  CZ  PHE A 944     -11.771  52.926  36.140  1.00 20.20           C  
ATOM   7248  N   GLU A 945      -9.360  47.338  32.762  1.00 25.24           N  
ATOM   7249  CA  GLU A 945      -9.225  45.896  32.707  1.00 27.31           C  
ATOM   7250  C   GLU A 945      -8.953  45.306  34.073  1.00 24.42           C  
ATOM   7251  O   GLU A 945      -8.491  45.968  35.008  1.00 22.86           O  
ATOM   7252  CB  GLU A 945      -8.208  45.431  31.681  1.00 35.45           C  
ATOM   7253  CG  GLU A 945      -6.825  45.997  31.805  1.00 44.03           C  
ATOM   7254  CD  GLU A 945      -6.079  46.013  30.460  1.00 54.09           C  
ATOM   7255  OE1 GLU A 945      -4.833  46.292  30.446  1.00 55.42           O  
ATOM   7256  OE2 GLU A 945      -6.749  45.785  29.418  1.00 60.14           O  
ATOM   7257  N   VAL A 946      -9.213  44.016  34.156  1.00 22.67           N  
ATOM   7258  CA  VAL A 946      -9.280  43.327  35.414  1.00 25.40           C  
ATOM   7259  C   VAL A 946      -8.150  42.291  35.500  1.00 24.75           C  
ATOM   7260  O   VAL A 946      -7.740  41.704  34.486  1.00 24.70           O  
ATOM   7261  CB  VAL A 946     -10.677  42.767  35.583  1.00 26.49           C  
ATOM   7262  CG1 VAL A 946     -10.891  41.507  34.741  1.00 26.65           C  
ATOM   7263  CG2 VAL A 946     -10.987  42.552  37.042  1.00 29.70           C  
ATOM   7264  N   ASP A 947      -7.510  42.243  36.657  1.00 23.69           N  
ATOM   7265  CA  ASP A 947      -6.627  41.144  36.976  1.00 25.72           C  
ATOM   7266  C   ASP A 947      -7.040  40.575  38.326  1.00 24.72           C  
ATOM   7267  O   ASP A 947      -7.593  41.279  39.213  1.00 23.86           O  
ATOM   7268  CB  ASP A 947      -5.117  41.508  36.873  1.00 28.34           C  
ATOM   7269  CG  ASP A 947      -4.703  42.763  37.713  1.00 28.84           C  
ATOM   7270  OD1 ASP A 947      -5.025  43.941  37.311  1.00 31.17           O  
ATOM   7271  OD2 ASP A 947      -4.009  42.575  38.762  1.00 28.38           O  
ATOM   7272  N   GLY A 948      -6.861  39.273  38.439  1.00 24.87           N  
ATOM   7273  CA  GLY A 948      -7.271  38.565  39.626  1.00 25.65           C  
ATOM   7274  C   GLY A 948      -8.235  37.484  39.244  1.00 25.33           C  
ATOM   7275  O   GLY A 948      -8.395  37.201  38.067  1.00 28.47           O  
ATOM   7276  N   PRO A 949      -8.901  36.884  40.220  1.00 26.04           N  
ATOM   7277  CA  PRO A 949      -8.891  37.174  41.655  1.00 27.38           C  
ATOM   7278  C   PRO A 949      -7.689  36.546  42.352  1.00 28.66           C  
ATOM   7279  O   PRO A 949      -7.135  35.554  41.864  1.00 31.62           O  
ATOM   7280  CB  PRO A 949     -10.175  36.524  42.132  1.00 27.30           C  
ATOM   7281  CG  PRO A 949     -10.453  35.431  41.157  1.00 25.29           C  
ATOM   7282  CD  PRO A 949      -9.736  35.711  39.896  1.00 25.90           C  
ATOM   7283  N   TYR A 950      -7.301  37.133  43.474  1.00 26.13           N  
ATOM   7284  CA  TYR A 950      -6.087  36.769  44.159  1.00 25.15           C  
ATOM   7285  C   TYR A 950      -6.356  36.035  45.474  1.00 26.73           C  
ATOM   7286  O   TYR A 950      -7.453  36.051  46.015  1.00 29.66           O  
ATOM   7287  CB  TYR A 950      -5.251  38.020  44.412  1.00 24.13           C  
ATOM   7288  CG  TYR A 950      -4.628  38.609  43.148  1.00 25.25           C  
ATOM   7289  CD1 TYR A 950      -3.511  38.036  42.552  1.00 24.95           C  
ATOM   7290  CD2 TYR A 950      -5.217  39.722  42.506  1.00 24.87           C  
ATOM   7291  CE1 TYR A 950      -3.008  38.555  41.372  1.00 24.38           C  
ATOM   7292  CE2 TYR A 950      -4.717  40.235  41.346  1.00 23.00           C  
ATOM   7293  CZ  TYR A 950      -3.600  39.680  40.800  1.00 23.17           C  
ATOM   7294  OH  TYR A 950      -3.101  40.253  39.647  1.00 21.47           O  
ATOM   7295  N   LYS A 951      -5.312  35.402  45.995  1.00 27.73           N  
ATOM   7296  CA  LYS A 951      -5.398  34.667  47.231  1.00 27.75           C  
ATOM   7297  C   LYS A 951      -5.359  35.591  48.434  1.00 26.03           C  
ATOM   7298  O   LYS A 951      -6.025  35.350  49.440  1.00 27.74           O  
ATOM   7299  CB  LYS A 951      -4.277  33.660  47.313  1.00 28.82           C  
ATOM   7300  CG  LYS A 951      -4.267  32.826  48.603  1.00 29.50           C  
ATOM   7301  CD  LYS A 951      -3.543  31.512  48.291  1.00 38.09           C  
ATOM   7302  CE  LYS A 951      -3.016  30.785  49.526  1.00 41.89           C  
ATOM   7303  NZ  LYS A 951      -4.106  29.950  50.096  1.00 45.33           N  
ATOM   7304  N   ALA A 952      -4.582  36.660  48.349  1.00 25.66           N  
ATOM   7305  CA  ALA A 952      -4.513  37.589  49.459  1.00 23.47           C  
ATOM   7306  C   ALA A 952      -3.878  38.928  49.127  1.00 22.78           C  
ATOM   7307  O   ALA A 952      -3.126  39.067  48.162  1.00 23.24           O  
ATOM   7308  CB  ALA A 952      -3.773  36.922  50.603  1.00 24.42           C  
ATOM   7309  N   MET A 953      -4.185  39.911  49.967  1.00 23.59           N  
ATOM   7310  CA  MET A 953      -3.655  41.232  49.896  1.00 24.31           C  
ATOM   7311  C   MET A 953      -3.515  41.716  51.316  1.00 24.67           C  
ATOM   7312  O   MET A 953      -4.405  41.534  52.110  1.00 28.83           O  
ATOM   7313  CB  MET A 953      -4.592  42.168  49.133  1.00 26.90           C  
ATOM   7314  CG  MET A 953      -4.053  43.595  49.015  1.00 27.36           C  
ATOM   7315  SD  MET A 953      -4.897  44.791  47.915  1.00 28.12           S  
ATOM   7316  CE  MET A 953      -3.598  46.021  47.779  1.00 25.43           C  
ATOM   7317  N   ILE A 954      -2.398  42.357  51.616  1.00 24.33           N  
ATOM   7318  CA  ILE A 954      -2.079  42.834  52.943  1.00 23.52           C  
ATOM   7319  C   ILE A 954      -1.684  44.251  52.838  1.00 21.90           C  
ATOM   7320  O   ILE A 954      -0.771  44.576  52.075  1.00 23.50           O  
ATOM   7321  CB  ILE A 954      -0.896  42.043  53.543  1.00 24.49           C  
ATOM   7322  CG1 ILE A 954      -1.254  40.566  53.608  1.00 24.12           C  
ATOM   7323  CG2 ILE A 954      -0.637  42.499  54.976  1.00 24.83           C  
ATOM   7324  CD1 ILE A 954      -0.712  39.726  52.491  1.00 26.42           C  
ATOM   7325  N   LEU A 955      -2.368  45.104  53.579  1.00 21.01           N  
ATOM   7326  CA  LEU A 955      -2.134  46.520  53.548  1.00 20.37           C  
ATOM   7327  C   LEU A 955      -1.803  46.997  54.934  1.00 20.01           C  
ATOM   7328  O   LEU A 955      -2.517  46.663  55.877  1.00 25.59           O  
ATOM   7329  CB  LEU A 955      -3.373  47.283  53.038  1.00 20.57           C  
ATOM   7330  CG  LEU A 955      -3.892  46.806  51.681  1.00 21.41           C  
ATOM   7331  CD1 LEU A 955      -5.027  45.811  51.832  1.00 24.21           C  
ATOM   7332  CD2 LEU A 955      -4.444  47.953  50.919  1.00 20.98           C  
ATOM   7333  N   PRO A 956      -0.778  47.839  55.060  1.00 21.12           N  
ATOM   7334  CA  PRO A 956      -0.307  48.331  56.346  1.00 22.09           C  
ATOM   7335  C   PRO A 956      -1.110  49.515  56.772  1.00 24.13           C  
ATOM   7336  O   PRO A 956      -1.898  49.996  55.967  1.00 23.66           O  
ATOM   7337  CB  PRO A 956       1.128  48.750  56.036  1.00 23.23           C  
ATOM   7338  CG  PRO A 956       1.118  49.136  54.571  1.00 22.28           C  
ATOM   7339  CD  PRO A 956      -0.085  48.494  53.935  1.00 20.19           C  
ATOM   7340  N   SER A 957      -0.961  49.952  58.023  1.00 25.91           N  
ATOM   7341  CA  SER A 957      -1.620  51.145  58.511  1.00 27.08           C  
ATOM   7342  C   SER A 957      -0.621  52.088  59.078  1.00 28.94           C  
ATOM   7343  O   SER A 957       0.453  51.659  59.512  1.00 28.77           O  
ATOM   7344  CB  SER A 957      -2.629  50.844  59.609  1.00 32.23           C  
ATOM   7345  OG  SER A 957      -3.473  51.979  59.751  1.00 46.64           O  
ATOM   7346  N   SER A 958      -0.973  53.370  59.114  1.00 27.17           N  
ATOM   7347  CA  SER A 958      -0.104  54.370  59.744  1.00 32.87           C  
ATOM   7348  C   SER A 958      -0.134  54.363  61.297  1.00 34.51           C  
ATOM   7349  O   SER A 958      -1.028  53.814  61.920  1.00 36.97           O  
ATOM   7350  CB  SER A 958      -0.473  55.756  59.207  1.00 36.54           C  
ATOM   7351  OG  SER A 958      -0.285  56.762  60.150  1.00 34.75           O  
ATOM   7352  N   LYS A 959       0.877  54.975  61.896  1.00 41.09           N  
ATOM   7353  CA  LYS A 959       0.974  55.175  63.357  1.00 45.24           C  
ATOM   7354  C   LYS A 959       0.072  56.279  63.877  1.00 48.29           C  
ATOM   7355  O   LYS A 959      -0.115  56.387  65.078  1.00 44.17           O  
ATOM   7356  CB  LYS A 959       2.408  55.480  63.759  1.00 43.04           C  
ATOM   7357  CG  LYS A 959       3.318  54.309  63.419  1.00 48.90           C  
ATOM   7358  CD  LYS A 959       4.775  54.710  63.342  1.00 50.44           C  
ATOM   7359  CE  LYS A 959       5.372  54.865  64.723  1.00 52.72           C  
ATOM   7360  NZ  LYS A 959       6.787  55.279  64.537  1.00 55.65           N  
ATOM   7361  N   GLU A 960      -0.479  57.075  62.959  1.00 53.75           N  
ATOM   7362  CA  GLU A 960      -1.314  58.245  63.255  1.00 53.76           C  
ATOM   7363  C   GLU A 960      -2.803  57.901  63.181  1.00 51.96           C  
ATOM   7364  O   GLU A 960      -3.226  57.025  62.410  1.00 48.07           O  
ATOM   7365  CB  GLU A 960      -0.966  59.357  62.273  1.00 58.24           C  
ATOM   7366  CG  GLU A 960       0.539  59.598  62.220  1.00 64.20           C  
ATOM   7367  CD  GLU A 960       0.934  60.870  61.486  1.00 76.17           C  
ATOM   7368  OE1 GLU A 960       0.123  61.821  61.453  1.00 79.15           O  
ATOM   7369  OE2 GLU A 960       2.068  60.923  60.940  1.00 78.08           O  
ATOM   7370  N   GLU A 961      -3.611  58.574  63.989  1.00 50.35           N  
ATOM   7371  CA  GLU A 961      -5.030  58.195  64.078  1.00 56.83           C  
ATOM   7372  C   GLU A 961      -5.789  58.457  62.757  1.00 53.36           C  
ATOM   7373  O   GLU A 961      -5.575  59.477  62.109  1.00 58.20           O  
ATOM   7374  CB  GLU A 961      -5.706  58.918  65.251  1.00 57.29           C  
ATOM   7375  CG  GLU A 961      -7.105  58.401  65.551  1.00 57.22           C  
ATOM   7376  CD  GLU A 961      -7.651  58.868  66.904  1.00 59.10           C  
ATOM   7377  OE1 GLU A 961      -6.951  59.649  67.627  1.00 51.66           O  
ATOM   7378  OE2 GLU A 961      -8.800  58.434  67.226  1.00 55.06           O  
ATOM   7379  N   GLY A 962      -6.641  57.519  62.355  1.00 53.01           N  
ATOM   7380  CA  GLY A 962      -7.487  57.685  61.172  1.00 58.38           C  
ATOM   7381  C   GLY A 962      -6.780  57.851  59.829  1.00 61.94           C  
ATOM   7382  O   GLY A 962      -7.425  58.192  58.832  1.00 57.31           O  
ATOM   7383  N   LYS A 963      -5.465  57.598  59.787  1.00 63.49           N  
ATOM   7384  CA  LYS A 963      -4.699  57.730  58.548  1.00 56.87           C  
ATOM   7385  C   LYS A 963      -4.198  56.378  58.023  1.00 50.30           C  
ATOM   7386  O   LYS A 963      -3.820  55.481  58.784  1.00 47.44           O  
ATOM   7387  CB  LYS A 963      -3.545  58.690  58.734  1.00 58.37           C  
ATOM   7388  CG  LYS A 963      -3.056  59.212  57.415  1.00 64.87           C  
ATOM   7389  CD  LYS A 963      -1.693  59.857  57.527  1.00 70.54           C  
ATOM   7390  CE  LYS A 963      -1.636  61.089  56.631  1.00 77.01           C  
ATOM   7391  NZ  LYS A 963      -0.342  61.202  55.910  1.00 79.46           N  
ATOM   7392  N   GLY A 964      -4.250  56.221  56.704  1.00 45.20           N  
ATOM   7393  CA  GLY A 964      -3.763  55.007  56.041  1.00 37.43           C  
ATOM   7394  C   GLY A 964      -2.355  55.207  55.475  1.00 32.13           C  
ATOM   7395  O   GLY A 964      -1.703  56.224  55.721  1.00 31.03           O  
ATOM   7396  N   ILE A 965      -1.894  54.238  54.698  1.00 28.26           N  
ATOM   7397  CA  ILE A 965      -0.592  54.330  54.038  1.00 25.68           C  
ATOM   7398  C   ILE A 965      -0.895  54.055  52.571  1.00 23.78           C  
ATOM   7399  O   ILE A 965      -1.487  53.039  52.244  1.00 21.20           O  
ATOM   7400  CB  ILE A 965       0.384  53.269  54.572  1.00 25.64           C  
ATOM   7401  CG1 ILE A 965       0.739  53.496  56.046  1.00 28.35           C  
ATOM   7402  CG2 ILE A 965       1.724  53.307  53.844  1.00 25.83           C  
ATOM   7403  CD1 ILE A 965       1.472  54.785  56.304  1.00 31.28           C  
ATOM   7404  N   LYS A 966      -0.534  54.972  51.710  1.00 20.56           N  
ATOM   7405  CA  LYS A 966      -0.702  54.744  50.283  1.00 21.29           C  
ATOM   7406  C   LYS A 966       0.557  54.133  49.728  1.00 20.77           C  
ATOM   7407  O   LYS A 966       1.649  54.264  50.312  1.00 20.95           O  
ATOM   7408  CB  LYS A 966      -0.966  56.079  49.574  1.00 22.22           C  
ATOM   7409  CG  LYS A 966      -2.301  56.699  49.998  1.00 22.77           C  
ATOM   7410  CD  LYS A 966      -2.286  58.183  49.788  1.00 21.49           C  
ATOM   7411  CE  LYS A 966      -3.597  58.799  50.217  1.00 21.95           C  
ATOM   7412  NZ  LYS A 966      -3.379  60.277  50.305  1.00 23.38           N  
ATOM   7413  N   LYS A 967       0.395  53.486  48.593  1.00 20.11           N  
ATOM   7414  CA  LYS A 967       1.503  52.995  47.809  1.00 21.19           C  
ATOM   7415  C   LYS A 967       2.380  51.930  48.424  1.00 21.43           C  
ATOM   7416  O   LYS A 967       3.576  51.843  48.077  1.00 23.99           O  
ATOM   7417  CB  LYS A 967       2.364  54.159  47.329  1.00 21.45           C  
ATOM   7418  CG  LYS A 967       1.556  55.157  46.497  1.00 22.60           C  
ATOM   7419  CD  LYS A 967       2.404  56.348  46.070  1.00 21.28           C  
ATOM   7420  CE  LYS A 967       1.641  57.340  45.238  1.00 23.09           C  
ATOM   7421  NZ  LYS A 967       1.409  56.962  43.833  1.00 26.24           N  
ATOM   7422  N   ARG A 968       1.801  51.131  49.310  1.00 20.82           N  
ATOM   7423  CA  ARG A 968       2.486  49.990  49.887  1.00 22.99           C  
ATOM   7424  C   ARG A 968       1.506  48.885  50.118  1.00 19.58           C  
ATOM   7425  O   ARG A 968       0.464  49.093  50.711  1.00 17.51           O  
ATOM   7426  CB  ARG A 968       3.141  50.318  51.217  1.00 26.77           C  
ATOM   7427  CG  ARG A 968       4.013  51.520  51.149  1.00 28.71           C  
ATOM   7428  CD  ARG A 968       5.064  51.557  52.204  1.00 32.74           C  
ATOM   7429  NE  ARG A 968       6.181  52.398  51.761  1.00 34.98           N  
ATOM   7430  CZ  ARG A 968       7.339  52.453  52.402  1.00 35.62           C  
ATOM   7431  NH1 ARG A 968       7.524  51.749  53.520  1.00 33.71           N  
ATOM   7432  NH2 ARG A 968       8.318  53.204  51.910  1.00 39.65           N  
ATOM   7433  N   TYR A 969       1.816  47.720  49.589  1.00 16.90           N  
ATOM   7434  CA  TYR A 969       0.953  46.572  49.839  1.00 16.71           C  
ATOM   7435  C   TYR A 969       1.664  45.363  49.321  1.00 16.63           C  
ATOM   7436  O   TYR A 969       2.679  45.497  48.649  1.00 18.03           O  
ATOM   7437  CB  TYR A 969      -0.443  46.750  49.185  1.00 15.84           C  
ATOM   7438  CG  TYR A 969      -0.409  47.099  47.755  1.00 15.64           C  
ATOM   7439  CD1 TYR A 969      -0.211  46.111  46.796  1.00 16.91           C  
ATOM   7440  CD2 TYR A 969      -0.534  48.419  47.328  1.00 16.35           C  
ATOM   7441  CE1 TYR A 969      -0.207  46.405  45.435  1.00 17.31           C  
ATOM   7442  CE2 TYR A 969      -0.492  48.716  45.973  1.00 18.06           C  
ATOM   7443  CZ  TYR A 969      -0.348  47.693  45.041  1.00 16.92           C  
ATOM   7444  OH  TYR A 969      -0.254  47.939  43.710  1.00 19.06           O  
ATOM   7445  N   ALA A 970       1.151  44.184  49.670  1.00 17.49           N  
ATOM   7446  CA  ALA A 970       1.613  42.884  49.189  1.00 17.11           C  
ATOM   7447  C   ALA A 970       0.404  42.112  48.726  1.00 18.18           C  
ATOM   7448  O   ALA A 970      -0.625  42.140  49.374  1.00 18.11           O  
ATOM   7449  CB  ALA A 970       2.288  42.115  50.331  1.00 18.94           C  
ATOM   7450  N   VAL A 971       0.527  41.404  47.610  1.00 20.60           N  
ATOM   7451  CA  VAL A 971      -0.534  40.612  47.035  1.00 19.26           C  
ATOM   7452  C   VAL A 971       0.041  39.251  46.629  1.00 20.81           C  
ATOM   7453  O   VAL A 971       1.170  39.206  46.175  1.00 21.88           O  
ATOM   7454  CB  VAL A 971      -1.089  41.286  45.790  1.00 19.30           C  
ATOM   7455  CG1 VAL A 971      -2.210  40.439  45.143  1.00 20.16           C  
ATOM   7456  CG2 VAL A 971      -1.599  42.654  46.160  1.00 20.63           C  
ATOM   7457  N   PHE A 972      -0.732  38.170  46.809  1.00 21.34           N  
ATOM   7458  CA  PHE A 972      -0.272  36.772  46.563  1.00 24.11           C  
ATOM   7459  C   PHE A 972      -1.197  36.079  45.621  1.00 22.02           C  
ATOM   7460  O   PHE A 972      -2.400  36.289  45.702  1.00 22.70           O  
ATOM   7461  CB  PHE A 972      -0.249  35.960  47.860  1.00 25.56           C  
ATOM   7462  CG  PHE A 972       0.886  36.324  48.759  1.00 25.55           C  
ATOM   7463  CD1 PHE A 972       2.126  35.713  48.603  1.00 27.78           C  
ATOM   7464  CD2 PHE A 972       0.737  37.290  49.712  1.00 25.63           C  
ATOM   7465  CE1 PHE A 972       3.203  36.058  49.398  1.00 27.45           C  
ATOM   7466  CE2 PHE A 972       1.797  37.639  50.525  1.00 28.29           C  
ATOM   7467  CZ  PHE A 972       3.033  37.009  50.379  1.00 27.84           C  
ATOM   7468  N   ASN A 973      -0.640  35.289  44.713  1.00 24.00           N  
ATOM   7469  CA  ASN A 973      -1.430  34.547  43.730  1.00 26.94           C  
ATOM   7470  C   ASN A 973      -2.018  33.299  44.371  1.00 32.15           C  
ATOM   7471  O   ASN A 973      -1.600  32.893  45.481  1.00 31.24           O  
ATOM   7472  CB  ASN A 973      -0.575  34.074  42.563  1.00 27.23           C  
ATOM   7473  CG  ASN A 973      -0.026  35.204  41.721  1.00 26.93           C  
ATOM   7474  OD1 ASN A 973       1.178  35.278  41.455  1.00 28.40           O  
ATOM   7475  ND2 ASN A 973      -0.880  36.077  41.299  1.00 26.99           N  
ATOM   7476  N   GLU A 974      -2.968  32.667  43.672  1.00 40.24           N  
ATOM   7477  CA  GLU A 974      -3.630  31.456  44.216  1.00 48.22           C  
ATOM   7478  C   GLU A 974      -2.617  30.387  44.557  1.00 46.98           C  
ATOM   7479  O   GLU A 974      -2.685  29.777  45.616  1.00 53.24           O  
ATOM   7480  CB  GLU A 974      -4.683  30.909  43.261  1.00 55.41           C  
ATOM   7481  CG  GLU A 974      -6.052  31.570  43.426  1.00 60.85           C  
ATOM   7482  CD  GLU A 974      -6.814  31.745  42.106  1.00 73.59           C  
ATOM   7483  OE1 GLU A 974      -6.510  31.016  41.121  1.00 77.81           O  
ATOM   7484  OE2 GLU A 974      -7.726  32.614  42.051  1.00 78.06           O  
ATOM   7485  N   ASP A 975      -1.619  30.236  43.698  1.00 47.69           N  
ATOM   7486  CA  ASP A 975      -0.577  29.230  43.901  1.00 45.88           C  
ATOM   7487  C   ASP A 975       0.359  29.503  45.099  1.00 40.27           C  
ATOM   7488  O   ASP A 975       1.270  28.708  45.373  1.00 46.23           O  
ATOM   7489  CB  ASP A 975       0.225  29.016  42.573  1.00 50.11           C  
ATOM   7490  CG  ASP A 975       1.137  30.205  42.202  1.00 48.85           C  
ATOM   7491  OD1 ASP A 975       1.407  31.056  43.093  1.00 48.86           O  
ATOM   7492  OD2 ASP A 975       1.577  30.278  41.023  1.00 47.87           O  
ATOM   7493  N   GLY A 976       0.166  30.615  45.798  1.00 34.36           N  
ATOM   7494  CA  GLY A 976       0.988  30.915  46.971  1.00 32.56           C  
ATOM   7495  C   GLY A 976       2.181  31.811  46.701  1.00 33.63           C  
ATOM   7496  O   GLY A 976       2.870  32.232  47.648  1.00 32.70           O  
ATOM   7497  N   SER A 977       2.443  32.099  45.417  1.00 33.08           N  
ATOM   7498  CA  SER A 977       3.568  32.964  45.037  1.00 30.78           C  
ATOM   7499  C   SER A 977       3.183  34.432  45.151  1.00 25.71           C  
ATOM   7500  O   SER A 977       2.034  34.767  45.131  1.00 25.46           O  
ATOM   7501  CB  SER A 977       4.030  32.676  43.605  1.00 33.23           C  
ATOM   7502  OG  SER A 977       2.942  32.758  42.701  1.00 32.25           O  
ATOM   7503  N   LEU A 978       4.193  35.275  45.232  1.00 25.20           N  
ATOM   7504  CA  LEU A 978       4.081  36.698  45.435  1.00 28.29           C  
ATOM   7505  C   LEU A 978       3.796  37.317  44.069  1.00 27.38           C  
ATOM   7506  O   LEU A 978       4.516  37.133  43.116  1.00 31.21           O  
ATOM   7507  CB  LEU A 978       5.376  37.221  46.058  1.00 30.93           C  
ATOM   7508  CG  LEU A 978       5.517  38.679  46.480  1.00 31.60           C  
ATOM   7509  CD1 LEU A 978       4.536  39.064  47.573  1.00 29.60           C  
ATOM   7510  CD2 LEU A 978       6.954  38.909  46.956  1.00 31.97           C  
ATOM   7511  N   ALA A 979       2.697  38.022  43.992  1.00 26.09           N  
ATOM   7512  CA  ALA A 979       2.234  38.608  42.764  1.00 26.19           C  
ATOM   7513  C   ALA A 979       2.696  40.071  42.676  1.00 29.08           C  
ATOM   7514  O   ALA A 979       3.075  40.541  41.610  1.00 33.87           O  
ATOM   7515  CB  ALA A 979       0.729  38.538  42.733  1.00 22.21           C  
ATOM   7516  N   GLU A 980       2.611  40.790  43.794  1.00 27.76           N  
ATOM   7517  CA  GLU A 980       3.067  42.164  43.866  1.00 27.04           C  
ATOM   7518  C   GLU A 980       3.517  42.502  45.276  1.00 26.77           C  
ATOM   7519  O   GLU A 980       2.873  42.131  46.277  1.00 23.68           O  
ATOM   7520  CB  GLU A 980       1.943  43.112  43.454  1.00 30.12           C  
ATOM   7521  CG  GLU A 980       2.095  43.474  41.992  1.00 35.77           C  
ATOM   7522  CD  GLU A 980       0.844  43.296  41.213  1.00 36.35           C  
ATOM   7523  OE1 GLU A 980      -0.196  43.758  41.680  1.00 50.82           O  
ATOM   7524  OE2 GLU A 980       0.898  42.712  40.123  1.00 37.57           O  
ATOM   7525  N   LEU A 981       4.625  43.220  45.320  1.00 24.59           N  
ATOM   7526  CA  LEU A 981       5.103  43.871  46.495  1.00 27.19           C  
ATOM   7527  C   LEU A 981       5.398  45.306  46.116  1.00 24.95           C  
ATOM   7528  O   LEU A 981       6.263  45.506  45.286  1.00 26.20           O  
ATOM   7529  CB  LEU A 981       6.384  43.194  46.957  1.00 28.78           C  
ATOM   7530  CG  LEU A 981       6.738  43.734  48.348  1.00 32.42           C  
ATOM   7531  CD1 LEU A 981       5.824  43.163  49.409  1.00 31.10           C  
ATOM   7532  CD2 LEU A 981       8.174  43.439  48.674  1.00 36.76           C  
ATOM   7533  N   LYS A 982       4.687  46.276  46.690  1.00 23.27           N  
ATOM   7534  CA  LYS A 982       4.886  47.683  46.340  1.00 23.19           C  
ATOM   7535  C   LYS A 982       5.351  48.505  47.490  1.00 19.81           C  
ATOM   7536  O   LYS A 982       4.904  48.316  48.603  1.00 20.25           O  
ATOM   7537  CB  LYS A 982       3.622  48.360  45.877  1.00 26.13           C  
ATOM   7538  CG  LYS A 982       2.843  47.588  44.858  1.00 28.14           C  
ATOM   7539  CD  LYS A 982       3.630  47.317  43.636  1.00 29.83           C  
ATOM   7540  CE  LYS A 982       2.635  47.068  42.516  1.00 30.98           C  
ATOM   7541  NZ  LYS A 982       3.393  47.069  41.318  1.00 28.70           N  
ATOM   7542  N   GLY A 983       6.343  49.315  47.199  1.00 18.60           N  
ATOM   7543  CA  GLY A 983       6.776  50.429  47.981  1.00 18.46           C  
ATOM   7544  C   GLY A 983       7.668  50.225  49.146  1.00 20.14           C  
ATOM   7545  O   GLY A 983       8.444  51.163  49.493  1.00 22.81           O  
ATOM   7546  N   PHE A 984       7.511  49.078  49.812  1.00 21.46           N  
ATOM   7547  CA  PHE A 984       8.207  48.767  51.078  1.00 20.98           C  
ATOM   7548  C   PHE A 984       9.740  48.845  51.003  1.00 23.11           C  
ATOM   7549  O   PHE A 984      10.341  48.779  49.916  1.00 20.97           O  
ATOM   7550  CB  PHE A 984       7.841  47.373  51.534  1.00 19.91           C  
ATOM   7551  CG  PHE A 984       6.444  47.257  52.130  1.00 20.14           C  
ATOM   7552  CD1 PHE A 984       6.125  47.859  53.370  1.00 19.28           C  
ATOM   7553  CD2 PHE A 984       5.492  46.531  51.495  1.00 18.48           C  
ATOM   7554  CE1 PHE A 984       4.853  47.717  53.930  1.00 19.05           C  
ATOM   7555  CE2 PHE A 984       4.196  46.391  52.025  1.00 18.44           C  
ATOM   7556  CZ  PHE A 984       3.899  46.983  53.260  1.00 20.20           C  
ATOM   7557  N   GLU A 985      10.369  48.969  52.179  1.00 22.64           N  
ATOM   7558  CA  GLU A 985      11.819  49.095  52.290  1.00 22.21           C  
ATOM   7559  C   GLU A 985      12.553  47.965  51.617  1.00 21.06           C  
ATOM   7560  O   GLU A 985      13.686  48.150  51.116  1.00 20.60           O  
ATOM   7561  CB  GLU A 985      12.250  49.158  53.768  1.00 23.86           C  
ATOM   7562  CG  GLU A 985      11.935  50.480  54.482  1.00 23.13           C  
ATOM   7563  CD  GLU A 985      10.481  50.601  55.045  1.00 28.31           C  
ATOM   7564  OE1 GLU A 985       9.537  49.762  54.780  1.00 24.33           O  
ATOM   7565  OE2 GLU A 985      10.272  51.632  55.750  1.00 31.59           O  
ATOM   7566  N   LEU A 986      11.943  46.793  51.638  1.00 20.90           N  
ATOM   7567  CA  LEU A 986      12.527  45.600  51.027  1.00 24.65           C  
ATOM   7568  C   LEU A 986      12.938  45.866  49.561  1.00 29.58           C  
ATOM   7569  O   LEU A 986      14.041  45.458  49.104  1.00 30.87           O  
ATOM   7570  CB  LEU A 986      11.527  44.471  51.108  1.00 28.20           C  
ATOM   7571  CG  LEU A 986      11.778  43.169  50.371  1.00 35.41           C  
ATOM   7572  CD1 LEU A 986      13.163  42.582  50.699  1.00 35.27           C  
ATOM   7573  CD2 LEU A 986      10.648  42.213  50.735  1.00 34.84           C  
ATOM   7574  N   LYS A 987      12.117  46.630  48.858  1.00 25.89           N  
ATOM   7575  CA  LYS A 987      12.316  46.889  47.435  1.00 28.92           C  
ATOM   7576  C   LYS A 987      13.239  48.082  47.165  1.00 26.69           C  
ATOM   7577  O   LYS A 987      13.867  48.158  46.126  1.00 25.92           O  
ATOM   7578  CB  LYS A 987      10.936  47.155  46.861  1.00 31.74           C  
ATOM   7579  CG  LYS A 987      10.865  47.406  45.396  1.00 35.52           C  
ATOM   7580  CD  LYS A 987       9.423  47.233  45.003  1.00 34.70           C  
ATOM   7581  CE  LYS A 987       9.253  47.238  43.508  1.00 35.89           C  
ATOM   7582  NZ  LYS A 987       7.809  47.076  43.225  1.00 35.05           N  
ATOM   7583  N   ARG A 988      13.285  49.040  48.091  1.00 24.88           N  
ATOM   7584  CA  ARG A 988      13.985  50.292  47.880  1.00 22.48           C  
ATOM   7585  C   ARG A 988      15.478  50.102  48.004  1.00 24.08           C  
ATOM   7586  O   ARG A 988      15.956  49.321  48.814  1.00 24.79           O  
ATOM   7587  CB  ARG A 988      13.576  51.308  48.918  1.00 21.53           C  
ATOM   7588  CG  ARG A 988      12.089  51.623  48.874  1.00 22.50           C  
ATOM   7589  CD  ARG A 988      11.650  52.591  49.971  1.00 20.39           C  
ATOM   7590  NE  ARG A 988      12.480  53.785  50.047  1.00 19.66           N  
ATOM   7591  CZ  ARG A 988      12.319  54.873  49.324  1.00 21.65           C  
ATOM   7592  NH1 ARG A 988      11.334  54.968  48.433  1.00 24.13           N  
ATOM   7593  NH2 ARG A 988      13.151  55.894  49.482  1.00 23.34           N  
ATOM   7594  N   ARG A 989      16.230  50.826  47.199  1.00 23.73           N  
ATOM   7595  CA  ARG A 989      17.679  50.839  47.367  1.00 25.13           C  
ATOM   7596  C   ARG A 989      18.056  51.444  48.683  1.00 25.06           C  
ATOM   7597  O   ARG A 989      17.470  52.419  49.131  1.00 27.04           O  
ATOM   7598  CB  ARG A 989      18.368  51.645  46.291  1.00 24.94           C  
ATOM   7599  CG  ARG A 989      19.892  51.596  46.388  1.00 28.41           C  
ATOM   7600  CD  ARG A 989      20.591  52.170  45.162  1.00 26.81           C  
ATOM   7601  NE  ARG A 989      20.310  53.572  44.904  1.00 29.15           N  
ATOM   7602  CZ  ARG A 989      20.570  54.181  43.733  1.00 31.33           C  
ATOM   7603  NH1 ARG A 989      21.057  53.491  42.689  1.00 33.55           N  
ATOM   7604  NH2 ARG A 989      20.312  55.466  43.582  1.00 29.70           N  
ATOM   7605  N   GLY A 990      19.048  50.893  49.310  1.00 28.87           N  
ATOM   7606  CA  GLY A 990      19.436  51.406  50.585  1.00 32.97           C  
ATOM   7607  C   GLY A 990      18.532  50.877  51.654  1.00 32.14           C  
ATOM   7608  O   GLY A 990      18.129  49.759  51.570  1.00 33.18           O  
ATOM   7609  N   GLU A 991      18.214  51.689  52.644  1.00 29.11           N  
ATOM   7610  CA  GLU A 991      17.345  51.273  53.713  1.00 30.59           C  
ATOM   7611  C   GLU A 991      18.002  50.306  54.709  1.00 30.86           C  
ATOM   7612  O   GLU A 991      18.893  49.564  54.376  1.00 33.50           O  
ATOM   7613  CB  GLU A 991      16.077  50.645  53.165  1.00 33.64           C  
ATOM   7614  CG  GLU A 991      15.262  51.491  52.214  1.00 38.78           C  
ATOM   7615  CD  GLU A 991      14.654  52.676  52.893  1.00 40.24           C  
ATOM   7616  OE1 GLU A 991      14.475  52.614  54.098  1.00 44.39           O  
ATOM   7617  OE2 GLU A 991      14.400  53.674  52.241  1.00 42.55           O  
ATOM   7618  N   LEU A 992      17.529  50.345  55.939  1.00 28.66           N  
ATOM   7619  CA  LEU A 992      18.018  49.538  57.018  1.00 26.02           C  
ATOM   7620  C   LEU A 992      17.803  48.076  56.733  1.00 24.76           C  
ATOM   7621  O   LEU A 992      16.707  47.634  56.558  1.00 25.52           O  
ATOM   7622  CB  LEU A 992      17.313  49.957  58.295  1.00 24.66           C  
ATOM   7623  CG  LEU A 992      17.575  49.243  59.607  1.00 26.97           C  
ATOM   7624  CD1 LEU A 992      19.032  49.033  59.912  1.00 23.48           C  
ATOM   7625  CD2 LEU A 992      16.904  49.967  60.737  1.00 27.41           C  
ATOM   7626  N   GLN A 993      18.882  47.333  56.668  1.00 22.55           N  
ATOM   7627  CA  GLN A 993      18.827  45.951  56.190  1.00 26.15           C  
ATOM   7628  C   GLN A 993      17.970  45.040  57.083  1.00 24.69           C  
ATOM   7629  O   GLN A 993      17.331  44.144  56.620  1.00 21.12           O  
ATOM   7630  CB  GLN A 993      20.263  45.383  56.038  1.00 26.76           C  
ATOM   7631  CG  GLN A 993      20.332  43.967  55.468  1.00 30.40           C  
ATOM   7632  CD  GLN A 993      20.034  43.929  53.987  1.00 34.58           C  
ATOM   7633  OE1 GLN A 993      20.385  44.847  53.267  1.00 41.06           O  
ATOM   7634  NE2 GLN A 993      19.379  42.876  53.526  1.00 33.90           N  
ATOM   7635  N   LEU A 994      18.029  45.266  58.384  1.00 27.50           N  
ATOM   7636  CA  LEU A 994      17.193  44.545  59.354  1.00 29.75           C  
ATOM   7637  C   LEU A 994      15.701  44.646  58.967  1.00 25.36           C  
ATOM   7638  O   LEU A 994      14.974  43.713  59.095  1.00 27.37           O  
ATOM   7639  CB  LEU A 994      17.412  45.185  60.739  1.00 32.88           C  
ATOM   7640  CG  LEU A 994      16.394  44.864  61.830  1.00 38.13           C  
ATOM   7641  CD1 LEU A 994      16.725  43.516  62.448  1.00 37.90           C  
ATOM   7642  CD2 LEU A 994      16.414  46.003  62.846  1.00 39.00           C  
ATOM   7643  N   ILE A 995      15.267  45.811  58.514  1.00 23.37           N  
ATOM   7644  CA  ILE A 995      13.879  46.032  58.149  1.00 23.53           C  
ATOM   7645  C   ILE A 995      13.538  45.264  56.884  1.00 23.70           C  
ATOM   7646  O   ILE A 995      12.457  44.695  56.802  1.00 23.22           O  
ATOM   7647  CB  ILE A 995      13.581  47.516  57.967  1.00 26.58           C  
ATOM   7648  CG1 ILE A 995      13.693  48.230  59.278  1.00 28.81           C  
ATOM   7649  CG2 ILE A 995      12.166  47.757  57.451  1.00 31.54           C  
ATOM   7650  CD1 ILE A 995      12.736  47.698  60.344  1.00 29.05           C  
ATOM   7651  N   LYS A 996      14.466  45.200  55.938  1.00 22.81           N  
ATOM   7652  CA  LYS A 996      14.300  44.436  54.697  1.00 23.65           C  
ATOM   7653  C   LYS A 996      14.209  42.939  54.911  1.00 25.38           C  
ATOM   7654  O   LYS A 996      13.411  42.240  54.256  1.00 24.21           O  
ATOM   7655  CB  LYS A 996      15.457  44.684  53.705  1.00 23.08           C  
ATOM   7656  CG  LYS A 996      15.673  46.135  53.326  1.00 24.94           C  
ATOM   7657  CD  LYS A 996      17.040  46.316  52.662  1.00 29.19           C  
ATOM   7658  CE  LYS A 996      17.088  46.002  51.176  1.00 30.14           C  
ATOM   7659  NZ  LYS A 996      16.718  47.236  50.425  1.00 31.93           N  
ATOM   7660  N   ASN A 997      15.067  42.438  55.786  1.00 26.92           N  
ATOM   7661  CA  ASN A 997      15.054  41.026  56.144  1.00 26.86           C  
ATOM   7662  C   ASN A 997      13.779  40.668  56.916  1.00 25.57           C  
ATOM   7663  O   ASN A 997      13.179  39.636  56.684  1.00 26.66           O  
ATOM   7664  CB  ASN A 997      16.294  40.704  56.984  1.00 29.20           C  
ATOM   7665  CG  ASN A 997      17.600  40.800  56.193  1.00 31.12           C  
ATOM   7666  OD1 ASN A 997      17.640  41.180  55.035  1.00 28.29           O  
ATOM   7667  ND2 ASN A 997      18.683  40.444  56.848  1.00 38.04           N  
ATOM   7668  N   PHE A 998      13.364  41.533  57.832  1.00 25.69           N  
ATOM   7669  CA  PHE A 998      12.043  41.385  58.434  1.00 25.39           C  
ATOM   7670  C   PHE A 998      10.905  41.256  57.423  1.00 24.08           C  
ATOM   7671  O   PHE A 998      10.182  40.274  57.430  1.00 24.98           O  
ATOM   7672  CB  PHE A 998      11.751  42.546  59.362  1.00 25.22           C  
ATOM   7673  CG  PHE A 998      10.413  42.442  60.067  1.00 24.76           C  
ATOM   7674  CD1 PHE A 998      10.156  41.416  60.958  1.00 25.70           C  
ATOM   7675  CD2 PHE A 998       9.416  43.392  59.846  1.00 24.83           C  
ATOM   7676  CE1 PHE A 998       8.920  41.343  61.600  1.00 27.22           C  
ATOM   7677  CE2 PHE A 998       8.186  43.308  60.473  1.00 26.48           C  
ATOM   7678  CZ  PHE A 998       7.951  42.309  61.389  1.00 26.28           C  
ATOM   7679  N   GLN A 999      10.746  42.249  56.566  1.00 23.23           N  
ATOM   7680  CA  GLN A 999       9.643  42.264  55.617  1.00 24.52           C  
ATOM   7681  C   GLN A 999       9.708  41.058  54.718  1.00 26.46           C  
ATOM   7682  O   GLN A 999       8.687  40.454  54.411  1.00 26.40           O  
ATOM   7683  CB  GLN A 999       9.683  43.550  54.783  1.00 21.77           C  
ATOM   7684  CG  GLN A 999       9.242  44.741  55.598  1.00 21.51           C  
ATOM   7685  CD  GLN A 999       9.536  46.031  54.904  1.00 22.43           C  
ATOM   7686  OE1 GLN A 999      10.149  46.037  53.862  1.00 23.38           O  
ATOM   7687  NE2 GLN A 999       9.169  47.132  55.516  1.00 24.01           N  
ATOM   7688  N   SER A1000      10.931  40.692  54.344  1.00 28.42           N  
ATOM   7689  CA  SER A1000      11.157  39.526  53.530  1.00 33.50           C  
ATOM   7690  C   SER A1000      10.755  38.210  54.238  1.00 35.36           C  
ATOM   7691  O   SER A1000      10.259  37.298  53.589  1.00 36.04           O  
ATOM   7692  CB  SER A1000      12.590  39.489  53.074  1.00 35.50           C  
ATOM   7693  OG  SER A1000      12.736  38.309  52.358  1.00 41.78           O  
ATOM   7694  N   ASP A1001      10.910  38.125  55.556  1.00 35.08           N  
ATOM   7695  CA  ASP A1001      10.263  37.034  56.296  1.00 34.74           C  
ATOM   7696  C   ASP A1001       8.734  37.166  56.402  1.00 33.23           C  
ATOM   7697  O   ASP A1001       8.029  36.158  56.263  1.00 34.63           O  
ATOM   7698  CB  ASP A1001      10.785  36.911  57.731  1.00 38.64           C  
ATOM   7699  CG  ASP A1001      12.272  36.497  57.820  1.00 41.69           C  
ATOM   7700  OD1 ASP A1001      12.830  35.936  56.853  1.00 41.19           O  
ATOM   7701  OD2 ASP A1001      12.867  36.718  58.915  1.00 47.69           O  
ATOM   7702  N   ILE A1002       8.184  38.341  56.709  1.00 29.56           N  
ATOM   7703  CA  ILE A1002       6.829  38.291  57.225  1.00 28.68           C  
ATOM   7704  C   ILE A1002       5.744  38.109  56.200  1.00 29.22           C  
ATOM   7705  O   ILE A1002       4.721  37.513  56.546  1.00 30.09           O  
ATOM   7706  CB  ILE A1002       6.349  39.436  58.145  1.00 33.68           C  
ATOM   7707  CG1 ILE A1002       6.793  40.766  57.654  1.00 35.92           C  
ATOM   7708  CG2 ILE A1002       6.736  39.236  59.588  1.00 40.69           C  
ATOM   7709  CD1 ILE A1002       6.086  41.157  56.401  1.00 39.24           C  
ATOM   7710  N   PHE A1003       5.879  38.629  54.974  1.00 26.44           N  
ATOM   7711  CA  PHE A1003       4.675  38.738  54.162  1.00 26.50           C  
ATOM   7712  C   PHE A1003       4.075  37.396  53.866  1.00 26.31           C  
ATOM   7713  O   PHE A1003       2.854  37.238  53.973  1.00 25.07           O  
ATOM   7714  CB  PHE A1003       4.905  39.538  52.881  1.00 27.55           C  
ATOM   7715  CG  PHE A1003       5.099  41.016  53.128  1.00 24.62           C  
ATOM   7716  CD1 PHE A1003       4.089  41.770  53.720  1.00 25.43           C  
ATOM   7717  CD2 PHE A1003       6.275  41.621  52.790  1.00 24.72           C  
ATOM   7718  CE1 PHE A1003       4.255  43.127  53.959  1.00 25.66           C  
ATOM   7719  CE2 PHE A1003       6.457  42.981  53.016  1.00 26.93           C  
ATOM   7720  CZ  PHE A1003       5.449  43.724  53.609  1.00 25.78           C  
ATOM   7721  N   LYS A1004       4.895  36.414  53.538  1.00 28.08           N  
ATOM   7722  CA  LYS A1004       4.307  35.096  53.132  1.00 34.40           C  
ATOM   7723  C   LYS A1004       3.582  34.372  54.287  1.00 30.52           C  
ATOM   7724  O   LYS A1004       2.732  33.533  54.058  1.00 32.49           O  
ATOM   7725  CB  LYS A1004       5.370  34.177  52.527  1.00 36.38           C  
ATOM   7726  CG  LYS A1004       6.524  33.907  53.493  1.00 43.03           C  
ATOM   7727  CD  LYS A1004       7.231  32.585  53.232  1.00 49.89           C  
ATOM   7728  CE  LYS A1004       8.028  32.611  51.949  1.00 58.24           C  
ATOM   7729  NZ  LYS A1004       9.312  33.360  52.157  1.00 67.70           N  
ATOM   7730  N   VAL A1005       3.930  34.728  55.516  1.00 28.62           N  
ATOM   7731  CA  VAL A1005       3.399  34.110  56.717  1.00 29.03           C  
ATOM   7732  C   VAL A1005       1.947  34.531  56.933  1.00 30.13           C  
ATOM   7733  O   VAL A1005       1.228  33.948  57.764  1.00 29.17           O  
ATOM   7734  CB  VAL A1005       4.335  34.436  57.940  1.00 30.29           C  
ATOM   7735  CG1 VAL A1005       3.967  33.668  59.216  1.00 32.85           C  
ATOM   7736  CG2 VAL A1005       5.759  34.048  57.596  1.00 27.98           C  
ATOM   7737  N   PHE A1006       1.478  35.522  56.167  1.00 29.95           N  
ATOM   7738  CA  PHE A1006       0.041  35.890  56.196  1.00 26.22           C  
ATOM   7739  C   PHE A1006      -0.861  34.892  55.479  1.00 27.55           C  
ATOM   7740  O   PHE A1006      -2.068  35.009  55.499  1.00 28.97           O  
ATOM   7741  CB  PHE A1006      -0.160  37.247  55.579  1.00 25.41           C  
ATOM   7742  CG  PHE A1006       0.163  38.401  56.495  1.00 26.49           C  
ATOM   7743  CD1 PHE A1006      -0.720  38.794  57.464  1.00 27.79           C  
ATOM   7744  CD2 PHE A1006       1.330  39.109  56.353  1.00 24.33           C  
ATOM   7745  CE1 PHE A1006      -0.445  39.866  58.297  1.00 28.98           C  
ATOM   7746  CE2 PHE A1006       1.611  40.165  57.171  1.00 24.95           C  
ATOM   7747  CZ  PHE A1006       0.734  40.560  58.143  1.00 27.51           C  
ATOM   7748  N   LEU A1007      -0.273  33.921  54.840  1.00 28.37           N  
ATOM   7749  CA  LEU A1007      -1.010  32.876  54.176  1.00 32.10           C  
ATOM   7750  C   LEU A1007      -1.260  31.658  55.134  1.00 36.13           C  
ATOM   7751  O   LEU A1007      -1.995  30.713  54.808  1.00 33.09           O  
ATOM   7752  CB  LEU A1007      -0.197  32.457  52.944  1.00 32.49           C  
ATOM   7753  CG  LEU A1007      -0.058  33.530  51.808  1.00 30.36           C  
ATOM   7754  CD1 LEU A1007       0.394  32.858  50.525  1.00 31.70           C  
ATOM   7755  CD2 LEU A1007      -1.359  34.250  51.527  1.00 29.94           C  
ATOM   7756  N   GLU A1008      -0.664  31.718  56.322  1.00 38.17           N  
ATOM   7757  CA  GLU A1008      -0.844  30.689  57.371  1.00 38.46           C  
ATOM   7758  C   GLU A1008      -2.057  30.959  58.270  1.00 36.01           C  
ATOM   7759  O   GLU A1008      -2.551  32.103  58.385  1.00 33.86           O  
ATOM   7760  CB  GLU A1008       0.425  30.584  58.220  1.00 38.20           C  
ATOM   7761  CG  GLU A1008       1.626  30.094  57.443  1.00 45.54           C  
ATOM   7762  CD  GLU A1008       2.880  29.952  58.284  1.00 56.33           C  
ATOM   7763  OE1 GLU A1008       2.984  30.577  59.363  1.00 67.39           O  
ATOM   7764  OE2 GLU A1008       3.787  29.212  57.858  1.00 67.45           O  
ATOM   7765  N   GLY A1009      -2.509  29.878  58.911  1.00 36.09           N  
ATOM   7766  CA  GLY A1009      -3.658  29.887  59.800  1.00 34.15           C  
ATOM   7767  C   GLY A1009      -4.939  29.606  59.038  1.00 36.57           C  
ATOM   7768  O   GLY A1009      -4.993  29.821  57.835  1.00 34.76           O  
ATOM   7769  N   ASP A1010      -5.980  29.188  59.764  1.00 35.70           N  
ATOM   7770  CA  ASP A1010      -7.312  28.966  59.223  1.00 35.78           C  
ATOM   7771  C   ASP A1010      -8.276  30.083  59.610  1.00 32.50           C  
ATOM   7772  O   ASP A1010      -9.372  30.112  59.106  1.00 37.03           O  
ATOM   7773  CB  ASP A1010      -7.852  27.617  59.720  1.00 39.79           C  
ATOM   7774  CG  ASP A1010      -6.905  26.435  59.409  1.00 50.15           C  
ATOM   7775  OD1 ASP A1010      -6.135  26.477  58.402  1.00 49.64           O  
ATOM   7776  OD2 ASP A1010      -6.930  25.440  60.183  1.00 61.62           O  
ATOM   7777  N   THR A1011      -7.906  30.966  60.536  1.00 30.89           N  
ATOM   7778  CA  THR A1011      -8.788  32.078  60.961  1.00 28.48           C  
ATOM   7779  C   THR A1011      -7.957  33.324  60.867  1.00 30.97           C  
ATOM   7780  O   THR A1011      -6.726  33.237  60.793  1.00 29.64           O  
ATOM   7781  CB  THR A1011      -9.251  31.987  62.447  1.00 28.88           C  
ATOM   7782  OG1 THR A1011      -8.126  31.957  63.326  1.00 28.55           O  
ATOM   7783  CG2 THR A1011     -10.063  30.691  62.728  1.00 31.84           C  
ATOM   7784  N   LEU A1012      -8.612  34.473  60.941  1.00 31.79           N  
ATOM   7785  CA  LEU A1012      -7.915  35.723  60.974  1.00 32.86           C  
ATOM   7786  C   LEU A1012      -6.991  35.752  62.185  1.00 35.56           C  
ATOM   7787  O   LEU A1012      -5.824  36.132  62.062  1.00 35.71           O  
ATOM   7788  CB  LEU A1012      -8.880  36.905  60.954  1.00 33.89           C  
ATOM   7789  CG  LEU A1012      -8.294  38.314  60.716  1.00 37.35           C  
ATOM   7790  CD1 LEU A1012      -7.542  38.394  59.383  1.00 34.66           C  
ATOM   7791  CD2 LEU A1012      -9.403  39.372  60.772  1.00 36.29           C  
ATOM   7792  N   GLU A1013      -7.468  35.301  63.338  1.00 37.57           N  
ATOM   7793  CA  GLU A1013      -6.660  35.351  64.558  1.00 35.57           C  
ATOM   7794  C   GLU A1013      -5.471  34.401  64.408  1.00 35.54           C  
ATOM   7795  O   GLU A1013      -4.333  34.771  64.729  1.00 32.73           O  
ATOM   7796  CB  GLU A1013      -7.471  35.035  65.832  1.00 42.28           C  
ATOM   7797  CG  GLU A1013      -8.803  35.808  65.986  1.00 48.10           C  
ATOM   7798  CD  GLU A1013     -10.000  35.120  65.267  1.00 53.99           C  
ATOM   7799  OE1 GLU A1013     -10.170  35.252  64.010  1.00 46.98           O  
ATOM   7800  OE2 GLU A1013     -10.790  34.429  65.967  1.00 59.07           O  
ATOM   7801  N   GLY A1014      -5.685  33.192  63.882  1.00 32.94           N  
ATOM   7802  CA  GLY A1014      -4.554  32.267  63.646  1.00 32.54           C  
ATOM   7803  C   GLY A1014      -3.496  32.847  62.680  1.00 34.94           C  
ATOM   7804  O   GLY A1014      -2.277  32.561  62.749  1.00 30.61           O  
ATOM   7805  N   CYS A1015      -3.957  33.679  61.762  1.00 34.30           N  
ATOM   7806  CA  CYS A1015      -3.080  34.272  60.783  1.00 31.93           C  
ATOM   7807  C   CYS A1015      -2.241  35.344  61.458  1.00 28.33           C  
ATOM   7808  O   CYS A1015      -1.042  35.374  61.311  1.00 25.73           O  
ATOM   7809  CB  CYS A1015      -3.909  34.847  59.645  1.00 38.61           C  
ATOM   7810  SG  CYS A1015      -3.075  36.135  58.688  1.00 37.11           S  
ATOM   7811  N   TYR A1016      -2.847  36.170  62.279  1.00 27.69           N  
ATOM   7812  CA  TYR A1016      -2.066  37.127  63.040  1.00 29.24           C  
ATOM   7813  C   TYR A1016      -1.118  36.474  64.049  1.00 32.48           C  
ATOM   7814  O   TYR A1016      -0.048  37.023  64.335  1.00 32.17           O  
ATOM   7815  CB  TYR A1016      -2.977  38.150  63.690  1.00 31.59           C  
ATOM   7816  CG  TYR A1016      -3.407  39.289  62.756  1.00 31.36           C  
ATOM   7817  CD1 TYR A1016      -2.461  40.152  62.252  1.00 29.63           C  
ATOM   7818  CD2 TYR A1016      -4.757  39.514  62.396  1.00 28.98           C  
ATOM   7819  CE1 TYR A1016      -2.802  41.185  61.409  1.00 28.10           C  
ATOM   7820  CE2 TYR A1016      -5.103  40.562  61.531  1.00 26.05           C  
ATOM   7821  CZ  TYR A1016      -4.110  41.392  61.044  1.00 27.29           C  
ATOM   7822  OH  TYR A1016      -4.334  42.507  60.245  1.00 23.58           O  
ATOM   7823  N   SER A1017      -1.466  35.282  64.530  1.00 33.73           N  
ATOM   7824  CA  SER A1017      -0.605  34.519  65.463  1.00 33.36           C  
ATOM   7825  C   SER A1017       0.649  33.983  64.777  1.00 30.84           C  
ATOM   7826  O   SER A1017       1.776  34.019  65.318  1.00 29.94           O  
ATOM   7827  CB  SER A1017      -1.367  33.312  66.066  1.00 34.09           C  
ATOM   7828  OG  SER A1017      -2.326  33.725  67.031  1.00 34.04           O  
ATOM   7829  N   ALA A1018       0.467  33.476  63.581  1.00 28.21           N  
ATOM   7830  CA  ALA A1018       1.602  32.942  62.865  1.00 26.83           C  
ATOM   7831  C   ALA A1018       2.615  34.041  62.559  1.00 27.26           C  
ATOM   7832  O   ALA A1018       3.829  33.829  62.640  1.00 27.59           O  
ATOM   7833  CB  ALA A1018       1.158  32.234  61.598  1.00 26.69           C  
ATOM   7834  N   VAL A1019       2.134  35.217  62.214  1.00 28.22           N  
ATOM   7835  CA  VAL A1019       3.060  36.299  61.943  1.00 32.88           C  
ATOM   7836  C   VAL A1019       3.647  36.931  63.225  1.00 30.55           C  
ATOM   7837  O   VAL A1019       4.756  37.462  63.186  1.00 28.42           O  
ATOM   7838  CB  VAL A1019       2.421  37.385  61.052  1.00 33.85           C  
ATOM   7839  CG1 VAL A1019       3.440  38.402  60.712  1.00 39.15           C  
ATOM   7840  CG2 VAL A1019       1.912  36.783  59.740  1.00 38.39           C  
ATOM   7841  N   ALA A1020       2.890  36.934  64.321  1.00 27.08           N  
ATOM   7842  CA  ALA A1020       3.407  37.346  65.645  1.00 27.27           C  
ATOM   7843  C   ALA A1020       4.666  36.602  66.002  1.00 26.56           C  
ATOM   7844  O   ALA A1020       5.652  37.189  66.480  1.00 27.39           O  
ATOM   7845  CB  ALA A1020       2.393  37.080  66.737  1.00 28.12           C  
ATOM   7846  N   SER A1021       4.646  35.316  65.722  1.00 28.02           N  
ATOM   7847  CA  SER A1021       5.772  34.464  66.055  1.00 33.05           C  
ATOM   7848  C   SER A1021       7.042  34.919  65.323  1.00 34.64           C  
ATOM   7849  O   SER A1021       8.100  34.988  65.933  1.00 36.82           O  
ATOM   7850  CB  SER A1021       5.446  32.999  65.763  1.00 34.82           C  
ATOM   7851  OG  SER A1021       6.645  32.349  65.402  1.00 38.95           O  
ATOM   7852  N   VAL A1022       6.927  35.303  64.049  1.00 31.97           N  
ATOM   7853  CA  VAL A1022       8.065  35.836  63.313  1.00 31.14           C  
ATOM   7854  C   VAL A1022       8.464  37.175  63.883  1.00 29.19           C  
ATOM   7855  O   VAL A1022       9.663  37.469  64.000  1.00 29.92           O  
ATOM   7856  CB  VAL A1022       7.772  35.988  61.786  1.00 35.95           C  
ATOM   7857  CG1 VAL A1022       8.872  36.768  61.084  1.00 33.30           C  
ATOM   7858  CG2 VAL A1022       7.600  34.610  61.163  1.00 36.78           C  
ATOM   7859  N   CYS A1023       7.495  37.997  64.253  1.00 25.61           N  
ATOM   7860  CA  CYS A1023       7.845  39.202  64.939  1.00 27.80           C  
ATOM   7861  C   CYS A1023       8.650  38.951  66.231  1.00 27.46           C  
ATOM   7862  O   CYS A1023       9.622  39.679  66.523  1.00 26.61           O  
ATOM   7863  CB  CYS A1023       6.623  40.034  65.255  1.00 30.51           C  
ATOM   7864  SG  CYS A1023       5.702  40.574  63.796  1.00 32.56           S  
ATOM   7865  N   ASN A1024       8.281  37.914  66.972  1.00 28.93           N  
ATOM   7866  CA  ASN A1024       8.924  37.672  68.257  1.00 30.47           C  
ATOM   7867  C   ASN A1024      10.340  37.111  68.068  1.00 32.10           C  
ATOM   7868  O   ASN A1024      11.213  37.491  68.830  1.00 32.20           O  
ATOM   7869  CB  ASN A1024       8.060  36.821  69.198  1.00 29.00           C  
ATOM   7870  CG  ASN A1024       6.825  37.555  69.692  1.00 26.00           C  
ATOM   7871  OD1 ASN A1024       6.842  38.723  70.009  1.00 29.74           O  
ATOM   7872  ND2 ASN A1024       5.770  36.833  69.828  1.00 26.97           N  
ATOM   7873  N   ARG A1025      10.563  36.346  67.006  1.00 34.53           N  
ATOM   7874  CA  ARG A1025      11.910  35.947  66.621  1.00 37.00           C  
ATOM   7875  C   ARG A1025      12.817  37.160  66.377  1.00 36.30           C  
ATOM   7876  O   ARG A1025      13.949  37.196  66.859  1.00 34.51           O  
ATOM   7877  CB  ARG A1025      11.871  35.060  65.375  1.00 45.78           C  
ATOM   7878  CG  ARG A1025      12.248  33.610  65.632  1.00 57.44           C  
ATOM   7879  CD  ARG A1025      13.001  33.018  64.452  1.00 62.87           C  
ATOM   7880  NE  ARG A1025      12.459  33.470  63.174  1.00 65.97           N  
ATOM   7881  CZ  ARG A1025      13.077  34.319  62.359  1.00 67.32           C  
ATOM   7882  NH1 ARG A1025      14.264  34.812  62.687  1.00 62.94           N  
ATOM   7883  NH2 ARG A1025      12.509  34.676  61.215  1.00 65.64           N  
ATOM   7884  N   TRP A1026      12.325  38.149  65.629  1.00 32.07           N  
ATOM   7885  CA  TRP A1026      13.116  39.323  65.323  1.00 29.17           C  
ATOM   7886  C   TRP A1026      13.271  40.218  66.551  1.00 27.68           C  
ATOM   7887  O   TRP A1026      14.348  40.773  66.773  1.00 25.86           O  
ATOM   7888  CB  TRP A1026      12.546  40.081  64.135  1.00 28.86           C  
ATOM   7889  CG  TRP A1026      12.931  39.438  62.814  1.00 31.32           C  
ATOM   7890  CD1 TRP A1026      12.180  38.608  62.042  1.00 30.45           C  
ATOM   7891  CD2 TRP A1026      14.188  39.565  62.155  1.00 32.46           C  
ATOM   7892  NE1 TRP A1026      12.881  38.223  60.941  1.00 30.65           N  
ATOM   7893  CE2 TRP A1026      14.105  38.826  60.964  1.00 31.07           C  
ATOM   7894  CE3 TRP A1026      15.371  40.266  62.445  1.00 35.46           C  
ATOM   7895  CZ2 TRP A1026      15.176  38.715  60.081  1.00 34.27           C  
ATOM   7896  CZ3 TRP A1026      16.442  40.171  61.560  1.00 36.93           C  
ATOM   7897  CH2 TRP A1026      16.339  39.401  60.393  1.00 35.94           C  
ATOM   7898  N   LEU A1027      12.235  40.327  67.381  1.00 26.06           N  
ATOM   7899  CA  LEU A1027      12.388  41.114  68.590  1.00 26.76           C  
ATOM   7900  C   LEU A1027      13.471  40.512  69.577  1.00 28.59           C  
ATOM   7901  O   LEU A1027      14.204  41.240  70.240  1.00 26.00           O  
ATOM   7902  CB  LEU A1027      11.045  41.313  69.267  1.00 27.51           C  
ATOM   7903  CG  LEU A1027      10.046  42.290  68.619  1.00 28.55           C  
ATOM   7904  CD1 LEU A1027       8.805  42.315  69.460  1.00 29.19           C  
ATOM   7905  CD2 LEU A1027      10.517  43.728  68.472  1.00 29.73           C  
ATOM   7906  N   ASP A1028      13.573  39.195  69.599  1.00 29.19           N  
ATOM   7907  CA  ASP A1028      14.561  38.493  70.421  1.00 33.93           C  
ATOM   7908  C   ASP A1028      15.986  38.832  69.998  1.00 34.89           C  
ATOM   7909  O   ASP A1028      16.844  39.029  70.870  1.00 34.59           O  
ATOM   7910  CB  ASP A1028      14.381  36.971  70.346  1.00 31.77           C  
ATOM   7911  CG  ASP A1028      13.134  36.485  71.059  1.00 32.36           C  
ATOM   7912  OD1 ASP A1028      12.506  37.254  71.818  1.00 36.56           O  
ATOM   7913  OD2 ASP A1028      12.757  35.325  70.834  1.00 35.24           O  
ATOM   7914  N   VAL A1029      16.231  38.925  68.691  1.00 31.68           N  
ATOM   7915  CA  VAL A1029      17.545  39.354  68.200  1.00 31.55           C  
ATOM   7916  C   VAL A1029      17.942  40.712  68.736  1.00 33.05           C  
ATOM   7917  O   VAL A1029      19.109  40.907  69.133  1.00 38.22           O  
ATOM   7918  CB  VAL A1029      17.608  39.434  66.674  1.00 31.14           C  
ATOM   7919  CG1 VAL A1029      18.948  40.039  66.236  1.00 30.19           C  
ATOM   7920  CG2 VAL A1029      17.408  38.065  66.085  1.00 32.25           C  
ATOM   7921  N   LEU A1030      17.011  41.662  68.766  1.00 29.88           N  
ATOM   7922  CA  LEU A1030      17.381  42.975  69.297  1.00 33.38           C  
ATOM   7923  C   LEU A1030      17.405  43.073  70.816  1.00 36.71           C  
ATOM   7924  O   LEU A1030      18.282  43.775  71.359  1.00 33.65           O  
ATOM   7925  CB  LEU A1030      16.473  44.080  68.789  1.00 36.89           C  
ATOM   7926  CG  LEU A1030      16.515  44.309  67.275  1.00 35.55           C  
ATOM   7927  CD1 LEU A1030      15.515  45.403  67.038  1.00 39.38           C  
ATOM   7928  CD2 LEU A1030      17.890  44.694  66.786  1.00 32.43           C  
ATOM   7929  N   ASP A1031      16.458  42.406  71.503  1.00 35.65           N  
ATOM   7930  CA  ASP A1031      16.495  42.364  72.986  1.00 37.91           C  
ATOM   7931  C   ASP A1031      17.761  41.647  73.458  1.00 34.56           C  
ATOM   7932  O   ASP A1031      18.360  42.030  74.439  1.00 39.40           O  
ATOM   7933  CB  ASP A1031      15.249  41.725  73.600  1.00 40.66           C  
ATOM   7934  CG  ASP A1031      13.981  42.571  73.420  1.00 42.80           C  
ATOM   7935  OD1 ASP A1031      14.078  43.761  73.054  1.00 49.07           O  
ATOM   7936  OD2 ASP A1031      12.870  42.037  73.650  1.00 43.49           O  
ATOM   7937  N   SER A1032      18.212  40.661  72.711  1.00 33.30           N  
ATOM   7938  CA  SER A1032      19.421  39.984  73.056  1.00 33.78           C  
ATOM   7939  C   SER A1032      20.675  40.692  72.596  1.00 38.01           C  
ATOM   7940  O   SER A1032      21.736  40.061  72.573  1.00 43.33           O  
ATOM   7941  CB  SER A1032      19.429  38.609  72.450  1.00 33.46           C  
ATOM   7942  OG  SER A1032      19.774  38.671  71.090  1.00 37.05           O  
ATOM   7943  N   HIS A1033      20.542  41.946  72.143  1.00 43.13           N  
ATOM   7944  CA  HIS A1033      21.649  42.776  71.683  1.00 43.13           C  
ATOM   7945  C   HIS A1033      22.511  42.061  70.630  1.00 43.38           C  
ATOM   7946  O   HIS A1033      23.702  42.309  70.496  1.00 54.66           O  
ATOM   7947  CB  HIS A1033      22.443  43.276  72.917  1.00 49.51           C  
ATOM   7948  CG  HIS A1033      21.751  44.375  73.697  1.00 48.88           C  
ATOM   7949  ND1 HIS A1033      20.414  44.687  73.550  1.00 52.70           N  
ATOM   7950  CD2 HIS A1033      22.227  45.246  74.624  1.00 55.37           C  
ATOM   7951  CE1 HIS A1033      20.098  45.709  74.333  1.00 52.91           C  
ATOM   7952  NE2 HIS A1033      21.181  46.062  75.003  1.00 56.91           N  
ATOM   7953  N   GLY A1034      21.895  41.179  69.864  1.00 39.62           N  
ATOM   7954  CA  GLY A1034      22.579  40.513  68.771  1.00 43.49           C  
ATOM   7955  C   GLY A1034      23.456  39.336  69.148  1.00 50.53           C  
ATOM   7956  O   GLY A1034      24.118  38.734  68.277  1.00 43.94           O  
ATOM   7957  N   LEU A1035      23.505  38.993  70.420  1.00 53.74           N  
ATOM   7958  CA  LEU A1035      24.422  37.977  70.881  1.00 53.40           C  
ATOM   7959  C   LEU A1035      24.269  36.662  70.179  1.00 53.24           C  
ATOM   7960  O   LEU A1035      25.228  35.969  69.965  1.00 54.56           O  
ATOM   7961  CB  LEU A1035      24.320  37.790  72.380  1.00 52.63           C  
ATOM   7962  CG  LEU A1035      24.870  38.942  73.181  1.00 51.93           C  
ATOM   7963  CD1 LEU A1035      24.315  38.946  74.573  1.00 56.04           C  
ATOM   7964  CD2 LEU A1035      26.359  38.895  73.218  1.00 55.37           C  
ATOM   7965  N   MET A1036      23.050  36.327  69.829  1.00 62.02           N  
ATOM   7966  CA  MET A1036      22.774  35.083  69.156  1.00 72.14           C  
ATOM   7967  C   MET A1036      23.091  35.143  67.660  1.00 75.87           C  
ATOM   7968  O   MET A1036      22.330  34.612  66.861  1.00 81.96           O  
ATOM   7969  CB  MET A1036      21.300  34.721  69.355  1.00 75.94           C  
ATOM   7970  CG  MET A1036      20.315  35.891  69.349  1.00 73.06           C  
ATOM   7971  SD  MET A1036      18.572  35.396  69.340  1.00 81.07           S  
ATOM   7972  CE  MET A1036      17.947  35.957  70.896  1.00 70.70           C  
ATOM   7973  N   LEU A1037      24.215  35.760  67.298  1.00 74.66           N  
ATOM   7974  CA  LEU A1037      24.496  36.197  65.938  1.00 67.48           C  
ATOM   7975  C   LEU A1037      25.970  36.365  65.673  1.00 62.21           C  
ATOM   7976  O   LEU A1037      26.673  36.927  66.478  1.00 55.60           O  
ATOM   7977  CB  LEU A1037      23.825  37.548  65.746  1.00 70.67           C  
ATOM   7978  CG  LEU A1037      23.314  38.101  64.442  1.00 73.13           C  
ATOM   7979  CD1 LEU A1037      22.876  36.985  63.536  1.00 72.42           C  
ATOM   7980  CD2 LEU A1037      22.159  39.034  64.740  1.00 72.52           C  
ATOM   7981  N   GLU A1038      26.420  35.886  64.528  1.00 60.67           N  
ATOM   7982  CA  GLU A1038      27.805  35.958  64.118  1.00 62.17           C  
ATOM   7983  C   GLU A1038      28.190  37.373  63.890  1.00 61.44           C  
ATOM   7984  O   GLU A1038      27.394  38.157  63.486  1.00 65.63           O  
ATOM   7985  CB  GLU A1038      28.044  35.208  62.816  1.00 73.44           C  
ATOM   7986  CG  GLU A1038      26.885  34.367  62.315  1.00 82.63           C  
ATOM   7987  CD  GLU A1038      26.750  33.088  63.107  1.00 89.59           C  
ATOM   7988  OE1 GLU A1038      27.452  32.124  62.764  1.00 87.57           O  
ATOM   7989  OE2 GLU A1038      25.954  33.056  64.073  1.00 88.17           O  
ATOM   7990  N   ASP A1039      29.428  37.707  64.104  1.00 60.87           N  
ATOM   7991  CA  ASP A1039      29.794  39.108  64.067  1.00 67.35           C  
ATOM   7992  C   ASP A1039      29.695  39.742  62.648  1.00 75.35           C  
ATOM   7993  O   ASP A1039      29.368  40.933  62.517  1.00 62.69           O  
ATOM   7994  CB  ASP A1039      31.186  39.283  64.670  1.00 64.76           C  
ATOM   7995  CG  ASP A1039      31.422  40.680  65.155  1.00 67.85           C  
ATOM   7996  OD1 ASP A1039      31.625  41.565  64.294  1.00 66.65           O  
ATOM   7997  OD2 ASP A1039      31.385  40.891  66.391  1.00 66.58           O  
ATOM   7998  N   GLU A1040      29.978  38.952  61.604  1.00 82.16           N  
ATOM   7999  CA  GLU A1040      29.853  39.428  60.222  1.00 79.79           C  
ATOM   8000  C   GLU A1040      28.383  39.616  59.930  1.00 70.04           C  
ATOM   8001  O   GLU A1040      27.999  40.657  59.400  1.00 72.08           O  
ATOM   8002  CB  GLU A1040      30.476  38.458  59.191  1.00 83.94           C  
ATOM   8003  CG  GLU A1040      30.143  38.804  57.724  1.00 87.60           C  
ATOM   8004  CD  GLU A1040      31.204  38.373  56.697  1.00 87.57           C  
ATOM   8005  OE1 GLU A1040      30.826  37.973  55.568  1.00 77.80           O  
ATOM   8006  OE2 GLU A1040      32.417  38.453  56.995  1.00 80.09           O  
ATOM   8007  N   ASP A1041      27.572  38.610  60.264  1.00 56.18           N  
ATOM   8008  CA  ASP A1041      26.127  38.712  60.124  1.00 52.93           C  
ATOM   8009  C   ASP A1041      25.487  39.908  60.895  1.00 48.52           C  
ATOM   8010  O   ASP A1041      24.405  40.406  60.513  1.00 40.58           O  
ATOM   8011  CB  ASP A1041      25.443  37.408  60.557  1.00 59.06           C  
ATOM   8012  CG  ASP A1041      24.998  36.538  59.368  1.00 69.18           C  
ATOM   8013  OD1 ASP A1041      25.737  36.490  58.335  1.00 74.16           O  
ATOM   8014  OD2 ASP A1041      23.901  35.907  59.481  1.00 60.43           O  
ATOM   8015  N   LEU A1042      26.127  40.345  61.980  1.00 40.48           N  
ATOM   8016  CA  LEU A1042      25.577  41.411  62.773  1.00 39.83           C  
ATOM   8017  C   LEU A1042      25.775  42.682  61.989  1.00 40.27           C  
ATOM   8018  O   LEU A1042      24.840  43.403  61.802  1.00 34.75           O  
ATOM   8019  CB  LEU A1042      26.214  41.542  64.152  1.00 39.01           C  
ATOM   8020  CG  LEU A1042      25.532  42.565  65.068  1.00 42.11           C  
ATOM   8021  CD1 LEU A1042      24.048  42.222  65.160  1.00 43.45           C  
ATOM   8022  CD2 LEU A1042      26.112  42.646  66.476  1.00 45.10           C  
ATOM   8023  N   VAL A1043      26.998  42.952  61.547  1.00 43.24           N  
ATOM   8024  CA  VAL A1043      27.302  44.199  60.874  1.00 47.60           C  
ATOM   8025  C   VAL A1043      26.407  44.401  59.658  1.00 46.53           C  
ATOM   8026  O   VAL A1043      25.860  45.483  59.502  1.00 42.87           O  
ATOM   8027  CB  VAL A1043      28.782  44.311  60.447  1.00 53.19           C  
ATOM   8028  CG1 VAL A1043      29.643  44.630  61.665  1.00 53.23           C  
ATOM   8029  CG2 VAL A1043      29.278  43.043  59.732  1.00 55.03           C  
ATOM   8030  N   SER A1044      26.289  43.335  58.860  1.00 42.99           N  
ATOM   8031  CA  SER A1044      25.402  43.190  57.739  1.00 44.27           C  
ATOM   8032  C   SER A1044      23.951  43.546  58.028  1.00 40.50           C  
ATOM   8033  O   SER A1044      23.385  44.290  57.261  1.00 37.36           O  
ATOM   8034  CB  SER A1044      25.404  41.736  57.267  1.00 48.73           C  
ATOM   8035  OG  SER A1044      26.693  41.348  56.849  1.00 61.52           O  
ATOM   8036  N   LEU A1045      23.366  42.964  59.086  1.00 35.42           N  
ATOM   8037  CA  LEU A1045      21.980  43.215  59.497  1.00 33.74           C  
ATOM   8038  C   LEU A1045      21.704  44.629  59.981  1.00 33.81           C  
ATOM   8039  O   LEU A1045      20.620  45.157  59.747  1.00 28.27           O  
ATOM   8040  CB  LEU A1045      21.564  42.313  60.654  1.00 38.07           C  
ATOM   8041  CG  LEU A1045      20.729  41.051  60.406  1.00 45.91           C  
ATOM   8042  CD1 LEU A1045      20.447  40.332  61.729  1.00 47.99           C  
ATOM   8043  CD2 LEU A1045      19.415  41.365  59.705  1.00 43.97           C  
ATOM   8044  N   ILE A1046      22.648  45.232  60.710  1.00 31.07           N  
ATOM   8045  CA  ILE A1046      22.406  46.538  61.367  1.00 31.80           C  
ATOM   8046  C   ILE A1046      22.729  47.731  60.457  1.00 31.77           C  
ATOM   8047  O   ILE A1046      22.363  48.878  60.725  1.00 36.22           O  
ATOM   8048  CB  ILE A1046      23.166  46.585  62.696  1.00 33.99           C  
ATOM   8049  CG1 ILE A1046      22.752  45.394  63.546  1.00 34.87           C  
ATOM   8050  CG2 ILE A1046      22.877  47.857  63.476  1.00 38.40           C  
ATOM   8051  CD1 ILE A1046      21.251  45.256  63.675  1.00 33.34           C  
ATOM   8052  N   CYS A1047      23.378  47.431  59.353  1.00 32.57           N  
ATOM   8053  CA  CYS A1047      23.812  48.396  58.383  1.00 31.85           C  
ATOM   8054  C   CYS A1047      22.682  49.087  57.679  1.00 26.24           C  
ATOM   8055  O   CYS A1047      21.745  48.463  57.257  1.00 30.37           O  
ATOM   8056  CB  CYS A1047      24.646  47.678  57.300  1.00 33.08           C  
ATOM   8057  SG  CYS A1047      25.509  48.914  56.347  1.00 40.14           S  
ATOM   8058  N   GLU A1048      22.804  50.381  57.532  1.00 24.51           N  
ATOM   8059  CA  GLU A1048      21.966  51.133  56.653  1.00 25.86           C  
ATOM   8060  C   GLU A1048      22.834  51.775  55.570  1.00 27.93           C  
ATOM   8061  O   GLU A1048      23.897  52.342  55.848  1.00 24.55           O  
ATOM   8062  CB  GLU A1048      21.144  52.185  57.399  1.00 26.69           C  
ATOM   8063  CG  GLU A1048      20.244  52.936  56.465  1.00 27.71           C  
ATOM   8064  CD  GLU A1048      19.025  53.623  57.124  1.00 33.52           C  
ATOM   8065  OE1 GLU A1048      18.755  53.464  58.371  1.00 28.63           O  
ATOM   8066  OE2 GLU A1048      18.319  54.318  56.319  1.00 29.84           O  
ATOM   8067  N   ASN A1049      22.373  51.634  54.327  1.00 28.41           N  
ATOM   8068  CA  ASN A1049      23.076  52.063  53.152  1.00 30.56           C  
ATOM   8069  C   ASN A1049      22.202  53.101  52.458  1.00 33.80           C  
ATOM   8070  O   ASN A1049      20.987  52.905  52.293  1.00 38.09           O  
ATOM   8071  CB  ASN A1049      23.311  50.828  52.288  1.00 36.14           C  
ATOM   8072  CG  ASN A1049      24.060  51.132  51.004  1.00 39.39           C  
ATOM   8073  OD1 ASN A1049      24.373  52.280  50.684  1.00 42.52           O  
ATOM   8074  ND2 ASN A1049      24.348  50.090  50.259  1.00 41.41           N  
ATOM   8075  N   ARG A1050      22.779  54.249  52.147  1.00 35.64           N  
ATOM   8076  CA  ARG A1050      22.066  55.326  51.478  1.00 38.87           C  
ATOM   8077  C   ARG A1050      22.942  55.953  50.377  1.00 33.98           C  
ATOM   8078  O   ARG A1050      24.045  56.344  50.671  1.00 31.05           O  
ATOM   8079  CB  ARG A1050      21.778  56.433  52.491  1.00 45.53           C  
ATOM   8080  CG  ARG A1050      20.948  56.024  53.687  1.00 52.11           C  
ATOM   8081  CD  ARG A1050      19.448  55.984  53.429  1.00 56.68           C  
ATOM   8082  NE  ARG A1050      18.739  56.272  54.683  1.00 65.99           N  
ATOM   8083  CZ  ARG A1050      18.518  57.493  55.182  1.00 66.38           C  
ATOM   8084  NH1 ARG A1050      18.914  58.594  54.546  1.00 66.20           N  
ATOM   8085  NH2 ARG A1050      17.879  57.619  56.336  1.00 73.03           N  
ATOM   8086  N   SER A1051      22.438  56.094  49.150  1.00 31.30           N  
ATOM   8087  CA  SER A1051      23.172  56.766  48.105  1.00 32.82           C  
ATOM   8088  C   SER A1051      23.087  58.235  48.282  1.00 32.49           C  
ATOM   8089  O   SER A1051      22.016  58.738  48.593  1.00 34.29           O  
ATOM   8090  CB  SER A1051      22.627  56.395  46.726  1.00 35.61           C  
ATOM   8091  OG  SER A1051      22.821  55.003  46.514  1.00 35.79           O  
ATOM   8092  N   MET A1052      24.219  58.930  48.121  1.00 34.27           N  
ATOM   8093  CA  MET A1052      24.245  60.399  47.983  1.00 36.20           C  
ATOM   8094  C   MET A1052      24.198  60.669  46.488  1.00 34.28           C  
ATOM   8095  O   MET A1052      25.091  60.247  45.789  1.00 36.18           O  
ATOM   8096  CB  MET A1052      25.559  61.008  48.462  1.00 36.38           C  
ATOM   8097  CG  MET A1052      25.759  61.271  49.931  1.00 43.88           C  
ATOM   8098  SD  MET A1052      27.000  62.595  50.179  1.00 44.49           S  
ATOM   8099  CE  MET A1052      28.297  62.150  49.067  1.00 44.74           C  
ATOM   8100  N   SER A1053      23.205  61.389  45.997  1.00 34.93           N  
ATOM   8101  CA  SER A1053      23.084  61.590  44.559  1.00 36.72           C  
ATOM   8102  C   SER A1053      24.145  62.574  44.020  1.00 40.04           C  
ATOM   8103  O   SER A1053      24.517  62.490  42.858  1.00 43.44           O  
ATOM   8104  CB  SER A1053      21.697  62.051  44.182  1.00 34.32           C  
ATOM   8105  OG  SER A1053      21.479  63.380  44.596  1.00 36.48           O  
ATOM   8106  N   LYS A1054      24.647  63.481  44.855  1.00 40.34           N  
ATOM   8107  CA  LYS A1054      25.742  64.362  44.435  1.00 39.29           C  
ATOM   8108  C   LYS A1054      27.057  64.057  45.188  1.00 41.76           C  
ATOM   8109  O   LYS A1054      27.220  62.948  45.744  1.00 44.22           O  
ATOM   8110  CB  LYS A1054      25.328  65.799  44.602  1.00 38.43           C  
ATOM   8111  CG  LYS A1054      24.011  66.141  43.933  1.00 40.92           C  
ATOM   8112  CD  LYS A1054      23.582  67.580  44.247  1.00 38.59           C  
ATOM   8113  CE  LYS A1054      22.883  67.611  45.591  1.00 42.14           C  
ATOM   8114  NZ  LYS A1054      22.605  68.987  46.092  1.00 48.21           N  
ATOM   8115  N   THR A1055      28.023  64.990  45.149  1.00 40.51           N  
ATOM   8116  CA  THR A1055      29.260  64.831  45.906  1.00 41.54           C  
ATOM   8117  C   THR A1055      29.070  65.539  47.226  1.00 39.43           C  
ATOM   8118  O   THR A1055      28.234  66.452  47.361  1.00 38.24           O  
ATOM   8119  CB  THR A1055      30.490  65.482  45.234  1.00 47.83           C  
ATOM   8120  OG1 THR A1055      30.258  66.888  45.044  1.00 52.48           O  
ATOM   8121  CG2 THR A1055      30.817  64.841  43.913  1.00 50.01           C  
ATOM   8122  N   LEU A1056      29.885  65.159  48.189  1.00 37.87           N  
ATOM   8123  CA  LEU A1056      29.755  65.708  49.524  1.00 40.78           C  
ATOM   8124  C   LEU A1056      29.840  67.244  49.559  1.00 39.48           C  
ATOM   8125  O   LEU A1056      29.142  67.853  50.344  1.00 42.01           O  
ATOM   8126  CB  LEU A1056      30.756  65.042  50.471  1.00 40.53           C  
ATOM   8127  CG  LEU A1056      30.923  65.661  51.868  1.00 42.71           C  
ATOM   8128  CD1 LEU A1056      29.652  65.577  52.692  1.00 43.12           C  
ATOM   8129  CD2 LEU A1056      32.081  64.990  52.596  1.00 42.49           C  
ATOM   8130  N   LYS A1057      30.639  67.868  48.696  1.00 43.99           N  
ATOM   8131  CA  LYS A1057      30.781  69.348  48.690  1.00 51.28           C  
ATOM   8132  C   LYS A1057      29.471  70.128  48.485  1.00 49.94           C  
ATOM   8133  O   LYS A1057      29.283  71.232  49.040  1.00 47.51           O  
ATOM   8134  CB  LYS A1057      31.758  69.802  47.589  1.00 60.98           C  
ATOM   8135  CG  LYS A1057      33.175  69.253  47.696  1.00 69.92           C  
ATOM   8136  CD  LYS A1057      34.241  70.196  47.104  1.00 77.52           C  
ATOM   8137  CE  LYS A1057      35.269  70.668  48.143  1.00 80.46           C  
ATOM   8138  NZ  LYS A1057      34.852  71.874  48.926  1.00 83.91           N  
ATOM   8139  N   GLU A1058      28.578  69.536  47.688  1.00 46.69           N  
ATOM   8140  CA  GLU A1058      27.330  70.173  47.252  1.00 45.07           C  
ATOM   8141  C   GLU A1058      26.195  70.031  48.291  1.00 43.66           C  
ATOM   8142  O   GLU A1058      25.030  70.311  48.018  1.00 47.48           O  
ATOM   8143  CB  GLU A1058      26.906  69.584  45.897  1.00 47.36           C  
ATOM   8144  CG  GLU A1058      28.020  69.543  44.827  1.00 50.40           C  
ATOM   8145  CD  GLU A1058      27.643  68.699  43.631  1.00 59.45           C  
ATOM   8146  OE1 GLU A1058      26.583  68.990  43.021  1.00 64.96           O  
ATOM   8147  OE2 GLU A1058      28.378  67.728  43.317  1.00 59.85           O  
ATOM   8148  N   TYR A1059      26.526  69.611  49.496  1.00 40.13           N  
ATOM   8149  CA  TYR A1059      25.500  69.425  50.494  1.00 42.03           C  
ATOM   8150  C   TYR A1059      25.703  70.362  51.663  1.00 46.53           C  
ATOM   8151  O   TYR A1059      25.258  70.087  52.750  1.00 46.56           O  
ATOM   8152  CB  TYR A1059      25.572  68.001  50.979  1.00 38.20           C  
ATOM   8153  CG  TYR A1059      24.946  67.022  50.037  1.00 36.20           C  
ATOM   8154  CD1 TYR A1059      23.561  66.790  50.049  1.00 33.04           C  
ATOM   8155  CD2 TYR A1059      25.725  66.317  49.134  1.00 34.72           C  
ATOM   8156  CE1 TYR A1059      22.984  65.875  49.176  1.00 32.29           C  
ATOM   8157  CE2 TYR A1059      25.160  65.409  48.270  1.00 33.25           C  
ATOM   8158  CZ  TYR A1059      23.796  65.193  48.297  1.00 31.82           C  
ATOM   8159  OH  TYR A1059      23.282  64.286  47.437  1.00 33.30           O  
ATOM   8160  N   GLU A1060      26.403  71.461  51.430  1.00 52.88           N  
ATOM   8161  CA  GLU A1060      26.964  72.272  52.510  1.00 54.69           C  
ATOM   8162  C   GLU A1060      25.835  73.016  53.239  1.00 44.79           C  
ATOM   8163  O   GLU A1060      24.917  73.531  52.627  1.00 37.09           O  
ATOM   8164  CB  GLU A1060      28.042  73.204  51.915  1.00 65.71           C  
ATOM   8165  CG  GLU A1060      28.735  74.148  52.889  1.00 72.56           C  
ATOM   8166  CD  GLU A1060      28.101  75.536  52.891  1.00 82.39           C  
ATOM   8167  OE1 GLU A1060      28.177  76.233  51.850  1.00 83.39           O  
ATOM   8168  OE2 GLU A1060      27.519  75.933  53.930  1.00 84.86           O  
ATOM   8169  N   GLY A1061      25.864  72.989  54.565  1.00 45.96           N  
ATOM   8170  CA  GLY A1061      24.723  73.464  55.371  1.00 42.50           C  
ATOM   8171  C   GLY A1061      23.483  72.570  55.398  1.00 42.59           C  
ATOM   8172  O   GLY A1061      22.392  72.990  55.799  1.00 43.25           O  
ATOM   8173  N   GLN A1062      23.623  71.337  54.943  1.00 39.39           N  
ATOM   8174  CA  GLN A1062      22.605  70.345  55.190  1.00 38.51           C  
ATOM   8175  C   GLN A1062      23.148  69.289  56.126  1.00 34.58           C  
ATOM   8176  O   GLN A1062      24.334  69.070  56.210  1.00 31.30           O  
ATOM   8177  CB  GLN A1062      22.163  69.716  53.879  1.00 43.09           C  
ATOM   8178  CG  GLN A1062      21.496  70.706  52.938  1.00 50.63           C  
ATOM   8179  CD  GLN A1062      20.538  70.040  51.969  1.00 56.87           C  
ATOM   8180  OE1 GLN A1062      20.776  68.931  51.496  1.00 58.08           O  
ATOM   8181  NE2 GLN A1062      19.442  70.729  51.656  1.00 67.17           N  
ATOM   8182  N   LYS A1063      22.267  68.603  56.828  1.00 37.05           N  
ATOM   8183  CA  LYS A1063      22.678  67.474  57.658  1.00 33.29           C  
ATOM   8184  C   LYS A1063      21.856  66.200  57.380  1.00 30.13           C  
ATOM   8185  O   LYS A1063      20.672  66.272  57.084  1.00 34.55           O  
ATOM   8186  CB  LYS A1063      22.477  67.876  59.094  1.00 37.91           C  
ATOM   8187  CG  LYS A1063      22.976  69.275  59.432  1.00 40.54           C  
ATOM   8188  CD  LYS A1063      22.839  69.438  60.922  1.00 40.87           C  
ATOM   8189  CE  LYS A1063      23.161  70.833  61.369  1.00 42.99           C  
ATOM   8190  NZ  LYS A1063      22.448  70.974  62.647  1.00 44.83           N  
ATOM   8191  N   SER A1064      22.463  65.035  57.547  1.00 27.20           N  
ATOM   8192  CA  SER A1064      21.780  63.774  57.355  1.00 26.94           C  
ATOM   8193  C   SER A1064      22.794  62.678  57.640  1.00 24.94           C  
ATOM   8194  O   SER A1064      24.006  62.920  57.710  1.00 22.80           O  
ATOM   8195  CB  SER A1064      21.319  63.635  55.893  1.00 29.08           C  
ATOM   8196  OG  SER A1064      22.472  63.376  55.083  1.00 32.42           O  
ATOM   8197  N   THR A1065      22.314  61.454  57.759  1.00 23.42           N  
ATOM   8198  CA  THR A1065      23.183  60.345  58.095  1.00 22.64           C  
ATOM   8199  C   THR A1065      24.203  60.073  56.990  1.00 23.01           C  
ATOM   8200  O   THR A1065      25.352  59.704  57.244  1.00 28.97           O  
ATOM   8201  CB  THR A1065      22.293  59.139  58.416  1.00 22.38           C  
ATOM   8202  OG1 THR A1065      21.293  58.999  57.401  1.00 18.73           O  
ATOM   8203  CG2 THR A1065      21.563  59.367  59.678  1.00 22.81           C  
ATOM   8204  N   SER A1066      23.812  60.301  55.753  1.00 25.27           N  
ATOM   8205  CA  SER A1066      24.686  60.114  54.605  1.00 26.53           C  
ATOM   8206  C   SER A1066      25.813  61.127  54.607  1.00 27.28           C  
ATOM   8207  O   SER A1066      26.982  60.803  54.359  1.00 22.30           O  
ATOM   8208  CB  SER A1066      23.895  60.332  53.291  1.00 27.80           C  
ATOM   8209  OG  SER A1066      22.906  59.335  53.136  1.00 34.20           O  
ATOM   8210  N   ILE A1067      25.443  62.385  54.831  1.00 28.44           N  
ATOM   8211  CA  ILE A1067      26.431  63.443  54.837  1.00 27.63           C  
ATOM   8212  C   ILE A1067      27.497  63.110  55.898  1.00 28.56           C  
ATOM   8213  O   ILE A1067      28.704  63.080  55.599  1.00 25.92           O  
ATOM   8214  CB  ILE A1067      25.780  64.813  55.037  1.00 30.62           C  
ATOM   8215  CG1 ILE A1067      25.014  65.190  53.770  1.00 35.48           C  
ATOM   8216  CG2 ILE A1067      26.837  65.867  55.287  1.00 33.25           C  
ATOM   8217  CD1 ILE A1067      24.002  66.298  53.927  1.00 36.77           C  
ATOM   8218  N   THR A1068      27.062  62.830  57.125  1.00 28.44           N  
ATOM   8219  CA  THR A1068      28.008  62.565  58.208  1.00 27.94           C  
ATOM   8220  C   THR A1068      28.854  61.306  57.886  1.00 27.60           C  
ATOM   8221  O   THR A1068      30.076  61.271  58.084  1.00 23.84           O  
ATOM   8222  CB  THR A1068      27.247  62.382  59.513  1.00 28.09           C  
ATOM   8223  OG1 THR A1068      26.601  63.623  59.854  1.00 27.13           O  
ATOM   8224  CG2 THR A1068      28.176  61.940  60.621  1.00 27.64           C  
ATOM   8225  N   THR A1069      28.196  60.250  57.423  1.00 28.15           N  
ATOM   8226  CA  THR A1069      28.957  59.070  57.020  1.00 27.73           C  
ATOM   8227  C   THR A1069      30.018  59.409  55.968  1.00 29.50           C  
ATOM   8228  O   THR A1069      31.165  58.984  56.093  1.00 29.11           O  
ATOM   8229  CB  THR A1069      28.058  57.985  56.518  1.00 27.17           C  
ATOM   8230  OG1 THR A1069      27.030  57.751  57.500  1.00 27.52           O  
ATOM   8231  CG2 THR A1069      28.860  56.718  56.277  1.00 28.88           C  
ATOM   8232  N   ALA A1070      29.653  60.208  54.961  1.00 30.46           N  
ATOM   8233  CA  ALA A1070      30.599  60.552  53.890  1.00 29.37           C  
ATOM   8234  C   ALA A1070      31.776  61.334  54.446  1.00 29.31           C  
ATOM   8235  O   ALA A1070      32.933  60.934  54.288  1.00 30.61           O  
ATOM   8236  CB  ALA A1070      29.904  61.287  52.767  1.00 28.76           C  
ATOM   8237  N   ARG A1071      31.496  62.385  55.198  1.00 30.25           N  
ATOM   8238  CA  ARG A1071      32.565  63.161  55.849  1.00 32.95           C  
ATOM   8239  C   ARG A1071      33.548  62.298  56.657  1.00 32.94           C  
ATOM   8240  O   ARG A1071      34.767  62.448  56.544  1.00 30.56           O  
ATOM   8241  CB  ARG A1071      31.983  64.248  56.759  1.00 38.05           C  
ATOM   8242  CG  ARG A1071      33.073  65.099  57.380  1.00 46.88           C  
ATOM   8243  CD  ARG A1071      32.570  66.407  57.980  1.00 52.85           C  
ATOM   8244  NE  ARG A1071      31.343  66.250  58.767  1.00 56.26           N  
ATOM   8245  CZ  ARG A1071      31.231  65.613  59.935  1.00 54.35           C  
ATOM   8246  NH1 ARG A1071      32.276  65.003  60.509  1.00 55.15           N  
ATOM   8247  NH2 ARG A1071      30.034  65.558  60.521  1.00 51.40           N  
ATOM   8248  N   ARG A1072      33.022  61.380  57.463  1.00 33.24           N  
ATOM   8249  CA  ARG A1072      33.867  60.553  58.283  1.00 31.60           C  
ATOM   8250  C   ARG A1072      34.668  59.554  57.459  1.00 33.13           C  
ATOM   8251  O   ARG A1072      35.816  59.239  57.838  1.00 33.89           O  
ATOM   8252  CB  ARG A1072      33.040  59.874  59.392  1.00 34.56           C  
ATOM   8253  CG  ARG A1072      32.586  60.886  60.448  1.00 32.22           C  
ATOM   8254  CD  ARG A1072      31.540  60.298  61.373  1.00 30.55           C  
ATOM   8255  NE  ARG A1072      31.345  61.156  62.530  1.00 31.54           N  
ATOM   8256  CZ  ARG A1072      30.588  60.880  63.592  1.00 31.09           C  
ATOM   8257  NH1 ARG A1072      29.878  59.776  63.683  1.00 30.65           N  
ATOM   8258  NH2 ARG A1072      30.525  61.746  64.576  1.00 34.81           N  
ATOM   8259  N   LEU A1073      34.084  59.053  56.369  1.00 31.17           N  
ATOM   8260  CA  LEU A1073      34.821  58.195  55.419  1.00 35.27           C  
ATOM   8261  C   LEU A1073      35.970  58.947  54.817  1.00 34.46           C  
ATOM   8262  O   LEU A1073      37.041  58.425  54.722  1.00 31.39           O  
ATOM   8263  CB  LEU A1073      33.963  57.705  54.270  1.00 34.51           C  
ATOM   8264  CG  LEU A1073      33.276  56.369  54.447  1.00 38.43           C  
ATOM   8265  CD1 LEU A1073      32.453  56.127  53.187  1.00 43.25           C  
ATOM   8266  CD2 LEU A1073      34.257  55.234  54.643  1.00 37.89           C  
ATOM   8267  N   GLY A1074      35.711  60.182  54.425  1.00 38.56           N  
ATOM   8268  CA  GLY A1074      36.752  61.091  53.971  1.00 42.41           C  
ATOM   8269  C   GLY A1074      37.904  61.210  54.954  1.00 41.63           C  
ATOM   8270  O   GLY A1074      39.050  60.959  54.577  1.00 39.58           O  
ATOM   8271  N   ASP A1075      37.592  61.548  56.213  1.00 42.04           N  
ATOM   8272  CA  ASP A1075      38.632  61.821  57.217  1.00 43.64           C  
ATOM   8273  C   ASP A1075      39.439  60.566  57.439  1.00 41.37           C  
ATOM   8274  O   ASP A1075      40.639  60.632  57.554  1.00 45.66           O  
ATOM   8275  CB  ASP A1075      38.075  62.286  58.586  1.00 44.70           C  
ATOM   8276  CG  ASP A1075      37.266  63.594  58.507  1.00 52.87           C  
ATOM   8277  OD1 ASP A1075      37.619  64.468  57.684  1.00 60.32           O  
ATOM   8278  OD2 ASP A1075      36.274  63.756  59.284  1.00 58.60           O  
ATOM   8279  N   PHE A1076      38.769  59.423  57.481  1.00 36.65           N  
ATOM   8280  CA  PHE A1076      39.398  58.180  57.862  1.00 34.80           C  
ATOM   8281  C   PHE A1076      40.127  57.484  56.690  1.00 38.54           C  
ATOM   8282  O   PHE A1076      41.248  56.989  56.867  1.00 38.12           O  
ATOM   8283  CB  PHE A1076      38.323  57.311  58.590  1.00 34.72           C  
ATOM   8284  CG  PHE A1076      38.377  55.842  58.340  1.00 30.90           C  
ATOM   8285  CD1 PHE A1076      39.523  55.125  58.511  1.00 36.21           C  
ATOM   8286  CD2 PHE A1076      37.220  55.157  58.007  1.00 34.50           C  
ATOM   8287  CE1 PHE A1076      39.536  53.744  58.296  1.00 37.51           C  
ATOM   8288  CE2 PHE A1076      37.214  53.789  57.794  1.00 31.72           C  
ATOM   8289  CZ  PHE A1076      38.369  53.080  57.943  1.00 34.50           C  
ATOM   8290  N   LEU A1077      39.520  57.439  55.503  1.00 36.27           N  
ATOM   8291  CA  LEU A1077      40.064  56.666  54.422  1.00 32.45           C  
ATOM   8292  C   LEU A1077      40.586  57.535  53.311  1.00 39.49           C  
ATOM   8293  O   LEU A1077      41.085  56.994  52.325  1.00 43.94           O  
ATOM   8294  CB  LEU A1077      39.027  55.694  53.864  1.00 35.19           C  
ATOM   8295  CG  LEU A1077      38.830  54.395  54.658  1.00 32.21           C  
ATOM   8296  CD1 LEU A1077      37.706  53.624  53.989  1.00 34.51           C  
ATOM   8297  CD2 LEU A1077      40.090  53.537  54.777  1.00 33.46           C  
ATOM   8298  N   GLY A1078      40.500  58.861  53.463  1.00 39.38           N  
ATOM   8299  CA  GLY A1078      41.047  59.816  52.486  1.00 36.44           C  
ATOM   8300  C   GLY A1078      40.004  60.492  51.608  1.00 39.56           C  
ATOM   8301  O   GLY A1078      38.986  59.898  51.291  1.00 35.04           O  
ATOM   8302  N   GLU A1079      40.273  61.729  51.191  1.00 43.29           N  
ATOM   8303  CA  GLU A1079      39.409  62.501  50.258  1.00 48.54           C  
ATOM   8304  C   GLU A1079      39.015  61.829  48.900  1.00 48.81           C  
ATOM   8305  O   GLU A1079      38.067  62.250  48.256  1.00 43.48           O  
ATOM   8306  CB  GLU A1079      40.089  63.840  49.921  1.00 59.42           C  
ATOM   8307  CG  GLU A1079      40.464  64.711  51.126  1.00 71.33           C  
ATOM   8308  CD  GLU A1079      41.192  66.003  50.744  1.00 79.20           C  
ATOM   8309  OE1 GLU A1079      40.614  67.104  50.964  1.00 79.93           O  
ATOM   8310  OE2 GLU A1079      42.342  65.917  50.236  1.00 68.57           O  
ATOM   8311  N   ASP A1080      39.765  60.828  48.438  1.00 50.04           N  
ATOM   8312  CA  ASP A1080      39.400  60.099  47.211  1.00 52.94           C  
ATOM   8313  C   ASP A1080      38.026  59.400  47.378  1.00 48.94           C  
ATOM   8314  O   ASP A1080      37.231  59.285  46.432  1.00 44.96           O  
ATOM   8315  CB  ASP A1080      40.483  59.053  46.833  1.00 59.43           C  
ATOM   8316  CG  ASP A1080      41.698  59.661  46.068  1.00 62.63           C  
ATOM   8317  OD1 ASP A1080      41.644  60.829  45.619  1.00 63.15           O  
ATOM   8318  OD2 ASP A1080      42.718  58.946  45.915  1.00 63.81           O  
ATOM   8319  N   MET A1081      37.744  58.965  48.598  1.00 43.01           N  
ATOM   8320  CA  MET A1081      36.467  58.345  48.896  1.00 45.19           C  
ATOM   8321  C   MET A1081      35.268  59.207  48.470  1.00 39.47           C  
ATOM   8322  O   MET A1081      34.268  58.662  48.032  1.00 34.30           O  
ATOM   8323  CB  MET A1081      36.358  58.007  50.382  1.00 47.31           C  
ATOM   8324  CG  MET A1081      37.336  56.947  50.864  1.00 51.98           C  
ATOM   8325  SD  MET A1081      37.331  55.383  49.952  1.00 56.17           S  
ATOM   8326  CE  MET A1081      35.992  54.428  50.686  1.00 55.67           C  
ATOM   8327  N   VAL A1082      35.367  60.525  48.557  1.00 36.08           N  
ATOM   8328  CA  VAL A1082      34.195  61.350  48.292  1.00 40.00           C  
ATOM   8329  C   VAL A1082      34.281  62.262  47.065  1.00 46.15           C  
ATOM   8330  O   VAL A1082      33.518  63.230  46.949  1.00 48.15           O  
ATOM   8331  CB  VAL A1082      33.861  62.184  49.526  1.00 40.53           C  
ATOM   8332  CG1 VAL A1082      33.778  61.271  50.724  1.00 38.84           C  
ATOM   8333  CG2 VAL A1082      34.907  63.274  49.753  1.00 45.41           C  
ATOM   8334  N   LYS A1083      35.166  61.978  46.117  1.00 52.89           N  
ATOM   8335  CA  LYS A1083      35.228  62.903  44.970  1.00 59.12           C  
ATOM   8336  C   LYS A1083      34.128  62.627  43.914  1.00 52.19           C  
ATOM   8337  O   LYS A1083      33.800  63.513  43.137  1.00 48.51           O  
ATOM   8338  CB  LYS A1083      36.649  63.000  44.364  1.00 61.57           C  
ATOM   8339  CG  LYS A1083      36.895  62.198  43.099  1.00 66.93           C  
ATOM   8340  CD  LYS A1083      36.994  60.710  43.388  1.00 71.30           C  
ATOM   8341  CE  LYS A1083      38.409  60.159  43.237  1.00 70.39           C  
ATOM   8342  NZ  LYS A1083      38.591  59.549  41.899  1.00 65.42           N  
ATOM   8343  N   ASP A1084      33.572  61.411  43.895  1.00 49.28           N  
ATOM   8344  CA  ASP A1084      32.527  61.041  42.919  1.00 48.22           C  
ATOM   8345  C   ASP A1084      31.130  61.076  43.532  1.00 50.74           C  
ATOM   8346  O   ASP A1084      30.945  61.041  44.758  1.00 43.85           O  
ATOM   8347  CB  ASP A1084      32.797  59.653  42.314  1.00 53.41           C  
ATOM   8348  CG  ASP A1084      34.037  59.636  41.393  1.00 60.72           C  
ATOM   8349  OD1 ASP A1084      34.592  60.734  41.129  1.00 55.23           O  
ATOM   8350  OD2 ASP A1084      34.450  58.536  40.938  1.00 61.82           O  
ATOM   8351  N   LYS A1085      30.143  61.178  42.657  1.00 48.19           N  
ATOM   8352  CA  LYS A1085      28.744  61.225  43.061  1.00 44.99           C  
ATOM   8353  C   LYS A1085      28.314  59.760  43.209  1.00 40.08           C  
ATOM   8354  O   LYS A1085      29.074  58.867  42.810  1.00 33.75           O  
ATOM   8355  CB  LYS A1085      27.927  61.958  41.996  1.00 45.74           C  
ATOM   8356  CG  LYS A1085      28.092  61.357  40.612  1.00 47.93           C  
ATOM   8357  CD  LYS A1085      27.193  62.010  39.584  1.00 54.60           C  
ATOM   8358  CE  LYS A1085      27.108  61.091  38.361  1.00 59.22           C  
ATOM   8359  NZ  LYS A1085      26.430  61.738  37.206  1.00 58.51           N  
ATOM   8360  N   GLY A1086      27.123  59.512  43.764  1.00 32.80           N  
ATOM   8361  CA  GLY A1086      26.608  58.143  43.929  1.00 31.26           C  
ATOM   8362  C   GLY A1086      27.287  57.323  45.034  1.00 34.69           C  
ATOM   8363  O   GLY A1086      27.223  56.070  45.039  1.00 34.63           O  
ATOM   8364  N   LEU A1087      27.968  57.981  45.976  1.00 31.54           N  
ATOM   8365  CA  LEU A1087      28.639  57.220  47.067  1.00 31.55           C  
ATOM   8366  C   LEU A1087      27.647  56.394  47.954  1.00 30.81           C  
ATOM   8367  O   LEU A1087      26.686  56.960  48.462  1.00 32.44           O  
ATOM   8368  CB  LEU A1087      29.454  58.191  47.924  1.00 33.99           C  
ATOM   8369  CG  LEU A1087      30.113  57.620  49.177  1.00 34.84           C  
ATOM   8370  CD1 LEU A1087      31.212  56.631  48.799  1.00 33.90           C  
ATOM   8371  CD2 LEU A1087      30.638  58.767  50.004  1.00 35.94           C  
ATOM   8372  N   GLN A1088      27.871  55.080  48.113  1.00 27.71           N  
ATOM   8373  CA  GLN A1088      27.095  54.252  49.021  1.00 31.65           C  
ATOM   8374  C   GLN A1088      27.579  54.407  50.489  1.00 32.07           C  
ATOM   8375  O   GLN A1088      28.602  53.916  50.874  1.00 34.54           O  
ATOM   8376  CB  GLN A1088      27.163  52.778  48.611  1.00 33.20           C  
ATOM   8377  CG  GLN A1088      26.368  52.403  47.366  1.00 35.89           C  
ATOM   8378  CD  GLN A1088      26.568  50.899  47.034  1.00 40.56           C  
ATOM   8379  OE1 GLN A1088      25.993  50.009  47.681  1.00 35.47           O  
ATOM   8380  NE2 GLN A1088      27.421  50.618  46.054  1.00 41.45           N  
ATOM   8381  N   CYS A1089      26.829  55.127  51.290  1.00 34.01           N  
ATOM   8382  CA  CYS A1089      27.230  55.443  52.666  1.00 33.36           C  
ATOM   8383  C   CYS A1089      26.657  54.364  53.565  1.00 33.29           C  
ATOM   8384  O   CYS A1089      25.445  54.355  53.831  1.00 33.06           O  
ATOM   8385  CB  CYS A1089      26.672  56.820  53.055  1.00 33.59           C  
ATOM   8386  SG  CYS A1089      27.256  58.198  52.028  1.00 33.09           S  
ATOM   8387  N   LYS A1090      27.506  53.427  53.978  1.00 29.70           N  
ATOM   8388  CA  LYS A1090      27.084  52.345  54.820  1.00 30.87           C  
ATOM   8389  C   LYS A1090      27.461  52.678  56.272  1.00 30.29           C  
ATOM   8390  O   LYS A1090      28.660  52.856  56.586  1.00 26.78           O  
ATOM   8391  CB  LYS A1090      27.787  51.091  54.449  1.00 33.11           C  
ATOM   8392  CG  LYS A1090      27.437  50.536  53.103  1.00 42.25           C  
ATOM   8393  CD  LYS A1090      27.472  49.007  53.149  1.00 48.01           C  
ATOM   8394  CE  LYS A1090      28.321  48.422  52.028  1.00 53.31           C  
ATOM   8395  NZ  LYS A1090      28.664  46.986  52.322  1.00 54.28           N  
ATOM   8396  N   TYR A1091      26.454  52.730  57.142  1.00 23.42           N  
ATOM   8397  CA  TYR A1091      26.662  53.178  58.479  1.00 24.32           C  
ATOM   8398  C   TYR A1091      25.807  52.501  59.518  1.00 23.44           C  
ATOM   8399  O   TYR A1091      24.791  51.877  59.194  1.00 23.80           O  
ATOM   8400  CB  TYR A1091      26.382  54.678  58.551  1.00 24.12           C  
ATOM   8401  CG  TYR A1091      24.900  55.072  58.326  1.00 25.80           C  
ATOM   8402  CD1 TYR A1091      24.001  55.168  59.416  1.00 25.18           C  
ATOM   8403  CD2 TYR A1091      24.440  55.445  57.058  1.00 25.11           C  
ATOM   8404  CE1 TYR A1091      22.671  55.534  59.230  1.00 24.86           C  
ATOM   8405  CE2 TYR A1091      23.115  55.828  56.857  1.00 26.03           C  
ATOM   8406  CZ  TYR A1091      22.229  55.838  57.921  1.00 25.49           C  
ATOM   8407  OH  TYR A1091      20.946  56.286  57.721  1.00 26.60           O  
ATOM   8408  N   ILE A1092      26.191  52.733  60.769  1.00 22.93           N  
ATOM   8409  CA  ILE A1092      25.526  52.220  61.958  1.00 23.38           C  
ATOM   8410  C   ILE A1092      25.323  53.449  62.829  1.00 22.63           C  
ATOM   8411  O   ILE A1092      26.135  54.413  62.715  1.00 21.25           O  
ATOM   8412  CB  ILE A1092      26.497  51.176  62.560  1.00 29.37           C  
ATOM   8413  CG1 ILE A1092      25.798  49.909  62.798  1.00 32.76           C  
ATOM   8414  CG2 ILE A1092      27.312  51.625  63.794  1.00 30.43           C  
ATOM   8415  CD1 ILE A1092      25.686  49.123  61.542  1.00 35.59           C  
ATOM   8416  N   ILE A1093      24.256  53.451  63.642  1.00 22.90           N  
ATOM   8417  CA  ILE A1093      24.009  54.505  64.669  1.00 23.68           C  
ATOM   8418  C   ILE A1093      24.574  54.128  66.052  1.00 24.46           C  
ATOM   8419  O   ILE A1093      24.240  53.078  66.597  1.00 23.15           O  
ATOM   8420  CB  ILE A1093      22.509  54.813  64.856  1.00 23.76           C  
ATOM   8421  CG1 ILE A1093      21.869  55.252  63.526  1.00 24.12           C  
ATOM   8422  CG2 ILE A1093      22.315  55.930  65.908  1.00 22.84           C  
ATOM   8423  CD1 ILE A1093      22.538  56.448  62.891  1.00 22.29           C  
ATOM   8424  N   SER A1094      25.446  54.971  66.593  1.00 24.23           N  
ATOM   8425  CA  SER A1094      26.101  54.706  67.891  1.00 25.59           C  
ATOM   8426  C   SER A1094      25.299  55.300  69.055  1.00 25.65           C  
ATOM   8427  O   SER A1094      24.623  56.304  68.877  1.00 26.31           O  
ATOM   8428  CB  SER A1094      27.504  55.324  67.897  1.00 25.87           C  
ATOM   8429  OG  SER A1094      27.450  56.741  67.740  1.00 24.94           O  
ATOM   8430  N   SER A1095      25.367  54.675  70.220  1.00 26.47           N  
ATOM   8431  CA  SER A1095      24.746  55.200  71.419  1.00 32.49           C  
ATOM   8432  C   SER A1095      25.344  56.538  71.759  1.00 32.80           C  
ATOM   8433  O   SER A1095      24.625  57.446  72.178  1.00 34.01           O  
ATOM   8434  CB  SER A1095      24.963  54.298  72.636  1.00 34.85           C  
ATOM   8435  OG  SER A1095      24.337  53.046  72.474  1.00 42.69           O  
ATOM   8436  N   LYS A1096      26.656  56.668  71.598  1.00 33.76           N  
ATOM   8437  CA  LYS A1096      27.332  57.898  72.031  1.00 34.76           C  
ATOM   8438  C   LYS A1096      27.694  58.773  70.858  1.00 32.15           C  
ATOM   8439  O   LYS A1096      27.957  58.271  69.760  1.00 32.91           O  
ATOM   8440  CB  LYS A1096      28.546  57.557  72.903  1.00 36.26           C  
ATOM   8441  CG  LYS A1096      28.085  56.865  74.169  1.00 42.67           C  
ATOM   8442  CD  LYS A1096      29.231  56.389  75.043  1.00 49.53           C  
ATOM   8443  CE  LYS A1096      29.891  57.540  75.789  1.00 56.93           C  
ATOM   8444  NZ  LYS A1096      30.923  57.019  76.728  1.00 60.79           N  
ATOM   8445  N   PRO A1097      27.735  60.079  71.078  1.00 29.12           N  
ATOM   8446  CA  PRO A1097      27.476  60.857  72.302  1.00 32.79           C  
ATOM   8447  C   PRO A1097      26.015  60.874  72.730  1.00 33.30           C  
ATOM   8448  O   PRO A1097      25.119  61.042  71.888  1.00 30.71           O  
ATOM   8449  CB  PRO A1097      27.867  62.306  71.897  1.00 32.99           C  
ATOM   8450  CG  PRO A1097      28.743  62.138  70.706  1.00 33.46           C  
ATOM   8451  CD  PRO A1097      28.235  60.921  70.000  1.00 32.04           C  
ATOM   8452  N   PHE A1098      25.785  60.734  74.034  1.00 36.62           N  
ATOM   8453  CA  PHE A1098      24.455  60.891  74.585  1.00 36.90           C  
ATOM   8454  C   PHE A1098      24.061  62.333  74.292  1.00 33.53           C  
ATOM   8455  O   PHE A1098      24.895  63.260  74.316  1.00 38.07           O  
ATOM   8456  CB  PHE A1098      24.409  60.578  76.105  1.00 38.81           C  
ATOM   8457  CG  PHE A1098      24.780  59.151  76.450  1.00 42.08           C  
ATOM   8458  CD1 PHE A1098      24.169  58.077  75.804  1.00 42.07           C  
ATOM   8459  CD2 PHE A1098      25.723  58.875  77.458  1.00 47.75           C  
ATOM   8460  CE1 PHE A1098      24.513  56.764  76.104  1.00 44.06           C  
ATOM   8461  CE2 PHE A1098      26.063  57.557  77.771  1.00 45.11           C  
ATOM   8462  CZ  PHE A1098      25.464  56.501  77.092  1.00 46.17           C  
ATOM   8463  N   ASN A1099      22.795  62.497  73.972  1.00 35.42           N  
ATOM   8464  CA  ASN A1099      22.206  63.794  73.708  1.00 36.77           C  
ATOM   8465  C   ASN A1099      22.573  64.411  72.387  1.00 37.86           C  
ATOM   8466  O   ASN A1099      22.312  65.587  72.174  1.00 47.19           O  
ATOM   8467  CB  ASN A1099      22.500  64.766  74.854  1.00 38.06           C  
ATOM   8468  CG  ASN A1099      21.982  64.243  76.165  1.00 38.82           C  
ATOM   8469  OD1 ASN A1099      20.772  64.057  76.306  1.00 36.43           O  
ATOM   8470  ND2 ASN A1099      22.895  63.955  77.124  1.00 38.89           N  
ATOM   8471  N   ALA A1100      23.175  63.664  71.480  1.00 37.05           N  
ATOM   8472  CA  ALA A1100      23.398  64.226  70.162  1.00 37.90           C  
ATOM   8473  C   ALA A1100      22.301  63.748  69.196  1.00 32.15           C  
ATOM   8474  O   ALA A1100      21.790  62.651  69.344  1.00 31.13           O  
ATOM   8475  CB  ALA A1100      24.791  63.893  69.650  1.00 39.59           C  
ATOM   8476  N   PRO A1101      21.950  64.573  68.203  1.00 33.07           N  
ATOM   8477  CA  PRO A1101      20.930  64.132  67.251  1.00 32.67           C  
ATOM   8478  C   PRO A1101      21.448  62.958  66.423  1.00 29.01           C  
ATOM   8479  O   PRO A1101      22.670  62.693  66.366  1.00 28.13           O  
ATOM   8480  CB  PRO A1101      20.667  65.368  66.376  1.00 33.58           C  
ATOM   8481  CG  PRO A1101      21.539  66.477  66.916  1.00 35.63           C  
ATOM   8482  CD  PRO A1101      22.575  65.839  67.793  1.00 35.65           C  
ATOM   8483  N   VAL A1102      20.533  62.214  65.840  1.00 26.81           N  
ATOM   8484  CA  VAL A1102      20.934  61.011  65.127  1.00 27.38           C  
ATOM   8485  C   VAL A1102      22.006  61.249  64.062  1.00 24.50           C  
ATOM   8486  O   VAL A1102      22.898  60.404  63.892  1.00 22.10           O  
ATOM   8487  CB  VAL A1102      19.737  60.295  64.485  1.00 28.18           C  
ATOM   8488  CG1 VAL A1102      20.212  59.218  63.530  1.00 27.69           C  
ATOM   8489  CG2 VAL A1102      18.827  59.704  65.572  1.00 27.92           C  
ATOM   8490  N   THR A1103      21.945  62.351  63.343  1.00 25.36           N  
ATOM   8491  CA  THR A1103      22.872  62.508  62.225  1.00 31.00           C  
ATOM   8492  C   THR A1103      24.313  62.713  62.697  1.00 32.52           C  
ATOM   8493  O   THR A1103      25.254  62.585  61.905  1.00 39.16           O  
ATOM   8494  CB  THR A1103      22.506  63.666  61.294  1.00 30.96           C  
ATOM   8495  OG1 THR A1103      22.463  64.851  62.041  1.00 29.10           O  
ATOM   8496  CG2 THR A1103      21.137  63.470  60.697  1.00 33.11           C  
ATOM   8497  N   GLU A1104      24.499  63.050  63.964  1.00 32.51           N  
ATOM   8498  CA  GLU A1104      25.861  63.165  64.511  1.00 32.36           C  
ATOM   8499  C   GLU A1104      26.414  61.816  64.930  1.00 29.30           C  
ATOM   8500  O   GLU A1104      27.602  61.696  65.241  1.00 31.97           O  
ATOM   8501  CB  GLU A1104      25.935  64.161  65.683  1.00 36.28           C  
ATOM   8502  CG  GLU A1104      25.756  65.636  65.254  1.00 39.99           C  
ATOM   8503  CD  GLU A1104      25.699  66.667  66.425  1.00 46.30           C  
ATOM   8504  OE1 GLU A1104      26.189  66.419  67.560  1.00 44.70           O  
ATOM   8505  OE2 GLU A1104      25.144  67.766  66.207  1.00 55.69           O  
ATOM   8506  N   ARG A1105      25.585  60.768  64.885  1.00 26.29           N  
ATOM   8507  CA  ARG A1105      25.994  59.456  65.356  1.00 23.04           C  
ATOM   8508  C   ARG A1105      26.068  58.359  64.312  1.00 22.09           C  
ATOM   8509  O   ARG A1105      26.215  57.172  64.646  1.00 21.38           O  
ATOM   8510  CB  ARG A1105      25.073  59.077  66.496  1.00 27.43           C  
ATOM   8511  CG  ARG A1105      25.240  60.050  67.662  1.00 28.76           C  
ATOM   8512  CD  ARG A1105      24.438  59.686  68.894  1.00 29.84           C  
ATOM   8513  NE  ARG A1105      23.031  59.999  68.773  1.00 28.12           N  
ATOM   8514  CZ  ARG A1105      22.052  59.105  68.811  1.00 26.71           C  
ATOM   8515  NH1 ARG A1105      22.314  57.835  68.968  1.00 27.13           N  
ATOM   8516  NH2 ARG A1105      20.794  59.496  68.704  1.00 25.53           N  
ATOM   8517  N   ALA A1106      26.156  58.727  63.045  1.00 22.36           N  
ATOM   8518  CA  ALA A1106      26.442  57.734  61.997  1.00 24.66           C  
ATOM   8519  C   ALA A1106      27.931  57.430  61.863  1.00 26.28           C  
ATOM   8520  O   ALA A1106      28.712  58.283  61.430  1.00 29.05           O  
ATOM   8521  CB  ALA A1106      25.920  58.169  60.640  1.00 22.65           C  
ATOM   8522  N   ILE A1107      28.254  56.167  62.114  1.00 27.86           N  
ATOM   8523  CA  ILE A1107      29.546  55.637  61.978  1.00 26.41           C  
ATOM   8524  C   ILE A1107      29.646  54.732  60.747  1.00 25.47           C  
ATOM   8525  O   ILE A1107      28.877  53.790  60.604  1.00 25.74           O  
ATOM   8526  CB  ILE A1107      29.887  54.853  63.221  1.00 28.41           C  
ATOM   8527  CG1 ILE A1107      30.061  55.847  64.378  1.00 31.22           C  
ATOM   8528  CG2 ILE A1107      31.174  54.030  63.009  1.00 29.12           C  
ATOM   8529  CD1 ILE A1107      30.364  55.181  65.683  1.00 30.74           C  
ATOM   8530  N   PRO A1108      30.628  54.993  59.871  1.00 26.34           N  
ATOM   8531  CA  PRO A1108      30.812  54.122  58.704  1.00 26.66           C  
ATOM   8532  C   PRO A1108      31.220  52.747  59.121  1.00 27.33           C  
ATOM   8533  O   PRO A1108      32.175  52.607  59.885  1.00 27.51           O  
ATOM   8534  CB  PRO A1108      31.929  54.779  57.915  1.00 26.11           C  
ATOM   8535  CG  PRO A1108      32.319  55.981  58.660  1.00 27.50           C  
ATOM   8536  CD  PRO A1108      31.348  56.261  59.742  1.00 26.24           C  
ATOM   8537  N   VAL A1109      30.490  51.735  58.678  1.00 26.69           N  
ATOM   8538  CA  VAL A1109      30.785  50.395  59.119  1.00 28.57           C  
ATOM   8539  C   VAL A1109      32.202  49.978  58.690  1.00 30.99           C  
ATOM   8540  O   VAL A1109      32.827  49.103  59.318  1.00 30.24           O  
ATOM   8541  CB  VAL A1109      29.747  49.372  58.651  1.00 28.29           C  
ATOM   8542  CG1 VAL A1109      28.353  49.813  59.055  1.00 30.98           C  
ATOM   8543  CG2 VAL A1109      29.773  49.221  57.155  1.00 30.48           C  
ATOM   8544  N   ALA A1110      32.710  50.587  57.632  1.00 28.47           N  
ATOM   8545  CA  ALA A1110      34.083  50.302  57.191  1.00 31.48           C  
ATOM   8546  C   ALA A1110      35.115  50.438  58.340  1.00 32.27           C  
ATOM   8547  O   ALA A1110      36.088  49.693  58.400  1.00 33.34           O  
ATOM   8548  CB  ALA A1110      34.460  51.185  55.988  1.00 31.46           C  
ATOM   8549  N   ILE A1111      34.876  51.348  59.278  1.00 36.01           N  
ATOM   8550  CA  ILE A1111      35.819  51.532  60.376  1.00 40.68           C  
ATOM   8551  C   ILE A1111      36.075  50.202  61.119  1.00 42.04           C  
ATOM   8552  O   ILE A1111      37.170  49.976  61.610  1.00 43.62           O  
ATOM   8553  CB  ILE A1111      35.401  52.630  61.380  1.00 38.96           C  
ATOM   8554  CG1 ILE A1111      36.607  53.072  62.215  1.00 43.60           C  
ATOM   8555  CG2 ILE A1111      34.356  52.117  62.370  1.00 37.24           C  
ATOM   8556  CD1 ILE A1111      37.678  53.867  61.485  1.00 42.68           C  
ATOM   8557  N   PHE A1112      35.081  49.329  61.183  1.00 38.97           N  
ATOM   8558  CA  PHE A1112      35.245  48.067  61.877  1.00 40.77           C  
ATOM   8559  C   PHE A1112      36.123  47.049  61.149  1.00 45.51           C  
ATOM   8560  O   PHE A1112      36.269  45.922  61.618  1.00 46.49           O  
ATOM   8561  CB  PHE A1112      33.875  47.491  62.225  1.00 39.99           C  
ATOM   8562  CG  PHE A1112      33.099  48.385  63.160  1.00 40.17           C  
ATOM   8563  CD1 PHE A1112      33.452  48.466  64.525  1.00 40.63           C  
ATOM   8564  CD2 PHE A1112      32.100  49.213  62.687  1.00 41.71           C  
ATOM   8565  CE1 PHE A1112      32.774  49.318  65.384  1.00 39.14           C  
ATOM   8566  CE2 PHE A1112      31.417  50.076  63.543  1.00 44.83           C  
ATOM   8567  CZ  PHE A1112      31.758  50.135  64.883  1.00 41.28           C  
ATOM   8568  N   SER A1113      36.706  47.432  60.015  1.00 44.51           N  
ATOM   8569  CA  SER A1113      37.697  46.601  59.339  1.00 44.13           C  
ATOM   8570  C   SER A1113      39.083  47.246  59.309  1.00 45.59           C  
ATOM   8571  O   SER A1113      40.008  46.677  58.715  1.00 48.20           O  
ATOM   8572  CB  SER A1113      37.256  46.335  57.903  1.00 43.96           C  
ATOM   8573  OG  SER A1113      35.972  45.742  57.878  1.00 43.97           O  
ATOM   8574  N   ALA A1114      39.216  48.434  59.907  1.00 41.85           N  
ATOM   8575  CA  ALA A1114      40.499  49.111  59.988  1.00 45.52           C  
ATOM   8576  C   ALA A1114      41.436  48.415  60.996  1.00 50.75           C  
ATOM   8577  O   ALA A1114      41.002  47.654  61.873  1.00 43.91           O  
ATOM   8578  CB  ALA A1114      40.313  50.564  60.383  1.00 45.40           C  
ATOM   8579  N   ASP A1115      42.728  48.695  60.864  1.00 59.20           N  
ATOM   8580  CA  ASP A1115      43.704  48.224  61.849  1.00 68.20           C  
ATOM   8581  C   ASP A1115      43.247  48.744  63.220  1.00 67.63           C  
ATOM   8582  O   ASP A1115      42.568  49.781  63.297  1.00 62.03           O  
ATOM   8583  CB  ASP A1115      45.120  48.732  61.520  1.00 72.58           C  
ATOM   8584  CG  ASP A1115      45.604  48.297  60.133  1.00 76.81           C  
ATOM   8585  OD1 ASP A1115      45.379  47.132  59.751  1.00 81.16           O  
ATOM   8586  OD2 ASP A1115      46.217  49.121  59.420  1.00 80.99           O  
ATOM   8587  N   ILE A1116      43.591  48.029  64.290  1.00 64.11           N  
ATOM   8588  CA  ILE A1116      43.117  48.407  65.649  1.00 67.91           C  
ATOM   8589  C   ILE A1116      43.467  49.830  66.119  1.00 63.60           C  
ATOM   8590  O   ILE A1116      42.606  50.501  66.665  1.00 60.29           O  
ATOM   8591  CB  ILE A1116      43.526  47.379  66.742  1.00 70.02           C  
ATOM   8592  CG1 ILE A1116      42.806  46.036  66.490  1.00 74.51           C  
ATOM   8593  CG2 ILE A1116      43.190  47.916  68.138  1.00 67.31           C  
ATOM   8594  CD1 ILE A1116      43.213  44.899  67.413  1.00 72.54           C  
ATOM   8595  N   PRO A1117      44.713  50.296  65.918  1.00 67.72           N  
ATOM   8596  CA  PRO A1117      45.030  51.693  66.316  1.00 65.80           C  
ATOM   8597  C   PRO A1117      44.216  52.775  65.599  1.00 60.84           C  
ATOM   8598  O   PRO A1117      43.941  53.835  66.186  1.00 56.47           O  
ATOM   8599  CB  PRO A1117      46.510  51.840  65.955  1.00 66.81           C  
ATOM   8600  CG  PRO A1117      47.037  50.442  65.933  1.00 69.12           C  
ATOM   8601  CD  PRO A1117      45.909  49.569  65.461  1.00 67.48           C  
ATOM   8602  N   ILE A1118      43.847  52.516  64.343  1.00 59.87           N  
ATOM   8603  CA  ILE A1118      43.054  53.473  63.532  1.00 57.10           C  
ATOM   8604  C   ILE A1118      41.611  53.519  64.040  1.00 47.20           C  
ATOM   8605  O   ILE A1118      41.050  54.583  64.337  1.00 42.79           O  
ATOM   8606  CB  ILE A1118      43.024  53.099  62.017  1.00 63.49           C  
ATOM   8607  CG1 ILE A1118      44.424  52.746  61.484  1.00 69.33           C  
ATOM   8608  CG2 ILE A1118      42.438  54.250  61.188  1.00 62.86           C  
ATOM   8609  CD1 ILE A1118      45.411  53.903  61.499  1.00 76.11           C  
ATOM   8610  N   LYS A1119      41.034  52.333  64.112  1.00 45.09           N  
ATOM   8611  CA  LYS A1119      39.702  52.128  64.635  1.00 47.42           C  
ATOM   8612  C   LYS A1119      39.548  52.890  65.950  1.00 50.35           C  
ATOM   8613  O   LYS A1119      38.667  53.729  66.089  1.00 48.32           O  
ATOM   8614  CB  LYS A1119      39.448  50.624  64.798  1.00 43.67           C  
ATOM   8615  CG  LYS A1119      38.106  50.282  65.420  1.00 47.63           C  
ATOM   8616  CD  LYS A1119      37.603  48.915  65.018  1.00 49.66           C  
ATOM   8617  CE  LYS A1119      38.329  47.780  65.692  1.00 51.75           C  
ATOM   8618  NZ  LYS A1119      38.750  46.775  64.691  1.00 56.42           N  
ATOM   8619  N   ARG A1120      40.436  52.597  66.895  1.00 53.52           N  
ATOM   8620  CA  ARG A1120      40.462  53.240  68.194  1.00 51.64           C  
ATOM   8621  C   ARG A1120      40.458  54.749  68.090  1.00 46.38           C  
ATOM   8622  O   ARG A1120      39.611  55.409  68.665  1.00 45.62           O  
ATOM   8623  CB  ARG A1120      41.705  52.795  68.972  1.00 60.11           C  
ATOM   8624  CG  ARG A1120      41.841  53.402  70.375  1.00 69.10           C  
ATOM   8625  CD  ARG A1120      41.517  52.380  71.458  1.00 77.91           C  
ATOM   8626  NE  ARG A1120      42.402  51.216  71.372  1.00 83.52           N  
ATOM   8627  CZ  ARG A1120      42.148  50.010  71.883  1.00 84.94           C  
ATOM   8628  NH1 ARG A1120      41.024  49.758  72.570  1.00 76.18           N  
ATOM   8629  NH2 ARG A1120      43.044  49.041  71.700  1.00 90.17           N  
ATOM   8630  N   SER A1121      41.407  55.325  67.372  1.00 45.70           N  
ATOM   8631  CA  SER A1121      41.461  56.801  67.277  1.00 44.84           C  
ATOM   8632  C   SER A1121      40.137  57.358  66.772  1.00 44.27           C  
ATOM   8633  O   SER A1121      39.702  58.411  67.244  1.00 44.19           O  
ATOM   8634  CB  SER A1121      42.591  57.273  66.353  1.00 44.71           C  
ATOM   8635  OG  SER A1121      43.426  56.170  65.986  1.00 51.84           O  
ATOM   8636  N   PHE A1122      39.505  56.687  65.797  1.00 39.71           N  
ATOM   8637  CA  PHE A1122      38.275  57.255  65.209  1.00 38.48           C  
ATOM   8638  C   PHE A1122      37.019  57.048  66.041  1.00 35.56           C  
ATOM   8639  O   PHE A1122      36.259  57.986  66.211  1.00 32.87           O  
ATOM   8640  CB  PHE A1122      38.086  56.868  63.734  1.00 38.41           C  
ATOM   8641  CG  PHE A1122      38.934  57.710  62.810  1.00 36.00           C  
ATOM   8642  CD1 PHE A1122      38.629  59.043  62.614  1.00 36.01           C  
ATOM   8643  CD2 PHE A1122      40.048  57.181  62.184  1.00 37.32           C  
ATOM   8644  CE1 PHE A1122      39.417  59.842  61.805  1.00 37.31           C  
ATOM   8645  CE2 PHE A1122      40.835  57.966  61.366  1.00 37.27           C  
ATOM   8646  CZ  PHE A1122      40.522  59.306  61.181  1.00 37.18           C  
ATOM   8647  N   LEU A1123      36.806  55.849  66.574  1.00 34.45           N  
ATOM   8648  CA  LEU A1123      35.608  55.635  67.364  1.00 40.29           C  
ATOM   8649  C   LEU A1123      35.609  56.583  68.578  1.00 40.83           C  
ATOM   8650  O   LEU A1123      34.561  57.116  68.942  1.00 35.26           O  
ATOM   8651  CB  LEU A1123      35.464  54.176  67.798  1.00 39.86           C  
ATOM   8652  CG  LEU A1123      35.161  53.113  66.742  1.00 37.65           C  
ATOM   8653  CD1 LEU A1123      35.621  51.762  67.252  1.00 37.66           C  
ATOM   8654  CD2 LEU A1123      33.691  53.029  66.350  1.00 40.01           C  
ATOM   8655  N   ARG A1124      36.801  56.825  69.136  1.00 44.63           N  
ATOM   8656  CA  ARG A1124      37.009  57.825  70.196  1.00 47.93           C  
ATOM   8657  C   ARG A1124      36.589  59.202  69.787  1.00 44.92           C  
ATOM   8658  O   ARG A1124      35.892  59.871  70.526  1.00 50.77           O  
ATOM   8659  CB  ARG A1124      38.471  57.876  70.626  1.00 49.66           C  
ATOM   8660  CG  ARG A1124      38.854  56.725  71.519  1.00 52.55           C  
ATOM   8661  CD  ARG A1124      40.349  56.702  71.859  1.00 56.05           C  
ATOM   8662  NE  ARG A1124      40.615  55.661  72.862  1.00 67.02           N  
ATOM   8663  CZ  ARG A1124      41.819  55.287  73.302  1.00 66.24           C  
ATOM   8664  NH1 ARG A1124      42.939  55.841  72.824  1.00 60.58           N  
ATOM   8665  NH2 ARG A1124      41.894  54.332  74.226  1.00 61.27           N  
ATOM   8666  N   ARG A1125      37.027  59.637  68.617  1.00 43.77           N  
ATOM   8667  CA  ARG A1125      36.617  60.926  68.118  1.00 47.85           C  
ATOM   8668  C   ARG A1125      35.092  61.002  67.981  1.00 44.65           C  
ATOM   8669  O   ARG A1125      34.441  61.999  68.359  1.00 40.81           O  
ATOM   8670  CB  ARG A1125      37.203  61.191  66.714  1.00 60.04           C  
ATOM   8671  CG  ARG A1125      38.728  61.163  66.540  1.00 70.23           C  
ATOM   8672  CD  ARG A1125      39.233  62.424  65.813  1.00 79.73           C  
ATOM   8673  NE  ARG A1125      39.170  63.605  66.700  1.00 86.18           N  
ATOM   8674  CZ  ARG A1125      40.185  64.108  67.421  1.00 83.38           C  
ATOM   8675  NH1 ARG A1125      41.409  63.590  67.370  1.00 79.93           N  
ATOM   8676  NH2 ARG A1125      39.973  65.162  68.204  1.00 86.02           N  
ATOM   8677  N   TRP A1126      34.541  59.953  67.376  1.00 35.51           N  
ATOM   8678  CA  TRP A1126      33.174  59.981  66.870  1.00 34.48           C  
ATOM   8679  C   TRP A1126      32.179  59.813  68.020  1.00 35.75           C  
ATOM   8680  O   TRP A1126      31.084  60.333  67.985  1.00 33.62           O  
ATOM   8681  CB  TRP A1126      32.982  58.879  65.778  1.00 31.92           C  
ATOM   8682  CG  TRP A1126      33.769  59.122  64.509  1.00 28.32           C  
ATOM   8683  CD1 TRP A1126      34.245  60.328  64.060  1.00 29.73           C  
ATOM   8684  CD2 TRP A1126      34.159  58.159  63.519  1.00 27.58           C  
ATOM   8685  NE1 TRP A1126      34.900  60.171  62.875  1.00 27.78           N  
ATOM   8686  CE2 TRP A1126      34.866  58.856  62.515  1.00 27.35           C  
ATOM   8687  CE3 TRP A1126      33.957  56.787  63.371  1.00 26.87           C  
ATOM   8688  CZ2 TRP A1126      35.374  58.234  61.388  1.00 28.61           C  
ATOM   8689  CZ3 TRP A1126      34.473  56.153  62.277  1.00 27.71           C  
ATOM   8690  CH2 TRP A1126      35.161  56.879  61.274  1.00 30.23           C  
ATOM   8691  N   THR A1127      32.587  59.117  69.060  1.00 41.32           N  
ATOM   8692  CA  THR A1127      31.763  59.002  70.262  1.00 44.47           C  
ATOM   8693  C   THR A1127      32.109  60.043  71.341  1.00 44.63           C  
ATOM   8694  O   THR A1127      31.413  60.122  72.325  1.00 39.42           O  
ATOM   8695  CB  THR A1127      31.925  57.620  70.894  1.00 42.56           C  
ATOM   8696  OG1 THR A1127      33.312  57.386  71.108  1.00 43.07           O  
ATOM   8697  CG2 THR A1127      31.379  56.543  69.977  1.00 45.05           C  
ATOM   8698  N   LEU A1128      33.170  60.830  71.149  1.00 48.04           N  
ATOM   8699  CA  LEU A1128      33.617  61.799  72.168  1.00 52.31           C  
ATOM   8700  C   LEU A1128      33.870  61.113  73.508  1.00 49.88           C  
ATOM   8701  O   LEU A1128      33.261  61.439  74.498  1.00 42.98           O  
ATOM   8702  CB  LEU A1128      32.591  62.936  72.355  1.00 53.61           C  
ATOM   8703  CG  LEU A1128      32.280  63.759  71.098  1.00 53.70           C  
ATOM   8704  CD1 LEU A1128      31.123  64.710  71.359  1.00 51.79           C  
ATOM   8705  CD2 LEU A1128      33.516  64.515  70.599  1.00 53.98           C  
ATOM   8706  N   ASP A1129      34.762  60.135  73.486  1.00 53.49           N  
ATOM   8707  CA  ASP A1129      35.098  59.335  74.632  1.00 52.82           C  
ATOM   8708  C   ASP A1129      36.595  59.053  74.482  1.00 54.67           C  
ATOM   8709  O   ASP A1129      36.997  58.106  73.820  1.00 48.73           O  
ATOM   8710  CB  ASP A1129      34.260  58.050  74.632  1.00 53.68           C  
ATOM   8711  CG  ASP A1129      34.531  57.146  75.852  1.00 60.66           C  
ATOM   8712  OD1 ASP A1129      35.537  57.365  76.583  1.00 60.72           O  
ATOM   8713  OD2 ASP A1129      33.730  56.198  76.063  1.00 60.36           O  
ATOM   8714  N   PRO A1130      37.440  59.904  75.081  1.00 62.36           N  
ATOM   8715  CA  PRO A1130      38.907  59.757  74.957  1.00 64.35           C  
ATOM   8716  C   PRO A1130      39.471  58.401  75.417  1.00 61.66           C  
ATOM   8717  O   PRO A1130      40.462  57.902  74.867  1.00 57.65           O  
ATOM   8718  CB  PRO A1130      39.437  60.864  75.868  1.00 68.88           C  
ATOM   8719  CG  PRO A1130      38.363  61.907  75.871  1.00 69.24           C  
ATOM   8720  CD  PRO A1130      37.058  61.162  75.749  1.00 67.05           C  
ATOM   8721  N   SER A1131      38.807  57.822  76.408  1.00 61.75           N  
ATOM   8722  CA  SER A1131      39.327  56.717  77.195  1.00 61.05           C  
ATOM   8723  C   SER A1131      38.655  55.394  76.834  1.00 61.27           C  
ATOM   8724  O   SER A1131      38.810  54.390  77.550  1.00 63.89           O  
ATOM   8725  CB  SER A1131      39.036  57.036  78.660  1.00 60.11           C  
ATOM   8726  OG  SER A1131      37.677  57.414  78.782  1.00 53.82           O  
ATOM   8727  N   LEU A1132      37.892  55.387  75.743  1.00 59.14           N  
ATOM   8728  CA  LEU A1132      37.231  54.161  75.294  1.00 60.88           C  
ATOM   8729  C   LEU A1132      38.257  53.038  74.994  1.00 55.96           C  
ATOM   8730  O   LEU A1132      39.255  53.235  74.297  1.00 49.82           O  
ATOM   8731  CB  LEU A1132      36.310  54.433  74.080  1.00 62.08           C  
ATOM   8732  CG  LEU A1132      35.533  53.225  73.493  1.00 65.07           C  
ATOM   8733  CD1 LEU A1132      34.192  52.976  74.191  1.00 64.94           C  
ATOM   8734  CD2 LEU A1132      35.339  53.378  71.984  1.00 61.55           C  
ATOM   8735  N   GLU A1133      38.014  51.871  75.569  1.00 59.97           N  
ATOM   8736  CA  GLU A1133      38.830  50.705  75.292  1.00 66.10           C  
ATOM   8737  C   GLU A1133      38.034  49.654  74.500  1.00 64.13           C  
ATOM   8738  O   GLU A1133      38.603  49.001  73.633  1.00 57.90           O  
ATOM   8739  CB  GLU A1133      39.445  50.120  76.584  1.00 77.57           C  
ATOM   8740  CG  GLU A1133      38.710  50.390  77.913  1.00 87.67           C  
ATOM   8741  CD  GLU A1133      37.599  49.376  78.268  1.00 94.65           C  
ATOM   8742  OE1 GLU A1133      36.912  48.852  77.358  1.00 97.34           O  
ATOM   8743  OE2 GLU A1133      37.395  49.108  79.483  1.00 86.53           O  
ATOM   8744  N   ASP A1134      36.733  49.502  74.782  1.00 65.80           N  
ATOM   8745  CA  ASP A1134      35.909  48.460  74.142  1.00 66.94           C  
ATOM   8746  C   ASP A1134      35.491  48.876  72.752  1.00 60.39           C  
ATOM   8747  O   ASP A1134      34.755  49.850  72.586  1.00 61.37           O  
ATOM   8748  CB  ASP A1134      34.656  48.137  74.968  1.00 73.07           C  
ATOM   8749  CG  ASP A1134      34.097  46.724  74.679  1.00 76.81           C  
ATOM   8750  OD1 ASP A1134      34.443  46.103  73.635  1.00 73.42           O  
ATOM   8751  OD2 ASP A1134      33.307  46.238  75.521  1.00 77.25           O  
ATOM   8752  N   LEU A1135      35.955  48.112  71.770  1.00 59.72           N  
ATOM   8753  CA  LEU A1135      35.777  48.412  70.345  1.00 57.62           C  
ATOM   8754  C   LEU A1135      34.830  47.423  69.611  1.00 60.03           C  
ATOM   8755  O   LEU A1135      34.715  47.436  68.370  1.00 52.13           O  
ATOM   8756  CB  LEU A1135      37.153  48.411  69.670  1.00 54.87           C  
ATOM   8757  CG  LEU A1135      38.210  49.362  70.240  1.00 52.12           C  
ATOM   8758  CD1 LEU A1135      39.407  49.385  69.306  1.00 50.83           C  
ATOM   8759  CD2 LEU A1135      37.682  50.774  70.441  1.00 51.12           C  
ATOM   8760  N   ASP A1136      34.146  46.604  70.373  1.00 61.69           N  
ATOM   8761  CA  ASP A1136      33.168  45.712  69.823  1.00 68.36           C  
ATOM   8762  C   ASP A1136      31.981  46.494  69.392  1.00 60.78           C  
ATOM   8763  O   ASP A1136      31.375  47.152  70.176  1.00 53.38           O  
ATOM   8764  CB  ASP A1136      32.688  44.738  70.884  1.00 75.30           C  
ATOM   8765  CG  ASP A1136      32.029  43.521  70.307  1.00 81.29           C  
ATOM   8766  OD1 ASP A1136      32.511  43.003  69.281  1.00 83.77           O  
ATOM   8767  OD2 ASP A1136      31.042  43.053  70.905  1.00 77.02           O  
ATOM   8768  N   ILE A1137      31.653  46.360  68.129  1.00 60.55           N  
ATOM   8769  CA  ILE A1137      30.427  46.858  67.567  1.00 57.84           C  
ATOM   8770  C   ILE A1137      29.265  46.761  68.525  1.00 54.26           C  
ATOM   8771  O   ILE A1137      28.469  47.645  68.578  1.00 54.14           O  
ATOM   8772  CB  ILE A1137      30.108  46.124  66.261  1.00 57.03           C  
ATOM   8773  CG1 ILE A1137      29.126  46.911  65.428  1.00 58.22           C  
ATOM   8774  CG2 ILE A1137      29.603  44.740  66.537  1.00 62.75           C  
ATOM   8775  CD1 ILE A1137      29.776  47.594  64.258  1.00 55.32           C  
ATOM   8776  N   ARG A1138      29.183  45.696  69.291  1.00 48.50           N  
ATOM   8777  CA  ARG A1138      28.050  45.490  70.157  1.00 50.38           C  
ATOM   8778  C   ARG A1138      27.915  46.487  71.279  1.00 50.07           C  
ATOM   8779  O   ARG A1138      26.845  46.640  71.825  1.00 49.18           O  
ATOM   8780  CB  ARG A1138      28.033  44.080  70.727  1.00 51.97           C  
ATOM   8781  CG  ARG A1138      27.369  43.064  69.847  1.00 52.83           C  
ATOM   8782  CD  ARG A1138      27.066  41.767  70.559  1.00 53.84           C  
ATOM   8783  NE  ARG A1138      26.761  40.674  69.643  1.00 48.24           N  
ATOM   8784  CZ  ARG A1138      27.609  40.148  68.781  1.00 45.27           C  
ATOM   8785  NH1 ARG A1138      28.826  40.594  68.687  1.00 40.28           N  
ATOM   8786  NH2 ARG A1138      27.223  39.176  68.000  1.00 51.45           N  
ATOM   8787  N   THR A1139      28.992  47.145  71.645  1.00 48.54           N  
ATOM   8788  CA  THR A1139      28.905  48.155  72.679  1.00 46.50           C  
ATOM   8789  C   THR A1139      28.807  49.513  72.071  1.00 38.79           C  
ATOM   8790  O   THR A1139      28.442  50.433  72.727  1.00 40.09           O  
ATOM   8791  CB  THR A1139      30.041  48.071  73.709  1.00 48.31           C  
ATOM   8792  OG1 THR A1139      31.301  48.194  73.064  1.00 49.38           O  
ATOM   8793  CG2 THR A1139      29.975  46.786  74.400  1.00 48.34           C  
ATOM   8794  N   ILE A1140      29.128  49.616  70.804  1.00 37.00           N  
ATOM   8795  CA  ILE A1140      28.966  50.865  70.116  1.00 40.69           C  
ATOM   8796  C   ILE A1140      27.506  51.127  69.733  1.00 38.46           C  
ATOM   8797  O   ILE A1140      27.061  52.233  69.795  1.00 40.75           O  
ATOM   8798  CB  ILE A1140      29.890  50.969  68.898  1.00 44.07           C  
ATOM   8799  CG1 ILE A1140      31.357  50.801  69.304  1.00 46.90           C  
ATOM   8800  CG2 ILE A1140      29.667  52.274  68.182  1.00 41.23           C  
ATOM   8801  CD1 ILE A1140      31.789  51.658  70.461  1.00 46.38           C  
ATOM   8802  N   ILE A1141      26.776  50.093  69.350  1.00 33.57           N  
ATOM   8803  CA  ILE A1141      25.437  50.200  68.769  1.00 33.68           C  
ATOM   8804  C   ILE A1141      24.386  50.760  69.701  1.00 33.66           C  
ATOM   8805  O   ILE A1141      24.340  50.413  70.832  1.00 35.98           O  
ATOM   8806  CB  ILE A1141      24.976  48.838  68.187  1.00 31.21           C  
ATOM   8807  CG1 ILE A1141      25.672  48.578  66.891  1.00 30.04           C  
ATOM   8808  CG2 ILE A1141      23.473  48.723  67.953  1.00 31.07           C  
ATOM   8809  CD1 ILE A1141      25.814  47.123  66.618  1.00 33.67           C  
ATOM   8810  N   ASP A1142      23.504  51.565  69.148  1.00 34.84           N  
ATOM   8811  CA  ASP A1142      22.364  52.080  69.873  1.00 31.32           C  
ATOM   8812  C   ASP A1142      21.199  51.153  69.711  1.00 32.69           C  
ATOM   8813  O   ASP A1142      20.406  51.329  68.778  1.00 31.37           O  
ATOM   8814  CB  ASP A1142      21.986  53.437  69.313  1.00 31.98           C  
ATOM   8815  CG  ASP A1142      20.963  54.131  70.158  1.00 28.53           C  
ATOM   8816  OD1 ASP A1142      20.252  53.443  70.862  1.00 28.64           O  
ATOM   8817  OD2 ASP A1142      20.891  55.357  70.123  1.00 27.22           O  
ATOM   8818  N   TRP A1143      21.059  50.183  70.616  1.00 33.05           N  
ATOM   8819  CA  TRP A1143      20.008  49.160  70.479  1.00 32.52           C  
ATOM   8820  C   TRP A1143      18.605  49.744  70.612  1.00 33.18           C  
ATOM   8821  O   TRP A1143      17.693  49.271  69.988  1.00 36.17           O  
ATOM   8822  CB  TRP A1143      20.227  47.975  71.448  1.00 34.12           C  
ATOM   8823  CG  TRP A1143      21.472  47.222  71.116  1.00 34.92           C  
ATOM   8824  CD1 TRP A1143      22.682  47.318  71.755  1.00 36.78           C  
ATOM   8825  CD2 TRP A1143      21.685  46.345  70.010  1.00 34.82           C  
ATOM   8826  NE1 TRP A1143      23.600  46.528  71.137  1.00 33.92           N  
ATOM   8827  CE2 TRP A1143      23.020  45.932  70.057  1.00 33.77           C  
ATOM   8828  CE3 TRP A1143      20.869  45.851  68.994  1.00 34.08           C  
ATOM   8829  CZ2 TRP A1143      23.557  45.046  69.128  1.00 39.12           C  
ATOM   8830  CZ3 TRP A1143      21.407  44.973  68.081  1.00 34.64           C  
ATOM   8831  CH2 TRP A1143      22.735  44.591  68.142  1.00 35.17           C  
ATOM   8832  N   GLY A1144      18.432  50.799  71.383  1.00 35.52           N  
ATOM   8833  CA  GLY A1144      17.109  51.429  71.533  1.00 34.70           C  
ATOM   8834  C   GLY A1144      16.657  52.059  70.207  1.00 33.75           C  
ATOM   8835  O   GLY A1144      15.502  52.036  69.860  1.00 34.04           O  
ATOM   8836  N   TYR A1145      17.586  52.638  69.472  1.00 30.99           N  
ATOM   8837  CA  TYR A1145      17.290  53.167  68.152  1.00 28.31           C  
ATOM   8838  C   TYR A1145      16.765  52.062  67.219  1.00 26.84           C  
ATOM   8839  O   TYR A1145      15.728  52.262  66.613  1.00 25.83           O  
ATOM   8840  CB  TYR A1145      18.511  53.851  67.579  1.00 28.45           C  
ATOM   8841  CG  TYR A1145      18.316  54.340  66.167  1.00 29.63           C  
ATOM   8842  CD1 TYR A1145      17.794  55.601  65.924  1.00 27.19           C  
ATOM   8843  CD2 TYR A1145      18.667  53.538  65.092  1.00 29.55           C  
ATOM   8844  CE1 TYR A1145      17.627  56.041  64.646  1.00 30.16           C  
ATOM   8845  CE2 TYR A1145      18.513  53.962  63.791  1.00 30.69           C  
ATOM   8846  CZ  TYR A1145      17.979  55.204  63.565  1.00 31.56           C  
ATOM   8847  OH  TYR A1145      17.814  55.617  62.273  1.00 35.33           O  
ATOM   8848  N   TYR A1146      17.409  50.877  67.185  1.00 26.10           N  
ATOM   8849  CA  TYR A1146      17.035  49.790  66.271  1.00 24.32           C  
ATOM   8850  C   TYR A1146      15.746  49.104  66.654  1.00 26.90           C  
ATOM   8851  O   TYR A1146      14.970  48.671  65.771  1.00 23.99           O  
ATOM   8852  CB  TYR A1146      18.194  48.807  66.016  1.00 25.72           C  
ATOM   8853  CG  TYR A1146      19.280  49.468  65.229  1.00 25.82           C  
ATOM   8854  CD1 TYR A1146      19.154  49.719  63.831  1.00 27.57           C  
ATOM   8855  CD2 TYR A1146      20.387  49.938  65.854  1.00 26.89           C  
ATOM   8856  CE1 TYR A1146      20.170  50.399  63.129  1.00 26.79           C  
ATOM   8857  CE2 TYR A1146      21.398  50.600  65.166  1.00 28.53           C  
ATOM   8858  CZ  TYR A1146      21.285  50.861  63.826  1.00 27.98           C  
ATOM   8859  OH  TYR A1146      22.343  51.539  63.254  1.00 24.06           O  
ATOM   8860  N   ARG A1147      15.475  49.057  67.960  1.00 26.97           N  
ATOM   8861  CA  ARG A1147      14.234  48.484  68.496  1.00 29.43           C  
ATOM   8862  C   ARG A1147      13.034  49.367  68.187  1.00 27.58           C  
ATOM   8863  O   ARG A1147      11.970  48.871  67.926  1.00 26.36           O  
ATOM   8864  CB  ARG A1147      14.380  48.240  70.010  1.00 33.54           C  
ATOM   8865  CG  ARG A1147      13.125  47.731  70.711  1.00 37.29           C  
ATOM   8866  CD  ARG A1147      12.810  46.275  70.374  1.00 42.30           C  
ATOM   8867  NE  ARG A1147      11.745  45.835  71.262  1.00 46.64           N  
ATOM   8868  CZ  ARG A1147      10.493  46.288  71.198  1.00 45.61           C  
ATOM   8869  NH1 ARG A1147      10.114  47.145  70.246  1.00 45.02           N  
ATOM   8870  NH2 ARG A1147       9.610  45.858  72.071  1.00 44.09           N  
ATOM   8871  N   GLU A1148      13.214  50.673  68.231  1.00 29.54           N  
ATOM   8872  CA  GLU A1148      12.212  51.618  67.806  1.00 33.08           C  
ATOM   8873  C   GLU A1148      11.947  51.585  66.267  1.00 33.08           C  
ATOM   8874  O   GLU A1148      10.801  51.674  65.847  1.00 27.28           O  
ATOM   8875  CB  GLU A1148      12.630  53.031  68.245  1.00 40.78           C  
ATOM   8876  CG  GLU A1148      11.818  54.185  67.623  1.00 53.45           C  
ATOM   8877  CD  GLU A1148      12.368  55.600  67.971  1.00 70.15           C  
ATOM   8878  OE1 GLU A1148      13.607  55.745  68.224  1.00 74.58           O  
ATOM   8879  OE2 GLU A1148      11.564  56.582  67.981  1.00 67.53           O  
ATOM   8880  N   ARG A1149      12.991  51.486  65.436  1.00 32.68           N  
ATOM   8881  CA  ARG A1149      12.787  51.304  63.971  1.00 28.59           C  
ATOM   8882  C   ARG A1149      12.017  50.000  63.671  1.00 27.85           C  
ATOM   8883  O   ARG A1149      11.005  50.055  62.977  1.00 24.66           O  
ATOM   8884  CB  ARG A1149      14.099  51.361  63.189  1.00 29.10           C  
ATOM   8885  CG  ARG A1149      14.938  52.630  63.412  1.00 28.66           C  
ATOM   8886  CD  ARG A1149      14.533  53.804  62.544  1.00 30.83           C  
ATOM   8887  NE  ARG A1149      14.353  53.404  61.139  1.00 29.73           N  
ATOM   8888  CZ  ARG A1149      15.286  53.385  60.181  1.00 27.38           C  
ATOM   8889  NH1 ARG A1149      16.541  53.795  60.392  1.00 28.09           N  
ATOM   8890  NH2 ARG A1149      14.923  52.991  58.950  1.00 26.45           N  
ATOM   8891  N   LEU A1150      12.413  48.874  64.280  1.00 25.56           N  
ATOM   8892  CA  LEU A1150      11.701  47.611  64.107  1.00 26.75           C  
ATOM   8893  C   LEU A1150      10.282  47.603  64.693  1.00 27.79           C  
ATOM   8894  O   LEU A1150       9.351  46.973  64.139  1.00 23.52           O  
ATOM   8895  CB  LEU A1150      12.456  46.493  64.778  1.00 29.16           C  
ATOM   8896  CG  LEU A1150      11.873  45.097  64.634  1.00 30.33           C  
ATOM   8897  CD1 LEU A1150      11.952  44.669  63.186  1.00 31.47           C  
ATOM   8898  CD2 LEU A1150      12.635  44.094  65.478  1.00 32.21           C  
ATOM   8899  N   GLY A1151      10.132  48.261  65.840  1.00 26.06           N  
ATOM   8900  CA  GLY A1151       8.821  48.413  66.463  1.00 26.39           C  
ATOM   8901  C   GLY A1151       7.860  49.094  65.516  1.00 26.11           C  
ATOM   8902  O   GLY A1151       6.750  48.634  65.327  1.00 29.38           O  
ATOM   8903  N   SER A1152       8.301  50.191  64.922  1.00 25.74           N  
ATOM   8904  CA  SER A1152       7.530  50.890  63.936  1.00 26.05           C  
ATOM   8905  C   SER A1152       7.030  49.973  62.843  1.00 25.61           C  
ATOM   8906  O   SER A1152       5.858  50.020  62.515  1.00 24.41           O  
ATOM   8907  CB  SER A1152       8.368  51.973  63.266  1.00 26.89           C  
ATOM   8908  OG  SER A1152       8.265  53.150  63.983  1.00 27.86           O  
ATOM   8909  N   ALA A1153       7.915  49.162  62.266  1.00 22.51           N  
ATOM   8910  CA  ALA A1153       7.510  48.281  61.191  1.00 23.22           C  
ATOM   8911  C   ALA A1153       6.442  47.252  61.628  1.00 23.65           C  
ATOM   8912  O   ALA A1153       5.574  46.797  60.821  1.00 21.58           O  
ATOM   8913  CB  ALA A1153       8.730  47.549  60.648  1.00 23.60           C  
ATOM   8914  N   ILE A1154       6.585  46.804  62.877  1.00 20.65           N  
ATOM   8915  CA  ILE A1154       5.725  45.796  63.401  1.00 19.65           C  
ATOM   8916  C   ILE A1154       4.361  46.427  63.597  1.00 20.60           C  
ATOM   8917  O   ILE A1154       3.386  45.791  63.300  1.00 22.04           O  
ATOM   8918  CB  ILE A1154       6.312  45.201  64.708  1.00 20.17           C  
ATOM   8919  CG1 ILE A1154       7.509  44.319  64.345  1.00 22.37           C  
ATOM   8920  CG2 ILE A1154       5.291  44.350  65.431  1.00 20.45           C  
ATOM   8921  CD1 ILE A1154       8.233  43.664  65.511  1.00 23.57           C  
ATOM   8922  N   GLN A1155       4.301  47.685  64.054  1.00 22.23           N  
ATOM   8923  CA  GLN A1155       3.037  48.434  64.190  1.00 21.74           C  
ATOM   8924  C   GLN A1155       2.246  48.631  62.898  1.00 24.36           C  
ATOM   8925  O   GLN A1155       1.035  48.353  62.817  1.00 22.79           O  
ATOM   8926  CB  GLN A1155       3.317  49.794  64.807  1.00 22.70           C  
ATOM   8927  CG  GLN A1155       3.316  49.740  66.317  1.00 25.61           C  
ATOM   8928  CD  GLN A1155       3.673  51.069  66.964  1.00 29.30           C  
ATOM   8929  OE1 GLN A1155       4.397  51.889  66.410  1.00 30.80           O  
ATOM   8930  NE2 GLN A1155       3.189  51.264  68.179  1.00 32.49           N  
ATOM   8931  N   LYS A1156       2.940  49.140  61.875  1.00 24.35           N  
ATOM   8932  CA  LYS A1156       2.321  49.429  60.586  1.00 22.75           C  
ATOM   8933  C   LYS A1156       1.842  48.209  59.838  1.00 21.00           C  
ATOM   8934  O   LYS A1156       0.801  48.247  59.239  1.00 22.02           O  
ATOM   8935  CB  LYS A1156       3.312  50.201  59.740  1.00 22.13           C  
ATOM   8936  CG  LYS A1156       3.572  51.546  60.346  1.00 23.15           C  
ATOM   8937  CD  LYS A1156       4.456  52.378  59.468  1.00 24.46           C  
ATOM   8938  CE  LYS A1156       5.858  51.765  59.373  1.00 25.81           C  
ATOM   8939  NZ  LYS A1156       6.714  52.714  58.629  1.00 25.78           N  
ATOM   8940  N   ILE A1157       2.577  47.115  59.915  1.00 21.05           N  
ATOM   8941  CA  ILE A1157       2.283  45.924  59.092  1.00 21.21           C  
ATOM   8942  C   ILE A1157       1.477  44.901  59.856  1.00 21.10           C  
ATOM   8943  O   ILE A1157       0.670  44.181  59.245  1.00 23.31           O  
ATOM   8944  CB  ILE A1157       3.590  45.239  58.523  1.00 20.69           C  
ATOM   8945  CG1 ILE A1157       4.349  46.200  57.614  1.00 22.41           C  
ATOM   8946  CG2 ILE A1157       3.249  43.994  57.742  1.00 22.00           C  
ATOM   8947  CD1 ILE A1157       5.744  45.793  57.146  1.00 21.24           C  
ATOM   8948  N   ILE A1158       1.697  44.787  61.163  1.00 21.95           N  
ATOM   8949  CA  ILE A1158       1.040  43.743  61.960  1.00 23.37           C  
ATOM   8950  C   ILE A1158       0.082  44.271  63.051  1.00 24.35           C  
ATOM   8951  O   ILE A1158      -1.090  43.950  63.024  1.00 23.14           O  
ATOM   8952  CB  ILE A1158       2.021  42.754  62.605  1.00 25.56           C  
ATOM   8953  CG1 ILE A1158       2.798  42.020  61.537  1.00 26.92           C  
ATOM   8954  CG2 ILE A1158       1.300  41.727  63.470  1.00 27.33           C  
ATOM   8955  CD1 ILE A1158       4.165  42.632  61.363  1.00 29.41           C  
ATOM   8956  N   THR A1159       0.513  45.099  63.984  1.00 25.24           N  
ATOM   8957  CA  THR A1159      -0.361  45.282  65.159  1.00 27.03           C  
ATOM   8958  C   THR A1159      -1.494  46.243  64.939  1.00 26.65           C  
ATOM   8959  O   THR A1159      -2.611  45.962  65.363  1.00 24.65           O  
ATOM   8960  CB  THR A1159       0.422  45.653  66.384  1.00 26.73           C  
ATOM   8961  OG1 THR A1159       1.049  46.904  66.173  1.00 25.84           O  
ATOM   8962  CG2 THR A1159       1.497  44.576  66.611  1.00 29.16           C  
ATOM   8963  N   ILE A1160      -1.234  47.371  64.295  1.00 24.61           N  
ATOM   8964  CA  ILE A1160      -2.284  48.335  64.154  1.00 25.40           C  
ATOM   8965  C   ILE A1160      -3.347  47.825  63.165  1.00 28.76           C  
ATOM   8966  O   ILE A1160      -4.516  47.944  63.417  1.00 25.93           O  
ATOM   8967  CB  ILE A1160      -1.744  49.690  63.794  1.00 27.88           C  
ATOM   8968  CG1 ILE A1160      -0.901  50.181  64.957  1.00 29.05           C  
ATOM   8969  CG2 ILE A1160      -2.869  50.698  63.546  1.00 28.64           C  
ATOM   8970  CD1 ILE A1160      -0.439  51.615  64.811  1.00 30.03           C  
ATOM   8971  N   PRO A1161      -2.926  47.206  62.055  1.00 27.64           N  
ATOM   8972  CA  PRO A1161      -3.963  46.623  61.219  1.00 26.51           C  
ATOM   8973  C   PRO A1161      -4.765  45.534  61.898  1.00 29.23           C  
ATOM   8974  O   PRO A1161      -5.934  45.427  61.608  1.00 24.62           O  
ATOM   8975  CB  PRO A1161      -3.189  46.042  60.041  1.00 24.64           C  
ATOM   8976  CG  PRO A1161      -1.962  46.907  59.931  1.00 26.14           C  
ATOM   8977  CD  PRO A1161      -1.660  47.423  61.321  1.00 25.56           C  
ATOM   8978  N   ALA A1162      -4.109  44.681  62.709  1.00 28.78           N  
ATOM   8979  CA  ALA A1162      -4.791  43.715  63.548  1.00 28.63           C  
ATOM   8980  C   ALA A1162      -5.881  44.362  64.373  1.00 27.39           C  
ATOM   8981  O   ALA A1162      -7.005  43.855  64.430  1.00 27.60           O  
ATOM   8982  CB  ALA A1162      -3.828  42.998  64.462  1.00 31.14           C  
ATOM   8983  N   ALA A1163      -5.544  45.481  64.989  1.00 27.35           N  
ATOM   8984  CA  ALA A1163      -6.485  46.245  65.804  1.00 32.20           C  
ATOM   8985  C   ALA A1163      -7.677  46.737  64.981  1.00 35.22           C  
ATOM   8986  O   ALA A1163      -8.815  46.603  65.413  1.00 36.11           O  
ATOM   8987  CB  ALA A1163      -5.794  47.423  66.450  1.00 30.85           C  
ATOM   8988  N   LEU A1164      -7.422  47.237  63.777  1.00 35.84           N  
ATOM   8989  CA  LEU A1164      -8.500  47.723  62.949  1.00 37.16           C  
ATOM   8990  C   LEU A1164      -9.357  46.581  62.421  1.00 32.34           C  
ATOM   8991  O   LEU A1164     -10.480  46.795  62.021  1.00 33.60           O  
ATOM   8992  CB  LEU A1164      -7.986  48.643  61.824  1.00 44.08           C  
ATOM   8993  CG  LEU A1164      -7.126  49.855  62.295  1.00 49.66           C  
ATOM   8994  CD1 LEU A1164      -6.430  50.543  61.121  1.00 50.74           C  
ATOM   8995  CD2 LEU A1164      -7.870  50.897  63.135  1.00 52.40           C  
ATOM   8996  N   GLN A1165      -8.861  45.364  62.407  1.00 29.56           N  
ATOM   8997  CA  GLN A1165      -9.733  44.250  62.093  1.00 28.63           C  
ATOM   8998  C   GLN A1165     -10.253  43.606  63.370  1.00 29.54           C  
ATOM   8999  O   GLN A1165     -10.764  42.511  63.332  1.00 26.70           O  
ATOM   9000  CB  GLN A1165      -9.023  43.243  61.196  1.00 28.43           C  
ATOM   9001  CG  GLN A1165      -8.656  43.881  59.859  1.00 32.06           C  
ATOM   9002  CD  GLN A1165      -8.082  42.887  58.898  1.00 31.18           C  
ATOM   9003  OE1 GLN A1165      -6.914  42.496  59.021  1.00 31.88           O  
ATOM   9004  NE2 GLN A1165      -8.891  42.446  57.958  1.00 28.94           N  
ATOM   9005  N   GLY A1166     -10.119  44.306  64.499  1.00 35.56           N  
ATOM   9006  CA  GLY A1166     -10.722  43.879  65.746  1.00 38.55           C  
ATOM   9007  C   GLY A1166     -10.023  42.671  66.343  1.00 39.28           C  
ATOM   9008  O   GLY A1166     -10.667  41.840  66.981  1.00 40.19           O  
ATOM   9009  N   VAL A1167      -8.737  42.553  66.108  1.00 37.03           N  
ATOM   9010  CA  VAL A1167      -7.941  41.490  66.668  1.00 33.90           C  
ATOM   9011  C   VAL A1167      -7.063  42.130  67.719  1.00 39.66           C  
ATOM   9012  O   VAL A1167      -6.529  43.184  67.501  1.00 35.65           O  
ATOM   9013  CB  VAL A1167      -7.103  40.835  65.586  1.00 34.18           C  
ATOM   9014  CG1 VAL A1167      -6.023  39.981  66.155  1.00 32.10           C  
ATOM   9015  CG2 VAL A1167      -7.979  40.009  64.691  1.00 37.44           C  
ATOM   9016  N   SER A1168      -6.969  41.520  68.881  1.00 37.69           N  
ATOM   9017  CA  SER A1168      -6.263  42.152  69.972  1.00 38.39           C  
ATOM   9018  C   SER A1168      -4.783  41.901  69.873  1.00 32.48           C  
ATOM   9019  O   SER A1168      -4.378  40.843  69.495  1.00 33.95           O  
ATOM   9020  CB  SER A1168      -6.837  41.698  71.304  1.00 43.50           C  
ATOM   9021  OG  SER A1168      -6.158  40.601  71.810  1.00 41.01           O  
ATOM   9022  N   ASN A1169      -4.013  42.922  70.177  1.00 29.81           N  
ATOM   9023  CA  ASN A1169      -2.565  42.972  69.973  1.00 30.90           C  
ATOM   9024  C   ASN A1169      -1.843  41.655  69.961  1.00 30.19           C  
ATOM   9025  O   ASN A1169      -1.540  41.098  70.972  1.00 31.76           O  
ATOM   9026  CB  ASN A1169      -1.887  43.944  70.937  1.00 29.72           C  
ATOM   9027  CG  ASN A1169      -0.497  44.335  70.502  1.00 32.68           C  
ATOM   9028  OD1 ASN A1169       0.061  43.757  69.613  1.00 31.58           O  
ATOM   9029  ND2 ASN A1169       0.039  45.334  71.124  1.00 30.62           N  
ATOM   9030  N   PRO A1170      -1.569  41.182  68.675  1.00 28.71           N  
ATOM   9031  CA  PRO A1170      -0.882  39.894  68.656  1.00 26.97           C  
ATOM   9032  C   PRO A1170       0.599  39.901  69.021  1.00 26.11           C  
ATOM   9033  O   PRO A1170       1.159  38.879  69.189  1.00 21.63           O  
ATOM   9034  CB  PRO A1170      -1.119  39.394  67.247  1.00 29.47           C  
ATOM   9035  CG  PRO A1170      -1.086  40.581  66.435  1.00 28.92           C  
ATOM   9036  CD  PRO A1170      -1.833  41.578  67.203  1.00 28.48           C  
ATOM   9037  N   VAL A1171       1.174  41.070  69.158  1.00 27.09           N  
ATOM   9038  CA  VAL A1171       2.548  41.209  69.514  1.00 27.59           C  
ATOM   9039  C   VAL A1171       2.633  42.110  70.728  1.00 32.30           C  
ATOM   9040  O   VAL A1171       2.985  43.251  70.626  1.00 29.30           O  
ATOM   9041  CB  VAL A1171       3.402  41.746  68.344  1.00 27.38           C  
ATOM   9042  CG1 VAL A1171       4.862  41.716  68.688  1.00 26.89           C  
ATOM   9043  CG2 VAL A1171       3.177  40.963  67.088  1.00 27.36           C  
ATOM   9044  N   PRO A1172       2.334  41.588  71.909  1.00 39.75           N  
ATOM   9045  CA  PRO A1172       2.335  42.504  73.062  1.00 38.34           C  
ATOM   9046  C   PRO A1172       3.640  43.240  73.378  1.00 35.96           C  
ATOM   9047  O   PRO A1172       3.561  44.305  73.905  1.00 33.37           O  
ATOM   9048  CB  PRO A1172       1.949  41.626  74.224  1.00 44.92           C  
ATOM   9049  CG  PRO A1172       1.231  40.494  73.657  1.00 44.85           C  
ATOM   9050  CD  PRO A1172       1.989  40.187  72.460  1.00 43.78           C  
ATOM   9051  N   ARG A1173       4.796  42.690  73.073  1.00 36.77           N  
ATOM   9052  CA  ARG A1173       6.047  43.398  73.344  1.00 36.61           C  
ATOM   9053  C   ARG A1173       6.120  44.708  72.524  1.00 34.47           C  
ATOM   9054  O   ARG A1173       6.979  45.542  72.760  1.00 33.42           O  
ATOM   9055  CB  ARG A1173       7.260  42.487  73.061  1.00 40.39           C  
ATOM   9056  CG  ARG A1173       7.327  41.211  73.916  1.00 38.71           C  
ATOM   9057  CD  ARG A1173       8.053  40.098  73.182  1.00 35.57           C  
ATOM   9058  NE  ARG A1173       9.467  40.405  73.030  1.00 34.33           N  
ATOM   9059  CZ  ARG A1173      10.319  39.602  72.422  1.00 33.40           C  
ATOM   9060  NH1 ARG A1173       9.880  38.470  71.882  1.00 35.62           N  
ATOM   9061  NH2 ARG A1173      11.604  39.900  72.375  1.00 33.15           N  
ATOM   9062  N   VAL A1174       5.224  44.908  71.551  1.00 37.97           N  
ATOM   9063  CA  VAL A1174       5.107  46.231  70.916  1.00 34.27           C  
ATOM   9064  C   VAL A1174       3.780  46.904  71.224  1.00 36.26           C  
ATOM   9065  O   VAL A1174       2.731  46.517  70.717  1.00 31.14           O  
ATOM   9066  CB  VAL A1174       5.313  46.158  69.405  1.00 36.16           C  
ATOM   9067  CG1 VAL A1174       5.205  47.571  68.790  1.00 32.63           C  
ATOM   9068  CG2 VAL A1174       6.676  45.508  69.124  1.00 33.30           C  
ATOM   9069  N   GLU A1175       3.855  47.949  72.040  1.00 39.75           N  
ATOM   9070  CA  GLU A1175       2.665  48.576  72.584  1.00 42.55           C  
ATOM   9071  C   GLU A1175       2.038  49.518  71.562  1.00 35.39           C  
ATOM   9072  O   GLU A1175       2.714  50.186  70.823  1.00 30.14           O  
ATOM   9073  CB  GLU A1175       2.994  49.320  73.878  1.00 48.82           C  
ATOM   9074  CG  GLU A1175       3.547  48.384  74.936  1.00 58.51           C  
ATOM   9075  CD  GLU A1175       3.686  49.052  76.280  1.00 66.15           C  
ATOM   9076  OE1 GLU A1175       2.704  49.723  76.683  1.00 61.52           O  
ATOM   9077  OE2 GLU A1175       4.769  48.893  76.912  1.00 68.11           O  
ATOM   9078  N   HIS A1176       0.729  49.546  71.567  1.00 32.52           N  
ATOM   9079  CA  HIS A1176      -0.026  50.407  70.734  1.00 33.79           C  
ATOM   9080  C   HIS A1176       0.268  51.823  71.087  1.00 37.71           C  
ATOM   9081  O   HIS A1176       0.496  52.106  72.240  1.00 38.91           O  
ATOM   9082  CB  HIS A1176      -1.488  50.188  71.035  1.00 34.98           C  
ATOM   9083  CG  HIS A1176      -2.051  48.939  70.443  1.00 33.25           C  
ATOM   9084  ND1 HIS A1176      -1.601  48.410  69.249  1.00 31.16           N  
ATOM   9085  CD2 HIS A1176      -3.079  48.159  70.845  1.00 33.21           C  
ATOM   9086  CE1 HIS A1176      -2.333  47.355  68.940  1.00 35.77           C  
ATOM   9087  NE2 HIS A1176      -3.233  47.172  69.897  1.00 37.62           N  
ATOM   9088  N   PRO A1177       0.177  52.746  70.108  1.00 38.09           N  
ATOM   9089  CA  PRO A1177       0.191  54.137  70.538  1.00 38.42           C  
ATOM   9090  C   PRO A1177      -1.073  54.499  71.323  1.00 39.28           C  
ATOM   9091  O   PRO A1177      -2.096  53.784  71.261  1.00 38.24           O  
ATOM   9092  CB  PRO A1177       0.317  54.929  69.217  1.00 43.28           C  
ATOM   9093  CG  PRO A1177       0.087  53.951  68.085  1.00 40.30           C  
ATOM   9094  CD  PRO A1177      -0.137  52.586  68.675  1.00 39.86           C  
ATOM   9095  N   ASP A1178      -0.996  55.609  72.060  1.00 47.81           N  
ATOM   9096  CA  ASP A1178      -2.019  55.953  73.064  1.00 50.83           C  
ATOM   9097  C   ASP A1178      -3.353  56.151  72.418  1.00 47.36           C  
ATOM   9098  O   ASP A1178      -4.353  55.632  72.917  1.00 53.77           O  
ATOM   9099  CB  ASP A1178      -1.689  57.217  73.860  1.00 58.03           C  
ATOM   9100  CG  ASP A1178      -0.485  57.060  74.781  1.00 64.36           C  
ATOM   9101  OD1 ASP A1178      -0.066  55.916  75.097  1.00 60.89           O  
ATOM   9102  OD2 ASP A1178       0.041  58.117  75.194  1.00 69.32           O  
ATOM   9103  N   TRP A1179      -3.379  56.859  71.292  1.00 46.69           N  
ATOM   9104  CA  TRP A1179      -4.660  57.134  70.668  1.00 46.43           C  
ATOM   9105  C   TRP A1179      -5.393  55.836  70.483  1.00 44.16           C  
ATOM   9106  O   TRP A1179      -6.589  55.769  70.701  1.00 50.25           O  
ATOM   9107  CB  TRP A1179      -4.517  57.882  69.350  1.00 48.38           C  
ATOM   9108  CG  TRP A1179      -3.839  57.116  68.206  1.00 45.68           C  
ATOM   9109  CD1 TRP A1179      -2.524  57.212  67.801  1.00 41.82           C  
ATOM   9110  CD2 TRP A1179      -4.465  56.171  67.321  1.00 41.05           C  
ATOM   9111  NE1 TRP A1179      -2.307  56.369  66.729  1.00 40.93           N  
ATOM   9112  CE2 TRP A1179      -3.481  55.727  66.417  1.00 39.10           C  
ATOM   9113  CE3 TRP A1179      -5.760  55.655  67.215  1.00 44.92           C  
ATOM   9114  CZ2 TRP A1179      -3.755  54.811  65.419  1.00 38.75           C  
ATOM   9115  CZ3 TRP A1179      -6.027  54.736  66.218  1.00 45.10           C  
ATOM   9116  CH2 TRP A1179      -5.026  54.335  65.326  1.00 43.43           C  
ATOM   9117  N   LEU A1180      -4.665  54.777  70.142  1.00 44.79           N  
ATOM   9118  CA  LEU A1180      -5.311  53.506  69.817  1.00 43.63           C  
ATOM   9119  C   LEU A1180      -5.698  52.753  71.093  1.00 45.65           C  
ATOM   9120  O   LEU A1180      -6.732  52.057  71.139  1.00 50.81           O  
ATOM   9121  CB  LEU A1180      -4.401  52.654  68.906  1.00 41.81           C  
ATOM   9122  CG  LEU A1180      -4.886  51.250  68.560  1.00 41.44           C  
ATOM   9123  CD1 LEU A1180      -6.225  51.309  67.876  1.00 41.88           C  
ATOM   9124  CD2 LEU A1180      -3.884  50.524  67.662  1.00 45.52           C  
ATOM   9125  N   LYS A1181      -4.903  52.901  72.120  1.00 47.79           N  
ATOM   9126  CA  LYS A1181      -5.268  52.337  73.381  1.00 55.15           C  
ATOM   9127  C   LYS A1181      -6.571  52.990  73.800  1.00 54.32           C  
ATOM   9128  O   LYS A1181      -7.557  52.339  74.073  1.00 43.71           O  
ATOM   9129  CB  LYS A1181      -4.185  52.620  74.387  1.00 57.21           C  
ATOM   9130  CG  LYS A1181      -3.122  51.553  74.497  1.00 54.21           C  
ATOM   9131  CD  LYS A1181      -1.921  52.131  75.186  1.00 50.98           C  
ATOM   9132  CE  LYS A1181      -0.828  51.128  75.372  1.00 52.38           C  
ATOM   9133  NZ  LYS A1181       0.370  51.808  75.889  1.00 50.89           N  
ATOM   9134  N   ARG A1182      -6.567  54.306  73.794  1.00 56.98           N  
ATOM   9135  CA  ARG A1182      -7.754  55.056  74.095  1.00 59.88           C  
ATOM   9136  C   ARG A1182      -8.920  54.629  73.237  1.00 64.07           C  
ATOM   9137  O   ARG A1182      -9.953  54.325  73.759  1.00 72.61           O  
ATOM   9138  CB  ARG A1182      -7.485  56.529  73.944  1.00 60.77           C  
ATOM   9139  CG  ARG A1182      -6.633  57.072  75.048  1.00 58.51           C  
ATOM   9140  CD  ARG A1182      -6.724  58.564  75.090  1.00 62.05           C  
ATOM   9141  NE  ARG A1182      -5.505  59.201  74.629  1.00 62.66           N  
ATOM   9142  CZ  ARG A1182      -5.377  59.749  73.439  1.00 60.95           C  
ATOM   9143  NH1 ARG A1182      -6.388  59.727  72.594  1.00 58.33           N  
ATOM   9144  NH2 ARG A1182      -4.241  60.309  73.101  1.00 60.53           N  
ATOM   9145  N   LYS A1183      -8.726  54.557  71.926  1.00 66.83           N  
ATOM   9146  CA  LYS A1183      -9.792  54.088  71.042  1.00 73.86           C  
ATOM   9147  C   LYS A1183     -10.595  52.955  71.681  1.00 72.76           C  
ATOM   9148  O   LYS A1183     -11.830  52.993  71.686  1.00 92.35           O  
ATOM   9149  CB  LYS A1183      -9.220  53.629  69.691  1.00 80.55           C  
ATOM   9150  CG  LYS A1183     -10.249  53.604  68.566  1.00 83.32           C  
ATOM   9151  CD  LYS A1183      -9.832  52.720  67.398  1.00 85.05           C  
ATOM   9152  CE  LYS A1183     -10.906  52.673  66.319  1.00 87.49           C  
ATOM   9153  NZ  LYS A1183     -10.529  51.836  65.144  1.00 85.98           N  
ATOM   9154  N   ILE A1184      -9.892  51.956  72.209  1.00 70.62           N  
ATOM   9155  CA  ILE A1184     -10.514  50.727  72.721  1.00 73.55           C  
ATOM   9156  C   ILE A1184     -10.919  50.770  74.192  1.00 78.95           C  
ATOM   9157  O   ILE A1184     -10.329  50.123  75.057  1.00 69.38           O  
ATOM   9158  CB  ILE A1184      -9.663  49.449  72.480  1.00 72.45           C  
ATOM   9159  CG1 ILE A1184      -8.335  49.759  71.767  1.00 72.67           C  
ATOM   9160  CG2 ILE A1184     -10.481  48.414  71.723  1.00 73.51           C  
ATOM   9161  CD1 ILE A1184      -7.708  48.577  71.063  1.00 74.57           C  
ATOM   9162  N   ALA A1185     -11.980  51.524  74.432  1.00 93.05           N  
ATOM   9163  CA  ALA A1185     -12.667  51.621  75.713  1.00 95.04           C  
ATOM   9164  C   ALA A1185     -14.156  51.766  75.393  1.00 89.13           C  
ATOM   9165  O   ALA A1185     -14.523  52.426  74.416  1.00 75.85           O  
ATOM   9166  CB  ALA A1185     -12.174  52.820  76.516  1.00 97.23           C  
ATOM   9167  N   THR A1186     -15.006  51.139  76.200  1.00 82.14           N  
ATOM   9168  CA  THR A1186     -16.456  51.223  76.018  1.00 80.83           C  
ATOM   9169  C   THR A1186     -17.167  51.026  77.354  1.00 76.00           C  
ATOM   9170  O   THR A1186     -18.174  51.678  77.642  1.00 69.06           O  
ATOM   9171  CB  THR A1186     -16.998  50.166  75.032  1.00 79.38           C  
ATOM   9172  OG1 THR A1186     -16.343  48.909  75.255  1.00 79.52           O  
ATOM   9173  CG2 THR A1186     -16.798  50.610  73.584  1.00 77.26           C  
TER    9174      THR A1186                                                      
HETATM 9175  N1  5IU P   1       4.657  70.177  66.556  1.00 46.38           N  
HETATM 9176  C2  5IU P   1       5.566  71.150  66.066  1.00 45.29           C  
HETATM 9177  N3  5IU P   1       6.875  71.053  66.288  1.00 45.20           N  
HETATM 9178  C4  5IU P   1       7.368  70.046  66.982  1.00 46.45           C  
HETATM 9179  C5  5IU P   1       6.438  69.019  67.510  1.00 54.88           C  
HETATM 9180  C6  5IU P   1       5.088  69.142  67.262  1.00 51.55           C  
HETATM 9181  O2  5IU P   1       5.172  72.116  65.391  1.00 43.30           O  
HETATM 9182  O4  5IU P   1       8.588  70.017  67.203  1.00 43.13           O  
HETATM 9183  I5  5IU P   1       7.076  67.406  68.659  0.50 94.95           I  
HETATM 9184  C1' 5IU P   1       3.237  70.305  66.303  1.00 54.28           C  
HETATM 9185  C2' 5IU P   1       2.760  69.243  65.324  1.00 56.56           C  
HETATM 9186  C3' 5IU P   1       1.335  69.039  65.775  1.00 60.67           C  
HETATM 9187  C4' 5IU P   1       1.452  69.181  67.290  1.00 67.22           C  
HETATM 9188  O3' 5IU P   1       0.528  70.060  65.164  1.00 62.15           O  
HETATM 9189  O4' 5IU P   1       2.489  70.137  67.520  1.00 57.20           O  
HETATM 9190  C5' 5IU P   1       1.816  67.855  67.966  1.00 72.31           C  
HETATM 9191  O5' 5IU P   1       0.919  67.606  69.042  1.00103.01           O  
HETATM 9192  P   5IU P   1      -0.648  67.237  68.826  1.00144.77           P  
HETATM 9193  OP1 5IU P   1      -1.429  68.435  68.309  1.00140.12           O  
HETATM 9194  OP2 5IU P   1      -1.127  66.474  70.048  1.00130.85           O  
ATOM   9195  P    DA P   2       0.046  69.889  63.636  1.00 54.54           P  
ATOM   9196  OP1  DA P   2      -1.434  69.782  63.643  1.00 65.19           O  
ATOM   9197  OP2  DA P   2       0.883  68.821  63.002  1.00 54.82           O  
ATOM   9198  O5'  DA P   2       0.409  71.266  62.912  1.00 52.97           O  
ATOM   9199  C5'  DA P   2       1.426  72.151  63.412  1.00 50.96           C  
ATOM   9200  C4'  DA P   2       2.132  72.921  62.319  1.00 52.96           C  
ATOM   9201  O4'  DA P   2       3.556  72.853  62.561  1.00 52.44           O  
ATOM   9202  C3'  DA P   2       1.935  72.488  60.860  1.00 56.80           C  
ATOM   9203  O3'  DA P   2       1.901  73.668  60.022  1.00 60.92           O  
ATOM   9204  C2'  DA P   2       3.130  71.580  60.603  1.00 53.78           C  
ATOM   9205  C1'  DA P   2       4.217  72.153  61.516  1.00 51.91           C  
ATOM   9206  N9   DA P   2       5.139  71.193  62.134  1.00 45.94           N  
ATOM   9207  C8   DA P   2       4.881  69.977  62.720  1.00 42.03           C  
ATOM   9208  N7   DA P   2       5.947  69.388  63.208  1.00 37.04           N  
ATOM   9209  C5   DA P   2       6.977  70.272  62.916  1.00 37.71           C  
ATOM   9210  C6   DA P   2       8.354  70.227  63.161  1.00 36.23           C  
ATOM   9211  N6   DA P   2       8.960  69.215  63.776  1.00 41.03           N  
ATOM   9212  N1   DA P   2       9.104  71.269  62.737  1.00 42.54           N  
ATOM   9213  C2   DA P   2       8.492  72.295  62.131  1.00 44.24           C  
ATOM   9214  N3   DA P   2       7.202  72.453  61.847  1.00 43.16           N  
ATOM   9215  C4   DA P   2       6.492  71.390  62.262  1.00 41.18           C  
ATOM   9216  P    DA P   3       1.509  73.596  58.440  1.00 60.13           P  
ATOM   9217  OP1  DA P   3       0.837  74.868  58.083  1.00 59.42           O  
ATOM   9218  OP2  DA P   3       0.838  72.290  58.178  1.00 59.54           O  
ATOM   9219  O5'  DA P   3       2.929  73.698  57.734  1.00 57.92           O  
ATOM   9220  C5'  DA P   3       3.766  74.812  58.090  1.00 56.55           C  
ATOM   9221  C4'  DA P   3       5.167  74.602  57.573  1.00 55.27           C  
ATOM   9222  O4'  DA P   3       5.881  73.639  58.389  1.00 52.39           O  
ATOM   9223  C3'  DA P   3       5.237  74.078  56.139  1.00 52.69           C  
ATOM   9224  O3'  DA P   3       6.252  74.863  55.507  1.00 60.46           O  
ATOM   9225  C2'  DA P   3       5.598  72.617  56.326  1.00 52.03           C  
ATOM   9226  C1'  DA P   3       6.514  72.713  57.531  1.00 50.05           C  
ATOM   9227  N9   DA P   3       6.738  71.471  58.273  1.00 42.14           N  
ATOM   9228  C8   DA P   3       5.846  70.473  58.590  1.00 40.70           C  
ATOM   9229  N7   DA P   3       6.389  69.460  59.226  1.00 35.85           N  
ATOM   9230  C5   DA P   3       7.723  69.826  59.353  1.00 33.92           C  
ATOM   9231  C6   DA P   3       8.826  69.180  59.929  1.00 30.06           C  
ATOM   9232  N6   DA P   3       8.752  67.992  60.532  1.00 27.75           N  
ATOM   9233  N1   DA P   3      10.030  69.792  59.842  1.00 32.10           N  
ATOM   9234  C2   DA P   3      10.108  70.972  59.211  1.00 33.40           C  
ATOM   9235  N3   DA P   3       9.136  71.692  58.655  1.00 35.75           N  
ATOM   9236  C4   DA P   3       7.956  71.051  58.752  1.00 36.74           C  
HETATM 9237  P   C38 P   4       6.363  74.932  53.913  1.00 65.65           P  
HETATM 9238  O1P C38 P   4       6.103  76.353  53.511  1.00 72.85           O  
HETATM 9239  O2P C38 P   4       5.622  73.737  53.337  1.00 63.08           O  
HETATM 9240  O5' C38 P   4       7.929  74.716  53.671  1.00 61.09           O  
HETATM 9241  C5' C38 P   4       8.379  73.511  54.270  1.00 58.25           C  
HETATM 9242  C4' C38 P   4       9.873  73.425  54.291  1.00 54.00           C  
HETATM 9243  O4' C38 P   4      10.210  72.566  55.376  1.00 46.78           O  
HETATM 9244  C3' C38 P   4      10.293  72.757  53.008  1.00 52.74           C  
HETATM 9245  O3' C38 P   4      11.592  73.189  52.691  1.00 56.94           O  
HETATM 9246  C2' C38 P   4      10.315  71.279  53.306  1.00 49.49           C  
HETATM 9247  C1' C38 P   4      10.536  71.289  54.827  1.00 50.77           C  
HETATM 9248  N1  C38 P   4       9.765  70.188  55.444  1.00 40.04           N  
HETATM 9249  C2  C38 P   4      10.530  69.310  56.202  1.00 36.78           C  
HETATM 9250  O2  C38 P   4      11.762  69.541  56.345  1.00 37.97           O  
HETATM 9251  N3  C38 P   4       9.984  68.235  56.780  1.00 33.52           N  
HETATM 9252  C4  C38 P   4       8.677  67.993  56.672  1.00 34.24           C  
HETATM 9253  N4  C38 P   4       8.169  66.910  57.283  1.00 29.69           N  
HETATM 9254  C5  C38 P   4       7.839  68.902  55.818  1.00 39.16           C  
HETATM 9255  C6  C38 P   4       8.455  69.996  55.239  1.00 40.11           C  
HETATM 9256  I   C38 P   4       5.834  68.471  55.585  0.50 47.56           I  
HETATM 9257  P   C38 P   5      12.158  72.954  51.207  1.00 66.36           P  
HETATM 9258  O1P C38 P   5      13.110  74.081  50.908  1.00 52.76           O  
HETATM 9259  O2P C38 P   5      11.011  72.549  50.331  1.00 48.26           O  
HETATM 9260  O5' C38 P   5      13.048  71.616  51.372  1.00 56.38           O  
HETATM 9261  C5' C38 P   5      14.283  71.740  52.061  1.00 49.45           C  
HETATM 9262  C4' C38 P   5      14.844  70.339  52.159  1.00 50.21           C  
HETATM 9263  O4' C38 P   5      13.984  69.508  52.923  1.00 42.40           O  
HETATM 9264  C3' C38 P   5      14.918  69.686  50.782  1.00 50.25           C  
HETATM 9265  O3' C38 P   5      16.279  69.437  50.505  1.00 47.54           O  
HETATM 9266  C2' C38 P   5      14.082  68.410  50.807  1.00 47.95           C  
HETATM 9267  C1' C38 P   5      13.962  68.211  52.325  1.00 45.36           C  
HETATM 9268  N1  C38 P   5      12.727  67.585  52.757  1.00 38.73           N  
HETATM 9269  C2  C38 P   5      12.770  66.475  53.638  1.00 36.11           C  
HETATM 9270  O2  C38 P   5      13.854  66.039  54.030  1.00 33.16           O  
HETATM 9271  N3  C38 P   5      11.657  65.881  54.066  1.00 31.02           N  
HETATM 9272  C4  C38 P   5      10.456  66.358  53.666  1.00 29.90           C  
HETATM 9273  N4  C38 P   5       9.327  65.794  54.102  1.00 25.82           N  
HETATM 9274  C5  C38 P   5      10.418  67.510  52.752  1.00 35.24           C  
HETATM 9275  C6  C38 P   5      11.582  68.086  52.338  1.00 37.09           C  
HETATM 9276  I   C38 P   5       8.648  68.261  52.033  0.50 44.61           I  
ATOM   9277  P    DG P   6      16.670  68.860  49.096  1.00 47.98           P  
ATOM   9278  OP1  DG P   6      17.878  69.562  48.624  1.00 47.80           O  
ATOM   9279  OP2  DG P   6      15.428  68.794  48.268  1.00 43.88           O  
ATOM   9280  O5'  DG P   6      17.033  67.351  49.422  1.00 35.15           O  
ATOM   9281  C5'  DG P   6      18.228  66.987  50.091  1.00 34.48           C  
ATOM   9282  C4'  DG P   6      18.256  65.480  50.140  1.00 34.38           C  
ATOM   9283  O4'  DG P   6      17.010  65.004  50.723  1.00 33.11           O  
ATOM   9284  C3'  DG P   6      18.359  64.826  48.755  1.00 33.44           C  
ATOM   9285  O3'  DG P   6      19.408  63.852  48.827  1.00 32.28           O  
ATOM   9286  C2'  DG P   6      16.957  64.292  48.497  1.00 32.58           C  
ATOM   9287  C1'  DG P   6      16.442  63.999  49.903  1.00 31.23           C  
ATOM   9288  N9   DG P   6      15.007  64.093  50.082  1.00 28.08           N  
ATOM   9289  C8   DG P   6      14.210  65.126  49.654  1.00 27.13           C  
ATOM   9290  N7   DG P   6      12.983  65.035  50.085  1.00 26.55           N  
ATOM   9291  C5   DG P   6      12.973  63.880  50.852  1.00 23.44           C  
ATOM   9292  C6   DG P   6      11.912  63.257  51.560  1.00 25.85           C  
ATOM   9293  O6   DG P   6      10.730  63.608  51.639  1.00 29.09           O  
ATOM   9294  N1   DG P   6      12.332  62.087  52.185  1.00 24.01           N  
ATOM   9295  C2   DG P   6      13.618  61.604  52.167  1.00 22.45           C  
ATOM   9296  N2   DG P   6      13.841  60.483  52.866  1.00 24.16           N  
ATOM   9297  N3   DG P   6      14.613  62.178  51.519  1.00 23.90           N  
ATOM   9298  C4   DG P   6      14.219  63.296  50.874  1.00 24.26           C  
HETATM 9299  P   C38 P   7      19.895  63.091  47.539  1.00 29.19           P  
HETATM 9300  O1P C38 P   7      21.341  62.708  47.757  1.00 28.43           O  
HETATM 9301  O2P C38 P   7      19.388  63.805  46.290  1.00 29.21           O  
HETATM 9302  O5' C38 P   7      19.028  61.742  47.633  1.00 25.70           O  
HETATM 9303  C5' C38 P   7      19.200  60.854  48.733  1.00 24.43           C  
HETATM 9304  C4' C38 P   7      18.111  59.781  48.610  1.00 25.25           C  
HETATM 9305  O4' C38 P   7      16.829  60.417  48.839  1.00 27.64           O  
HETATM 9306  C3' C38 P   7      18.048  59.163  47.215  1.00 23.63           C  
HETATM 9307  O3' C38 P   7      18.284  57.770  47.484  1.00 23.85           O  
HETATM 9308  C2' C38 P   7      16.668  59.572  46.707  1.00 22.32           C  
HETATM 9309  C1' C38 P   7      15.858  59.749  47.998  1.00 24.20           C  
HETATM 9310  N1  C38 P   7      14.594  60.546  47.974  1.00 22.00           N  
HETATM 9311  C2  C38 P   7      13.462  60.172  48.707  1.00 20.16           C  
HETATM 9312  O2  C38 P   7      13.506  59.142  49.375  1.00 19.63           O  
HETATM 9313  N3  C38 P   7      12.306  60.910  48.742  1.00 20.68           N  
HETATM 9314  C4  C38 P   7      12.170  62.044  48.052  1.00 23.44           C  
HETATM 9315  N4  C38 P   7      10.990  62.754  48.099  1.00 26.04           N  
HETATM 9316  C5  C38 P   7      13.350  62.452  47.245  1.00 25.11           C  
HETATM 9317  C6  C38 P   7      14.528  61.684  47.297  1.00 23.81           C  
HETATM 9318  I   C38 P   7      13.370  64.204  46.105  0.60 35.46           I  
ATOM   9319  P    DG P   8      18.383  56.710  46.279  1.00 25.97           P  
ATOM   9320  OP1  DG P   8      19.149  55.530  46.759  1.00 24.53           O  
ATOM   9321  OP2  DG P   8      18.761  57.439  45.031  1.00 24.34           O  
ATOM   9322  O5'  DG P   8      16.865  56.255  46.102  1.00 24.21           O  
ATOM   9323  C5'  DG P   8      16.263  55.497  47.154  1.00 24.52           C  
ATOM   9324  C4'  DG P   8      14.857  55.111  46.768  1.00 21.24           C  
ATOM   9325  O4'  DG P   8      14.018  56.286  46.883  1.00 20.68           O  
ATOM   9326  C3'  DG P   8      14.722  54.613  45.321  1.00 20.45           C  
ATOM   9327  O3'  DG P   8      13.859  53.509  45.401  1.00 19.42           O  
ATOM   9328  C2'  DG P   8      14.092  55.784  44.601  1.00 20.78           C  
ATOM   9329  C1'  DG P   8      13.256  56.378  45.719  1.00 18.88           C  
ATOM   9330  N9   DG P   8      12.839  57.761  45.519  1.00 19.75           N  
ATOM   9331  C8   DG P   8      13.335  58.689  44.632  1.00 18.17           C  
ATOM   9332  N7   DG P   8      12.612  59.775  44.574  1.00 17.17           N  
ATOM   9333  C5   DG P   8      11.535  59.518  45.413  1.00 17.41           C  
ATOM   9334  C6   DG P   8      10.394  60.305  45.719  1.00 17.26           C  
ATOM   9335  O6   DG P   8      10.122  61.452  45.344  1.00 19.35           O  
ATOM   9336  N1   DG P   8       9.521  59.629  46.568  1.00 16.49           N  
ATOM   9337  C2   DG P   8       9.749  58.397  47.115  1.00 16.52           C  
ATOM   9338  N2   DG P   8       8.813  57.936  47.945  1.00 17.04           N  
ATOM   9339  N3   DG P   8      10.799  57.647  46.832  1.00 18.13           N  
ATOM   9340  C4   DG P   8      11.637  58.260  45.966  1.00 18.45           C  
HETATM 9341  N1  5IU P   9       9.538  55.949  44.110  1.00 18.47           N  
HETATM 9342  C2  5IU P   9       8.539  56.901  44.304  1.00 17.57           C  
HETATM 9343  N3  5IU P   9       8.590  58.010  43.635  1.00 17.24           N  
HETATM 9344  C4  5IU P   9       9.625  58.327  42.811  1.00 17.45           C  
HETATM 9345  C5  5IU P   9      10.670  57.366  42.556  1.00 16.06           C  
HETATM 9346  C6  5IU P   9      10.571  56.199  43.291  1.00 17.19           C  
HETATM 9347  O2  5IU P   9       7.584  56.620  45.087  1.00 17.30           O  
HETATM 9348  O4  5IU P   9       9.606  59.421  42.257  1.00 16.14           O  
HETATM 9349  I5  5IU P   9      12.261  57.684  41.253  0.40 17.88           I  
HETATM 9350  C1' 5IU P   9       9.386  54.731  44.970  1.00 19.01           C  
HETATM 9351  C2' 5IU P   9       8.265  53.737  44.757  1.00 18.91           C  
HETATM 9352  C3' 5IU P   9       8.935  52.490  44.221  1.00 19.11           C  
HETATM 9353  C4' 5IU P   9      10.310  52.534  44.808  1.00 20.46           C  
HETATM 9354  O3' 5IU P   9       8.305  51.320  44.648  1.00 18.56           O  
HETATM 9355  O4' 5IU P   9      10.596  53.955  44.923  1.00 23.29           O  
HETATM 9356  C5' 5IU P   9      11.317  51.782  43.952  1.00 19.43           C  
HETATM 9357  O5' 5IU P   9      12.498  51.620  44.722  1.00 19.90           O  
HETATM 9358  P   5IU P   9      13.895  52.357  44.360  1.00 23.18           P  
HETATM 9359  OP1 5IU P   9      14.963  51.340  44.764  1.00 20.59           O  
HETATM 9360  OP2 5IU P   9      13.936  52.948  42.983  1.00 21.60           O  
HETATM 9361  N1  5IU P  10       4.990  55.153  41.924  1.00 18.43           N  
HETATM 9362  C2  5IU P  10       4.717  56.473  41.662  1.00 17.97           C  
HETATM 9363  N3  5IU P  10       5.652  57.257  41.127  1.00 17.00           N  
HETATM 9364  C4  5IU P  10       6.877  56.840  40.835  1.00 18.42           C  
HETATM 9365  C5  5IU P  10       7.270  55.431  41.127  1.00 17.38           C  
HETATM 9366  C6  5IU P  10       6.268  54.665  41.698  1.00 19.23           C  
HETATM 9367  O2  5IU P  10       3.598  56.938  41.934  1.00 16.41           O  
HETATM 9368  O4  5IU P  10       7.688  57.672  40.367  1.00 19.82           O  
HETATM 9369  I5  5IU P  10       9.121  54.585  40.642  0.10 13.18           I  
HETATM 9370  C1' 5IU P  10       3.976  54.275  42.514  1.00 18.43           C  
HETATM 9371  C2' 5IU P  10       3.848  52.907  41.852  1.00 18.56           C  
HETATM 9372  C3' 5IU P  10       3.374  52.025  42.957  1.00 20.01           C  
HETATM 9373  C4' 5IU P  10       3.957  52.671  44.176  1.00 19.62           C  
HETATM 9374  O3' 5IU P  10       1.946  51.955  43.093  1.00 25.13           O  
HETATM 9375  O4' 5IU P  10       4.381  53.960  43.797  1.00 20.04           O  
HETATM 9376  C5' 5IU P  10       5.208  52.016  44.714  1.00 18.32           C  
HETATM 9377  O5' 5IU P  10       6.093  51.825  43.636  1.00 19.10           O  
HETATM 9378  P   5IU P  10       7.228  50.639  43.676  1.00 19.65           P  
HETATM 9379  OP1 5IU P  10       6.891  49.350  44.344  1.00 17.88           O  
HETATM 9380  OP2 5IU P  10       7.833  50.592  42.325  1.00 20.11           O  
HETATM 9381  N1  DOC P  11       2.596  56.062  39.081  1.00 18.11           N  
HETATM 9382  C2  DOC P  11       3.058  57.253  38.569  1.00 18.88           C  
HETATM 9383  N3  DOC P  11       4.284  57.384  38.044  1.00 18.03           N  
HETATM 9384  C4  DOC P  11       5.069  56.340  37.927  1.00 18.45           C  
HETATM 9385  C5  DOC P  11       4.661  55.094  38.410  1.00 19.19           C  
HETATM 9386  C6  DOC P  11       3.391  54.997  38.977  1.00 18.11           C  
HETATM 9387  O2  DOC P  11       2.367  58.259  38.588  1.00 18.09           O  
HETATM 9388  N4  DOC P  11       6.270  56.578  37.359  1.00 19.69           N  
HETATM 9389  C1' DOC P  11       1.243  55.999  39.677  1.00 19.64           C  
HETATM 9390  C2' DOC P  11       0.196  55.799  38.574  1.00 18.78           C  
HETATM 9391  C3' DOC P  11      -0.116  54.342  38.540  1.00 17.94           C  
HETATM 9392  C4' DOC P  11       0.104  53.975  39.983  1.00 20.60           C  
HETATM 9393  O4' DOC P  11       1.117  54.860  40.498  1.00 19.96           O  
HETATM 9394  C5' DOC P  11       0.486  52.499  40.116  1.00 21.27           C  
HETATM 9395  O5' DOC P  11       0.056  51.997  41.374  1.00 22.41           O  
HETATM 9396  P   DOC P  11       0.938  51.054  42.370  1.00 21.56           P  
HETATM 9397  OP1 DOC P  11      -0.132  50.700  43.385  1.00 24.60           O  
HETATM 9398  OP2 DOC P  11       1.475  49.997  41.424  1.00 24.59           O  
TER    9399      DOC P  11                                                      
HETATM 9400  N1  5IU T   2      24.349  72.034  27.058  1.00108.42           N  
HETATM 9401  C2  5IU T   2      23.706  72.840  28.027  1.00106.86           C  
HETATM 9402  N3  5IU T   2      22.943  73.887  27.643  1.00115.86           N  
HETATM 9403  C4  5IU T   2      22.756  74.201  26.336  1.00118.27           C  
HETATM 9404  C5  5IU T   2      23.413  73.369  25.282  1.00123.51           C  
HETATM 9405  C6  5IU T   2      24.185  72.316  25.747  1.00119.38           C  
HETATM 9406  O2  5IU T   2      23.842  72.581  29.242  1.00 98.83           O  
HETATM 9407  O4  5IU T   2      22.045  75.176  26.009  1.00115.00           O  
HETATM 9408  I5  5IU T   2      23.276  73.653  23.184  0.50106.44           I  
HETATM 9409  C1' 5IU T   2      25.180  70.879  27.433  1.00113.13           C  
HETATM 9410  C2' 5IU T   2      24.525  69.621  26.886  1.00115.86           C  
HETATM 9411  C3' 5IU T   2      25.167  69.437  25.515  1.00118.25           C  
HETATM 9412  C4' 5IU T   2      26.589  69.958  25.742  1.00122.41           C  
HETATM 9413  O3' 5IU T   2      25.050  68.101  24.992  1.00112.68           O  
HETATM 9414  O4' 5IU T   2      26.470  70.932  26.805  1.00121.36           O  
HETATM 9415  C5' 5IU T   2      27.214  70.549  24.467  1.00123.27           C  
HETATM 9416  O5' 5IU T   2      28.397  71.311  24.747  1.00122.44           O  
HETATM 9417  P   5IU T   2      28.393  72.912  25.037  1.00126.51           P  
HETATM 9418  OP1 5IU T   2      26.991  73.494  25.058  1.00107.73           O  
HETATM 9419  OP2 5IU T   2      29.530  73.593  24.296  1.00103.49           O  
HETATM 9420  P   C38 T   3      23.745  67.675  24.129  1.00 94.93           P  
HETATM 9421  O1P C38 T   3      23.169  68.928  23.493  1.00 82.88           O  
HETATM 9422  O2P C38 T   3      24.133  66.498  23.250  1.00 88.12           O  
HETATM 9423  O5' C38 T   3      22.715  67.110  25.275  1.00 79.61           O  
HETATM 9424  C5' C38 T   3      23.141  66.264  26.362  1.00 62.25           C  
HETATM 9425  C4' C38 T   3      22.222  66.359  27.584  1.00 58.17           C  
HETATM 9426  O4' C38 T   3      22.374  67.605  28.292  1.00 58.06           O  
HETATM 9427  C3' C38 T   3      20.742  66.214  27.247  1.00 48.67           C  
HETATM 9428  O3' C38 T   3      20.432  64.812  27.131  1.00 37.39           O  
HETATM 9429  C2' C38 T   3      20.147  66.969  28.422  1.00 56.47           C  
HETATM 9430  C1' C38 T   3      21.117  68.052  28.849  1.00 64.32           C  
HETATM 9431  N1  C38 T   3      20.746  69.390  28.329  1.00 68.69           N  
HETATM 9432  C2  C38 T   3      20.382  70.532  29.115  1.00 69.44           C  
HETATM 9433  O2  C38 T   3      20.303  70.477  30.371  1.00 65.49           O  
HETATM 9434  N3  C38 T   3      20.105  71.717  28.489  1.00 73.58           N  
HETATM 9435  C4  C38 T   3      20.149  71.860  27.131  1.00 73.86           C  
HETATM 9436  N4  C38 T   3      19.852  73.053  26.582  1.00 63.73           N  
HETATM 9437  C5  C38 T   3      20.535  70.661  26.303  1.00 85.81           C  
HETATM 9438  C6  C38 T   3      20.807  69.498  26.999  1.00 78.34           C  
HETATM 9439  I   C38 T   3      20.740  70.421  24.204  0.50110.43           I  
HETATM 9440  N1 A5IU T   4      16.356  69.252  29.389  0.50 44.78           N  
HETATM 9441  N1 B5IU T   4      16.886  68.511  29.236  0.50 43.60           N  
HETATM 9442  C2 A5IU T   4      16.221  68.860  28.047  0.50 50.17           C  
HETATM 9443  C2 B5IU T   4      16.568  69.871  29.402  0.50 48.58           C  
HETATM 9444  N3 A5IU T   4      16.198  69.723  27.017  0.50 49.47           N  
HETATM 9445  N3 B5IU T   4      16.599  70.725  28.364  0.50 48.19           N  
HETATM 9446  C4 A5IU T   4      16.293  71.029  27.215  0.50 54.31           C  
HETATM 9447  C4 B5IU T   4      16.936  70.294  27.127  0.50 52.17           C  
HETATM 9448  C5 A5IU T   4      16.435  71.561  28.602  0.50 54.02           C  
HETATM 9449  C5 B5IU T   4      17.285  68.880  26.902  0.50 56.63           C  
HETATM 9450  C6 A5IU T   4      16.464  70.603  29.659  0.50 51.50           C  
HETATM 9451  C6 B5IU T   4      17.237  68.024  28.018  0.50 51.83           C  
HETATM 9452  O2 A5IU T   4      16.138  67.635  27.811  0.50 58.78           O  
HETATM 9453  O2 B5IU T   4      16.263  70.267  30.548  0.50 51.28           O  
HETATM 9454  O4 A5IU T   4      16.260  71.795  26.220  0.50 50.08           O  
HETATM 9455  O4 B5IU T   4      16.978  71.042  26.129  0.50 50.90           O  
HETATM 9456  I5 A5IU T   4      16.570  73.685  28.730  0.50 87.84           I  
HETATM 9457  I5 B5IU T   4      17.827  68.333  24.938  0.50 73.61           I  
HETATM 9458  C1'A5IU T   4      16.343  68.123  30.373  0.50 37.92           C  
HETATM 9459  C1'B5IU T   4      16.812  67.636  30.412  0.50 39.19           C  
HETATM 9460  C2'A5IU T   4      15.171  67.147  30.113  0.50 35.07           C  
HETATM 9461  C2'B5IU T   4      15.501  66.873  30.296  0.50 36.09           C  
HETATM 9462  C3'A5IU T   4      15.762  65.773  29.724  0.50 32.78           C  
HETATM 9463  C3'B5IU T   4      15.932  65.530  29.721  0.50 33.19           C  
HETATM 9464  C4'A5IU T   4      17.153  65.844  30.355  0.50 34.31           C  
HETATM 9465  C4'B5IU T   4      17.352  65.322  30.258  0.50 34.06           C  
HETATM 9466  O3'A5IU T   4      15.105  64.539  30.145  0.50 26.56           O  
HETATM 9467  O3'B5IU T   4      15.102  64.469  30.167  0.50 26.57           O  
HETATM 9468  O4'A5IU T   4      17.503  67.254  30.335  0.50 37.83           O  
HETATM 9469  O4'B5IU T   4      17.860  66.647  30.430  0.50 37.25           O  
HETATM 9470  C5'A5IU T   4      18.113  64.883  29.629  0.50 34.21           C  
HETATM 9471  C5'B5IU T   4      18.233  64.459  29.343  0.50 34.58           C  
HETATM 9472  O5'A5IU T   4      18.110  65.117  28.203  0.50 35.43           O  
HETATM 9473  O5'B5IU T   4      17.994  64.795  27.963  0.50 36.09           O  
HETATM 9474  P  A5IU T   4      18.922  64.254  27.048  0.50 36.29           P  
HETATM 9475  P  B5IU T   4      18.924  64.364  26.679  0.50 36.23           P  
HETATM 9476  OP1A5IU T   4      18.387  64.567  25.653  0.50 32.08           O  
HETATM 9477  OP1B5IU T   4      18.499  65.220  25.476  0.50 31.74           O  
HETATM 9478  OP2A5IU T   4      18.958  62.816  27.469  0.50 33.93           O  
HETATM 9479  OP2B5IU T   4      18.873  62.868  26.583  0.50 33.91           O  
ATOM   9480  P    DT T   5      13.963  63.877  29.266  1.00 23.52           P  
ATOM   9481  OP1  DT T   5      13.710  62.510  29.500  1.00 24.88           O  
ATOM   9482  OP2  DT T   5      14.110  64.324  27.953  1.00 24.76           O  
ATOM   9483  O5'  DT T   5      12.683  64.673  29.694  1.00 23.66           O  
ATOM   9484  C5'  DT T   5      12.089  64.511  30.973  1.00 20.95           C  
ATOM   9485  C4'  DT T   5      10.609  64.746  30.823  1.00 20.71           C  
ATOM   9486  O4'  DT T   5      10.000  63.675  30.084  1.00 19.11           O  
ATOM   9487  C3'  DT T   5       9.814  64.862  32.112  1.00 19.30           C  
ATOM   9488  O3'  DT T   5       9.901  66.210  32.550  1.00 17.87           O  
ATOM   9489  C2'  DT T   5       8.430  64.474  31.644  1.00 18.89           C  
ATOM   9490  C1'  DT T   5       8.754  63.353  30.660  1.00 20.38           C  
ATOM   9491  N1   DT T   5       8.858  62.035  31.318  1.00 17.86           N  
ATOM   9492  C2   DT T   5       7.681  61.476  31.746  1.00 16.74           C  
ATOM   9493  O2   DT T   5       6.601  61.969  31.532  1.00 16.97           O  
ATOM   9494  N3   DT T   5       7.818  60.290  32.400  1.00 15.91           N  
ATOM   9495  C4   DT T   5       8.982  59.616  32.665  1.00 16.60           C  
ATOM   9496  O4   DT T   5       8.942  58.566  33.265  1.00 17.02           O  
ATOM   9497  C5   DT T   5      10.186  60.267  32.211  1.00 17.10           C  
ATOM   9498  C7   DT T   5      11.505  59.614  32.468  1.00 18.87           C  
ATOM   9499  C6   DT T   5      10.066  61.441  31.587  1.00 17.17           C  
ATOM   9500  P    DG T   6       9.871  66.617  34.051  1.00 18.30           P  
ATOM   9501  OP1  DG T   6      10.248  68.019  34.090  1.00 16.80           O  
ATOM   9502  OP2  DG T   6      10.573  65.650  34.832  1.00 16.29           O  
ATOM   9503  O5'  DG T   6       8.325  66.402  34.437  1.00 17.30           O  
ATOM   9504  C5'  DG T   6       7.271  67.160  33.799  1.00 17.08           C  
ATOM   9505  C4'  DG T   6       5.917  66.696  34.294  1.00 17.61           C  
ATOM   9506  O4'  DG T   6       5.695  65.349  33.828  1.00 14.98           O  
ATOM   9507  C3'  DG T   6       5.767  66.610  35.811  1.00 16.89           C  
ATOM   9508  O3'  DG T   6       5.228  67.798  36.321  1.00 18.25           O  
ATOM   9509  C2'  DG T   6       4.727  65.542  35.971  1.00 16.89           C  
ATOM   9510  C1'  DG T   6       5.052  64.604  34.820  1.00 16.46           C  
ATOM   9511  N9   DG T   6       5.883  63.453  35.170  1.00 15.58           N  
ATOM   9512  C8   DG T   6       7.242  63.260  35.045  1.00 15.23           C  
ATOM   9513  N7   DG T   6       7.636  62.104  35.508  1.00 15.14           N  
ATOM   9514  C5   DG T   6       6.467  61.487  35.928  1.00 15.58           C  
ATOM   9515  C6   DG T   6       6.254  60.213  36.512  1.00 15.64           C  
ATOM   9516  O6   DG T   6       7.082  59.326  36.758  1.00 16.12           O  
ATOM   9517  N1   DG T   6       4.924  60.037  36.884  1.00 13.56           N  
ATOM   9518  C2   DG T   6       3.925  60.957  36.693  1.00 14.58           C  
ATOM   9519  N2   DG T   6       2.702  60.594  37.088  1.00 14.51           N  
ATOM   9520  N3   DG T   6       4.104  62.135  36.125  1.00 14.30           N  
ATOM   9521  C4   DG T   6       5.388  62.335  35.780  1.00 14.55           C  
ATOM   9522  P    DA T   7       5.287  68.177  37.891  1.00 20.82           P  
ATOM   9523  OP1  DA T   7       5.040  69.595  37.968  1.00 21.85           O  
ATOM   9524  OP2  DA T   7       6.494  67.649  38.545  1.00 19.44           O  
ATOM   9525  O5'  DA T   7       4.120  67.290  38.487  1.00 21.58           O  
ATOM   9526  C5'  DA T   7       2.745  67.388  38.074  1.00 17.38           C  
ATOM   9527  C4'  DA T   7       1.933  66.490  38.979  1.00 16.62           C  
ATOM   9528  O4'  DA T   7       2.413  65.131  38.838  1.00 16.67           O  
ATOM   9529  C3'  DA T   7       2.010  66.813  40.483  1.00 17.67           C  
ATOM   9530  O3'  DA T   7       0.753  66.446  41.102  1.00 19.02           O  
ATOM   9531  C2'  DA T   7       3.128  65.901  40.956  1.00 17.35           C  
ATOM   9532  C1'  DA T   7       2.888  64.641  40.099  1.00 17.06           C  
ATOM   9533  N9   DA T   7       4.070  63.800  39.868  1.00 16.00           N  
ATOM   9534  C8   DA T   7       5.290  64.230  39.406  1.00 16.04           C  
ATOM   9535  N7   DA T   7       6.195  63.278  39.330  1.00 15.98           N  
ATOM   9536  C5   DA T   7       5.532  62.150  39.786  1.00 16.52           C  
ATOM   9537  C6   DA T   7       5.947  60.821  39.972  1.00 16.07           C  
ATOM   9538  N6   DA T   7       7.169  60.375  39.676  1.00 16.96           N  
ATOM   9539  N1   DA T   7       5.049  59.950  40.464  1.00 15.12           N  
ATOM   9540  C2   DA T   7       3.821  60.393  40.764  1.00 16.39           C  
ATOM   9541  N3   DA T   7       3.311  61.611  40.632  1.00 16.52           N  
ATOM   9542  C4   DA T   7       4.224  62.456  40.131  1.00 16.44           C  
ATOM   9543  P    DA T   8       0.512  66.479  42.716  1.00 20.14           P  
ATOM   9544  OP1  DA T   8      -0.939  66.814  42.949  1.00 16.75           O  
ATOM   9545  OP2  DA T   8       1.564  67.270  43.318  1.00 19.55           O  
ATOM   9546  O5'  DA T   8       0.700  64.969  43.151  1.00 18.05           O  
ATOM   9547  C5'  DA T   8      -0.199  63.950  42.741  1.00 16.51           C  
ATOM   9548  C4'  DA T   8      -0.152  62.799  43.718  1.00 16.79           C  
ATOM   9549  O4'  DA T   8       1.010  61.971  43.483  1.00 17.25           O  
ATOM   9550  C3'  DA T   8      -0.116  63.173  45.204  1.00 16.75           C  
ATOM   9551  O3'  DA T   8      -0.942  62.191  45.870  1.00 18.53           O  
ATOM   9552  C2'  DA T   8       1.371  63.124  45.526  1.00 15.82           C  
ATOM   9553  C1'  DA T   8       1.868  61.963  44.637  1.00 16.69           C  
ATOM   9554  N9   DA T   8       3.260  62.139  44.177  1.00 17.07           N  
ATOM   9555  C8   DA T   8       3.801  63.327  43.756  1.00 16.70           C  
ATOM   9556  N7   DA T   8       5.059  63.236  43.388  1.00 15.67           N  
ATOM   9557  C5   DA T   8       5.371  61.906  43.593  1.00 14.02           C  
ATOM   9558  C6   DA T   8       6.555  61.172  43.388  1.00 14.51           C  
ATOM   9559  N6   DA T   8       7.695  61.709  42.933  1.00 15.50           N  
ATOM   9560  N1   DA T   8       6.536  59.860  43.690  1.00 12.99           N  
ATOM   9561  C2   DA T   8       5.399  59.327  44.162  1.00 14.32           C  
ATOM   9562  N3   DA T   8       4.216  59.905  44.364  1.00 14.81           N  
ATOM   9563  C4   DA T   8       4.277  61.217  44.090  1.00 14.52           C  
HETATM 9564  P   C38 T   9      -1.255  62.232  47.482  1.00 17.70           P  
HETATM 9565  O1P C38 T   9      -2.527  61.470  47.744  1.00 19.45           O  
HETATM 9566  O2P C38 T   9      -0.958  63.635  47.995  1.00 16.79           O  
HETATM 9567  O5' C38 T   9      -0.099  61.344  48.143  1.00 19.93           O  
HETATM 9568  C5' C38 T   9       0.121  60.048  47.635  1.00 21.32           C  
HETATM 9569  C4' C38 T   9       1.413  59.546  48.277  1.00 23.14           C  
HETATM 9570  O4' C38 T   9       2.587  60.108  47.647  1.00 25.04           O  
HETATM 9571  C3' C38 T   9       1.603  59.816  49.782  1.00 23.06           C  
HETATM 9572  O3' C38 T   9       1.422  58.568  50.475  1.00 21.45           O  
HETATM 9573  C2' C38 T   9       3.077  60.254  49.837  1.00 22.95           C  
HETATM 9574  C1' C38 T   9       3.703  59.862  48.509  1.00 21.22           C  
HETATM 9575  N1  C38 T   9       4.741  60.750  47.940  1.00 21.77           N  
HETATM 9576  C2  C38 T   9       5.986  60.214  47.603  1.00 19.46           C  
HETATM 9577  O2  C38 T   9       6.206  59.030  47.794  1.00 17.30           O  
HETATM 9578  N3  C38 T   9       6.944  60.937  47.031  1.00 19.52           N  
HETATM 9579  C4  C38 T   9       6.714  62.221  46.784  1.00 21.37           C  
HETATM 9580  N4  C38 T   9       7.723  62.915  46.253  1.00 19.62           N  
HETATM 9581  C5  C38 T   9       5.406  62.861  47.181  1.00 22.50           C  
HETATM 9582  C6  C38 T   9       4.461  62.055  47.743  1.00 21.47           C  
HETATM 9583  I   C38 T   9       5.075  64.879  46.924  0.50 28.27           I  
ATOM   9584  P    DG T  10       1.609  58.445  52.063  1.00 22.88           P  
ATOM   9585  OP1  DG T  10       0.746  57.359  52.531  1.00 21.64           O  
ATOM   9586  OP2  DG T  10       1.571  59.796  52.631  1.00 24.93           O  
ATOM   9587  O5'  DG T  10       3.091  57.879  52.275  1.00 21.98           O  
ATOM   9588  C5'  DG T  10       3.392  56.584  51.742  1.00 21.82           C  
ATOM   9589  C4'  DG T  10       4.601  55.974  52.393  1.00 20.77           C  
ATOM   9590  O4'  DG T  10       5.779  56.574  51.842  1.00 20.20           O  
ATOM   9591  C3'  DG T  10       4.699  56.185  53.902  1.00 22.52           C  
ATOM   9592  O3'  DG T  10       5.393  55.030  54.393  1.00 21.84           O  
ATOM   9593  C2'  DG T  10       5.490  57.475  54.016  1.00 21.37           C  
ATOM   9594  C1'  DG T  10       6.454  57.349  52.816  1.00 21.16           C  
ATOM   9595  N9   DG T  10       6.814  58.599  52.172  1.00 20.82           N  
ATOM   9596  C8   DG T  10       5.990  59.677  51.962  1.00 20.74           C  
ATOM   9597  N7   DG T  10       6.564  60.636  51.288  1.00 20.06           N  
ATOM   9598  C5   DG T  10       7.843  60.166  51.042  1.00 19.11           C  
ATOM   9599  C6   DG T  10       8.920  60.762  50.345  1.00 19.39           C  
ATOM   9600  O6   DG T  10       8.975  61.869  49.810  1.00 19.31           O  
ATOM   9601  N1   DG T  10      10.038  59.945  50.342  1.00 20.87           N  
ATOM   9602  C2   DG T  10      10.116  58.712  50.941  1.00 20.39           C  
ATOM   9603  N2   DG T  10      11.276  58.061  50.797  1.00 22.06           N  
ATOM   9604  N3   DG T  10       9.110  58.129  51.559  1.00 20.80           N  
ATOM   9605  C4   DG T  10       8.017  58.913  51.588  1.00 21.01           C  
HETATM 9606  P   C38 T  11       5.606  54.842  56.005  1.00 26.41           P  
HETATM 9607  O1P C38 T  11       5.662  53.391  56.247  1.00 22.45           O  
HETATM 9608  O2P C38 T  11       4.712  55.819  56.720  1.00 23.23           O  
HETATM 9609  O5' C38 T  11       7.061  55.507  56.231  1.00 25.08           O  
HETATM 9610  C5' C38 T  11       8.186  54.791  55.697  1.00 26.84           C  
HETATM 9611  C4' C38 T  11       9.444  55.590  55.991  1.00 27.16           C  
HETATM 9612  O4' C38 T  11       9.406  56.754  55.199  1.00 26.32           O  
HETATM 9613  C3' C38 T  11       9.514  56.047  57.476  1.00 30.21           C  
HETATM 9614  O3' C38 T  11      10.595  55.234  57.975  1.00 32.79           O  
HETATM 9615  C2' C38 T  11       9.717  57.562  57.421  1.00 28.54           C  
HETATM 9616  C1' C38 T  11      10.047  57.785  55.940  1.00 27.39           C  
HETATM 9617  N1  C38 T  11       9.593  59.016  55.358  1.00 25.68           N  
HETATM 9618  C2  C38 T  11      10.486  59.722  54.519  1.00 25.66           C  
HETATM 9619  O2  C38 T  11      11.623  59.312  54.301  1.00 27.46           O  
HETATM 9620  N3  C38 T  11      10.162  60.868  53.922  1.00 24.68           N  
HETATM 9621  C4  C38 T  11       8.936  61.330  54.077  1.00 24.65           C  
HETATM 9622  N4  C38 T  11       8.652  62.481  53.454  1.00 28.13           N  
HETATM 9623  C5  C38 T  11       7.997  60.638  54.951  1.00 24.87           C  
HETATM 9624  C6  C38 T  11       8.365  59.464  55.583  1.00 25.97           C  
HETATM 9625  I   C38 T  11       6.123  61.433  55.264  0.50 30.07           I  
ATOM   9626  P    DG T  12      10.984  55.153  59.566  1.00 34.01           P  
ATOM   9627  OP1  DG T  12      11.671  53.871  59.734  1.00 33.91           O  
ATOM   9628  OP2  DG T  12       9.831  55.529  60.401  1.00 30.65           O  
ATOM   9629  O5'  DG T  12      11.999  56.374  59.693  1.00 31.29           O  
ATOM   9630  C5'  DG T  12      13.201  56.367  58.875  1.00 29.54           C  
ATOM   9631  C4'  DG T  12      13.899  57.692  59.019  1.00 29.31           C  
ATOM   9632  O4'  DG T  12      13.202  58.698  58.244  1.00 26.25           O  
ATOM   9633  C3'  DG T  12      13.894  58.207  60.463  1.00 33.94           C  
ATOM   9634  O3'  DG T  12      14.992  59.088  60.559  1.00 36.97           O  
ATOM   9635  C2'  DG T  12      12.712  59.157  60.485  1.00 30.23           C  
ATOM   9636  C1'  DG T  12      12.902  59.783  59.107  1.00 29.12           C  
ATOM   9637  N9   DG T  12      11.776  60.532  58.566  1.00 26.94           N  
ATOM   9638  C8   DG T  12      10.472  60.520  59.009  1.00 27.97           C  
ATOM   9639  N7   DG T  12       9.711  61.370  58.376  1.00 30.41           N  
ATOM   9640  C5   DG T  12      10.572  62.017  57.499  1.00 27.12           C  
ATOM   9641  C6   DG T  12      10.321  63.038  56.550  1.00 27.93           C  
ATOM   9642  O6   DG T  12       9.260  63.627  56.314  1.00 32.49           O  
ATOM   9643  N1   DG T  12      11.480  63.407  55.879  1.00 24.22           N  
ATOM   9644  C2   DG T  12      12.717  62.854  56.081  1.00 25.30           C  
ATOM   9645  N2   DG T  12      13.708  63.321  55.315  1.00 27.69           N  
ATOM   9646  N3   DG T  12      12.963  61.892  56.950  1.00 25.97           N  
ATOM   9647  C4   DG T  12      11.854  61.523  57.619  1.00 26.92           C  
ATOM   9648  P    DG T  13      16.333  58.718  61.321  1.00 46.40           P  
ATOM   9649  OP1  DG T  13      17.246  58.135  60.327  1.00 41.62           O  
ATOM   9650  OP2  DG T  13      16.001  57.966  62.528  1.00 41.15           O  
ATOM   9651  O5'  DG T  13      16.705  60.181  61.870  1.00 43.89           O  
ATOM   9652  C5'  DG T  13      17.707  60.982  61.248  1.00 40.12           C  
ATOM   9653  C4'  DG T  13      17.201  62.246  60.585  1.00 38.39           C  
ATOM   9654  O4'  DG T  13      15.940  62.150  59.918  1.00 36.72           O  
ATOM   9655  C3'  DG T  13      17.078  63.552  61.349  1.00 36.61           C  
ATOM   9656  O3'  DG T  13      18.368  64.034  61.715  1.00 39.08           O  
ATOM   9657  C2'  DG T  13      16.536  64.435  60.239  1.00 37.66           C  
ATOM   9658  C1'  DG T  13      15.673  63.463  59.419  1.00 35.80           C  
ATOM   9659  N9   DG T  13      14.239  63.694  59.545  1.00 31.96           N  
ATOM   9660  C8   DG T  13      13.346  62.970  60.294  1.00 26.17           C  
ATOM   9661  N7   DG T  13      12.123  63.421  60.206  1.00 29.30           N  
ATOM   9662  C5   DG T  13      12.211  64.480  59.311  1.00 26.33           C  
ATOM   9663  C6   DG T  13      11.209  65.365  58.832  1.00 24.97           C  
ATOM   9664  O6   DG T  13      10.004  65.371  59.083  1.00 26.00           O  
ATOM   9665  N1   DG T  13      11.741  66.331  57.993  1.00 26.53           N  
ATOM   9666  C2   DG T  13      13.071  66.449  57.666  1.00 29.40           C  
ATOM   9667  N2   DG T  13      13.392  67.461  56.843  1.00 32.59           N  
ATOM   9668  N3   DG T  13      14.013  65.629  58.098  1.00 30.16           N  
ATOM   9669  C4   DG T  13      13.516  64.683  58.923  1.00 28.51           C  
HETATM 9670  N1  5IU T  14      14.773  68.323  60.588  1.00 34.82           N  
HETATM 9671  C2  5IU T  14      13.518  68.839  60.251  1.00 32.67           C  
HETATM 9672  N3  5IU T  14      12.392  68.330  60.746  1.00 30.40           N  
HETATM 9673  C4  5IU T  14      12.387  67.301  61.559  1.00 32.21           C  
HETATM 9674  C5  5IU T  14      13.681  66.754  61.968  1.00 33.98           C  
HETATM 9675  C6  5IU T  14      14.834  67.294  61.422  1.00 36.48           C  
HETATM 9676  O2  5IU T  14      13.443  69.823  59.495  1.00 35.23           O  
HETATM 9677  O4  5IU T  14      11.314  66.834  62.013  1.00 34.78           O  
HETATM 9678  I5  5IU T  14      13.755  65.166  63.277  0.50 39.81           I  
HETATM 9679  C1' 5IU T  14      16.015  68.868  60.003  1.00 38.58           C  
HETATM 9680  C2' 5IU T  14      16.647  69.845  60.948  1.00 36.57           C  
HETATM 9681  C3' 5IU T  14      17.996  69.289  61.291  1.00 35.30           C  
HETATM 9682  C4' 5IU T  14      18.267  68.164  60.289  1.00 36.26           C  
HETATM 9683  O3' 5IU T  14      18.973  70.309  61.162  1.00 37.24           O  
HETATM 9684  O4' 5IU T  14      17.010  67.834  59.693  1.00 35.69           O  
HETATM 9685  C5' 5IU T  14      18.911  66.953  60.974  1.00 35.19           C  
HETATM 9686  O5' 5IU T  14      18.172  66.502  62.140  1.00 31.10           O  
HETATM 9687  P   5IU T  14      18.613  65.150  62.863  1.00 32.19           P  
HETATM 9688  OP1 5IU T  14      20.095  65.095  63.120  1.00 33.43           O  
HETATM 9689  OP2 5IU T  14      17.610  64.952  63.956  1.00 36.45           O  
HETATM 9690  N1  5IU T  15      13.951  72.651  62.295  1.00 39.77           N  
HETATM 9691  C2  5IU T  15      12.562  72.473  62.205  1.00 36.58           C  
HETATM 9692  N3  5IU T  15      11.952  71.431  62.768  1.00 35.25           N  
HETATM 9693  C4  5IU T  15      12.668  70.481  63.402  1.00 33.15           C  
HETATM 9694  C5  5IU T  15      14.141  70.619  63.499  1.00 32.98           C  
HETATM 9695  C6  5IU T  15      14.720  71.733  62.911  1.00 34.58           C  
HETATM 9696  O2  5IU T  15      11.920  73.356  61.645  1.00 37.68           O  
HETATM 9697  O4  5IU T  15      12.099  69.479  63.905  1.00 32.13           O  
HETATM 9698  I5  5IU T  15      15.333  69.170  64.467  0.50 40.36           I  
HETATM 9699  C1' 5IU T  15      14.527  73.820  61.657  1.00 40.21           C  
HETATM 9700  C2' 5IU T  15      15.478  74.635  62.535  1.00 43.38           C  
HETATM 9701  C3' 5IU T  15      16.377  75.167  61.458  1.00 43.39           C  
HETATM 9702  C4' 5IU T  15      16.531  74.056  60.433  1.00 42.57           C  
HETATM 9703  O3' 5IU T  15      15.649  76.239  60.829  1.00 52.34           O  
HETATM 9704  O4' 5IU T  15      15.285  73.328  60.559  1.00 41.02           O  
HETATM 9705  C5' 5IU T  15      17.827  73.223  60.626  1.00 43.10           C  
HETATM 9706  O5' 5IU T  15      17.846  72.489  61.865  1.00 37.39           O  
HETATM 9707  P   5IU T  15      19.061  71.513  62.253  1.00 41.73           P  
HETATM 9708  OP1 5IU T  15      20.344  72.215  62.013  1.00 41.04           O  
HETATM 9709  OP2 5IU T  15      18.753  70.949  63.612  1.00 39.94           O  
ATOM   9710  P    DA T  16      15.623  77.689  61.504  1.00 58.37           P  
ATOM   9711  OP1  DA T  16      15.996  78.674  60.455  1.00 56.69           O  
ATOM   9712  OP2  DA T  16      16.397  77.617  62.796  1.00 50.41           O  
ATOM   9713  O5'  DA T  16      14.088  77.874  61.883  1.00 53.91           O  
ATOM   9714  C5'  DA T  16      13.056  77.638  60.916  1.00 53.62           C  
ATOM   9715  C4'  DA T  16      11.718  78.006  61.511  1.00 54.08           C  
ATOM   9716  O4'  DA T  16      11.098  76.821  62.055  1.00 47.55           O  
ATOM   9717  C3'  DA T  16      11.769  79.032  62.648  1.00 51.15           C  
ATOM   9718  O3'  DA T  16      10.807  80.078  62.457  1.00 56.94           O  
ATOM   9719  C2'  DA T  16      11.454  78.225  63.894  1.00 44.45           C  
ATOM   9720  C1'  DA T  16      10.658  77.050  63.377  1.00 40.81           C  
ATOM   9721  N9   DA T  16      10.890  75.820  64.122  1.00 34.69           N  
ATOM   9722  C8   DA T  16      12.114  75.332  64.501  1.00 31.78           C  
ATOM   9723  N7   DA T  16      12.058  74.169  65.094  1.00 30.20           N  
ATOM   9724  C5   DA T  16      10.705  73.871  65.117  1.00 25.97           C  
ATOM   9725  C6   DA T  16       9.995  72.791  65.645  1.00 25.17           C  
ATOM   9726  N6   DA T  16      10.581  71.766  66.275  1.00 25.58           N  
ATOM   9727  N1   DA T  16       8.653  72.782  65.488  1.00 26.68           N  
ATOM   9728  C2   DA T  16       8.074  73.817  64.854  1.00 29.36           C  
ATOM   9729  N3   DA T  16       8.640  74.899  64.325  1.00 29.86           N  
ATOM   9730  C4   DA T  16       9.973  74.872  64.508  1.00 29.52           C  
TER    9731       DA T  16                                                      
HETATM 9732  PG  DTP A1301      -1.372  50.134  31.867  1.00 22.49           P  
HETATM 9733  O1G DTP A1301      -1.919  49.915  30.513  1.00 23.25           O  
HETATM 9734  O2G DTP A1301      -0.384  49.067  32.182  1.00 23.08           O  
HETATM 9735  O3G DTP A1301      -2.315  50.255  33.050  1.00 24.26           O  
HETATM 9736  PB  DTP A1301      -0.991  52.937  32.248  1.00 19.52           P  
HETATM 9737  O1B DTP A1301      -2.484  53.131  32.590  1.00 18.36           O  
HETATM 9738  O2B DTP A1301      -0.354  53.983  31.512  1.00 17.71           O  
HETATM 9739  O3B DTP A1301      -0.649  51.534  31.618  1.00 20.76           O  
HETATM 9740  PA  DTP A1301      -0.515  52.894  35.119  1.00 19.74           P  
HETATM 9741  O1A DTP A1301      -1.921  52.308  35.323  1.00 17.11           O  
HETATM 9742  O2A DTP A1301       0.589  52.268  35.804  1.00 18.00           O  
HETATM 9743  O3A DTP A1301      -0.105  52.825  33.564  1.00 19.89           O  
HETATM 9744  O5' DTP A1301      -0.382  54.422  35.400  1.00 16.54           O  
HETATM 9745  C5' DTP A1301      -1.542  55.167  35.185  1.00 14.78           C  
HETATM 9746  C4' DTP A1301      -1.220  56.548  34.723  1.00 14.09           C  
HETATM 9747  O4' DTP A1301      -0.330  57.222  35.613  1.00 14.04           O  
HETATM 9748  C3' DTP A1301      -0.528  56.564  33.375  1.00 14.64           C  
HETATM 9749  O3' DTP A1301      -1.394  56.474  32.263  1.00 16.52           O  
HETATM 9750  C2' DTP A1301       0.115  57.925  33.380  1.00 14.95           C  
HETATM 9751  C1' DTP A1301       0.573  58.063  34.852  1.00 14.94           C  
HETATM 9752  N9  DTP A1301       1.970  57.604  34.823  1.00 14.67           N  
HETATM 9753  C8  DTP A1301       2.429  56.371  35.208  1.00 14.67           C  
HETATM 9754  N7  DTP A1301       3.787  56.239  35.000  1.00 13.89           N  
HETATM 9755  C5  DTP A1301       4.163  57.377  34.400  1.00 14.19           C  
HETATM 9756  C6  DTP A1301       5.444  57.947  33.942  1.00 14.71           C  
HETATM 9757  N6  DTP A1301       6.475  57.144  34.055  1.00 14.29           N  
HETATM 9758  N1  DTP A1301       5.527  59.189  33.391  1.00 13.97           N  
HETATM 9759  C2  DTP A1301       4.408  59.921  33.368  1.00 14.98           C  
HETATM 9760  N3  DTP A1301       3.199  59.466  33.757  1.00 14.38           N  
HETATM 9761  C4  DTP A1301       3.008  58.276  34.326  1.00 14.57           C  
HETATM 9762 MG    MG A1302      -3.327  51.826  33.870  1.00 21.67          MG  
HETATM 9763 ZN    ZN A1303     -11.559  75.319  16.938  1.00 41.81          ZN  
HETATM 9764  C1  TAU A1304      15.252  57.489  34.774  1.00 74.55           C  
HETATM 9765  C2  TAU A1304      16.711  57.986  34.736  1.00 82.44           C  
HETATM 9766  N1  TAU A1304      14.409  58.270  35.668  1.00 66.73           N  
HETATM 9767  S   TAU A1304      17.485  57.641  33.278  1.00 79.98           S  
HETATM 9768  O1  TAU A1304      16.899  56.481  32.684  1.00 80.69           O  
HETATM 9769  O2  TAU A1304      19.070  57.397  33.583  1.00 88.98           O  
HETATM 9770  O3  TAU A1304      17.318  58.672  32.286  1.00 82.69           O  
HETATM 9771  C1  TAU A1305       4.730  43.022  39.915  0.80 66.96           C  
HETATM 9772  C2  TAU A1305       5.848  42.642  40.927  0.80 67.08           C  
HETATM 9773  N1  TAU A1305       5.094  42.843  38.519  0.80 63.37           N  
HETATM 9774  S   TAU A1305       6.379  43.925  41.898  0.80 59.72           S  
HETATM 9775  O1  TAU A1305       7.654  43.622  42.524  0.80 51.88           O  
HETATM 9776  O2  TAU A1305       5.261  44.308  42.986  0.80 50.36           O  
HETATM 9777  O3  TAU A1305       6.507  45.094  41.076  0.80 68.08           O  
HETATM 9778 CL    CL P 101      10.489  53.462  40.360  1.00  9.22          CL  
HETATM 9779 CL    CL P 102      14.094  57.766  40.550  0.60 24.04          CL  
HETATM 9780  O   HOH A1401      11.611  75.376  30.000  1.00 44.42           O  
HETATM 9781  O   HOH A1402      -7.505  68.691  19.033  1.00 16.90           O  
HETATM 9782  O   HOH A1403      -0.026  59.158  39.719  1.00 20.98           O  
HETATM 9783  O   HOH A1404       0.388  61.778  39.942  1.00 14.84           O  
HETATM 9784  O   HOH A1405       1.918  63.600  36.473  1.00 20.06           O  
HETATM 9785  O   HOH A1406      -6.326  60.191  39.236  1.00 11.81           O  
HETATM 9786  O   HOH A1407      -5.299  61.510  37.223  1.00 17.40           O  
HETATM 9787  O   HOH A1408      -0.655  52.747  45.221  1.00 20.21           O  
HETATM 9788  O   HOH A1409     -14.721  42.066  57.713  1.00 18.25           O  
HETATM 9789  O   HOH A1410      17.822  55.304  13.049  1.00 12.60           O  
HETATM 9790  O   HOH A1411      23.905  53.641  -8.565  1.00 28.11           O  
HETATM 9791  O   HOH A1412       1.160  48.186  68.495  1.00 28.25           O  
HETATM 9792  O   HOH A1413      26.754  34.952  34.928  1.00 21.56           O  
HETATM 9793  O   HOH A1414      29.001  54.291  17.210  1.00 25.04           O  
HETATM 9794  O   HOH A1415      34.498  47.833   3.251  1.00 33.10           O  
HETATM 9795  O   HOH A1416       0.588  70.151  19.500  1.00 29.61           O  
HETATM 9796  O   HOH A1417      13.162  39.714   6.092  1.00 34.71           O  
HETATM 9797  O   HOH A1418       4.593  54.621  16.771  1.00 16.74           O  
HETATM 9798  O   HOH A1419      39.813  55.401  35.585  1.00 14.84           O  
HETATM 9799  O   HOH A1420      33.354  63.391  64.043  0.50 22.35           O  
HETATM 9800  O   HOH A1421       0.024  78.430   8.363  1.00 37.48           O  
HETATM 9801  O   HOH A1422      26.111  53.873  17.633  1.00 17.21           O  
HETATM 9802  O   HOH A1423      26.638  55.501  29.755  1.00 32.14           O  
HETATM 9803  O   HOH A1424      21.130  81.262  17.960  1.00 15.59           O  
HETATM 9804  O   HOH A1425       5.025  40.293  71.576  1.00 33.49           O  
HETATM 9805  O   HOH A1426      30.394  53.996  19.988  1.00 15.79           O  
HETATM 9806  O   HOH A1427      25.255  65.685  58.900  1.00 29.10           O  
HETATM 9807  O   HOH A1428      -9.707  75.293  44.737  1.00 42.13           O  
HETATM 9808  O   HOH A1429      26.604  45.564  39.313  1.00 36.70           O  
HETATM 9809  O   HOH A1430      -4.500  48.233  32.778  1.00 31.17           O  
HETATM 9810  O   HOH A1431     -20.194  61.035  27.744  1.00 30.12           O  
HETATM 9811  O   HOH A1432      -1.434  48.811  35.227  1.00 26.02           O  
HETATM 9812  O   HOH A1433       0.838  76.343  29.274  1.00 26.73           O  
HETATM 9813  O   HOH A1434      31.327  45.584  31.796  1.00 24.76           O  
HETATM 9814  O   HOH A1435      22.225  58.845  72.273  0.40 38.10           O  
HETATM 9815  O   HOH A1436      34.027  76.286   7.072  1.00 29.17           O  
HETATM 9816  O   HOH A1437       7.782  36.249  72.783  1.00 34.00           O  
HETATM 9817  O   HOH A1438      21.400  59.998  50.950  1.00 29.20           O  
HETATM 9818  O   HOH A1439      -8.465  66.203  11.165  1.00 15.91           O  
HETATM 9819  O   HOH A1440     -19.001  65.260  24.451  1.00 22.42           O  
HETATM 9820  O   HOH A1441      14.793  76.371  19.694  1.00 29.15           O  
HETATM 9821  O   HOH A1442       9.965  49.397  12.292  1.00 26.02           O  
HETATM 9822  O   HOH A1443      28.312  60.807  75.915  1.00 35.89           O  
HETATM 9823  O   HOH A1444       8.180  78.931  18.174  1.00 23.28           O  
HETATM 9824  O   HOH A1445      22.184  51.572  60.459  1.00 27.18           O  
HETATM 9825  O   HOH A1446      19.223  73.477   1.067  1.00 36.06           O  
HETATM 9826  O   HOH A1447     -22.074  55.244  42.439  1.00 30.07           O  
HETATM 9827  O   HOH A1448      12.166  60.740   8.231  1.00 24.88           O  
HETATM 9828  O   HOH A1449       1.193  62.332  13.049  1.00 24.32           O  
HETATM 9829  O   HOH A1450     -11.554  43.924  57.836  1.00 32.64           O  
HETATM 9830  O   HOH A1451      14.607  75.713  16.753  1.00 23.47           O  
HETATM 9831  O   HOH A1452      28.738  60.838  46.398  1.00 30.73           O  
HETATM 9832  O   HOH A1453      49.790  57.036  24.904  1.00 48.83           O  
HETATM 9833  O   HOH A1454      25.638  31.929  22.130  1.00 26.21           O  
HETATM 9834  O   HOH A1455      38.144  35.246  17.777  1.00 32.16           O  
HETATM 9835  O   HOH A1456      24.774  86.897  36.497  1.00 43.21           O  
HETATM 9836  O   HOH A1457      11.432  69.909  10.642  1.00 30.04           O  
HETATM 9837  O   HOH A1458      29.598  67.824  57.530  1.00 40.40           O  
HETATM 9838  O   HOH A1459     -18.544  32.150  52.237  1.00 35.11           O  
HETATM 9839  O   HOH A1460       7.375  59.628  14.126  1.00 19.00           O  
HETATM 9840  O   HOH A1461      25.131  43.062  -0.032  1.00 33.39           O  
HETATM 9841  O   HOH A1462      34.868  23.226  32.574  1.00 28.15           O  
HETATM 9842  O   HOH A1463      18.425  64.370  19.697  1.00 37.27           O  
HETATM 9843  O   HOH A1464     -10.744  38.075  53.809  1.00 27.64           O  
HETATM 9844  O   HOH A1465       3.559  75.164  13.936  1.00 23.50           O  
HETATM 9845  O   HOH A1466      10.607  54.380  10.162  1.00 29.36           O  
HETATM 9846  O   HOH A1467       7.468  37.154  52.411  1.00 35.81           O  
HETATM 9847  O   HOH A1468      16.981  70.834   2.348  1.00 31.28           O  
HETATM 9848  O   HOH A1469     -14.009  38.686  35.988  1.00 38.47           O  
HETATM 9849  O   HOH A1470      50.607  27.688  36.215  1.00 33.19           O  
HETATM 9850  O   HOH A1471      -2.655  84.474  12.643  1.00 40.68           O  
HETATM 9851  O   HOH A1472      25.210  43.051  41.195  1.00 37.89           O  
HETATM 9852  O   HOH A1473      19.126  73.329  12.578  1.00 24.42           O  
HETATM 9853  O   HOH A1474      -0.934  47.693  73.728  1.00 37.95           O  
HETATM 9854  O   HOH A1475     -11.106  77.222  42.588  1.00 40.89           O  
HETATM 9855  O   HOH A1476      20.680  41.546  14.939  1.00 22.57           O  
HETATM 9856  O   HOH A1477      15.991  53.880  37.035  1.00 20.87           O  
HETATM 9857  O   HOH A1478       3.656  84.622   6.205  1.00 31.46           O  
HETATM 9858  O   HOH A1479       4.732  74.950  20.957  1.00 26.11           O  
HETATM 9859  O   HOH A1480     -17.493  33.246  43.018  1.00 52.26           O  
HETATM 9860  O   HOH A1481      44.916  30.568  24.062  1.00 46.41           O  
HETATM 9861  O   HOH A1482      -8.176  78.075  26.689  1.00 42.79           O  
HETATM 9862  O   HOH A1483      -8.097  52.502  27.844  1.00 20.69           O  
HETATM 9863  O   HOH A1484      -4.802  51.303  52.004  1.00 28.12           O  
HETATM 9864  O   HOH A1485      13.545  54.409   5.485  1.00 22.73           O  
HETATM 9865  O   HOH A1486      11.548  76.536  15.112  1.00 22.30           O  
HETATM 9866  O   HOH A1487      -6.168  65.951  39.179  1.00 24.50           O  
HETATM 9867  O   HOH A1488     -13.584  33.171  58.014  1.00 34.61           O  
HETATM 9868  O   HOH A1489      21.407  50.567  42.651  1.00 40.20           O  
HETATM 9869  O   HOH A1490      -6.689  58.150  51.787  1.00 29.27           O  
HETATM 9870  O   HOH A1491      22.780  50.415  47.525  1.00 37.96           O  
HETATM 9871  O   HOH A1492      43.645  37.157  20.446  1.00 43.72           O  
HETATM 9872  O   HOH A1493      -5.284  69.333  37.145  1.00 18.27           O  
HETATM 9873  O   HOH A1494      20.811  45.611  42.836  1.00 28.66           O  
HETATM 9874  O   HOH A1495      12.046  71.690   7.688  1.00 27.05           O  
HETATM 9875  O   HOH A1496      -1.045  38.649  21.942  1.00 55.90           O  
HETATM 9876  O   HOH A1497      25.956  37.835  18.453  1.00 24.62           O  
HETATM 9877  O   HOH A1498      11.497  52.093  33.050  1.00 30.22           O  
HETATM 9878  O   HOH A1499      -1.208  67.238   7.651  1.00 35.02           O  
HETATM 9879  O   HOH A1500      32.110  58.857  10.418  1.00 28.72           O  
HETATM 9880  O   HOH A1501     -10.836  67.764  33.204  1.00 28.36           O  
HETATM 9881  O   HOH A1502      36.970  54.282   5.496  1.00 28.87           O  
HETATM 9882  O   HOH A1503      33.878  45.209  35.068  1.00 20.67           O  
HETATM 9883  O   HOH A1504      27.964  77.804   3.300  1.00 29.76           O  
HETATM 9884  O   HOH A1505      -9.880  47.146  57.455  1.00 27.74           O  
HETATM 9885  O   HOH A1506      30.817  43.817  35.731  1.00 26.75           O  
HETATM 9886  O   HOH A1507      -2.933  88.290  48.835  1.00 62.08           O  
HETATM 9887  O   HOH A1508      23.732  44.852  54.548  1.00 26.68           O  
HETATM 9888  O   HOH A1509      -9.545  79.489  33.552  1.00 37.29           O  
HETATM 9889  O   HOH A1510      19.973  65.719  70.337  1.00 42.15           O  
HETATM 9890  O   HOH A1511      26.622  62.155  14.380  1.00 33.58           O  
HETATM 9891  O   HOH A1512      27.226  62.517  -2.989  1.00 38.94           O  
HETATM 9892  O   HOH A1513       3.481  34.086  20.517  1.00 43.79           O  
HETATM 9893  O   HOH A1514     -20.208  55.734  46.721  1.00 32.66           O  
HETATM 9894  O   HOH A1515      12.626  61.830   1.833  1.00 44.85           O  
HETATM 9895  O   HOH A1516      31.585  47.092  35.174  1.00 25.95           O  
HETATM 9896  O   HOH A1517     -28.874  36.050  22.077  1.00 41.09           O  
HETATM 9897  O   HOH A1518      28.274  52.716 -14.208  1.00 56.67           O  
HETATM 9898  O   HOH A1519      16.906  72.747  10.171  1.00 30.55           O  
HETATM 9899  O   HOH A1520      19.536  55.811  28.838  1.00 40.21           O  
HETATM 9900  O   HOH A1521      16.173  52.753  56.517  1.00 32.00           O  
HETATM 9901  O   HOH A1522      11.121  32.271  32.292  1.00 43.81           O  
HETATM 9902  O   HOH A1523     -11.296  33.784  45.262  1.00 40.85           O  
HETATM 9903  O   HOH A1524       5.357  57.999  15.134  1.00 27.13           O  
HETATM 9904  O   HOH A1525      29.756  56.760  -0.464  1.00 37.04           O  
HETATM 9905  O   HOH A1526     -13.217  62.013  28.754  1.00 23.67           O  
HETATM 9906  O   HOH A1527      20.755  60.174  54.562  1.00 39.64           O  
HETATM 9907  O   HOH A1528      21.877  40.382  56.228  1.00 44.02           O  
HETATM 9908  O   HOH A1529      27.981  57.612  -7.293  1.00 45.68           O  
HETATM 9909  O   HOH A1530      34.213  44.264   5.464  1.00 43.61           O  
HETATM 9910  O   HOH A1531     -22.153  53.313  27.515  1.00 45.06           O  
HETATM 9911  O   HOH A1532       3.390  72.942  15.943  1.00 24.84           O  
HETATM 9912  O   HOH A1533      31.439  52.394  55.698  1.00 27.52           O  
HETATM 9913  O   HOH A1534      15.005  45.754  45.047  1.00 34.08           O  
HETATM 9914  O   HOH A1535      -3.848  54.180  61.536  1.00 32.88           O  
HETATM 9915  O   HOH A1536     -13.579  68.685  32.351  1.00 25.16           O  
HETATM 9916  O   HOH A1537      15.464  37.820  55.929  1.00 47.28           O  
HETATM 9917  O   HOH A1538       1.466  51.858  15.439  1.00 31.15           O  
HETATM 9918  O   HOH A1539       9.086  71.181   9.761  1.00 27.18           O  
HETATM 9919  O   HOH A1540      -6.485  76.499   0.741  1.00 40.92           O  
HETATM 9920  O   HOH A1541       6.233  55.412  13.525  1.00 33.92           O  
HETATM 9921  O   HOH A1542      -4.016  44.562  67.756  1.00 30.35           O  
HETATM 9922  O   HOH A1543      -8.282  38.931  69.195  1.00 49.41           O  
HETATM 9923  O   HOH A1544      -0.873  51.345  50.212  1.00 29.02           O  
HETATM 9924  O   HOH A1545      -3.735  30.598  52.662  1.00 63.92           O  
HETATM 9925  O   HOH A1546      49.434  48.338  42.661  1.00 51.18           O  
HETATM 9926  O   HOH A1547     -26.160  34.298  44.491  1.00 45.64           O  
HETATM 9927  O   HOH A1548      29.632  62.535  67.636  1.00 48.42           O  
HETATM 9928  O   HOH A1549      -0.084  76.976  52.256  1.00 32.02           O  
HETATM 9929  O   HOH A1550      57.142  44.025  29.863  1.00 42.29           O  
HETATM 9930  O   HOH A1551      -2.189  47.673  18.327  1.00 39.81           O  
HETATM 9931  O   HOH A1552       0.978  60.692  10.030  1.00 41.31           O  
HETATM 9932  O   HOH A1553      20.573  47.717  53.303  1.00 39.80           O  
HETATM 9933  O   HOH A1554      32.609  36.448  48.315  1.00 42.12           O  
HETATM 9934  O   HOH A1555      12.409  59.188  69.021  1.00 50.06           O  
HETATM 9935  O   HOH A1556      28.355  54.347  71.428  1.00 32.89           O  
HETATM 9936  O   HOH A1557       5.534  53.738  48.751  1.00 34.94           O  
HETATM 9937  O   HOH A1558      -6.919  64.626  43.582  1.00 25.03           O  
HETATM 9938  O   HOH A1559      31.514  53.954  38.038  1.00 41.39           O  
HETATM 9939  O   HOH A1560     -28.321  49.553  17.754  1.00 55.08           O  
HETATM 9940  O   HOH A1561      10.770  43.206  74.142  1.00 43.98           O  
HETATM 9941  O   HOH A1562      23.624  57.307  -2.069  1.00 39.43           O  
HETATM 9942  O   HOH A1563      48.088  31.761  27.340  1.00 35.67           O  
HETATM 9943  O   HOH A1564      -5.052  50.084  20.428  1.00 60.21           O  
HETATM 9944  O   HOH A1565      28.711  94.112  33.612  1.00 31.52           O  
HETATM 9945  O   HOH A1566     -30.136  34.446  23.984  1.00 56.27           O  
HETATM 9946  O   HOH A1567      -1.443  30.367  63.751  1.00 35.17           O  
HETATM 9947  O   HOH A1568      -5.974  57.407  54.409  1.00 43.05           O  
HETATM 9948  O   HOH A1569      -7.035  85.965  42.621  1.00 48.34           O  
HETATM 9949  O   HOH A1570      21.254  71.491  11.489  1.00 35.68           O  
HETATM 9950  O   HOH A1571      19.430  61.687  57.753  1.00 27.01           O  
HETATM 9951  O   HOH A1572      32.912  66.776  11.672  1.00 41.25           O  
HETATM 9952  O   HOH A1573      12.722  52.162  37.391  1.00 41.69           O  
HETATM 9953  O   HOH A1574      -7.740  66.718  45.224  1.00 33.21           O  
HETATM 9954  O   HOH A1575       4.967  81.260  14.458  1.00 29.88           O  
HETATM 9955  O   HOH A1576       8.826  53.534  48.166  1.00 19.38           O  
HETATM 9956  O   HOH A1577      56.676  42.308  33.036  1.00 46.21           O  
HETATM 9957  O   HOH A1578      23.308  97.936  40.866  1.00 28.28           O  
HETATM 9958  O   HOH A1579       4.712  34.328  69.227  1.00 44.08           O  
HETATM 9959  O   HOH A1580      23.898  60.108  23.214  1.00 28.96           O  
HETATM 9960  O   HOH A1581      -7.644  68.881  10.880  1.00 26.70           O  
HETATM 9961  O   HOH A1582      35.182  51.149  77.381  1.00 56.12           O  
HETATM 9962  O   HOH A1583     -20.653  31.561  30.599  1.00 34.26           O  
HETATM 9963  O   HOH A1584      10.715  51.093  60.400  1.00 26.30           O  
HETATM 9964  O   HOH A1585      33.466  46.447  57.960  1.00 38.51           O  
HETATM 9965  O   HOH A1586       4.667  77.434  14.920  1.00 29.88           O  
HETATM 9966  O   HOH A1587      27.151  59.646  20.052  1.00 41.64           O  
HETATM 9967  O   HOH A1588      37.669  54.474   2.524  1.00 44.35           O  
HETATM 9968  O   HOH A1589      16.955 106.267  21.057  1.00 52.61           O  
HETATM 9969  O   HOH A1590      44.644  45.351  63.058  1.00 53.11           O  
HETATM 9970  O   HOH A1591      41.201  60.031  64.554  1.00 68.20           O  
HETATM 9971  O   HOH A1592      35.602  49.409  46.039  1.00 57.14           O  
HETATM 9972  O   HOH A1593     -24.505  59.795  28.005  1.00 41.74           O  
HETATM 9973  O   HOH A1594      -9.024  32.629  44.589  1.00 45.41           O  
HETATM 9974  O   HOH A1595     -18.052  53.850  22.895  1.00 36.67           O  
HETATM 9975  O   HOH A1596      12.194  65.159   2.682  1.00 25.19           O  
HETATM 9976  O   HOH A1597      13.579  41.749  24.205  1.00 40.02           O  
HETATM 9977  O   HOH A1598     -14.445  62.309   0.679  1.00 50.68           O  
HETATM 9978  O   HOH A1599      -1.478  63.109  11.776  1.00 19.71           O  
HETATM 9979  O   HOH A1600     -20.600  62.715  18.028  1.00 34.20           O  
HETATM 9980  O   HOH A1601       6.969  74.348  33.637  1.00 39.13           O  
HETATM 9981  O   HOH A1602     -23.830  29.172  28.207  1.00 45.55           O  
HETATM 9982  O   HOH A1603      28.251  38.332  11.636  1.00 25.85           O  
HETATM 9983  O   HOH A1604      20.657  52.813  39.385  1.00 33.05           O  
HETATM 9984  O   HOH A1605      21.324  46.990  78.148  1.00 42.67           O  
HETATM 9985  O   HOH A1606      -1.943  65.749  10.821  1.00 34.07           O  
HETATM 9986  O   HOH A1607      21.921  39.324  15.664  1.00 26.28           O  
HETATM 9987  O   HOH A1608      -7.346  83.068  41.493  1.00 48.90           O  
HETATM 9988  O   HOH A1609      29.911  53.721  53.005  1.00 28.81           O  
HETATM 9989  O   HOH A1610     -29.883  49.598  30.160  1.00 46.56           O  
HETATM 9990  O   HOH A1611      13.920  44.123  25.315  1.00 27.00           O  
HETATM 9991  O   HOH A1612      11.735  55.468   7.644  1.00 28.96           O  
HETATM 9992  O   HOH A1613      26.607  69.757   2.908  1.00 51.20           O  
HETATM 9993  O   HOH A1614      28.943  37.291  38.114  1.00 33.01           O  
HETATM 9994  O   HOH A1615       7.790  77.449  21.471  1.00 42.88           O  
HETATM 9995  O   HOH A1616      16.044  40.386  40.886  1.00 39.96           O  
HETATM 9996  O   HOH A1617     -20.530  34.826  38.133  1.00 47.95           O  
HETATM 9997  O   HOH A1618       5.738  90.502  45.025  1.00 41.14           O  
HETATM 9998  O   HOH A1619      42.377  60.187  49.147  1.00 39.46           O  
HETATM 9999  O   HOH A1620      -6.787  52.997  55.395  1.00 41.51           O  
HETATM10000  O   HOH A1621     -18.219  46.054  56.629  1.00 41.43           O  
HETATM10001  O   HOH A1622     -19.381  60.398  11.753  1.00 53.67           O  
HETATM10002  O   HOH A1623      -2.822  50.595  14.320  1.00 51.75           O  
HETATM10003  O   HOH A1624      24.664  96.138  43.725  1.00 57.06           O  
HETATM10004  O   HOH A1625      24.298  44.107  -3.430  1.00 35.73           O  
HETATM10005  O   HOH A1626       7.527  84.945   7.929  1.00 34.50           O  
HETATM10006  O   HOH A1627      30.475  29.143  24.604  1.00 36.70           O  
HETATM10007  O   HOH A1628      17.841  77.655   0.914  1.00 40.64           O  
HETATM10008  O   HOH A1629      29.067  58.527  66.645  1.00 40.41           O  
HETATM10009  O   HOH A1630     -20.076  55.643  40.252  1.00 22.95           O  
HETATM10010  O   HOH A1631     -16.345  55.643  18.709  1.00 65.12           O  
HETATM10011  O   HOH A1632      -4.399  25.699  62.407  1.00 57.12           O  
HETATM10012  O   HOH A1633     -32.208  44.287  33.086  1.00 49.33           O  
HETATM10013  O   HOH A1634      39.968  43.356  46.364  1.00 34.07           O  
HETATM10014  O   HOH A1635      -4.068  58.441  76.637  1.00 51.58           O  
HETATM10015  O   HOH A1636      27.036  38.925  41.461  1.00 32.20           O  
HETATM10016  O   HOH A1637      28.204  48.257  38.106  1.00 34.43           O  
HETATM10017  O   HOH A1638     -31.909  52.477  42.306  1.00 50.54           O  
HETATM10018  O   HOH A1639     -15.476  60.954  11.498  1.00 58.69           O  
HETATM10019  O   HOH A1640     -13.723  49.774  51.719  1.00 30.13           O  
HETATM10020  O   HOH A1641      14.809  30.098  34.777  1.00 61.79           O  
HETATM10021  O   HOH A1642      -0.511  60.535   8.212  1.00 62.67           O  
HETATM10022  O   HOH A1643       4.599 113.994  13.918  1.00 45.74           O  
HETATM10023  O   HOH A1644      45.514  56.695  63.980  1.00 52.32           O  
HETATM10024  O   HOH A1645     -14.865  64.170  29.750  1.00 29.38           O  
HETATM10025  O   HOH A1646      40.980  59.923  68.974  1.00 56.37           O  
HETATM10026  O   HOH A1647      29.888  40.045  43.558  1.00 45.48           O  
HETATM10027  O   HOH A1648      43.678  51.524   7.238  1.00 38.03           O  
HETATM10028  O   HOH A1649      -5.917  45.137  35.200  1.00 25.53           O  
HETATM10029  O   HOH A1650      46.536  54.357  13.997  1.00 46.45           O  
HETATM10030  O   HOH A1651      -2.137  61.942  59.973  1.00 49.57           O  
HETATM10031  O   HOH A1652      15.340  83.141  -3.520  1.00 55.36           O  
HETATM10032  O   HOH A1653      34.450  41.100  36.569  1.00 36.67           O  
HETATM10033  O   HOH A1654     -25.167  49.384  24.814  1.00 36.43           O  
HETATM10034  O   HOH A1655      -0.501  46.346  32.729  1.00 40.66           O  
HETATM10035  O   HOH A1656       9.164  50.927  10.006  1.00 39.01           O  
HETATM10036  O   HOH A1657      12.007  47.434  -2.145  1.00 38.39           O  
HETATM10037  O   HOH A1658      -2.648  52.084  39.037  1.00 32.32           O  
HETATM10038  O   HOH A1659       0.665  57.096  71.466  1.00 45.78           O  
HETATM10039  O   HOH A1660     -12.580  65.287  39.925  1.00 32.41           O  
HETATM10040  O   HOH A1661      -8.031  68.870  41.971  1.00 28.12           O  
HETATM10041  O   HOH A1662      32.334  45.602  37.821  1.00 28.05           O  
HETATM10042  O   HOH A1663      -6.202  52.545  58.234  1.00 42.51           O  
HETATM10043  O   HOH A1664       3.920  76.526  18.776  1.00 40.60           O  
HETATM10044  O   HOH A1665       4.612  81.078  16.925  1.00 42.10           O  
HETATM10045  O   HOH A1666      10.789  30.736  24.787  1.00 40.26           O  
HETATM10046  O   HOH A1667      -0.204  45.145  56.767  1.00 25.09           O  
HETATM10047  O   HOH A1668      -4.149  63.977  44.253  1.00 20.00           O  
HETATM10048  O   HOH A1669      13.849 108.939  12.828  1.00 26.39           O  
HETATM10049  O   HOH A1670     -25.149  46.654  34.640  1.00 28.19           O  
HETATM10050  O   HOH A1671      30.136  43.444  33.071  1.00 21.63           O  
HETATM10051  O   HOH A1672     -23.279  49.126  34.472  1.00 26.40           O  
HETATM10052  O   HOH A1673      24.047  72.095  11.569  1.00 17.94           O  
HETATM10053  O   HOH A1674      22.333  43.253  42.540  1.00 30.40           O  
HETATM10054  O   HOH A1675      36.352  40.592  34.831  1.00 25.91           O  
HETATM10055  O   HOH A1676       4.667  57.166  17.449  1.00 18.43           O  
HETATM10056  O   HOH A1677       4.179  60.967   8.617  1.00 27.13           O  
HETATM10057  O   HOH A1678      28.383  50.156  13.904  1.00 25.42           O  
HETATM10058  O   HOH A1679      -7.166  62.684  14.938  1.00 27.31           O  
HETATM10059  O   HOH A1680      29.620  43.264  12.440  1.00 27.60           O  
HETATM10060  O   HOH A1681      19.522  71.259   2.186  1.00 29.58           O  
HETATM10061  O   HOH A1682       3.013  83.017  11.942  1.00 40.56           O  
HETATM10062  O   HOH A1683      19.391  69.962  57.074  1.00 32.78           O  
HETATM10063  O   HOH A1684      24.661  39.196  16.319  1.00 30.24           O  
HETATM10064  O   HOH A1685      23.916  49.308  38.958  1.00 26.39           O  
HETATM10065  O   HOH A1686      16.062  54.448  50.242  1.00 37.93           O  
HETATM10066  O   HOH A1687      19.430  55.967  59.855  1.00 36.09           O  
HETATM10067  O   HOH A1688      36.485  55.819  15.682  1.00 33.14           O  
HETATM10068  O   HOH A1689      45.647  55.548  25.232  1.00 29.49           O  
HETATM10069  O   HOH A1690      -9.861  42.929  31.609  1.00 34.73           O  
HETATM10070  O   HOH A1691      13.325  46.633  26.779  1.00 27.21           O  
HETATM10071  O   HOH A1692      -2.263  50.596  53.433  1.00 36.87           O  
HETATM10072  O   HOH A1693      18.478  52.364  26.990  1.00 45.22           O  
HETATM10073  O   HOH A1694      27.988  57.583  18.406  1.00 27.25           O  
HETATM10074  O   HOH A1695      28.007  37.704  14.194  1.00 30.80           O  
HETATM10075  O   HOH A1696     -16.419  69.966  17.641  1.00 36.30           O  
HETATM10076  O   HOH A1697      21.455  56.798  72.146  0.60 33.85           O  
HETATM10077  O   HOH A1698      16.979  46.291  47.688  1.00 32.21           O  
HETATM10078  O   HOH A1699     -17.981  70.080  25.555  1.00 23.25           O  
HETATM10079  O   HOH A1700     -15.533  42.418  30.331  1.00 22.60           O  
HETATM10080  O   HOH A1701       9.475  57.956  12.981  1.00 29.34           O  
HETATM10081  O   HOH A1702     -12.750  33.585  47.634  1.00 31.19           O  
HETATM10082  O   HOH A1703      10.858  62.227   5.818  1.00 24.17           O  
HETATM10083  O   HOH A1704      32.009  60.888  11.797  1.00 31.27           O  
HETATM10084  O   HOH A1705       1.663  76.679  26.355  1.00 30.80           O  
HETATM10085  O   HOH A1706      37.737  53.679  36.122  1.00 35.57           O  
HETATM10086  O   HOH A1707      18.965 107.998  19.794  1.00 34.20           O  
HETATM10087  O   HOH A1708      15.681  68.934  18.669  1.00 31.54           O  
HETATM10088  O   HOH A1709      22.550  62.402  19.635  1.00 61.91           O  
HETATM10089  O   HOH A1710      40.608  44.717  11.563  1.00 30.39           O  
HETATM10090  O   HOH A1711      18.330  97.338   7.754  1.00 51.31           O  
HETATM10091  O   HOH A1712      34.517  38.463  12.812  1.00 41.03           O  
HETATM10092  O   HOH A1713      37.727  45.611  39.955  1.00 34.71           O  
HETATM10093  O   HOH A1714      52.464  37.734  27.488  1.00 31.82           O  
HETATM10094  O   HOH A1715     -11.351  34.673  60.373  1.00 45.40           O  
HETATM10095  O   HOH A1716      -0.693  80.286   2.014  1.00 25.75           O  
HETATM10096  O   HOH A1717      20.493  40.393  44.352  1.00 48.69           O  
HETATM10097  O   HOH A1718      47.253  32.899  21.038  1.00 55.27           O  
HETATM10098  O   HOH A1719      32.434  63.976  62.678  0.50 13.51           O  
HETATM10099  O   HOH A1720      25.357  34.109  20.873  1.00 30.19           O  
HETATM10100  O   HOH A1721      24.413  38.992   8.895  1.00 31.17           O  
HETATM10101  O   HOH A1722      -3.420  52.355  55.450  1.00 57.03           O  
HETATM10102  O   HOH A1723      -1.965  57.426  14.632  1.00 34.81           O  
HETATM10103  O   HOH A1724     -17.718  60.763  41.830  1.00 45.56           O  
HETATM10104  O   HOH A1725      26.694  45.256  -5.390  1.00 53.45           O  
HETATM10105  O   HOH A1726      13.919  70.225  23.464  1.00 36.96           O  
HETATM10106  O   HOH A1727       6.827 112.192  10.111  1.00 40.98           O  
HETATM10107  O   HOH A1728      24.698  69.681  14.611  1.00 31.56           O  
HETATM10108  O   HOH A1729      19.945  53.206  60.522  1.00 27.73           O  
HETATM10109  O   HOH A1730      32.858  41.639  43.350  1.00 53.54           O  
HETATM10110  O   HOH A1731      46.203  57.160  32.866  1.00 38.40           O  
HETATM10111  O   HOH A1732      27.124  39.249   8.847  1.00 32.14           O  
HETATM10112  O   HOH A1733      14.148  47.304   5.619  1.00 36.71           O  
HETATM10113  O   HOH A1734      20.373  44.409  -5.835  1.00 50.82           O  
HETATM10114  O   HOH A1735       7.367  49.409  13.225  1.00 29.72           O  
HETATM10115  O   HOH A1736      -7.064  77.961  11.099  1.00 25.67           O  
HETATM10116  O   HOH A1737       8.663  82.985  14.430  1.00 31.31           O  
HETATM10117  O   HOH A1738      32.211  60.697  14.643  1.00 32.46           O  
HETATM10118  O   HOH A1739      26.230  35.543  14.424  1.00 32.69           O  
HETATM10119  O   HOH A1740      26.164  49.675  15.369  1.00 15.76           O  
HETATM10120  O   HOH A1741      18.319  58.604  29.636  1.00 42.51           O  
HETATM10121  O   HOH A1742       5.579  53.812  34.995  1.00 34.25           O  
HETATM10122  O   HOH A1743      -2.508  72.465   9.185  1.00 39.97           O  
HETATM10123  O   HOH A1744      15.041  38.574  23.006  1.00 21.16           O  
HETATM10124  O   HOH A1745      30.947  48.979  37.490  1.00 31.07           O  
HETATM10125  O   HOH A1746       2.214  74.071  20.954  1.00 40.69           O  
HETATM10126  O   HOH A1747      -0.823  76.175  18.271  1.00 41.69           O  
HETATM10127  O   HOH A1748      11.423  81.820  20.043  1.00 48.17           O  
HETATM10128  O   HOH A1749       5.580  78.480  17.557  1.00 35.19           O  
HETATM10129  O   HOH A1750      15.045  82.192  19.045  1.00 46.82           O  
HETATM10130  O   HOH A1751      34.629  79.676  -5.097  1.00 54.50           O  
HETATM10131  O   HOH A1752      -3.069  50.411  43.272  1.00 33.33           O  
HETATM10132  O   HOH A1753      -3.169  50.208  40.815  1.00 31.39           O  
HETATM10133  O   HOH A1754       7.484  47.513  39.858  1.00 40.11           O  
HETATM10134  O   HOH A1755      -8.345  79.067  45.532  1.00 41.35           O  
HETATM10135  O   HOH A1756      -7.850  66.128  41.438  1.00 28.80           O  
HETATM10136  O   HOH A1757     -10.437  65.519  41.565  1.00 26.08           O  
HETATM10137  O   HOH A1758      -4.337  80.527  38.319  1.00 49.78           O  
HETATM10138  O   HOH A1759      -6.934  77.545  31.502  1.00 20.59           O  
HETATM10139  O   HOH A1760      -9.572  79.290  47.552  1.00 44.01           O  
HETATM10140  O   HOH A1761      -2.369  73.185  48.368  1.00 46.86           O  
HETATM10141  O   HOH A1762      -6.246  75.816  47.901  1.00 37.14           O  
HETATM10142  O   HOH A1763     -16.559  60.163  44.462  1.00 41.73           O  
HETATM10143  O   HOH A1764     -16.097  61.638  40.006  1.00 26.63           O  
HETATM10144  O   HOH A1765     -19.539  46.609  52.259  1.00 37.26           O  
HETATM10145  O   HOH A1766     -25.734  36.859  44.367  1.00 36.43           O  
HETATM10146  O   HOH A1767     -23.778  32.854  37.228  1.00 32.62           O  
HETATM10147  O   HOH A1768      14.263  78.451  22.460  1.00 32.43           O  
HETATM10148  O   HOH A1769       6.856  75.273  23.126  1.00 38.00           O  
HETATM10149  O   HOH A1770      29.305  61.165  21.053  1.00 38.42           O  
HETATM10150  O   HOH A1771      26.080  58.695  22.293  1.00 27.53           O  
HETATM10151  O   HOH A1772      35.742  58.422  16.440  1.00 33.83           O  
HETATM10152  O   HOH A1773      35.835  58.038  19.256  1.00 44.08           O  
HETATM10153  O   HOH A1774      30.618  58.129  17.962  1.00 30.93           O  
HETATM10154  O   HOH A1775      21.123  64.102  19.064  1.00 42.92           O  
HETATM10155  O   HOH A1776      19.840  71.903   9.273  1.00 24.05           O  
HETATM10156  O   HOH A1777      25.789  65.906  14.286  1.00 38.84           O  
HETATM10157  O   HOH A1778      11.694 108.155  16.377  1.00 48.61           O  
HETATM10158  O   HOH A1779      -9.577  45.808  28.590  1.00 50.19           O  
HETATM10159  O   HOH A1780      -8.953  38.769  35.962  1.00 34.24           O  
HETATM10160  O   HOH A1781     -10.088  36.430  45.887  1.00 27.09           O  
HETATM10161  O   HOH A1782      -5.355  42.341  32.987  1.00 41.63           O  
HETATM10162  O   HOH A1783     -13.852  55.541  20.058  1.00 30.43           O  
HETATM10163  O   HOH A1784      -2.133  75.908   6.014  1.00 41.95           O  
HETATM10164  O   HOH A1785      35.106  64.556  11.454  1.00 43.62           O  
HETATM10165  O   HOH A1786      29.660  68.104   9.228  1.00 31.68           O  
HETATM10166  O   HOH A1787      32.182  43.151  11.650  1.00 26.43           O  
HETATM10167  O   HOH A1788      27.551  68.515  11.204  1.00 34.07           O  
HETATM10168  O   HOH A1789      25.180  62.698  -1.461  1.00 38.79           O  
HETATM10169  O   HOH A1790      21.890  61.708  -4.490  1.00 51.32           O  
HETATM10170  O   HOH A1791      42.341  53.833  46.242  1.00 43.79           O  
HETATM10171  O   HOH A1792      50.833  50.434  39.016  1.00 49.52           O  
HETATM10172  O   HOH A1793     -29.339  44.952  25.121  1.00 37.21           O  
HETATM10173  O   HOH A1794       4.331  46.591  18.098  1.00 27.38           O  
HETATM10174  O   HOH A1795      12.879  28.054  26.090  1.00 59.08           O  
HETATM10175  O   HOH A1796       6.538  48.862  72.896  1.00 43.87           O  
HETATM10176  O   HOH A1797      37.501  80.653  -3.634  1.00 36.25           O  
HETATM10177  O   HOH A1798      14.490  58.794  30.666  0.50  4.90           O  
HETATM10178  O   HOH A1799      20.084  55.795  31.354  1.00 41.52           O  
HETATM10179  O   HOH A1800       9.855  51.360  30.635  1.00 47.59           O  
HETATM10180  O   HOH A1801      11.460  52.923  28.640  1.00 23.08           O  
HETATM10181  O   HOH A1802      -0.446  40.704  39.708  1.00 33.40           O  
HETATM10182  O   HOH A1803      26.589  39.643  38.415  1.00 42.08           O  
HETATM10183  O   HOH A1804      -1.355  61.226  51.863  1.00 33.88           O  
HETATM10184  O   HOH A1805      -6.411  68.774  45.573  0.50 17.86           O  
HETATM10185  O   HOH A1806       8.761  52.751  67.415  1.00 45.36           O  
HETATM10186  O   HOH A1807      17.781  59.414  57.832  1.00 29.20           O  
HETATM10187  O   HOH P 201      20.852  58.971  44.898  1.00 36.85           O  
HETATM10188  O   HOH P 202      10.840  63.093  43.470  1.00 28.19           O  
HETATM10189  O   HOH P 203       5.780  56.052  47.027  1.00 31.84           O  
HETATM10190  O   HOH P 204      13.171  54.274  41.034  1.00 40.85           O  
HETATM10191  O   HOH P 205       8.084  53.352  37.803  0.50  5.52           O  
HETATM10192  O   HOH P 206       6.767  51.414  39.908  1.00 32.74           O  
HETATM10193  O   HOH P 207      16.328  65.328  53.557  1.00 40.90           O  
HETATM10194  O   HOH P 208      17.084  60.904  52.050  1.00 40.86           O  
HETATM10195  O   HOH P 209      19.072  62.151  52.882  1.00 35.96           O  
HETATM10196  O   HOH P 210      -0.471  49.074  40.031  1.00 28.18           O  
HETATM10197  O   HOH P 211      22.301  62.019  50.278  1.00 27.85           O  
HETATM10198  O   HOH P 212      10.175  50.242  40.961  1.00 34.43           O  
HETATM10199  O   HOH P 213       9.978  68.254  67.800  1.00 46.93           O  
HETATM10200  O   HOH P 214       7.194  70.655  52.247  1.00 58.26           O  
HETATM10201  O   HOH P 215       3.792  50.459  39.233  1.00 47.99           O  
HETATM10202  O   HOH P 216      16.500  58.272  43.268  1.00 31.77           O  
HETATM10203  O   HOH P 217      10.082  57.237  38.279  1.00 32.26           O  
HETATM10204  O   HOH P 218      16.800  62.422  44.963  1.00 48.08           O  
HETATM10205  O   HOH P 219       4.963  66.542  56.005  0.50  7.47           O  
HETATM10206  O   HOH P 220       6.889  67.332  52.468  0.50 13.84           O  
HETATM10207  O   HOH P 221       9.143  70.633  50.131  1.00 69.57           O  
HETATM10208  O   HOH P 222       8.087  54.138  35.964  0.50  8.10           O  
HETATM10209  O   HOH T 101       0.024  61.897  37.369  1.00 22.59           O  
HETATM10210  O   HOH T 102       0.545  59.439  42.436  1.00 24.61           O  
HETATM10211  O   HOH T 103      12.167  68.695  32.280  1.00 33.31           O  
HETATM10212  O   HOH T 104      14.727  60.697  31.309  0.50  9.16           O  
HETATM10213  O   HOH T 105       7.484  54.903  60.420  1.00 35.01           O  
HETATM10214  O   HOH T 106       6.402  71.255  36.933  1.00 42.46           O  
HETATM10215  O   HOH T 107       9.499  57.969  61.311  1.00 37.02           O  
HETATM10216  O   HOH T 108      10.649  62.405  61.793  1.00 42.63           O  
HETATM10217  O   HOH T 109      10.957  56.697  34.138  1.00 20.71           O  
HETATM10218  O   HOH T 110       8.877  63.838  41.654  1.00 34.53           O  
HETATM10219  O   HOH T 111      10.086  65.561  37.434  1.00 44.80           O  
HETATM10220  O   HOH T 112      16.498  65.804  56.588  1.00 37.30           O  
HETATM10221  O   HOH T 113       7.073  67.099  40.954  1.00 32.15           O  
HETATM10222  O   HOH T 114      -1.561  58.267  53.564  1.00 40.74           O  
HETATM10223  O   HOH T 115       7.757  65.691  45.232  1.00 38.44           O  
HETATM10224  O   HOH T 116      -1.240  66.044  47.140  1.00 26.05           O  
HETATM10225  O   HOH T 117       9.248  61.581  38.674  1.00 29.47           O  
HETATM10226  O   HOH T 118      -4.589  62.232  46.103  1.00 14.84           O  
HETATM10227  O   HOH T 119      17.916  63.350  66.017  1.00 35.00           O  
HETATM10228  O   HOH T 120      17.030  69.955  31.954  0.50 22.06           O  
HETATM10229  O   HOH T 121      16.990  66.993  65.649  1.00 35.43           O  
HETATM10230  O   HOH T 122      10.146  61.191  35.825  1.00 33.28           O  
HETATM10231  O   HOH T 123      -2.568  66.255  44.862  1.00 20.59           O  
HETATM10232  O   HOH T 124      19.935  76.377  27.193  1.00 39.74           O  
HETATM10233  O   HOH T 125       8.794  63.901  39.025  1.00 36.53           O  
HETATM10234  O   HOH T 126       3.837  67.149  44.095  1.00 41.45           O  
HETATM10235  O   HOH T 127       8.940  68.199  38.242  1.00 33.55           O  
HETATM10236  O   HOH T 128       6.430  65.634  42.910  1.00 23.79           O  
HETATM10237  O   HOH T 129       8.367  64.368  49.753  1.00 24.50           O  
HETATM10238  O   HOH T 130      16.973  72.603  65.271  1.00 34.42           O  
CONECT 4775 9762                                                                
CONECT 4780 9762                                                                
CONECT 4972 9763                                                                
CONECT 4989 9763                                                                
CONECT 5002 9763                                                                
CONECT 5738 9763                                                                
CONECT 6667 9762                                                                
CONECT 9175 9176 9180 9184                                                      
CONECT 9176 9175 9177 9181                                                      
CONECT 9177 9176 9178                                                           
CONECT 9178 9177 9179 9182                                                      
CONECT 9179 9178 9180 9183                                                      
CONECT 9180 9175 9179                                                           
CONECT 9181 9176                                                                
CONECT 9182 9178                                                                
CONECT 9183 9179                                                                
CONECT 9184 9175 9185 9189                                                      
CONECT 9185 9184 9186                                                           
CONECT 9186 9185 9187 9188                                                      
CONECT 9187 9186 9189 9190                                                      
CONECT 9188 9186 9195                                                           
CONECT 9189 9184 9187                                                           
CONECT 9190 9187 9191                                                           
CONECT 9191 9190 9192                                                           
CONECT 9192 9191 9193 9194                                                      
CONECT 9193 9192                                                                
CONECT 9194 9192                                                                
CONECT 9195 9188                                                                
CONECT 9224 9237                                                                
CONECT 9237 9224 9238 9239 9240                                                 
CONECT 9238 9237                                                                
CONECT 9239 9237                                                                
CONECT 9240 9237 9241                                                           
CONECT 9241 9240 9242                                                           
CONECT 9242 9241 9243 9244                                                      
CONECT 9243 9242 9247                                                           
CONECT 9244 9242 9245 9246                                                      
CONECT 9245 9244 9257                                                           
CONECT 9246 9244 9247                                                           
CONECT 9247 9243 9246 9248                                                      
CONECT 9248 9247 9249 9255                                                      
CONECT 9249 9248 9250 9251                                                      
CONECT 9250 9249                                                                
CONECT 9251 9249 9252                                                           
CONECT 9252 9251 9253 9254                                                      
CONECT 9253 9252                                                                
CONECT 9254 9252 9255 9256                                                      
CONECT 9255 9248 9254                                                           
CONECT 9256 9254                                                                
CONECT 9257 9245 9258 9259 9260                                                 
CONECT 9258 9257                                                                
CONECT 9259 9257                                                                
CONECT 9260 9257 9261                                                           
CONECT 9261 9260 9262                                                           
CONECT 9262 9261 9263 9264                                                      
CONECT 9263 9262 9267                                                           
CONECT 9264 9262 9265 9266                                                      
CONECT 9265 9264 9277                                                           
CONECT 9266 9264 9267                                                           
CONECT 9267 9263 9266 9268                                                      
CONECT 9268 9267 9269 9275                                                      
CONECT 9269 9268 9270 9271                                                      
CONECT 9270 9269                                                                
CONECT 9271 9269 9272                                                           
CONECT 9272 9271 9273 9274                                                      
CONECT 9273 9272                                                                
CONECT 9274 9272 9275 9276                                                      
CONECT 9275 9268 9274                                                           
CONECT 9276 9274                                                                
CONECT 9277 9265                                                                
CONECT 9285 9299                                                                
CONECT 9299 9285 9300 9301 9302                                                 
CONECT 9300 9299                                                                
CONECT 9301 9299                                                                
CONECT 9302 9299 9303                                                           
CONECT 9303 9302 9304                                                           
CONECT 9304 9303 9305 9306                                                      
CONECT 9305 9304 9309                                                           
CONECT 9306 9304 9307 9308                                                      
CONECT 9307 9306 9319                                                           
CONECT 9308 9306 9309                                                           
CONECT 9309 9305 9308 9310                                                      
CONECT 9310 9309 9311 9317                                                      
CONECT 9311 9310 9312 9313                                                      
CONECT 9312 9311                                                                
CONECT 9313 9311 9314                                                           
CONECT 9314 9313 9315 9316                                                      
CONECT 9315 9314                                                                
CONECT 9316 9314 9317 9318                                                      
CONECT 9317 9310 9316                                                           
CONECT 9318 9316                                                                
CONECT 9319 9307                                                                
CONECT 9327 9358                                                                
CONECT 9341 9342 9346 9350                                                      
CONECT 9342 9341 9343 9347                                                      
CONECT 9343 9342 9344                                                           
CONECT 9344 9343 9345 9348                                                      
CONECT 9345 9344 9346 9349                                                      
CONECT 9346 9341 9345                                                           
CONECT 9347 9342                                                                
CONECT 9348 9344                                                                
CONECT 9349 9345                                                                
CONECT 9350 9341 9351 9355                                                      
CONECT 9351 9350 9352                                                           
CONECT 9352 9351 9353 9354                                                      
CONECT 9353 9352 9355 9356                                                      
CONECT 9354 9352 9378                                                           
CONECT 9355 9350 9353                                                           
CONECT 9356 9353 9357                                                           
CONECT 9357 9356 9358                                                           
CONECT 9358 9327 9357 9359 9360                                                 
CONECT 9359 9358                                                                
CONECT 9360 9358                                                                
CONECT 9361 9362 9366 9370                                                      
CONECT 9362 9361 9363 9367                                                      
CONECT 9363 9362 9364                                                           
CONECT 9364 9363 9365 9368                                                      
CONECT 9365 9364 9366 9369                                                      
CONECT 9366 9361 9365                                                           
CONECT 9367 9362                                                                
CONECT 9368 9364                                                                
CONECT 9369 9365                                                                
CONECT 9370 9361 9371 9375                                                      
CONECT 9371 9370 9372                                                           
CONECT 9372 9371 9373 9374                                                      
CONECT 9373 9372 9375 9376                                                      
CONECT 9374 9372 9396                                                           
CONECT 9375 9370 9373                                                           
CONECT 9376 9373 9377                                                           
CONECT 9377 9376 9378                                                           
CONECT 9378 9354 9377 9379 9380                                                 
CONECT 9379 9378                                                                
CONECT 9380 9378                                                                
CONECT 9381 9382 9386 9389                                                      
CONECT 9382 9381 9383 9387                                                      
CONECT 9383 9382 9384                                                           
CONECT 9384 9383 9385 9388                                                      
CONECT 9385 9384 9386                                                           
CONECT 9386 9381 9385                                                           
CONECT 9387 9382                                                                
CONECT 9388 9384                                                                
CONECT 9389 9381 9390 9393                                                      
CONECT 9390 9389 9391                                                           
CONECT 9391 9390 9392                                                           
CONECT 9392 9391 9393 9394                                                      
CONECT 9393 9389 9392                                                           
CONECT 9394 9392 9395                                                           
CONECT 9395 9394 9396                                                           
CONECT 9396 9374 9395 9397 9398                                                 
CONECT 9397 9396                                                                
CONECT 9398 9396                                                                
CONECT 9400 9401 9405 9409                                                      
CONECT 9401 9400 9402 9406                                                      
CONECT 9402 9401 9403                                                           
CONECT 9403 9402 9404 9407                                                      
CONECT 9404 9403 9405 9408                                                      
CONECT 9405 9400 9404                                                           
CONECT 9406 9401                                                                
CONECT 9407 9403                                                                
CONECT 9408 9404                                                                
CONECT 9409 9400 9410 9414                                                      
CONECT 9410 9409 9411                                                           
CONECT 9411 9410 9412 9413                                                      
CONECT 9412 9411 9414 9415                                                      
CONECT 9413 9411 9420                                                           
CONECT 9414 9409 9412                                                           
CONECT 9415 9412 9416                                                           
CONECT 9416 9415 9417                                                           
CONECT 9417 9416 9418 9419                                                      
CONECT 9418 9417                                                                
CONECT 9419 9417                                                                
CONECT 9420 9413 9421 9422 9423                                                 
CONECT 9421 9420                                                                
CONECT 9422 9420                                                                
CONECT 9423 9420 9424                                                           
CONECT 9424 9423 9425                                                           
CONECT 9425 9424 9426 9427                                                      
CONECT 9426 9425 9430                                                           
CONECT 9427 9425 9428 9429                                                      
CONECT 9428 9427 9474 9475                                                      
CONECT 9429 9427 9430                                                           
CONECT 9430 9426 9429 9431                                                      
CONECT 9431 9430 9432 9438                                                      
CONECT 9432 9431 9433 9434                                                      
CONECT 9433 9432                                                                
CONECT 9434 9432 9435                                                           
CONECT 9435 9434 9436 9437                                                      
CONECT 9436 9435                                                                
CONECT 9437 9435 9438 9439                                                      
CONECT 9438 9431 9437                                                           
CONECT 9439 9437                                                                
CONECT 9440 9442 9450 9458                                                      
CONECT 9441 9443 9451 9459                                                      
CONECT 9442 9440 9444 9452                                                      
CONECT 9443 9441 9445 9453                                                      
CONECT 9444 9442 9446                                                           
CONECT 9445 9443 9447                                                           
CONECT 9446 9444 9448 9454                                                      
CONECT 9447 9445 9449 9455                                                      
CONECT 9448 9446 9450 9456                                                      
CONECT 9449 9447 9451 9457                                                      
CONECT 9450 9440 9448                                                           
CONECT 9451 9441 9449                                                           
CONECT 9452 9442                                                                
CONECT 9453 9443                                                                
CONECT 9454 9446                                                                
CONECT 9455 9447                                                                
CONECT 9456 9448                                                                
CONECT 9457 9449                                                                
CONECT 9458 9440 9460 9468                                                      
CONECT 9459 9441 9461 9469                                                      
CONECT 9460 9458 9462                                                           
CONECT 9461 9459 9463                                                           
CONECT 9462 9460 9464 9466                                                      
CONECT 9463 9461 9465 9467                                                      
CONECT 9464 9462 9468 9470                                                      
CONECT 9465 9463 9469 9471                                                      
CONECT 9466 9462 9480                                                           
CONECT 9467 9463 9480                                                           
CONECT 9468 9458 9464                                                           
CONECT 9469 9459 9465                                                           
CONECT 9470 9464 9472                                                           
CONECT 9471 9465 9473                                                           
CONECT 9472 9470 9474                                                           
CONECT 9473 9471 9475                                                           
CONECT 9474 9428 9472 9476 9478                                                 
CONECT 9475 9428 9473 9477 9479                                                 
CONECT 9476 9474                                                                
CONECT 9477 9475                                                                
CONECT 9478 9474                                                                
CONECT 9479 9475                                                                
CONECT 9480 9466 9467                                                           
CONECT 9551 9564                                                                
CONECT 9564 9551 9565 9566 9567                                                 
CONECT 9565 9564                                                                
CONECT 9566 9564                                                                
CONECT 9567 9564 9568                                                           
CONECT 9568 9567 9569                                                           
CONECT 9569 9568 9570 9571                                                      
CONECT 9570 9569 9574                                                           
CONECT 9571 9569 9572 9573                                                      
CONECT 9572 9571 9584                                                           
CONECT 9573 9571 9574                                                           
CONECT 9574 9570 9573 9575                                                      
CONECT 9575 9574 9576 9582                                                      
CONECT 9576 9575 9577 9578                                                      
CONECT 9577 9576                                                                
CONECT 9578 9576 9579                                                           
CONECT 9579 9578 9580 9581                                                      
CONECT 9580 9579                                                                
CONECT 9581 9579 9582 9583                                                      
CONECT 9582 9575 9581                                                           
CONECT 9583 9581                                                                
CONECT 9584 9572                                                                
CONECT 9592 9606                                                                
CONECT 9606 9592 9607 9608 9609                                                 
CONECT 9607 9606                                                                
CONECT 9608 9606                                                                
CONECT 9609 9606 9610                                                           
CONECT 9610 9609 9611                                                           
CONECT 9611 9610 9612 9613                                                      
CONECT 9612 9611 9616                                                           
CONECT 9613 9611 9614 9615                                                      
CONECT 9614 9613 9626                                                           
CONECT 9615 9613 9616                                                           
CONECT 9616 9612 9615 9617                                                      
CONECT 9617 9616 9618 9624                                                      
CONECT 9618 9617 9619 9620                                                      
CONECT 9619 9618                                                                
CONECT 9620 9618 9621                                                           
CONECT 9621 9620 9622 9623                                                      
CONECT 9622 9621                                                                
CONECT 9623 9621 9624 9625                                                      
CONECT 9624 9617 9623                                                           
CONECT 9625 9623                                                                
CONECT 9626 9614                                                                
CONECT 9656 9687                                                                
CONECT 9670 9671 9675 9679                                                      
CONECT 9671 9670 9672 9676                                                      
CONECT 9672 9671 9673                                                           
CONECT 9673 9672 9674 9677                                                      
CONECT 9674 9673 9675 9678                                                      
CONECT 9675 9670 9674                                                           
CONECT 9676 9671                                                                
CONECT 9677 9673                                                                
CONECT 9678 9674                                                                
CONECT 9679 9670 9680 9684                                                      
CONECT 9680 9679 9681                                                           
CONECT 9681 9680 9682 9683                                                      
CONECT 9682 9681 9684 9685                                                      
CONECT 9683 9681 9707                                                           
CONECT 9684 9679 9682                                                           
CONECT 9685 9682 9686                                                           
CONECT 9686 9685 9687                                                           
CONECT 9687 9656 9686 9688 9689                                                 
CONECT 9688 9687                                                                
CONECT 9689 9687                                                                
CONECT 9690 9691 9695 9699                                                      
CONECT 9691 9690 9692 9696                                                      
CONECT 9692 9691 9693                                                           
CONECT 9693 9692 9694 9697                                                      
CONECT 9694 9693 9695 9698                                                      
CONECT 9695 9690 9694                                                           
CONECT 9696 9691                                                                
CONECT 9697 9693                                                                
CONECT 9698 9694                                                                
CONECT 9699 9690 9700 9704                                                      
CONECT 9700 9699 9701                                                           
CONECT 9701 9700 9702 9703                                                      
CONECT 9702 9701 9704 9705                                                      
CONECT 9703 9701 9710                                                           
CONECT 9704 9699 9702                                                           
CONECT 9705 9702 9706                                                           
CONECT 9706 9705 9707                                                           
CONECT 9707 9683 9706 9708 9709                                                 
CONECT 9708 9707                                                                
CONECT 9709 9707                                                                
CONECT 9710 9703                                                                
CONECT 9732 9733 9734 9735 9739                                                 
CONECT 9733 9732                                                                
CONECT 9734 9732                                                                
CONECT 9735 9732 9762                                                           
CONECT 9736 9737 9738 9739 9743                                                 
CONECT 9737 9736 9762                                                           
CONECT 9738 9736                                                                
CONECT 9739 9732 9736                                                           
CONECT 9740 9741 9742 9743 9744                                                 
CONECT 9741 9740 9762                                                           
CONECT 9742 9740                                                                
CONECT 9743 9736 9740                                                           
CONECT 9744 9740 9745                                                           
CONECT 9745 9744 9746                                                           
CONECT 9746 9745 9747 9748                                                      
CONECT 9747 9746 9751                                                           
CONECT 9748 9746 9749 9750                                                      
CONECT 9749 9748                                                                
CONECT 9750 9748 9751                                                           
CONECT 9751 9747 9750 9752                                                      
CONECT 9752 9751 9753 9761                                                      
CONECT 9753 9752 9754                                                           
CONECT 9754 9753 9755                                                           
CONECT 9755 9754 9756 9761                                                      
CONECT 9756 9755 9757 9758                                                      
CONECT 9757 9756                                                                
CONECT 9758 9756 9759                                                           
CONECT 9759 9758 9760                                                           
CONECT 9760 9759 9761                                                           
CONECT 9761 9752 9755 9760                                                      
CONECT 9762 4775 4780 6667 9735                                                 
CONECT 9762 9737 9741                                                           
CONECT 9763 4972 4989 5002 5738                                                 
CONECT 9764 9765 9766                                                           
CONECT 9765 9764 9767                                                           
CONECT 9766 9764                                                                
CONECT 9767 9765 9768 9769 9770                                                 
CONECT 9768 9767                                                                
CONECT 9769 9767                                                                
CONECT 9770 9767                                                                
CONECT 9771 9772 9773                                                           
CONECT 9772 9771 9774                                                           
CONECT 9773 9771                                                                
CONECT 9774 9772 9775 9776 9777                                                 
CONECT 9775 9774                                                                
CONECT 9776 9774                                                                
CONECT 9777 9774                                                                
MASTER      496    0   21   46   44    0   12    610215    3  365   98          
END                                                                             
`;
