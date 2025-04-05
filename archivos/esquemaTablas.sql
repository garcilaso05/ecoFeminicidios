-- ENUM: CCAA
CREATE TYPE CCAA AS ENUM ('Andalucía', 'Aragón', 'Asturias', 'Cantabria', 'Castilla la Mancha', 'Castilla y León', 'Cataluña', 'Extremadura', 'Galicia', 'Islas Baleares', 'Canarias', 'La Rioja', 'Madrid', 'Murcia', 'Navarra', 'País Vasco', 'Valencia', 'Ceuta', 'Melilla');

-- ENUM: PROVINCIAS
CREATE TYPE PROVINCIAS AS ENUM ('A Coruña', 'Alava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Avila', 'Badajoz', 'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'Cuenca', 'Girona', 'Granada', 'Guadalajara', 'Gipuzkoa', 'Huelva', 'Huesca', 'Jaén', 'La Rioja', 'León', 'Lleida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Ourense', 'Palencia', 'Las Palmas', 'Pontevedra', 'Salamanca', 'Santa Cruz de Tenerife', 'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza', 'Illes Balears');

-- ENUM: EDAD
CREATE TYPE EDAD AS ENUM ('16-17', '18-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-84', '>=85');

-- ENUM: PAIS
CREATE TYPE PAIS AS ENUM ('España', 'Otro país');

-- ENUM: SUICIDIOS
CREATE TYPE SUICIDIOS AS ENUM ('No hubo tentativa', 'Tentativa no consumada', 'Suicidio consumado');

-- ENUM: SITUACION_PAREJA
CREATE TYPE SITUACION_PAREJA AS ENUM ('Pareja en fase de separación', 'Pareja', 'Expareja');

-- ENUM: CONVIVENCIA
CREATE TYPE CONVIVENCIA AS ENUM ('Sí', 'No', 'No consta');

-- ENUM: RELACION_PARENTAL
CREATE TYPE RELACION_PARENTAL AS ENUM ('Hijo', 'Hija', 'Hijastro', 'Hijastra', 'Conviviente', 'null');

-- ENUM: DISCAPACIDAD
CREATE TYPE DISCAPACIDAD AS ENUM ('null', '1%-24%', '25%-49%', '50%-74%', '75%-100%');

-- ENUM: ESTUDIOS_FINALIZADOS
CREATE TYPE ESTUDIOS_FINALIZADOS AS ENUM ('Sin estudios', 'Primarios', 'Bachiller o equivalente FP', 'Universitarios sin finalizar', 'Universitarios finalizados', 'Otros estudios', 'null');

-- ENUM: ESTRUCTURA_FAMILIAR
CREATE TYPE ESTRUCTURA_FAMILIAR AS ENUM ('Monoparental', 'Extensa', 'Biparental', 'Reconstruida o Completa', 'Acogida', 'Adoptiva', 'null');

-- ENUM: TIPO_ACOGIDA_MADRE_INMEDIATA
CREATE TYPE TIPO_ACOGIDA_MADRE_INMEDIATA AS ENUM ('Familiares próximos', 'Administración', 'null');

-- ENUM: TIPO_ACOGIDA_MADRE_DEFINITIVA
CREATE TYPE TIPO_ACOGIDA_MADRE_DEFINITIVA AS ENUM ('Su hogar', 'Familiar próximo', 'Administración', 'Personas próximas', 'null');

-- ENUM: SEPARACION_OTRAS_REDES
CREATE TYPE SEPARACION_OTRAS_REDES AS ENUM ('null', 'Familiares próximos', 'Amigos', 'Vecindario', 'Lugar de residencia', 'Cambio de trabajo');

-- ENUM: SITUACION_AGRESOR_INMEDIATO
CREATE TYPE SITUACION_AGRESOR_INMEDIATO AS ENUM ('Suicidio', 'Fugado', 'Detenido y medidas cautelares', 'null');

-- ENUM: SITUACIO_ACTUALITAT
CREATE TYPE SITUACIO_ACTUALITAT AS ENUM ('Fugat', 'Pendent de judici en presó provisional', 'Pendent de judici en llibertat provisional', 'Pendent de judici en llibertat provisional', 'Condemnat i complint condemna de presó', 'Condemnat i classificat en tercer grau penitenciari', 'Condemnat i en llibertat condicional', 'Condemnat però ja en llibertat per compliment de la pena', 'En llibertat amb prohibició de aproximació i comunicació i residència', 'Absolt del delicte', 'Mort', 'null');

-- TABLE: ECOVICTIMA
CREATE TABLE ECOVICTIMA (
  ID STRING PRIMARY KEY,
  Fecha DATE,
  CCAA CCAA CHECK(CCAA IN ('Andalucía', 'Aragón', 'Asturias', 'Cantabria', 'Castilla la Mancha', 'Castilla y León', 'Cataluña', 'Extremadura', 'Galicia', 'Islas Baleares', 'Canarias', 'La Rioja', 'Madrid', 'Murcia', 'Navarra', 'País Vasco', 'Valencia', 'Ceuta', 'Melilla')),
  Provincia PROVINCIAS CHECK(Provincia IN ('A Coruña', 'Alava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Avila', 'Badajoz', 'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'Cuenca', 'Girona', 'Granada', 'Guadalajara', 'Gipuzkoa', 'Huelva', 'Huesca', 'Jaén', 'La Rioja', 'León', 'Lleida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Ourense', 'Palencia', 'Las Palmas', 'Pontevedra', 'Salamanca', 'Santa Cruz de Tenerife', 'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza', 'Illes Balears')),
  TramoEdadVictima EDAD CHECK(TramoEdadVictima IN ('16-17', '18-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-84', '>=85')),
  PaisNacimientoVictima PAIS CHECK(PaisNacimientoVictima IN ('España', 'Otro país')),
  TramoEdadAgresor EDAD CHECK(TramoEdadAgresor IN ('16-17', '18-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-84', '>=85')),
  PaisNacimientoAgresor PAIS CHECK(PaisNacimientoAgresor IN ('España', 'Otro país')),
  Suicidio SUICIDIOS CHECK(Suicidio IN ('No hubo tentativa', 'Tentativa no consumada', 'Suicidio consumado')),
  SituacionDeLaPareja SITUACION_PAREJA CHECK(SituacionDeLaPareja IN ('Pareja en fase de separación', 'Pareja', 'Expareja')),
  Convivencia CONVIVENCIA CHECK(Convivencia IN ('Sí', 'No', 'No consta')),
  HabiaDenuncia BOOLEAN,
  NumeroHijos INT,
  EdadMenor INT,
  PaisNacimientoMenor PAIS CHECK(PaisNacimientoMenor IN ('España', 'Otro país')),
  RelacionParentalConHuerfano RELACION_PARENTAL CHECK(RelacionParentalConHuerfano IN ('Hijo', 'Hija', 'Hijastro', 'Hijastra', 'Conviviente', 'null')),
  DiscapacidadDelMenor DISCAPACIDAD CHECK(DiscapacidadDelMenor IN ('null', '1%-24%', '25%-49%', '50%-74%', '75%-100%')),
  DiscapacidadDeLaMadre DISCAPACIDAD CHECK(DiscapacidadDeLaMadre IN ('null', '1%-24%', '25%-49%', '50%-74%', '75%-100%')),
  EstudiosFinalizadosMadre ESTUDIOS_FINALIZADOS CHECK(EstudiosFinalizadosMadre IN ('Sin estudios', 'Primarios', 'Bachiller o equivalente FP', 'Universitarios sin finalizar', 'Universitarios finalizados', 'Otros estudios', 'null')),
  ProfesionMadre STRING,
  ProfesionAgresor STRING,
  EstructuraFamiliar ESTRUCTURA_FAMILIAR CHECK(EstructuraFamiliar IN ('Monoparental', 'Extensa', 'Biparental', 'Reconstruida o Completa', 'Acogida', 'Adoptiva', 'null')),
  AcogidaInmediata TIPO_ACOGIDA_MADRE_INMEDIATA CHECK(AcogidaInmediata IN ('Familiares próximos', 'Administración', 'null')),
  AcogidaDefinitiva TIPO_ACOGIDA_MADRE_DEFINITIVA CHECK(AcogidaDefinitiva IN ('Su hogar', 'Familiar próximo', 'Administración', 'Personas próximas', 'null')),
  SeparacionDeHermanos BOOLEAN,
  SeparacionDeOtrasRedes SEPARACION_OTRAS_REDES CHECK(SeparacionDeOtrasRedes IN ('null', 'Familiares próximos', 'Amigos', 'Vecindario', 'Lugar de residencia', 'Cambio de trabajo')),
  SituacionAgresorInmediato SITUACION_AGRESOR_INMEDIATO CHECK(SituacionAgresorInmediato IN ('Suicidio', 'Fugado', 'Detenido y medidas cautelares', 'null')),
  SituacionActualitat SITUACIO_ACTUALITAT CHECK(SituacionActualitat IN ('Fugat', 'Pendent de judici en presó provisional', 'Pendent de judici en llibertat provisional', 'Pendent de judici en llibertat provisional', 'Condemnat i complint condemna de presó', 'Condemnat i classificat en tercer grau penitenciari', 'Condemnat i en llibertat condicional', 'Condemnat però ja en llibertat per compliment de la pena', 'En llibertat amb prohibició de aproximació i comunicació i residència', 'Absolt del delicte', 'Mort', 'null'))
);

