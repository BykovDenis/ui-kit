import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, {useState} from 'react';

import Select from  './src';
import ISelect from './types/iselect';
import IOption from './types/ioption';



export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    disabled: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
    fontSize: { control: { type: 'select', options: [ 10, 12, 14, 16] }  },
    error: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
    variant: { control: { type: 'select', options: [ 'normal', 'outlined', 'text' ]}, defaultValue: 'outline'   },
    isNotClearable: { control: { type: 'radio', options: [ true, false ] }, defaultValue: true  },
  },
  args: {
    children: 'Label',
  },
} as ComponentMeta<typeof Select>;

const ThemeDarkTemplate: ComponentStory<typeof Select> = (args: ISelect) => {

  const [ value, setValue ] = useState<string>('compoundIndex');

  const elementsState: Array<string> =  ['compoundIndex', 'compoundIndexAndSpread', 'compoundSpread', 'notCompound'];

  const onInputChange = (option: IOption) => {
    setValue(option);
    console.log(option.value?.toString());
  }

  const onInputRemove = () => {
    setValue(null);
    console.log('');
  }



  return <>
  <div style={{ width: '220px' }}>
    <Select
      {...args}
      onChange={onInputChange}
      onRemove={onInputRemove}
      name="select-custom"
      id="select"
      activeElement={value}
      elements={elementsState}
      label="Some label"
    >{args.children}</Select>
  </div>
  </>;
}

