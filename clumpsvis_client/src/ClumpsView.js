import React, { Component } from 'react';
import ProteinViewer from './ProteinViewer'
import DomainViewer from './DomainViewer'
import SequenceViewer from './SequenceViewer'
import ClumpsAppBar from './ClumpsAppBar'
import Paper from 'material-ui/Paper';
import Section from './Section';


let sequence = 'MSLRSGGRRRADPGADGEASRDDGATSSVSALKRLERSQWTDKMDLRFGFERLKEPGEKTGWLINMHPTEILDEDKRLGSAVDYYFIQDDGSRFKVALPYKPYFYIATRKGCEREVSSFLSKKFQGKIAKVETVPKEDLDLPNHLVGLKRNYIRLSFHTVEDLVKVRKEISPAVKKNREQDHASDAYTALLSSVLQRGGVITDEEETSKKIADQLDNIVDMREYDVPYHIRLSIDLKIHVAHWYNVRYRGNAFPVEITRRDDLVERPDPVVLAFDIETTKLPLKFPDAETDQIMMISYMIDGQGYLITNREIVSEDIEDFEFTPKPEYEGPFCVFNEPDEAHLIQRWFEHVQETKPTIMVTYNGDFFDWPFVEARAAVHGLSMQQEIGFQKDSQGEYKAPQCIHMDCLRWVKRDSYLPVGSHNLKAAAKAKLGYDPVELDPEDMCRMATEQPQTLATYSVSDAVATYYLYMKYVHPFIFALCTIIPMEPDEVLRKGSGTLCEALLMVQAFHANIIFPNKQEQEFNKLTDDGHVLDSETYVGGHVEALESGVFRSDIPCRFRMNPAAFDFLLQRVEKTLRHALEEEEKVPVEQVTNFEEVCDEIKSKLASLKDVPSRIECPLIYHLDVGAMYPNIILTNRLQPSAMVDEATCAACDFNKPGANCQRKMAWQWRGEFMPASRSEYHRIQHQLESEKFPPLFPEGPARAFHELSREEQAKYEKRRLADYCRKAYKKIHITKVEERLTTICQRENSFYVDTVRAFRDRRYEFKGLHKVWKKKLSAAVEVGDAAEVKRCKNMEVLYDSLQLAHKCILNSFYGYVMRKGARWYSMEMAGIVCFTGANIITQARELIEQIGRPLELDTDGIWCVLPNSFPENFVFKTTNVKKPKVTISYPGAMLNIMVKEGFTNDQYQELAEPSSLTYVTRSENSIFFEVDGPYLAMILPASKEEGKKLKKRYAVFNEDGSLAELKGFEVKRRGELQLIKIFQSSVFEAFLKGSTLEEVYGSVAKVADYWLDVLYSKAANMPDSELFELISENRSMSRKLEDYGEQKSTSISTAKRLAEFLGDQMVKDAGLSCRYIISRKPEGSPVTERAIPLAIFQAEPTVRKHFLRKWLKSSSLQDFDIRAILDWDYYIERLGSAIQKIITIPAALQQVKNPVPRVKHPDWLHKKLLEKNDVYKQKKISELFTLEGRRQVTMAEASEDSPRPSAPDMEDFGLVKLPHPAAPVTVKRKRVLWESQEESQDLTPTVPWQEILGQPPALGTSQEEWLVWLRFHKKKWQLQARQRLARRKRQRLESAEGVLRPGAIRDGPATGLGSFLRRTARSILDLPWQIVQISETSQAGLFRLWALVGSDLHCIRLSIPRVFYVNQRVAKAEEGASYRKVNRVLPRSNMVYNLYEYSVPEDMYQEHINEINAELSAPDIEGVYETQVPLLFRALVHLGCVCVVNKQLVRHLSGWEAETFALEHLEMRSLAQFSYLEPGSIRHIYLYHHAQAHKALFGIFIPSQRRASVFVLDTVRSNQMPSLGALYSAEHGLLLEKVGPELLPPPKHTFEVRAETDLKTICRAIQRFLLAYKEERRGPTLIAVQSSWELKRLASEIPVLEEFPLVPICVADKINYGVLDWQRHGARRMIRHYLNLDTCLSQAFEMSRYFHIPIGNLPEDISTFGSDLFFARHLQRHNHLLWLSPTARPDLGGKEADDNCLVMEFDDQATVEINSSGCYSTVCVELDLQNLAVNTILQSHHVNDMEGADSMGISFDVIQQASLEDMITGGQAASAPASYDETALCSNTFRILKSMVVGWVKEITQYHNIYADNQVMHFYRWLRSPSSLLHDPALHRTLHNMMKKLFLQLIAEFKRLGSSVIYANFNRIILCTKKRRVEDAIAYVEYITSSIHSKETFHSLTISFSRCWEFLLWMDPSNYGGIKGKVSSRIHCGLQDSQKAGGAEDEQENEDDEEERDGEEEEEAEESNVEDLLENNWNILQFLPQAASCQNYFLMIVSAYIVAVYHCMKDGLRRSAPGSTPVRRRGASQLSQEAEGAVGALPGMITFSQDYVANELTQSFFTITQKIQKKVTGSRNSTELSEMFPVLPGSHLLLNNPALEFIKYVCKVLSLDTNITNQVNKLNRDLLRLVDVGEFSEEAQFRDPCRSYVLPEVICRSCNFCRDLDLCKDSSFSEDGAVLPQWLCSNCQAPYDSSAIEMTLVEVLQKKLMAFTLQDLVCLKCRGVKETSMPVYCSCAGDFALTIHTQVFMEQIGIFRNIAQHYGMSYLLETLEWLLQKNPQLGH';



class ClumpsView extends Component {
  constructor(props){
		super(props)

  }
  componentDidMount(){
  }
  render() {
  	return(
        <div>
            <ClumpsAppBar />
            
            <DomainViewer />
            <Section title="sequence">
              <SequenceViewer sequence={sequence}/>
            </Section>
        </div>
  		)
  }
}

export default ClumpsView;