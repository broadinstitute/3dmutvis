import React, { Component } from 'react';
import ProteinViewer from './ProteinViewer'
import DomainViewer from './DomainViewer'
import SequenceViewer from './SequenceViewer'
import ClumpsAppBar from './ClumpsAppBar'
import Paper from 'material-ui/Paper';
import Section from './Section';
import ReactSequenceViewer from 'react-sequence-viewer';
import LollipopChart from './LollipopChart';

let sequence = 'MSLRSGGRRRADPGADGEASRDDGATSSVSALKRLERSQWTDKMDLRFGFERLKEPGEKTGWLINMHPTEILDEDKRLGSAVDYYFIQDDGSRFKVALPYKPYFYIATRKGCEREVSSFLSKKFQGKIAKVETVPKEDLDLPNHLVGLKRNYIRLSFHTVEDLVKVRKEISPAVKKNREQDHASDAYTALLSSVLQRGGVITDEEETSKKIADQLDNIVDMREYDVPYHIRLSIDLKIHVAHWYNVRYRGNAFPVEITRRDDLVERPDPVVLAFDIETTKLPLKFPDAETDQIMMISYMIDGQGYLITNREIVSEDIEDFEFTPKPEYEGPFCVFNEPDEAHLIQRWFEHVQETKPTIMVTYNGDFFDWPFVEARAAVHGLSMQQEIGFQKDSQGEYKAPQCIHMDCLRWVKRDSYLPVGSHNLKAAAKAKLGYDPVELDPEDMCRMATEQPQTLATYSVSDAVATYYLYMKYVHPFIFALCTIIPMEPDEVLRKGSGTLCEALLMVQAFHANIIFPNKQEQEFNKLTDDGHVLDSETYVGGHVEALESGVFRSDIPCRFRMNPAAFDFLLQRVEKTLRHALEEEEKVPVEQVTNFEEVCDEIKSKLASLKDVPSRIECPLIYHLDVGAMYPNIILTNRLQPSAMVDEATCAACDFNKPGANCQRKMAWQWRGEFMPASRSEYHRIQHQLESEKFPPLFPEGPARAFHELSREEQAKYEKRRLADYCRKAYKKIHITKVEERLTTICQRENSFYVDTVRAFRDRRYEFKGLHKVWKKKLSAAVEVGDAAEVKRCKNMEVLYDSLQLAHKCILNSFYGYVMRKGARWYSMEMAGIVCFTGANIITQARELIEQIGRPLELDTDGIWCVLPNSFPENFVFKTTNVKKPKVTISYPGAMLNIMVKEGFTNDQYQELAEPSSLTYVTRSENSIFFEVDGPYLAMILPASKEEGKKLKKRYAVFNEDGSLAELKGFEVKRRGELQLIKIFQSSVFEAFLKGSTLEEVYGSVAKVADYWLDVLYSKAANMPDSELFELISENRSMSRKLEDYGEQKSTSISTAKRLAEFLGDQMVKDAGLSCRYIISRKPEGSPVTERAIPLAIFQAEPTVRKHFLRKWLKSSSLQDFDIRAILDWDYYIERLGSAIQKIITIPAALQQVKNPVPRVKHPDWLHKKLLEKNDVYKQKKISELFTLEGRRQVTMAEASEDSPRPSAPDMEDFGLVKLPHPAAPVTVKRKRVLWESQEESQDLTPTVPWQEILGQPPALGTSQEEWLVWLRFHKKKWQLQARQRLARRKRQRLESAEGVLRPGAIRDGPATGLGSFLRRTARSILDLPWQIVQISETSQAGLFRLWALVGSDLHCIRLSIPRVFYVNQRVAKAEEGASYRKVNRVLPRSNMVYNLYEYSVPEDMYQEHINEINAELSAPDIEGVYETQVPLLFRALVHLGCVCVVNKQLVRHLSGWEAETFALEHLEMRSLAQFSYLEPGSIRHIYLYHHAQAHKALFGIFIPSQRRASVFVLDTVRSNQMPSLGALYSAEHGLLLEKVGPELLPPPKHTFEVRAETDLKTICRAIQRFLLAYKEERRGPTLIAVQSSWELKRLASEIPVLEEFPLVPICVADKINYGVLDWQRHGARRMIRHYLNLDTCLSQAFEMSRYFHIPIGNLPEDISTFGSDLFFARHLQRHNHLLWLSPTARPDLGGKEADDNCLVMEFDDQATVEINSSGCYSTVCVELDLQNLAVNTILQSHHVNDMEGADSMGISFDVIQQASLEDMITGGQAASAPASYDETALCSNTFRILKSMVVGWVKEITQYHNIYADNQVMHFYRWLRSPSSLLHDPALHRTLHNMMKKLFLQLIAEFKRLGSSVIYANFNRIILCTKKRRVEDAIAYVEYITSSIHSKETFHSLTISFSRCWEFLLWMDPSNYGGIKGKVSSRIHCGLQDSQKAGGAEDEQENEDDEEERDGEEEEEAEESNVEDLLENNWNILQFLPQAASCQNYFLMIVSAYIVAVYHCMKDGLRRSAPGSTPVRRRGASQLSQEAEGAVGALPGMITFSQDYVANELTQSFFTITQKIQKKVTGSRNSTELSEMFPVLPGSHLLLNNPALEFIKYVCKVLSLDTNITNQVNKLNRDLLRLVDVGEFSEEAQFRDPCRSYVLPEVICRSCNFCRDLDLCKDSSFSEDGAVLPQWLCSNCQAPYDSSAIEMTLVEVLQKKLMAFTLQDLVCLKCRGVKETSMPVYCSCAGDFALTIHTQVFMEQIGIFRNIAQHYGMSYLLETLEWLLQKNPQLGH';

const mySeq = 'MALWMRLLPL LALLALWGPDPAAAFVNQHLCG';
const options = {
    showLineNumbers: true,
    toolbar: false,
    search: true,
    badge: false,
    charsPerLine:130,
    title: '',
    selection: [10,110]
};
 
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
            <Section title="structure">
              <ProteinViewer />
            </Section>
            <DomainViewer />
            <Section title="mutations">
              <LollipopChart sequence={sequence} {...options} />
            </Section>

            <Section title="sequence">
              <ReactSequenceViewer sequence={sequence} {...options} />
            </Section>
        </div>
  		)
  }
}

export default ClumpsView;