const ThemeLightTemplate: ComponentStory<typeof Select> = (args: ISelect) => {

  const [ value, setValue ] = useState<string>('ELKTE');

  const elementsState: Array<string> = ["08468_W1G","1AAEH","AAAAA","AAAAM","AAAXG","AAAZZ","AADKO","AAGRO","AAKUB","AAVIA","ABESS","ABLGK","ABMPL","ABRAU","ABRRR","ABSLT","ABSOT","ABZLE","ABZNO","ABZON","ACVIL","ADJEN","ADMOO","ADRCH","ADSIN","AENMS","AERCI","AERFT","AERTE","AEZAV","AFLT","AGAMT","AGATC","AGATT","AGEKK","AGEXP","AGFAT","AGFTR","AGHAL","AGIMP","AGIND","AGKMO","AGMAN","AGMOL","AGOKK","AGPLU","AGPOB","AGPVE","AGRAD","AGRAN","AGRAS","AGRBE","AGRCP","AGRDE","AGREN","AGRHI","AGRHM","AGRIR","AGRIZ","AGRKH","AGRKO","AGRKT","AGRLI","AGRLN","AGRMA","AGRNE","AGRNO","AGRNV","AGROF","AGROG","AGROK","AGROX","AGROZ","AGRRA","AGRRS","AGRSI","AGRSS","AGRTA","AGRTE","AGRTR","AGRUK","AGRUP","AGRZA","AGSMR","AGTAM","AGTEK","AGTRM","AGTSS","AGZUG","AHDAG","AKLPL","AKMAA","AKMHH","AKOMZ","AKPTR","AKRAO","AKROO","AKRSS","AKRYU","AKSAK","AKSMA","AKSOO","AKVRM","AKVSZ","ALANS","ALBNR","ALBON","ALEKN","ALEKT","ALFAA","ALFRA","ALFSS","ALFSZ","ALFTE","ALFTR","ALGOO","ALIDI","ALIGT","ALIOT","ALKKM","ALKOM","ALKOO","ALKOP","ALKPR","ALKRR","ALKSK","ALLER","ALLTT","ALLYA","ALMAA","ALMAH","ALMAR","ALMRR","ALNEF","ALNPZ","ALNSP","ALREG","ALSKM","ALTFR","ALTGZ","ALTRA","ALUHH","ALXBM","ALYEN","ALYUG","AMKFA","AMLRZ","AMMSH","AMPRT","AMRMA","AMRPR","AMRZT","AMTUG","AMURG","ANANS","ANDKO","ANDRR","ANGGG","ANGRY","ANKRR","ANKUV","ANNNN","ANNPZ","ANSSS","ANTOO","ANTRA","ANUUK","ANZMA","AOALM","AOBIO","AODSK","AOFIN","AOINA","AORTK","AOSKK","AOVSP","APEFI","APEKC","APGRO","APKBB","APKPR","APKTM","APKTP","APLER","APOAV","APPPP","APROM","APRTG","AQUAM","AQURI","ARBIC","ARENA","ARIEL","ARKKK","ARKTM","ARKTR","ARMAA","ARMCP","ARNEV","ARRRK","ARRTE","ARSKA","ARTAA","ARTIF","ARTIR","ARTIS","ARTLL","ASCON","ASENR","ASEXS","ASHAN","ASIBK","ASINT","ASKDI","ASKKK","ASKON","ASKVE","ASLUT","ASMLT","ASPEK","ASRTC","ASTMR","ASTOI","ASTOS","ASTTT","ATAKO","ATIAZ","ATIKM","ATKAU","ATLGB","ATLKR","ATLOO","ATMEN","ATMOS","ATOMR","ATOSM","ATTER","ATTOO","AURAA","AUTOA","AUTOM","AUTSH","AUTST","AVAAA","AVAAN","AVAGK","AVAGV","AVARD","AVDKO","AVEFA","AVENY","AVEXP","AVGPR","AVGUT","AVILN","AVING","AVISR","AVLNM","AVMOT","AVNNT","AVPLU","AVPRS","AVSEV","AVSIB","AVSNB","AVSTR","AVTKO","AVTMH","AVTPO","AVTPP","AVTSP","AVTSS","AVTST","AVTTT","AVTZV","AVVER","AVVVV","AXIOO","AYACS","AYBAR","AZBKS","AZIAA","AZIMM","AZIMO","AZLLL","AZOTT","AZOTV","AZOVT","AZSHM","BADDD","BAKAT","BALLT","BALOM","BALOS","BANKS","BAREC","BARNA","BARRR","BARSL","BASBE","BASHP","BASKT","BASMK","BASSN","BATBB","BATEH","BAUIN","BAUTE","BAVAV","BAYTD","BAZTR","BBBBB","BBBBN","BBBHH","BBBRR","BBCCT","BBERG","BBLPR","BBPPP","BBRGS","BBTFF","BBVKT","BBYKT","BCRAV","BCSMN","BCTVE","BDACH","BDOMO","BEATT","BEGMO","BELDA","BELKA","BELKM","BELMO","BELOR","BELZD","BENKH","BERRZ","BERTO","BESPR","BESTO","BETAO","BETEN","BETLO","BFAII","BGKFF","BGMZR","BICEL","BIDST","BIFZA","BIGSH","BIKZZ","BILIZ","BILMT","BINAG","BINZM","BIOTN","BIOVE","BIPLS","BIRTR","BITIN","BITTT","BIYSK","BIZCI","BKALP","BKCEN","BKROS","BKSBR","BKSNN","BKSUK","BLAVE","BLGGG","BLGR","BLMSN","BLSTN","BLTFR","BLTKT","BLTTT","BLUKR","BMKST","BMPKK","BMSGR","BMZUK","BNMOO","BNSGR","BODEG","BOFAR","BOGZA","BOLMO","BOLOG","BOOMS","BORAL","BORJM","BORSS","BOSHE","BOTOV","BOTRK","BOTTL","BOVID","BPIVZ","BRASO","BRBEN","BRENT","BRIDR","BRMOL","BROTD","BRUKS","BRUSN","BRVIN","BSHKM","BSHNG","BSHPU","BSNSF","BSTIN","BTSPC","BTSTK","BUMFA","BUNHL","BURRG","BURSA","BURTR","BUSST","BYUZO","BZISS","CABEL","CAMAZ","CARAW","CAUSS","CCBPS","CCEEN","CCENN","CDIST","CEKRA","CENUP","CEPMK","CERST","CESIS","CESOY","CETER","CGKHO","CHAIK","CHAPS","CHAPV","CHARA","CHCZI","CHECU","CHEHO","CHELI","CHELMEN","CHEMP","CHERO","CHERR","CHETD","CHETZ","CHIMZ","CHMKO","CHSZO","CHUKT","CHUKZ","CHZPN","CHZSM","CIBKA","CIFRA","CKKTT","CNABB","CNRTK","CODIS","COMDK","COMDZ","CONOB","CONTN","CPETR","CPRRR","CRFTS","CRICT","CRUSS","CSKAT","CTKEV","CTMSR","CUEGR","CUUMM","CVA_PRICING","CVETA","DABBK","DALNF","DALPS","DAMBU","DAMET","DANAL","DANAN","DARRR","DARSS","DARYA","DAURI","DAVLK","DBAZZ","DBGIS","DDDDD","DEDKO","DEKOD","DELLL","DELLT","DELMZ","DELRU","DELTH","DEPEL","DEREV","DERUS","DESDE","DESNN","DESSS","DETSK","DEVCC","DEVNM","DFREE","DHHHH","DIDII","DIEKS","DIFFU","DIIWI","DILIN","DINGK","DINPE","DIONA","DIPPO","DIPSO","DISST","DIZEX","DKDKD","DMEIN","DMHZD","DMKRS","DMNDH","DMNTA","DMSAO","DMSIR","DMSOO","DNKZA","DNTPT","DNVZH","DOBLB","DOBSZ","DOCCT","DOCIN","DOMDO","DOMEI","DOMMA","DOMSS","DONAL","DONMM","DONSC","DONUG","DOOOK","DOOOR","DORAA","DORNG","DORTR","DPPLA","DRAFT","DRLDR","DROLN","DRUZA","DRUZB","DTEKH","DTMIR","DUBSY","DUGLK","DUKAR","DUKTT","DVARS","DVBAP","DVBAR","DVBDD","DVBLL","DVBMM","DVKON","DVTRA","DXZZZ","DZGUU","EASTV","EAUFA","ECFAR","ECHON","ECNVS","ECNVV","ECODO","ECONI","ECOSH","ECOTO","ECOVI","EDEMO","EDLYS","EEELL","EEGLE","EELMA","EFECT","EFIRN","EGOIN","EGREV","EIPIT","EKAME","EKCHR","EKHOL","EKIPC","EKKCI","EKKKK","EKLIZ","EKOOL","EKOSN","EKSLI","EKSPD","EKSRU","EKSSM","EKTON","EKTOO","ELABU","ELANA","ELCON","ELEKE","ELEME","ELETE","ELEVA","ELEVK","ELEVV","ELFAN","ELITT","ELIZM","ELIZO","ELKAM","ELKAT","ELKAV","ELKOR","ELKRE","ELKTE","ELMAS","ELMOT","ELOTV","ELPZA","ELSEM","ELSYY","ELTES","ELTEX","ELTOO","ELURM"]

  const onInputChange = (option: IOption) => {
    setValue(option);
    console.log(option.value?.toString());
  }

  const onInputRemove = () => {
    setValue(null);
    console.log('');
  }

  

  return <>
    <div style={{ width: '220px' }}>
      <Select
        {...args}
        onChange={onInputChange}
        onRemove={onInputRemove}
        name="select-custom"
        id="select"
        activeElement={value}
        elements={elementsState}
        label="Some label"
      >{args.children}</Select>
    </div>
  </>;
}

export const DarkThemeList = ThemeDarkTemplate.bind({});
export const LightThemeList = ThemeLightTemplate.bind({});

