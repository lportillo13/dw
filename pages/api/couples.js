import { supabase } from '../../lib/supabase';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      session_code,
      fecha_boda,
      lugar_ceremonia,
      hora_ceremonia,
      misma_ubicacion,
      lugar_recepcion,
      hora_recepcion,
      fecha_entrega_propuesta,
      nombre_novia,
      nombre_novio,
      nombre_orden,
      correo_novios,
      telefono_novios,
      pais,
      wedding_planner,
      color_primario,
      color_secundario,
      link_diseño,
      texto_biblico,
      cancion_web,
      comentarios,
      link_ceremonia,
      link_recepcion,
      codigo_vestimenta,
      recomendaciones_vestimenta,
      link_pinterest_vestimenta,
      restricciones_vestimenta,
      tipo_regalo,
      detalle_transferencia,
      tienda_lista_regalos,
      detalle_otro_regalo,
      texto_regalo,
      niños,
      fecha_confirmacion,
      restriccion_alimenticia,
      espacios_invitacion,
      ...rest
    } = req.body;

    const { data, error } = await supabase
      .from('couples')
      .insert({
        session_code,
        nombre_de_la_novia: nombre_novia,
        nombre_del_novio: nombre_novio,
        correo_electronico: correo_novios,
        telefono: telefono_novios,
        fecha_de_la_boda: fecha_boda,
        tipo_de_paquete: rest.tipo_de_paquete || null,
        espacios_invitados: espacios_invitacion,
        color_titulos: color_primario,
        color_fondo: color_secundario,
        lugar_de_la_ceremonia: lugar_ceremonia,
        hora_de_la_ceremonia: hora_ceremonia,
        lugar_de_la_recepcion: lugar_recepcion,
        hora_de_la_recepcion: hora_recepcion,
        mapa_de_la_ceremonia: link_ceremonia,
        mapa_de_la_recepcion: link_recepcion,
        tipo_de_vestimenta: codigo_vestimenta,
        tipo_de_regalo: tipo_regalo,
        detalle_transferencia,
        tienda_lista_regalos,
        texto_romantico: texto_biblico,
        youtube_music: cancion_web,
        info_extra: comentarios,
        titulo_regalos: texto_regalo,
        fecha_de_confirmacion: fecha_confirmacion,
        solo_para_adultos: niños === 'No',
        activar_comida_en_formulario: restriccion_alimenticia === 'Sí',
        data: rest
      })
      .select('couple_id')
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(201).json({ couple_id: data.couple_id });
  }

  res.setHeader('Allow', 'POST');
  res.status(405).end('Method Not Allowed');
}
